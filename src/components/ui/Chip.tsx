import React from 'react';
import { motion } from 'framer-motion';

interface ChipProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'muted';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  whileHover?: any;
  whileTap?: any;
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
  const baseClasses = 'inline-flex items-center font-medium rounded-full transition-all duration-200';
  
  const variantClasses = {
    primary: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20',
    secondary: 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border border-slate-500/20',
    accent: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20',
    muted: 'bg-slate-200/10 text-slate-500 dark:text-slate-400 border border-slate-500/20'
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
