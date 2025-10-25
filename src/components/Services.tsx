
import React from 'react';
import { Globe, Smartphone, Palette, Code, Zap, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Building responsive, user-friendly websites tailored to client needs using modern technologies and best practices.',
      features: ['Responsive Design', 'Modern Frameworks', 'SEO Optimized', 'Fast Loading'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
    },
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Creating beautiful and interactive user interfaces with clean, maintainable code and smooth user experiences.',
      features: ['React/JavaScript', 'Modern CSS', 'UI/UX Focus', 'Cross-Browser'],
      color: 'from-purple-500 to-blue-500',
      bgColor: 'from-purple-50 to-blue-50',
    },
    {
      icon: Zap,
      title: 'Python Development',
      description: 'Developing Python applications for web development, data analysis, and automation solutions.',
      features: ['Web Applications', 'Data Analysis', 'Automation', 'Problem Solving'],
      color: 'from-blue-500 to-green-500',
      bgColor: 'from-blue-50 to-green-50',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Expertise Service! Let's check it out
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="group">
              <div className={`bg-gradient-to-br ${service.bgColor} p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full flex flex-col`}>
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                </div>
                
                <div className="flex-grow">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
