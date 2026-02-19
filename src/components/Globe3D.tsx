import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

import { useTheme } from '../context/ThemeContext';

// Configuration for cities with precise coordinates and unique colors
const CITIES: Record<string, { lat: number; lon: number; label: string; color: number; labelOffset?: { x: number; y: number } }> = {
  MUMBAI: { lat: 19.0760, lon: 72.8777, label: "Mumbai", color: 0x3b82f6 },
  CHENNAI: { lat: 13.0827, lon: 80.2707, label: "Chennai", color: 0xec4899, labelOffset: { x: 0, y: 0.1 } },
  DELHI: { lat: 28.6139, lon: 77.2090, label: "Delhi", color: 0xfacc15, labelOffset: { x: 0, y: 0.1 } },
  HARIDWAR: { lat: 29.9457, lon: 78.1642, label: "Haridwar", color: 0x10b981, labelOffset: { x: 0, y: -0.1 } },
  TIRUPATI: { lat: 13.6285, lon: 79.4192, label: "Tirupati", color: 0x8b5cf6, labelOffset: { x: 0, y: -0.1 } },
  PARIS: { lat: 48.8566, lon: 2.3522, label: "Paris", color: 0x8b5cf6 },
  BOSTON: { lat: 42.3601, lon: -71.0589, label: "Boston", color: 0xf97316 },
  NEW_YORK: { lat: 40.7128, lon: -74.0060, label: "New York", color: 0xfacc15 },
};

const PATHS = [
  { from: CITIES.MUMBAI, to: CITIES.CHENNAI, duration: 1500, type: 'flight' },
  { from: CITIES.CHENNAI, to: CITIES.DELHI, duration: 1500, type: 'flight' },
  { from: CITIES.DELHI, to: CITIES.HARIDWAR, duration: 1200, type: 'flight' },
  { from: CITIES.HARIDWAR, to: CITIES.TIRUPATI, duration: 2000, type: 'flight' },
  { from: CITIES.TIRUPATI, to: CITIES.CHENNAI, duration: 1500, type: 'bike' },
  { from: CITIES.CHENNAI, to: CITIES.MUMBAI, duration: 1200, type: 'flight' },
  { from: CITIES.MUMBAI, to: CITIES.PARIS, duration: 2500, type: 'flight' },
  { from: CITIES.PARIS, to: CITIES.BOSTON, duration: 2500, type: 'flight' },
  { from: CITIES.BOSTON, to: CITIES.NEW_YORK, duration: 1200, type: 'car' },
  { from: CITIES.NEW_YORK, to: CITIES.BOSTON, duration: 1200, type: 'car' },
];

const TOTAL_SIM_DURATION = PATHS.reduce((acc, p) => acc + p.duration, 0) + 2000;

const latLonToVector3 = (lat: number, lon: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  return new THREE.Vector3(x, y, z);
};

const Globe3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();

  // Use a ref to track active leg to avoid closure staleness in animation loop
  const activeLegRef = useRef<{ from: string; to: string; alt: number } | null>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    const scene = new THREE.Scene();

    // Theme-based background - Use transparent to let CSS background show through, or specific color
    scene.background = null; // Let CSS handle background for better gradients

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 15, 40); // Zoomed in more

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      powerPreference: "high-performance",
      alpha: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    const globeRadius = 10;
    const textureLoader = new THREE.TextureLoader();

    // Use reliable texture URLs (or local if available, but these are standard)
    const earthMap = textureLoader.load('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg');
    const earthBump = textureLoader.load('https://unpkg.com/three-globe/example/img/earth-topology.png');

    // Stars
    const starCount = 5000; // Increased from 3000
    const starGeom = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) starPos[i] = (Math.random() - 0.5) * 1200;
    starGeom.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const stars = new THREE.Points(starGeom, new THREE.PointsMaterial({
      color: isDark ? 0xffffff : 0x4f46e5, // White in dark, Indigo in light
      size: isDark ? 0.15 : 0.25, // Slightly larger in light mode
      transparent: true,
      opacity: isDark ? 0.8 : 0.6
    }));
    scene.add(stars);

    // Earth
    const earthGeom = new THREE.SphereGeometry(globeRadius, 64, 64);
    const earthMat = new THREE.MeshStandardMaterial({
      map: earthMap,
      bumpMap: earthBump,
      bumpScale: 0.15,
      roughness: 0.8,
      metalness: 0.1
    });
    const earth = new THREE.Mesh(earthGeom, earthMat);
    scene.add(earth);

    // Atmosphere
    const atmosphereGeom = new THREE.SphereGeometry(globeRadius * 1.025, 64, 64);
    const atmosphereMat = new THREE.MeshBasicMaterial({
      color: 0x44aaff,
      transparent: true,
      opacity: 0.05,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending
    });
    scene.add(new THREE.Mesh(atmosphereGeom, atmosphereMat));

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.2));
    const sunLight = new THREE.DirectionalLight(0xffffff, 2.5);
    sunLight.position.set(80, 40, 100);
    scene.add(sunLight);

    // Sun (Visual)
    const sunGeom = new THREE.SphereGeometry(5, 32, 32);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffcc33 });
    const sunSphere = new THREE.Mesh(sunGeom, sunMat);
    sunSphere.position.set(200, 100, 250);
    scene.add(sunSphere);

    // Sun Glow
    const sunGlow = new THREE.PointLight(0xffcc33, 10000, 1000);
    sunGlow.position.copy(sunSphere.position);
    scene.add(sunGlow);

    // Moon
    const moonGroup = new THREE.Group();
    const moonRadius = 2.5;
    const moonGeom = new THREE.SphereGeometry(moonRadius, 32, 32);
    const moonMap = textureLoader.load('https://unpkg.com/three-globe/example/img/earth-night.jpg'); // Moonlight map
    const moonMat = new THREE.MeshStandardMaterial({
      map: moonMap,
      roughness: 1,
      metalness: 0
    });
    const moon = new THREE.Mesh(moonGeom, moonMat);
    moon.position.set(35, 0, 0); // Distance from earth
    moonGroup.add(moon);
    scene.add(moonGroup);

    // Mars (Distant)
    const marsGeom = new THREE.SphereGeometry(1.5, 32, 32);
    const marsMat = new THREE.MeshStandardMaterial({ color: 0xbc2732, roughness: 0.8 });
    const mars = new THREE.Mesh(marsGeom, marsMat);
    mars.position.set(-150, 50, -200);
    scene.add(mars);

    // Venus
    const venusGroup = new THREE.Group();
    const venusGeom = new THREE.SphereGeometry(2.2, 32, 32);
    const venusMat = new THREE.MeshStandardMaterial({
      color: 0xe3bb76,
      roughness: 0.5,
      metalness: 0,
      emissive: 0xe3bb76,
      emissiveIntensity: 0.1
    });
    const venus = new THREE.Mesh(venusGeom, venusMat);
    venus.position.set(100, 20, 80);
    venusGroup.add(venus);
    scene.add(venusGroup);

    // Mercury
    const mercuryGroup = new THREE.Group();
    const mercuryGeom = new THREE.SphereGeometry(0.8, 32, 32);
    const mercuryMat = new THREE.MeshStandardMaterial({ color: 0x8c8c8c, roughness: 0.9 });
    const mercury = new THREE.Mesh(mercuryGeom, mercuryMat);
    mercury.position.set(150, -10, 120);
    mercuryGroup.add(mercury);
    scene.add(mercuryGroup);

    // Markers
    const markers = new THREE.Group();
    earth.add(markers);

    const citySprites: THREE.Sprite[] = [];

    Object.values(CITIES).forEach((city) => {
      const pos = latLonToVector3(city.lat, city.lon, globeRadius);

      const monumentGroup = new THREE.Group();
      const monMat = new THREE.MeshBasicMaterial({ color: city.color });

      // Procedural Monuments
      switch (city.label) {
        case "Paris": { // Eiffel Tower Simplified
          const tower = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.15, 0.6, 4), monMat);
          monumentGroup.add(tower);
          break;
        }
        case "New York": { // Empire State / Statue Simplified
          const base = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.1, 0.15), monMat);
          const spire = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.4, 0.05), monMat);
          spire.position.y = 0.2;
          monumentGroup.add(base, spire);
          break;
        }
        case "Mumbai": { // Gateway Arch Simplified
          const gateBase = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.04, 0.1), monMat);
          const lCol = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.2, 0.04), monMat);
          const rCol = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.2, 0.04), monMat);
          const gateTop = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.06, 0.08), monMat);
          lCol.position.set(-0.07, 0.1, 0);
          rCol.position.set(0.07, 0.1, 0);
          gateTop.position.y = 0.2;
          monumentGroup.add(gateBase, lCol, rCol, gateTop);
          break;
        }
        case "Delhi": { // India Gate Simplified
          const dBase = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.2, 0.08), monMat);
          const hole = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.12, 0.1), new THREE.MeshBasicMaterial({ color: 0x000000 }));
          hole.position.y = -0.04;
          monumentGroup.add(dBase, hole);
          break;
        }
        case "Chennai": { // Temple Gopuram
          const gopuram = new THREE.Group();
          for (let i = 0; i < 4; i++) {
            const floor = new THREE.Mesh(new THREE.BoxGeometry(0.15 - i * 0.03, 0.06, 0.15 - i * 0.03), monMat);
            floor.position.y = i * 0.06;
            gopuram.add(floor);
          }
          monumentGroup.add(gopuram);
          break;
        }
        case "Haridwar": { // Temple / Ghat Ghanta Simplified
          const innerTemple = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.12, 0.2, 4), monMat);
          const topSpire = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.05, 0.15, 4), monMat);
          topSpire.position.y = 0.15;
          monumentGroup.add(innerTemple, topSpire);
          break;
        }
        case "Tirupati": { // High Gopuram
          const tGopuram = new THREE.Group();
          for (let i = 0; i < 6; i++) {
            const level = new THREE.Mesh(new THREE.BoxGeometry(0.18 - i * 0.03, 0.05, 0.18 - i * 0.03), monMat);
            level.position.y = i * 0.05;
            tGopuram.add(level);
          }
          monumentGroup.add(tGopuram);
          break;
        }
        case "Boston": { // Custom Skyscraper
          const bBase = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.4, 0.1), monMat);
          const bSpire = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.15), monMat);
          bSpire.position.y = 0.25;
          monumentGroup.add(bBase, bSpire);
          break;
        }
        default: {
          const building = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.2, 0.12), monMat);
          monumentGroup.add(building);
        }
      }

      monumentGroup.position.copy(pos);
      monumentGroup.lookAt(pos.clone().multiplyScalar(2));
      monumentGroup.rotateX(Math.PI / 2);
      markers.add(monumentGroup);

      const halo = new THREE.Mesh(
        new THREE.RingGeometry(0.18, 0.35, 32),
        new THREE.MeshBasicMaterial({ color: city.color, transparent: true, opacity: 0.4, side: THREE.DoubleSide })
      );
      halo.position.copy(pos.clone().multiplyScalar(1.005));
      halo.lookAt(pos.clone().multiplyScalar(2));
      monumentGroup.userData.halo = halo;
      markers.add(halo);

      // Label
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = 256;
        canvas.height = 64;
        ctx.font = 'Bold 40px Inter, sans-serif';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.shadowColor = 'black';
        ctx.shadowBlur = 8;
        ctx.fillText(city.label, 128, 48);

        const texture = new THREE.CanvasTexture(canvas);
        const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
        const sprite = new THREE.Sprite(spriteMat);
        const labelPos = pos.clone().multiplyScalar(1.08);
        if (city.labelOffset) {
          // Calculate local axis for offset (simple approximation using lon/lat)
          // We'll just shift it world-space Y slightly for now, which works well for these specific pairs
          labelPos.y += city.labelOffset.y * 3;
          labelPos.x += city.labelOffset.x * 3;
        }
        sprite.position.copy(labelPos);
        sprite.scale.set(1.5, 0.4, 1);
        sprite.userData = { city: city.label, pos: pos.clone(), baseScale: { x: 1.5, y: 0.4 } };
        citySprites.push(sprite);
        markers.add(sprite);
      }
    });

    // Aircraft
    const aircraftGroup = new THREE.Group();
    const aircraftMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const fuselage = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.03, 0.45, 8), aircraftMat);
    fuselage.rotation.x = Math.PI / 2;
    aircraftGroup.add(fuselage);
    const wings = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.01, 0.14), aircraftMat);
    wings.position.set(0, 0, 0.06);
    aircraftGroup.add(wings);
    const tailFin = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.01, 0.08), aircraftMat);
    tailFin.position.set(0, 0, -0.16);
    aircraftGroup.add(tailFin);

    // Nav lights
    const navLightL = new THREE.Mesh(new THREE.SphereGeometry(0.02, 8, 8), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
    navLightL.position.set(-0.28, 0, 0.06);
    aircraftGroup.add(navLightL);
    const navLightR = new THREE.Mesh(new THREE.SphereGeometry(0.02, 8, 8), new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
    navLightR.position.set(0.28, 0, 0.06);
    aircraftGroup.add(navLightR);

    aircraftGroup.visible = false;
    earth.add(aircraftGroup);

    // Car Model (VW Passat Red)
    const carGroup = new THREE.Group();
    const carBodyMat = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red
    const carGlassMat = new THREE.MeshBasicMaterial({ color: 0x88ccff, transparent: true, opacity: 0.6 });
    const carWheelMat = new THREE.MeshBasicMaterial({ color: 0x111111 });

    // Body (Simplified Sedan)
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.06, 0.4), carBodyMat);
    body.position.y = 0.03;
    carGroup.add(body);

    const roof = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.05, 0.2), carBodyMat);
    roof.position.set(0, 0.08, -0.02);
    carGroup.add(roof);

    // Windows
    const windshield = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 0.05), carGlassMat);
    windshield.position.set(0, 0.07, 0.08);
    windshield.rotation.x = -Math.PI / 4;
    carGroup.add(windshield);

    // Wheels
    [[-0.08, 0.15], [0.08, 0.15], [-0.08, -0.1], [0.08, -0.1]].forEach(([x, z]) => {
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.04, 12), carWheelMat);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(x as number, 0, z as number);
      carGroup.add(wheel);
    });

    carGroup.visible = false;
    earth.add(carGroup);

    // Bike Model (TVS Raider 125 Style)
    const bikeGroup = new THREE.Group();
    const bikeBodyMat = new THREE.MeshBasicMaterial({ color: 0x3b82f6 }); // Blue/Black mix usually
    const bikeWheelMat = new THREE.MeshBasicMaterial({ color: 0x000000 });

    // Simple frame
    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.08, 0.25), bikeBodyMat);
    frame.position.y = 0.06;
    bikeGroup.add(frame);

    // Wheels
    const frontWheel = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.02, 12), bikeWheelMat);
    frontWheel.rotation.z = Math.PI / 2;
    frontWheel.position.set(0, 0.04, 0.12);
    bikeGroup.add(frontWheel);

    const backWheel = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.02, 12), bikeWheelMat);
    backWheel.rotation.z = Math.PI / 2;
    backWheel.position.set(0, 0.04, -0.12);
    bikeGroup.add(backWheel);

    bikeGroup.visible = false;
    earth.add(bikeGroup);

    // Shared Geometry for Path Lines (Pre-allocated for performance)
    const MAX_POINTS = 200; // Enough for segments + extras
    const trailGeometry = new THREE.BufferGeometry();
    const trailPositions = new Float32Array(MAX_POINTS * 3);
    trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
    trailGeometry.setDrawRange(0, 0); // Start hidden

    // Path Lines
    const pathLineMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6, linewidth: 1 });
    const pathLine = new THREE.Line(trailGeometry, pathLineMat);
    earth.add(pathLine);

    const pathGlowMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2, linewidth: 3 });
    const pathGlow = new THREE.Line(trailGeometry, pathGlowMat);
    earth.add(pathGlow);

    let frameId: number;
    const startTime = performance.now();

    // Reusable objects for animation loop to avoid GC pressure
    const currentPoint = new THREE.Vector3();
    const startNorm = new THREE.Vector3();
    const endNorm = new THREE.Vector3();
    const quaternion = new THREE.Quaternion();
    const identityQuat = new THREE.Quaternion();
    const interpolatedQuat = new THREE.Quaternion();
    const lookAtTarget = new THREE.Vector3();
    const upVector = new THREE.Vector3();
    const tangent = new THREE.Vector3();
    const right = new THREE.Vector3();
    const finalTangent = new THREE.Vector3();
    const matrix = new THREE.Matrix4();
    const pt = new THREE.Vector3();
    const sq = new THREE.Quaternion();
    const vehiclePos = new THREE.Vector3();
    const dirToTarget = new THREE.Vector3();
    const up = new THREE.Vector3();
    const worldPos = new THREE.Vector3();
    const normalizedPos = new THREE.Vector3();
    const normalizedCameraPos = new THREE.Vector3();


    const animate = (time: number) => {
      frameId = requestAnimationFrame(animate);
      const elapsedTotal = (time - startTime) % TOTAL_SIM_DURATION;
      const pulse = 1 + Math.sin(time * 0.005) * 0.2;
      markers.children.forEach(c => {
        if (c.userData.halo) c.scale.set(pulse, pulse, pulse);
      });
      navLightL.scale.set(pulse, pulse, pulse);
      navLightR.scale.set(pulse, pulse, pulse);

      let currentStepElapsed = 0;
      let stepFound = false;

      for (const path of PATHS) {
        if (elapsedTotal >= currentStepElapsed && elapsedTotal < currentStepElapsed + path.duration) {
          const progress = (elapsedTotal - currentStepElapsed) / path.duration;

          // Flight Logic
          const start = latLonToVector3(path.from.lat, path.from.lon, globeRadius);
          const end = latLonToVector3(path.to.lat, path.to.lon, globeRadius);

          startNorm.copy(start).normalize();
          endNorm.copy(end).normalize();
          quaternion.setFromUnitVectors(startNorm, endNorm);

          identityQuat.set(0, 0, 0, 1); // Reset identity
          interpolatedQuat.copy(identityQuat).slerp(quaternion, progress);

          currentPoint.copy(start).applyQuaternion(interpolatedQuat);

          // Vehicle Type Visibility & Altitude
          aircraftGroup.visible = path.type === 'flight';
          carGroup.visible = path.type === 'car';
          bikeGroup.visible = path.type === 'bike';

          const altitude = path.type === 'flight' ? 1.02 : 1.005;
          const activeVehicle = path.type === 'flight' ? aircraftGroup : path.type === 'car' ? carGroup : bikeGroup;

          activeVehicle.position.copy(currentPoint.clone().multiplyScalar(altitude));

          // Better orientation for ground vehicles - stay flush with surface
          lookAtTarget.copy(end).multiplyScalar(altitude);

          // For ground vehicles, we need to ensure correct orientation tangent to surface
          if (path.type !== 'flight') {
            upVector.copy(currentPoint).normalize();
            tangent.subVectors(lookAtTarget, activeVehicle.position).normalize();
            right.crossVectors(upVector, tangent).normalize();
            finalTangent.crossVectors(right, upVector).normalize();

            matrix.makeBasis(right, upVector, finalTangent.multiplyScalar(-1));
            activeVehicle.quaternion.setFromRotationMatrix(matrix);
          } else {
            activeVehicle.lookAt(lookAtTarget);
          }

          pathLineMat.color.setHex(path.from.color);
          pathGlowMat.color.setHex(path.from.color);

          const segments = 60;
          const currentSegments = Math.ceil(segments * progress);
          const pointsCount = currentSegments + 1;

          // Update existing geometry buffer
          const positions = trailGeometry.attributes.position.array as Float32Array;

          for (let i = 0; i <= currentSegments; i++) {
            const p = i / segments;

            sq.copy(identityQuat).slerp(quaternion, p);
            pt.copy(start).applyQuaternion(sq).multiplyScalar(1.008);

            positions[i * 3] = pt.x;
            positions[i * 3 + 1] = pt.y;
            positions[i * 3 + 2] = pt.z;
          }

          trailGeometry.attributes.position.needsUpdate = true;
          trailGeometry.setDrawRange(0, pointsCount);

          // Chase Camera Logic
          activeVehicle.getWorldPosition(vehiclePos);

          const targetPoint = end.clone().multiplyScalar(altitude); // end is reused but .clone() is safer here if we mutate it, but end is recalculated each frame anyway. 
          dirToTarget.subVectors(targetPoint, vehiclePos).normalize();
          up.copy(vehiclePos).normalize();

          // Calculate camera position (behind and slightly above vehicle) - Backed off zoom per feedback
          const chaseOffset = path.type === 'flight' ? 6 : 3.5;
          const chaseHeight = path.type === 'flight' ? 3.5 : 1.5;

          const camPos = vehiclePos.clone()
            .add(dirToTarget.clone().multiplyScalar(-chaseOffset))
            .add(up.clone().multiplyScalar(chaseHeight));

          camera.position.lerp(camPos, 0.08);
          camera.lookAt(targetPoint);

          if (!activeLegRef.current || activeLegRef.current.from !== path.from.label) {
            activeLegRef.current = { from: path.from.label, to: path.to.label, alt: path.type === 'flight' ? 1.02 : 1.008 };
          }

          stepFound = true;
          break;
        }
        currentStepElapsed += path.duration;
      }

      if (!stepFound) {
        aircraftGroup.visible = false;
        carGroup.visible = false;
        bikeGroup.visible = false;
        activeLegRef.current = null;
        const idlePos = new THREE.Vector3(0, 20, 60); // Professional overview (was 75, a bit too far)
        camera.position.lerp(idlePos, 0.02);
        camera.lookAt(0, 0, 0);
        earth.rotation.y += 0.001;
        moonGroup.rotation.y += 0.0005;
        moon.rotation.y += 0.001;
      }

      // Global background rotation for space feel
      stars.rotation.y += 0.0001;
      moonGroup.rotation.y += 0.0002; // Slow orbit
      moon.rotation.y += 0.0005;

      venusGroup.rotation.y += 0.00015;
      venus.rotation.y += 0.0008;

      mercuryGroup.rotation.y += 0.0004; // Faster orbit
      mercury.rotation.y += 0.001;

      mars.position.x += Math.sin(time * 0.0001) * 0.1;
      mars.position.z += Math.cos(time * 0.0001) * 0.1;

      citySprites.forEach((sprite) => {
        sprite.getWorldPosition(worldPos);
        normalizedPos.copy(worldPos).normalize();
        normalizedCameraPos.copy(camera.position).normalize();

        // Dot product to check if label is on the camera-facing hemisphere
        const dot = normalizedPos.dot(normalizedCameraPos);

        // Only show if it's on the front side (dot > 0.2 provides a nice fade/buffer)
        if (dot > 0.15) {
          sprite.visible = true;
          sprite.material.opacity = THREE.MathUtils.smoothstep(dot, 0.15, 0.4);

          // Distance scale: make it slightly larger when camera is far, smaller when camera is close to avoid clutter
          const dist = camera.position.distanceTo(worldPos);
          const scaleFactor = THREE.MathUtils.clamp(dist / 40, 0.6, 1.2);
          const base = sprite.userData.baseScale || { x: 1.5, y: 0.4 };
          sprite.scale.set(base.x * scaleFactor, base.y * scaleFactor, 1);
        } else {
          sprite.visible = false;
        }
      });

      renderer.render(scene, camera);
    };

    frameId = requestAnimationFrame(animate);

    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.clear();
      moonMap.dispose(); // Dispose textures
      earthMap.dispose();
      earthBump.dispose();
      starGeom.dispose();
      earthGeom.dispose();
      earthMat.dispose();
      trailGeometry.dispose();
    };
  }, [isDark]);

  return (
    <div ref={containerRef} className={`fixed inset-0 -z-10 w-full h-full ${isDark ? 'bg-[#020617]' : 'bg-gradient-to-br from-slate-50 to-slate-200'} pointer-events-none transition-colors duration-500`}>
      {/* Dark overlay to make content readable, Light overlay subtle tint */}
      <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-[#020617]/80 via-[#020617]/40 to-[#020617]/80' : 'from-white/40 via-transparent to-white/60'} z-0`}></div>
      <canvas ref={canvasRef} className="w-full h-full opacity-60" />
    </div>
  );
};

export default Globe3D;
