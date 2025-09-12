import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TopNavigation from './TopNavigation';
import ServicesDrawer from './ServicesDrawe';
import logo from '../../../public/logo.png';
import { useAppSelector } from '@/hooks/redux/SelectorAndDispatchHooks';
import ProfileDropdown from './ProfileDropdown';

const Navber1 = () => {
  // Get token from localStorage
  const token = useAppSelector(state => state.auth.token);
  const user = useAppSelector(state => state.profile.user);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showTopNav, setShowTopNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);

  // Memoized scroll handler for better performance
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Apply scroll styling with a small threshold to prevent jitter
    setIsScrolled(currentScrollY > 10);

    // Only show TopNavigation if at the top (less than 50px for smooth experience)
    setShowTopNav(currentScrollY < 50);

    setLastScrollY(currentScrollY);
  }, []);

  useEffect(() => {
    // Throttle scroll events for better performance
    let ticking = false;

    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScrollHandler, {
      passive: true,
    });
    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, [handleScroll]);

  const navLinks = [
    { name: 'Home', href: '' },
    { name: 'Countries', href: '/countries' },
    { name: 'Universities', href: '/universities' },
    { name: 'Programs', href: '/programs' },
    { name: 'Services', href: '#', onClick: () => setServicesOpen(true) },
    { name: 'Events', href: '#', hasDropdown: true },
    {
      name: 'AI Assistant',
      href: 'AiMatch',
      isHighlighted: true,
    },
  ];

  const eventsDropdownItems = [
    { name: 'Upcoming Events', href: '/gstu' },
    { name: 'Past Events', href: '/past-event' },
  ];

  // Calculate header top position based on TopNavigation visibility
  const headerTopClass = showTopNav ? 'top-12' : 'top-0';

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[data-events-dropdown]')) {
        setEventsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  const handleLinkClick = useCallback(() => {
    setIsMobileMenuOpen(false);
    setEventsDropdownOpen(false);
  }, []);
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <>
      <TopNavigation isVisible={showTopNav} />

      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ease-in-out ${headerTopClass} ${
          isScrolled
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-container flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-blue-600 font-bold text-2xl flex items-center gap-2">
              <div className="relative w-20 h-14">
                <img
                  src={logo}
                  alt="Fly8"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <div
                key={link.name}
                className="relative"
                data-events-dropdown={link.hasDropdown ? 'true' : undefined}
              >
                <Link
                  to={link.href}
                  onClick={link.onClick}
                  onMouseEnter={() =>
                    link.hasDropdown && setEventsDropdownOpen(true)
                  }
                  onMouseLeave={() =>
                    link.hasDropdown && setEventsDropdownOpen(false)
                  }
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
                      <div className="relative px-3 py-2 bg-white rounded-lg flex items-center space-x-2 border border-indigo-300/30 group-hover:border-emerald-300/50 transition-all duration-300">
                        <Sparkles className="w-4 h-4 text-blue-600 group-hover:text-secondary transition-colors duration-300" />
                        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-violet-600 to-indigo-600 group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                          AI Assistant
                        </span>
                      </div>
                    </div>
                  ) : (
                    <>
                      {link.name}
                      {(link.name === 'Services' || link.hasDropdown) && (
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                      )}
                    </>
                  )}
                </Link>

                {/* Events Dropdown */}
                {/* {link.hasDropdown && (
                  <AnimatePresence>
                    {eventsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
                        onMouseEnter={() => setEventsDropdownOpen(true)}
                        onMouseLeave={() => setEventsDropdownOpen(false)}
                      >
                        {eventsDropdownItems.map((item, index) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                            onClick={handleLinkClick}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )} */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {eventsDropdownOpen && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                        onMouseEnter={() => setEventsDropdownOpen(true)}
                        onMouseLeave={() => setEventsDropdownOpen(false)}
                      >
                        <div className="p-2">
                          {eventsDropdownItems.map((item, idx) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 rounded-xl transition-all duration-300 group"
                              onClick={handleLinkClick}
                            >
                              <span className="flex-1">{item.name}</span>
                              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Auth Buttons or Profile */}
          <div className="hidden lg:flex items-center">
            {token === null ? (
              <div className="flex items-center space-x-4">
                <Link to="/signin/student">
                  <Button
                    variant="outline"
                    className="rounded-full px-6 border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Log In
                  </Button>
                </Link>
                <Link to="/signup/student">
                  <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300">
                    Sign Up
                  </Button>
                </Link>
              </div>
            ) : (
              <ProfileDropdown />
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700 dark:text-gray-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg mt-2 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="max-container py-4 flex flex-col space-y-2">
                {navLinks.map(link => (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <div>
                        <button
                          className="w-full px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg flex items-center justify-between transition-colors duration-200"
                          onClick={() =>
                            setEventsDropdownOpen(!eventsDropdownOpen)
                          }
                        >
                          <span>{link.name}</span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              eventsDropdownOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {eventsDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-4 mt-2 space-y-1"
                            >
                              {eventsDropdownItems.map(item => (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  className="block px-5 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                                  onClick={handleLinkClick}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={() => {
                          if (link.onClick) link.onClick();
                          handleLinkClick();
                        }}
                      >
                        {link.isHighlighted ? (
                          <div className="relative group w-fit mx-5">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-500 to-indigo-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                            <div className="relative px-3 py-2 bg-white rounded-lg flex items-center space-x-2 border border-indigo-300/30 group-hover:border-emerald-300/50 transition-all duration-300">
                              <Sparkles className="w-4 h-4 text-blue-600 group-hover:text-secondary transition-colors duration-300" />
                              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-violet-600 to-indigo-600 group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                                AI Assistant
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className="px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg flex items-center justify-between transition-colors duration-200">
                            <span>{link.name}</span>
                            {link.name === 'Services' && (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </div>
                        )}
                      </Link>
                    )}
                  </div>
                ))}

                {token === null && (
                  <div className="flex flex-col space-y-3 px-5 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Link to="/signin/student" onClick={handleLinkClick}>
                      <Button
                        variant="outline"
                        className="rounded-lg w-full border-primary/20 hover:border-primary transition-all duration-300"
                      >
                        Log In
                      </Button>
                    </Link>
                    <Link to="/signup/student" onClick={handleLinkClick}>
                      <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-lg w-full transition-all duration-300">
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                )}

                {token !== null && (
                  <div className="px-5 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <ProfileDropdown />
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <ServicesDrawer
        isOpen={servicesOpen}
        onClose={() => setServicesOpen(false)}
      />
    </>
  );
};

export default Navber1;
