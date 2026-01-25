import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import toast from 'react-hot-toast';
import { Github, Linkedin, Twitter, Mail, Send, Terminal } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from('contact_messages')
      .insert([formData]);

    if (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error:', error);
    } else {
      toast.success('Message sent successfully! 🚀');
      setFormData({ name: '', email: '', message: '' });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-16 px-4 transition-colors duration-500">
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes pulse-dot {
          0%, 100% { 
            background-color: #8b5cf6;
            box-shadow: 0 0 10px #8b5cf6;
          }
          50% { 
            background-color: #6366f1;
            box-shadow: 0 0 20px #8b5cf6;
          }
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .terminal-cursor::after {
          content: '|';
          animation: blink 1s infinite;
          margin-left: 2px;
        }

        .pulse-dot {
          animation: pulse-dot 2s infinite;
        }

        .gradient-text {
          background: linear-gradient(90deg, #8b5cf6, #6366f1, #8b5cf6);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease infinite;
        }

        input:focus, textarea:focus {
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Terminal className="text-violet-600 dark:text-violet-400" size={40} />
            <h1 className="text-5xl md:text-6xl font-black gradient-text" style={{ fontFamily: 'monospace' }}>
              LET'S TALK
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 terminal-cursor" style={{ fontFamily: 'monospace' }}>
            Ready to build something amazing together
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Left Side - Info Card */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg dark:shadow-2xl transition-all duration-300 hover:shadow-xl">
              {/* Terminal Header */}
              {/* <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-auto text-gray-500 dark:text-gray-500 text-sm font-mono">status.sh</span>
              </div> */}

              {/* Info Content */}
              <div className="font-mono text-sm space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-violet-600 dark:text-violet-400">$</span>
                  <span className="text-gray-600 dark:text-gray-400">Info loading{dots}</span>
                </div>
                
                <div className="space-y-3 mt-6">
                  <div className="flex items-start gap-3">
                    <span className="text-violet-600 dark:text-violet-400 mt-1">→</span>
                    <div>
                      <p className="text-gray-500 dark:text-gray-500 text-xs">EMAIL</p>
                      <p className="text-gray-900 dark:text-white">sheoran121ps@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-violet-600 dark:text-violet-400 mt-1">→</span>
                    <div>
                      <p className="text-gray-500 dark:text-gray-500 text-xs">STATUS</p>
                      <p className="text-green-600 dark:text-green-400">Available for new projects</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-violet-600 dark:text-violet-400 mt-1">→</span>
                    <div>
                      <p className="text-gray-500 dark:text-gray-500 text-xs">RESPONSE TIME</p>
                      <p className="text-gray-900 dark:text-white">Usually within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-violet-600 dark:text-violet-400 mb-4">Connect with me:</p>

                  <div className="grid grid-cols-2 gap-3">
                    <a 
                      href="https://github.com/pratzz-00"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-violet-500 dark:hover:border-violet-400 transition-all hover:shadow-md"
                    >
                      <Github size={18} className="text-gray-600 dark:text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
                      <span className="text-sm text-gray-900 dark:text-white">GitHub</span>
                    </a>

                    <a 
                      href="https://www.linkedin.com/in/pratibha-10b71321a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-violet-500 dark:hover:border-violet-400 transition-all hover:shadow-md"
                    >
                      <Linkedin size={18} className="text-gray-600 dark:text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
                      <span className="text-sm text-gray-900 dark:text-white">LinkedIn</span>
                    </a>

                    <a 
                      href="#"
                      className="group flex items-center gap-2 p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-violet-500 dark:hover:border-violet-400 transition-all hover:shadow-md"
                    >
                      <Twitter size={18} className="text-gray-600 dark:text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
                      <span className="text-sm text-gray-900 dark:text-white">Twitter</span>
                    </a>

                    <a 
                      href="mailto:your.email@example.com"
                      className="group flex items-center gap-2 p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-violet-500 dark:hover:border-violet-400 transition-all hover:shadow-md"
                    >
                      <Mail size={18} className="text-gray-600 dark:text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
                      <span className="text-sm text-gray-900 dark:text-white">Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg dark:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Drop a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:border-violet-500 dark:focus:border-violet-400 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:border-violet-500 dark:focus:border-violet-400 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your message
                </label>
                <textarea
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:border-violet-500 dark:focus:border-violet-400 focus:outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold py-4 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
              >
                <Send size={20} />
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Indicator */}
              <div className="flex items-center justify-between text-xs pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full pulse-dot"></div>
                  <span className="text-gray-500 dark:text-gray-400">Secure connection</span>
                </div>
                <span className="text-gray-400 dark:text-gray-500 font-mono">{formData.message.length}/1000</span>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Info Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 text-center shadow-sm transition-all duration-300 hover:shadow-md">
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Location</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Remote / Worldwide</p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 text-center shadow-sm transition-all duration-300 hover:shadow-md">
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Timezone</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">UTC +5:30 (IST)</p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 text-center shadow-sm transition-all duration-300 hover:shadow-md">
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Availability</p>
            <p className="text-sm text-green-600 dark:text-green-400">Open to projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;