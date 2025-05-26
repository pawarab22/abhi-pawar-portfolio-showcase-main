
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A dedicated full-stack developer with a passion for creating innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Personal Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Born and raised in Kaneri, Kolhapur, I've always been fascinated by technology and its potential 
              to solve real-world problems. My educational journey includes an MCA in 2023 from Bharati Vidyapeeth 
              and a BSc in 2021 from Shivaji University, building a strong foundation in computer science.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Beyond coding, I'm passionate about traveling, bike riding, and reading spiritual books, 
              which help me maintain a balanced perspective and approach challenges with clarity and adaptability.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h3>
            <div className="space-y-4">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="text-lg font-semibold text-primary mb-2">Junior Software Engineer</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Compserv Systems Pvt Ltd.</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Specialized in banking software development, API integration, and scalable web applications
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="text-lg font-semibold text-primary mb-2">Developer Trainee</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Igaps Technology</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Gained foundational experience in full-stack development and modern web technologies
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">FE</span>
              </div>
              <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Frontend</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Angular, React, TypeScript, HTML5, CSS3</p>
            </div>

            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">BE</span>
              </div>
              <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Backend</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Node.js, NestJS, Express, REST APIs</p>
            </div>

            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">DB</span>
              </div>
              <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Database</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">PostgreSQL, MongoDB, Oracle, TypeORM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
