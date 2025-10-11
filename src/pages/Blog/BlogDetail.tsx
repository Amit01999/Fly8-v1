// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Calendar, User, ArrowLeft, Eye, Share2, Clock } from 'lucide-react';
// import { motion } from 'framer-motion';
// import axios from 'axios';

// const BlogDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [blog, setBlog] = useState(null);
//   const [relatedBlogs, setRelatedBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

//   useEffect(() => {
//     fetchBlog();
//     window.scrollTo(0, 0);
//   }, [id]);

//   const fetchBlog = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${API_URL}/api/blogs/${id}`);
//       setBlog(response.data.data);

//       // Fetch related blogs
//       const relatedResponse = await axios.get(`${API_URL}/api/blogs?limit=3`);
//       setRelatedBlogs(
//         relatedResponse.data.data
//           .filter(b => b._id !== response.data.data._id)
//           .slice(0, 3)
//       );
//     } catch (error) {
//       console.error('Error fetching blog:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleShare = () => {
//     if (navigator.share) {
//       navigator.share({
//         title: blog.title,
//         url: window.location.href,
//       });
//     } else {
//       navigator.clipboard.writeText(window.location.href);
//       alert('Link copied to clipboard!');
//     }
//   };

//   const calculateReadTime = content => {
//     const wordsPerMinute = 200;
//     const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
//     return Math.ceil(words / wordsPerMinute);
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
//       </div>
//     );
//   }

//   if (!blog) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">
//             Blog not found
//           </h2>
//           <button
//             onClick={() => navigate('/blogs')}
//             className="text-blue-600 hover:text-blue-700"
//           >
//             Back to blogs
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="relative h-[500px] bg-gradient-to-b from-gray-900 to-gray-800"
//       >
//         <div className="absolute inset-0">
//           <img
//             src={blog.image}
//             alt={blog.title}
//             className="w-full h-full object-cover opacity-40"
//           />
//         </div>
//         <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

//         <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12">
//           <motion.button
//             initial={{ x: -20, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             onClick={() => navigate('/blogs')}
//             className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors mb-6 w-fit"
//           >
//             <ArrowLeft size={20} />
//             Back to Blogs
//           </motion.button>

//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold mb-4">
//               {blog.category}
//             </span>
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//               {blog.title}
//             </h1>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Author & Meta Info */}
//       <div className="border-b border-gray-200">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="flex flex-wrap items-center justify-between gap-4"
//           >
//             <div className="flex items-center gap-4">
//               <img
//                 src={blog.authorImage}
//                 alt={blog.authorName}
//                 className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
//               />
//               <div>
//                 <p className="font-semibold text-gray-900 text-lg">
//                   {blog.authorName}
//                 </p>
//                 <div className="flex items-center gap-4 text-sm text-gray-600">
//                   <span className="flex items-center gap-1">
//                     <Calendar size={16} />
//                     {new Date(blog.date).toLocaleDateString('en-US', {
//                       month: 'long',
//                       day: 'numeric',
//                       year: 'numeric',
//                     })}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <Clock size={16} />
//                     {calculateReadTime(blog.content)} min read
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <Eye size={16} />
//                     {blog.views} views
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <button
//               onClick={handleShare}
//               className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
//             >
//               <Share2 size={18} />
//               Share
//             </button>
//           </motion.div>
//         </div>
//       </div>

//       {/* Blog Content */}
//       <motion.div
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.5 }}
//         className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
//       >
//         <div
//           className="prose prose-lg prose-blue max-w-none
//             prose-headings:font-bold prose-headings:text-gray-900
//             prose-p:text-gray-700 prose-p:leading-relaxed
//             prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
//             prose-strong:text-gray-900 prose-strong:font-semibold
//             prose-img:rounded-xl prose-img:shadow-lg
//             prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg
//             prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm"
//           dangerouslySetInnerHTML={{ __html: blog.content }}
//         />
//       </motion.div>

//       {/* Related Blogs */}
//       {relatedBlogs.length > 0 && (
//         <div className="bg-gray-50 py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-8">
//               Related Articles
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {relatedBlogs.map((relatedBlog, index) => (
//                 <motion.div
//                   key={relatedBlog._id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.6 + index * 0.1 }}
//                   onClick={() => navigate(`/blogs/${relatedBlog._id}`)}
//                   className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
//                 >
//                   <div className="relative h-48 overflow-hidden">
//                     <img
//                       src={relatedBlog.image}
//                       alt={relatedBlog.title}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
//                       {relatedBlog.title}
//                     </h3>
//                     <div className="flex items-center gap-2 text-sm text-gray-600">
//                       <img
//                         src={relatedBlog.authorImage}
//                         alt={relatedBlog.authorName}
//                         className="w-6 h-6 rounded-full"
//                       />
//                       <span>{relatedBlog.authorName}</span>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* CTA Section */}
//       <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">
//             Want to read more?
//           </h2>
//           <p className="text-blue-100 mb-8 text-lg">
//             Explore all our articles and stay updated with the latest insights
//           </p>
//           <button
//             onClick={() => navigate('/blogs')}
//             className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
//           >
//             View All Blogs
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;
