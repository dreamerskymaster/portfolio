import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const characters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);
    let drops: number[] = [];

    const initDrops = (): void => {
      columns = Math.floor(canvas.width / fontSize);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = 1;
      }
    };

    const resizeCanvas = (): void => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDrops();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);



    const draw = (): void => {
      ctx.fillStyle = isDark ? 'rgba(2, 6, 23, 0.05)' : 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = isDark ? '#10b981' : '#6366f1'; // emerald-500 in dark, indigo-500 in light
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 -z-10 w-full h-full ${isDark ? 'bg-[#020617]' : 'bg-slate-50'} opacity-20 transition-colors duration-500`}
    />
  );
};

export default MatrixRain;
