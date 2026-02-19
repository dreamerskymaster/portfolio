import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * ScrollProgress Component
 * 
 * Provides a thin progress bar at the top of the viewport indicating
 * the user's current scroll depth through the page.
 */
const ScrollProgress: React.FC = () => {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100]"
            style={{ scaleX }}
        />
    );
};

export default ScrollProgress;
