import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Search, 
  Filter, 
  Calendar,
  BookOpen,
  TrendingUp,
  Users,
  BarChart3,
  Shield,
  CheckCircle,
  ExternalLink,
  Target,
  Brain,
  Zap,
  Cloud,
  Cpu,
  Factory,
  Truck,
  Database,
  Settings,
  Gauge,
  Layers,
} from 'lucide-react';
import { certificates } from '../data/certificates';

const Certifications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Comprehensive certification data organized by category
  const certificationData = {
    "Six Sigma & Quality": [
      { name: "Data Analysis and Root Cause Analysis in Six Sigma with Lean Tools and FMEA", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Six Sigma Statistical Process Control Basics", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Six Sigma Process Control Tools", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Six Sigma and Lean Foundations and Principles", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Lean Six Sigma White & Yellow Belt Certification", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Using Lean to Improve Flow and Pull", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Using Lean to Reduce Waste and Streamline Value Flow", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Using Lean to Perfect Organizational Processes", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Quality & Procurement Planning", provider: "Skillsoft", year: "2024", verified: true }
    ],
    "Project Management - Skillsoft": [
      { name: "Fundamentals of Agile & Waterfall Project Management", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Strategically Focused Project Management", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Project Management Practical Exercises", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Managing a Project to Minimize Risk and Maximize Quality", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Planning & Controlling the Project Schedule", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Project Selection & Initiation", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Scope, Schedule, & Cost Planning", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Resource & Risk Planning", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Defining a Project Scope and Team", provider: "Skillsoft", year: "2024", verified: true }
    ],
    "Operations & Supply Chain": [
      { name: "Introduction to Operations Management", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Operations Management Functions and Strategies", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Optimizing Operations Using Demand Forecasting and Capacity Management", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Supply Chain Management Basics", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Supply Chain Foundations: Managing the Process", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Inventory Management: Aligning Inventory with Production and Demand", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Demand Forecasting in Supply Chain", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Vendor Management for Technology Professionals", provider: "Skillsoft", year: "2024", verified: true }
    ],
    "Leadership & Management": [
      { name: "Agile Best Practices for Tech Leaders", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Building and Leading Successful Teams", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Building Customer Relationships in a Virtual Environment", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Leadership Insights on Networking with your Peers", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Synchronize Goals to Optimize Your Team", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Cultivating Mentor Relationships", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Building a Win-win Relationship with Your Manager", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Managing for Operational Excellence", provider: "Skillsoft", year: "2024", verified: true }
    ],
    "Process Automation": [
      { name: "Implementing a Process Automation Strategy", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Digital Manufacturing & Design Technology Specialization", provider: "Coursera", year: "2024", verified: true },
      { name: "Enabling Business Process Improvement", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Innovation with Lean Product Management", provider: "Skillsoft", year: "2024", verified: true }
    ],
    "Problem Solving & Analytics": [
      { name: "Problem Solving: Choosing and Implementing the Right Solution", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Problem Solving: Defining and Stating the Problem", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Problem Solving: Generating Solutions", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Leveraging the Power of Analogical Thinking", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Solving Problems Using Systems Thinking in the Workplace", provider: "Skillsoft", year: "2024", verified: true },
      { name: "Design Thinking for Innovation: Defining Opportunities", provider: "Skillsoft", year: "2024", verified: true }
    ],
    "Workplace Safety & Compliance": [
      { name: "Prevention of Sexual Harassment at the Workplace", provider: "Hero MotoCorp", year: "2024", score: "90%", verified: true },
      { name: "Induction Safety HM1D", provider: "Hero MotoCorp", year: "2024", verified: true },
      { name: "Hero Code of Conduct", provider: "Hero MotoCorp", year: "2023", score: "80%", verified: true }
    ],
    // Additional comprehensive certifications
    "Cloud & AI": certificates.filter(cert => cert.category === 'Cloud & AI'),
    "IoT & Cloud": certificates.filter(cert => cert.category === 'IoT & Cloud'),
    "Manufacturing": certificates.filter(cert => cert.category === 'Manufacturing'),
    "Supply Chain": certificates.filter(cert => cert.category === 'Supply Chain'),
    "Data Science": certificates.filter(cert => cert.category === 'Data Science'),
    "Quality Management": certificates.filter(cert => cert.category === 'Quality Management'),
    "Operations": certificates.filter(cert => cert.category === 'Operations'),
    "Project Management": certificates.filter(cert => cert.category === 'Project Management'),
    "Smart Manufacturing": certificates.filter(cert => cert.category === 'Smart Manufacturing'),
    "Internship": certificates.filter(cert => cert.category === 'Internship'),
    "Language Proficiency": certificates.filter(cert => cert.category === 'Language Proficiency')
  };

  const categories = ['All', ...Object.keys(certificationData).filter(cat => !cat.startsWith('//'))];

  const allCertifications = useMemo(() => {
    return Object.entries(certificationData).flatMap(([category, certs]) =>
      certs.map(cert => ({ ...cert, category }))
    );
  }, []);

  const filteredCertifications = useMemo(() => {
    let filtered = allCertifications;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(cert => cert.category === selectedCategory);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(cert =>
        cert.name.toLowerCase().includes(term) ||
        cert.provider.toLowerCase().includes(term) ||
        cert.category.toLowerCase().includes(term)
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory, allCertifications]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Six Sigma & Quality": return BarChart3;
      case "Project Management - Skillsoft": return Target;
      case "Project Management": return Target;
      case "Operations & Supply Chain": return TrendingUp;
      case "Leadership & Management": return Users;
      case "Process Automation": return Zap;
      case "Problem Solving & Analytics": return Brain;
      case "Workplace Safety & Compliance": return Shield;
      case "Cloud & AI": return Cloud;
      case "IoT & Cloud": return Cpu;
      case "Manufacturing": return Factory;
      case "Supply Chain": return Truck;
      case "Data Science": return Database;
      case "Quality Management": return Settings;
      case "Operations": return Gauge;
      case "Smart Manufacturing": return Layers;
      default: return Award;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Six Sigma & Quality": return "bg-blue-50 border-blue-200 text-blue-800";
      case "Project Management": return "bg-green-50 border-green-200 text-green-800";
      case "Operations & Supply Chain": return "bg-purple-50 border-purple-200 text-purple-800";
      case "Leadership & Management": return "bg-orange-50 border-orange-200 text-orange-800";
      case "Process Automation": return "bg-red-50 border-red-200 text-red-800";
      case "Problem Solving & Analytics": return "bg-indigo-50 border-indigo-200 text-indigo-800";
      case "Workplace Safety & Compliance": return "bg-gray-50 border-gray-200 text-gray-800";
      default: return "bg-gray-50 border-gray-200 text-gray-800";
    }
  };

  const totalCertifications = allCertifications.length;
  const skillsoftCertifications = allCertifications.filter(cert => cert.provider === "Skillsoft").length;
  // const heroMotocorpCertifications = allCertifications.filter(cert => cert.provider === "Hero MotoCorp").length;

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
            Professional Certifications
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Continuous learning and professional development through industry-leading programs 
            in manufacturing excellence, leadership, and emerging technologies
          </p>
          
          {/* Certification Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">{totalCertifications}+</div>
              <div className="text-sm text-muted-foreground">Total Certifications</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-accent-1 mb-2">{skillsoftCertifications}</div>
              <div className="text-sm text-muted-foreground">Skillsoft Courses</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-accent-2 mb-2">7</div>
              <div className="text-sm text-muted-foreground">Core Categories</div>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search certifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-muted-foreground w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Category Overview Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
        >
          {Object.entries(certificationData).map(([category, certs], index) => {
            const IconComponent = getCategoryIcon(category);
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer border rounded-xl p-6 text-center hover:shadow-lg transition-all ${
                  selectedCategory === category ? getCategoryColor(category) : 'bg-card border-border hover:bg-muted'
                }`}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center border border-emerald-500/30">
                  <IconComponent className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-semibold mb-2 text-sm">
                  {category}
                </h3>
                <div className="text-2xl font-bold mb-1">
                  {certs.length}
                </div>
                <div className="text-xs opacity-80">
                  Certifications
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Certifications List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="p-6 border-b border-border">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                <Award className="w-6 h-6 text-primary" />
                {selectedCategory === 'All' ? 'All Certifications' : selectedCategory}
                <span className="text-lg font-normal text-muted-foreground">
                  ({filteredCertifications.length} {filteredCertifications.length === 1 ? 'certification' : 'certifications'})
                </span>
              </h2>
            </div>
            
            <div className="divide-y divide-border">
              <AnimatePresence mode="wait">
                {filteredCertifications.map((cert, index) => {
                  const IconComponent = getCategoryIcon(cert.category);
                  return (
                    <motion.div
                      key={`${cert.name}-${cert.provider}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-6 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
                          <IconComponent className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground mb-1">
                                {cert.name}
                              </h3>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <span className="font-medium">{cert.provider}</span>
                                  {cert.verified && (
                                    <CheckCircle className="w-4 h-4 text-accent-1" />
                                  )}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{cert.year}</span>
                                </div>
                                {'score' in cert && cert.score && (
                                  <div className="flex items-center gap-1">
                                    <BarChart3 className="w-4 h-4" />
                                    <span className="font-medium text-accent-1">{cert.score}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(cert.category)}`}>
                                {cert.category}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* No Results */}
        {filteredCertifications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No certifications found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or category filter.
            </p>
          </motion.div>
        )}

        {/* Professional Development Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent-1/10 border border-primary/20 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Continuous Learning Philosophy
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                My CliftonStrengths profile identifies <strong>Learner</strong> as a core strength - 
                "You have a great desire to learn and want to continuously improve. The process of learning excites you more than the outcome."
                This philosophy drives my professional development approach.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Systematic Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Structured approach to acquiring new skills across manufacturing, technology, and leadership domains
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-1/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-accent-1" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Applied Knowledge</h4>
                <p className="text-sm text-muted-foreground">
                  Immediate application of learning to real-world manufacturing challenges and team leadership
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-2/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-accent-2" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Measurable Impact</h4>
                <p className="text-sm text-muted-foreground">
                  Converting theoretical knowledge into quantifiable business results and operational improvements
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Apply This Expertise?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              This extensive training portfolio, combined with hands-on manufacturing experience, 
              enables me to tackle complex operational challenges with proven methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://calendly.com/d/cqp7-3p3-jwq/30-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-contrast rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Contact Me
              </motion.a>
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                View Applied Projects
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/newsletters/7130868711963443201/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-1 text-white rounded-lg font-medium hover:bg-accent-1/90 transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                Read My Newsletter
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;