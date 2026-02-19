import React, { createContext, useContext, useEffect, useState } from 'react';
import { getInitialTheme, setTheme as applyTheme, watchSystemTheme, Theme } from '../utils/themeUtils';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme());

  useEffect(() => {
    // Initial apply
    applyTheme(theme);

    // Watch for system changes
    const unwatch = watchSystemTheme((newTheme) => {
      if (!localStorage.getItem('theme')) {
        setThemeState(newTheme);
        applyTheme(newTheme);
      }
    });

    return unwatch;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setThemeState(newTheme);
    applyTheme(newTheme);
  };

  const isDark = theme === 'dark';

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
