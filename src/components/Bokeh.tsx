import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

const Bokeh: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const particles: THREE.Mesh[] = [];

    for (let i = 0; i < 50; i++) {
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(isDark ? Math.random() * 0.2 + 0.6 : Math.random() * 0.2 + 0.5, 0.7, 0.5),
        transparent: true,
        opacity: Math.random() * 0.3 + 0.1,
      });
      const particle = new THREE.Mesh(geometry, material);

      particle.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40
      );

      const scale = Math.random() * 2 + 0.5;
      particle.scale.set(scale, scale, scale);

      scene.add(particle);
      particles.push(particle);
    }

    camera.position.z = 20;

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      particles.forEach((p, i) => {
        p.position.y += Math.sin(Date.now() * 0.001 + i) * 0.01;
        p.position.x += Math.cos(Date.now() * 0.001 + i) * 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);

      // Dispose particles
      particles.forEach(p => {
        if (p.material instanceof THREE.Material) {
          p.material.dispose();
        }
        scene.remove(p);
      });

      geometry.dispose();
      renderer.dispose();

      if (containerRef.current && renderer.domElement.parentElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [isDark]);

  return (
    <div ref={containerRef} className={`fixed inset-0 -z-10 w-full h-full ${isDark ? 'bg-[#020617]' : 'bg-slate-50'} transition-colors duration-500`} />
  );
};

export default Bokeh;
