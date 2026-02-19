import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

const Starfield = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene Setup
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(isDark ? 0x020617 : 0xf1f5f9); // Removed to allow CSS gradient

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 1;
    camera.rotation.x = Math.PI / 2;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true // Enable transparency for CSS background
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Star Generation
    const starCount = 6000;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const x = (Math.random() - 0.5) * 600;
      const y = (Math.random() - 0.5) * 600;
      const z = (Math.random() - 0.5) * 600;
      starPos[i * 3] = x;
      starPos[i * 3 + 1] = y;
      starPos[i * 3 + 2] = z;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));

    const starMaterial = new THREE.PointsMaterial({
      color: isDark ? 0xffffff : 0x4f46e5, // White in dark, Indigo in light
      size: isDark ? 0.15 : 0.2,
      transparent: true,
      opacity: isDark ? 0.8 : 0.6,
    });

    const stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);

    // Animation Loop
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      starGeo.rotateY(0.0002);
      starGeo.rotateX(0.0001);
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      starGeo.dispose();
      starMaterial.dispose();
    };
  }, [isDark]);

  return (
    <div ref={containerRef} className={`fixed inset-0 -z-10 w-full h-full ${isDark ? 'bg-[#020617]' : 'bg-gradient-to-br from-slate-50 to-slate-200'} transition-colors duration-500`}>
      <div className={`absolute inset-0 bg-gradient-to-b from-transparent ${isDark ? 'via-[#020617]/50 to-[#020617]/90' : 'via-transparent to-white/60'} z-10 pointer-events-none`}></div>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default Starfield;
