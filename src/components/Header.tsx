import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { searchPortfolio, SearchResult } from '../utils/search';
import {
  Menu,
  X,
  Search,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Layers,
  BookOpen,
  FileText,
  Heart,
  User,
  Award,
  Download,
  Briefcase
} from 'lucide-react';

import { profile } from '../data/profile';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  onLogoTap?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoTap }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  interface NavItem {
    name: string;
    href?: string;
    links?: Array<{ name: string; href: string; icon: any; desc: string }>;
  }

  const navigation: NavItem[] = [
    { name: 'Home', href: '/' },
    {
      name: 'Experience',
      links: [
        { name: 'About & Journey', href: '/about', icon: User, desc: 'My engineering background & philosophy' },
        { name: 'Resume', href: '/resume', icon: Download, desc: 'Professional summary & downloadable CV' },
        { name: 'Certifications', href: '/certifications', icon: Award, desc: 'Verified technical & professional credentials' },
      ]
    },
    {
      name: 'Portfolio',
      links: [
        { name: 'Projects', href: '/projects', icon: Layers, desc: 'Detailed engineering & AI project breakdowns' },
        { name: 'Writings', href: '/writings', icon: BookOpen, desc: 'Technical articles & industry insights' },
        { name: 'Career Artifacts', href: '/career-artifacts', icon: FileText, desc: 'Evidence of professional impact and tools' },
        { name: 'Hobbies & Life', href: '/hobbies', icon: Heart, desc: 'Personal interests and creative pursuits' },
      ]
    },
    { name: 'Contact', href: '/contact' }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false); // Auto-close menu on desktop
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSearch = useCallback(() => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      // Focus search input when opening
      setTimeout(() => {
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.focus();
      }, 100);
    } else {
      setSearchQuery('');
      setSearchResults([]);
    }
  }, [isSearchOpen]);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setSearchResults(searchPortfolio(value));
  };

  const handleResultClick = (result: SearchResult) => {
    navigate(result.href);
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  // Close menu when route changes
  useEffect(() => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  }, [location.pathname, isMobile]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        toggleSearch();
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [toggleSearch, isSearchOpen]);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      <div className="absolute inset-0 glass-nav opacity-90"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group min-w-max">
            <motion.div
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300 overflow-hidden"
              whileHover={{
                scale: 1.05,
                rotate: [0, -5, 5, 0],
                boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={onLogoTap}
            >
              <img
                src="/logo/ManuFX.jpg"
                alt="ManuFX Logo"
                className="w-full h-full object-contain p-1"
                fetchPriority="high"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = 'AS';
                  }
                }}
              />
            </motion.div>
            <div className="flex flex-col">
              <motion.span
                className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 tracking-tight"
                whileHover={{ x: 2 }}
              >
                {profile.name}
              </motion.span>
              <motion.span
                className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wider uppercase"
                whileHover={{ x: 2 }}
              >
                ManuFX
              </motion.span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-2">
            {navigation.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => 'links' in item && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {'links' in item ? (
                  <>
                    <button
                      className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${activeDropdown === item.name || (item.links && item.links.some(l => location.pathname === l.href))
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-2 w-80 bg-card border border-border rounded-2xl shadow-2xl p-4 z-50 overflow-hidden"
                        >
                          <div className="grid gap-2">
                            {item.links?.map((link) => {
                              const Icon = link.icon;
                              const isActive = location.pathname === link.href;
                              return (
                                <Link
                                  key={link.name}
                                  to={link.href}
                                  className={`flex items-start gap-3 p-3 rounded-xl transition-all ${isActive
                                    ? 'bg-primary/10 border border-primary/20'
                                    : 'hover:bg-muted/50 border border-transparent'
                                    }`}
                                >
                                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${isActive ? 'bg-primary text-primary-contrast' : 'bg-muted text-muted-foreground'
                                    }`}>
                                    <Icon className="w-5 h-5" />
                                  </div>
                                  <div>
                                    <div className={`text-sm font-bold ${isActive ? 'text-primary' : 'text-foreground'}`}>
                                      {link.name}
                                    </div>
                                    <div className="text-xs text-muted-foreground line-clamp-1">{link.desc}</div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.href || '#'}
                    className={`px-5 py-2 text-sm font-bold rounded-full transition-all duration-300 ${location.pathname === item.href
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Render simplified nav for tablet/smaller laptops if needed, or just keep actions */}
            <button
              onClick={toggleSearch}
              className="p-2.5 text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
              title="Search (Ctrl+K)"
            >
              <Search className="w-5 h-5" />
            </button>

            <ThemeToggle />

            <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-700">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search projects, writings, or skills... (Ctrl+K)"
                  className="w-full px-4 py-2 pl-10 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground"
                  autoFocus
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />

                {/* Search Results Dropdown */}
                {searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-2xl overflow-hidden z-50">
                    {searchResults.map((result, index) => (
                      <button
                        key={`${result.type}-${index}`}
                        onClick={() => handleResultClick(result)}
                        className="w-full flex items-start gap-3 px-4 py-3 hover:bg-muted/50 transition-colors text-left border-b border-border last:border-0"
                      >
                        <span className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase rounded-full mt-0.5 ${result.type === 'project' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                          result.type === 'writing' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                            'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                          }`}>
                          {result.type}
                        </span>
                        <div>
                          <div className="text-sm font-medium text-foreground">{result.title}</div>
                          {result.subtitle && (
                            <div className="text-xs text-muted-foreground">{result.subtitle}</div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* No results message */}
                {searchQuery.length >= 2 && searchResults.length === 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-2xl p-4 z-50">
                    <p className="text-sm text-muted-foreground text-center">
                      No results found for "{searchQuery}"
                    </p>
                  </div>
                )}
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
              className={`lg:hidden border-t border-border mobile-nav-menu ${isMenuOpen ? 'open block' : ''}`}
            >
              <nav className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {'links' in item ? (
                      <div className="space-y-1">
                        <div className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">{item.name}</div>
                        {item.links?.map((link) => (
                          <Link
                            key={link.name}
                            to={link.href}
                            className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${location.pathname === link.href
                              ? 'bg-primary/10 text-primary'
                              : 'text-foreground hover:bg-muted'
                              }`}
                          >
                            <link.icon className="w-5 h-5 opacity-60" />
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        to={item.href || '#'}
                        className={`block px-4 py-2.5 text-sm font-bold rounded-lg transition-colors duration-200 ${location.pathname === item.href
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground hover:bg-muted'
                          }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
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


