
import React from 'react';
import { Download, Mail, Phone, MapPin, Github, Linkedin, Globe, Calendar, GraduationCap } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    // Create a printable version of the resume
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
      {/* Header */}
      <div className="text-center mb-8 border-b-2 border-gray-200 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Sakshi Patil</h1>
        <div className="flex flex-wrap justify-center items-center gap-4 text-gray-600">
          <div className="flex items-center gap-1">
            <Phone size={16} />
            <span>+91 9146181735</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail size={16} />
            <span>sakshiapatil09@gmail.com</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span>Chikhli, Maharashtra, 443201</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 mt-4">
          <a href="https://github.com/sakshi328" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-orange-500 hover:text-orange-600">
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/sakshi-patil-8ab18432b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-orange-500 hover:text-orange-600">
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
          <a href="#" className="flex items-center gap-1 text-orange-500 hover:text-orange-600">
            <Globe size={16} />
            <span>Portfolio</span>
          </a>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-orange-500 pl-4">SUMMARY</h2>
        <p className="text-gray-700 leading-relaxed">
          Highly motivated and eager fresher seeking entry-level opportunities to launch a successful career. 
          Equipped with a solid foundation in Information Technology and a passion for continuous learning. 
          Strong communication, analytical, and problem-solving skills. Adaptable team player with a positive 
          attitude and a drive for excellence. Ready to contribute and make a positive impact while acquiring 
          practical experience in a dynamic work environment.
        </p>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-orange-500 pl-4">SKILLS</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Technical Skills:</h3>
          <div className="flex flex-wrap gap-2">
            {['HTML', 'CSS', 'Python', 'Web Development', 'C++'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-orange-500 pl-4">PROJECTS</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">Weather Application</h3>
              <a href="https://github.com/sakshi328/weather-" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 text-sm flex items-center gap-1">
                <Github size={14} />
                GitHub Repo
              </a>
            </div>
            <p className="text-gray-700">
              Analyzed and visualized weather patterns using historical and real-time data. Developed interactive 
              dashboards to showcase temperature, humidity, and precipitation trends. Utilized APIs and data 
              visualization tools to provide insights into weather patterns.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">Password Generator</h3>
              <a href="https://github.com/sakshi328/Password_Generator" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 text-sm flex items-center gap-1">
                <Github size={14} />
                GitHub Repo
              </a>
            </div>
            <p className="text-gray-700">
              Developed a secure password generator tool that creates strong, unique passwords based on user-defined 
              criteria. Implemented features to enhance password security, including customizable length, character 
              types, and complexity.
            </p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-orange-500 pl-4">EDUCATION</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Bachelor Of Engineering (Information Technology)</h3>
              <p className="text-gray-700">Sant Gadge Baba Amaravati University</p>
              <p className="text-orange-600 font-medium">CGPA: 7.85</p>
            </div>
            <div className="text-right text-gray-600">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>2022 - 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Languages */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-orange-500 pl-4">LANGUAGES</h2>
        <div className="flex flex-wrap gap-2">
          {['English', 'Marathi', 'Hindi'].map((language) => (
            <span key={language} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              {language}
            </span>
          ))}
        </div>
      </div>

      {/* Download Button */}
      <div className="text-center pt-6 border-t border-gray-200">
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 mx-auto"
        >
          <Download size={20} />
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Resume;
