import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import toast from 'react-hot-toast';
import { Mail, MailOpen, Trash2 } from 'lucide-react';

const MessagesAdmin = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, unread, read

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error:', error);
      toast.error('Failed to fetch messages');
    } else {
      setMessages(data || []);
    }
    setLoading(false);
  };

  const handleMarkAsRead = async (id, currentStatus) => {
    const { error } = await supabase
      .from('contact_messages')
      .update({ read: !currentStatus })
      .eq('id', id);

    if (error) {
      toast.error('Failed to update message');
      console.error('Error:', error);
    } else {
      toast.success('Message updated!');
      fetchMessages();
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      const { error } = await supabase
        .from('contact_messages')
        .delete()
        .eq('id', id);

      if (error) {
        toast.error('Failed to delete message');
        console.error('Error:', error);
      } else {
        toast.success('Message deleted!');
        fetchMessages();
      }
    }
  };

  const handleMarkAllAsRead = async () => {
    const unreadMessages = messages.filter(m => !m.read);
    
    if (unreadMessages.length === 0) {
      toast.error('No unread messages');
      return;
    }

    const { error } = await supabase
      .from('contact_messages')
      .update({ read: true })
      .eq('read', false);

    if (error) {
      toast.error('Failed to mark all as read');
      console.error('Error:', error);
    } else {
      toast.success(`Marked ${unreadMessages.length} messages as read`);
      fetchMessages();
    }
  };

  const filteredMessages = messages.filter(message => {
    if (filter === 'unread') return !message.read;
    if (filter === 'read') return message.read;
    return true;
  });

  const unreadCount = messages.filter(m => !m.read).length;

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Messages</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {unreadCount > 0 ? `${unreadCount} unread message${unreadCount > 1 ? 's' : ''}` : 'All caught up!'}
          </p>
        </div>
        
        <div className="flex gap-2">
          {unreadCount > 0 && (
            <button
              onClick={handleMarkAllAsRead}
              className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Mark All as Read
            </button>
          )}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            filter === 'all'
              ? 'text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          All ({messages.length})
        </button>
        <button
          onClick={() => setFilter('unread')}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            filter === 'unread'
              ? 'text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          Unread ({unreadCount})
        </button>
        <button
          onClick={() => setFilter('read')}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            filter === 'read'
              ? 'text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          Read ({messages.length - unreadCount})
        </button>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">Loading messages...</p>
        </div>
      ) : filteredMessages.length === 0 ? (
        <div className="text-center py-12">
          <Mail size={48} className="mx-auto text-gray-400 dark:text-gray-600 mb-4" />
          <p className="text-gray-600 dark:text-gray-400">
            {filter === 'unread' ? 'No unread messages' : 
             filter === 'read' ? 'No read messages' : 
             'No messages yet'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredMessages.map(message => (
            <div 
              key={message.id} 
              className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow border transition-all ${
                !message.read 
                  ? 'border-l-4 border-l-blue-500 border-gray-200 dark:border-gray-700' 
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {message.name}
                    </h3>
                    {!message.read && (
                      <span className="inline-flex items-center gap-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                        <Mail size={12} />
                        New
                      </span>
                    )}
                  </div>
                  <a 
                    href={`mailto:${message.email}`}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {message.email}
                  </a>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {new Date(message.created_at).toLocaleString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>

              <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                  {message.message}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => handleMarkAsRead(message.id, message.read)}
                  className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {message.read ? (
                    <>
                      <Mail size={16} />
                      Mark as Unread
                    </>
                  ) : (
                    <>
                      <MailOpen size={16} />
                      Mark as Read
                    </>
                  )}
                </button>
                <button
                  onClick={() => handleDelete(message.id)}
                  className="inline-flex items-center gap-2 text-sm text-red-600 dark:text-red-400 hover:underline"
                >
                  <Trash2 size={16} />
                  Delete
                </button>
                <a
                  href={`mailto:${message.email}?subject=Re: Your message&body=Hi ${message.name},%0D%0A%0D%0AThank you for reaching out!%0D%0A%0D%0A`}
                  className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:underline ml-auto"
                >
                  Reply via Email →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MessagesAdmin;