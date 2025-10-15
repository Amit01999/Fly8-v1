import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import axios from 'axios';
import ImageUploader from './ImageUploader';
import LayoutSelector from './LayoutSelector';

const CreateBlog = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: '',
    layout: 'layout1',
    authorName: '',
    image: '',
    authorImage: '',
  });
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submissionType, setSubmissionType] = useState('');

  const EXCERPT_MAX_LENGTH = 500;

  const handleChange = e => {
    const { name, value } = e.target;

    // Limit excerpt to 500 characters
    if (name === 'excerpt' && value.length > EXCERPT_MAX_LENGTH) {
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleEditorChange = value => {
    setFormData({ ...formData, content: value });
  };

  const handleImageUpload = async (type, file) => {
    const formDataUpload = new FormData();
    formDataUpload.append('image', file);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/blog/blogs/imgupload`,
        formDataUpload,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
          withCredentials: true,
        }
      );
      setFormData({ ...formData, [type]: res.data.url });
      toast.success('Image uploaded!');
    } catch (error) {
      toast.error('Upload failed');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      excerpt: '',
      category: '',
      layout: 'layout1',
      authorName: '',
      image: '',
      authorImage: '',
    });
  };

  const handleSubmit = async saveAsDraft => {
    setLoading(true);
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/blog/blogs`,
        { ...formData, saveAsDraft },
        { withCredentials: true }
      );

      setSubmissionType(saveAsDraft ? 'draft' : 'review');
      setShowSuccess(true);
      resetForm();

      toast.success(saveAsDraft ? 'Draft saved successfully!' : 'Submitted for review!');
    } catch (error) {
      if (error.response && error.response.data) {
        const errData = error.response.data;
        if (errData.msg) {
          toast.error(errData.msg);
        } else if (errData.errors && errData.errors[0]?.msg) {
          toast.error(errData.errors[0].msg);
        } else {
          toast.error('Error saving blog');
        }
      } else {
        toast.error('Error saving blog');
      }
    }
    setLoading(false);
  };

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image', 'code-block'],
      [{ align: [] }],
      ['clean'],
    ],
  };

  const remainingChars = EXCERPT_MAX_LENGTH - formData.excerpt.length;
  const isExcerptNearLimit = remainingChars < 50;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        {/* Success Message */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="mb-8 bg-white rounded-2xl shadow-xl border border-green-200 overflow-hidden"
            >
              <div className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>

                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  {submissionType === 'draft' ? 'Draft Saved!' : 'Submitted Successfully!'}
                </h2>

                <p className="text-gray-600 mb-6 text-lg">
                  {submissionType === 'draft'
                    ? 'Your blog post has been saved as a draft. You can continue editing it later.'
                    : 'Your blog post has been submitted for review. Our team will review it and publish it soon!'}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 font-semibold shadow-md hover:shadow-lg transition-all"
                  >
                    Create Another Blog
                  </button>
                  <button
                    onClick={() => navigate('/blogs')}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 font-semibold transition-all"
                  >
                    View All Blogs
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header Section */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Create New Blog
              </h1>
              <p className="text-gray-600 mt-1">
                Share your thoughts and ideas with the world
              </p>
            </div>
          </motion.div>
        </div>

        {/* Main Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <form className="p-8 space-y-8">
            {/* Title Section */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <svg
                  className="w-5 h-5 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                Blog Title
                <span className="text-red-500">*</span>
              </label>
              <input
                name="title"
                placeholder="Enter your blog title..."
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all duration-200 text-gray-900 placeholder-gray-400 text-lg font-medium"
                required
              />
            </div>

            {/* Content Editor */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <svg
                  className="w-5 h-5 text-indigo-500"
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
                Content
                <span className="text-red-500">*</span>
              </label>
              <div className="border-2 border-gray-200 rounded-xl overflow-hidden focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-50 transition-all duration-200">
                <ReactQuill
                  theme="snow"
                  value={formData.content}
                  onChange={handleEditorChange}
                  className="bg-white"
                  style={{ height: '320px', marginBottom: '60px' }}
                  modules={quillModules}
                  placeholder="Write your blog content here..."
                />
              </div>
            </div>

            {/* Images Section */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Main Image */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <svg
                    className="w-5 h-5 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Featured Image
                </label>
                <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-dashed border-gray-300 hover:border-indigo-400 transition-colors duration-200">
                  <ImageUploader
                    onUpload={file => handleImageUpload('image', file)}
                    label="Main Image"
                  />
                  {formData.image && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-4"
                    >
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded-lg shadow-md ring-2 ring-indigo-100"
                      />
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Author Image */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <svg
                    className="w-5 h-5 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Author Profile
                </label>
                <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-dashed border-gray-300 hover:border-indigo-400 transition-colors duration-200">
                  <ImageUploader
                    onUpload={file => handleImageUpload('authorImage', file)}
                    label="Author Profile Image"
                  />
                  {formData.authorImage && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-4 flex justify-center"
                    >
                      <img
                        src={formData.authorImage}
                        alt="Author Preview"
                        className="w-24 h-24 rounded-full object-cover shadow-lg ring-4 ring-indigo-100"
                      />
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            {/* Author Name */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <svg
                  className="w-5 h-5 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Author Name
                <span className="text-red-500">*</span>
              </label>
              <input
                name="authorName"
                placeholder="Enter author name..."
                value={formData.authorName}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all duration-200 text-gray-900 placeholder-gray-400"
                required
              />
            </div>

            {/* Metadata Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <svg
                    className="w-5 h-5 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                  Category
                </label>
                <input
                  name="category"
                  placeholder="e.g., Technology, Travel..."
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all duration-200 text-gray-900 placeholder-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <svg
                    className="w-5 h-5 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                  Layout
                </label>
                <div className="border-2 border-gray-200 rounded-xl focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-50 transition-all duration-200">
                  <LayoutSelector
                    value={formData.layout}
                    onChange={val => setFormData({ ...formData, layout: val })}
                  />
                </div>
              </div>
            </div>

            {/* Excerpt */}
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <svg
                    className="w-5 h-5 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                  Excerpt
                </label>
                <span className={`text-xs font-medium ${isExcerptNearLimit ? 'text-orange-600' : 'text-gray-500'}`}>
                  {remainingChars} characters remaining
                </span>
              </div>
              <div className="relative">
                <textarea
                  name="excerpt"
                  placeholder="A brief summary of your blog post..."
                  value={formData.excerpt}
                  onChange={handleChange}
                  maxLength={EXCERPT_MAX_LENGTH}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all duration-200 text-gray-900 placeholder-gray-400 resize-none"
                />
              </div>
              <p className="text-xs text-gray-500 flex items-start gap-1.5 mt-1">
                <svg className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Excerpt must be less than 500 characters. This will be shown in blog previews and search results.</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => handleSubmit(true)}
                disabled={loading}
                className="flex-1 px-6 py-3.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-xl hover:from-gray-200 hover:to-gray-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
                {loading ? 'Saving...' : 'Save Draft'}
              </button>
              <button
                type="button"
                onClick={() => handleSubmit(false)}
                disabled={loading}
                className="flex-1 px-6 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {loading ? 'Submitting...' : 'Submit for Review'}
              </button>
            </div>
          </form>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-gray-500">
            <span className="text-red-500">*</span> Required fields
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CreateBlog;
