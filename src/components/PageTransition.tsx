import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface PageTransitionProps {
    children: React.ReactNode;
}

/**
 * PageTransition Component
 * 
 * A wrapper component that applies a smooth, hardware-accelerated fade
 * when navigating between pages, with reduced-motion fallback.
 */
const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
            transition={{
                duration: shouldReduceMotion ? 0.15 : 0.4,
                ease: [0.16, 1, 0.3, 1]
            }}
            className="w-full h-full will-change-transform"
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
