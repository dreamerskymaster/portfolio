import React, { useEffect, useState, useCallback } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

/**
 * CustomCursor - A premium, smooth trailing cursor for desktop browsers.
 * Features a central dot and a trailing outer ring that reacts to interactive elements.
 */
const CustomCursor: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false); // Tracks if cursor is over interactive element
    const [isClicking, setIsClicking] = useState(false); // Tracks mouse-down state for scale pulse

    // Motion values for smooth tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring physics configuration for the outer ring's "lazy" follow behavior
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const trailX = useSpring(mouseX, springConfig);
    const trailY = useSpring(mouseY, springConfig);

    const onMouseMove = useCallback((e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        if (!isVisible) setIsVisible(true);
    }, [mouseX, mouseY, isVisible]);

    const onMouseDown = useCallback(() => setIsClicking(true), []);
    const onMouseUp = useCallback(() => setIsClicking(false), []);

    const handleMouseEnter = useCallback(() => setIsVisible(true), []);
    const handleMouseLeave = useCallback(() => setIsVisible(false), []);

    useEffect(() => {
        // Check if device is touch-enabled
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window);
        };

        checkMobile();

        if (isMobile) return;

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        // Dynamic hover detection for interactive elements
        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive =
                target.closest('a') ||
                target.closest('button') ||
                target.closest('[role="button"]') ||
                target.tagName === 'INPUT' ||
                target.tagName === 'SELECT' ||
                target.tagName === 'TEXTAREA';

            setIsHovering(!!isInteractive);
        };

        window.addEventListener('mouseover', handleHover);

        // Hide default cursor on desktop
        document.body.style.cursor = 'none';

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mouseover', handleHover);
            document.body.style.cursor = 'auto';
        };
    }, [isMobile, onMouseMove, onMouseDown, onMouseUp, handleMouseEnter, handleMouseLeave]);

    if (isMobile) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 pointer-events-none z-[9999]">
                    {/* Main Dot */}
                    <motion.div
                        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full"
                        style={{
                            x: mouseX,
                            y: mouseY,
                            translateX: '-50%',
                            translateY: '-50%',
                        }}
                    />

                    {/* Trailing Ring */}
                    <motion.div
                        className="fixed top-0 left-0 rounded-full border border-primary/50"
                        style={{
                            x: trailX,
                            y: trailY,
                            translateX: '-50%',
                            translateY: '-50%',
                            width: isHovering ? 48 : 24,
                            height: isHovering ? 48 : 24,
                        }}
                        animate={{
                            scale: isClicking ? 0.8 : 1,
                            backgroundColor: isHovering ? 'rgba(16, 185, 129, 0.1)' : 'rgba(16, 185, 129, 0)',
                            borderColor: isHovering ? 'rgba(16, 185, 129, 0.8)' : 'rgba(16, 185, 129, 0.4)',
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 250,
                            damping: 20,
                            mass: 0.5,
                        }}
                    />
                </div>
            )}
        </AnimatePresence>
    );
};

export default CustomCursor;
