// import React, { useState, useEffect } from 'react';
// import { Plus, Edit2, Trash2, Eye, Search, Filter } from 'lucide-react';
// import BlogForm from './BlogForm';
// import axios from 'axios';

// const BlogsAdmin = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState(false);
//   const [editingBlog, setEditingBlog] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filterCategory, setFilterCategory] = useState('all');

//   const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const fetchBlogs = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${API_URL}/api/blogs?published=all`);
//       setBlogs(response.data.data || []);
//     } catch (error) {
//       console.error('Error fetching blogs:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async id => {
//     if (!window.confirm('Are you sure you want to delete this blog?')) return;

//     try {
//       await axios.delete(`${API_URL}/api/blogs/${id}`);
//       setBlogs(blogs.filter(blog => blog._id !== id));
//       alert('Blog deleted successfully!');
//     } catch (error) {
//       console.error('Error deleting blog:', error);
//       alert('Failed to delete blog');
//     }
//   };

//   const handleEdit = blog => {
//     setEditingBlog(blog);
//     setShowForm(true);
//   };

//   const handleFormClose = () => {
//     setShowForm(false);
//     setEditingBlog(null);
//     fetchBlogs();
//   };

//   const filteredBlogs = blogs.filter(blog => {
//     const matchesSearch =
//       blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       blog.authorName.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesCategory =
//       filterCategory === 'all' || blog.category === filterCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const categories = [...new Set(blogs.map(blog => blog.category))];

//   if (showForm) {
//     return <BlogForm blog={editingBlog} onClose={handleFormClose} />;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900">
//                 Blog Management
//               </h1>
//               <p className="text-gray-600 mt-1">
//                 Manage your blog posts and content
//               </p>
//             </div>
//             <button
//               onClick={() => setShowForm(true)}
//               className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               <Plus size={20} />
//               Create New Blog
//             </button>
//           </div>

//           {/* Search and Filter */}
//           <div className="flex flex-col md:flex-row gap-4 mt-6">
//             <div className="flex-1 relative">
//               <Search
//                 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//                 size={20}
//               />
//               <input
//                 type="text"
//                 placeholder="Search blogs..."
//                 value={searchQuery}
//                 onChange={e => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//             <div className="relative">
//               <Filter
//                 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//                 size={20}
//               />
//               <select
//                 value={filterCategory}
//                 onChange={e => setFilterCategory(e.target.value)}
//                 className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
//               >
//                 <option value="all">All Categories</option>
//                 {categories.map(cat => (
//                   <option key={cat} value={cat}>
//                     {cat}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Blog Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//           <div className="bg-white rounded-lg shadow-sm p-6">
//             <h3 className="text-gray-600 text-sm font-medium">Total Blogs</h3>
//             <p className="text-3xl font-bold text-gray-900 mt-2">
//               {blogs.length}
//             </p>
//           </div>
//           <div className="bg-white rounded-lg shadow-sm p-6">
//             <h3 className="text-gray-600 text-sm font-medium">Published</h3>
//             <p className="text-3xl font-bold text-green-600 mt-2">
//               {blogs.filter(b => b.published).length}
//             </p>
//           </div>
//           <div className="bg-white rounded-lg shadow-sm p-6">
//             <h3 className="text-gray-600 text-sm font-medium">Total Views</h3>
//             <p className="text-3xl font-bold text-blue-600 mt-2">
//               {blogs.reduce((sum, blog) => sum + (blog.views || 0), 0)}
//             </p>
//           </div>
//         </div>

//         {/* Blogs List */}
//         {loading ? (
//           <div className="flex justify-center items-center py-20">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//           </div>
//         ) : filteredBlogs.length === 0 ? (
//           <div className="bg-white rounded-lg shadow-sm p-12 text-center">
//             <p className="text-gray-500 text-lg">No blogs found</p>
//           </div>
//         ) : (
//           <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead className="bg-gray-50 border-b border-gray-200">
//                   <tr>
//                     <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Blog
//                     </th>
//                     <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Author
//                     </th>
//                     <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Category
//                     </th>
//                     <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Views
//                     </th>
//                     <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Status
//                     </th>
//                     <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Date
//                     </th>
//                     <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {filteredBlogs.map(blog => (
//                     <tr
//                       key={blog._id}
//                       className="hover:bg-gray-50 transition-colors"
//                     >
//                       <td className="px-6 py-4">
//                         <div className="flex items-center gap-4">
//                           <img
//                             src={blog.image}
//                             alt={blog.title}
//                             className="w-16 h-16 object-cover rounded-lg"
//                           />
//                           <div>
//                             <p className="font-medium text-gray-900 line-clamp-1">
//                               {blog.title}
//                             </p>
//                             <p className="text-sm text-gray-500">
//                               {blog.layout}
//                             </p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="flex items-center gap-2">
//                           <img
//                             src={blog.authorImage}
//                             alt={blog.authorName}
//                             className="w-8 h-8 rounded-full object-cover"
//                           />
//                           <span className="text-sm text-gray-900">
//                             {blog.authorName}
//                           </span>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
//                           {blog.category}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="flex items-center gap-1 text-gray-600">
//                           <Eye size={16} />
//                           <span className="text-sm">{blog.views || 0}</span>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <span
//                           className={`px-3 py-1 text-xs font-medium rounded-full ${
//                             blog.published
//                               ? 'bg-green-100 text-green-800'
//                               : 'bg-gray-100 text-gray-800'
//                           }`}
//                         >
//                           {blog.published ? 'Published' : 'Draft'}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 text-sm text-gray-600">
//                         {new Date(blog.date).toLocaleDateString()}
//                       </td>
//                       <td className="px-6 py-4 text-right">
//                         <div className="flex items-center justify-end gap-2">
//                           <button
//                             onClick={() => handleEdit(blog)}
//                             className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//                             title="Edit"
//                           >
//                             <Edit2 size={18} />
//                           </button>
//                           <button
//                             onClick={() => handleDelete(blog._id)}
//                             className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//                             title="Delete"
//                           >
//                             <Trash2 size={18} />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BlogsAdmin;
