export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  relationship: string;
  content: string;
  rating: number;
  verified: boolean;
  avatar: string;
  date: string;
  category: 'Professional' | 'Academic' | 'Leadership';
  highlights?: string[];
}

export const testimonials: Testimonial[] = [


  {
    id: 'vasanth-sir',
    name: 'Vasanth Sir',
    title: 'Engineering Manager',
    company: 'Hero MotoCorp',
    relationship: 'Technical Supervisor',
    content: 'Working with Ajith was a pleasure. His deep understanding of manufacturing processes, combined with his ability to implement cutting-edge technologies like AI and machine learning, positioned him as a forward-thinking engineer. His contributions to our digital transformation initiatives were outstanding.',
    rating: 5,
    verified: true,
    avatar: 'VS',
    date: '2024',
    category: 'Professional',
    highlights: [
      'Deep manufacturing expertise',
      'AI/ML implementation',
      'Digital transformation leadership',
      'Forward-thinking approach'
    ]
  },
  {
    id: 'vikas-bharati',
    name: 'Prof. Vikas Bharati',
    title: 'Professor',
    company: 'SRM Institute of Science and Technology',
    relationship: 'Academic Advisor',
    content: 'Ajith was an outstanding student who consistently demonstrated excellence in both theoretical knowledge and practical applications. His research work on EDM controllers and elevator systems using PLC showcased his strong engineering fundamentals and innovative thinking.',
    rating: 5,
    verified: true,
    avatar: 'VB',
    date: '2023',
    category: 'Academic',
    highlights: [
      'Outstanding academic performance',
      'Strong research capabilities',
      'Innovative engineering solutions',
      'Excellent practical skills'
    ]
  },
  {
    id: 'northeastern-colleague',
    name: 'Northeastern Colleague',
    title: 'Graduate Student',
    company: 'Northeastern University',
    relationship: 'Peer',
    content: 'Ajith\'s teaching approach in the Simulation Analysis course was exceptional. His ability to break down complex concepts and make them accessible to students, combined with his real-world industry experience, made him an outstanding Course Assistant.',
    rating: 5,
    verified: true,
    avatar: 'NC',
    date: '2025',
    category: 'Academic',
    highlights: [
      'Exceptional teaching ability',
      'Complex concept explanation',
      'Real-world industry experience',
      'Outstanding mentorship'
    ]
  },
  {
    id: 'lead360-participant',
    name: 'LEAD360 Participant',
    title: 'Student',
    company: 'Northeastern University',
    relationship: 'Program Participant',
    content: 'Ajith\'s leadership in the LEAD360 program was inspiring. His ability to facilitate discussions, encourage participation, and create an inclusive learning environment made him an exceptional Teaching Assistant. His guidance helped many students develop their leadership skills.',
    rating: 5,
    verified: true,
    avatar: 'LP',
    date: '2025',
    category: 'Leadership',
    highlights: [
      'Inspiring leadership',
      'Inclusive facilitation',
      'Student development focus',
      'Exceptional mentorship'
    ]
  }
];

export const getTestimonialsByCategory = (category: string) => {
  if (category === 'All') return testimonials;
  return testimonials.filter(testimonial => testimonial.category === category);
};

export const getFeaturedTestimonials = (limit: number = 3) => {
  return testimonials
    .filter(t => t.verified)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};
