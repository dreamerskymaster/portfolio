import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroOverlayProps {
  onComplete: () => void;
}

const IntroOverlay: React.FC<IntroOverlayProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'enter' | 'move' | 'exit'>('enter');

  useEffect(() => {
    // Stage 1: Enter (Pop up)
    const timer1 = setTimeout(() => setStage('move'), 1500); // Stay centered for 1.5s

    // Stage 2: Move to logo position
    const timer2 = setTimeout(() => {
      setStage('exit');
      onComplete();
    }, 2500); // 1.5s + 1s transition

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage !== 'exit' && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Circular Pop-up Profile */}
          <motion.div
            layoutId="profile-logo"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: stage === 'enter' ? 1.5 : 1, // Start large, then shrink
              opacity: 1,
              x: stage === 'move' ? '-45vw' : 0, // Move to left
              y: stage === 'move' ? '-45vh' : 0, // Move to top
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            style={{
              // Fine-tune final position to match Header logo if possible, 
              // generic 'top-left' for now.
            }}
            className="relative"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-2xl relative z-50">
              <img
                src="/documents/profile-pic (1).png"
                alt="Ajith Srikanth"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroOverlay;
