import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Search,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';

import { profile } from '../data/profile';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Personal Interests', href: '/hobbies' },
    { name: 'Writings', href: '/writings' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Career Artifacts', href: '/career-artifacts' },
    { name: 'Contact', href: '/contact' }
  ];

  const toggleSearch = useCallback(() => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      // Focus search input when opening
      setTimeout(() => {
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.focus();
      }, 100);
    }
  }, [isSearchOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        toggleSearch();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [toggleSearch]);

  return (
    <header className="sticky top-0 z-50 glass-nav border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300 overflow-hidden"
              whileHover={{
                scale: 1.05,
                rotate: [0, -5, 5, 0],
                boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="/ManuFX.png"
                alt="ManuFX Logo"
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  // Fallback to initials if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = 'AS';
                    parent.className = 'w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300';
                  }
                }}
              />
            </motion.div>
            <div className="flex flex-col">
              <motion.span
                className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300"
                whileHover={{ x: 2 }}
              >
                {profile.name}
              </motion.span>
              <motion.span
                className="text-xs text-slate-500 dark:text-slate-400 font-medium"
                whileHover={{ x: 2 }}
              >
                ManuFX
              </motion.span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${location.pathname === item.href
                    ? 'text-white bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-lg'
                    : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                    }`}
                >
                  <motion.span
                    whileHover={{
                      scale: 1.05,
                      textShadow: location.pathname === item.href ? "0 0 8px rgba(16, 185, 129, 0.3)" : "0 0 4px rgba(16, 185, 129, 0.2)"
                    }}
                    className="relative z-10"
                  >
                    {item.name}
                  </motion.span>
                  {location.pathname === item.href && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-lg"
                      layoutId="activeTab"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {/* Easter egg sparkle on hover */}
                  <motion.div
                    className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100"
                    animate={{
                      rotate: [0, 180, 360],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  >
                    ✨
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Button */}
            <button
              onClick={toggleSearch}
              className="p-2 text-foreground hover:text-primary transition-colors"
              title="Search (Ctrl+K)"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Social Links */}
            <div className="flex items-center space-x-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground hover:text-primary transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground hover:text-primary transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleSearch}
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="py-4 border-t border-border"
            >
              <div className="relative">
                <input
                  id="search-input"
                  type="text"
                  placeholder="Search projects, writings, or skills... (Ctrl+K)"
                  className="w-full px-4 py-2 pl-10 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border"
            >
              <nav className="py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${location.pathname === item.href
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-muted'
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 py-2 flex items-center space-x-4">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-foreground hover:text-primary transition-colors"
                    title="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;


