import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

interface ParallaxHeadingProps {
    children: React.ReactNode;
    direction?: 'horizontal' | 'vertical';
    distance?: number;
    className?: string;
}

/**
 * ParallaxHeading - A decorative wrapper that adds scroll-based parallax motion to headings.
 * @param children The heading element to wrap.
 * @param direction The direction of the parallax motion ('horizontal' or 'vertical').
 * @param distance The maximum distance to move (in pixels).
 * @param className Optional additional styling.
 */
const ParallaxHeading: React.FC<ParallaxHeadingProps> = ({
    children,
    direction = 'horizontal',
    distance = 50,
    className = ''
}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Map scroll progress (0 to 1) to a pixel offset (-distance to +distance)
    const rawValue = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

    // Apply a spring for smooth, momentum-based parallax movement
    const smoothValue = useSpring(rawValue, { damping: 20, stiffness: 100 });

    const shouldReduceMotion = useReducedMotion();

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div
                style={{
                    x: (direction === 'horizontal' && !shouldReduceMotion) ? smoothValue : 0,
                    y: (direction === 'vertical' && !shouldReduceMotion) ? smoothValue : 0,
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ParallaxHeading;
