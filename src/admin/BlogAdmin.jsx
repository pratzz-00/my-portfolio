import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import toast from 'react-hot-toast';

const BlogAdmin = () => {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    featured_image: '',
    published: false
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error:', error);
      toast.error('Failed to fetch posts');
    } else {
      setPosts(data || []);
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
    const slug = formData.slug || generateSlug(formData.title);

    const postData = {
      title: formData.title,
      slug: slug,
      content: formData.content,
      excerpt: formData.excerpt || null,
      featured_image: formData.featured_image || null,
      published: formData.published
    };

    if (editingPost) {
      const { error } = await supabase
        .from('blog_posts')
        .update(postData)
        .eq('id', editingPost.id);

      if (error) {
        toast.error('Failed to update post');
        console.error('Error:', error);
      } else {
        toast.success('Post updated successfully!');
      }
    } else {
      const { error } = await supabase
        .from('blog_posts')
        .insert([postData]);

      if (error) {
        toast.error('Failed to add post');
        console.error('Error:', error);
      } else {
        toast.success('Post added successfully!');
      }
    }

    setShowForm(false);
    setEditingPost(null);
    resetForm();
    fetchPosts();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      content: '',
      excerpt: '',
      featured_image: '',
      published: false
    });
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      slug: post.slug || '',
      content: post.content,
      excerpt: post.excerpt || '',
      featured_image: post.featured_image || '',
      published: post.published || false
    });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) {
        toast.error('Failed to delete post');
      } else {
        toast.success('Post deleted successfully!');
        fetchPosts();
      }
    }
  };

  const togglePublish = async (post) => {
    const { error } = await supabase
      .from('blog_posts')
      .update({ published: !post.published })
      .eq('id', post.id);

    if (error) {
      toast.error('Failed to update publish status');
    } else {
      toast.success(post.published ? 'Post unpublished' : 'Post published!');
      fetchPosts();
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Manage Blog Posts</h2>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingPost(null);
            resetForm();
          }}
          className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
        >
          {showForm ? 'Cancel' : 'Add Post'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8 space-y-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {editingPost ? 'Edit Blog Post' : 'Add New Blog Post'}
          </h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Post Title *
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
              placeholder="How to Build a Full-Stack Portfolio"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Slug (URL-friendly) *
            </label>
            <input
              type="text"
              required
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
              placeholder="how-to-build-fullstack-portfolio"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Auto-generated from title. URL will be: /blog/{formData.slug}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Excerpt (Short preview)
            </label>
            <textarea
              rows="3"
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
              placeholder="A step-by-step guide to building your own portfolio website with React and Supabase..."
            ></textarea>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Shown on blog listing page
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Content (Markdown supported) *
            </label>
            <textarea
              required
              rows="15"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white font-mono text-sm"
              placeholder="# Introduction

This is my blog post about...

## Step 1: Setup

First, you need to...
```javascript
const example = 'code';
```

## Conclusion

In this post, we learned..."
            ></textarea>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Supports Markdown: headings (#), bold (**text**), italic (*text*), code blocks (```), lists, etc.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Featured Image URL (optional)
            </label>
            <input
              type="url"
              value={formData.featured_image}
              onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
              placeholder="https://example.com/featured-image.jpg"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="published"
              checked={formData.published}
              onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
              className="mr-2 w-4 h-4"
            />
            <label htmlFor="published" className="text-sm text-gray-700 dark:text-gray-300">
              Published (Make visible to public)
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-semibold"
          >
            {editingPost ? 'Update Post' : 'Add Post'}
          </button>
        </form>
      )}

      {/* Blog Posts List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            {post.featured_image && (
              <img src={post.featured_image} alt={post.title} className="w-full h-32 object-cover rounded mb-4" />
            )}
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex-1">{post.title}</h3>
              <span className={`text-xs px-2 py-1 rounded ml-2 ${
                post.published 
                  ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
              }`}>
                {post.published ? 'Published' : 'Draft'}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2">
              {post.excerpt || post.content.substring(0, 100) + '...'}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              {new Date(post.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              Slug: /blog/{post.slug}
            </p>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => handleEdit(post)}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => togglePublish(post)}
                className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
              >
                {post.published ? 'Unpublish' : 'Publish'}
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="text-sm text-red-600 dark:text-red-400 hover:underline"
              >
                Delete
              </button>
              {post.published && (
                <a
                  href={`/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:underline ml-auto"
                >
                  View →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {posts.length === 0 && !showForm && (
        <div className="text-center py-12 text-gray-600 dark:text-gray-400">
          <p>No blog posts yet. Click "Add Post" to create your first one!</p>
        </div>
      )}
    </div>
  );
};

export default BlogAdmin;