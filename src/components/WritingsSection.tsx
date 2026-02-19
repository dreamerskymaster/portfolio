import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import Button from './ui/Button';

const MotionLink = motion(Link);

const WritingsSection: React.FC = () => {
  const recentWritings = profile.writings?.slice(0, 2) || [];

  return (
    <section className="py-24 bg-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-foreground mb-4">Latest Insights</h2>
            <p className="text-muted-foreground text-lg">
              Thoughts on the intersection of manufacturing, AI, and leadership.
            </p>
          </div>
          <Button to="/writings" variant="ghost" className="group">
            Read all articles <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {recentWritings.map((post, index) => {
            const isInternal = !post.url.startsWith('http');
            const CardWrapper = isInternal ? MotionLink : motion.a;
            const extraProps = isInternal ? { to: post.url } : { href: post.url, target: '_blank', rel: 'noopener noreferrer' };

            return (
              <CardWrapper
                key={post.title}
                {...(extraProps as any)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="group flex flex-col p-8 bg-card border border-border rounded-3xl hover:shadow-xl transition-all duration-300"
              >
                <div className="h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full border border-border">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {post.summary}
                  </p>

                  <div className="mt-auto flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WritingsSection;
