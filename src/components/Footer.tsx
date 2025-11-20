import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

import { profile } from '../data/profile';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Writings', href: '/writings' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="relative bg-background/50 backdrop-blur-lg border-t border-border/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent-1 rounded-xl flex items-center justify-center text-primary-contrast font-bold text-lg shadow-lg shadow-primary/20">
                <span className="text-white">AS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  {profile.name}
                </span>
                <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
                  ManuFX Portfolio
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Bridging Smart Manufacturing, Supply Chain Optimization, and AI-Driven Automation.
            </p>
            <div className="flex space-x-3 pt-2">
              <SocialLink href={profile.github} icon={<Github className="w-4 h-4" />} label="GitHub" />
              <SocialLink href={profile.linkedin} icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" />
              <SocialLink href={`mailto:${profile.email}`} icon={<Mail className="w-4 h-4" />} label="Email" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary mr-2 transition-all duration-200" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact/Status */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Status</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Open to opportunities</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {profile.location}
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-primary hover:text-primary/80 transition-colors inline-block border-b border-primary/20 hover:border-primary"
              >
                {profile.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} {profile.name}. All rights reserved.
          </p>

          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <span className="flex items-center">
              Made with <Heart className="w-3 h-3 mx-1 text-red-500 fill-red-500" /> using React & Tailwind
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-muted/50 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors duration-200 border border-transparent hover:border-primary/20"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    title={label}
  >
    {icon}
  </motion.a>
);

export default Footer;


