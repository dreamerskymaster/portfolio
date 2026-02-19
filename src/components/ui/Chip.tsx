import React from 'react';
import { motion } from 'framer-motion';

import { HTMLMotionProps } from 'framer-motion';

interface ChipProps extends Omit<HTMLMotionProps<'span'>, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'muted';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Reusable Chip component for displaying tags, skills, and labels
 * Supports different variants and sizes with consistent styling
 */
const Chip: React.FC<ChipProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  whileHover,
  whileTap,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center font-mono rounded-full transition-all duration-200';

  const variantClasses = {
    primary: 'bg-emerald-500 text-white dark:bg-emerald-500/20 dark:text-emerald-300 border border-emerald-500/30 shadow-sm',
    secondary: 'bg-slate-600 text-white dark:bg-slate-600/20 dark:text-slate-200 border border-slate-500/30 shadow-sm',
    accent: 'bg-cyan-500 text-white dark:bg-cyan-500/20 dark:text-cyan-300 border border-cyan-500/30 shadow-sm',
    muted: 'bg-slate-200 text-slate-700 dark:bg-slate-800/20 dark:text-slate-400 border border-slate-500/20'
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  return (
    <motion.span
      className={combinedClasses}
      whileHover={whileHover || { scale: 1.05 }}
      whileTap={whileTap || { scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.span>
  );
};

export default Chip;
