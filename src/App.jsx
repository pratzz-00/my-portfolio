import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

 useEffect(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    setDarkMode(false);
    document.documentElement.classList.remove('dark');
  } else {
    // Default to dark mode
    setDarkMode(true);
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Routes>
          {/* Public Routes with Layout */}
          <Route path="/" element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}><HomePage /></Layout>} />
          <Route path="/about" element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}><AboutPage /></Layout>} />
          <Route path="/projects" element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}><ProjectsPage /></Layout>} />
          <Route path="/projects/:slug" element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}><ProjectDetailPage /></Layout>} />
          <Route path="/blog" element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}><BlogPage /></Layout>} />
          <Route path="/blog/:slug" element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}><BlogPostPage /></Layout>} />
          <Route path="/contact" element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}><ContactPage /></Layout>} />
          
          {/* Admin Routes without Layout */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </div>
  );
};

const Layout = ({ children, darkMode, toggleDarkMode }) => {
  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow animate-fadeIn">
        {children}
      </main>
      <Footer />
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default App;