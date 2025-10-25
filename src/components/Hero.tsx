
import React from 'react';
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Enhanced background with multiple gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-purple-50 to-blue-50"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/30 via-transparent to-purple-100/30"></div>
      
      {/* Modern geometric shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl opacity-20 animate-pulse rotate-12 blur-sm"></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-20 animate-pulse delay-500 rotate-45"></div>
      <div className="absolute top-32 left-1/4 w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-15 animate-pulse delay-700"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-orange-300 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-blue-300 rounded-full animate-bounce delay-700"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            {/* Enhanced badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-orange-200 text-orange-600 text-sm font-medium shadow-lg">
              <Sparkles size={16} className="text-orange-500" />
              <span>Available for opportunities</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-900 mb-2">Hello, I'm</span>
                <span className="block bg-gradient-to-r from-orange-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Sakshi Patil
                </span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl sm:text-2xl text-gray-700 font-semibold">
                  Aspiring Web Developer | Python Enthusiast
                </p>
                <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                  Welcome to my portfolio! I'm passionate about building responsive web solutions and exploring programming technologies.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-orange-500/25 flex items-center justify-center gap-2"
              >
                <span>View My Work</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-orange-500 text-orange-600 rounded-2xl font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Get In Touch
              </button>
            </div>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">2026</div>
                <div className="text-sm text-gray-600">Graduate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">6+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600">Skills</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-fade-in delay-300">
            <div className="relative">
              {/* Enhanced profile picture container */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 via-purple-500 to-blue-500 rounded-full opacity-20 animate-pulse blur-lg"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full opacity-30 animate-pulse delay-500"></div>
              
              <div className="relative w-80 h-80 bg-gradient-to-br from-white to-gray-50 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src="/sakshi-uploads/cartoon girl.jpg" 
                  alt="Sakshi Patil"
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-purple-500/5 to-transparent"></div>
                
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-orange-300 to-purple-300 opacity-50"></div>
              </div>
              
              {/* Floating elements around profile */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg animate-bounce delay-300">
                👋
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg animate-bounce delay-700">
                💻
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
        <button
          onClick={() => scrollToSection('about')}
          className="text-gray-600 hover:text-orange-500 transition-colors duration-300 animate-bounce p-2 rounded-full hover:bg-white/50 backdrop-blur-sm"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
