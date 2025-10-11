import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Helmet } from 'react-helmet'; // npm i react-helmet for SEO

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/blog/blogs/${id}`
      );
      setBlog(res.data);
    } catch (error) {
      if (error.response?.status === 403 || error.response?.status === 404) {
        navigate('/404'); // Or show 404 page
      }
    }
    setLoading(false);
  };

  if (loading) return <div className="flex justify-center p-8">Loading...</div>;
  if (!blog) return <div>Blog not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto p-6"
    >
      <Helmet>
        <title>{blog.title} - Fly8</title>
      </Helmet>
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
      )}
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <div className="flex items-center mb-6">
        {blog.authorImage && (
          <img
            src={blog.authorImage}
            alt={blog.authorName}
            className="w-12 h-12 rounded-full mr-4"
          />
        )}
        <div>
          <p className="font-semibold">{blog.authorName}</p>
          <p className="text-gray-500">
            {new Date(blog.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />{' '}
      {/* Sanitized on server */}
    </motion.div>
  );
};

export default BlogDetail;
