
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeMode = 'light' | 'dark';
type ColorTheme = 'blue' | 'green';

interface ThemeContextType {
  mode: ThemeMode;
  colorTheme: ColorTheme;
  toggleMode: () => void;
  setColorTheme: (theme: ColorTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('light');
  const [colorTheme, setColorTheme] = useState<ColorTheme>('blue');

  const toggleMode = () => {
    setMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const root = document.documentElement;
    
    // Apply theme mode
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Apply color theme
    root.classList.remove('theme-blue', 'theme-green');
    root.classList.add(`theme-${colorTheme}`);
  }, [mode, colorTheme]);

  return (
    <ThemeContext.Provider value={{ mode, colorTheme, toggleMode, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
