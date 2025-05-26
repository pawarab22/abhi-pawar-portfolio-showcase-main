
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Contact from '../components/Contact';
import { ThemeProvider } from '../contexts/ThemeContext';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Services />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
