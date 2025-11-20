import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Calendar, 
  ExternalLink, 
  Clock,
  CheckCircle,
  Quote,
  Users,
  Award,
  MessageSquare,
  LinkedinIcon
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { testimonials } from '../data/testimonials';
import TechnicalTooltip from '../components/TechnicalTooltip';

const Contact: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Existing LinkedIn testimonials
  const linkedinTestimonials = [
    {
      name: "Udit Vashistha",
      title: "Section Head - Production Engineering",
      company: "Hero MotoCorp",
      relationship: "Senior Colleague",
      content: "Ajith has worked with me for Digitization Scale up / Smart factory implementation in Hero Motocorp Ltd. He has in-depth understanding and interest in IOT, Manufacturing processes digitization, Maintenance Processes and Tool Engineering. He has demonstrated his ability to deliver the results as required and very minimal Intervention / follow ups are required with him, once directed, he does the things on his own. He is a good team player, quick learner, and challenger of status quo. Any organization / team would always like to have a person like him.",
      rating: 5,
      avatar: "UV",
      verified: true,
      category: 'Professional' as const,
      date: '2024',
      highlights: [
        'IoT and digitization expertise',
        'Minimal supervision required',
        'Challenger of status quo',
        'Excellent team player'
      ]
    },
    {
      name: "Mahesh Babu Valleru", 
      title: "Sr. Manager of Operations - Electric Vehicle",
      company: "Hero MotoCorp",
      relationship: "Direct Manager",
      content: "Ajith is Passionate and dynamic professional. With 3 years of professional experience he has a commendable knowledge on IOT and Digitization with hands on experience in mechanics of the shop. which Felt a unique things where he understood the requirement of the production shop, which will helps him to execute the IOT with perfection. As an individual he is a continuous learner, where ever the opportunity comes, he will grab and try to learn the new things. Starting forward in nature, and He is Brotherhood person",
      rating: 5,
      avatar: "MV",
      verified: true,
      category: 'Professional' as const,
      date: '2024',
      highlights: [
        'Passionate and dynamic',
        'Hands-on shop experience',
        'Continuous learner',
        'Forward-thinking nature'
      ]
    },
    {
      name: "Vivekanand Singh",
      title: "AGM Plant Maintenance & Operations",
      company: "Hero MotoCorp",
      relationship: "Direct Manager", 
      content: "I had the pleasure of working closely with Ajith Srikanth in Hero Motocorp, Haridwar Plant. He consistently impressed me with his exceptional professionalism, dedication and talent. He demonstrated a remarkable ability towards new learnings and initiatives, often exceeding expectations and delivering high-quality results under tight deadlines.",
      rating: 5,
      avatar: "VS",
      verified: true,
      category: 'Professional' as const,
      date: '2024',
      highlights: [
        'Exceptional professionalism',
        'Exceeds expectations',
        'High-quality results',
        'Works under tight deadlines'
      ]
    },
    {
      name: "Anoop Gupta",
      title: "Head - Engineering",
      company: "Hero MotoCorp", 
      relationship: "Senior Leadership",
      content: "Ajith is a very talented & hardworking person. In hero motocorp he has contributed a lot in Tool Engineering & Digitization projects. he has a good learning ability & agile. He delivers projects on time.",
      rating: 5,
      avatar: "AG",
      verified: true,
      category: 'Professional' as const,
      date: '2024',
      highlights: [
        'Talented and hardworking',
        'Tool Engineering expertise',
        'Good learning ability',
        'On-time project delivery'
      ]
    },
    {
      name: "Nehaa Vijayakumar",
      title: "Technophile | Digital Transformation",
      company: "Hero MotoCorp",
      relationship: "Peer Colleague",
      content: "Ajith is a modest and hardworking candidate with a thirst for exploring new technologies. Automation and control system attracts him the most. Ambitious and passionate about contributing in the field of Industry 4.0. Team player with immense managerial skills and efficient in showing progress. He is workaholic and an innovative thinker who is suitable for any work environment.",
      rating: 5,
      avatar: "NV",
      verified: true,
      category: 'Professional' as const,
      date: '2024',
      highlights: [
        'Thirst for new technologies',
        'Industry 4.0 passion',
        'Managerial skills',
        'Innovative thinker'
      ]
    }
  ];

  // Combine existing and new testimonials
  const allTestimonials = [...linkedinTestimonials, ...testimonials];
  const featuredTestimonials = allTestimonials.slice(0, 5);



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
            Let's Collaborate
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your <TechnicalTooltip term="Manufacturing Operations" definition="The complete set of activities involved in producing goods, from raw materials to finished products." example="Like running a restaurant kitchen - coordinating ingredients, equipment, staff, and processes to deliver quality meals efficiently." industry="Manufacturing" icon="🏭">
              manufacturing operations
            </TechnicalTooltip>? Let's discuss opportunities or 
            send a message to discuss your specific challenges and opportunities.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Methods & LinkedIn Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* LinkedIn Professional Badge */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <LinkedinIcon className="w-5 h-5 text-blue-600" />
                  Professional Profile
                </h3>
                <div 
                  className="badge-base LI-profile-badge" 
                  data-locale="en_US" 
                  data-size="large" 
                  data-theme="light" 
                  data-type="HORIZONTAL" 
                  data-vanity="as31" 
                  data-version="v1"
                >
                  <a 
                    className="badge-base__link LI-simple-link" 
                    href="https://www.linkedin.com/in/as31?trk=profile-badge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View LinkedIn Profile
                  </a>
                </div>
                <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
              </div>

              {/* Contact Information */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-muted-foreground">Contact via form below</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent-1" />
                    <div>
                      <div className="font-medium text-foreground">Location</div>
                      <div className="text-muted-foreground">Boston, MA | Open to Relocation</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-accent-2" />
                    <div>
                      <div className="font-medium text-foreground">Availability</div>
                      <div className="text-muted-foreground">Full-time from December 2026 | Pre-OPT on discussion</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <div>
                      <div className="font-medium text-foreground">Response Time</div>
                      <div className="text-muted-foreground">Within 24 hours</div>
                    </div>
                  </div>
                </div>
              </div>


              {/* Newsletter */}
              <div className="bg-gradient-to-r from-accent-1/10 to-primary/10 border border-accent-1/20 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Weekly Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Manufacturing Innovation insights delivered weekly
                </p>
                <motion.a
                  href="https://www.linkedin.com/newsletters/7130868711963443201/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent-1 text-white rounded-lg text-sm font-medium hover:bg-accent-1/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Subscribe on LinkedIn
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Start a Conversation
                </h2>
                <ContactForm />
              </div>
            </motion.div>
          </div>

          {/* LinkedIn Recommendations Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                What Colleagues Say
              </h2>
              <p className="text-muted-foreground">
                Testimonials from manufacturing leaders and engineering professionals
              </p>
            </div>

            {/* Testimonials Carousel */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Testimonial Navigation */}
                <div className="lg:w-1/3">
                  <div className="space-y-3">
                    {featuredTestimonials.map((testimonial, index) => (
                      <motion.button
                        key={testimonial.name}
                        onClick={() => setActiveTestimonial(index)}
                        whileHover={{ x: 4 }}
                        className={`w-full text-left p-4 rounded-lg transition-all ${
                          activeTestimonial === index 
                            ? 'bg-primary/10 border border-primary/20' 
                            : 'bg-muted/50 hover:bg-muted'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                            activeTestimonial === index ? 'bg-primary' : 'bg-muted-foreground'
                          }`}>
                            {testimonial.avatar}
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{testimonial.name}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                          </div>
                          {testimonial.verified && (
                            <CheckCircle className="w-4 h-4 text-accent-1 ml-auto" />
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Active Testimonial */}
                <div className="lg:w-2/3">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-r from-primary/5 to-accent-1/5 border border-primary/10 rounded-xl p-6"
                  >
                    <Quote className="w-8 h-8 text-primary mb-4" />
                    <blockquote className="text-foreground leading-relaxed mb-6">
                      "{featuredTestimonials[activeTestimonial].content}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-foreground">
                          {featuredTestimonials[activeTestimonial].name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {featuredTestimonials[activeTestimonial].title}
                        </div>
                        <div className="text-sm text-primary">
                          {featuredTestimonials[activeTestimonial].company}
                        </div>
                      </div>
                      <motion.a
                        href="https://www.linkedin.com/in/as31/details/recommendations/?detailScreenTabIndex=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                        View All
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>


          {/* Current Status & Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-primary/5 to-accent-1/5 border border-primary/20 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Currently Available for Projects
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4">
                    <div className="w-12 h-12 bg-accent-1/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-accent-1" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Consulting Projects</h4>
                    <p className="text-sm text-muted-foreground">
                      Short-term manufacturing optimization engagements
                    </p>
                  </div>
                  <div className="p-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Research Collaboration</h4>
                    <p className="text-sm text-muted-foreground">
                      Academic research partnerships in manufacturing AI
                    </p>
                  </div>
                  <div className="p-4">
                    <div className="w-12 h-12 bg-accent-2/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <MessageSquare className="w-6 h-6 text-accent-2" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Speaking Opportunities</h4>
                    <p className="text-sm text-muted-foreground">
                      Industry conferences and technical presentations
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-contrast rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  Get in Touch
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;