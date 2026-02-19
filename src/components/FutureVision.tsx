import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Globe, Cpu, Rocket } from 'lucide-react';

const FutureVision: React.FC = () => {
  const visions = [
    {
      icon: Brain,
      title: "Cognitive Manufacturing",
      description: "Moving beyond automation to autonomous systems where machines self-diagnose, self-optimize, and collaborate with human operators.",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
    {
      icon: Globe,
      title: "Sustainable Systems",
      description: "Engineering circular economy frameworks where waste is minimized through smarter design and AI-driven resource allocation.",
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "border-green-500/20"
    },
    {
      icon: Cpu,
      title: "Smart Manufacturing & IoT",
      description: "Implementing cost-effective IoT frameworks and AI agents that optimize production efficiency and drive significant cost improvements across industrial operations.",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    }
  ];

  return (
    <section className="py-20 bg-card/30 rounded-3xl border border-border mt-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 p-20 opacity-5">
        <Rocket size={300} aria-hidden="true" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
            <Rocket className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-semibold">The Road Ahead</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Vision for 2030
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My journey isn't just about building software; it's about reshaping how we build everything else.
            Here is where I see the industry going, and where I intend to lead it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {visions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-2xl border ${item.border} bg-card hover:shadow-xl transition-all duration-300 group`}
              >
                <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${item.color}`} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FutureVision;
