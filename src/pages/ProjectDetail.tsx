import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Github, ExternalLink, Calendar, User } from 'lucide-react';

import { loadProjects, Project } from '../utils/content';
import { profile } from '../data/profile';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Chip from '../components/ui/Chip';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const allProjects = await loadProjects();
        const foundProject = allProjects.find(p => p.slug === slug);
        setProject(foundProject || null);
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
          <Button href="/projects">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
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
            <Button href="/projects" variant="ghost" className="flex items-center">
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

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <Chip key={index} variant="primary">
                      {tech}
                    </Chip>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {project.links.demo && (
                    <Button
                      href={project.links.demo}
                      target="_blank"
                      className="flex items-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Demo
                    </Button>
                  )}
                  {project.links.repo && (
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
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Content */}
          <motion.div variants={itemVariants}>
            <Card>
              <div className="p-8">
                <div 
                  className="prose prose-lg dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: project.content }}
                />
              </div>
            </Card>
          </motion.div>

          {/* Project Images */}
          {project.images.length > 0 && (
            <motion.div variants={itemVariants} className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Project Gallery
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.images.map((image, index) => (
                  <Card key={index} className="overflow-hidden">
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

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
              <Button href="/projects" size="lg">
                View All Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectDetail;


