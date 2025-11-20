import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Target
} from 'lucide-react';
import { hobbies, Hobby } from '../data/hobbies';

const Hobbies: React.FC = () => {
  const [selectedHobby, setSelectedHobby] = useState<Hobby | null>(null);
  const [likedHobbies, setLikedHobbies] = useState<Set<string>>(new Set());
  const [easterEggs, setEasterEggs] = useState({
    sparkles: false,
    rainbow: false,
    confetti: false
  });

  // Easter egg triggers
  const triggerEasterEgg = (type: keyof typeof easterEggs) => {
    setEasterEggs(prev => ({ ...prev, [type]: true }));
    setTimeout(() => {
      setEasterEggs(prev => ({ ...prev, [type]: false }));
    }, 3000);
  };

  const toggleLike = (hobbyId: string) => {
    setLikedHobbies(prev => {
      const newSet = new Set(prev);
      if (newSet.has(hobbyId)) {
        newSet.delete(hobbyId);
      } else {
        newSet.add(hobbyId);
        triggerEasterEgg('sparkles');
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
      'tv-movies': <Tv className="w-6 h-6" />
    };
    return icons[hobbyId] || <Star className="w-6 h-6" />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const mediaVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-4">
      {/* Easter Eggs */}
      <AnimatePresence>
        {easterEggs.sparkles && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-50"
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: 0,
                  rotate: 0
                }}
                animate={{
                  scale: [0, 1, 0],
                  rotate: 360,
                  y: Math.random() * window.innerHeight - 100
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
                className="absolute text-yellow-400 text-2xl"
              >
                ✨
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Personal Interests
            </motion.h1>
            <motion.p
              className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6"
              variants={itemVariants}
            >
              Beyond my professional work, I believe in maintaining a well-rounded lifestyle.
              These personal interests help me stay creative, maintain work-life balance, and
              bring fresh perspectives to my engineering solutions.
            </motion.p>

            <motion.div variants={itemVariants}>
              <a
                href="https://instagram.com/ajith_srikanth"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm text-slate-500 hover:text-pink-600 transition-colors duration-300"
              >
                <Camera className="w-4 h-4" />
                <span>@ajith_srikanth</span>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Hobbies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {hobbies.map((hobby) => (
            <motion.div
              key={hobby.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                y: -5
              }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedHobby(hobby)}
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                {/* Hobby Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${hobby.color} text-white shadow-lg`}>
                      {getHobbyIcon(hobby.id)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white">{hobby.name}</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">{hobby.emoji}</p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(hobby.id);
                    }}
                    className="text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${likedHobbies.has(hobby.id) ? 'fill-red-500 text-red-500' : ''}`}
                    />
                  </motion.button>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3 leading-relaxed">{hobby.description}</p>

                {/* Highlights */}
                <div className="space-y-2 mb-4">
                  {hobby.highlights.slice(0, 2).map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-amber-500" />
                      <span className="text-sm text-slate-600 dark:text-slate-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Fun Fact */}
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3 mb-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300 italic">
                    💡 {hobby.funFact}
                  </p>
                </div>

                {/* Media Preview */}
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {hobby.media.slice(0, 4).map((media, idx) => (
                    <div key={idx} className="flex-shrink-0">
                      {media.type === 'image' ? (
                        <img
                          src={media.src}
                          alt={media.alt}
                          className="w-16 h-16 rounded-lg object-cover shadow-md"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-lg bg-slate-200 dark:bg-slate-600 flex items-center justify-center shadow-md">
                          <Video className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                        </div>
                      )}
                    </div>
                  ))}
                  {hobby.media.length > 4 && (
                    <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-slate-200 dark:bg-slate-600 flex items-center justify-center shadow-md">
                      <span className="text-slate-600 dark:text-slate-300 text-sm font-medium">+{hobby.media.length - 4}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Selected Hobby Modal */}
        <AnimatePresence>
          {selectedHobby && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedHobby(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 dark:border-slate-700"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className={`p-4 rounded-full bg-gradient-to-r ${selectedHobby.color} text-white`}
                      whileHover={{ rotate: 360 }}
                    >
                      {getHobbyIcon(selectedHobby.id)}
                    </motion.div>
                    <div>
                      <h2 className="text-3xl font-bold text-slate-800 dark:text-white">{selectedHobby.name}</h2>
                      <p className="text-slate-600 dark:text-slate-300">{selectedHobby.emoji} {selectedHobby.description}</p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedHobby(null)}
                    className="text-slate-400 hover:text-slate-600 dark:hover:text-white text-2xl"
                  >
                    ×
                  </motion.button>
                </div>

                {/* Media Gallery */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                    <Camera className="w-6 h-6 mr-2" />
                    Media Gallery
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedHobby.media.map((media, idx) => (
                      <motion.div
                        key={idx}
                        variants={mediaVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05 }}
                        className="relative cursor-pointer"
                      >
                        {media.type === 'image' ? (
                          <img
                            src={media.src}
                            alt={media.alt}
                            className="w-full h-32 object-cover rounded-lg shadow-md"
                          />
                        ) : (
                          <div className="w-full h-32 bg-slate-200 dark:bg-slate-600 rounded-lg flex items-center justify-center shadow-md">
                            <Video className="w-8 h-8 text-slate-600 dark:text-slate-300" />
                          </div>
                        )}
                        <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {media.type === 'image' ? '📷' : '🎥'}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                    <Target className="w-6 h-6 mr-2" />
                    Highlights
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedHobby.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg"
                      >
                        <Star className="w-5 h-5 text-amber-500" />
                        <span className="text-slate-600 dark:text-slate-300">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Fun Fact */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4"
                >
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Fun Fact
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 italic">{selectedHobby.funFact}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-2xl mx-auto shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Interested in learning more about my personal interests?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              I believe that diverse personal interests contribute to professional growth and innovation.
              Let's connect and discuss how these experiences can bring value to your organization!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              onClick={() => triggerEasterEgg('confetti')}
            >
              <Zap className="w-5 h-5 inline mr-2" />
              Let's Connect!
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hobbies;
