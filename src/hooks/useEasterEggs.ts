import { useState, useEffect, useCallback } from 'react';

// Konami Code sequence: Up, Up, Down, Down, Left, Right, Left, Right, B, A
const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

export const useEasterEggs = () => {
  const [isBlueprintMode, setIsBlueprintMode] = useState(false);
  const [isKonamiUnlocked, setIsKonamiUnlocked] = useState(false);
  const [systemStatusTaps, setSystemStatusTaps] = useState(0);
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [showNyanCat, setShowNyanCat] = useState(false);

  // Logo Tap Handler
  const handleLogoTap = useCallback(() => {
    setSystemStatusTaps((prev) => prev + 1);
  }, []);

  // Keyboard Event Listener
  useEffect(() => {
    let konamiIdx = 0;
    const pressedKeys = new Set<string>();
    let keyBuffer = '';

    const handleKeyDown = (e: KeyboardEvent) => {
      // 1. Konami Code Logic
      if (e.key === KONAMI_CODE[konamiIdx] || e.key.toLowerCase() === KONAMI_CODE[konamiIdx].toLowerCase()) {
        konamiIdx++;
        if (konamiIdx === KONAMI_CODE.length) {
          setIsKonamiUnlocked(true);
          konamiIdx = 0; // Reset after unlock
          console.log("Konami Code Unlocked! 🎮");
        }
      } else {
        konamiIdx = 0; // Reset sequence on wrong key
      }

      // 2. Blueprint Mode Combo (B + P)
      const key = e.key.toLowerCase();
      pressedKeys.add(key);

      if (pressedKeys.has('b') && pressedKeys.has('p')) {
        setIsBlueprintMode(prev => !prev);
        // Prevent repeating while held: remove one key so it must be released and repressed
        pressedKeys.delete('b'); 
      }

      // 3. Keyword Listeners
      if (e.key.length === 1) { // Only printable chars
        keyBuffer += key;
        if (keyBuffer.length > 20) keyBuffer = keyBuffer.slice(-20);

        if (keyBuffer.endsWith('matrix')) {
            setIsMatrixMode(prev => !prev);
            keyBuffer = '';
            console.log("Matrix Mode toggled");
        }
        if (keyBuffer.endsWith('roll')) {
            setIsRolling(true);
            setTimeout(() => setIsRolling(false), 2000);
            keyBuffer = '';
        }
        if (keyBuffer.endsWith('nyan')) {
            setShowNyanCat(true);
            setTimeout(() => setShowNyanCat(false), 5000);
            keyBuffer = '';
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      pressedKeys.delete(e.key.toLowerCase());
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []); // Empty deps because we use refs/local vars for tracking sequence

  return {
    isBlueprintMode,
    isKonamiUnlocked,
    systemStatusTaps,
    isMatrixMode,
    isRolling,
    showNyanCat,
    handleLogoTap,
    resetSystemStatus: () => setSystemStatusTaps(0)
  };
};
