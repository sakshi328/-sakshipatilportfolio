
import React from 'react';
import { ExternalLink, Code, Shield, Globe, Cloud } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Tic Tac Toe Game',
      description: 'An interactive Tic Tac Toe game built with clean programming logic. Features include player vs player mode, win detection, and a responsive design.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      icon: Code,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      demoUrl: 'https://github.com/sakshi328/Tic-Tac-Toe-Game.git',
    },
    {
      title: 'Password Generator',
      description: 'A secure password generator tool built with Python that creates strong, random passwords with customizable length and character sets.',
      tech: ['Python', 'Tkinter', 'Random'],
      icon: Shield,
      color: 'from-purple-500 to-blue-500',
      bgColor: 'from-purple-50 to-blue-50',
      demoUrl: 'https://github.com/sakshi328/Password_Generator.git',
    },
    {
      title: 'Weather Application',
      description: 'A dynamic weather application that provides real-time weather information for any location. Features include current weather conditions, forecasts, and an intuitive user interface.',
      tech: ['React', 'JavaScript', 'Weather API'],
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      demoUrl: 'https://github.com/sakshi328/weather-.git',
    },
    {
      title: 'Portfolio Website',
      description: 'This responsive portfolio website showcasing my skills and projects. Built with modern web technologies and featuring smooth animations.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      icon: Globe,
      color: 'from-blue-500 to-green-500',
      bgColor: 'from-blue-50 to-green-50',
    },
    {
      title: 'File Organizer',
      description: 'A file organizer website built with Python, Flask, HTML, CSS, and JavaScript that automatically categorizes uploaded files into organized folders based on their type or extension.',
      tech: ['python', 'Flask', 'html','css','javascript'],
      icon: Globe,
      color: 'from-blue-500 to-green-500',
      bgColor: 'from-blue-50 to-green-50',
      demoUrl:'https://github.com/sakshi328/File-Organizer',
    },
      {
      title: 'News Portal',
      description: 'NewsHub is a modern, responsive news website with search functionality, category filtering, and a clean gri',
      tech: ['react','html','css','javascript','Tailwind'],
      icon: Globe,
      color: 'from-blue-500 to-green-500',
      bgColor: 'from-blue-50 to-green-50',
      demoUrl:'https://github.com/sakshi328/News-Portal-Website',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Portfolio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="group">
              <div className={`bg-gradient-to-br ${project.bgColor} p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full flex flex-col`}>
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-white/50 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <button 
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                    onClick={() => {
                      if (project.demoUrl) {
                        window.open(project.demoUrl, '_blank');
                      }
                    }}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </button>
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
