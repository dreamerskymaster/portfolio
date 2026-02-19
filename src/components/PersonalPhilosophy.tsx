import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, PenTool, Globe } from 'lucide-react';

const philosophyData = {
  headline: "From Breaking Toys to Building AI Systems",
  story: `At age 4, I broke my toy bicycle. Instead of telling my parents, I grabbed glue and fixed it myself—establishing a lifelong approach to problem-solving. My mother's advice still guides me: "If you break stuff, try fixing it." This childhood curiosity evolved into a career philosophy: understand the mechanics, identify the problem, and engineer the solution.`,
  
  approach: `AI should amplify human capability, not replace it. As I learned during my Van Dyk co-op: "AI can only be used to help you, not build you stuff. Building stuff is upon your brain and how you compute it." The key is knowing how to use AI to your benefit—neither avoiding it entirely nor relying on it so heavily that it costs you your job.`,
  
  vision: `Manufacturing isn't just assembly lines and machines anymore. It's AI-driven optimization, sustainable recycling systems, and intelligent automation. I've transformed from seeing "manufacturing as this one thing" to envisioning "manufacturing with AI, with recycling, with sustainability—a much bigger picture." My mission: bring AI innovation to traditional manufacturing operations, making industrial processes smarter, safer, and more sustainable.`
};

const PersonalPhilosophy: React.FC = () => {
  return (
    <section className="py-20 bg-card/30 rounded-3xl my-16 border border-border/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{philosophyData.headline}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
           {/* Story */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="bg-bg/50 p-8 rounded-2xl border border-border hover:border-primary/30 transition-colors"
           >
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-500">
                <PenTool className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">The Origin</h3>
              <p className="text-muted-foreground leading-relaxed italic">
                "{philosophyData.story}"
              </p>
           </motion.div>

           {/* Approach */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="bg-bg/50 p-8 rounded-2xl border border-border hover:border-primary/30 transition-colors"
           >
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-500">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">The Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                {philosophyData.approach}
              </p>
           </motion.div>

           {/* Vision */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="bg-bg/50 p-8 rounded-2xl border border-border hover:border-primary/30 transition-colors"
           >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-500">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">The Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                {philosophyData.vision}
              </p>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalPhilosophy;
