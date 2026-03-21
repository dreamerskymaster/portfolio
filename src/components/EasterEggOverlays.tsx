import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Activity } from 'lucide-react';

import MatrixRain from './MatrixRain';

interface EasterEggOverlaysProps {
  isBlueprintMode: boolean;
  isKonamiUnlocked: boolean;
  systemStatusTaps: number;
  isMatrixMode: boolean;
  isRolling: boolean;
  showNyanCat: boolean;
  resetSystemStatus: () => void;
}

const EasterEggOverlays: React.FC<EasterEggOverlaysProps> = ({
  isBlueprintMode,
  isKonamiUnlocked,
  systemStatusTaps,
  isMatrixMode,
  isRolling,
  showNyanCat,
  resetSystemStatus
}) => {
  const [showSystemStatus, setShowSystemStatus] = useState(false);
  const [showKonami, setShowKonami] = useState(false);
  const [uptime, setUptime] = useState(0);

  // Handle System Status trigger
  useEffect(() => {
    if (systemStatusTaps >= 5) {
      setShowSystemStatus(true);
      resetSystemStatus();
    }
  }, [systemStatusTaps, resetSystemStatus]);

  // Handle Konami visibility
  useEffect(() => {
    if (isKonamiUnlocked) {
      setShowKonami(true);
      const timer = setTimeout(() => setShowKonami(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isKonamiUnlocked]);

  // Fake uptime counter for System Status
  useEffect(() => {
    if (showSystemStatus) {
      const interval = setInterval(() => setUptime(Math.floor(performance.now() / 1000)), 1000);
      return () => clearInterval(interval);
    }
  }, [showSystemStatus]);

  return (
    <>
      {/* Barrel Roll Global Style */}
      {isRolling && (
        <style dangerouslySetInnerHTML={{ __html: `
          body {
            animation: barrelRoll 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            overflow-x: hidden;
          }
          @keyframes barrelRoll {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}} />
      )}

      {/* Matrix Mode Overlay */}
      <AnimatePresence>
        {isMatrixMode && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[105] pointer-events-none mix-blend-screen"
          >
            <MatrixRain />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nyan Cat Overlay */}
      <AnimatePresence>
        {showNyanCat && (
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: '100vw' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: 'linear' }}
            className="fixed top-1/3 left-0 z-[200] pointer-events-none drop-shadow-2xl"
          >
            <div className="flex items-center text-5xl md:text-7xl">
              <span className="animate-pulse">🌈</span>
              <span className="animate-bounce">🐈</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Blueprint Mode Overlay */}
      <div 
        className={`fixed inset-0 pointer-events-none z-[100] transition-opacity duration-1000 ${
          isBlueprintMode ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(14, 165, 233, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          mixBlendMode: 'difference'
        }}
      >
        {isBlueprintMode && (
          <div className="absolute top-4 right-4 bg-sky-500/10 text-sky-500 px-3 py-1 border border-sky-500/20 rounded-md font-mono text-xs shadow-lg backdrop-blur-sm">
            SCHEMATIC OVERLAY ACTIVE
          </div>
        )}
      </div>

      {/* Konami Code Animation */}
      <AnimatePresence>
        {showKonami && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, rotate: [0, 5, -5, 0] }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="fixed inset-0 pointer-events-none z-[110] flex items-center justify-center bg-black/60 backdrop-blur-md"
          >
            <div className="bg-gradient-to-br from-yellow-400 to-amber-600 p-12 rounded-[3rem] shadow-[0_0_150px_rgba(251,191,36,0.6)] text-white text-center border-4 border-yellow-200 backdrop-blur-xl">
              <Zap className="w-16 h-16 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse" />
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-yellow-50 mb-2 md:mb-4 drop-shadow-md">
                Maximum Power
              </h2>
              <div className="inline-block bg-black/20 px-4 py-1.5 md:px-6 md:py-2 rounded-full border border-white/20">
                <p className="text-lg md:text-2xl font-bold tracking-widest text-yellow-200">30 LIVES ADDED</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* System Status Overlay */}
      <AnimatePresence>
        {showSystemStatus && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: -50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 50, x: -50 }}
            className="fixed bottom-4 left-4 z-[120] bg-slate-900 border border-slate-700 text-emerald-400 font-mono text-[10px] md:text-xs rounded-lg shadow-2xl p-4 w-60 md:w-64 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-500 animate-pulse" />
                <span className="font-bold text-slate-200 tracking-wider">SYSTEM.STATUS</span>
              </div>
              <button 
                onClick={() => setShowSystemStatus(false)}
                className="text-slate-500 hover:text-white transition-colors"
                title="Close overlay"
              >
                [X]
              </button>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center group">
                <span className="text-slate-500 group-hover:text-slate-400 transition-colors">MEM_ALLOC:</span>
                <span className="font-bold">{(Math.random() * 10 + 40).toFixed(1)} MB</span>
              </div>
              <div className="flex justify-between items-center group">
                <span className="text-slate-500 group-hover:text-slate-400 transition-colors">CPU_LOAD:</span>
                <span className="font-bold">{(Math.random() * 5 + 1).toFixed(1)}%</span>
              </div>
              <div className="flex justify-between items-center group">
                <span className="text-slate-500 group-hover:text-slate-400 transition-colors">NET_LINK:</span>
                <span className="font-bold">SECURE [WSS]</span>
              </div>
              <div className="flex justify-between items-center group">
                <span className="text-slate-500 group-hover:text-slate-400 transition-colors">SYS_UPTIME:</span>
                <span className="font-bold">{uptime}s</span>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-700/50 flex flex-col gap-1">
                <span className="text-sky-400 opacity-70">Initializing protocols...</span>
                <span className="text-emerald-500/80 font-bold">MANUFX_ENGINE_READY //</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EasterEggOverlays;
