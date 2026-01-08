import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800">
      {project.image_url && (
        <img src={project.image_url} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
      )}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech && project.tech.map((tech, index) => (
          <span key={index} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <Link 
        to={`/projects/${project.slug}`} 
        className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-sm font-medium transition-colors duration-200 inline-block"
      >
        View Project →
      </Link>
    </div>
  );
};

export default ProjectCard;