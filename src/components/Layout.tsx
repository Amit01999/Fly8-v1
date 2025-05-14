// import React from 'react';
// import Header from '@/components/Header';
// import ModernFooter from '@/components/ModernFooter';
// import ChatbotButton from '@/components/ChatbotButton';

// interface LayoutProps {
//   children: React.ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <main className="flex-grow ">{children}</main>
//       <ModernFooter />
//       <ChatbotButton />
//     </div>
//   );
// };

// export default Layout;

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navber1 from './layout/Navber1';
import ModernFooter from '@/components/ModernFooter';
import ChatbotButton from '@/components/ChatbotButton';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.getElementById(href.substring(1));
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 100,
              behavior: 'smooth',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      <Navber1 />
      <main className="pt-32">
        <Outlet />
      </main>
      <ModernFooter />
      <ChatbotButton />
    </div>
  );
};

export default Layout;
