// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Calendar, User, ArrowRight, Search } from 'lucide-react';
// import { motion } from 'framer-motion';
// import axios from 'axios';

// const Blogs = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const navigate = useNavigate();

//   const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const fetchBlogs = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${API_URL}/api/blogs`);
//       setBlogs(response.data.data || []);
//     } catch (error) {
//       console.error('Error fetching blogs:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const filteredBlogs = blogs.filter(blog => {
//     const matchesSearch = blog.title
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase());
//     const matchesCategory =
//       selectedCategory === 'all' || blog.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const categories = ['all', ...new Set(blogs.map(blog => blog.category))];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.5 },
//     },
//   };

//   const BlogCard = ({ blog, layout }) => {
//     const layoutStyles = {
//       layout1: 'bg-white hover:shadow-2xl border border-gray-200',
//       layout2: 'bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-xl',
//       layout3:
//         'bg-gray-900 text-white hover:shadow-2xl hover:shadow-blue-500/20',
//     };

//     return (
//       <motion.div
//         variants={itemVariants}
//         whileHover={{ y: -8, transition: { duration: 0.2 } }}
//         onClick={() => navigate(`/blogs/${blog._id}`)}
//         className={`rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
//           layoutStyles[layout] || layoutStyles.layout1
//         }`}
//       >
//         {/* Image */}
//         <div className="relative h-56 overflow-hidden">
//           <motion.img
//             src={blog.image}
//             alt={blog.title}
//             className="w-full h-full object-cover"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           />
//           <div className="absolute top-4 right-4">
//             <span
//               className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                 layout === 'layout3'
//                   ? 'bg-white text-gray-900'
//                   : 'bg-blue-600 text-white'
//               }`}
//             >
//               {blog.category}
//             </span>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-6">
//           <h3
//             className={`text-xl font-bold mb-3 line-clamp-2 ${
//               layout === 'layout3' ? 'text-white' : 'text-gray-900'
//             }`}
//           >
//             {blog.title}
//           </h3>

//           <div
//             className={`flex items-center gap-4 mb-4 text-sm ${
//               layout === 'layout3' ? 'text-gray-300' : 'text-gray-600'
//             }`}
//           >
//             <div className="flex items-center gap-2">
//               <img
//                 src={blog.authorImage}
//                 alt={blog.authorName}
//                 className="w-8 h-8 rounded-full object-cover"
//               />
//               <span>{blog.authorName}</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <Calendar size={16} />
//               <span>
//                 {new Date(blog.date).toLocaleDateString('en-US', {
//                   month: 'short',
//                   day: 'numeric',
//                   year: 'numeric',
//                 })}
//               </span>
//             </div>
//           </div>

//           <div
//             className={`text-sm mb-4 line-clamp-3 ${
//               layout === 'layout3' ? 'text-gray-400' : 'text-gray-600'
//             }`}
//             dangerouslySetInnerHTML={{
//               __html:
//                 blog.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
//             }}
//           />

//           <button
//             className={`flex items-center gap-2 font-medium transition-all group ${
//               layout === 'layout3'
//                 ? 'text-blue-400 hover:text-blue-300'
//                 : 'text-blue-600 hover:text-blue-700'
//             }`}
//           >
//             Read More
//             <ArrowRight
//               size={16}
//               className="group-hover:translate-x-1 transition-transform"
//             />
//           </button>
//         </div>
//       </motion.div>
//     );
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center"
//           >
//             <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Blog</h1>
//             <p className="text-xl text-blue-100 max-w-2xl mx-auto">
//               Insights, stories, and updates from the Fly8 team
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* Search and Filter */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="bg-white rounded-xl shadow-lg p-6"
//         >
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="flex-1 relative">
//               <Search
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
//                 size={20}
//               />
//               <input
//                 type="text"
//                 placeholder="Search blogs..."
//                 value={searchQuery}
//                 onChange={e => setSearchQuery(e.target.value)}
//                 className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//             <div className="flex gap-2 overflow-x-auto pb-2">
//               {categories.map(category => (
//                 <button
//                   key={category}
//                   onClick={() => setSelectedCategory(category)}
//                   className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
//                     selectedCategory === category
//                       ? 'bg-blue-600 text-white'
//                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   {category.charAt(0).toUpperCase() + category.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Blogs Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         {filteredBlogs.length === 0 ? (
//           <div className="text-center py-20">
//             <p className="text-gray-500 text-lg">No blogs found</p>
//           </div>
//         ) : (
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {filteredBlogs.map(blog => (
//               <BlogCard key={blog._id} blog={blog} layout={blog.layout} />
//             ))}
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Blogs;
