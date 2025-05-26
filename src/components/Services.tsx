
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Full-Stack Development",
      description: "End-to-end web application development using MEAN and MERN stacks with modern best practices.",
      icon: "💻",
      features: ["Angular & React", "Node.js & Express", "Responsive Design", "Performance Optimization"]
    },
    {
      title: "API Integration & Development",
      description: "Custom REST API development and third-party service integration for seamless connectivity.",
      icon: "🔗",
      features: ["RESTful APIs", "Third-party Integration", "Authentication", "Data Validation"]
    },
    {
      title: "Database Design & Management",
      description: "Efficient database architecture and management for optimal performance and scalability.",
      icon: "🗄️",
      features: ["PostgreSQL", "MongoDB", "Oracle", "TypeORM"]
    },
    {
      title: "Deployment & DevOps",
      description: "Application deployment and basic containerization support for production environments.",
      icon: "🚀",
      features: ["Docker Basics", "Server Deployment", "Server Support", "Performance Monitoring"]
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Delivering scalable solutions and ready to take on new challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="text-6xl mb-6">{service.icon}</div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="text-sm text-primary font-medium"
                  >
                    ✓ {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-primary to-primary-foreground rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready for New Challenges</h3>
            <p className="text-lg opacity-90 max-w-2xl">
              I'm passionate about delivering scalable solutions and am always ready to tackle 
              new challenges with adaptability and strong communication skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
