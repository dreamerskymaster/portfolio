import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TechnicalTooltipProps {
  term: string;
  definition: string;
  example: string;
  industry: string;
  icon?: string;
  children: React.ReactNode;
  className?: string;
}

const TechnicalTooltip: React.FC<TechnicalTooltipProps> = ({
  term,
  definition,
  example,
  industry,
  icon,
  children,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span
      className={`relative inline-block cursor-help ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <span className="ml-1 text-xs opacity-60 hover:opacity-100 transition-opacity">ℹ️</span>
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50"
          >
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl p-4 max-w-sm w-80">
              {/* Header */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{icon}</span>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white text-sm">
                    {term}
                  </h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {industry}
                  </span>
                </div>
              </div>
              
              {/* Definition */}
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                {definition}
              </p>
              
              {/* Example */}
              <div className="bg-slate-50 dark:bg-slate-700 rounded-md p-3">
                <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                  💡 Simple Example:
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {example}
                </p>
              </div>
              
              {/* Arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-200 dark:border-t-slate-700"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

export default TechnicalTooltip;