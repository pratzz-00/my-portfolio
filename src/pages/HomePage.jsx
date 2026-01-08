import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import ProjectCard from '../components/ProjectCard';

const HomePage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProjects();
  }, []);

  const fetchFeaturedProjects = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('featured', true)
      .limit(3);
    
    if (error) {
      console.error('Error fetching projects:', error);
    } else {
      setProjects(data || []);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          A builder’s journey ⟶ curious, flawed, improving, growing.
        </h1>
         <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          
          This is me trying to re-learn, learn, and grow. 

        </p>
      </div>

      <div className="flex flex-col items-center mb-16">
        <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center animate-float overflow-hidden mb-6">
          <img 
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnVqZGg3YzZvZDRzMWJqYm5xNXB6NXN6eDJ5OHNxYmJ0cWJ3cWNkNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JIX9t2j0ZTN9S/giphy.gif" 
            alt="Animated mascot" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <div className="flex gap-4 justify-center">
          <Link to="/projects" className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
            View All Projects
          </Link>
          
          <a href="/src/Pratibha_Resume.pdf" download className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
            Download Resume
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">20+</h3>
          <p className="text-gray-800 dark:text-gray-200 font-medium">Projects Built</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">One idea at a Time</p>
        </div>
        <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">4+</h3>
          <p className="text-gray-800 dark:text-gray-200 font-medium">Years of Coding</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Non-stop learning</p>
        </div>
        <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">∞</h3>
          <p className="text-gray-800 dark:text-gray-200 font-medium">Iterations and Refactors</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Because first versions lie</p>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
          <Link to="/projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
            See all projects →
          </Link>
        </div>
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">Loading projects...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;