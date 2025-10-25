
import React from 'react';
import { Download, GraduationCap, Code, Lightbulb } from 'lucide-react';

const About = () => {
  const handleDownloadCV = () => {
    // Open resume in a new window for printing/saving
    const resumeWindow = window.open('/resume', '_blank');
    if (resumeWindow) {
      resumeWindow.addEventListener('load', () => {
        setTimeout(() => {
          resumeWindow.print();
        }, 500);
      });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Designing Solutions, Not Just Visuals
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I am Sakshi Patil, a 2026 graduate in Information Technology from Sant Gadge Baba Amaravati University. 
              With a strong foundation in programming and a keen interest in AI and web technologies, I am actively 
              seeking opportunities to grow and contribute to impactful projects.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              As a fresh graduate, I bring enthusiasm, dedication, and a strong willingness to learn. I believe in 
              creating solutions that not only look good but also solve real-world problems effectively.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                onClick={handleDownloadCV}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Download size={20} />
                Download CV
              </button>
              <a 
                href="https://www.linkedin.com/in/sakshi-patil-8ab18432b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-105"
              >
                View LinkedIn
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gradient-to-r from-orange-50 to-purple-50 p-6 rounded-lg border border-orange-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Education</h4>
                  <p className="text-gray-600">Bachelor of Engineering - IT</p>
                </div>
              </div>
              <p className="text-gray-700">Anuradha Engineering College, Chikhli (2026)</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Code className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Experience</h4>
                  <p className="text-gray-600">Fresher & Enthusiastic</p>
                </div>
              </div>
              <p className="text-gray-700">Ready to take on challenging projects and grow</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-lg border border-blue-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Passion</h4>
                  <p className="text-gray-600">AI & Web Development</p>
                </div>
              </div>
              <p className="text-gray-700">Exploring cutting-edge technologies and innovations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
