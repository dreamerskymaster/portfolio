/**
 * Defines the available color themes for the application.
 */
export type Theme = 'light' | 'dark';

/**
 * Retrieves the initial theme preference.
 * Priority: LocalStorage > System Preference > Default ('light').
 * @returns {Theme} The determined initial theme.
 */
export function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  
  const savedTheme = localStorage.getItem('theme') as Theme;
  if (savedTheme) return savedTheme;
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Sets the active theme by updating the DOM and LocalStorage.
 * @param {Theme} theme - The theme to set ('light' or 'dark').
 */
export function setTheme(theme: Theme): void {
  if (typeof window === 'undefined') return;
  
  const root = document.documentElement;
  
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  
  localStorage.setItem('theme', theme);
}

/**
 * Toggles the current theme between 'light' and 'dark'.
 * @returns {Theme} The new active theme.
 */
export function toggleTheme(): Theme {
  const currentTheme = getInitialTheme();
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  return newTheme;
}

/**
 * Subscribes to system color scheme changes.
 * @param {function} callback - Function to call when system preference changes.
 * @returns {function} Cleanup function to remove the event listener.
 */
export function watchSystemTheme(callback: (theme: Theme) => void): () => void {
  if (typeof window === 'undefined') return () => {};
  
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  const handleChange = (e: MediaQueryListEvent) => {
    const theme = e.matches ? 'dark' : 'light';
    callback(theme);
  };
  
  mediaQuery.addEventListener('change', handleChange);
  
  return () => mediaQuery.removeEventListener('change', handleChange);
}

/**
 * Initializes the theme system on application load.
 */
export function initializeTheme(): void {
  const theme = getInitialTheme();
  setTheme(theme);
}


