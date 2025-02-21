import React from 'react';
import { Code2, Database, LineChart, Lightbulb, Server, Users } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Quantum Algorithm Development",
      description: "Custom quantum algorithms designed for your specific computational challenges, optimized for current and future quantum hardware."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Quantum Simulation Platform",
      description: "Access our state-of-the-art quantum simulation platform to test and validate quantum algorithms before deployment."
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Performance Analysis",
      description: "Comprehensive analysis and optimization of quantum algorithms, ensuring maximum efficiency and reliability."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consulting Services",
      description: "Expert guidance on quantum computing strategy, implementation, and integration with existing systems."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Infrastructure Solutions",
      description: "Quantum-ready infrastructure design and implementation services for forward-thinking organizations."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Research Partnerships",
      description: "Collaborative research opportunities with our team of quantum computing experts and scientists."
    }
  ];

  return (
    <div className="bg-gray-900 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Quantum Computing Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Leveraging cutting-edge quantum technology to solve complex computational challenges and drive innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;