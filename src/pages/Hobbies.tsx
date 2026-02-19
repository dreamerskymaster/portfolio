import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Heart,
  Star,
  Camera,
  Video,
  Music,
  Utensils,
  Plane,
  Bike,
  Mountain,
  Tv,
  Sparkles,
  Zap,
  Target,
  Trophy,
  Gamepad2,
  Cpu,
  Lock,
  Wrench
} from 'lucide-react';
import { hobbies, Hobby } from '../data/hobbies';
import HobbyGame from '../components/HobbyGame';
import PageTransition from '../components/PageTransition';

// --- Gamification Components ---

const XPBar: React.FC<{ xp: number; level: number; nextLevelXp: number }> = ({ xp, level, nextLevelXp }) => {
  const progress = (xp / nextLevelXp) * 100;

  return (
    <div className="fixed top-24 right-4 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 w-64 md:w-80 transform transition-all hover:scale-105 hidden lg:block">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-1.5 rounded-lg text-white">
            <Trophy className="w-4 h-4" />
          </div>
          <span className="font-bold text-slate-800 dark:text-white">Player Level {level}</span>
        </div>
        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{Math.floor(xp)} / {nextLevelXp} XP</span>
      </div>
      <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-emerald-400 to-cyan-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 50 }}
        />
      </div>
    </div>
  );
};

// 3D Tilt Card Component
const GamifiedCard: React.FC<{
  hobby: Hobby;
  onClick: () => void;
  onHover: () => void;
  isLiked: boolean;
  isLocked: boolean;
  toggleLike: (e: React.MouseEvent) => void;
  getIcon: (id: string) => React.ReactNode;
}> = ({ hobby, onClick, onHover, isLiked, isLocked, toggleLike, getIcon }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isLocked) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
    onHover();
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1000 }}
      className={`relative group h-full ${isLocked ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={isLocked ? undefined : onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={isLocked ? {} : { scale: 1.02, zIndex: 10 }}
    >
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl opacity-0 transition duration-500 ${isLocked ? '' : 'group-hover:opacity-75 blur'}`}></div>
      <div className={`relative bg-white dark:bg-slate-800 rounded-2xl p-6 h-full shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col justify-between transition-all duration-700 ${isLocked ? 'opacity-40 grayscale blur-[2px]' : 'opacity-100 grayscale-0 blur-0'}`}>

        {isLocked && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-slate-400 group-hover:text-indigo-500 transition-colors">
            <Lock className="w-12 h-12 mb-2" />
            <span className="text-[10px] font-black uppercase tracking-widest">Capture in game to unlock</span>
          </div>
        )}

        {/* Header */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${hobby.color} text-white shadow-lg`}>
                {getIcon(hobby.id)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{hobby.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-xl">{hobby.emoji}</span>
                  {!isLocked && <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 font-medium font-mono">ID #{hobby.id.slice(0, 3).toUpperCase()}</span>}
                </div>
              </div>
            </div>
            {!isLocked && (
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={toggleLike}
                className="z-20 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <Heart className={`w-6 h-6 ${isLiked ? 'fill-rose-500 text-rose-500' : 'text-slate-300'}`} />
              </motion.button>
            )}
          </div>

          <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3 text-sm leading-relaxed">
            {hobby.description}
          </p>

          {/* Skill Bar */}
          {!isLocked && (
            <div className="mb-4">
              <div className="flex justify-between text-xs mb-1 font-semibold text-slate-400 uppercase tracking-wider">
                <span>Discovery Status</span>
                <span>100%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  className={`h-full bg-gradient-to-r ${hobby.color}`}
                ></motion.div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div>
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-none">
            {hobby.highlights.slice(0, 3).map((h, i) => (
              <span key={i} className={`text-[9px] px-2 py-1 rounded border bg-slate-50 dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700 whitespace-nowrap`}>
                {h.slice(0, 15)}...
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between mt-2 pt-4 border-t border-slate-100 dark:border-slate-700">
            <span className="text-[10px] font-mono text-slate-400">UNLOCKED</span>
            <div className="flex -space-x-2">
              {hobby.media.slice(0, 3).map((m, i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white dark:border-slate-800 overflow-hidden shadow-sm">
                  {m.type === 'image' && <img src={m.src} className="w-full h-full object-cover" alt={`Hobby ${hobby.name} thumbnail`} />}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};


const Hobbies: React.FC = () => {
  const [selectedHobby, setSelectedHobby] = useState<Hobby | null>(null);
  const [likedHobbies, setLikedHobbies] = useState<Set<string>>(new Set());
  const [unlockedHobbies, setUnlockedHobbies] = useState<Set<string>>(new Set(['music'])); // Music unlocked by default for flavor

  // Game State
  const [xp, setXp] = useState(1250);
  const [level, setLevel] = useState(5);
  const nextLevelXp = 2000;

  // Effects
  const lastHoverTime = useRef(0);

  const [activeEffects, setActiveEffects] = useState({
    levelup: false,
    confetti: false
  });

  const triggerEffect = (effect: keyof typeof activeEffects) => {
    setActiveEffects(prev => ({ ...prev, [effect]: true }));
    setTimeout(() => {
      setActiveEffects(prev => ({ ...prev, [effect]: false }));
    }, 3000);
  };

  const addXp = (amount: number) => {
    setXp(prev => {
      const newXp = prev + amount;
      if (newXp >= nextLevelXp) {
        triggerEffect('levelup');
        triggerEffect('confetti');
        setLevel(l => l + 1);
        return newXp - nextLevelXp;
      }
      return newXp;
    });
  };

  const handleHobbyUnlock = (hobbyId: string) => {
    if (!unlockedHobbies.has(hobbyId)) {
      setUnlockedHobbies(prev => new Set([...prev, hobbyId]));
      addXp(250);
    }
  };

  const toggleLike = (hobbyId: string) => {
    setLikedHobbies(prev => {
      const newSet = new Set(prev);
      if (newSet.has(hobbyId)) {
        newSet.delete(hobbyId);
      } else {
        newSet.add(hobbyId);
        addXp(500);
      }
      return newSet;
    });
  };

  const getHobbyIcon = (hobbyId: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      travelling: <Plane className="w-6 h-6" />,
      cooking: <Utensils className="w-6 h-6" />,
      'cuisine-exploration': <Utensils className="w-6 h-6" />,
      biking: <Bike className="w-6 h-6" />,
      hiking: <Mountain className="w-6 h-6" />,
      music: <Music className="w-6 h-6" />,
      'tv-movies': <Tv className="w-6 h-6" />,
      automotive: <Wrench className="w-6 h-6" />
    };
    return icons[hobbyId] || <Gamepad2 className="w-6 h-6" />;
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Personal Quests | Ajith Srikanth Hobbies</title>
        <meta name="description" content="Explore the personal interests and 'quests' of Ajith Srikanth: from automotive engineering and biking to music and culinary exploration." />
      </Helmet>
      <div
        onContextMenu={(e) => e.preventDefault()}
        className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/10 dark:to-slate-900 p-4 pb-32"
      >

        {/* Background Ambience */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <XPBar xp={xp} level={level} nextLevelXp={nextLevelXp} />

        <AnimatePresence>
          {activeEffects.levelup && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.5, y: -100 }}
              className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-none"
            >
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-1 rounded-3xl shadow-2xl skew-y-3">
                <div className="bg-slate-900 text-white px-12 py-6 rounded-2xl border-4 border-yellow-300 text-center">
                  <Trophy className="w-16 h-16 text-yellow-300 mx-auto mb-2 animate-bounce" />
                  <h2 className="text-4xl font-black italic uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-orange-400 drop-shadow-sm">Level Up!</h2>
                  <p className="text-xl font-bold mt-2 text-yellow-100">You reached Level {level}!</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-7xl mx-auto relative z-10 pt-16">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-6 tracking-tighter">
              Personal Quests
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
              The journey doesn't end at the office.
              <span className="text-indigo-500 font-bold ml-1">Play the terminal below to unlock my interests.</span>
            </p>
          </motion.div>

          {/* Playable Game Section */}
          <div className="mb-24 flex justify-center">
            <div className="w-full max-w-4xl px-4">
              <HobbyGame
                hobbies={hobbies.map(h => ({ id: h.id, emoji: h.emoji }))}
                onHobbyUnlock={handleHobbyUnlock}
              />
            </div>
          </div>

          {/* Hobbies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
            {hobbies.map((hobby) => (
              <div key={hobby.id} className="h-[400px]">
                <GamifiedCard
                  hobby={hobby}
                  isLocked={!unlockedHobbies.has(hobby.id)}
                  onClick={() => {
                    setSelectedHobby(hobby);
                    addXp(100);
                  }}
                  onHover={() => {
                    const now = Date.now();
                    // Throttle XP updates to once per 100ms prevents render spam
                    if (now - lastHoverTime.current > 100) {
                      addXp(1);
                      lastHoverTime.current = now;
                    }
                  }}
                  isLiked={likedHobbies.has(hobby.id)}
                  toggleLike={(e) => {
                    e.stopPropagation();
                    toggleLike(hobby.id);
                  }}
                  getIcon={getHobbyIcon}
                />
              </div>
            ))}
          </div>

          {/* Modal */}
          <AnimatePresence>
            {selectedHobby && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedHobby(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, y: 50 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 50 }}
                  className="bg-white dark:bg-slate-900 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative">
                    <div className={`h-64 bg-gradient-to-r ${selectedHobby.color} relative overflow-hidden`}>
                      <div className="absolute top-4 right-4 z-20">
                        <button onClick={() => setSelectedHobby(null)} className="p-2 bg-black/20 hover:bg-black/40 rounded-full text-white backdrop-blur-md">
                          <Cpu className="w-6 h-6" />
                        </button>
                      </div>
                      <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                      <div className="absolute bottom-8 left-8 flex items-end gap-6">
                        <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl">
                          {getHobbyIcon(selectedHobby.id)}
                        </div>
                        <div className="text-white drop-shadow-lg p-2">
                          <h2 className="text-6xl font-black italic tracking-tighter uppercase mb-2">{selectedHobby.name}</h2>
                          <div className="flex items-center gap-3">
                            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{selectedHobby.emoji} Mission Complete</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-12">
                      <div className="grid md:grid-cols-2 gap-16">
                        <div className="space-y-12">
                          <section>
                            <div className="flex items-center gap-2 mb-6 text-indigo-500">
                              <Target className="w-6 h-6" />
                              <h3 className="text-xs font-black uppercase tracking-[0.3em]">The Objective</h3>
                            </div>
                            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light font-serif">
                              {selectedHobby.description}
                            </p>
                          </section>

                          <section>
                            <div className="flex items-center gap-2 mb-6 text-indigo-500">
                              <Camera className="w-6 h-6" />
                              <h3 className="text-xs font-black uppercase tracking-[0.3em]">Evidence Log</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {selectedHobby.media.map((m, i) => (
                                <div key={i} className="group relative aspect-video bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg">
                                  {m.type === 'image' ? (
                                    <img
                                      src={m.src}
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                      alt={m.alt}
                                      draggable="false"
                                      onContextMenu={(e) => e.preventDefault()}
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800'; // Generic placeholder
                                      }}
                                    />
                                  ) : (
                                    <video
                                      src={m.src}
                                      controls
                                      controlsList="nodownload noremoteplayback"
                                      preload="metadata"
                                      className="w-full h-full object-cover"
                                      poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800"
                                      onContextMenu={(e) => e.preventDefault()}
                                    >
                                      Your browser does not support the video tag.
                                    </video>
                                  )}
                                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-white text-[10px] uppercase font-bold tracking-widest">{m.alt}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </section>
                        </div>

                        <div className="space-y-8">
                          <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                            <h3 className="font-black text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-8">Achievements Unlocked</h3>
                            <div className="space-y-6">
                              {selectedHobby.highlights.map((h, i) => (
                                <div key={i} className="flex gap-4">
                                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                                    <Star className="w-4 h-4 text-amber-500" />
                                  </div>
                                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-tight">{h}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="p-8 rounded-3xl bg-indigo-500/5 border border-indigo-500/10">
                            <span className="text-indigo-500 font-black text-[10px] uppercase tracking-[0.2em] block mb-2">Secret Intel</span>
                            <p className="text-indigo-600 dark:text-indigo-300 italic">"{selectedHobby.funFact}"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </PageTransition>
  );
};

export default Hobbies;
