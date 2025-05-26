
import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "Core Banking System (CBS)",
      description: "A comprehensive banking solution with role-based dashboards, UPI transactions, and ATM management. Significantly improved onboarding efficiency and user experience.",
      tech: "Angular • Node.js • NestJS • PostgreSQL",
      features: ["Role-based Dashboard", "UPI Transactions", "ATM Management", "Security Features"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      impact: "Improved onboarding efficiency by 40%"
    },
    {
      title: "E-Commerce Storefronts",
      description: "Modern e-commerce platforms built with MERN stack featuring shopping cart, product listings, and optimized checkout process with enhanced performance.",
      tech: "MongoDB • Express.js • React • Node.js",
      features: ["Shopping Cart", "Product Catalog", "Secure Checkout", "Performance Optimization"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      impact: "Delivered scalable solutions for multiple clients"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions and technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <span className="text-sm font-semibold text-primary mb-2 block">Tech Stack:</span>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{project.tech}</p>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm font-semibold text-primary mb-2 block">Key Features:</span>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-sm font-semibold text-primary">Impact: </span>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">{project.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
