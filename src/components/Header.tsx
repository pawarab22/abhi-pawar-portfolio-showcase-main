
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const { mode, colorTheme, toggleMode, setColorTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            A<sup>b</sup>h<sub>i</sub>s<sup>h</sup>e<sub>k</sub> P<sup>a</sup>w<sup>a</sup>r
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('portfolio')} className="nav-link">Portfolio</button>
            <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </div>

          {/* Theme Controls */}
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <button
                onClick={() => setColorTheme('blue')}
                className={`w-6 h-6 rounded-full bg-blue-500 border-2 ${colorTheme === 'blue' ? 'border-gray-800 dark:border-white' : 'border-gray-300'}`}
              />
              <button
                onClick={() => setColorTheme('green')}
                className={`w-6 h-6 rounded-full bg-green-500 border-2 ${colorTheme === 'green' ? 'border-gray-800 dark:border-white' : 'border-gray-300'}`}
              />
            </div>
            
            <button
              onClick={toggleMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {mode === 'light' ? '🌙' : '☀️'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`h-0.5 bg-gray-600 dark:bg-gray-300 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <div className={`h-0.5 bg-gray-600 dark:bg-gray-300 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`h-0.5 bg-gray-600 dark:bg-gray-300 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="nav-link text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="nav-link text-left">About</button>
              <button onClick={() => scrollToSection('portfolio')} className="nav-link text-left">Portfolio</button>
              <button onClick={() => scrollToSection('services')} className="nav-link text-left">Services</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link text-left">Contact</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
