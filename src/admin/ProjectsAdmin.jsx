import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import toast from 'react-hot-toast';

const ProjectsAdmin = () => {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    overview: '',
    tech: '',
    technologies_used: '',
    link: '',
    image_url: '',
    demo_url: '',
    source_code_url: '',
    key_features: '',
    how_it_works: '',
    screenshots: '',
    featured: false
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error:', error);
      toast.error('Failed to fetch projects');
    } else {
      setProjects(data || []);
    }
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Process arrays from comma-separated strings
    const techArray = formData.tech.split(',').map(t => t.trim()).filter(Boolean);
    const technologiesArray = formData.technologies_used.split(',').map(t => t.trim()).filter(Boolean);
    const keyFeaturesArray = formData.key_features.split('\n').map(f => f.trim()).filter(Boolean);
    const screenshotsArray = formData.screenshots.split('\n').map(s => s.trim()).filter(Boolean);
    
    const slug = formData.slug || generateSlug(formData.title);

    const projectData = {
      title: formData.title,
      slug: slug,
      description: formData.description,
      overview: formData.overview,
      tech: techArray,
      technologies_used: technologiesArray.length > 0 ? technologiesArray : techArray,
      link: formData.link || null,
      image_url: formData.image_url || null,
      demo_url: formData.demo_url || null,
      source_code_url: formData.source_code_url || null,
      key_features: keyFeaturesArray.length > 0 ? keyFeaturesArray : null,
      how_it_works: formData.how_it_works || null,
      screenshots: screenshotsArray.length > 0 ? screenshotsArray : null,
      featured: formData.featured
    };

    if (editingProject) {
      const { error } = await supabase
        .from('projects')
        .update(projectData)
        .eq('id', editingProject.id);

      if (error) {
        toast.error('Failed to update project');
        console.error('Error:', error);
      } else {
        toast.success('Project updated successfully!');
      }
    } else {
      const { error } = await supabase
        .from('projects')
        .insert([projectData]);

      if (error) {
        toast.error('Failed to add project');
        console.error('Error:', error);
      } else {
        toast.success('Project added successfully!');
      }
    }

    setShowForm(false);
    setEditingProject(null);
    resetForm();
    fetchProjects();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      description: '',
      overview: '',
      tech: '',
      technologies_used: '',
      link: '',
      image_url: '',
      demo_url: '',
      source_code_url: '',
      key_features: '',
      how_it_works: '',
      screenshots: '',
      featured: false
    });
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      slug: project.slug || '',
      description: project.description,
      overview: project.overview || '',
      tech: (project.tech || []).join(', '),
      technologies_used: (project.technologies_used || project.tech || []).join(', '),
      link: project.link || '',
      image_url: project.image_url || '',
      demo_url: project.demo_url || '',
      source_code_url: project.source_code_url || '',
      key_features: (project.key_features || []).join('\n'),
      how_it_works: project.how_it_works || '',
      screenshots: (project.screenshots || []).join('\n'),
      featured: project.featured || false
    });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) {
        toast.error('Failed to delete project');
      } else {
        toast.success('Project deleted successfully!');
        fetchProjects();
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Manage Projects</h2>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingProject(null);
            resetForm();
          }}
          className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
        >
          {showForm ? 'Cancel' : 'Add Project'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8 space-y-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {editingProject ? 'Edit Project' : 'Add New Project'}
          </h3>

          {/* Basic Information */}
          <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Basic Information</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    title: e.target.value,
                    slug: generateSlug(e.target.value)
                  })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  placeholder="E-Commerce Platform"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Slug (URL-friendly) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  placeholder="e-commerce-platform"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Auto-generated from title. This will be the URL: /projects/{formData.slug}
                </p>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Short Description * (For cards)
                </label>
                <textarea
                  required
                  rows="3"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  placeholder="A full-stack e-commerce application with payment integration..."
                ></textarea>
              </div>
            </div>
          </div>

          {/* Detailed Content */}
          <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Detailed Content</h4>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Overview (Detailed description)
                </label>
                <textarea
                  rows="5"
                  value={formData.overview}
                  onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  placeholder="A lightweight Daily Affirmations app that delivers short, positive statements to start your day with focus and positivity..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Key Features (One per line)
                </label>
                <textarea
                  rows="6"
                  value={formData.key_features}
                  onChange={(e) => setFormData({ ...formData, key_features: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white font-mono text-sm"
                  placeholder="Simple CLI or GUI delivery of affirmations
Rotating list of affirmations with optional randomization
Optional scheduling or repeat reminders
Supports custom affirmation lists"
                ></textarea>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Enter one feature per line
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  How It Works
                </label>
                <textarea
                  rows="6"
                  value={formData.how_it_works}
                  onChange={(e) => setFormData({ ...formData, how_it_works: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  placeholder="The script loads a list of affirmations (plain text or JSON). Each interval or on-demand, it displays an affirmation..."
                ></textarea>
              </div>
            </div>
          </div>

          {/* Technologies & Links */}
          <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Technologies & Links</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tech Stack * (comma-separated)
                </label>
                <input
                  type="text"
                  required
                  value={formData.tech}
                  onChange={(e) => setFormData({ ...formData, tech: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  placeholder="Python, Tkinter"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  These will appear as badges on the project card
                </p>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Technologies Used (comma-separated, optional)
                </label>
                <input
                  type="text"
                  value={formData.technologies_used}
                  onChange={(e) => setFormData({ ...formData, technologies_used: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  placeholder="Python, Tkinter, JSON"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  If left empty, will use Tech Stack above
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Demo URL (optional)
                </label>
                <input
                  type="url"
                  value={formData.demo_url}
                  onChange={(e) => setFormData({ ...formData, demo_url: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  placeholder="https://demo.example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Source Code URL (optional)
                </label>
                <input
                  type="url"
                  value={formData.source_code_url}
                  onChange={(e) => setFormData({ ...formData, source_code_url: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  placeholder="https://github.com/username/repo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Legacy Link (optional)
                </label>
                <input
                  type="url"
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  placeholder="https://example.com"
                />
              </div>
            </div>
          </div>

          {/* Media */}
          <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Media</h4>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Main Image URL (optional)
                </label>
                <input
                  type="url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Screenshots (One URL per line, optional)
                </label>
                <textarea
                  rows="4"
                  value={formData.screenshots}
                  onChange={(e) => setFormData({ ...formData, screenshots: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white font-mono text-sm"
                  placeholder="https://example.com/screenshot1.jpg
https://example.com/screenshot2.jpg"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="mr-2 w-4 h-4"
            />
            <label htmlFor="featured" className="text-sm text-gray-700 dark:text-gray-300">
              Featured Project (Show on homepage)
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-semibold"
          >
            {editingProject ? 'Update Project' : 'Add Project'}
          </button>
        </form>
      )}

      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            {project.image_url && (
              <img src={project.image_url} alt={project.title} className="w-full h-32 object-cover rounded mb-4" />
            )}
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
              {project.featured && (
                <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">
                  Featured
                </span>
              )}
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2">{project.description}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              Slug: /projects/{project.slug}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(project)}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(project.id)}
                className="text-sm text-red-600 dark:text-red-400 hover:underline"
              >
                Delete
              </button>
              <a
                href={`/projects/${project.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 dark:text-gray-400 hover:underline ml-auto"
              >
                View →
              </a>
            </div>
          </div>
        ))}
      </div>

      {projects.length === 0 && !showForm && (
        <div className="text-center py-12 text-gray-600 dark:text-gray-400">
          <p>No projects yet. Click "Add Project" to create your first one!</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsAdmin;