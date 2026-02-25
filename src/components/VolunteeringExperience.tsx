import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin, Award } from 'lucide-react';
import { profile } from '../data/profile';
import ParallaxHeading from './ParallaxHeading';

const VolunteeringExperience: React.FC = () => {
    if (!profile.volunteering || profile.volunteering.length === 0) {
        return null;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
        >
            <ParallaxHeading direction="vertical" distance={20} className="mb-0">
                <h2 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
                    <Heart className="w-6 h-6 text-red-500" />
                    Volunteering Experience
                </h2>
            </ParallaxHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {profile.volunteering.map((item, index) => (
                    <motion.div
                        key={item.id || index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-1">{item.role}</h3>
                                <div className="text-primary font-medium">{item.organization}</div>
                            </div>
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                <Award className="w-5 h-5 text-primary" />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                {item.start} {item.end ? `- ${item.end}` : ''}
                            </div>
                            {item.location && (
                                <div className="flex items-center gap-1.5">
                                    <MapPin className="w-4 h-4" />
                                    {item.location}
                                </div>
                            )}
                        </div>

                        <p className="text-muted-foreground leading-relaxed text-sm">
                            {item.description}
                        </p>
                        {item.bullets && item.bullets.length > 0 && (
                            <ul className="mt-4 space-y-2">
                                {item.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default VolunteeringExperience;
