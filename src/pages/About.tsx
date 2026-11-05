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
  Mail,
  BarChart,
  RefreshCw,
  Rocket,
  Info
} from 'lucide-react';
import { profile } from '../data/profile';
import PersonalPhilosophy from '../components/PersonalPhilosophy';
import CliftonStrengths from '../components/CliftonStrengths';
import VolunteeringExperience from '../components/VolunteeringExperience';
import Chip from '../components/ui/Chip';
import ParallaxHeading from '../components/ParallaxHeading';

const About: React.FC = () => {
  const professionalStatus = {
    workAuthorization: "F-1 OPT, work authorized through July 2027, with 24-month STEM OPT extension eligibility",
    availability: "Currently working full-time at VAN DYK Recycling Solutions",
    location: "Boston, MA with relocation flexibility nationwide",
    clearanceEligible: "Eligible for security clearance processes if required"
  };

  const currentWork = {
    primary: {
      title: "Inventory Forecast Analyst",
      company: "VAN DYK Recycling Solutions",
      location: "Norwalk, Connecticut",
      period: "June 2026 - Present",
      focus: "Spare parts inventory optimization, intermittent demand forecasting, and ERP-integrated analytics",
      icon: Building
    },
    academic: {
      title: "Teaching Assistant - IE4350/4351 & IE7215",
      company: "Northeastern University",
      course: "Capstone & Simulation Analysis (Simio)",
      period: "January 2025 - Present",
      focus: "Mentoring engineers on discrete-event simulation, manufacturing systems, and scale-up design",
      icon: GraduationCap
    },
    leadership: {
      title: "Off-Campus Ambassador",
      company: "Northeastern University",
      period: "January 2026 - April 2026",
      focus: "Supporting the off-campus student community and advocating for student needs",
      icon: Users
    }
  };

  const technicalEvolution = [
    {
      phase: "Foundation Building",
      period: "2018-2022",
      focus: "Mechatronics Engineering & Core Systems",
      achievements: [
        "B.Tech in Mechatronics Engineering (GPA 3.68) - SRM Institute of Science and Technology",
        "Merit-based scholarship recipient for academic excellence",
        "Published research in EDM controllers (IJRASET) and PLC elevator systems (IRJET)",
        "Fluid power and hydraulic systems engineering training at Bosch Rexroth (Sanand, Gujarat)",
        "Active leadership in techno-management fest Aaruush and national engineering symposiums"
      ],
      technologies: ["MATLAB", "SolidWorks", "PLC Ladder Logic", "Control Systems", "Hydraulics", "C++", "Python"],
      icon: BookOpen,
      color: "bg-blue-500"
    },
    {
      phase: "Industrial Application & Scale-Up",
      period: "2022-2024",
      focus: "Manufacturing Excellence & Operations Leadership at Hero MotoCorp",
      achievements: [
        "Led 25+ member cross-functional engineering and operator teams at Hero's 4M+ vehicle/yr plants (Haridwar & Tirupati)",
        "Led NPI for Vida EV launch across two plants, reaching 85% OEE in 6 weeks with custom fixtures & tooling",
        <TechnicalTooltip key="oee" term="OEE (Overall Equipment Effectiveness)" definition="Standard metric measuring manufacturing productivity by multiplying Availability, Performance, and Quality." example="A plant running at 85% OEE is considered world-class benchmark." industry="Manufacturing" icon="wrench">
          Raised OEE by 38.9% and cut unplanned equipment downtime by 82.4% across CNC and robotic welding lines
        </TechnicalTooltip>,
        "Deployed Cognex and Keyence automated optical inspection systems, saving ~$1.1M annually with 60% defect reduction",
        <TechnicalTooltip key="tpm" term="TPM (Total Productive Maintenance)" definition="A systematic approach to equipment maintenance that aims to maximize equipment effectiveness and eliminate breakdowns." example="Structured PM adherence recovered ~430 downtime hours." industry="Manufacturing" icon="wrench">
          Awarded corporate TPM Special Award; instituted Daily Management Systems with 97% PM adherence
        </TechnicalTooltip>
      ],
      technologies: ["SolidWorks", "AutoCAD", "SAP ERP", "Cognex Vision", "Keyence", "Mitsubishi PLC", "TPM", "Six Sigma", "Kaizen"],
      icon: Wrench,
      color: "bg-green-500"
    },
    {
      phase: "Graduate Engineering & Simulation",
      period: "2024-2026",
      focus: "Master of Science in Advanced and Intelligent Manufacturing (GPA 3.90)",
      achievements: [
        "Master of Science in Advanced and Intelligent Manufacturing at Northeastern University (GPA: 3.90/4.0)",
        "Manufacturing Line Optimization (Simio): Cut cycle time by 18.4% and raised throughput from 7,800 to 9,800 units",
        "Course Assistant & TA for IE7215 Simulation Analysis (Simio) and IE4350/4351 Industrial Engineering Capstone",
        "LEAD360 Teaching Assistant for leadership development across engineering cohorts",
        "Specialization in scale-up to controlled production, SPC, and digital manufacturing systems"
      ],
      technologies: ["Simio", "Digital Manufacturing", "SPC", "DOE", "Minitab", "Python", "MLOps"],
      icon: Brain,
      color: "bg-purple-500"
    },
    {
      phase: "VDRS Co-op & Production AI",
      period: "2025",
      focus: "13 Production Systems & Enterprise AI at Van Dyk Recycling Solutions",
      achievements: [
        "Shipped 13 production tools & AI systems delivering $200K+ annual value and 819% average ROI",
        "Built AI data-extraction pipeline (Python, GPT-4 Vision, OpenCV) at 91.5% accuracy, cutting manual entry by 76%",
        "Developed web equipment management suite (Flask, SQL Server) with real-time tracking, raising decision efficiency by 32.6%",
        "Deployed enterprise RAG knowledge system on Azure indexing 10,000+ manuals (featured in Northeastern Global News)",
        "Engineered Container Document Management System (CDMS) reducing customs clearance delays by 42%"
      ],
      technologies: ["Python", "Flask", "OpenAI GPT-4", "Whisper", "ChromaDB", "Azure Blob Storage", "SQL Server", "React"],
      icon: Zap,
      color: "bg-orange-500"
    },
    {
      phase: "Inventory Forecast Analyst",
      period: "2026-Present",
      focus: "Full-Time Operations Research & Supply Chain Optimization at Van Dyk",
      achievements: [
        "Lead demand forecasting and inventory optimization for recycling equipment service and spare parts",
        "Testing quantitative models for intermittent, lumpy demand where standard moving averages fail",
        "Engineered production Python/SQL analytics pipelines integrated with Acumatica ERP and NetStock optimizer",
        "Conducted Lean A3 root-cause investigation across ERP and optimizer data lineage, eliminating stockout risks",
        "Replaced default supplier lead times with measured receipt-history analytics to prevent late replenishment"
      ],
      technologies: ["Acumatica ERP", "NetStock", "Python", "SQL", "A3 Problem Solving", "Lean", "Intermittent Demand Modeling"],
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
                Working full-time at VAN DYK Recycling Solutions | OPT through Jul 2027, STEM OPT eligible
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
                <Rocket className="w-5 h-5" />
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
                Current Focus & Leadership
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

          {/* Volunteering Experience */}
          <VolunteeringExperience />

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
                    <span>Currently on OPT (Optional Practical Training), valid through July 2027</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-1" />
                    <span>Eligible for the 24-month STEM OPT extension after July 2027</span>
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
                    <span>No sponsorship required through the OPT and STEM OPT period</span>
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