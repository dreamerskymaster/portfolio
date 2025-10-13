import React from 'react';
import { motion } from 'framer-motion';
import TechnicalTooltip from '../components/TechnicalTooltip';
import { 
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Lightbulb,
  Rocket,
  Globe,
  Clock,
  MapPin,
  Building,
  Wrench,
  Brain,
  Zap,
  CheckCircle,
  Calendar
} from 'lucide-react';

const About: React.FC = () => {
  const professionalStatus = {
    workAuthorization: "F-1 Student Visa with OPT and STEM OPT eligibility until 2029",
    availability: "Full-time opportunities from December 2026, Pre-OPT available on discussion",
    location: "Boston, MA with relocation flexibility nationwide",
    clearanceEligible: "Eligible for security clearance processes if required"
  };

  const currentWork = {
    primary: {
      title: "Manufacturing Engineering Intern",
      company: "VAN DYK Recycling Solutions",
      location: "Norwalk, Connecticut",
      period: "May 2025 - Present",
      focus: "Sustainable manufacturing processes and recycling system optimization",
      icon: Building
    },
    academic: {
      title: "Course Assistant & Grader",
      company: "Northeastern University",
      course: "IE 7215 - Simulation Analysis (Simio Software)",
      period: "January 2025 - May 2025",
      focus: "Teaching next-generation engineers simulation-based optimization techniques",
      icon: GraduationCap
    },
    leadership: {
      title: "Teaching Assistant",
      company: "LEAD360 Program",
      period: "January 2025 - March 2025", 
      focus: "Developing leadership skills through interactive learning and mentorship",
      icon: Users
    }
  };

  const technicalEvolution = [
    {
      phase: "Foundation Building",
      period: "2018-2022",
      focus: "Mechatronics Engineering & Core Concepts",
      achievements: [
        "B.Tech Mechatronics (GPA 3.68) - SRM Institute of Science and Technology",
        "Merit-based scholarship recipient for academic excellence",
        "Research publications in EDM controllers and control systems",
        "Final year project on IIoT-based manufacturing systems",
        "Active participation in technical symposiums and competitions"
      ],
      technologies: ["MATLAB", "SolidWorks", "PLC Programming", "Control Systems", "Arduino", "Raspberry Pi"],
      icon: BookOpen,
      color: "bg-blue-500"
    },
    {
      phase: "Industrial Application",
      period: "2022-2024", 
      focus: "Manufacturing Excellence & Team Leadership at Hero MotoCorp",
      achievements: [
        "Led 25+ member cross-functional teams across multiple manufacturing plants",
        <TechnicalTooltip term="TPM (Total Productive Maintenance)" definition="A systematic approach to equipment maintenance that aims to maximize equipment effectiveness and eliminate breakdowns." example="Like regularly maintaining your car to prevent breakdowns - oil changes, tire rotations, and check-ups keep it running smoothly." industry="Manufacturing" icon="🔧">
          TPM Special Award for maintenance excellence and process optimization
        </TechnicalTooltip>,
        "Managed Vida EV production line tools and equipment worth ₹50M+",
        "Delivered 36+ hours of technical training to 200+ engineers",
        <TechnicalTooltip term="Downtime Reduction" definition="The process of minimizing the time when equipment or systems are not operational due to maintenance, breakdowns, or other issues." example="Like reducing the time your car spends in the repair shop - the less time it's broken, the more you can use it productively." industry="Manufacturing" icon="⏱️">
          Achieved 83% downtime reduction through predictive maintenance implementation
        </TechnicalTooltip>,
        "Generated ₹9M+ annual savings through supply chain efficiency initiatives"
      ],
      technologies: ["SAP", "SCADA", "IoT Sensors", "Automation Systems", 
        <TechnicalTooltip term="TPM" definition="Total Productive Maintenance - A systematic approach to equipment maintenance that aims to maximize equipment effectiveness and eliminate breakdowns." example="Like regularly maintaining your car to prevent breakdowns - oil changes, tire rotations, and check-ups keep it running smoothly." industry="Manufacturing" icon="🔧">
          TPM
        </TechnicalTooltip>, 
        <TechnicalTooltip term="Six Sigma" definition="A data-driven methodology for eliminating defects and improving quality in processes." example="Like ensuring 99.99966% of your products are perfect - if you made 1 million products, only 3.4 would be defective." industry="Quality Management" icon="📊">
          Six Sigma
        </TechnicalTooltip>, 
        <TechnicalTooltip term="Lean Manufacturing" definition="A methodology focused on minimizing waste while maximizing productivity and value for customers." example="Like organizing your kitchen - removing unused items, arranging tools efficiently, and having everything you need within reach." industry="Manufacturing" icon="♻️">
          Lean Manufacturing
        </TechnicalTooltip>
      ],
      icon: Wrench,
      color: "bg-green-500"
    },
    {
      phase: "AI Innovation & Education",
      period: "2024-2025",
      focus: "Intelligent Manufacturing, Teaching & Academic Excellence",
      achievements: [
        "Developed Mano-AI troubleshooting assistant using LLaMA and edge computing",
        "IoT Smart Cell dashboard implementation with 11% availability improvement",
        "Advanced simulation modeling expertise with Simio and MATLAB",
        "Teaching and mentoring emerging engineers at Northeastern University",
        "Course Assistant for Advanced Manufacturing and Simulation Analysis",
        "LEAD360 Teaching Assistant for leadership development programs"
      ],
      technologies: ["LLaMA", "Docker", "AWS IoT", "Simio", "Python", "Edge Computing", "LLM Fine-tuning"],
      icon: Brain,
      color: "bg-purple-500"
    },
    {
      phase: "VDRS Co-op Experience",
      period: "2025",
      focus: "AI-Powered Solutions & Cross-Industry Innovation",
      achievements: [
        "Developed DykScribe AI Q&A system with 95%+ accuracy in audio processing",
        "Implemented RAG system for intelligent document search and knowledge management",
        "Created comprehensive Data Extractor Suite with multi-method PDF processing",
        "Built BlobCheck automated data verification system for cloud-database consistency",
        "Designed Van Dyk One cross-platform mobile app for field service management",
        "Applied automotive manufacturing expertise to recycling and sustainability challenges",
        "Demonstrated cost-effective AI implementation with ethical usage principles"
      ],
      technologies: ["OpenAI Whisper", "GPT-4", "ChromaDB", "Vector Search", "React Native", "Azure Blob Storage", "SQL Server", "Streamlit", "PaddleOCR"],
      icon: Zap,
      color: "bg-orange-500"
    },
    {
      phase: "Current Focus",
      period: "2025-Present",
      focus: "Sustainable Manufacturing & Advanced AI Applications",
      achievements: [
        "Sustainable manufacturing initiatives at VAN DYK Recycling Solutions",
        "Bridging traditional manufacturing with circular economy principles",
        "Cross-industry knowledge transfer from automotive to recycling",
        "Advanced AI model deployment and production optimization",
        "Integration of proven methodologies with emerging technologies"
      ],
      technologies: ["Sustainable Manufacturing", "Circular Economy", "AI Integration", "Process Optimization"],
      icon: Globe,
      color: "bg-emerald-500"
    }
  ];

  const currentLearning = [
    {
      area: "AI-Powered Manufacturing Solutions",
      context: "Through VDRS Co-op, developed multiple production-ready AI systems including audio processing, document search, and data extraction",
      skills: ["OpenAI Integration", "Vector Databases", "Production AI Systems", "Cost-Effective Implementation"]
    },
    {
      area: "Cross-Industry Application",
      context: "Successfully applied automotive manufacturing expertise to recycling and sustainability challenges at VAN DYK",
      skills: ["Knowledge Transfer", "Process Adaptation", "Sustainable Manufacturing", "Circular Economy"]
    },
    {
      area: "Full-Stack Development",
      context: "Built comprehensive solutions from mobile apps to cloud systems, demonstrating versatility in technology implementation",
      skills: ["React Native", "Cloud Integration", "Database Design", "System Architecture"]
    }
  ];

  const uniqueApproach = [
    {
      principle: "AI Efficiency & Ethics",
      description: "Developed cost-effective AI solutions with proper validation, ethical usage, and human oversight - proving AI can be both powerful and responsible",
      impact: "Demonstrates practical AI implementation that delivers value without compromising ethics"
    },
    {
      principle: "Cross-Industry Innovation", 
      description: "Successfully applied automotive manufacturing expertise to recycling solutions, bringing fresh approaches to traditional industry challenges",
      impact: "Shows ability to transfer knowledge and adapt methodologies across different sectors"
    },
    {
      principle: "Technology Integration",
      description: "Combining proven methodologies (TPM, Six Sigma) with emerging technologies (AI, IoT) to create practical innovation",
      impact: "Creates solutions that work in real-world environments rather than just theoretical concepts"
    }
  ];

  return (
    <div className="min-h-screen bg-bg">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Journey
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            From mechatronics foundations to AI-driven manufacturing solutions - 
            a continuous evolution in engineering excellence
          </p>
          
          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-8"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-3 h-3 bg-emerald-500 rounded-full"
            />
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
              Available from December 2026 for Full-time Roles
            </span>
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: 1
              }}
              className="text-emerald-500"
            >
              🚀
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Current Work Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Current Focus (2025)
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(currentWork).map(([key, work], index) => {
              const IconComponent = work.icon;
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {work.title}
                  </h3>
                  <div className="text-primary font-medium mb-1">{work.company}</div>
                  {'course' in work && work.course && (
                    <div className="text-sm text-muted-foreground mb-2">{work.course}</div>
                  )}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Clock className="w-4 h-4" />
                    {work.period}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {work.focus}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Technical Evolution Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 
            className="text-2xl font-bold text-foreground mb-8 text-center"
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 20px rgba(16, 185, 129, 0.3)"
            }}
          >
            Technical Evolution
            <motion.span
              className="ml-2"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ⚡
            </motion.span>
          </motion.h2>
          <div className="relative">
            {/* Enhanced Timeline Line with Gradient */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 via-cyan-500 to-purple-500 hidden lg:block rounded-full shadow-lg"></div>
            
            <div className="space-y-8">
              {technicalEvolution.map((phase, index) => {
                const IconComponent = phase.icon;
                return (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Content Card with Glassmorphic Effect */}
                    <motion.div 
                      className="flex-1 glass-card border border-white/20 rounded-2xl p-6 max-w-lg backdrop-blur-sm"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(16, 185, 129, 0.1)"
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div 
                          className={`w-12 h-12 ${phase.color} rounded-xl flex items-center justify-center shadow-lg`}
                          whileHover={{ 
                            rotate: 360,
                            scale: 1.1
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{phase.phase}</h3>
                          <div className="text-sm text-slate-600 dark:text-slate-300">{phase.period}</div>
                        </div>
                        {/* Easter egg sparkle */}
                        <motion.div
                          className="ml-auto"
                          animate={{ 
                            rotate: [0, 180, 360],
                            scale: [1, 1.2, 1]
                          }}
                          transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            delay: index * 0.5
                          }}
                        >
                          ✨
                        </motion.div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{phase.focus}</p>
                      <div className="space-y-3 mb-6">
                        {phase.achievements.map((achievement, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                            whileHover={{ x: 5 }}
                          >
                            <motion.div
                              animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [0.7, 1, 0.7]
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                delay: idx * 0.2
                              }}
                            >
                              <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            </motion.div>
                            <span className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {phase.technologies.map((tech, techIdx) => (
                          <motion.span 
                            key={typeof tech === 'string' ? tech : `tech-${techIdx}`} 
                            className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-600 dark:text-emerald-400 text-xs rounded-full border border-emerald-500/30 hover:shadow-md transition-all duration-200"
                            whileHover={{ 
                              scale: 1.05,
                              boxShadow: "0 4px 12px rgba(16, 185, 129, 0.2)"
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIdx * 0.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Enhanced Timeline Node */}
                    <motion.div 
                      className="hidden lg:block w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full border-4 border-white dark:border-slate-800 shadow-xl z-10"
                      whileHover={{ 
                        scale: 1.3,
                        boxShadow: "0 0 20px rgba(16, 185, 129, 0.5)"
                      }}
                      animate={{ 
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          "0 0 0px rgba(16, 185, 129, 0)",
                          "0 0 10px rgba(16, 185, 129, 0.3)",
                          "0 0 0px rgba(16, 185, 129, 0)"
                        ]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <motion.div
                        className="w-full h-full rounded-full bg-white/20 flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ 
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <motion.span
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3
                          }}
                        >
                          ⚡
                        </motion.span>
                      </motion.div>
                    </motion.div>

                    {/* Spacer for alternating layout */}
                    <div className="flex-1 max-w-lg"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Current Learning & Growth */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Continuous Learning in Action
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {currentLearning.map((learning, index) => (
              <motion.div
                key={learning.area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {learning.area}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {learning.context}
                </p>
                <div className="space-y-1">
                  {learning.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent-1 rounded-full"></div>
                      <span className="text-sm text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Unique Engineering Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Engineering Philosophy
          </h2>
          <div className="space-y-6">
            {uniqueApproach.map((approach, index) => (
              <motion.div
                key={approach.principle}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {approach.principle}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {approach.description}
                    </p>
                  </div>
                  <div className="md:w-2/3">
                    <div className="bg-accent-1/5 border border-accent-1/20 rounded-lg p-4">
                      <h4 className="font-medium text-foreground mb-2">Real-World Impact:</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {approach.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Geographic & Cultural Perspective */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Global Manufacturing Perspective
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Indian Manufacturing Experience
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent-1 mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Haridwar & Tirupati Plants</div>
                    <div className="text-sm text-muted-foreground">Hero MotoCorp's largest manufacturing facilities</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-accent-2 mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Multi-generational Teams</div>
                    <div className="text-sm text-muted-foreground">Leading teams with 20+ years experience gaps</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Wrench className="w-4 h-4 text-primary mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Legacy System Modernization</div>
                    <div className="text-sm text-muted-foreground">Upgrading decades-old manufacturing infrastructure</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-accent-1" />
                US Innovation Environment
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-primary mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Advanced Research Access</div>
                    <div className="text-sm text-muted-foreground">Cutting-edge simulation and AI laboratories</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building className="w-4 h-4 text-accent-2 mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Sustainable Manufacturing Focus</div>
                    <div className="text-sm text-muted-foreground">Recycling solutions and circular economy principles</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-4 h-4 text-accent-1 mt-1" />
                  <div>
                    <div className="font-medium text-foreground">AI Integration Opportunities</div>
                    <div className="text-sm text-muted-foreground">Access to latest LLM models and edge computing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Evolution Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Evolution of Technical Expertise
          </h2>
          <div className="space-y-8">
            {technicalEvolution.map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 ${phase.color} rounded-lg flex items-center justify-center`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{phase.phase}</h3>
                          <div className="text-sm text-muted-foreground">{phase.period}</div>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{phase.focus}</p>
                      <div className="flex flex-wrap gap-1">
                        {phase.technologies.map((tech, techIdx) => (
                          <span key={typeof tech === 'string' ? tech : `tech-${techIdx}`} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="font-medium text-foreground mb-3">Key Achievements:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-accent-1 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Professional Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Professional Status & Availability
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Work Authorization
              </h3>
              <p className="text-muted-foreground mb-4">{professionalStatus.workAuthorization}</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent-1" />
                  <span>Eligible for OPT (Optional Practical Training)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent-1" />
                  <span>STEM OPT extension available until 2029</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent-1" />
                  <span>Security clearance eligible if required</span>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent-1" />
                Availability
              </h3>
              <p className="text-muted-foreground mb-4">{professionalStatus.availability}</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Boston, MA with nationwide relocation flexibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent-2" />
                  <span>Pre-OPT opportunities available on discussion</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-accent-1" />
                  <span>Open to full-time and contract roles in manufacturing, automation, and AI</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What Drives Me */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent-1/10 border border-primary/20 rounded-2xl p-8 text-center">
            <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              What Drives My Engineering Approach
            </h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Manufacturing isn't just about machines and processes - it's about people, systems, and continuous evolution. 
                My approach combines the systematic rigor learned from managing legacy systems in India with the 
                innovation opportunities available in the US manufacturing landscape.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4">
                  <Award className="w-8 h-8 text-accent-1 mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground mb-1">Proven Methods</h4>
                  <p className="text-sm text-muted-foreground">TPM, Six Sigma, and A3 methodology expertise</p>
                </div>
                <div className="p-4">
                  <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground mb-1">Emerging Technologies</h4>
                  <p className="text-sm text-muted-foreground">AI, IoT, and sustainable manufacturing integration</p>
                </div>
                <div className="p-4">
                  <Users className="w-8 h-8 text-accent-2 mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground mb-1">Human-Centered Design</h4>
                  <p className="text-sm text-muted-foreground">Technology adoption through effective change management</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;