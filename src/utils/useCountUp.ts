import { useState, useEffect } from 'react';

/**
 * Custom hook to animate a numerical value from 0 to target.
 * @param target - The final value to reach.
 * @param duration - Duration of the animation in milliseconds.
 * @param delay - Delay before starting the animation in milliseconds.
 */
export const useCountUp = (target: number, duration: number = 2000, delay: number = 0) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function: easeOutExpo
      // This provides a smooth deceleration towards the final value
      const easing = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      // Calculate and set floor value to prevent flickering decimals
      setCount(Math.floor(easing * target));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    const timer = setTimeout(() => {
      animationFrameId = window.requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [target, duration, delay]);

  return count;
};
