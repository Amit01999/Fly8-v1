import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogCard = ({ blog }) => {
  const layoutClass = `layout-${blog.layout}`; // Tailwind variants: e.g., .layout-layout1 { ... } in globals.css

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={`overflow-hidden ${layoutClass}`}
    >
      {blog.image && (
        <div className="relative overflow-hidden group">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors">
          {blog.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
          {blog.excerpt}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <Link
            to={`/blogs/${blog._id}`}
            className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1 group"
          >
            Read More
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <span className="text-xs text-gray-500 font-medium">
            {new Date(blog.publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
