import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PreLoader = () => {
  const [stage, setStage] = useState<'initial' | 'moving' | 'done'>('initial');

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';

    // Timeline
    const moveTimer = setTimeout(() => {
      setStage('moving');
    }, 2000); // Start moving after 2s

    const doneTimer = setTimeout(() => {
      setStage('done');
      document.body.style.overflow = 'unset';
    }, 3500); // Completely unmount after transition

    return () => {
      clearTimeout(moveTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (stage === 'done') return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020617]"
      initial={{ opacity: 1 }}
      animate={stage === 'moving' ? { backgroundColor: 'rgba(2, 6, 23, 0)' } : {}}
      transition={{ duration: 0.8, delay: 0.5 }} // Fade out bg slowly
    >
      <div className="relative w-full h-full flex items-center justify-center">

        {/* Profile Pic / Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={stage === 'initial'
            ? { scale: 1, opacity: 1 }
            : {
              scale: 0.15, // Shrink to logo size
              x: '-42vw', // Move to top-left (approx) - adjusted for responsiveness usually requires window measurement but this is a solid approximation
              y: '-45vh',
              opacity: 0 // Fade out slightly as the real header takes over, OR keep opacity 1 if perfect match
            }
          }
          transition={stage === 'initial'
            ? { duration: 0.8, ease: "easeOut" }
            : { duration: 1.2, ease: "easeInOut" }
          }
          className="relative z-10 flex flex-col items-center"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-1 shadow-2xl shadow-emerald-500/30">
            <img
              src="/ManuFX.png"
              alt="Profile"
              className="w-full h-full object-contain bg-white/10 rounded-2xl backdrop-blur-sm"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </div>

          {/* Text Fades Out separately */}
          <motion.h1
            className="mt-6 text-3xl font-bold text-white tracking-widest uppercase"
            animate={stage === 'moving' ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ManuFX
          </motion.h1>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default PreLoader;
