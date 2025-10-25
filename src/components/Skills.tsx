import React from 'react';
import { Code, Users, Clock, MessageCircle, Puzzle, Handshake } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML/CSS/Javascript', level: 85, color: 'from-orange-500 to-red-500' },
    { name: 'Python', level: 80, color: 'from-blue-500 to-green-500' },
    { name: 'C Programming', level: 75, color: 'from-purple-500 to-blue-500' },
    { name: 'React/NodeJs', level: 80, color: 'from-orange-500 to-purple-500' },
     { name: 'MongoDB', level: 80, color: 'from-orange-500 to-purple-500' },
    { name: 'Tailwinds', level: 80, color: 'from-orange-500 to-purple-500' }, 
  ];

  const softSkills = [
    { name: 'Time Management', icon: Clock, color: 'text-orange-500' },
    { name: 'Communication', icon: MessageCircle, color: 'text-purple-500' },
    { name: 'Teamwork', icon: Handshake, color: 'text-blue-500' },
    { name: 'Problem Solving', icon: Puzzle, color: 'text-green-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            A combination of technical expertise and soft skills that help me deliver exceptional results
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Technical Skills</h3>
            </div>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-medium text-gray-800">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-105`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Soft Skills</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                        <skill.icon className={`${skill.color} group-hover:scale-110 transition-transform`} size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{skill.name}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
