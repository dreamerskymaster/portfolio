import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Factory, Settings, BarChart, Link, Building2, Monitor, Globe, Sliders, Bot, Plug, Wrench, TestTube, Microscope, Code, Brain, TrendingUp, Users, ClipboardList, Lightbulb, FileText, Car, Package, RefreshCw, Clock, Shield, Map, Home, Search, AlertTriangle, Zap, Ticket, Octagon } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  '🏭': <Factory className="w-5 h-5" />,
  'factory': <Factory className="w-5 h-5" />,
  '⚙️': <Settings className="w-5 h-5" />,
  'settings': <Settings className="w-5 h-5" />,
  '📊': <BarChart className="w-5 h-5" />,
  'bar-chart': <BarChart className="w-5 h-5" />,
  '🔗': <Link className="w-5 h-5" />,
  'link': <Link className="w-5 h-5" />,
  '🏢': <Building2 className="w-5 h-5" />,
  'building': <Building2 className="w-5 h-5" />,
  '💻': <Monitor className="w-5 h-5" />,
  'monitor': <Monitor className="w-5 h-5" />,
  '🌐': <Globe className="w-5 h-5" />,
  'globe': <Globe className="w-5 h-5" />,
  '🎛️': <Sliders className="w-5 h-5" />,
  'sliders': <Sliders className="w-5 h-5" />,
  '🤖': <Bot className="w-5 h-5" />,
  'bot': <Bot className="w-5 h-5" />,
  '🔌': <Plug className="w-5 h-5" />,
  'plug': <Plug className="w-5 h-5" />,
  '🔧': <Wrench className="w-5 h-5" />,
  'wrench': <Wrench className="w-5 h-5" />,
  '🧪': <TestTube className="w-5 h-5" />,
  'test-tube': <TestTube className="w-5 h-5" />,
  '🔬': <Microscope className="w-5 h-5" />,
  'microscope': <Microscope className="w-5 h-5" />,
  '🐍': <Code className="w-5 h-5" />,
  'code': <Code className="w-5 h-5" />,
  '🧠': <Brain className="w-5 h-5" />,
  'brain': <Brain className="w-5 h-5" />,
  '📈': <TrendingUp className="w-5 h-5" />,
  'trending-up': <TrendingUp className="w-5 h-5" />,
  '👥': <Users className="w-5 h-5" />,
  'users': <Users className="w-5 h-5" />,
  '📋': <ClipboardList className="w-5 h-5" />,
  'clipboard': <ClipboardList className="w-5 h-5" />,
  '💡': <Lightbulb className="w-5 h-5" />,
  'lightbulb': <Lightbulb className="w-5 h-5" />,
  '📝': <FileText className="w-5 h-5" />,
  'file-text': <FileText className="w-5 h-5" />,
  '🚗': <Car className="w-5 h-5" />,
  'car': <Car className="w-5 h-5" />,
  '📦': <Package className="w-5 h-5" />,
  'package': <Package className="w-5 h-5" />,
  '🔄': <RefreshCw className="w-5 h-5" />,
  'refresh-cw': <RefreshCw className="w-5 h-5" />,
  '⏱️': <Clock className="w-5 h-5" />,
  'clock': <Clock className="w-5 h-5" />,
  '⌛': <Clock className="w-5 h-5" />,
  'shield': <Shield className="w-5 h-5" />,
  'map': <Map className="w-5 h-5" />,
  'home': <Home className="w-5 h-5" />,
  'search': <Search className="w-5 h-5" />,
  'alert-triangle': <AlertTriangle className="w-5 h-5" />,
  'zap': <Zap className="w-5 h-5" />,
  'ticket': <Ticket className="w-5 h-5" />,
  'octagon': <Octagon className="w-5 h-5" />
};

interface TechnicalTooltipProps {
  term: string;
  definition: string;
  example: string;
  industry: string;
  icon?: string | React.ReactNode;
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

  const renderIcon = () => {
    if (!icon) return null;
    if (typeof icon === 'string' && iconMap[icon]) {
      return iconMap[icon];
    }
    return icon;
  };

  return (
    <span
      className={`relative inline-block cursor-help ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <Info className="inline-block ml-1 w-3 h-3 opacity-60 hover:opacity-100 transition-opacity align-top mt-1" />
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50 text-left"
          >
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl p-4 max-w-sm w-80">
              {/* Header */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-primary">{renderIcon()}</span>
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
                <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-1 flex items-center gap-1">
                  <Info className="w-3 h-3" /> Technical Context:
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