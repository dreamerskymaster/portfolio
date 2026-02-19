import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

const FeaturedArticle: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl border border-white/10"
        >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                <div className="flex-1 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 rounded-full text-sm font-semibold">
                        <Award className="w-4 h-4" />
                        <span>Featured by Northeastern University</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                        He tinkered with toys as a child, now he’s revolutionizing manufacturing with AI
                    </h2>
                    
                    <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                        "Working with a leading recycling manufacturer, Ajith Srikanth used AI to do what he’s always done: fix things." – Northeastern Global News
                    </p>
                    
                    <motion.a 
                        href="https://news.northeastern.edu/2025/12/08/ai-recycling-manufacturing-co-op/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-900 rounded-xl font-bold text-lg shadow-lg hover:bg-gray-50 transition-colors"
                    >
                        Read Full Story 
                        <ExternalLink className="w-5 h-5" />
                    </motion.a>
                </div>
                
                {/* Visual/Image Area - Placeholder or Abstract */}
                <div className="flex-1 flex justify-center items-center">
                    <div className="relative w-full max-w-sm aspect-video bg-black/40 rounded-xl border border-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden group hover:border-white/30 transition-all">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 group-hover:opacity-100 transition-opacity opacity-0"></div>
                        <img src="https://news.northeastern.edu/wp-content/uploads/2025/11/Ajith-Srikanth_1400_1.jpg" alt="Ajith Srikanth Featured by Northeastern" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
