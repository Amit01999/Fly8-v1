// import React, { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { motion } from 'framer-motion';
// import { Menu, X } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'Countries', href: '/countries' },
//     { name: 'Courses', href: '/courses' },
//     { name: 'Universities', href: '/universities' },
//     { name: 'Testimonials', href: '/testimonials' },
//     { name: 'Contact', href: '/contact' },
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white shadow-md py-4' : 'bg-white py-4'
//       }`}
//     >
//       <div className="max-container flex items-center justify-between">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="flex items-center"
//         >
//           <Link to="/" className="flex items-center">
//             <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//               Fly8
//             </h1>
//           </Link>
//         </motion.div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-8">
//           {navLinks.map(link => (
//             <Link
//               key={link.name}
//               to={link.href}
//               className={`font-medium transition-colors duration-300 ${
//                 isScrolled
//                   ? 'text-gray-700 hover:text-primary'
//                   : 'text-gray-800 hover:text-primary'
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </nav>

//         <div className="hidden md:flex items-center space-x-4">
//           <Link to="/signin">
//             <Button variant="outline" className="rounded-full px-6">
//               Log In
//             </Button>
//           </Link>
//           <Link to="/signup">
//             <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-full px-6">
//               Get Started
//             </Button>
//           </Link>
//         </div>

//         {/* Mobile menu button */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {isMobileMenuOpen && (
//         <motion.div
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: 'auto' }}
//           className="md:hidden bg-white border-t border-gray-100 mt-3"
//         >
//           <div className="max-container py-4 flex flex-col space-y-4">
//             {navLinks.map(link => (
//               <Link
//                 key={link.name}
//                 to={link.href}
//                 className="px-5 py-2 text-gray-700 hover:text-primary"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <div className="flex flex-col space-y-3 px-5 pt-2">
//               <Link to="/signin">
//                 <Button variant="outline" className="rounded-full">
//                   Log In
//                 </Button>
//               </Link>
//               <Link to="/signup">
//                 <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-full">
//                   Get Started
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  ChevronDown,
  Menu,
  X,
  Search,
  Globe,
  BookOpen,
  School,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeAudience, setActiveAudience] = useState('students');

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const audienceTabs = [
    { id: 'students', name: 'For Students', icon: <BookOpen size={16} /> },
    { id: 'agents', name: 'For Agents', icon: <Users size={16} /> },
    {
      id: 'universities',
      name: 'For Universities',
      icon: <School size={16} />,
    },
    // { id: 'enterprises', name: 'For Enterprises', icon: <Globe size={16} /> },
    // { id: 'governments', name: 'For Governments', icon: <Globe size={16} /> },
  ];

  const navLinks = [
    { name: 'Countries', href: '/countries', icon: <Globe size={18} /> },
    { name: 'Universities', href: '/universities', icon: <School size={18} /> },
    { name: 'Courses', href: '/courses', icon: <BookOpen size={18} /> },
    { name: 'Resources', href: '/resources', icon: <Users size={18} /> },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="relative">
      {/* Header wrapper with position handling */}
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        {/* Audience selector bar - hidden on scroll */}
        <div
          className={`transition-all duration-500 overflow-hidden bg-gradient-to-r from-indigo-900 to-blue-900 text-white
            ${scrollPosition > 50 ? 'h-0 opacity-0' : 'h-12 opacity-100'}`}
        >
          <div className="max-w-7xl mx-auto px-4 h-full">
            <div className="flex items-center h-full justify-between">
              <div className="flex items-center space-x-1">
                {audienceTabs.map(tab => (
                  <button
                    key={tab.id}
                    className={`py-3 px-4 text-sm font-medium flex items-center gap-1.5 transition-colors ${
                      activeAudience === tab.id
                        ? 'text-white bg-primary rounded-t-md'
                        : 'text-blue-200 hover:text-white'
                    }`}
                    onClick={() => setActiveAudience(tab.id)}
                  >
                    {tab.icon}
                    {tab.name}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-3">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-blue-200 hover:text-white"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-blue-200 hover:text-white"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-blue-200 hover:text-white"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary navigation - quick links - hidden on scroll */}
        <div
          className={`transition-all duration-500 overflow-hidden bg-slate-300
            ${scrollPosition > 50 ? 'h-0 opacity-0' : 'h-10 opacity-100'}`}
        >
          <div className="max-w-7xl mx-auto px-4 h-full">
            <div className="flex justify-between items-center h-full">
              <div className="flex space-x-6 text-xs">
                <Link
                  to="/careers"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Careers
                </Link>
                <Link
                  to="/study-abroad"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Study abroad
                </Link>
                <Link
                  to="/contact-us"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Contact us
                </Link>
              </div>

              <div className="hidden md:block">
                <div className="flex border border-blue-200 rounded-full bg-white overflow-hidden h-7">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="py-0 px-3 outline-none text-xs w-48"
                  />
                  <button className="bg-blue-100 px-2 text-blue-600">
                    <Search size={12} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation - always visible, stick to top when scrolled */}
        <div
          className={`transition-all duration-300 bg-white border-b border-gray-200 
            ${scrollPosition > 50 ? 'py-4 shadow-lg -mt-2' : 'py-4'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <div
                  className={`transition-all duration-300 flex items-center ${
                    scrollPosition > 50 ? 'scale-90' : ''
                  }`}
                >
                  {/* Hexagon logo */}
                  <div className="text-blue-600 font-bold text-2xl flex items-center gap-2">
                    <div className="relative w-10 h-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transform rotate-45"></div>
                      <div className="absolute inset-1 bg-white rounded-lg transform rotate-45 flex items-center justify-center">
                        <span className="transform -rotate-45 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-lg">
                          F8
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        Fly8
                      </span>
                      {scrollPosition <= 50 && (
                        <span className="block text-xs text-gray-500 -mt-1">
                          Global Education
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>

              {/* Audience indicator - only visible when scrolled */}
              {scrollPosition > 50 && (
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium px-4 py-1 rounded-full">
                    {audienceTabs.find(tab => tab.id === activeAudience)?.name}
                  </div>
                </div>
              )}

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-1">
                {navLinks.map(link => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="px-3 py-2 rounded-full font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 flex items-center transition-colors"
                  >
                    {link.icon && (
                      <span className="mr-1.5 text-blue-600">{link.icon}</span>
                    )}
                    {link.name}
                    {link.name === 'Countries' ||
                    link.name === 'Universities' ||
                    link.name === 'Courses' ||
                    link.name === 'Resources' ? (
                      <ChevronDown size={16} className="ml-1" />
                    ) : null}
                  </Link>
                ))}
              </nav>

              {/* Auth buttons */}
              <div className="hidden lg:flex items-center space-x-2">
                <Link to="/signin">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full px-5  border-blue-600 text-blue-600 hover:bg-secondary"
                  >
                    Log In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-primary to-secondary px-5 hover:from-blue-600 hover:to-purple-600 rounded-full"
                  >
                    Register
                  </Button>
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                className="lg:hidden text-gray-700 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div
        className={`${
          scrollPosition > 50 ? 'h-16' : 'h-36'
        } transition-all duration-300`}
      ></div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-xl z-50 p-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <div className="text-blue-600 font-bold text-xl">Fly8</div>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            <div className="mb-6">
              <h3 className="font-medium text-gray-500 uppercase text-xs mb-3">
                I am a...
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {audienceTabs.map(tab => (
                  <button
                    key={tab.id}
                    className={`py-2 px-3 text-xs font-medium rounded-md flex flex-col items-center gap-1 ${
                      activeAudience === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveAudience(tab.id)}
                  >
                    {tab.icon}
                    {tab.name.replace('For ', '')}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex border border-gray-300 rounded-lg bg-white overflow-hidden">
                <input
                  type="text"
                  placeholder="Search courses, universities..."
                  className="py-2 px-3 outline-none text-sm flex-1"
                />
                <button className="bg-blue-50 px-3 text-blue-600 border-l border-gray-300">
                  <Search size={18} />
                </button>
              </div>
            </div>

            <nav className="mb-6">
              <h3 className="font-medium text-gray-500 uppercase text-xs mb-3">
                Navigation
              </h3>
              <div className="space-y-1">
                {navLinks.map(link => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="py-2 px-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md font-medium text-sm flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.icon && (
                      <span className="mr-2 text-blue-600">{link.icon}</span>
                    )}
                    {link.name}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="border-t border-gray-100 pt-4 space-y-2">
              <Link to="/signin" className="block">
                <Button
                  variant="outline"
                  className="w-full rounded-full border-blue-600 text-blue-600"
                >
                  Log In
                </Button>
              </Link>
              <Link to="/signup" className="block">
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-full">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
