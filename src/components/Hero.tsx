
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary-foreground overflow-hidden shadow-2xl">
              <img 
                src="../Selfimg.jpg" 
                alt="Abhishek Rajendra Pawar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
            <span className="block">Abhishek</span>
            <span className="block text-primary">Rajendra Pawar</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
            Full-Stack Developer | MEAN & MERN Expert
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate developer specializing in scalable web applications 
            with expertise in PostgreSQL, TypeORM, and banking software development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={scrollToAbout}
              className="btn-primary text-lg px-8 py-4 rounded-full"
            >
              View Portfolio
            </button>
            <button 
              onClick={scrollToContact}
              className="btn-secondary text-lg px-8 py-4 rounded-full"
            >
              Contact Me
            </button>
          </div>

          <div className="animate-bounce">
            <button onClick={scrollToAbout} className="text-primary hover:text-primary-foreground transition-colors">
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
