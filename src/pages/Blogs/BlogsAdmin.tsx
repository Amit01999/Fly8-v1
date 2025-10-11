import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import axios from 'axios';
import StatusBadge from './StatusBadge';
import BlogCard from './BlogCard';

const BlogsAdmin = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [tab, setTab] = useState('pending');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, [tab]);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/blog/blogs/admin?status=${tab}`,
        {
          withCredentials: true,
        }
      );
      setBlogs(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      toast.error('Error fetching blogs');
      setBlogs([]);
    }
    setLoading(false);
  };

  const handleApprove = async id => {
    try {
      await axios.put(
        `${import.meta.env.VITE_BASE_URL}/blog/blogs/${id}/approve`,
        {},
        { withCredentials: true }
      );
      toast.success('Blog approved!');
      fetchBlogs();
    } catch (error) {
      toast.error('Approval failed');
    }
  };

  const handleReject = async (id, reason) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_BASE_URL}/blog/blogs/${id}/reject`,
        { reason },
        { withCredentials: true }
      );
      toast.success('Blog rejected');
      fetchBlogs();
    } catch (error) {
      toast.error('Rejection failed');
    }
  };

  const handleEdit = id => {
    navigate(`/admin/edit-blog/${id}`); // Implement edit page similar to create
  };

  const handleDelete = async id => {
    if (!window.confirm('Delete this blog?')) return;
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/blog/blogs/${id}`, {
        withCredentials: true,
      });
      toast.success('Deleted');
      fetchBlogs();
    } catch (error) {
      toast.error('Delete failed');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="h-12 w-64 bg-gray-200 rounded-lg animate-pulse mb-8"></div>
          <div className="flex space-x-4 mb-8">
            {[1, 2, 3, 4].map(i => (
              <div
                key={i}
                className="h-12 w-32 bg-gray-200 rounded-lg animate-pulse"
              ></div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm p-6 animate-pulse"
              >
                <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-3"></div>
                <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
            Admin Blog Review
          </h1>
          <p className="text-gray-600 text-lg">
            Manage and review blog submissions
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 bg-white rounded-xl shadow-sm p-2 inline-flex flex-wrap gap-2">
          {['pending', 'draft', 'published', 'rejected'].map(t => {
            const count = blogs.filter(b => b.status === t).length;
            const colors = {
              pending: 'from-orange-500 to-amber-500',
              draft: 'from-yellow-500 to-orange-400',
              published: 'from-green-500 to-emerald-500',
              rejected: 'from-red-500 to-rose-500',
            };

            return (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                  tab === t
                    ? `bg-gradient-to-r ${colors[t]} text-white shadow-md`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="capitalize">{t}</span>
                <span
                  className={`ml-2 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                    tab === t ? 'bg-white bg-opacity-30' : 'bg-gray-200'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Grid */}
        {blogs.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-sm p-12 max-w-md mx-auto">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                No blogs found
              </h3>
              <p className="text-gray-600">
                There are no blogs with status:{' '}
                <span className="font-semibold capitalize">{tab}</span>
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map(blog => (
              <motion.div
                key={blog._id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <BlogCard blog={blog} />
                <div className="px-5 pb-5">
                  <div className="mb-4">
                    <StatusBadge status={blog.status} />
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleApprove(blog._id)}
                      className="px-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(blog._id, prompt('Reason?'))}
                      className="px-4 py-2.5 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-lg font-medium hover:from-red-600 hover:to-rose-600 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => handleEdit(blog._id)}
                      className="px-4 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="px-4 py-2.5 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg font-medium hover:from-gray-700 hover:to-gray-800 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsAdmin;
