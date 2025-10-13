import React from 'react';
import { motion, Variants, Transition } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  whileHover?: Variants | Record<string, any>;
  whileTap?: Variants | Record<string, any>;
  variants?: Variants;
  initial?: boolean | string | number | Record<string, any>;
  animate?: boolean | string | number | Record<string, any>;
  transition?: Transition;
}

/**
 * Reusable Card component with glassmorphic styling and animations
 * Used throughout the application for consistent card layouts
 */
const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  whileHover,
  whileTap,
  variants,
  initial,
  animate,
  transition,
  ...props 
}) => {
  const baseClasses = 'glass-card border border-white/20 rounded-2xl backdrop-blur-sm';
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <motion.div
      className={combinedClasses}
      whileHover={whileHover}
      whileTap={whileTap}
      variants={variants}
      initial={initial}
      animate={animate}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
