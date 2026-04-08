import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Github, ExternalLink, Calendar, User, Target, BarChart, Settings, Briefcase, Lock } from 'lucide-react';

import { loadProjects, Project, processMarkdown } from '../utils/content';
import { profile, Project as ProfileProject } from '../data/profile';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Chip from '../components/ui/Chip';
import Marquee from '../components/ui/Marquee';
import PageTransition from '../components/PageTransition';

interface ExtendedProject extends Project {
  id: string;
  date?: string;
  businessContext?: string;
  challenge?: string;
  scope?: string[];
  technicalSolution?: Record<string, string[]>;
  quantifiedResults?: Record<string, string>;
  recognition?: string[];
}

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<ExtendedProject | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const loadProject = async () => {
      try {
        // First try to find in profile.ts (primary source)
        const profileProject = profile.projects.find(p => p.id === slug);

        if (profileProject) {
          const processedContent = await processMarkdown(profileProject.content || profileProject.summary);
          setProject({
            ...profileProject,
            slug: profileProject.id,
            year: parseInt(profileProject.timeline?.split('-')[0] || "2025"),
            role: profileProject.teamSize || "Solo Developer",
            tech: profileProject.technologies,
            links: profileProject.links || {},
            images: profileProject.images || [],
            content: processedContent,
            businessContext: profileProject.businessContext,
            challenge: profileProject.challenge,
            scope: profileProject.scope,
            technicalSolution: profileProject.technicalSolution as Record<string, string[]>,
            quantifiedResults: profileProject.quantifiedResults as Record<string, string>,
            recognition: profileProject.recognition
          } as ExtendedProject);
        } else {
          // Fallback to markdown loading
          const allProjects = await loadProjects();
          const foundProject = allProjects.find(p => p.slug === slug);
          setProject((foundProject as ExtendedProject) || null);
        }
      } catch (error) {
        console.error('Error loading project:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadProject();
  }, [slug]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Button to="/projects">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <Helmet>
        <title>{project.title} - {profile.name}</title>
        <meta name="description" content={project.summary} />
      </Helmet>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen py-20"
      >
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <motion.div variants={itemVariants} className="mb-8">
            <Button to="/projects" variant="ghost" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </motion.div>

          {/* Project Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{project.role}</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  {project.title}
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, index) => (
                    <Chip key={index} variant="primary" className="text-sm">
                      {tech}
                    </Chip>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {project.links.demo && project.links.demo !== '#' && (
                    <Button
                      href={project.links.demo}
                      target="_blank"
                      className="flex items-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Demo
                    </Button>
                  )}
                  {project.links.repo && project.links.repo !== '#' && (
                    <Button
                      href={project.links.repo}
                      target="_blank"
                      variant="outline"
                      className="flex items-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  )}
                  {/* NDA Badge for Van Dyk projects with no public repo */}
                  {project.category === 'Van Dyk Recycling Solutions' && (!project.links.repo || project.links.repo === '#') && (
                    <div className="inline-flex items-center px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-600 dark:text-amber-400 text-sm font-medium">
                      <Lock className="w-4 h-4 mr-2" />
                      Confidential (NDA)
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-card border border-border p-4 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Timeline</p>
                  <p className="text-sm font-bold">{project.year}</p>
                </div>
              </div>
              <div className="bg-card border border-border p-4 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-1/10 rounded-xl flex items-center justify-center">
                  <User className="w-5 h-5 text-accent-1" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Role</p>
                  <p className="text-sm font-bold">{project.role}</p>
                </div>
              </div>
              {project.quantifiedResults && Object.keys(project.quantifiedResults).length > 0 && (
                <div className="bg-card border border-border p-4 rounded-2xl flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                    <BarChart className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Impact</p>
                    <p className="text-sm font-bold">{Object.values(project.quantifiedResults)[0]}</p>
                  </div>
                </div>
              )}
              <div className="bg-card border border-border p-4 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Status</p>
                  <p className="text-sm font-bold">Production</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Project Content */}
              <motion.div variants={itemVariants}>
                <Card className="overflow-hidden border-border/50">
                  <div className="p-8 md:p-12">
                    {project.id === 'hero-motocorp-transformation' ? (
                      <HeroMotoCorpContent content={project.content} images={project.images} />
                    ) : (
                      <div
                        className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary prose-img:rounded-3xl"
                        dangerouslySetInnerHTML={{ __html: project.content }}
                      />
                    )}
                  </div>
                </Card>
              </motion.div>

              {/* Project Images - Replaced with Marquee for Hero MotoCorp */}
              {project.id !== 'hero-motocorp-transformation' && project.images.length > 0 && (
                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Briefcase className="w-6 h-6 text-primary" />
                    Project Gallery
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.images.map((image, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="group relative cursor-pointer overflow-hidden rounded-3xl border border-border"
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-auto aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-black/50 text-white p-3 rounded-full">
                            <ExternalLink className="w-6 h-6" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar with Meta Data */}
            <div className="space-y-8">
              {project.businessContext && (
                <motion.div variants={itemVariants}>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    Business Context
                  </h3>
                  <div className="bg-card border border-border p-6 rounded-3xl">
                    <p className="text-muted-foreground text-sm leading-relaxed italic">
                      "{project.businessContext}"
                    </p>
                  </div>
                </motion.div>
              )}

              {project.technicalSolution && (
                <motion.div variants={itemVariants}>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-primary" />
                    Technical Solutions
                  </h3>
                  <div className="bg-card border border-border p-6 rounded-3xl space-y-4">
                    {Object.entries(project.technicalSolution).map(([key, items]) => (
                      <div key={key}>
                        <p className="text-xs font-bold text-primary uppercase mb-2">{key.replace('_', ' ')}</p>
                        <ul className="space-y-2">
                          {Array.isArray(items) && items.map((item, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {project.quantifiedResults && (
                <motion.div variants={itemVariants}>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <BarChart className="w-5 h-5 text-primary" />
                    Impact & Results
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {Object.entries(project.quantifiedResults).map(([key, value]) => (
                      <div key={key} className="bg-card border border-border p-4 rounded-2xl">
                        <p className="text-xs text-muted-foreground mb-1 font-bold uppercase">{key}</p>
                        <p className="text-lg font-bold text-foreground">{value}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Related Projects */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                More Projects
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Explore other projects in my portfolio.
              </p>
            </div>
            <div className="text-center">
              <Button to="/projects" size="lg">
                View All Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Lightbox / Image Modal */}
      {
        selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <span className="sr-only">Close</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              <img
                src={selectedImage}
                alt="Project Fullscreen"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        )
      }
    </PageTransition >
  );
};

// Custom component for Hero MotoCorp sub-projects
const HeroMotoCorpContent: React.FC<{ content: string; images?: string[] }> = ({ content, images = [] }) => {
  const [showAll, setShowAll] = useState(false);

  const scrollToProject = (index: number) => {
    // Determine which project this image belongs to
    // 14 images total, 7 projects -> 2 images per project
    // Index 0,1 -> Project 0
    // Index 2,3 -> Project 1
    const projectIndex = Math.floor(index / 2);

    // Ensure we are showing all projects if the target is hidden
    if (projectIndex >= 4) {
      setShowAll(true);
      // Small timeout to allow render before scrolling
      setTimeout(() => {
        const element = document.getElementById(`hero-project-${projectIndex}`);
        element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    } else {
      const element = document.getElementById(`hero-project-${projectIndex}`);
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Split content into sections based on h3 tags
  const sections = content.split(/<h3[^>]*>/);
  const intro = sections[0];
  const subProjects = sections.slice(1).map(section => {
    const [title, ...rest] = section.split('</h3>');
    return { title, content: rest.join('</h3>') };
  });

  const displayedProjects = showAll ? subProjects : subProjects.slice(0, 4);

  return (
    <div className="space-y-16">
      <div
        className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary prose-img:rounded-[2rem] leading-relaxed opacity-90"
        dangerouslySetInnerHTML={{ __html: intro }}
      />

      {/* Marquee Section */}
      {images.length > 0 && (
        <div className="w-full -mx-6 md:-mx-12 lg:-mx-16 px-6 md:px-12 lg:px-16 overflow-hidden">
          <Marquee
            images={images}
            speed={40}
            onImageClick={scrollToProject}
            className="py-8"
          />
        </div>
      )}

      <div className="relative">
        <div className="relative">
          {/* Visual Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3 tracking-tight">
                Project <span className="text-primary">Portfolio</span> Details
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Highlights of strategic manufacturing initiatives and technical optimizations delivered during the transformation period.
              </p>
            </div>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-card flex items-center justify-center text-xs font-bold text-primary shadow-lg">
                  HM{i}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayedProjects.map((project, idx) => (
              <motion.div
                key={idx}
                id={`hero-project-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Card Background with Glassmorphism */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-[2rem] border border-white/10 group-hover:border-primary/30 transition-all duration-500 shadow-sm group-hover:shadow-2xl group-hover:shadow-primary/5" />

                <div className="relative p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      {idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {project.title.replace(/^\d+\.\s*/, '')}
                    </h3>
                  </div>

                  <div
                    className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground leading-relaxed flex-grow opacity-80 group-hover:opacity-100 transition-opacity"
                    dangerouslySetInnerHTML={{ __html: project.content }}
                  />

                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">Hero MotoCorp — Core Project</span>
                    <Settings className="w-4 h-4 text-primary/40 group-hover:rotate-90 transition-transform duration-700" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {subProjects.length > 4 && (
            <div className="text-center mt-16">
              <motion.button
                onClick={() => setShowAll(!showAll)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all"
              >
                {showAll ? 'Show Fewer Projects' : `Show All ${subProjects.length} Projects`}
                <ArrowLeft className={`w-5 h-5 transition-transform duration-500 ${showAll ? 'rotate-90' : '-rotate-90'}`} />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;


