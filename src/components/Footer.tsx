import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, FileText, ShieldCheck } from 'lucide-react';

import { profile } from '../data/profile';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const explore = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Writings', href: '/writings' },
  ];

  const more = [
    { name: 'Certifications', href: '/certifications' },
    { name: 'Career Artifacts', href: '/career-artifacts' },
    { name: 'Hobbies', href: '/hobbies' },
    { name: 'Resume', href: '/resume' },
  ];

  return (
    <footer className="relative bg-card/40 backdrop-blur-lg border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Hire Me CTA */}
        <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/10 via-transparent to-accent-1/10 p-6 sm:p-8 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-fg mb-2">
                Let&apos;s build something that ships.
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Manufacturing engineer working at the intersection of operations and applied AI
                &mdash; forecasting, automation, and systems that survive a real shop floor.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-contrast font-semibold text-sm shadow-lg shadow-primary/25 hover:brightness-110 active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Hire Me
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/resume"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border text-fg font-semibold text-sm hover:border-primary/40 hover:text-primary active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </Link>
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent-1 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg shadow-primary/20">
                <span className="text-white">AS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-fg">{profile.name}</span>
                <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
                  ManuFX Portfolio
                </span>
              </div>
            </div>
            <div className="flex space-x-3 pt-1">
              <SocialLink href={profile.github} icon={<Github className="w-4 h-4" />} label="GitHub" />
              <SocialLink href={profile.linkedin} icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" />
              <SocialLink href={`mailto:${profile.email}`} icon={<Mail className="w-4 h-4" />} label="Email" />
            </div>
          </div>

          <FooterNav title="Explore" items={explore} />
          <FooterNav title="More" items={more} />

          {/* Status + work authorization */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-sm font-semibold text-fg uppercase tracking-wider mb-4">Status</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Open to opportunities</span>
              </div>

              <div className="flex items-start gap-2 text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-accent-1 mt-0.5 shrink-0" />
                <span>
                  Work authorized on <strong className="text-fg font-medium">OPT through July 2027</strong>,
                  then eligible for the 24-month <strong className="text-fg font-medium">STEM OPT</strong> extension.
                </span>
              </div>

              <a
                href={`mailto:${profile.email}`}
                className="inline-block text-primary hover:text-primary/80 transition-colors border-b border-primary/20 hover:border-primary break-all"
              >
                {profile.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with React, TypeScript &amp; Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterNav = ({ title, items }: { title: string; items: { name: string; href: string }[] }) => (
  <div>
    <h3 className="text-sm font-semibold text-fg uppercase tracking-wider mb-4">{title}</h3>
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item.name}>
          <Link
            to={item.href}
            className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm inline-flex items-center group py-0.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary mr-2 transition-all duration-200 shrink-0" />
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2.5 bg-muted/20 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors duration-200 border border-border hover:border-primary/30"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    title={label}
    aria-label={label}
  >
    {icon}
  </motion.a>
);

export default Footer;
