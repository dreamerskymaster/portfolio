export interface Document {
  id: string;
  title: string;
  type: 'Report' | 'Experience Letter' | 'Recommendation' | 'Presentation' | 'Manual' | 'Certificate';
  category: string;
  company?: string;
  year: string;
  description: string;
  filePath: string;
  size?: string;
  pages?: number;
  verified: boolean;
  highlights?: string[];
  relevance: string;
  skills?: string[];
}

export const documents: Document[] = [
  // Professional Reports
  {
    id: 'accil-report',
    title: 'ACCIL Manufacturing Report',
    type: 'Report',
    category: 'Manufacturing Analysis',
    company: 'ACCIL',
    year: '2023',
    description: 'Comprehensive manufacturing process analysis and optimization recommendations',
    filePath: '/documents/ACCIL Report.pdf',
    verified: true,
    highlights: [
      'Process optimization analysis',
      'Manufacturing efficiency improvements',
      'Cost reduction strategies',
      'Quality enhancement recommendations'
    ],
    relevance: 'Demonstrates analytical skills and manufacturing expertise',
    skills: ['Process Analysis', 'Manufacturing Optimization', 'Report Writing', 'Data Analysis']
  },
  {
    id: 'bosch-report',
    title: 'Bosch Manufacturing Report',
    type: 'Report',
    category: 'Industrial Analysis',
    company: 'Bosch',
    year: '2023',
    description: 'Detailed analysis of Bosch manufacturing operations and improvement opportunities',
    filePath: '/documents/Report Bosch.pdf',
    verified: true,
    highlights: [
      'Industrial manufacturing analysis',
      'Process improvement identification',
      'Technology integration opportunities',
      'Operational excellence strategies'
    ],
    relevance: 'Shows experience with industrial manufacturing systems',
    skills: ['Industrial Analysis', 'Process Improvement', 'Manufacturing Systems', 'Technology Integration']
  },
  {
    id: 'alstom-air-preheater',
    title: 'Alstom Ljungström Air Preheater Analysis',
    type: 'Report',
    category: 'Technical Analysis',
    company: 'Alstom',
    year: '2023',
    description: 'Technical analysis of air preheater systems and performance optimization',
    filePath: '/documents/AirPreHeaters Ljungström Alstom Chennai.pdf',
    verified: true,
    highlights: [
      'Thermal system analysis',
      'Energy efficiency optimization',
      'Equipment performance evaluation',
      'Technical documentation skills'
    ],
    relevance: 'Demonstrates technical analysis capabilities in energy systems',
    skills: ['Thermal Analysis', 'Energy Systems', 'Technical Documentation', 'Performance Optimization']
  },

  // Experience Letters
  {
    id: 'hero-experience-letter',
    title: 'Hero MotoCorp Experience Letter',
    type: 'Experience Letter',
    category: 'Professional Experience',
    company: 'Hero MotoCorp',
    year: '2024',
    description: 'Official experience letter from Hero MotoCorp detailing role and achievements',
    filePath: '/documents/Experience Letter_00015432.pdf',
    verified: true,
    highlights: [
      'Official employment verification',
      'Role and responsibility confirmation',
      'Performance acknowledgment',
      'Professional credibility'
    ],
    relevance: 'Official verification of professional experience and achievements',
    skills: ['Professional Experience', 'Manufacturing Engineering', 'Process Optimization', 'Team Leadership']
  },

  // Technical Presentations
  {
    id: 'laser-marking-presentation',
    title: 'Laser Marking - Learning by Sharing',
    type: 'Presentation',
    category: 'Technical Training',
    company: 'Hero MotoCorp',
    year: '2024',
    description: 'Comprehensive presentation on laser marking technology and implementation',
    filePath: '/documents/Laser Marking - Learning by Sharing.pptx',
    verified: true,
    highlights: [
      'Technical training delivery',
      'Knowledge sharing expertise',
      'Laser technology understanding',
      'Presentation skills'
    ],
    relevance: 'Shows technical training and knowledge sharing capabilities',
    skills: ['Technical Training', 'Laser Technology', 'Presentation Skills', 'Knowledge Sharing']
  },
  {
    id: 'robotics-automation-presentation',
    title: 'Robotics and Automation with Industry 4.0',
    type: 'Presentation',
    category: 'Industry 4.0',
    company: 'Hero MotoCorp',
    year: '2024',
    description: 'Comprehensive presentation on robotics, automation, and Industry 4.0 implementation',
    filePath: '/documents/Robotics-and-Automation-with-Industry-40-by-using-Lean-and-TPM.pptx',
    verified: true,
    highlights: [
      'Industry 4.0 expertise',
      'Robotics and automation knowledge',
      'Lean and TPM integration',
      'Strategic thinking'
    ],
    relevance: 'Demonstrates advanced knowledge of Industry 4.0 and automation',
    skills: ['Industry 4.0', 'Robotics', 'Automation', 'Lean Manufacturing', 'TPM', 'Strategic Planning']
  },

  // Technical Manuals
  {
    id: 'jipm-tpm-manual',
    title: 'JIPM TPM Manual Complete',
    type: 'Manual',
    category: 'TPM Methodology',
    company: 'JIPM',
    year: '2024',
    description: 'Complete JIPM Total Productive Maintenance manual and implementation guide',
    filePath: '/documents/JIPM TPM Manual Complete.pdf',
    verified: true,
    highlights: [
      'JIPM TPM methodology expertise',
      'Implementation guidance',
      'Best practices documentation',
      'Professional development'
    ],
    relevance: 'Shows deep expertise in TPM methodology and implementation',
    skills: ['TPM Methodology', 'JIPM Standards', 'Implementation Planning', 'Best Practices']
  },
  {
    id: 'sap-codes-manual',
    title: 'SAP All Codes Reference',
    type: 'Manual',
    category: 'SAP ERP',
    company: 'Hero MotoCorp',
    year: '2024',
    description: 'Comprehensive SAP ERP codes and procedures reference manual',
    filePath: '/documents/SAP All Codes.pdf',
    verified: true,
    highlights: [
      'SAP ERP expertise',
      'System administration knowledge',
      'Process documentation',
      'Technical reference creation'
    ],
    relevance: 'Demonstrates deep SAP ERP knowledge and system administration skills',
    skills: ['SAP ERP', 'System Administration', 'Process Documentation', 'Technical Reference']
  },

  // TPM Introduction Materials
  {
    id: 'tpm-intro-ame',
    title: 'TPM Introduction for AME',
    type: 'Manual',
    category: 'TPM Training',
    company: 'Hero MotoCorp',
    year: '2024',
    description: 'TPM introduction and training materials for Advanced Manufacturing Engineering',
    filePath: '/documents/TPM-introduction-AME.pdf',
    verified: true,
    highlights: [
      'TPM training development',
      'Educational material creation',
      'Manufacturing engineering focus',
      'Knowledge transfer expertise'
    ],
    relevance: 'Shows ability to develop training materials and transfer knowledge',
    skills: ['Training Development', 'TPM Education', 'Knowledge Transfer', 'Manufacturing Engineering']
  },

  // New Laser Marking Training Materials
  {
    id: 'steel-phase-laser-marking-component',
    title: 'Steel Phase Laser Marking Component Level Training',
    type: 'Presentation',
    category: 'Technical Training',
    company: 'Hero MotoCorp',
    year: '2024',
    description: 'Comprehensive component-level training for steel phase laser marking systems',
    filePath: '/documents/Steel Phase Laser Marking Component Level Training.pptx',
    verified: true,
    highlights: [
      'Component-level technical training',
      'Laser marking system expertise',
      'Steel phase processing knowledge',
      'Training material development'
    ],
    relevance: 'Demonstrates advanced technical training capabilities in laser marking systems',
    skills: ['Laser Technology', 'Technical Training', 'Steel Processing', 'Component Analysis']
  },
  {
    id: 'steel-phase-laser-marking-ritter',
    title: 'Steel Phase Laser Marking Training - Ritter',
    type: 'Presentation',
    category: 'Technical Training',
    company: 'Hero MotoCorp',
    year: '2024',
    description: 'Specialized Ritter laser marking system training for steel phase applications',
    filePath: '/documents/Steel Phase Laser Marking Training - Ritter.pptx',
    verified: true,
    highlights: [
      'Ritter system specialization',
      'Steel phase laser marking expertise',
      'Advanced training delivery',
      'Equipment-specific knowledge'
    ],
    relevance: 'Shows specialized expertise in specific laser marking equipment and applications',
    skills: ['Ritter Systems', 'Laser Marking', 'Steel Processing', 'Equipment Training']
  },



  {
    id: 'vasanth-lor',
    title: 'Letter of Recommendation - Vasanth Sir',
    type: 'Recommendation',
    category: 'Professional Reference',
    company: 'Hero MotoCorp',
    year: '2024',
    description: 'Professional recommendation highlighting project management and technical implementation skills',
    filePath: '/documents/AjithSri_LOR-3_Vasanth Sir.docx',
    verified: true,
    highlights: [
      'Project management excellence',
      'Technical implementation skills',
      'Quality improvement initiatives',
      'Mentoring and knowledge sharing'
    ],
    relevance: 'Demonstrates project management and technical leadership capabilities',
    skills: ['Project Management', 'Technical Implementation', 'Quality Management', 'Mentoring']
  },
  {
    id: 'vikas-bharati-lor',
    title: 'Letter of Recommendation - Prof. Vikas Bharati',
    type: 'Recommendation',
    category: 'Academic Reference',
    company: 'Academic Institution',
    year: '2024',
    description: 'Academic recommendation highlighting research capabilities and analytical skills',
    filePath: '/documents/AjithSri_ProfLOR - Vikas Bharati.docx',
    verified: true,
    highlights: [
      'Research methodology expertise',
      'Analytical thinking capabilities',
      'Academic excellence demonstrated',
      'Innovation in problem-solving'
    ],
    relevance: 'Academic validation of research and analytical capabilities',
    skills: ['Research Methodology', 'Analytical Thinking', 'Academic Excellence', 'Innovation']
  }
];

export const getDocumentsByType = (type: string) => {
  if (type === 'All') return documents;
  return documents.filter(doc => doc.type === type);
};

export const getDocumentsByCategory = (category: string) => {
  if (category === 'All') return documents;
  return documents.filter(doc => doc.category === category);
};

export const getFeaturedDocuments = (limit: number = 5) => {
  return documents
    .filter(doc => doc.verified)
    .sort((a, b) => parseInt(b.year) - parseInt(a.year))
    .slice(0, limit);
};
