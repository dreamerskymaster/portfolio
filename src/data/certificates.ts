export interface Certificate {
  id: string;
  name: string;
  provider: string;
  category: string;
  year: string;
  month?: string;
  score?: string;
  verified: boolean;
  filePath: string;
  description?: string;
  skills?: string[];
  relevance?: string;
}

export const certificates: Certificate[] = [
  // AWS Certifications
  {
    id: 'aws-ai-ml-dl',
    name: 'AWS AI/ML/DL Certificate',
    provider: 'AWS',
    category: 'Cloud & AI',
    year: '2024',
    verified: true,
    filePath: '/certificates/AWS/AI ML DL.pdf',
    description: 'Comprehensive AWS certification in Artificial Intelligence, Machine Learning, and Deep Learning',
    skills: ['AWS', 'Machine Learning', 'Deep Learning', 'AI', 'Cloud Computing'],
    relevance: 'Directly relevant to AI-powered manufacturing solutions'
  },
  {
    id: 'aws-iot-intro-1',
    name: 'AWS IoT Introduction 1',
    provider: 'AWS',
    category: 'IoT & Cloud',
    year: '2024',
    verified: true,
    filePath: '/certificates/AWS/AWS IoT Intro 1 Certificate.pdf',
    description: 'Introduction to AWS IoT services and implementation',
    skills: ['AWS IoT', 'Cloud Computing', 'IoT Architecture'],
    relevance: 'Essential for smart manufacturing and IoT integration projects'
  },
  {
    id: 'aws-iot-intro-2',
    name: 'AWS IoT Introduction 2',
    provider: 'AWS',
    category: 'IoT & Cloud',
    year: '2024',
    verified: true,
    filePath: '/certificates/AWS/AWS IoT Intro 2 Certificate.pdf',
    description: 'Advanced AWS IoT services and best practices',
    skills: ['AWS IoT', 'Cloud Computing', 'IoT Security'],
    relevance: 'Advanced IoT implementation for manufacturing systems'
  },
  {
    id: 'aws-iot-raspberry-pi',
    name: 'IoT with Raspberry Pi on AWS',
    provider: 'AWS',
    category: 'IoT & Cloud',
    year: '2024',
    verified: true,
    filePath: '/certificates/AWS/Iot Raspiberry Pi AWS.pdf',
    description: 'Hands-on IoT development using Raspberry Pi and AWS services',
    skills: ['Raspberry Pi', 'AWS IoT', 'Embedded Systems', 'Python'],
    relevance: 'Practical IoT implementation for manufacturing automation'
  },

  // Coursera Certifications
  {
    id: 'coursera-manufacturing',
    name: 'Manufacturing Process Control',
    provider: 'Coursera',
    category: 'Manufacturing',
    year: '2023',
    verified: true,
    filePath: '/certificates/Coursera/Coursera 2FYNY8UGZ92F.pdf',
    description: 'Advanced manufacturing process control and optimization',
    skills: ['Process Control', 'Manufacturing', 'Quality Control'],
    relevance: 'Core manufacturing engineering expertise'
  },
  {
    id: 'coursera-supply-chain',
    name: 'Supply Chain Management',
    provider: 'Coursera',
    category: 'Supply Chain',
    year: '2023',
    verified: true,
    filePath: '/certificates/Coursera/Coursera 4HTWFWB7Y4XY.pdf',
    description: 'Comprehensive supply chain management and optimization',
    skills: ['Supply Chain', 'Logistics', 'Operations Management'],
    relevance: 'Essential for end-to-end manufacturing operations'
  },
  {
    id: 'coursera-data-science',
    name: 'Data Science for Manufacturing',
    provider: 'Coursera',
    category: 'Data Science',
    year: '2023',
    verified: true,
    filePath: '/certificates/Coursera/Coursera 58A4CHMVYE9Z.pdf',
    description: 'Data science applications in manufacturing and predictive analytics',
    skills: ['Data Science', 'Predictive Analytics', 'Manufacturing Intelligence'],
    relevance: 'Critical for predictive maintenance and data-driven manufacturing'
  },

  // LinkedIn Learning Certifications
  {
    id: 'linkedin-lean-six-sigma',
    name: 'Lean Six Sigma Foundations',
    provider: 'LinkedIn Learning',
    category: 'Quality Management',
    year: '2023',
    verified: true,
    filePath: '/certificates/LinkedIn/CertificateOfCompletion_Lean Six Sigma Foundations.pdf',
    description: 'Comprehensive Lean Six Sigma methodology and implementation',
    skills: ['Lean Six Sigma', 'DMAIC', 'Process Improvement', 'Quality Management'],
    relevance: 'Proven methodology for manufacturing process optimization'
  },
  {
    id: 'linkedin-operations-management',
    name: 'Operations Management Foundations',
    provider: 'LinkedIn Learning',
    category: 'Operations',
    year: '2023',
    verified: true,
    filePath: '/certificates/LinkedIn/CertificateOfCompletion_Operations Management Foundations.pdf',
    description: 'Fundamental operations management principles and practices',
    skills: ['Operations Management', 'Process Optimization', 'Resource Planning'],
    relevance: 'Core operations management for manufacturing excellence'
  },
  {
    id: 'linkedin-supply-chain',
    name: 'Supply Chain Foundations',
    provider: 'LinkedIn Learning',
    category: 'Supply Chain',
    year: '2023',
    verified: true,
    filePath: '/certificates/LinkedIn/CertificateOfCompletion_Supply Chain Foundations.pdf',
    description: 'End-to-end supply chain management and optimization strategies',
    skills: ['Supply Chain Management', 'Logistics', 'Vendor Management'],
    relevance: 'Essential for integrated manufacturing operations'
  },

  // PMI Certifications
  {
    id: 'pmi-agile',
    name: 'PMI Agile Project Management',
    provider: 'PMI',
    category: 'Project Management',
    year: '2023',
    verified: true,
    filePath: '/certificates/PMI - Aglie.pdf',
    description: 'Agile project management methodology and implementation',
    skills: ['Agile', 'Project Management', 'Scrum', 'Team Leadership'],
    relevance: 'Modern project management for manufacturing initiatives'
  },
  {
    id: 'pmi-waterfall',
    name: 'PMI Waterfall Project Management',
    provider: 'PMI',
    category: 'Project Management',
    year: '2023',
    verified: true,
    filePath: '/certificates/PMI - Waterfall.pdf',
    description: 'Traditional waterfall project management methodology',
    skills: ['Waterfall', 'Project Management', 'Planning', 'Risk Management'],
    relevance: 'Structured approach for complex manufacturing projects'
  },

  // Six Sigma Certifications
  {
    id: 'alison-six-sigma',
    name: 'Six Sigma Yellow Belt',
    provider: 'Alison',
    category: 'Quality Management',
    year: '2023',
    verified: true,
    filePath: '/certificates/Alison - Six Sigma.jpg',
    description: 'Six Sigma Yellow Belt certification in quality management',
    skills: ['Six Sigma', 'Quality Control', 'Statistical Analysis'],
    relevance: 'Quality improvement methodology for manufacturing processes'
  },
  {
    id: 'msi-white-belt',
    name: 'MSI White Belt Six Sigma',
    provider: 'MSI',
    category: 'Quality Management',
    year: '2023',
    verified: true,
    filePath: '/certificates/MSI - White Belt Certificate.pdf',
    description: 'MSI White Belt Six Sigma certification',
    skills: ['Six Sigma', 'Quality Management', 'Process Improvement'],
    relevance: 'Foundation in Six Sigma methodology'
  },

  // Smart Manufacturing
  {
    id: 'smart-manufacturing-kino',
    name: 'Smart Manufacturing Certification',
    provider: 'Kino',
    category: 'Smart Manufacturing',
    year: '2024',
    verified: true,
    filePath: '/certificates/Smart Manufacturing - Kino.pdf',
    description: 'Advanced smart manufacturing and Industry 4.0 implementation',
    skills: ['Smart Manufacturing', 'Industry 4.0', 'Digital Transformation'],
    relevance: 'Cutting-edge manufacturing technology and automation'
  },

  // Internship Certificates
  {
    id: 'bosch-rexroth-internship',
    name: 'Bosch Rexroth Internship',
    provider: 'Bosch Rexroth',
    category: 'Internship',
    year: '2023',
    verified: true,
    filePath: '/certificates/Internships/Bosch Rexroth Internship Certificate.pdf',
    description: 'Industrial automation and hydraulic systems internship',
    skills: ['Industrial Automation', 'Hydraulic Systems', 'Manufacturing'],
    relevance: 'Hands-on experience with industrial automation systems'
  },
  {
    id: 'goldman-sachs-internship',
    name: 'Goldman Sachs Virtual Experience',
    provider: 'Goldman Sachs',
    category: 'Internship',
    year: '2023',
    verified: true,
    filePath: '/certificates/Internships/Goldman Sach.pdf',
    description: 'Financial technology and data analysis virtual internship',
    skills: ['Data Analysis', 'Financial Technology', 'Problem Solving'],
    relevance: 'Analytical skills and technology application'
  },

  // IELTS
  {
    id: 'ielts-2023',
    name: 'IELTS Academic',
    provider: 'British Council',
    category: 'Language Proficiency',
    year: '2023',
    verified: true,
    filePath: '/certificates/IELTS/IELTS 2023.pdf',
    description: 'International English Language Testing System - Academic',
    skills: ['English Proficiency', 'Communication', 'Academic Writing'],
    relevance: 'International communication and academic readiness'
  },

  // Great Learning Certifications
  {
    id: 'gl-supply-chain',
    name: 'Supply Chain Management',
    provider: 'Great Learning',
    category: 'Supply Chain',
    year: '2023',
    verified: true,
    filePath: '/certificates/Great Learning/Supply Chain Management.pdf',
    description: 'Comprehensive supply chain management course',
    skills: ['Supply Chain', 'Logistics', 'Operations'],
    relevance: 'Advanced supply chain optimization strategies'
  },
  {
    id: 'gl-project-management',
    name: 'Project Management',
    provider: 'Great Learning',
    category: 'Project Management',
    year: '2023',
    verified: true,
    filePath: '/certificates/Great Learning/Project Management.pdf',
    description: 'Project management methodologies and tools',
    skills: ['Project Management', 'Planning', 'Execution'],
    relevance: 'Structured project delivery for manufacturing initiatives'
  },
  {
    id: 'bcg-sustainability',
    name: 'Climate & Sustainability Virtual Experience',
    provider: 'BCG (Forage)',
    category: 'Quality Management',
    year: '2022',
    verified: true,
    filePath: '/certificates/Extras/BCG Virtual Experience Program Badge.png',
    description: 'Sustainability strategy and carbon footprint analysis simulation',
    skills: ['Sustainability', 'Analysis', 'Strategy'],
    relevance: 'Relevant to green manufacturing and ESG initiatives'
  },
  {
    id: 'techsnap-python',
    name: 'Python Developer Internship Certificate',
    provider: 'TechSnap',
    category: 'Internship',
    year: '2021',
    verified: true,
    filePath: '/certificates/Internships/TechSnap.pdf',
    description: 'Software development and automation using Python',
    skills: ['Python', 'Automation', 'Scripting'],
    relevance: 'Fundamental coding for AI and automation solutions'
  },
  {
    id: 'srm-python',
    name: 'Advanced Python Programming',
    provider: 'SRM Institute',
    category: 'Data Science',
    year: '2020',
    verified: true,
    filePath: '/certificates/SRM/Python Certificate.jpg',
    description: 'Advanced Python data structures and development patterns',
    skills: ['Python', 'Data Science', 'Programming'],
    relevance: 'Core data processing for manufacturing intelligence'
  }
];

export const certificateCategories = [
  'All',
  'Cloud & AI',
  'IoT & Cloud',
  'Manufacturing',
  'Supply Chain',
  'Data Science',
  'Quality Management',
  'Operations',
  'Project Management',
  'Smart Manufacturing',
  'Internship',
  'Language Proficiency'
];

export const getCertificatesByCategory = (category: string) => {
  if (category === 'All') return certificates;
  return certificates.filter(cert => cert.category === category);
};

export const getCertificatesByProvider = (provider: string) => {
  return certificates.filter(cert => cert.provider === provider);
};

export const getRecentCertificates = (limit: number = 5) => {
  return certificates
    .sort((a, b) => parseInt(b.year) - parseInt(a.year))
    .slice(0, limit);
};
