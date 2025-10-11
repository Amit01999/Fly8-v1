import React, { useState, useRef } from 'react';
import { X, Upload, Image as ImageIcon, User } from 'lucide-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const BlogForm = ({ blog, onClose }) => {
  const [formData, setFormData] = useState({
    title: blog?.title || '',
    layout: blog?.layout || 'layout1',
    category: blog?.category || 'General',
    content: blog?.content || '',
    image: blog?.image || '',
    authorName: blog?.authorName || '',
    authorImage: blog?.authorImage || '',
    published: blog?.published !== undefined ? blog.published : true,
  });

  const [loading, setLoading] = useState(false);
  const [uploadingBlogImage, setUploadingBlogImage] = useState(false);
  const [uploadingAuthorImage, setUploadingAuthorImage] = useState(false);
  const blogImageInput = useRef(null);
  const authorImageInput = useRef(null);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ color: [] }, { background: [] }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const handleImageUpload = async (file, type = 'blog') => {
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      try {
        if (type === 'blog') {
          setUploadingBlogImage(true);
        } else {
          setUploadingAuthorImage(true);
        }

        const response = await axios.post(`${API_URL}/api/blogs/upload`, {
          image: reader.result,
          type: type,
        });

        if (response.data.success) {
          setFormData(prev => ({
            ...prev,
            [type === 'blog' ? 'image' : 'authorImage']: response.data.data.url,
          }));
        }
      } catch (error) {
        console.error('Upload error:', error);
        alert('Failed to upload image');
      } finally {
        if (type === 'blog') {
          setUploadingBlogImage(false);
        } else {
          setUploadingAuthorImage(false);
        }
      }
    };
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.content ||
      !formData.image ||
      !formData.authorName ||
      !formData.authorImage
    ) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      let response;
      if (blog?._id) {
        response = await axios.put(
          `${API_URL}/api/blogs/${blog._id}`,
          formData
        );
      } else {
        response = await axios.post(`${API_URL}/api/blogs`, formData);
      }

      if (response.data.success) {
        alert(
          blog?._id
            ? 'Blog updated successfully!'
            : 'Blog created successfully!'
        );
        onClose();
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Failed to save blog');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">
              {blog?._id ? 'Edit Blog' : 'Create New Blog'}
            </h2>
            <button
              onClick={onClose}
              className="text-white hover:bg-blue-700 p-2 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Blog Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={e =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter blog title..."
                required
              />
            </div>

            {/* Layout & Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Layout Style *
                </label>
                <select
                  value={formData.layout}
                  onChange={e =>
                    setFormData({ ...formData, layout: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="layout1">Layout 1 - Classic</option>
                  <option value="layout2">Layout 2 - Modern</option>
                  <option value="layout3">Layout 3 - Minimal</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={e =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Technology, Business, Travel"
                />
              </div>
            </div>

            {/* Main Blog Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Main Blog Image *
              </label>
              <div className="flex items-center gap-4">
                <input
                  ref={blogImageInput}
                  type="file"
                  accept="image/*"
                  onChange={e => handleImageUpload(e.target.files[0], 'blog')}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => blogImageInput.current?.click()}
                  disabled={uploadingBlogImage}
                  className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploadingBlogImage ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload size={20} />
                      Upload Image
                    </>
                  )}
                </button>
                {formData.image && (
                  <img
                    src={formData.image}
                    alt="Blog preview"
                    className="w-32 h-20 object-cover rounded-lg border-2 border-gray-300"
                  />
                )}
              </div>
            </div>

            {/* Author Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Author Name *
                </label>
                <input
                  type="text"
                  value={formData.authorName}
                  onChange={e =>
                    setFormData({ ...formData, authorName: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Author name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Author Profile Picture *
                </label>
                <div className="flex items-center gap-4">
                  <input
                    ref={authorImageInput}
                    type="file"
                    accept="image/*"
                    onChange={e =>
                      handleImageUpload(e.target.files[0], 'author')
                    }
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => authorImageInput.current?.click()}
                    disabled={uploadingAuthorImage}
                    className="flex items-center gap-2 px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {uploadingAuthorImage ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <User size={20} />
                        Upload
                      </>
                    )}
                  </button>
                  {formData.authorImage && (
                    <img
                      src={formData.authorImage}
                      alt="Author"
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Content Editor */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Blog Content *
              </label>
              <ReactQuill
                theme="snow"
                value={formData.content}
                onChange={content => setFormData({ ...formData, content })}
                modules={quillModules}
                className="bg-white rounded-lg"
                style={{ height: '400px', marginBottom: '50px' }}
              />
            </div>

            {/* Published Toggle */}
            <div className="flex items-center gap-3 pt-8">
              <input
                type="checkbox"
                id="published"
                checked={formData.published}
                onChange={e =>
                  setFormData({ ...formData, published: e.target.checked })
                }
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="published"
                className="text-sm font-medium text-gray-700"
              >
                Publish immediately
              </label>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-6">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    Saving...
                  </span>
                ) : blog?._id ? (
                  'Update Blog'
                ) : (
                  'Create Blog'
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
