import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Me</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
          Hi! I'm a passionate fullstack developer with a love for creating elegant solutions to complex problems. 
          My journey in tech started with curiosity and has evolved into a commitment to continuous learning and growth.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">My Journey</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          After facing numerous rejections in my job search, I decided to take matters into my own hands. 
          I embarked on a challenge to build multiple projects, learn new technologies, and document my growth. 
          This journey has taught me resilience, problem-solving, and the importance of never giving up.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {['React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Express', 'Next.js', 'Tailwind CSS', 'Git', 'Supabase', 'Docker', 'AWS'].map((skill, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
              <span className="text-gray-900 dark:text-white font-medium">{skill}</span>
            </div>
          ))}
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">What I'm Looking For</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          I'm seeking opportunities to work with innovative teams where I can contribute my skills, 
          continue learning, and build products that make a real impact. I thrive in environments that 
          value creativity, collaboration, and continuous improvement.
        </p>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
              Get in Touch
            </Link>
            <a href="/resume.pdf" download className="border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white px-6 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;