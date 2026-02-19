import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TechnicalTooltip from '../components/TechnicalTooltip';
import FutureVision from '../components/FutureVision';
import PageTransition from '../components/PageTransition';
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Lightbulb,
  Globe,
  Clock,
  MapPin,
  Building,
  Wrench,
  Brain,
  Zap,
  CheckCircle,
  Calendar,
  Linkedin,
  Github,
  Mail
} from 'lucide-react';
import { profile } from '../data/profile';
import PersonalPhilosophy from '../components/PersonalPhilosophy';
import CliftonStrengths from '../components/CliftonStrengths';
import Chip from '../components/ui/Chip';
import ParallaxHeading from '../components/ParallaxHeading';

const About: React.FC = () => {
  const professionalStatus = {
    workAuthorization: "F-1 Student Visa with OPT and STEM OPT eligibility until 2029",
    availability: "Available Full Time from Aug 2026 - Pre OPT available on Request",
    location: "Boston, MA with relocation flexibility nationwide",
    clearanceEligible: "Eligible for security clearance processes if required"
  };

  const currentWork = {
    primary: {
      title: "Manufacturing Engineering Intern",
      company: "VAN DYK Recycling Solutions",
      location: "Norwalk, Connecticut",
      period: "May 2025 - Dec 2025",
      focus: "Sustainable manufacturing processes and recycling system optimization",
      icon: Building
    },
    academic: {
      title: "Teaching Assistant - IE4350/4351",
      company: "Northeastern University",
      course: "Industrial Engineering Capstone/Core",
      period: "January 2026 - Present",
      focus: "Mentoring engineers on manufacturing systems and design principles",
      icon: GraduationCap
    },
    leadership: {
      title: "Off-Campus Ambassador",
      company: "Northeastern University",
      period: "January 2026 - Present",
      focus: "Supporting the off-campus student community and advocating for student needs",
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
        <TechnicalTooltip key="tpm" term="TPM (Total Productive Maintenance)" definition="A systematic approach to equipment maintenance that aims to maximize equipment effectiveness and eliminate breakdowns." example="Like regularly maintaining your car to prevent breakdowns - oil changes, tire rotations, and check-ups keep it running smoothly." industry="Manufacturing" icon="🔧">
          TPM Special Award for maintenance excellence and process optimization
        </TechnicalTooltip>,
        "Managed Vida EV production line tools and equipment worth ₹50M+",
        "Delivered 36+ hours of technical training to 200+ engineers",
        <TechnicalTooltip key="downtime" term="Downtime Reduction" definition="The process of minimizing the time when equipment or systems are not operational due to maintenance, breakdowns, or other issues." example="Like reducing the time your car spends in the repair shop - the less time it's broken, the more you can use it productively." industry="Manufacturing" icon="⏱️">
          Achieved 83% downtime reduction through predictive maintenance implementation
        </TechnicalTooltip>,
        "Generated ₹9M+ annual savings through supply chain efficiency initiatives"
      ],
      technologies: ["SAP", "SCADA", "IoT Sensors", "Automation Systems",
        <TechnicalTooltip key="tpm-tech" term="TPM" definition="Total Productive Maintenance - A systematic approach to equipment maintenance that aims to maximize equipment effectiveness and eliminate breakdowns." example="Like regularly maintaining your car to prevent breakdowns - oil changes, tire rotations, and check-ups keep it running smoothly." industry="Manufacturing" icon="🔧">
          TPM
        </TechnicalTooltip>,
        <TechnicalTooltip key="six-sigma" term="Six Sigma" definition="A data-driven methodology for eliminating defects and improving quality in processes." example="Like ensuring 99.99966% of your products are perfect - if you made 1 million products, only 3.4 would be defective." industry="Quality Management" icon="📊">
          Six Sigma
        </TechnicalTooltip>,
        <TechnicalTooltip key="lean" term="Lean Manufacturing" definition="A methodology focused on minimizing waste while maximizing productivity and value for customers." example="Like organizing your kitchen - removing unused items, arranging tools efficiently, and having everything you need within reach." industry="Manufacturing" icon="♻️">
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
        "Developed ManuFX troubleshooting assistant using LLaMA and edge computing",
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
      phase: "Current Focus: AI & Smart Mfg",
      period: "2026-Present",
      focus: "Sustainable Manufacturing & Advanced AI Applications",
      achievements: [
        "Advanced coursework: ML Ops, Human Performance Engineering, and Digital Manufacturing",
        "Teaching Assistant for IE4350/4351, bridging academic theory with industrial practice",
        "Off-Campus Ambassador, fostering student community and professional networking",
        "Developing AI models for cost-effective IoT implementation in smart manufacturing",
        "Promoting sustainability through circular economy principles in engineering design"
      ],
      technologies: ["ML Ops", "Smart Manufacturing", "IoT Strategy", "Process Optimization", "Human Factors"],
      icon: Globe,
      color: "bg-emerald-500"
    }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>About Ajith Srikanth | Manufacturing & Automation Journey</title>
        <meta name="description" content="Explore the technical evolution of Ajith Srikanth, from Mechatronics foundations to leading 25-member teams at Hero MotoCorp and developing AI solutions for manufacturing excellence." />
      </Helmet>
      <div className="min-h-screen relative overflow-hidden">

        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">
              Technical Journey
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Specializing in the intersection of <span className="text-foreground font-medium">AI</span> and <span className="text-foreground font-medium">Machines</span>.
              From mechatronics foundations to AI-driven manufacturing solutions.
            </p>

            {/* Socials / Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="flex flex-wrap justify-center gap-6 mt-4 mb-8"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                Boston, MA
              </div>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                Email
              </a>
            </motion.div>

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
                Available Full Time from Aug 2026 - Pre OPT available on Request
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

          {/* Personal Philosophy */}
          <PersonalPhilosophy />

          {/* CliftonStrengths */}
          <CliftonStrengths />

          {/* Current Work Focus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <ParallaxHeading direction="vertical" distance={20} className="mb-0">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                Current Focus (2025)
              </h2>
            </ParallaxHeading>
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
          <div className="mb-16">
            <ParallaxHeading distance={40} className="mb-0">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                Evolution of Technical Expertise
              </h2>
            </ParallaxHeading>
            <VerticalTimeline lineColor="rgba(99, 102, 241, 0.2)">
              {technicalEvolution.map((phase, index) => {
                const IconComponent = phase.icon;
                return (
                  <VerticalTimelineElement
                    key={phase.phase}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(26, 26, 26, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#fff', borderRadius: '1rem', boxShadow: 'none' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(26, 26, 26, 0.8)' }}
                    date={phase.period}
                    iconStyle={{ background: '#3B82F6', color: '#fff' }} // Default blue, specific colors handled by CSS if needed
                    icon={<IconComponent />}
                  >
                    <h3 className="vertical-timeline-element-title text-xl font-bold">{phase.phase}</h3>
                    <h4 className="vertical-timeline-element-subtitle text-primary text-sm mt-1">{phase.focus}</h4>

                    <div className="mt-4">
                      <h5 className="font-medium text-sm mb-2 text-gray-300">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {phase.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-accent-1 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {phase.technologies.slice(0, 5).map((tech, techIdx) => (
                      <Chip
                        key={typeof tech === 'string' ? tech : `tech-${techIdx}`}
                        variant="primary"
                        size="sm"
                        className="mr-2 mb-2"
                      >
                        {tech}
                      </Chip>
                    ))}
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>

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
                    <CheckCircle className="w-4 h-4 text-accent-1" />
                    <span>Personal vehicle available for commuting and relocation mobility</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-accent-1" />
                    <span>Open to full-time and contract roles in manufacturing, automation, and AI</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Future Vision */}
          <FutureVision />
        </div>
      </div>
    </PageTransition>
  );
};

export default About;