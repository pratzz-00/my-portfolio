import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { ExternalLink, Code } from 'lucide-react';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProject();
  }, [slug]);

  const fetchProject = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .single();
    
    if (error) {
      console.error('Error fetching project:', error);
    } else {
      setProject(data);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-center text-gray-600 dark:text-gray-400">Loading project...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-center text-gray-600 dark:text-gray-400">Project not found</p>
        <div className="text-center mt-4">
          <Link to="/projects" className="text-gray-900 dark:text-white hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Back Button */}
      <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 inline-block">
        ← Back to Projects
      </Link>

      {/* Project Header with Image */}
      {project.image_url && (
        <div className="mb-8 rounded-lg overflow-hidden">
          <img src={project.image_url} alt={project.title} className="w-full h-96 object-cover" />
        </div>
      )}

      {/* Published Date */}
      {project.created_at && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Published on {new Date(project.created_at).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      )}

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {project.title}
      </h1>

      {/* Author Info (You can customize this) */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        <div>
          <p className="text-sm font-medium text-gray-900 dark:text-white">Pratibha</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Developer</p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Overview</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {project.overview || project.description}
        </p>
      </section>

      {/* Key Features */}
      {project.key_features && project.key_features.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h2>
          <ul className="space-y-3">
            {project.key_features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-gray-900 dark:text-white mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* How It Works */}
      {project.how_it_works && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How it works (brief)</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {project.how_it_works}
          </p>
        </section>
      )}

      {/* Screenshots */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.screenshots.map((screenshot, index) => (
              <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} className="rounded-lg border border-gray-200 dark:border-gray-700" />
            ))}
          </div>
        </section>
      )}

      {/* Project Links */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Links</h2>
        <div className="flex flex-wrap gap-4">
          {project.demo_url && (
            <a 
              href={project.demo_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200"
            >
              <ExternalLink size={18} />
              View Live Demo
            </a>
          )}
          {project.source_code_url && (
            <a 
              href={project.source_code_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
            >
              <Code size={18} />
              View Source Code
            </a>
          )}
        </div>
      </section>

      {/* Technologies Used */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-3">
          {(project.technologies_used || project.tech || []).map((tech, index) => (
            <span key={index} className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-700">
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;