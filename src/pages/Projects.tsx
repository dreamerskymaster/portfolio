import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  ExternalLink,
  Github,
  Award,
  Zap,
  Clock,
  Layers
} from 'lucide-react';
import Chip from '../components/ui/Chip';

import { profile, Project } from '../data/profile';
import PageTransition from '../components/PageTransition';
import { TiltWrapper, TiltImage } from '../components/TiltWrapper';

const Projects: React.FC = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Engineering Projects | Ajith Srikanth Portfolio</title>
        <meta name="description" content="A curated collection of intelligent systems, automation architectures, and digital transformations. Featuring work from Hero MotoCorp, VDRS, and academic research." />
      </Helmet>
      <div className="min-h-screen relative overflow-hidden">

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-24">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-24"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-8">
              <Layers className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Engineering Portfolio</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60 tracking-tight font-serif">
              Selected Works
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              A curated collection of intelligent systems, automation architectures, and digital transformations.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-20 max-w-6xl mx-auto">
            {profile.projects
              .slice()
              .sort((a, b) => {
                if (!a.date) return 1;
                if (!b.date) return -1;
                return new Date(b.date).getTime() - new Date(a.date).getTime();
              })
              .map((project, index) => (
                <EnhancedProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

const EnhancedProjectCard: React.FC<{
  project: Project;
  index: number;
}> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <TiltWrapper className="rounded-[2rem]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent-1/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        <div className="relative bg-card/40 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-0">

            {/* Visual Side */}
            <div className={`relative h-64 lg:h-auto min-h-[400px] overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black z-10 flex items-center justify-center">
                {/* Decorative Tech Pattern */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

                {/* Dynamic Content Preview or Icon */}
                {project.images && project.images.length > 0 ? (
                  <TiltImage src={project.images[0]} alt={project.title} className="opacity-90 transition-transform duration-700" />
                ) : (
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent-1/20 flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:scale-110 transition-transform duration-500">
                      <Zap className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white/20 uppercase tracking-widest">{project.category || 'Engineering'}</h3>
                  </div>
                )}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent lg:hidden"></div>
              </div>
            </div>

            {/* Content Side */}
            <div className={`p-8 md:p-12 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="mb-6 flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">{project.category}</span>

                {project.status && (
                  <motion.span
                    initial={project.status === 'In Progress' ? { opacity: 0.8, scale: 0.95 } : {}}
                    animate={project.status === 'In Progress' ? {
                      opacity: [0.8, 1, 0.8],
                      scale: [0.95, 1, 0.95],
                    } : {}}
                    transition={project.status === 'In Progress' ? {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    } : {}}
                    className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border flex items-center gap-1.5 ${project.status === 'In Progress'
                      ? 'bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.1)]'
                      : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                      }`}
                  >
                    <span className={project.status === 'In Progress' ? 'animate-spin-slow' : ''}>
                      {project.status === 'In Progress' ? '🔄' : '📄'}
                    </span>
                    {project.status}
                  </motion.span>
                )}

                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {project.timeline}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {project.summary}
              </p>

              {/* Tech Stack Bubbles */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.slice(0, 5).map(tech => (
                  <Chip key={tech} variant="secondary" size="sm">
                    {tech}
                  </Chip>
                ))}
              </div>

              {/* Impact Stats */}
              {project.impact && project.impact.length > 0 && (
                <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-accent-1 shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/80 italic">"{project.impact[0]}"</p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-4 mt-auto">
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-contrast rounded-xl font-bold hover:bg-primary-dark transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/20"
                >
                  View Case Study <ArrowRight className="w-4 h-4" />
                </Link>

                {project.links?.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-card border border-border hover:bg-muted transition-colors text-foreground"
                    title="View Source Code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      </TiltWrapper>
    </motion.div>
  );
};

export default Projects;