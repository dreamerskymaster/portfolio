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
    id: 'udit-vashistha',
    name: 'Udit Vashistha',
    title: 'Assistant General Manager',
    company: 'Hero MotoCorp',
    relationship: 'Senior Colleague / Mentor',
    content: 'Ajith had done internship in my team while pursuing engineering.. at Hero MotoCorp ltd gurgaon...Ajith has great potential... grasping power ...can analyse deeply and articulate well...i have seen him delivering consistently well...i wish all success to ajith in his professional growth!!',
    rating: 5,
    verified: true,
    avatar: 'UV',
    date: 'February 6, 2024',
    category: 'Professional',
    highlights: [
      'Deep analytical skills',
      'Consistent top delivery',
      'High grasping power',
      'Great potential'
    ]
  },
  {
    id: 'mahesh-babu-valleru',
    name: 'Mahesh babu valleru',
    title: 'Deputy General Manager',
    company: 'Hero MotoCorp',
    relationship: 'Direct Manager',
    content: 'Ajith had joined hero MotoCorp as GET, later on seeing his enthusiasm & fast learning, i put him in Vida - Electric vehicle project from equipment installation & commissioning side under ME.\nSince team was new & Vida team was short on manpower, Ajith had stepped-up took additional responsibilities beyond ME to ensure Vida SOP happens on time without any delay.\nI highly recommend him as he will be a asset to any organisation he works.',
    rating: 5,
    verified: true,
    avatar: 'MB',
    date: 'February 3, 2024',
    category: 'Professional',
    highlights: [
      'Enthusiastic and fast learner',
      'Took additional responsibilities',
      'Ensured on-time project delivery',
      'Asset to any organization'
    ]
  },
  {
    id: 'anoop-gupta',
    name: 'Anoop Gupta',
    title: 'Senior Manager',
    company: 'Hero MotoCorp',
    relationship: 'Manager',
    content: 'Very hard working, well behaved person. Gives his 100% to everything he does.',
    rating: 5,
    verified: true,
    avatar: 'AG',
    date: 'February 2, 2024',
    category: 'Professional',
    highlights: [
      'Very hard working',
      'Well behaved',
      'Gives 100%'
    ]
  },
  {
    id: 'vivekanand-singh',
    name: 'Vivekanand Singh',
    title: 'Manufacturing Engineer',
    company: 'Hero MotoCorp',
    relationship: 'Colleague',
    content: 'One of the best human to associate. A good and supportive friend and excellent colleague. Dedicated to the work with a positive and helpful character towards others. Always keep smile on his face 😊 which is the strongest character i like in him.',
    rating: 5,
    verified: true,
    avatar: 'VS',
    date: 'February 2, 2024',
    category: 'Professional',
    highlights: [
      'Excellent colleague',
      'Dedicated to work',
      'Positive and supportive',
      'Helpful character'
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
