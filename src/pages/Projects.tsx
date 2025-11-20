import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TechnicalTooltip from '../components/TechnicalTooltip';
import {
  ExternalLink,
  Github,
  Search,
  Filter,
  Calendar,
  Users,
  DollarSign,
  TrendingUp,
  Zap,
  Award,
  PlayCircle,
  FileText,
  Building,
  Cpu,
  BarChart3,
  Settings,
  CheckCircle,
  ArrowUpRight,
  Clock,
  Target,
  Lightbulb,
  Wrench,
  Layers
} from 'lucide-react';

import { profile } from '../data/profile';

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(0);
  const [easterEggs, setEasterEggs] = useState({
    technicalDepth: false,
    methodologyInsights: false,
    innovationSecrets: false
  });

  // Derive categories from projects
  const categories = useMemo(() => {
    const uniqueCategories = new Set(profile.projects.map(p => p.category || 'Other'));
    return ['All', ...Array.from(uniqueCategories)];
  }, []);

  // Easter egg functions for technical depth showcase
  const triggerEasterEgg = (type: keyof typeof easterEggs) => {
    setEasterEggs(prev => ({ ...prev, [type]: true }));
    setTimeout(() => {
      setEasterEggs(prev => ({ ...prev, [type]: false }));
    }, 5000);
  };

  const handleTechnicalClick = () => {
    console.log('🔧 Technical Depth Easter Egg Triggered - Manufacturing AI Specialist');
    triggerEasterEgg('technicalDepth');
  };

  const handleMethodologyClick = () => {
    console.log('📊 Methodology Insights Easter Egg Triggered - Operations Excellence');
    triggerEasterEgg('methodologyInsights');
  };

  const handleInnovationClick = () => {
    console.log('🚀 Innovation Secrets Easter Egg Triggered - Cross-Industry Innovation');
    triggerEasterEgg('innovationSecrets');
  };

  const tpmMethodology = {
    certification: "JIPM (Japan Institute of Plant Maintenance) trained",
    award: "TPM Special Award for excellence in Predictive Maintenance, 5S, and Zero Breakdowns",
    implementation: {
      "Autonomous Maintenance": "36+ hours operator training, equipment ownership development",
      "Planned Maintenance": "SAP integration, SCADA-based predictive analytics",
      "Focused Improvement": "Kaizen projects, equipment modernization",
      "Quality Maintenance": "Statistical process control, defect prevention",
      "Training & Education": "Cross-functional team development, SOP creation"
    },
    results: "83% downtime reduction across 36 machines, significant cost savings"
  };

  const featuredProjects = profile.projects;

  const projectStats = {
    totalProjects: featuredProjects.length,
    totalSavings: 'High Impact',
    averageTimeline: '6-18 months',
    technologiesUsed: 35,
    teamMembersLed: '25+'
  };

  const filteredProjects = useMemo(() => {
    let filtered = featuredProjects;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(project => {
        // Search in basic fields
        const basicMatch =
          project.title.toLowerCase().includes(term) ||
          (project.subtitle || '').toLowerCase().includes(term) ||
          (project.category || '').toLowerCase().includes(term) ||
          (project.status || '').toLowerCase().includes(term);

        // Search in technologies array
        const techMatch = (project.technologies || []).some(tech =>
          tech.toLowerCase().includes(term)
        );

        // Search in quantified results keys and values
        const resultsMatch = Object.entries(project.quantifiedResults || {}).some(([key, value]) =>
          key.toLowerCase().includes(term) ||
          (typeof value === 'string' && value.toLowerCase().includes(term))
        );

        // Search in business context and challenge
        const contextMatch =
          (project.businessContext || '').toLowerCase().includes(term) ||
          (project.challenge || '').toLowerCase().includes(term);

        // Search in scope array
        const scopeMatch = (project.scope || []).some(item =>
          item.toLowerCase().includes(term)
        );

        // Search in technical solution arrays
        const techSolutionMatch = Object.values(project.technicalSolution || {}).some(solutionArray =>
          Array.isArray(solutionArray) && solutionArray.some(solution =>
            solution.toLowerCase().includes(term)
          )
        );

        return basicMatch || techMatch || resultsMatch || contextMatch || scopeMatch || techSolutionMatch;
      });
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  const getProjectIcon = (project: any) => {
    if (project.category === 'Hero MotoCorp') return Building;
    if (project.title.includes('AI')) return Cpu;
    if (project.category === 'Research') return FileText;
    if (project.category === 'Current Work') return Zap;
    return Target;
  };

  return (
    <div className="min-h-screen bg-bg">
      {/* Easter Egg Overlays */}
      <AnimatePresence>
        {easterEggs.technicalDepth && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-4xl w-full shadow-2xl border border-slate-200 dark:border-slate-700"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🔧</div>
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
                  Technical Depth Revealed
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  Manufacturing AI Specialist - Beyond the Surface
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Advanced AI Implementation:</h3>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    <li>• Custom LLM fine-tuning for manufacturing contexts</li>
                    <li>• Edge computing optimization for real-time processing</li>
                    <li>• Multi-modal AI (text, audio, visual) integration</li>
                    <li>• Production-grade error handling and validation</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Manufacturing Expertise:</h3>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    <li>• Deep understanding of production line dynamics</li>
                    <li>• Equipment lifecycle management strategies</li>
                    <li>• Cross-industry process optimization</li>
                    <li>• Integration of traditional and modern methodologies</li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-6">
                <button
                  onClick={() => setEasterEggs(prev => ({ ...prev, technicalDepth: false }))}
                  className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Impressive! Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 py-16">
        {/* Header with Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1
            className="text-4xl md:text-5xl font-bold text-foreground mb-4 cursor-pointer hover:text-primary transition-colors"
            onClick={handleTechnicalClick}
            title="Click to reveal technical depth!"
          >
            Manufacturing Innovation Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Real-world applications of systematic engineering, from traditional manufacturing
            optimization to cutting-edge AI integration
          </p>

          {/* Project Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="text-2xl font-bold text-primary">{projectStats.totalProjects}</div>
              <div className="text-sm text-muted-foreground">Major Projects</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="text-2xl font-bold text-accent-1">{projectStats.totalSavings}</div>
              <div className="text-sm text-muted-foreground">Cost Impact</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="text-2xl font-bold text-accent-2">{projectStats.teamMembersLed}</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="text-2xl font-bold text-orange-500">{projectStats.technologiesUsed}+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-500">{projectStats.averageTimeline}</div>
              <div className="text-sm text-muted-foreground">Avg Timeline</div>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-4xl mx-auto">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects, technologies, outcomes, methodologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="text-muted-foreground w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-border rounded-lg bg-card text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* TPM Methodology Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent-1/5 border border-primary/20 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2
                className="text-3xl font-bold text-foreground mb-4 cursor-pointer hover:text-primary transition-colors"
                onClick={handleMethodologyClick}
                title="Click to reveal methodology insights!"
              >
                TPM Methodology Excellence
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                JIPM-trained Total Productive Maintenance implementation with proven results
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  Certification & Recognition
                </h3>
                <div className="space-y-3">
                  <div className="p-4 bg-card border border-border rounded-lg">
                    <div className="font-medium text-foreground mb-1">JIPM Training</div>
                    <div className="text-sm text-muted-foreground">{tpmMethodology.certification}</div>
                  </div>
                  <div className="p-4 bg-accent-1/10 border border-accent-1/20 rounded-lg">
                    <div className="font-medium text-foreground mb-1">TPM Special Award</div>
                    <div className="text-sm text-muted-foreground">{tpmMethodology.award}</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-accent-1" />
                  Quantified Results
                </h3>
                <div className="p-4 bg-gradient-to-r from-accent-1/10 to-primary/10 border border-accent-1/20 rounded-lg">
                  <div className="text-2xl font-bold text-foreground mb-2">{tpmMethodology.results}</div>
                  <div className="text-sm text-muted-foreground">Across 36 machines in 2 manufacturing plants</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                TPM Implementation Framework
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {Object.entries(tpmMethodology.implementation).map(([pillar, description], index) => (
                  <motion.div
                    key={pillar}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-card border border-border rounded-lg hover:shadow-lg transition-all"
                  >
                    <h4 className="font-semibold text-foreground mb-2">{pillar}</h4>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-12"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => {
              const IconComponent = getProjectIcon(project);

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                >
                  {/* Project Header */}
                  <div className="bg-gradient-to-r from-primary/5 to-accent-1/5 p-8 border-b border-border">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                            <IconComponent className="w-8 h-8 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                                {project.title}
                              </h2>
                              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                                {project.category || 'Other'}
                              </span>
                            </div>
                            <p className="text-lg text-muted-foreground mb-4">
                              {project.subtitle || ''}
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {project.timeline || 'Unknown'}
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                {project.teamSize || 'Unknown'}
                              </div>
                              <div className="flex items-center gap-2">
                                <Settings className="w-4 h-4" />
                                {project.status || 'Unknown'}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quick Results */}
                      <div className="lg:w-80">
                        <div className="bg-card border border-border rounded-xl p-4">
                          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-accent-1" />
                            Key Outcomes
                          </h3>
                          <div className="space-y-2">
                            {Object.entries(project.quantifiedResults || {}).slice(0, 3).map(([metric, value]) => (
                              <div key={metric} className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">{metric}:</span>
                                <span className="text-sm font-semibold text-foreground">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-8">
                    {/* Business Context & Challenge */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Target className="w-5 h-5 text-primary" />
                          Business Context
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {project.businessContext || ''}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Lightbulb className="w-5 h-5 text-accent-2" />
                          Engineering Challenge
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {project.challenge || ''}
                        </p>
                      </div>
                    </div>

                    {/* Project Scope */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Layers className="w-5 h-5 text-accent-1" />
                        Project Scope & Coverage
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {(project.scope || []).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 p-3 bg-muted/30 rounded-lg">
                            <CheckCircle className="w-4 h-4 text-accent-1 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Solution */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Wrench className="w-5 h-5 text-primary" />
                        Technical Implementation
                      </h3>
                      <div className="grid lg:grid-cols-3 gap-6">
                        {Object.entries(project.technicalSolution || {}).map(([category, solutions]) => (
                          <div key={category} className="bg-muted/20 border border-border rounded-lg p-4">
                            <h4 className="font-medium text-foreground mb-3 capitalize">
                              {category.replace('_', ' ')}
                            </h4>
                            <ul className="space-y-2">
                              {(solutions as string[]).map((solution: string, idx: number) => (
                                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  {solution}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Complete Results */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-accent-1" />
                        Quantified Impact
                      </h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Object.entries(project.quantifiedResults || {}).map(([metric, value]) => (
                          <div key={metric} className="bg-gradient-to-r from-accent-1/5 to-primary/5 border border-accent-1/20 rounded-lg p-4">
                            <div className="font-semibold text-foreground text-lg">{value}</div>
                            <div className="text-sm text-muted-foreground">{metric}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies & Recognition */}
                    <div className="flex flex-col lg:flex-row gap-8 mb-6">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {(project.technologies || []).map((tech) => {
                            // Add tooltips for specific technical terms
                            if (tech === 'TPM') {
                              return (
                                <TechnicalTooltip key={tech} term="TPM" definition="Total Productive Maintenance - A systematic approach to equipment maintenance that aims to maximize equipment effectiveness and eliminate breakdowns." example="Like regularly maintaining your car to prevent breakdowns - oil changes, tire rotations, and check-ups keep it running smoothly." industry="Manufacturing" icon="🔧">
                                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full cursor-help">
                                    {tech}
                                  </span>
                                </TechnicalTooltip>
                              );
                            }
                            if (tech === 'Six Sigma') {
                              return (
                                <TechnicalTooltip key={tech} term="Six Sigma" definition="A data-driven methodology for eliminating defects and improving quality in processes." example="Like ensuring 99.99966% of your products are perfect - if you made 1 million products, only 3.4 would be defective." industry="Quality Management" icon="📊">
                                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full cursor-help">
                                    {tech}
                                  </span>
                                </TechnicalTooltip>
                              );
                            }
                            if (tech === 'PLC Programming') {
                              return (
                                <TechnicalTooltip key={tech} term="PLC Programming" definition="Programmable Logic Controller programming - creating software to control industrial machinery and processes." example="Like writing instructions for a robot to follow specific steps in a manufacturing process." industry="Manufacturing" icon="🤖">
                                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full cursor-help">
                                    {tech}
                                  </span>
                                </TechnicalTooltip>
                              );
                            }
                            if (tech === 'IoT Sensors') {
                              return (
                                <TechnicalTooltip key={tech} term="IoT Sensors" definition="Internet of Things sensors that collect data from equipment and send it to monitoring systems." example="Like fitness trackers for machines - they monitor health and performance in real-time." industry="Manufacturing" icon="📡">
                                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full cursor-help">
                                    {tech}
                                  </span>
                                </TechnicalTooltip>
                              );
                            }
                            if (tech === 'LLaMA') {
                              return (
                                <TechnicalTooltip key={tech} term="LLaMA" definition="Large Language Model Meta AI - A powerful AI model that can understand and generate human-like text." example="Like having a very smart assistant that can read and understand technical manuals to help solve problems." industry="AI" icon="🧠">
                                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full cursor-help">
                                    {tech}
                                  </span>
                                </TechnicalTooltip>
                              );
                            }
                            if (tech === 'RAG') {
                              return (
                                <TechnicalTooltip key={tech} term="RAG" definition="Retrieval-Augmented Generation - A technique that combines AI with specific knowledge to provide accurate answers." example="Like having an AI assistant that can look up information from a library before answering your questions." industry="AI" icon="🔍">
                                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full cursor-help">
                                    {tech}
                                  </span>
                                </TechnicalTooltip>
                              );
                            }
                            if (tech === 'Prompt Engineering') {
                              return (
                                <TechnicalTooltip key={tech} term="Prompt Engineering" definition="The art and science of crafting effective instructions for AI models to get the best results." example="Like learning how to ask questions in the right way to get helpful answers from a smart assistant." industry="AI" icon="💬">
                                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full cursor-help">
                                    {tech}
                                  </span>
                                </TechnicalTooltip>
                              );
                            }
                            // Default rendering for other technologies
                            return (
                              <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                                {tech}
                              </span>
                            );
                          })}
                        </div>
                      </div>

                      {project.recognition && project.recognition.length > 0 && (
                        <div className="lg:w-80">
                          <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                            <Award className="w-4 h-4 text-accent-1" />
                            Recognition:
                          </h4>
                          <div className="space-y-2">
                            {(project.recognition || []).map((award, idx) => (
                              <div key={idx} className="text-sm text-muted-foreground bg-accent-1/5 border border-accent-1/20 rounded-lg p-3">
                                {award}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Project Links */}
                    {project.links && (
                      <div className="flex flex-wrap gap-3">
                        {project.links.demo && (
                          <motion.a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-contrast rounded-lg font-medium hover:bg-primary/90 transition-colors"
                          >
                            <PlayCircle className="w-4 h-4" />
                            Live Demo
                          </motion.a>
                        )}
                        {project.links.repo && (
                          <motion.a
                            href={project.links.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            Source Code
                          </motion.a>
                        )}
                        {project.links.case_study && (
                          <motion.a
                            href={project.links.case_study}
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-1 text-white rounded-lg font-medium hover:bg-accent-1/90 transition-colors"
                          >
                            <FileText className="w-4 h-4" />
                            Full Case Study
                          </motion.a>
                        )}
                        {project.links.papers && (
                          <motion.a
                            href={project.links.papers}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-2 text-white rounded-lg font-medium hover:bg-accent-2/90 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Research Papers
                          </motion.a>
                        )}
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* No Results State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search terms or category filter</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="px-6 py-3 bg-primary text-primary-contrast rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              View All Projects
            </button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent-1/10 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Apply These Methodologies?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These systematic approaches to manufacturing challenges can be adapted to your specific
              operational needs. Let's discuss how to implement similar solutions in your environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://calendly.com/d/cqp7-3p3-jwq/30-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-contrast rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Schedule Technical Discussion
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors"
              >
                <ArrowUpRight className="w-5 h-5" />
                Get Project Details
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;