import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Calendar, Clock } from 'lucide-react';

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
        navigate('/404');
      }
    }
    setLoading(false);
  };

  const formatDate = (dateString: string | undefined): string => {
    if (!dateString) return 'Date not available';

    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'Invalid date';

      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch (error) {
      return 'Date not available';
    }
  };

  const getReadingTime = (content: string | undefined): string => {
    if (!content) return '5 min read';
    const wordsPerMinute = 200;
    const textContent = content.replace(/<[^>]*>/g, '');
    const wordCount = textContent.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Article not found
          </h2>
          <button
            onClick={() => navigate('/blogs')}
            className="text-sm text-gray-600 hover:text-gray-900 underline underline-offset-4"
          >
            Back to all articles
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.title} - Fly8</title>
        <meta name="description" content={blog.excerpt || blog.title} />
      </Helmet>

      <article className="min-h-screen bg-white">
        {/* Main Content */}
        <div className="pt-12 pb-20">
          <div className="max-w-3xl mx-auto px-6">
            {/* Article Header */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                {blog.title}
              </h1>

              {/* Meta Info */}
              <div className="flex items-center gap-6 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time>{formatDate(blog.publishedAt || blog.createdAt)}</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{getReadingTime(blog.content)}</span>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                {blog.authorImage ? (
                  <img
                    src={blog.authorImage}
                    alt={blog.authorName || 'Author'}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white font-semibold">
                    {(blog.authorName || 'A')[0].toUpperCase()}
                  </div>
                )}
                <div>
                  <p className="text-base font-medium text-gray-900">
                    {blog.authorName || 'Anonymous'}
                  </p>
                  <p className="text-sm text-gray-500">Author</p>
                </div>
              </div>
            </motion.header>

            {/* Featured Image */}
            {blog.image && (
              <motion.figure
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-auto rounded-sm"
                />
              </motion.figure>
            )}

            {/* Article Body */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-lg max-w-none
                prose-headings:font-semibold prose-headings:text-gray-900 prose-headings:tracking-tight
                prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-12
                prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-10
                prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-8
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                prose-a:text-gray-900 prose-a:underline prose-a:decoration-gray-300 prose-a:underline-offset-4 hover:prose-a:decoration-gray-900
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-em:text-gray-700
                prose-code:text-sm prose-code:bg-gray-100 prose-code:text-gray-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:before:content-[''] prose-code:after:content-['']
                prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-sm prose-pre:overflow-x-auto
                prose-blockquote:border-l-4 prose-blockquote:border-gray-900 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700
                prose-img:rounded-sm prose-img:my-8
                prose-ul:my-6 prose-ul:list-disc
                prose-ol:my-6 prose-ol:list-decimal
                prose-li:text-gray-700 prose-li:my-2 prose-li:text-lg
                prose-hr:border-gray-200 prose-hr:my-12"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Footer */}
            <motion.footer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 pt-8 border-t border-gray-200"
            >
              <div className="flex items-center justify-between">
                <button
                  onClick={() => navigate('/blogs')}
                  className="text-sm text-gray-900 hover:text-gray-600 font-medium underline underline-offset-4"
                >
                  View all articles
                </button>
              </div>
            </motion.footer>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogDetail;
