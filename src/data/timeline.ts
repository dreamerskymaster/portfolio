export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  type: 'work' | 'education';
  skills?: string[];
  achievements?: string[];
}

export const timeline: TimelineItem[] = [
  // Current Work (Most Recent)
  {
    id: 'van-dyk-analyst-2026',
    title: 'Inventory Forecast Analyst',
    organization: 'Van Dyk Recycling Solutions',
    location: 'Norwalk, CT',
    period: 'June 2026 - Present',
    type: 'work',
    description: 'Leading spare parts inventory optimization and demand forecasting for North America\'s premier recycling equipment systems. Building Python/SQL analytics integrated with Acumatica ERP and NetStock.',
    skills: ['Inventory Optimization', 'Demand Forecasting', 'Acumatica ERP', 'NetStock', 'Python', 'SQL', 'A3 Problem Solving', 'Lean'],
    achievements: [
      'Forecasting demand and inventory for service and spare parts on recycling systems',
      'Modeling intermittent, lumpy demand where moving averages and normal safety stocks fail',
      'Built Python and SQL analytics pipelines integrated with Acumatica ERP and NetStock',
      'Conducted Lean A3 root-cause audit across ERP and optimizer data lineage, eliminating stockout risks'
    ]
  },
  {
    id: 'van-dyk-intern-2025',
    title: 'Manufacturing Engineering Co-op',
    organization: 'VAN DYK Recycling Solutions',
    location: 'Norwalk, Connecticut',
    period: 'May 2025 - Dec 2025',
    type: 'work',
    description: 'Shipped 13 production tools and AI systems still in use after the co-op ended, delivering an estimated 819% average ROI across deployed systems.',
    skills: ['Python', 'Computer Vision', 'GPT-4 Vision', 'OpenCV', 'Flask', 'SQL Server', 'Azure Blob Storage', 'ChromaDB', 'RAG'],
    achievements: [
      'Built AI data-extraction pipeline (Python, GPT-4 Vision, OpenCV) at 91.5% accuracy that cut manual data entry by 76%',
      'Developed web-based equipment management suite (Flask, SQL Server) improving stakeholder decision efficiency by 32.6%',
      'Deployed enterprise RAG AI knowledge system on Azure indexing 10,000+ technical manuals (featured in Northeastern Global News)',
      'Built Container Document Management System (CDMS) reducing customs clearance delays by 42%'
    ]
  },
  {
    id: 'northeastern-course-assistant-2025',
    title: 'Course Assistant & Grader',
    organization: 'Northeastern University',
    location: 'Boston, MA',
    period: 'January 2025 - May 2025',
    type: 'work',
    description: 'Teaching and mentoring students in IE 7215 - Simulation Analysis using Simio software. Developing innovative teaching methods for complex simulation software.',
    skills: ['Teaching', 'Simulation Analysis', 'Simio Software', 'Student Mentorship', 'Curriculum Development'],
    achievements: [
      'Teaching next-generation engineers simulation-based optimization techniques',
      'Developing innovative teaching methods for complex software',
      'Mentoring students in advanced simulation concepts',
      'Contributing to educational excellence'
    ]
  },
  {
    id: 'lead360-ta-2025',
    title: 'Teaching Assistant',
    organization: 'LEAD360 Program',
    location: 'Northeastern University',
    period: 'January 2025 - March 2025',
    type: 'work',
    description: 'Developing leadership skills through interactive learning and mentorship. Focus on building leadership capabilities in emerging professionals.',
    skills: ['Leadership Development', 'Mentorship', 'Interactive Learning', 'Professional Development'],
    achievements: [
      'Developing leadership skills through interactive learning',
      'Mentoring emerging professionals',
      'Contributing to leadership program excellence',
      'Building cross-functional leadership capabilities'
    ]
  },
  // Education
  {
    id: 'masters-northeastern-2026',
    title: 'Master of Science in Advanced and Intelligent Manufacturing',
    organization: 'Northeastern University',
    location: 'Boston, MA',
    period: 'August 2024 - June 2026',
    type: 'education',
    description: 'Specialized coursework in Process Design, Lean Manufacturing, Intelligent Manufacturing, Digital Manufacturing, and Simulation Analysis. Focus on scale-up to controlled production, SPC, and digital manufacturing.',
    skills: ['Advanced Manufacturing', 'Process Design', 'Lean Manufacturing', 'Intelligent Manufacturing', 'Digital Manufacturing', 'Simulation Analysis (Simio)', 'SPC', 'DOE'],
    achievements: [
      'GPA: 3.90/4.0',
      'Specialized in scale-up to controlled production, SPC, and digital manufacturing',
      'Manufacturing Line Optimization: Cut cycle time by 18.4% and raised throughput from 7,800 to 9,800 units',
      'Teaching Assistant and Course Assistant for core engineering courses'
    ]
  },
  // Previous Work Experience
  {
    id: 'hero-motocorp-team-manager-2024',
    title: 'Team Manager — Manufacturing Excellence',
    organization: 'Hero MotoCorp Ltd.',
    location: 'Haridwar & Tirupati, India',
    period: 'July 2022 - August 2024',
    type: 'work',
    description: 'Led cross-functional teams of 25+ operators and engineers driving operational excellence across Engine, Weld, and EV shops at facilities producing 4M+ vehicles annually.',
    skills: ['SolidWorks', 'AutoCAD', 'Cognex Vision', 'Keyence', 'Mitsubishi PLC', 'SAP ERP', 'TPM', 'Six Sigma', 'Kaizen'],
    achievements: [
      'Led NPI for Vida EV production launch across two plants, reaching 85% OEE within 6 weeks',
      'Raised OEE by 38.9% and cut unplanned downtime by 82.4% across CNC and robotic welding lines',
      'Deployed Cognex and Keyence automated optical inspection systems, saving ~$1.1M annually with 60% defect reduction',
      'Eliminated 12 recurring failure modes through structured 5-Why and Pareto analyses, reducing breakdowns by 75.7%',
      'Built Daily Management Systems (DMS) achieving 97% PM adherence and recovering ~430 downtime hours',
      'Honored with corporate TPM Special Award for data-driven predictive maintenance excellence'
    ]
  },
  {
    id: 'techsnap-intern-2021',
    title: 'Python Blogger / Software Development Intern',
    organization: 'Techsnap',
    location: 'Remote',
    period: 'Jun 2021 - Aug 2021',
    type: 'work',
    description: 'Developing and debugging Python scripts to automate data processing tasks. Collaborating with team members to design and implement Python modules.',
    skills: ['Python Programming', 'Modular Development', 'Software Architecture', 'Data I/O', 'Automation'],
    achievements: [
      'Developed and debugged Python scripts to automate data processing tasks',
      'Utilized Python built-in functions for efficient data input/output operations',
      'Implemented type casting techniques to ensure data integrity',
      'Collaborated with team members to design and implement Python modules'
    ]
  },
  {
      id: 'schneider-intern-2021',
      title: 'Global Student Experience - Supply Chain',
      organization: 'Schneider Electric',
      location: 'Remote',
      period: 'Jun 2021 - Aug 2021',
      type: 'work',
      description: 'Contributed to the digital transformation of Schneider Electric supply chain by exploring solutions to enhance safety, quality, and productivity.',
      skills: ['Supply Chain Optimization', 'Predictive Analytics', 'Digital Control Towers', 'Process Digitization'],
      achievements: [
          'Developed strategies for integrating digital supply chain technologies, including AI and predictive analytics',
          'Proposed methods to replace manual data entry and eliminate paper-based processes for real-time visibility'
      ]
  },
  {
    id: 'bosch-rexroth-intern-2019',
    title: 'Engineering Trainee',
    organization: 'Bosch Rexroth',
    location: 'Sanand, Gujarat, India',
    period: 'May 2019 - Jun 2019',
    type: 'work',
    description: 'Specialized in fluid power and hydraulics design, focusing on valves, actuators, and pneumatic systems integration with control systems for automotive applications.',
    skills: ['Fluid Power Design', 'Hydraulics', 'Valves & Actuators', 'Pneumatic Systems', 'Control Systems Integration'],
    achievements: [
      'Gained hands-on experience with hydraulic systems and components',
      'Conducted plant visits to observe manufacturing processes such as machining and assembly lines',
      'Assisted in hydraulic circuit reading and understanding DIN ISO 1219 symbols'
    ]
  },
  // Education
  {
    id: 'bachelors-srm-2022',
    title: 'Bachelor of Technology in Mechatronics Engineering',
    organization: 'SRM Institute of Science and Technology',
    location: 'Chennai, India',
    period: 'August 2018 - May 2022',
    type: 'education',
    description: 'Comprehensive study of mechatronics engineering with focus on embedded systems, IIoT, smart systems, and automation systems. Coursework emphasized the integration of mechanical, electrical, and computer engineering.',
    skills: ['Mechatronics', 'Embedded Systems', 'IIoT', 'Smart Systems', 'Automation Systems', 'Control Engineering', 'Robotics'],
    achievements: [
      'Graduated with GPA: 3.68/4.0',
      'Specialized in Embedded Systems and IIoT',
      'Completed projects in automation and smart systems',
      'Gained hands-on experience in control engineering and robotics',
      'Published research papers in EDM controllers and control systems'
    ]
  }
];


