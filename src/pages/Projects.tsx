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

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(0);

  const categories = ['All', 'Hero MotoCorp', 'Northeastern', 'Research', 'VDRS Co-op', 'Current Work'];

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
    results: "83% downtime reduction across 36 machines, ₹9M+ cost savings"
  };

  const featuredProjects = [
    {
      id: 'hero-comprehensive-optimization',
      title: 'Hero MotoCorp Manufacturing Transformation',
      subtitle: 'Comprehensive Plant Optimization Across Engine & Weld Shops',
      category: 'Hero MotoCorp',
      timeline: '2022-2024 (2 years)',
      teamSize: '25 operators + cross-functional teams',
      businessContext: 'Hero MotoCorp, India\'s largest two-wheeler manufacturer, needed to modernize aging manufacturing infrastructure while maintaining production targets for both traditional vehicles and new Vida Electric Vehicle line.',
      challenge: 'Legacy equipment with frequent breakdowns, manual maintenance scheduling, limited real-time visibility, and resistance to technology adoption among experienced workforce.',
      scope: [
        'Engine Shop: Fanuc Robo Drill, Induction Hardening, Connecting Rod Honing',
        'Weld Shop: MIG/TIG/Spot/Seam welding, Yaskawa robots, Frame Assembly',
        'Tool Room: Vida EV fixture design and optimization',
        'Plant-wide: SAP integration and preventive maintenance systems'
      ],
      technicalSolution: {
        hardware: ['HDD to SSD migration across critical systems', 'RLC to PLC conversion for reliability', 'RTD temperature sensors for weld machines', 'IoT sensor network deployment'],
        software: ['SAP automation scripts for PM scheduling', 'SCADA integration for real-time monitoring', 'Limble CMMS implementation', 'Custom dashboard development'],
        processes: ['TPM methodology implementation', 'A3 problem-solving deployment', 'Operator training programs', 'Standard work procedures']
      },
      quantifiedResults: {
        'Downtime Reduction': '83% (from baseline to 17% of original)',
        'Annual Cost Savings': '₹9M+ (NPV calculated over 5 years)', 
        'OEE Improvement': '40% increase in Overall Equipment Effectiveness',
        'Training Delivered': '36+ hours of laser marking system training',
        'EV Production Efficiency': '23% capacity increase for Vida line',
        'Tool Cost Optimization': '₹28 per vehicle reduction'
      },
      recognition: ['TPM Special Award for excellence in Predictive Maintenance, 5S, and Zero Breakdowns'],
      technologies: ['SAP ERP', 'SCADA', 'PLC Programming', 'IoT Sensors', 'TPM', 'Six Sigma'],
      status: 'Completed - Deployed across multiple plants',
      links: {
        case_study: '/case-studies/hero-motocorp-transformation'
      },
      images: ['/projects/hero-plant-overview.jpg', '/projects/scada-dashboard.jpg', '/projects/tpm-award.jpg']
    },
    {
      id: 'mano-ai-development',
      title: 'Mano-AI: Manufacturing Intelligence Assistant',
      subtitle: 'LLM-Powered Troubleshooting for CNC & Robotics Systems',
      category: 'Northeastern',
      timeline: 'January 2025 - Ongoing',
      teamSize: 'Solo development with faculty mentorship',
      businessContext: 'Manufacturing operators waste significant time troubleshooting equipment issues, especially when senior technicians are unavailable. Knowledge transfer from experienced workers to newer operators is inconsistent.',
      challenge: 'Create AI assistant that can provide accurate, context-aware troubleshooting guidance for manufacturing equipment using domain-specific knowledge.',
      scope: [
        'Phone case manufacturing lab equipment at Northeastern',
        'Laser engraving systems and CNC machinery',
        'Integration with existing technical documentation',
        'CLI interface optimized for shop-floor environment'
      ],
      technicalSolution: {
        ai_architecture: ['LLaMA base model selection and evaluation', 'Retrieval-Augmented Generation (RAG) implementation', 'Prompt engineering for manufacturing context', 'Human feedback integration (RLHF)'],
        data_pipeline: ['Technical manual digitization and processing', 'Training video transcription and analysis', 'Troubleshooting procedure documentation', 'Equipment-specific knowledge base creation'],
        deployment: ['Docker containerization for edge deployment', 'CLI interface development', 'Offline capability for manufacturing environments', 'Integration APIs for future CMMS connectivity']
      },
      quantifiedResults: {
        'Troubleshooting Speed': '75% reduction in time to resolution',
        'Accuracy Improvement': 'Significant improvement vs human baseline',
        'Knowledge Accessibility': 'Democratized access to senior technician expertise',
        'Development Timeline': '8 months from concept to working prototype'
      },
      researchContributions: [
        'Domain-specific LLM adaptation techniques',
        'Manufacturing knowledge representation methods',
        'Human-AI collaboration in industrial settings'
      ],
      technologies: ['LLaMA', 'Python', 'Docker', 'RAG', 'CLI Development', 'Prompt Engineering'],
      status: 'Active Development - Moving to production deployment',
      links: {
        repo: 'https://github.com/ajithsrikanth/mano-ai',
        demo: 'https://demo.mano-ai.northeastern.edu'
      },
      images: ['/projects/mano-ai-interface.jpg', '/projects/ai-architecture.jpg']
    },
    {
      id: 'van-dyk-sustainability',
      title: 'Sustainable Manufacturing at VAN DYK Recycling',
      subtitle: 'Circular Economy Implementation in Recycling Operations',
      category: 'Current Work',
      timeline: 'May 2025 - Present',
      teamSize: 'Manufacturing engineering team',
      businessContext: 'VAN DYK Recycling Solutions processes various waste streams into reusable materials. The challenge is optimizing throughput while maintaining quality and minimizing environmental impact.',
      challenge: 'Apply traditional manufacturing optimization techniques to recycling operations while incorporating sustainability metrics and circular economy principles.',
      scope: [
        'Waste stream analysis and optimization',
        'Material recovery efficiency improvement', 
        'Energy consumption reduction strategies',
        'Automation integration for sorting and processing'
      ],
      technicalSolution: {
        process_optimization: ['Lean manufacturing principles applied to recycling', 'Value stream mapping for waste processing', 'Bottleneck identification and elimination', 'Quality control systems for recovered materials'],
        sustainability_metrics: ['Material recovery rate tracking', 'Energy efficiency per ton processed', 'Carbon footprint reduction measurement', 'Circular economy impact assessment'],
        automation_integration: ['Automated sorting system evaluation', 'Process control optimization', 'Predictive maintenance for recycling equipment', 'Data analytics for operational improvement']
      },
      quantifiedResults: {
        'Project Duration': 'Currently 5 months into internship',
        'Focus Areas': 'Process optimization and sustainability integration',
        'Learning Integration': 'Applying Hero MotoCorp experience to new domain',
        'Innovation Opportunity': 'Bridging traditional manufacturing with circular economy'
      },
      uniqueAspects: [
        'First application of automotive manufacturing expertise to recycling',
        'Integration of sustainability metrics with traditional efficiency measures',
        'Cross-industry knowledge transfer and adaptation'
      ],
      technologies: ['Process Optimization', 'Sustainability Metrics', 'Automation Systems', 'Data Analytics'],
      status: 'Active - Ongoing internship project',
      images: ['/projects/van-dyk-facility.jpg', '/projects/recycling-process.jpg']
    },
    {
      id: 'northeastern-teaching',
      title: 'Educational Innovation at Northeastern',
      subtitle: 'Simulation Analysis Course Development & Student Mentorship',
      category: 'Northeastern',
      timeline: 'January 2025 - May 2025',
      teamSize: 'Faculty collaboration + student cohorts',
      businessContext: 'IE 7215 - Simulation Analysis course requires hands-on experience with Simio software for manufacturing optimization. Students need practical application of theoretical concepts.',
      challenge: 'Bridge the gap between academic simulation theory and real-world manufacturing applications while developing effective teaching methodologies.',
      scope: [
        'Course material development for Simio software',
        'Interactive virtual class session facilitation',
        'Assignment design and grading systems',
        'Student mentorship and technical support'
      ],
      technicalSolution: {
        curriculum_development: ['Practical simulation exercises based on real manufacturing scenarios', 'Integration of Hero MotoCorp case studies into coursework', 'Hands-on Simio modeling projects', 'Industry-relevant problem sets'],
        teaching_innovation: ['Virtual engagement techniques for complex software', 'Interactive learning methods for simulation concepts', 'Real-world application examples', 'Constructive feedback systems'],
        mentorship_approach: ['Individual student guidance and support', 'Technical troubleshooting assistance', 'Career development discussions', 'Industry connection facilitation']
      },
      quantifiedResults: {
        'Course Delivery': 'Full semester curriculum support',
        'Student Engagement': 'Enhanced learning experience through practical applications',
        'Knowledge Transfer': 'Industry experience integrated into academic setting',
        'Teaching Development': 'Advanced skills in technical education delivery'
      },
      educationalImpact: [
        'Students gain practical simulation skills directly applicable to industry',
        'Real manufacturing challenges incorporated into academic curriculum',
        'Bridge between theory and practice strengthened'
      ],
      technologies: ['Simio Simulation', 'Curriculum Design', 'Virtual Teaching', 'Student Assessment'],
      status: 'Completed successfully - May 2025',
      images: ['/projects/simio-classroom.jpg', '/projects/student-projects.jpg']
    },
    {
      id: 'dykscribe-ai-system',
      title: 'DykScribe: AI-Powered Q&A System',
      subtitle: 'Intelligent Audio Processing & Knowledge Capture for Service Technicians',
      category: 'VDRS Co-op',
      timeline: '2025 (Co-op Experience)',
      teamSize: 'Solo development with team integration',
      businessContext: 'Service technicians spend significant time documenting Q&A sessions and equipment information manually. Traditional methods are time-consuming and prone to inconsistencies in data capture.',
      challenge: 'Create an intelligent system that can automatically process audio recordings, extract structured Q&A pairs, and integrate with existing equipment management systems while maintaining data accuracy.',
      scope: [
        'Audio recording and transcription using OpenAI Whisper',
        'AI-powered Q&A extraction and structuring',
        'Equipment management system integration',
        'PDF manual processing and storage',
        'Database integration for structured data storage'
      ],
      technicalSolution: {
        ai_processing: ['OpenAI Whisper for high-accuracy transcription', 'GPT-4 for intelligent Q&A structuring', 'Technical terminology optimization', 'Dual-model validation system'],
        system_architecture: ['Streamlit web application framework', 'SQL Server database integration', 'Real-time audio processing', 'In-memory file handling for security'],
        data_management: ['Dynamic equipment hierarchy management', 'PDF document processing and storage', 'User authentication and role management', 'Comprehensive error handling and validation']
      },
      quantifiedResults: {
        'Processing Speed': '10x faster than manual documentation',
        'Data Accuracy': '95%+ accuracy in Q&A extraction',
        'Time Savings': '75% reduction in documentation time',
        'System Reliability': 'Production-ready with comprehensive error handling'
      },
      aiEfficiency: [
        'Cost-effective AI implementation using OpenAI APIs',
        'Ethical AI usage with proper data validation',
        'Low-cost solution with high ROI potential',
        'Scalable architecture for future enhancements'
      ],
      technologies: ['OpenAI Whisper', 'GPT-4', 'Streamlit', 'SQL Server', 'Python', 'Audio Processing'],
      status: 'Production Ready - Deployed for service teams',
      images: ['/projects/dykscribe-interface.jpg', '/projects/ai-processing.jpg']
    },
    {
      id: 'rag-document-search',
      title: 'RAG System: Intelligent Document Search',
      subtitle: 'Vector-Based Document Retrieval & AI-Powered Knowledge Management',
      category: 'VDRS Co-op',
      timeline: '2025 (Co-op Experience)',
      teamSize: 'Solo development with system integration',
      businessContext: 'Large volumes of technical documentation and equipment manuals need to be searchable and accessible. Traditional keyword search fails to understand context and relationships between documents.',
      challenge: 'Implement a sophisticated retrieval-augmented generation system that can understand natural language queries and provide accurate, contextual answers from technical documentation.',
      scope: [
        'Vector database implementation with ChromaDB',
        'Document processing and embedding generation',
        'Hybrid search combining vector and database queries',
        'AI-powered response generation with source citations',
        'Real-time document processing and indexing'
      ],
      technicalSolution: {
        vector_search: ['ChromaDB vector database for document embeddings', 'Semantic similarity search across technical documents', 'Multi-language document support', 'Metadata filtering and relevance ranking'],
        ai_integration: ['GPT-4 for response generation', 'Vanna AI for SQL query generation', 'Hybrid search architecture', 'Context-aware answer synthesis'],
        document_processing: ['PyMuPDF for PDF processing', 'LangChain for document handling', 'Automated chunking and embedding', 'Real-time indexing and updates']
      },
      quantifiedResults: {
        'Search Accuracy': '90%+ relevance in document retrieval',
        'Response Quality': 'Significantly improved over keyword search',
        'Processing Speed': 'Real-time document indexing',
        'Cost Efficiency': 'Optimized AI usage with cost tracking'
      },
      aiEfficiency: [
        'Intelligent document understanding beyond keyword matching',
        'Cost-effective AI implementation with usage monitoring',
        'Ethical AI with proper source attribution',
        'Scalable solution for enterprise document management'
      ],
      technologies: ['ChromaDB', 'GPT-4', 'Vanna AI', 'LangChain', 'PyMuPDF', 'Vector Search'],
      status: 'Production Ready - Active knowledge management system',
      images: ['/projects/rag-interface.jpg', '/projects/vector-search.jpg']
    },
    {
      id: 'data-extractor-suite',
      title: 'Data Extractor Suite: AI-Powered Document Processing',
      subtitle: 'Multi-Method PDF Processing & Structured Data Extraction',
      category: 'VDRS Co-op',
      timeline: '2025 (Co-op Experience)',
      teamSize: 'Solo development with GUI implementation',
      businessContext: 'Engineering drawings and technical documents contain structured data (BOM tables, specifications) that need to be extracted for digital processing. Manual extraction is time-consuming and error-prone.',
      challenge: 'Develop a comprehensive suite that can extract structured data from PDFs using multiple AI and OCR methods, with validation and quality control to ensure accuracy.',
      scope: [
        'Multiple extraction methods: LayoutParser, OpenCV, LLM, OpenRouter',
        'Batch processing capabilities for large document sets',
        'GUI interface for non-technical users',
        'Data validation and quality control systems',
        'Excel comparison and change tracking tools'
      ],
      technicalSolution: {
        extraction_methods: ['LayoutParser + PaddleOCR for computer vision', 'OpenCV + Tesseract for traditional OCR', 'Ollama LLM for AI-powered extraction', 'OpenRouter integration for cloud AI'],
        validation_system: ['Dual-model validation (Generator + Validator)', 'Confidence scoring and quality metrics', 'Error detection and hallucination prevention', 'Manual review flags for quality assurance'],
        user_interface: ['Tkinter GUI for comprehensive control', 'Real-time processing updates and logging', 'File management and organization tools', 'Multi-format output support']
      },
      quantifiedResults: {
        'Extraction Accuracy': '95%+ accuracy on well-formatted documents',
        'Processing Speed': '10-50x faster than manual processing',
        'Batch Processing': 'Hundreds of documents processed simultaneously',
        'Quality Control': 'Comprehensive validation and error detection'
      },
      aiEfficiency: [
        'Cost-effective AI implementation with local processing options',
        'Ethical AI usage with proper validation and human oversight',
        'Low-cost solution with significant time savings',
        'Scalable architecture for enterprise document processing'
      ],
      technologies: ['PaddleOCR', 'LayoutParser', 'OpenCV', 'Ollama', 'Tkinter', 'PyMuPDF'],
      status: 'Production Ready - Deployed for document processing',
      images: ['/projects/data-extractor-gui.jpg', '/projects/pdf-processing.jpg']
    },
    {
      id: 'blobcheck-verification',
      title: 'BlobCheck: Data Verification & Synchronization',
      subtitle: 'Automated Cloud Storage & Database Consistency Monitoring',
      category: 'VDRS Co-op',
      timeline: '2025 (Co-op Experience)',
      teamSize: 'Solo development with system integration',
      businessContext: 'Critical business data exists across multiple systems (Azure Blob Storage and SQL Server). Data inconsistencies can lead to operational issues and compliance problems.',
      challenge: 'Create an automated verification system that can identify discrepancies between cloud storage and database records, providing actionable reports for data reconciliation.',
      scope: [
        'Azure Blob Storage integration and file listing',
        'SQL Server database querying and record analysis',
        'Intelligent path normalization and comparison',
        'Automated report generation and CSV export',
        'Project identification and container mapping'
      ],
      technicalSolution: {
        data_synchronization: ['Azure Blob Storage SAS URL integration', 'SQL Server ODBC connectivity', 'Intelligent path normalization algorithms', 'Case-sensitive comparison with fallback logic'],
        verification_logic: ['Set-based comparison for efficient processing', 'Duplicate detection and analysis', 'Project identification from file paths', 'Container mapping and relationship tracking'],
        reporting_system: ['CSV export with detailed discrepancy reports', 'Summary statistics and counts', 'Project-based organization of results', 'Automated directory creation and file management']
      },
      quantifiedResults: {
        'Verification Speed': 'Processes thousands of files in minutes',
        'Accuracy': '100% accurate discrepancy detection',
        'Automation': 'Eliminates manual verification processes',
        'Data Integrity': 'Comprehensive consistency monitoring'
      },
      aiEfficiency: [
        'Intelligent path normalization without AI overhead',
        'Cost-effective solution using standard libraries',
        'Ethical approach with comprehensive logging and audit trails',
        'Low-cost automation with high reliability'
      ],
      technologies: ['Azure Blob Storage', 'SQL Server', 'Python', 'pyodbc', 'CSV Processing', 'Data Validation'],
      status: 'Production Ready - Automated daily verification',
      images: ['/projects/blobcheck-reports.jpg', '/projects/data-verification.jpg']
    },
    {
      id: 'van-dyk-mobile-app',
      title: 'Van Dyk One: Cross-Platform Mobile Application',
      subtitle: 'React Native Mobile App for Field Service Management',
      category: 'VDRS Co-op',
      timeline: '2025 (Co-op Experience)',
      teamSize: 'Solo development with team collaboration',
      businessContext: 'Field service technicians need mobile access to equipment information, service tickets, and expense tracking. Traditional paper-based processes are inefficient and error-prone.',
      challenge: 'Develop a cross-platform mobile application that provides comprehensive field service management capabilities while maintaining offline functionality and data synchronization.',
      scope: [
        'Cross-platform development (iOS, Android, Web)',
        'Equipment management and tracking',
        'Service ticket handling and status updates',
        'Expense tracking and receipt capture',
        'Site management and location services'
      ],
      technicalSolution: {
        mobile_architecture: ['React Native 0.80.0 with TypeScript', 'Tab-based navigation system', 'Modular component architecture', 'Cross-platform deployment capabilities'],
        data_management: ['SQL Server database integration', 'Offline data synchronization', 'Real-time updates and notifications', 'Secure authentication and user management'],
        user_interface: ['Professional UI with consistent branding', 'Responsive design for different screen sizes', 'Intuitive navigation and user experience', 'Accessibility features and usability optimization']
      },
      quantifiedResults: {
        'Development Efficiency': 'Single codebase for multiple platforms',
        'User Productivity': 'Streamlined field service operations',
        'Data Accuracy': 'Reduced manual entry errors',
        'Accessibility': 'Mobile access to critical business systems'
      },
      aiEfficiency: [
        'Efficient development using modern frameworks',
        'Cost-effective cross-platform solution',
        'Ethical development with proper data handling',
        'Scalable architecture for future enhancements'
      ],
      technologies: ['React Native', 'TypeScript', 'SQL Server', 'Mobile Development', 'Cross-Platform'],
      status: 'Active Development - Core features implemented',
      images: ['/projects/mobile-app-interface.jpg', '/projects/cross-platform.jpg']
    },
    {
      id: 'research-publications',
      title: 'Academic Research Contributions',
      subtitle: 'Published Research in Manufacturing Control Systems',
      category: 'Research',
      timeline: '2021-2022',
      teamSize: 'Academic research teams',
      businessContext: 'Manufacturing precision and efficiency improvements through advanced control system optimization, particularly in EDM processes and automated systems.',
      challenge: 'Develop and validate improved control strategies for manufacturing processes through rigorous academic research and simulation analysis.',
      scope: [
        'EDM controller optimization research',
        'PLC-based elevator system simulation',
        'Comparative analysis of control methodologies',
        'Publication in peer-reviewed venues'
      ],
      technicalSolution: {
        research_methods: ['MATLAB simulation and modeling', 'Comparative analysis methodology', 'Statistical validation of results', 'Control system optimization algorithms'],
        experimental_design: ['Bang Bang vs PID vs LQR controller comparison', 'Performance metrics definition and measurement', 'Real-world applicability assessment', 'Precision and efficiency optimization'],
        validation_approach: ['Simulation-based testing and validation', 'Statistical analysis of results', 'Peer review and academic scrutiny', 'Industry applicability assessment']
      },
      quantifiedResults: {
        'EDM Precision Improvement': '15-20% increase in machining accuracy',
        'Process Variability Reduction': '10% decrease in manufacturing variation',
        'Elevator System Efficiency': '25% response time improvement',
        'Academic Recognition': 'Research papers published and presented'
      },
      researchContributions: [
        'Advanced control strategies for precision manufacturing',
        'Comparative methodology for controller evaluation',
        'Real-world applicability of academic control theory'
      ],
      technologies: ['MATLAB', 'Control Systems', 'Statistical Analysis', 'Simulation Modeling'],
      status: 'Published Research - Available for reference',
      links: {
        papers: '/research/control-systems-publications.pdf'
      },
      images: ['/projects/matlab-simulation.jpg', '/projects/control-comparison.jpg']
    }
  ];

  const projectStats = {
    totalProjects: featuredProjects.length,
    totalSavings: '₹9M+',
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
          project.subtitle.toLowerCase().includes(term) ||
          project.category.toLowerCase().includes(term) ||
          project.status.toLowerCase().includes(term);
        
        // Search in technologies array
        const techMatch = project.technologies.some(tech => 
          tech.toLowerCase().includes(term)
        );
        
        // Search in quantified results keys and values
        const resultsMatch = Object.entries(project.quantifiedResults).some(([key, value]) =>
          key.toLowerCase().includes(term) || 
          (typeof value === 'string' && value.toLowerCase().includes(term))
        );
        
        // Search in business context and challenge
        const contextMatch = 
          project.businessContext.toLowerCase().includes(term) ||
          project.challenge.toLowerCase().includes(term);
        
        // Search in scope array
        const scopeMatch = project.scope.some(item => 
          item.toLowerCase().includes(term)
        );
        
        // Search in technical solution arrays
        const techSolutionMatch = Object.values(project.technicalSolution).some(solutionArray => 
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
      <div className="container mx-auto px-4 py-16">
        {/* Header with Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
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
              <h2 className="text-3xl font-bold text-foreground mb-4">
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
                                {project.category}
                              </span>
                            </div>
                            <p className="text-lg text-muted-foreground mb-4">
                              {project.subtitle}
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {project.timeline}
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                {project.teamSize}
                              </div>
                              <div className="flex items-center gap-2">
                                <Settings className="w-4 h-4" />
                                {project.status}
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
                            {Object.entries(project.quantifiedResults).slice(0, 3).map(([metric, value]) => (
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
                          {project.businessContext}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Lightbulb className="w-5 h-5 text-accent-2" />
                          Engineering Challenge
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {project.challenge}
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
                        {project.scope.map((item, idx) => (
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
                        {Object.entries(project.technicalSolution).map(([category, solutions]) => (
                          <div key={category} className="bg-muted/20 border border-border rounded-lg p-4">
                            <h4 className="font-medium text-foreground mb-3 capitalize">
                              {category.replace('_', ' ')}
                            </h4>
                            <ul className="space-y-2">
                              {solutions.map((solution: string, idx: number) => (
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
                        {Object.entries(project.quantifiedResults).map(([metric, value]) => (
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
                          {project.technologies.map((tech) => {
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
                      
                      {project.recognition && (
                        <div className="lg:w-80">
                          <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                            <Award className="w-4 h-4 text-accent-1" />
                            Recognition:
                          </h4>
                          <div className="space-y-2">
                            {project.recognition.map((award, idx) => (
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