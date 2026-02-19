import { useState, useCallback, useRef } from 'react';

/**
 * Custom hook to create a 3D tilt effect and track mouse position for glow effects.
 * @param maxTilt - Maximum tilt angle in degrees.
 * @param perspective - CSS perspective value.
 */
export const useTiltEffect = (maxTilt: number = 10, perspective: number = 1000) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 }); // Normalized 0-100
  const [isHovering, setIsHovering] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current) return;
    
    // Only apply tilt on devices with a fine pointer (mouse)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const rect = elementRef.current.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate tilt angles based on mouse position relative to center
    // Rotation on X-axis is driven by Y-mouse delta (up/down)
    // Rotation on Y-axis is driven by X-mouse delta (left/right)
    const tiltX = ((y - centerY) / centerY) * maxTilt;
    const tiltY = ((x - centerX) / centerX) * -maxTilt; // Invert X for natural tilt
    
    setTilt({ x: tiltX, y: tiltY });
    
    // Normalized position (0-100) for dynamic CSS variables/backgrounds
    setMousePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });
  }, [maxTilt]);

  const onMouseEnter = useCallback(() => setIsHovering(true), []);
  const onMouseLeave = useCallback(() => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0 });
    setMousePos({ x: 50, y: 50 });
  }, []);

  const transform = isHovering
    ? `perspective(${perspective}px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
    : `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`;

  // Counter-transform for image parallax (subtle movement in opposite direction)
  const imageTransform = isHovering
    ? `scale(1.1) translateX(${tilt.y * 0.5}px) translateY(${tilt.x * -0.5}px)`
    : `scale(1) translateX(0) translateY(0)`;

  const glowStyle = {
    background: isHovering 
      ? `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(var(--primary-rgb), 0.15), transparent 80%)`
      : 'transparent',
  };

  return {
    ref: elementRef,
    style: { transform },
    imageStyle: { transform: imageTransform },
    glowStyle,
    onMouseMove,
    onMouseEnter,
    onMouseLeave,
    isHovering
  };
};
