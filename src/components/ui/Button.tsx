import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Props for the Button component
 */
interface ButtonProps {
  /** content to be displayed within the button */
  children: React.ReactNode;
  /** visual style variant of the button */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /** size of the button */
  size?: 'sm' | 'md' | 'lg';
  /** click handler for the button */
  onClick?: () => void;
  /** external link URL */
  href?: string;
  /** internal route path for SPA navigation */
  to?: string;
  /** target attribute for links (e.g., '_blank') */
  target?: string;
  /** whether the button is disabled */
  disabled?: boolean;
  /** additional CSS classes */
  className?: string;
  /** optional icon element to display before children */
  icon?: React.ReactNode;
}

/**
 * A reusable Button component that supports variants, sizes, and navigation.
 * It intelligently switches between a standard button, an external link (<a>),
 * and an internal SPA link using React Router's <Link>.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  to,
  target,
  disabled = false,
  className = '',
  icon
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-primary text-primary-contrast hover:bg-primary/90 focus:ring-primary shadow-lg hover:shadow-xl',
    secondary: 'bg-muted text-foreground hover:bg-muted/80 focus:ring-muted',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-contrast focus:ring-primary',
    ghost: 'text-foreground hover:bg-muted focus:ring-muted'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  if (to) {
    if (disabled) {
      return (
        <span className={classes} aria-disabled="true">
          {content}
        </span>
      );
    }
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        <Link to={to} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    if (disabled) {
      return (
        <span className={classes} aria-disabled="true">
          {content}
        </span>
      );
    }
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
};

export default Button;


