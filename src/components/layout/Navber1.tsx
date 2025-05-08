import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import TopNavigation from './TopNavigation';
import ServicesDrawer from './ServicesDrawe';
import logo from '../../assets/logo/logo2.png';

const Navber1 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showTopNav, setShowTopNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [servicesOpen, setServicesOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Apply scroll styling
      setIsScrolled(currentScrollY > 10);

      // Only show TopNavigation if at the top (less than 50px for smooth experience)
      if (currentScrollY < 50) {
        setShowTopNav(true);
      } else {
        setShowTopNav(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Countries', href: '/countries' },
    { name: 'Programs', href: '/programs' },
    { name: 'Services', href: '#', onClick: () => setServicesOpen(true) },
    { name: 'Contact', href: '/contact' },
    { name: 'AI Assistant', href: '/aiassistant', isHighlighted: true },
  ];

  // Calculate header top position based on TopNavigation visibility
  const headerTopClass = showTopNav ? 'top-12' : 'top-0';

  return (
    <>
      <TopNavigation isVisible={showTopNav} />

      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${headerTopClass} ${
          isScrolled
            ? 'bg-white dark:bg-gray-900 shadow-md py-3'
            : 'bg-transparent py-4'
        }`}
      >
        {/* Logo and Navigation */}
        <Link to="/">
          <div className="max-container flex items-center justify-between">
            <div className="text-blue-600 font-bold text-2xl flex items-center gap-2">
              <div className="relative w-24">
                <img src={logo} alt="Fly8" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={link.onClick}
                  className={`font-medium transition-colors duration-300 flex items-center ${
                    !link.isHighlighted
                      ? isScrolled
                        ? 'text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary'
                        : 'text-gray-800 hover:text-primary dark:text-gray-200 dark:hover:text-primary'
                      : ''
                  }`}
                >
                  {link.isHighlighted ? (
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-500 to-indigo-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="relative px-2 py-2 bg-white rounded-lg flex items-center space-x-2 border border-indigo-300/30 group-hover:border-emerald-300/50 transition-all duration-300">
                        <Sparkles className="w-4 h-4 text-blue-600 group-hover:text-secondary transition-colors duration-300" />
                        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-violet-600 to-indigo-600 group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                          AI Assistant
                        </span>
                      </div>
                    </div>
                  ) : (
                    <>
                      {link.name}
                      {link.name === 'Services' && (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </>
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <Link to="/signin/student">
                <Button
                  variant="outline"
                  className="rounded-full px-6 border-primary/20 hover:border-primary hover:bg-primary hover:text-white "
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
              className="lg:hidden text-gray-700 dark:text-gray-200"
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
                  onClick={() => {
                    if (link.onClick) link.onClick();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.isHighlighted ? (
                    <div className="relative group w-fit">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-500 to-indigo-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="relative px-2 py-2 bg-white rounded-lg flex items-center space-x-2 border border-indigo-300/30 group-hover:border-emerald-300/50 transition-all duration-300">
                        <Sparkles className="w-4 h-4 text-blue-600 group-hover:text-secondary transition-colors duration-300" />
                        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-violet-600 to-indigo-600 group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                          AI Assistant
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg flex items-center justify-between">
                      <span>{link.name}</span>
                      {link.name === 'Services' && (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </div>
                  )}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 px-5 pt-4">
                <Link to="/signin/student">
                  <Button
                    variant="outline"
                    className="rounded-lg w-full border-primary/20"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Log In
                  </Button>
                </Link>
                <Link to="/signup/student">
                  <Button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                    className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-lg w-full"
                  >
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
