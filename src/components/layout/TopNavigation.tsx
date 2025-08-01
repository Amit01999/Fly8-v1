import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import UserRoleToggle, { UserRole } from '../shared/UserRoleToggle';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

type NavItem = {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
};

const navItems: Record<UserRole, NavItem> = {
  student: {
    title: 'For Students',
    links: [
      { label: 'Course Finder', href: '/course-finder' },
      { label: 'Countries', href: '/countries' },
      { label: 'Scholarships', href: '/scholarships' },
      { label: 'Study Guide', href: '/study-guide' },
    ],
  },
  partners: {
    title: 'For Agents',
    links: [
      { label: 'Partner Dashboard', href: '/partner-dashboard' },
      { label: 'Student Management', href: '/student-management' },
      { label: 'Commission Tracking', href: '/commissions' },
      { label: 'Marketing Tools', href: '/marketing-tools' },
    ],
  },
  institution: {
    title: 'For Universities',
    links: [
      { label: 'Student Applications', href: '/applications' },
      { label: 'Profile Management', href: '/profile-management' },
      { label: 'Analytics', href: '/analytics' },
      { label: 'Recruitment Network', href: '/recruitment-network' },
    ],
  },
};

type TopNavigationProps = {
  isVisible: boolean;
};

const TopNavigation = ({ isVisible }: TopNavigationProps) => {
  const [activeRole, setActiveRole] = useState<UserRole>('student');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const closeMenu = () => setIsMenuOpen(false);
  // 🔁 Redirect based on role (except for student)
  // useEffect(() => {
  //   if (activeRole === 'student') {
  //     navigate('/'); // go to home
  //   } else if (activeRole === 'partners') {
  //     navigate('/partners');
  //   } else if (activeRole === 'institution') {
  //     navigate('/institution');
  //   }
  // }, [activeRole]);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full bg-blue-950  dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden z-40 fixed top-0 left-0 right-0"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex justify-center ">
              <div className="w-full max-w-md">
                {/* <UserRoleToggle
                  activeRole={activeRole}
                  onChange={role => {
                    setActiveRole(role);
                    setIsMenuOpen(true);
                  }}
                /> */}
                <UserRoleToggle
                  activeRole={activeRole}
                  onChange={role => {
                    setActiveRole(role);
                    setIsMenuOpen(true);
                  }}
                  roleLinks={{
                    student: '',
                    partners: '/partners',
                    institution: '/institution',
                  }}
                />
              </div>
            </div>

            {/* <AnimatePresence mode="wait">
              {isMenuOpen && (
                <motion.div
                  key={activeRole}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, staggerChildren: 0.1 }}
                  className="py-4"
                >
                  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {navItems[activeRole].links.map((link, index) => (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={link.href}
                          onClick={closeMenu}
                          className="group flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 border border-gray-100 dark:border-gray-800 hover:border-primary/20 dark:hover:border-primary/20"
                        >
                          <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-primary">
                            {link.label}
                          </span>
                          <motion.div
                            className="ml-auto text-gray-400 group-hover:text-primary"
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }}
                          >
                            <ExternalLink size={16} />
                          </motion.div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence> */}

            {/* <div className="flex justify-center bg-orange-300 mt-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-xs font-medium text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary hover:bg-primary/5"
              >
                {isMenuOpen
                  ? 'Close Menu'
                  : 'Explore ' + navItems[activeRole].title}
              </Button>
            </div> */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TopNavigation;
