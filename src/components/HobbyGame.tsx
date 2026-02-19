import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Trophy, RotateCcw, Play, Pause, Keyboard, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

interface Point {
  x: number;
  y: number;
}

interface HobbyIcon {
  id: string;
  emoji: string;
  point: Point;
}

interface HobbyGameProps {
  hobbies: { id: string; emoji: string }[];
  onHobbyUnlock: (id: string) => void;
}

const GRID_SIZE = 20;
const INITIAL_SPEED = 150;
const SPEED_INCREMENT = 2;

const HobbyGame: React.FC<HobbyGameProps> = ({ hobbies, onHobbyUnlock }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<'IDLE' | 'PLAYING' | 'GAMEOVER' | 'PAUSED'>('IDLE');
  const [snake, setSnake] = useState<Point[]>([{ x: 10, y: 10 }]);
  const [direction, setDirection] = useState<Point>({ x: 1, y: 0 });
  const [food, setFood] = useState<HobbyIcon | null>(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [speed, setSpeed] = useState(INITIAL_SPEED);

  const lastDirectionRef = useRef<Point>({ x: 1, y: 0 });

  const handleDirectionChange = useCallback((newDir: Point) => {
    // Prevent 180-degree turns
    if (newDir.x !== -lastDirectionRef.current.x && newDir.y !== -lastDirectionRef.current.y) {
      setDirection(newDir);
    }
  }, []);

  // Generate random food
  const generateFood = useCallback((currentSnake: Point[]) => {
    if (!hobbies || hobbies.length === 0) return;

    const randomHobby = hobbies[Math.floor(Math.random() * hobbies.length)];
    let newFood: Point;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE)
      };
      // Don't spawn on snake
      if (!currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y)) {
        break;
      }
    }
    setFood({ ...randomHobby, point: newFood });
  }, [hobbies]);

  // Reset Game
  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setDirection({ x: 1, y: 0 });
    lastDirectionRef.current = { x: 1, y: 0 };
    setScore(0);
    setSpeed(INITIAL_SPEED);
    setGameState('PLAYING');
    generateFood([{ x: 10, y: 10 }]);
  };

  // Keyboard Controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameState !== 'PLAYING') return;

      const keys: Record<string, Point> = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
        w: { x: 0, y: -1 },
        s: { x: 0, y: 1 },
        a: { x: -1, y: 0 },
        d: { x: 1, y: 0 }
      };


      if (keys[e.key]) {
        e.preventDefault(); // Prevent page scrolling
        handleDirectionChange(keys[e.key]);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameState]);

  // Main Game Loop
  useEffect(() => {
    if (gameState !== 'PLAYING') return;

    const moveSnake = () => {
      setSnake(prevSnake => {
        const head = prevSnake[0];
        const newHead = {
          x: (head.x + direction.x + GRID_SIZE) % GRID_SIZE,
          y: (head.y + direction.y + GRID_SIZE) % GRID_SIZE
        };

        lastDirectionRef.current = direction;

        // Check Collision with self
        if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameState('GAMEOVER');
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Check Food
        if (food && newHead.x === food.point.x && newHead.y === food.point.y) {
          setScore(s => {
            const newScore = s + 10;
            if (newScore > highScore) setHighScore(newScore);
            return newScore;
          });
          setSpeed(s => Math.max(50, s - SPEED_INCREMENT));
          onHobbyUnlock(food.id);
          generateFood(newSnake);
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    };

    const intervalId = setInterval(moveSnake, speed);
    return () => clearInterval(intervalId);
  }, [gameState, direction, food, speed, generateFood, onHobbyUnlock, highScore]);

  // Render
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = canvas.width / GRID_SIZE;

    // Clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Board (Subtle grid)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath();
      ctx.moveTo(i * size, 0);
      ctx.lineTo(i * size, canvas.height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * size);
      ctx.lineTo(canvas.width, i * size);
      ctx.stroke();
    }

    // Draw Snake
    snake.forEach((segment, i) => {
      const gradient = ctx.createLinearGradient(
        segment.x * size,
        segment.y * size,
        (segment.x + 1) * size,
        (segment.y + 1) * size
      );

      if (i === 0) {
        gradient.addColorStop(0, '#6366f1');
        gradient.addColorStop(1, '#a855f7');
      } else {
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0.6)');
        gradient.addColorStop(1, 'rgba(168, 85, 247, 0.4)');
      }

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.roundRect(segment.x * size + 1, segment.y * size + 1, size - 2, size - 2, 4);
      ctx.fill();

      // Eye for head
      if (i === 0) {
        ctx.fillStyle = 'white';
        // Simple dot for eye based on direction
        const eyeX = segment.x * size + size / 2 + lastDirectionRef.current.x * 4;
        const eyeY = segment.y * size + size / 2 + lastDirectionRef.current.y * 4;
        ctx.beginPath();
        ctx.arc(eyeX, eyeY, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Draw Food
    if (food) {
      ctx.font = `${size * 0.8}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(
        food.emoji,
        food.point.x * size + size / 2,
        food.point.y * size + size / 2
      );
    }
  }, [snake, food]);

  return (
    <div className="w-full max-w-2xl mx-auto mb-16">
      <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl border-4 border-slate-800 relative overflow-hidden group">

        {/* Backdrop Glow */}
        <div className="absolute -inset-24 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors pointer-events-none"></div>

        {/* Header Stats */}
        <div className="flex justify-between items-center mb-4 relative z-10">
          <div className="flex items-center gap-4">
            <div className="bg-slate-800 px-4 py-2 rounded-xl flex items-center gap-2 border border-slate-700">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span className="font-mono text-white">{score.toString().padStart(4, '0')}</span>
            </div>
            <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">
              Best: {highScore.toString().padStart(4, '0')}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setGameState(s => s === 'PLAYING' ? 'PAUSED' : 'PLAYING')}
              disabled={gameState === 'IDLE' || gameState === 'GAMEOVER'}
              className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 disabled:opacity-30"
            >
              {gameState === 'PAUSED' ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
            </button>
            <button
              onClick={resetGame}
              className="p-2 hover:bg-slate-800 rounded-lg text-slate-400"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Game Area */}
        <div className="relative aspect-square bg-slate-950 rounded-2xl overflow-hidden border-2 border-slate-800/50">
          <canvas
            ref={canvasRef}
            width={500}
            height={500}
            className="w-full h-full"
          />

          {/* Overlays */}
          <AnimatePresence>
            {gameState === 'IDLE' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center"
              >
                <div className="bg-indigo-500 p-4 rounded-3xl mb-6 shadow-lg shadow-indigo-500/50">
                  <Gamepad2 className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-black text-white mb-2 italic">HOBBY SNAKE</h3>
                <p className="text-slate-400 mb-8 max-w-xs">
                  Collect items to grow your journey and unlock hobby details below!
                </p>
                <div className="flex flex-col gap-4 w-full max-w-[200px]">
                  <button
                    onClick={resetGame}
                    className="w-full bg-white text-slate-900 font-bold py-4 rounded-2xl hover:scale-105 transition-transform active:scale-95"
                  >
                    START QUEST
                  </button>
                  <div className="flex items-center justify-center gap-3 text-slate-500 text-xs font-bold uppercase tracking-widest">
                    <Keyboard className="w-4 h-4" />
                    WASD or Arrows
                  </div>
                </div>
              </motion.div>
            )}

            {gameState === 'GAMEOVER' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-rose-950/80 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center border-4 border-rose-500/20 rounded-2xl"
              >
                <h3 className="text-5xl font-black text-white mb-2 tracking-tighter italic">GAME OVER</h3>
                <p className="text-rose-200 mb-6 font-bold uppercase tracking-widest">Score: {score}</p>
                <button
                  onClick={resetGame}
                  className="bg-white text-rose-950 px-12 py-4 rounded-2xl font-black hover:scale-105 transition-transform"
                >
                  TRY AGAIN
                </button>
              </motion.div>
            )}

            {gameState === 'PAUSED' && (
              <motion.div
                className="absolute inset-0 bg-black/40 flex items-center justify-center"
              >
                <p className="text-white text-4xl font-black italic tracking-widest">PAUSED</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Controls Footer (Mobile Only) */}
        <div className="grid grid-cols-3 gap-2 mt-6 md:hidden">
          <div></div>
          <button onClick={() => gameState === 'PLAYING' && handleDirectionChange({ x: 0, y: -1 })} className="aspect-square bg-slate-800 rounded-xl flex items-center justify-center text-white active:bg-slate-700 transition-colors" aria-label="Up"><ArrowUp className="w-8 h-8" /></button>
          <div></div>
          <button onClick={() => gameState === 'PLAYING' && handleDirectionChange({ x: -1, y: 0 })} className="aspect-square bg-slate-800 rounded-xl flex items-center justify-center text-white active:bg-slate-700 transition-colors" aria-label="Left"><ArrowLeft className="w-8 h-8" /></button>
          <button onClick={() => gameState === 'PLAYING' && handleDirectionChange({ x: 0, y: 1 })} className="aspect-square bg-slate-800 rounded-xl flex items-center justify-center text-white active:bg-slate-700 transition-colors" aria-label="Down"><ArrowDown className="w-8 h-8" /></button>
          <button onClick={() => gameState === 'PLAYING' && handleDirectionChange({ x: 1, y: 0 })} className="aspect-square bg-slate-800 rounded-xl flex items-center justify-center text-white active:bg-slate-700 transition-colors" aria-label="Right"><ArrowRight className="w-8 h-8" /></button>
        </div>

      </div>
    </div>
  );
};

export default HobbyGame;
