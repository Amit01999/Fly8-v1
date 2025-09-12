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
type TopNavigationProps = {
  isVisible: boolean;
};

const TopNavigation = ({ isVisible }: TopNavigationProps) => {
  const [activeRole, setActiveRole] = useState<UserRole>('student');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const closeMenu = () => setIsMenuOpen(false);

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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TopNavigation;
