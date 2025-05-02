// import { motion } from 'framer-motion';

// interface AuthLayoutProps {
//   children: React.ReactNode;
// }

// const AuthLayout = ({ children }: AuthLayoutProps) => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-sky-100  to-blue-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="w-full max-w-md space-y-8"
//       >
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-primary mb-2">Fly8</h2>
//           <p className="text-muted-foreground">
//             Your Global Education Platform
//           </p>
//         </div>
//         {children}
//       </motion.div>
//     </div>
//   );
// };

// export default AuthLayout;
// import { useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import studentimg from '@/assets/picture/authimage/studentauthimage.png';
// import partnerimg from '@/assets/picture/authimage/patner.png';
// import institutionimg from '@/assets/picture/authimage/university.png';

// interface AuthLayoutProps {
//   children: React.ReactNode;
// }

// const AuthLayout = ({ children }: AuthLayoutProps) => {
//   const location = useLocation();

//   // Configuration based on path
//   const getConfig = () => {
//     if (location.pathname.includes('/signup/student')) {
//       return {
//         image: studentimg,
//         gradient: 'from-blue-100 via-indigo-50 to-violet-100',
//         accentColor: 'bg-indigo-600',
//         primaryGradient: 'from-indigo-600 to-blue-700',
//         title: 'Student Portal',
//         overlay: 'bg-indigo-900/20'
//       };
//     } else if (location.pathname.includes('/signup/partner')) {
//       return {
//         image: partnerimg,
//         gradient: 'from-emerald-100 via-teal-50 to-cyan-100',
//         accentColor: 'bg-teal-600',
//         primaryGradient: 'from-teal-600 to-emerald-700',
//         title: 'Partner Access',
//         overlay: 'bg-teal-900/20'
//       };
//     } else if (location.pathname.includes('/signup/institution')) {
//       return {
//         image: institutionimg,
//         gradient: 'from-amber-100 via-orange-50 to-yellow-100',
//         accentColor: 'bg-orange-600',
//         primaryGradient: 'from-orange-600 to-amber-700',
//         title: 'Institution Hub',
//         overlay: 'bg-orange-900/20'
//       };
//     } else {
//       return {
//         image: studentimg,
//         gradient: 'from-blue-100 via-indigo-50 to-violet-100',
//         accentColor: 'bg-indigo-600',
//         primaryGradient: 'from-indigo-600 to-blue-700',
//         title: 'Welcome',
//         overlay: 'bg-indigo-900/20'
//       };
//     }
//   };

//   const config = getConfig();

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   };

//   return (
//     <div className={`min-h-screen flex flex-col lg:flex-row bg-gradient-to-br ${config.gradient}`}>
//       {/* Left Side - Image and Branding */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="relative w-full lg:w-2/5 h-64 lg:h-auto overflow-hidden"
//       >
//         {/* Decorative elements */}
//         <div className="absolute inset-0 z-0">
//           <div className={`absolute inset-0 ${config.overlay} backdrop-blur-sm`}></div>
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.2, delay: 0.3 }}
//             className="absolute inset-10 rounded-full bg-white/10 backdrop-blur-md"
//           ></motion.div>
//         </div>

//         {/* Branded content */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="text-center mb-6"
//           >
//             <h1 className={`text-5xl font-black bg-gradient-to-r ${config.primaryGradient} bg-clip-text text-transparent`}>
//               Fly8
//             </h1>
//             <div className="h-1 w-16 mx-auto mt-2 bg-gradient-to-r from-white/80 to-white/20 rounded-full"></div>
//           </motion.div>

//           <motion.img
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             src={config.image}
//             alt="Signup Illustration"
//             className="object-contain max-h-64 max-w-full"
//           />

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.8 }}
//             className="mt-6 text-lg font-medium text-white/90 backdrop-blur-sm px-4 py-2 rounded-full bg-white/10"
//           >
//             {config.title}
//           </motion.div>
//         </div>

//         {/* Bottom gradient overlay */}
//         <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent z-5"></div>
//       </motion.div>

//       {/* Right Side - Form Area */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="flex flex-col justify-center items-center w-full lg:w-3/5 p-6 sm:p-8 lg:p-12"
//       >
//         <motion.div
//           variants={itemVariants}
//           className="w-full max-w-xl space-y-6"
//         >
//           <div className="bg-white/80 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-xl border border-white/40 relative overflow-hidden">
//             {/* Decorative elements */}
//             <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br from-white/40 to-white/10 blur-xl"></div>
//             <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-gradient-to-tr from-white/40 to-white/5 blur-xl"></div>

//             {/* Content */}
//             <motion.div
//               variants={itemVariants}
//               className="relative z-10 space-y-6"
//             >
//               <div className="text-center mb-8">
//                 <h2 className={`text-3xl font-bold bg-gradient-to-r ${config.primaryGradient} bg-clip-text text-transparent`}>
//                   {config.title}
//                 </h2>
//                 <p className="text-gray-600 mt-2 text-sm">
//                   Your Global Education Platform
//                 </p>
//                 <div className={`h-1 w-16 mx-auto mt-3 ${config.accentColor} rounded-full`}></div>
//               </div>

//               <motion.div
//                 variants={itemVariants}
//                 className="w-full relative z-10"
//               >
//                 {children}
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Footer */}
//           <motion.div
//             variants={itemVariants}
//             className="text-center text-sm text-gray-600"
//           >
//             <p>© {new Date().getFullYear()} Fly8 Education. All rights reserved.</p>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default AuthLayout;

import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import studentimg from '@/assets/picture/authimage/studentauthimage.png';
import partnerimg from '@/assets/picture/authimage/patner.png';
import institutionimg from '@/assets/picture/authimage/university.png';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const location = useLocation();

  const getImageForPath = () => {
    if (location.pathname.includes('/signup/student')) {
      return studentimg;
    } else if (location.pathname.includes('/signup/partner')) {
      return partnerimg;
    } else if (location.pathname.includes('/signup/institution')) {
      return institutionimg;
    } else {
      return studentimg;
    }
  };

  const getThemeConfig = () => {
    if (location.pathname.includes('/signup/student')) {
      return {
        gradient: 'from-indigo-50 via-blue-50 to-violet-50',
        overlayGradient: 'from-indigo-500/20 via-blue-500/20 to-violet-500/20',
        cardGradient: 'from-white/80 to-indigo-50/80',
        primaryGradient: 'from-indigo-600 to-blue-500',
        accentColor: 'bg-indigo-600',
        formAccent: 'ring-indigo-300 focus:ring-indigo-500',
        imageShadow: 'shadow-indigo-500/40',
        tagline: 'Your Educational Journey Starts Here',
      };
    } else if (location.pathname.includes('/signup/partner')) {
      return {
        gradient: 'from-emerald-50 via-teal-50 to-cyan-50',
        overlayGradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
        cardGradient: 'from-white/80 to-teal-50/80',
        primaryGradient: 'from-teal-600 to-emerald-500',
        accentColor: 'bg-teal-600',
        formAccent: 'ring-teal-300 focus:ring-teal-500',
        imageShadow: 'shadow-teal-500/40',
        tagline: 'Partner With Global Talent',
      };
    } else if (location.pathname.includes('/signup/institution')) {
      return {
        gradient: 'from-amber-50 via-orange-50 to-yellow-50',
        overlayGradient: 'from-amber-500/20 via-orange-500/20 to-yellow-500/20',
        cardGradient: 'from-white/80 to-amber-50/80',
        primaryGradient: 'from-orange-600 to-amber-500',
        accentColor: 'bg-orange-600',
        formAccent: 'ring-orange-300 focus:ring-orange-500',
        imageShadow: 'shadow-orange-500/40',
        tagline: 'Empower Your Institution Globally',
      };
    } else {
      return {
        gradient: 'from-indigo-50 via-blue-50 to-violet-50',
        overlayGradient: 'from-indigo-500/20 via-blue-500/20 to-violet-500/20',
        cardGradient: 'from-white/80 to-indigo-50/80',
        primaryGradient: 'from-indigo-600 to-blue-500',
        accentColor: 'bg-indigo-600',
        formAccent: 'ring-indigo-300 focus:ring-indigo-500',
        imageShadow: 'shadow-indigo-500/40',
        tagline: 'Your Educational Journey Starts Here',
      };
    }
  };

  const theme = getThemeConfig();
  const image = getImageForPath();

  // Stagger animation for child elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      className={`min-h-screen flex flex-col lg:flex-row bg-gradient-to-br ${theme.gradient} animate-gradient-shift bg-[length:400%_400%] overflow-hidden`}
    >
      {/* Left Side - Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full lg:w-2/5 h-64 lg:h-auto overflow-hidden"
      >
        {/* Background gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${theme.overlayGradient} animate-gradient-shift bg-[length:400%_400%] z-0`}
        ></div>

        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-20 z-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          }}
        ></div>

        {/* Image container with floating animation */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20 p-6 lg:p-12"
          animate={{ y: [0, -10, 0] }}
          transition={{
            y: {
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <div
            className={`relative p-2 rounded-2xl ${theme.imageShadow} bg-white/30 backdrop-blur-sm`}
          >
            <img
              src={image}
              alt="Signup Illustration"
              className="object-contain max-h-full max-w-full rounded-xl"
            />
            {/* Subtle glow effect */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-pulse-subtle"></div>
          </div>
        </motion.div>

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
      </motion.div>

      {/* Right Side - Form */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center items-center w-full lg:w-3/5 p-4 sm:p-8 lg:p-12 xl:p-16"
      >
        <motion.div
          variants={itemVariants}
          className={`w-full max-w-2xl bg-gradient-to-br ${theme.cardGradient} backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-xl border border-white/40`}
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2
              className={`text-4xl md:text-5xl font-extrabold bg-gradient-to-r ${theme.primaryGradient} bg-clip-text text-transparent mb-3`}
            >
              Fly8
            </h2>
            <p className="text-base text-gray-600 font-medium">
              {theme.tagline}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full relative">
            {/* Subtle decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-br from-white/80 to-transparent blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-br from-white/80 to-transparent blur-xl"></div>

            {/* Form content */}
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthLayout;
