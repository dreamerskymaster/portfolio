import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Download,
  Calendar,
  ChevronDown,
  Zap,
  Heart,
} from 'lucide-react';

import { profile } from '../data/profile';
import Button from '../components/ui/Button';

import IntroOverlay from '../components/IntroOverlay';
import FeaturedArticle from '../components/FeaturedArticle';
import WritingsSection from '../components/WritingsSection';
import PageTransition from '../components/PageTransition';
import Chip from '../components/ui/Chip';
import ImpactDashboard from '../components/ImpactDashboard';
import { TiltWrapper, TiltImage } from '../components/TiltWrapper';
import StructuredData from '../components/StructuredData';
import ParallaxHeading from '../components/ParallaxHeading';

const Home: React.FC = () => {
  const [showNamaskaramModal, setShowNamaskaramModal] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] as any }
    }
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Ajith Srikanth | Engineering & AI Innovation Portfolio</title>
        <meta name="description" content="Portfolio of Ajith Srikanth — bridging Manufacturing Excellence, AI Innovation, and Industrial IoT. Building high-efficiency systems and deploying intelligent automation solutions that deliver measurable business value." />
        <meta property="og:title" content="Ajith Srikanth | Engineering & AI Innovation Portfolio" />
        <meta property="og:description" content="Building high-efficiency systems and AI-driven industrial solutions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <StructuredData />
      <div className="min-h-screen">

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-10 w-full max-w-full">

          {/* Subtle Background Elements - Specialized for Light Mode depth */}
          <div className="absolute inset-0 z-0 opacity-10 dark:opacity-10 pointer-events-none overflow-hidden">
            <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-primary/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-accent-1/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:32px_32px] opacity-20 dark:opacity-5"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start w-full mx-auto"
            >
              <div className="max-w-4xl">
                {/* Status Badge */}
                <motion.div variants={itemVariants} className="mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Currently: TA for IE4350/4351 & Northeastern Off-Campus Ambassador | Available Full Time from Aug 2026 - Pre OPT available on Request
                  </span>
                </motion.div>

                {/* Main Statement */}
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-8 leading-[1.1] font-serif"
                >
                  <motion.span
                    className="cursor-pointer hover:text-primary transition-colors inline-block group"
                    onClick={() => setShowNamaskaramModal(true)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Heart className="w-10 h-10 md:w-16 md:h-16 text-primary fill-primary/20 inline-block mr-4 align-middle transition-transform group-hover:scale-110" />
                    Namaskaram
                  </motion.span>, I'm Ajith.
                </motion.h1>

                {/* Tagline */}
                <motion.p
                  variants={itemVariants}
                  className="text-xl md:text-3xl text-muted-foreground mb-10 font-light leading-relaxed max-w-4xl"
                >
                  "Bridging the physical and digital worlds. I build intelligent systems, optimize complex operations, and deploy AI-driven solutions that solve real-world challenges with measurable impact."
                </motion.p>

                {/* CTAs */}
                <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                  <Button to="/projects" size="lg" className="text-lg px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    View My Work
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <motion.a
                    href="/Ajith_Srikanth_Resume_M.pdf"
                    download
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-border text-foreground rounded-2xl font-medium hover:bg-muted/50 hover:border-foreground/20 transition-all duration-300 text-lg"
                  >
                    <Download className="w-5 h-5" />
                    Resume
                  </motion.a>
                  <motion.a
                    href="https://calendly.com/d/cqp7-3p3-jwq/30-minute-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-transparent text-muted-foreground hover:text-foreground rounded-2xl font-medium transition-all duration-300 text-lg"
                  >
                    <Calendar className="w-5 h-5" />
                    Book a Call
                  </motion.a>
                </motion.div>
              </div>

            </motion.div>
          </div>

          {/* Scroll Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={() => scrollToSection('impact-dashboard')}
              animate={useReducedMotion() ? {} : { y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-muted-foreground hover:text-foreground p-2"
              aria-label="Scroll to featured work"
            >
              <ChevronDown className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </section>

        {/* Impact Dashboard Bridge - Moved out of the tightly centered hero for more breathing room */}
        <section id="impact-dashboard" className="relative z-10 w-full pb-24 px-6 container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full pt-12 border-t border-border/50"
          >
            <ImpactDashboard />
          </motion.div>
        </section>

        {/* Featured Work Preview (Minimal) */}
        <section id="featured-work" className="py-24 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
              <ParallaxHeading distance={30}>
                <div>
                  <h2 className="text-3xl font-bold mb-2">Selected Work</h2>
                  <p className="text-muted-foreground">Recent breakdown of my engineering journey.</p>
                </div>
              </ParallaxHeading>
              <Button to="/projects" variant="outline">View All</Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {profile.projects.slice(0, 4).map((project, index) => (
                <TiltWrapper key={project.id} className="rounded-3xl">
                  <Link
                    to={`/projects/${project.id}`}
                    className="group block bg-card border border-border dark:border-white/5 rounded-3xl h-full overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="aspect-video overflow-hidden relative">
                      {project.images && project.images.length > 0 ? (
                        <TiltImage src={project.images[0]} alt={project.title} />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent-1/10 flex items-center justify-center">
                          <Zap className="w-8 h-8 text-primary/40" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                    </div>
                    <div className="p-8 pt-4">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">{project.category}</span>
                          {project.status && (
                            <motion.span
                              animate={project.status === 'In Progress' ? {
                                opacity: [0.7, 1, 0.7],
                              } : {}}
                              transition={{ duration: 2, repeat: Infinity }}
                              className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full border ${project.status === 'In Progress'
                                ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                                : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                }`}
                            >
                              {project.status}
                            </motion.span>
                          )}
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-muted-foreground mb-6 line-clamp-2 text-sm">{project.summary}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map(tech => (
                          <Chip key={tech} variant="muted" size="sm">
                            {tech}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  </Link>
                </TiltWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <FeaturedArticle />

        {/* Writings Preview */}
        <WritingsSection />

        {/* Namaskaram Modal - Kept as requested */}
        <AnimatePresence>
          {showNamaskaramModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setShowNamaskaramModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-card border border-border rounded-3xl p-8 max-w-lg w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center">
                  <Heart className="w-16 h-16 text-primary mx-auto mb-4 fill-primary/20" />
                  <h2 className="text-3xl font-bold mb-2">Respectful Connection</h2>
                  <p className="text-xl text-primary font-medium mb-6">"Recognizing the spark within"</p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    It's more than just 'hello' - it's a recognition of the spark within each of us.
                    A respectful way to acknowledge the sacredness in every person we meet.
                  </p>
                  <Button onClick={() => setShowNamaskaramModal(false)} className="w-full">
                    Beautiful, thanks!
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default Home;