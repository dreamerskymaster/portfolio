import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Zap, Lightbulb, Wrench, Search } from 'lucide-react';

interface Strength {
  rank: number;
  name: string;
  domain: string;
  domainColor: string;
  domainBg: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
}

const strengths: Strength[] = [
  {
    rank: 1,
    name: 'Discipline',
    domain: 'EXECUTING',
    domainColor: 'text-violet-400',
    domainBg: 'bg-violet-500/10 border-violet-500/20',
    tagline: 'Create structure, and keep things organized.',
    description: 'Thrives in structured environments. Expert planner who breaks large problems into manageable steps with timelines. The dependable partner in any group — meticulous, organized, and always has a plan.',
    icon: <Shield className="w-8 h-8" />
  },
  {
    rank: 2,
    name: 'Learner',
    domain: 'STRATEGIC THINKING',
    domainColor: 'text-emerald-400',
    domainBg: 'bg-emerald-500/10 border-emerald-500/20',
    tagline: 'Passion for learning to add value.',
    description: 'Loves the process of learning itself. Faces each day with renewed energy wondering what new knowledge awaits. Naturally skilled at helping others reach learning outcomes.',
    icon: <Brain className="w-8 h-8" />
  },
  {
    rank: 3,
    name: 'Input',
    domain: 'STRATEGIC THINKING',
    domainColor: 'text-emerald-400',
    domainBg: 'bg-emerald-500/10 border-emerald-500/20',
    tagline: 'Keep exploring; always be curious.',
    description: 'Research is always thorough — believes you can never have too much information. Enjoys searching for and finding new information and categorizing topics.',
    icon: <Search className="w-8 h-8" />
  },
  {
    rank: 4,
    name: 'Restorative',
    domain: 'EXECUTING',
    domainColor: 'text-violet-400',
    domainBg: 'bg-violet-500/10 border-violet-500/20',
    tagline: 'Every problem has a solution.',
    description: 'Complex problems are energizing. Strong desire to fix things through critical thinking. Notices problems before others do and asks thoughtful questions.',
    icon: <Wrench className="w-8 h-8" />
  },
  {
    rank: 5,
    name: 'Analytical',
    domain: 'STRATEGIC THINKING',
    domainColor: 'text-emerald-400',
    domainBg: 'bg-emerald-500/10 border-emerald-500/20',
    tagline: 'Logical, objective decision making.',
    description: 'Asks great questions and goes deep. Work is well-researched and accurate. Enjoys tasks with definitive answers and needs everything proven with data.',
    icon: <Lightbulb className="w-8 h-8" />
  }
];

const CliftonStrengths: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-24 relative py-12 px-4 overflow-hidden"
    >
      {/* Dynamic DNA Helix Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden blur-[2px] hidden md:block">
        <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className="opacity-20">
          <defs>
            <linearGradient id="dna-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
              <stop offset="50%" stopColor="var(--primary)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="dna-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--accent-1)" stopOpacity="0.2" />
              <stop offset="50%" stopColor="var(--accent-1)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--accent-1)" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Animated Strands */}
          {[...Array(20)].map((_, i) => {
            const x = i * 60;
            return (
              <motion.g key={i}>
                <motion.line
                  x1={x}
                  y1={400 + Math.sin(i * 0.5) * 150}
                  x2={x}
                  y2={400 - Math.sin(i * 0.5) * 150}
                  stroke="white"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                  animate={{
                    y1: [400 + Math.sin(i * 0.5) * 150, 400 - Math.sin(i * 0.5) * 150, 400 + Math.sin(i * 0.5) * 150],
                    y2: [400 - Math.sin(i * 0.5) * 150, 400 + Math.sin(i * 0.5) * 150, 400 - Math.sin(i * 0.5) * 150],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: i * 0.1 }}
                />
                <motion.circle
                  cx={x}
                  cy={400 + Math.sin(i * 0.5) * 150}
                  r="2"
                  fill="var(--primary)"
                  animate={{
                    cy: [400 + Math.sin(i * 0.5) * 150, 400 - Math.sin(i * 0.5) * 150, 400 + Math.sin(i * 0.5) * 150],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: i * 0.1 }}
                />
                <motion.circle
                  cx={x}
                  cy={400 - Math.sin(i * 0.5) * 150}
                  r="2"
                  fill="var(--accent-1)"
                  animate={{
                    cy: [400 - Math.sin(i * 0.5) * 150, 400 + Math.sin(i * 0.5) * 150, 400 - Math.sin(i * 0.5) * 150],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: i * 0.1 }}
                />
              </motion.g>
            );
          })}
        </svg>
      </div>

      <div className="relative z-10 container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-6"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Psychometric Talent Analysis</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tight">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-1">Strengths DNA</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A specialized blueprint of my innate cognitive patterns, mapped through Gallup's CliftonStrengths assessment to identify high-performance behaviors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Hero Strength: Discipline */}
          <div className="lg:col-span-12 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-1/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative h-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-card/40 backdrop-blur-2xl p-8 md:p-12 transition-all duration-500 hover:border-primary/40 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.1)]">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border mb-8 ${strengths[0].domainBg} ${strengths[0].domainColor} shadow-sm`}>
                    <Shield className="w-3.5 h-3.5" />
                    {strengths[0].domain}
                  </div>

                  <div className="mb-auto">
                    <div className="flex items-center gap-6 mb-8 text-primary">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-700 shadow-lg shadow-primary/5">
                        <Shield className="w-10 h-10 md:w-12 md:h-12" />
                      </div>
                      <div>
                        <span className="text-sm font-black text-primary/60 uppercase tracking-tighter">Rank 01</span>
                        <h3 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
                          {strengths[0].name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-2xl font-serif italic text-foreground/90 mb-8 leading-relaxed">
                      "{strengths[0].tagline}"
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {strengths[0].description}
                    </p>
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/5 flex gap-4">
                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-muted-foreground">STRUCTURE</div>
                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-muted-foreground">ORGANIZATION</div>
                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-muted-foreground">DEPENDABILITY</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Secondary Strengths: DNA Grid */}
          <div className="lg:col-span-12 xl:col-span-7 grid md:grid-cols-2 gap-6">
            {strengths.slice(1).map((strength, index) => (
              <motion.div
                key={strength.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-1/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative rounded-3xl border border-white/10 bg-card/40 backdrop-blur-xl p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-8">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border transition-colors ${strength.domainBg} ${strength.domainColor} shadow-sm`}>
                      {strength.domain === 'STRATEGIC THINKING' ? <Brain className="w-3 h-3" /> : <Shield className="w-3 h-3" />}
                      {strength.domain}
                    </div>
                    <span className="text-xs font-black text-white/20 uppercase tracking-widest">Domain Rank 0{strength.rank}</span>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:rotate-12 transition-transform duration-500">
                      {strength.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground leading-tight tracking-tight">{strength.name}</h3>
                  </div>

                  <p className="text-sm font-bold text-primary italic mb-4 opacity-90 leading-relaxed">
                    "{strength.tagline}"
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Key Stats / Insight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="p-6 rounded-2xl bg-violet-500/5 border border-violet-500/10 backdrop-blur-md">
            <div className="text-violet-400 font-black text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
              <Shield className="w-4 h-4" /> Executing
            </div>
            <p className="text-sm text-muted-foreground">High capability in turning ideas into action and maintaining rigorous structural integrity.</p>
          </div>
          <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 backdrop-blur-md">
            <div className="text-emerald-400 font-black text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
              <Brain className="w-4 h-4" /> Strategic Thinking
            </div>
            <p className="text-sm text-muted-foreground">Natural aptitude for analyzing complex data and predicting future manufacturing trends.</p>
          </div>
          <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10 backdrop-blur-md">
            <div className="text-blue-400 font-black text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4" /> Core Synthesis
            </div>
            <p className="text-sm text-muted-foreground">The balanced DNA of persistent execution and deep analytical foresight across engineering projects.</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CliftonStrengths;
