import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import TopNavigation from './TopNavigation';
import ServicesDrawer from './ServicesDrawe';

const Navber1 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showTopNav, setShowTopNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set the header styling based on scroll position
      setIsScrolled(currentScrollY > 10);

      // Hide top nav when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowTopNav(false);
      } else if (currentScrollY < lastScrollY) {
        setShowTopNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Countries', href: '/countries' },
    { name: 'Courses', href: '/courses' },
    { name: 'Universities', href: '/universities' },
    { name: 'Services', href: '#', onClick: () => setServicesOpen(true) },
    { name: 'Contact', href: '/contact' },
  ];

  // Calculate header top position based on TopNavigation visibility
  const headerTopClass = showTopNav ? 'top-12' : 'top-0';

  return (
    <>
      <TopNavigation isVisible={showTopNav} />

      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${headerTopClass} ${
          isScrolled
            ? 'bg-white dark:bg-gray-900 shadow-md py-2'
            : 'bg-transparent py-4'
        }`}
      >
        {/* Logo and Navigation */}
        <Link to="/">
          <div className="max-container flex items-center justify-between">
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

                <span className="block text-xs text-secondary 500 -mt-[2px]">
                  Global Education
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={link.onClick}
                  className={`font-medium transition-colors duration-300 flex items-center ${
                    isScrolled
                      ? 'text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary'
                      : 'text-gray-800 hover:text-primary dark:text-gray-200 dark:hover:text-primary'
                  }`}
                >
                  {link.name}
                  {link.name === 'Services' && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Link to="/signin/student">
                <Button
                  variant="outline"
                  className="rounded-full px-6 border-primary/20 hover:border-primary hover:bg-primary/5"
                >
                  Log In
                </Button>
              </Link>
              <Link to="/signup/student">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 dark:text-gray-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Link>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg mt-2"
          >
            <div className="max-container py-4 flex flex-col space-y-2">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg flex items-center justify-between"
                  onClick={() => {
                    if (link.onClick) link.onClick();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <span>{link.name}</span>
                  {link.name === 'Services' && (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 px-5 pt-4">
                <Link to="/signin/student">
                  <Button
                    variant="outline"
                    className="rounded-lg w-full border-primary/20"
                  >
                    Log In
                  </Button>
                </Link>
                <Link to="/signup/student">
                  <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-lg w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      <ServicesDrawer
        isOpen={servicesOpen}
        onClose={() => setServicesOpen(false)}
      />
    </>
  );
};

export default Navber1;
