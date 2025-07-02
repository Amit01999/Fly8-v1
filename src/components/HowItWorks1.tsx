// import React, { useRef, useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   UserPlus,
//   Search,
//   FileCheck,
//   Plane,
//   Briefcase,
//   ArrowRight,
//   ChevronDown,
// } from 'lucide-react';
// import { useIsMobile } from '@/hooks/use-mobile';
// import { ScrollArea } from '@/components/ui/scroll-area';

// const steps = [
//   {
//     id: 1,
//     icon: UserPlus,
//     title: 'Sign Up',
//     description:
//       'Create your free profile and tell us about your academic goals and preferences.',
//     color: 'text-blue-600',
//     bgColor: 'bg-blue-50',
//     borderColor: 'border-blue-200',
//     glowColor: 'from-blue-400/30 to-transparent',
//   },
//   {
//     id: 2,
//     icon: Search,
//     title: 'Search',
//     description:
//       'Explore programs that match your profile with our AI-powered recommendation engine.',
//     color: 'text-purple-600',
//     bgColor: 'bg-purple-50',
//     borderColor: 'border-purple-200',
//     glowColor: 'from-purple-400/30 to-transparent',
//   },
//   {
//     id: 3,
//     icon: FileCheck,
//     title: 'Apply',
//     description:
//       'Submit applications with expert guidance and track status in real-time.',
//     color: 'text-emerald-600',
//     bgColor: 'bg-emerald-50',
//     borderColor: 'border-emerald-200',
//     glowColor: 'from-emerald-400/30 to-transparent',
//   },
//   {
//     id: 4,
//     icon: Plane,
//     title: 'Travel',
//     description:
//       'Prepare for your journey with visa support, housing options, and travel arrangements.',
//     color: 'text-orange-600',
//     bgColor: 'bg-orange-50',
//     borderColor: 'border-orange-200',
//     glowColor: 'from-orange-400/30 to-transparent',
//   },
//   {
//     id: 5,
//     icon: Briefcase,
//     title: 'Work Abroad',
//     description:
//       'Access career opportunities and networking events to launch your global career.',
//     color: 'text-pink-600',
//     bgColor: 'bg-pink-50',
//     borderColor: 'border-pink-200',
//     glowColor: 'from-pink-400/30 to-transparent',
//   },
// ];

// const HowItWorks = () => {
//   const isMobile = useIsMobile();
//   const containerRef = useRef(null);
//   const timelineRef = useRef(null);
//   const [activeStep, setActiveStep] = useState(0);
//   const [progressHeight, setProgressHeight] = useState(0);

//   // References for each step
//   const stepRefs = useRef(steps.map(() => React.createRef()));

//   // Track scroll position and update timeline accordingly
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!timelineRef.current) return;

//       const timelineRect = timelineRef.current.getBoundingClientRect();
//       const timelineTop = timelineRect.top;
//       const timelineBottom = timelineRect.bottom;
//       const timelineHeight = timelineRect.height;
//       const viewportHeight = window.innerHeight;

//       // If timeline is completely above viewport
//       if (timelineBottom < 0) {
//         setProgressHeight(100); // 100% filled
//       }
//       // If timeline is completely below viewport
//       else if (timelineTop > viewportHeight) {
//         setProgressHeight(0); // 0% filled
//       }
//       // If timeline is partially in viewport
//       else {
//         // Calculate the visible portion based on the distance from the top of the viewport
//         // This is the key part for up/down responsiveness
//         const visibleRatio =
//           (viewportHeight - timelineTop) / (timelineHeight + viewportHeight);
//         const height = Math.max(0, Math.min(100, visibleRatio * 100));
//         setProgressHeight(height);
//       }

//       // Also update active step for other animations
//       // Map progress to step index (0 to steps.length-1)
//       const stepProgress = progressHeight / 100;
//       const newActiveStep = Math.min(
//         steps.length - 1,
//         Math.max(0, Math.floor(stepProgress * steps.length))
//       );

//       setActiveStep(newActiveStep);
//     };

//     window.addEventListener('scroll', handleScroll);
//     // Trigger once on mount to initialize
//     handleScroll();

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [progressHeight]);

//   return (
//     <section
//       className="py-10 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
//       ref={containerRef}
//     >
//       <div className="container px-4 mx-auto max-w-6xl">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: 'easeOut' }}
//           viewport={{ once: true }}
//           className="text-center mb-10"
//         >
//           <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             How Fly8 Works
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             A simple, guided process to help you achieve your international
//             education goals
//           </p>
//         </motion.div>

//         {/* Desktop Timeline */}
//         <div className="hidden md:block relative" ref={timelineRef}>
//           {/* Timeline color progress bar - now directly tied to scroll position */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1.5 bg-gray-200 rounded-full overflow-hidden">
//             <div
//               className="w-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-500 rounded-full origin-top"
//               style={{
//                 height: `${progressHeight}%`,
//                 transition: 'height 0.05s linear', // Even smoother transitions
//               }}
//             />
//           </div>

//           <div className="space-y-28">
//             {steps.map((step, index) => (
//               <motion.div
//                 key={step.id}
//                 className="relative"
//                 ref={stepRefs.current[index]}
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.8, delay: index * 0.1 }}
//                 viewport={{ once: true, margin: '-80px' }}
//               >
//                 <div
//                   className={`flex items-center ${
//                     index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
//                   }`}
//                 >
//                   {/* Timeline node */}
//                   <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
//                     <motion.div
//                       className={`flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 ${
//                         activeStep >= index
//                           ? step.borderColor
//                           : 'border-gray-300'
//                       } shadow-lg transition-all duration-300`}
//                       animate={{
//                         scale: activeStep === index ? [1, 1.1, 1] : 1,
//                         boxShadow:
//                           activeStep === index
//                             ? '0 0 20px rgba(66, 153, 225, 0.6)'
//                             : '0 4px 6px rgba(0, 0, 0, 0.1)',
//                       }}
//                       transition={{
//                         scale: {
//                           repeat: activeStep === index ? Infinity : 0,
//                           duration: 2,
//                         },
//                         boxShadow: { duration: 0.5 },
//                       }}
//                     >
//                       <span
//                         className={`font-bold text-xl ${
//                           activeStep >= index ? step.color : 'text-gray-400'
//                         } transition-colors duration-300`}
//                       >
//                         {step.id}
//                       </span>
//                     </motion.div>

//                     {/* Connection line to content */}
//                     <motion.div
//                       initial={{ width: 0 }}
//                       animate={{ width: '40px' }}
//                       transition={{ duration: 0.3, delay: 0.2 }}
//                       className={`absolute top-1/2 -mt-0.5 h-1.5 ${
//                         activeStep >= index
//                           ? 'bg-gradient-to-r ' +
//                             (index % 2 === 0
//                               ? 'from-transparent to-blue-500'
//                               : 'from-blue-500 to-transparent')
//                           : 'bg-gray-300'
//                       } ${
//                         index % 2 === 0 ? '-right-[40px]' : '-left-[40px]'
//                       } transition-colors duration-300`}
//                     />
//                   </div>

//                   {/* Content box */}
//                   <div
//                     className={`w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}
//                   >
//                     <motion.div
//                       className={`relative bg-white p-7 rounded-xl shadow-lg border ${
//                         activeStep >= index
//                           ? step.borderColor
//                           : 'border-gray-200'
//                       } backdrop-blur-sm bg-opacity-95 transition-all duration-300`}
//                       whileInView={{
//                         y: [10, 0],
//                         opacity: [0, 1],
//                       }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       viewport={{ once: true }}
//                       whileHover={{
//                         y: -5,
//                         boxShadow: '0 15px 30px -10px rgba(66, 153, 225, 0.4)',
//                       }}
//                     >
//                       {/* Arrow pointing to timeline */}
//                       <motion.div
//                         className={`absolute top-1/2 -mt-3 ${
//                           index % 2 === 0
//                             ? 'left-full -ml-3'
//                             : 'right-full -mr-3'
//                         }`}
//                         animate={{
//                           x: index % 2 === 0 ? [-5, 0, -5] : [5, 0, 5],
//                           opacity: activeStep >= index ? 1 : 0.4,
//                         }}
//                         transition={{
//                           x: { repeat: Infinity, duration: 1.5 },
//                           opacity: { duration: 0.3 },
//                         }}
//                       >
//                         <ArrowRight
//                           size={28}
//                           className={`${
//                             activeStep >= index ? step.color : 'text-gray-300'
//                           } transition-colors duration-300 ${
//                             index % 2 === 0 ? 'rotate-180' : ''
//                           }`}
//                         />
//                       </motion.div>

//                       <div className="flex items-center mb-4">
//                         <motion.div
//                           className={`${
//                             activeStep >= index ? step.bgColor : 'bg-gray-100'
//                           } p-3.5 rounded-lg mr-5 shadow-md transition-colors duration-300`}
//                           whileHover={{
//                             rotate: [0, 5, -5, 0],
//                             transition: { duration: 0.5 },
//                           }}
//                         >
//                           <step.icon
//                             size={28}
//                             className={
//                               activeStep >= index ? step.color : 'text-gray-400'
//                             }
//                           />
//                         </motion.div>
//                         <h3
//                           className={`text-2xl font-bold ${
//                             activeStep >= index ? step.color : 'text-gray-400'
//                           } transition-colors duration-300`}
//                         >
//                           {step.title}
//                         </h3>
//                       </div>
//                       <p
//                         className={`text-lg ${
//                           activeStep >= index
//                             ? 'text-gray-700'
//                             : 'text-gray-400'
//                         } transition-colors duration-300`}
//                       >
//                         {step.description}
//                       </p>

//                       {/* Subtle glow effect at the bottom */}
//                       <div
//                         className={`absolute bottom-0 left-0 w-full h-1/2 bg-gradient-radial ${
//                           activeStep >= index
//                             ? step.glowColor
//                             : 'from-gray-200/30 to-transparent'
//                         } opacity-40 rounded-b-xl pointer-events-none transition-colors duration-300`}
//                       ></div>
//                     </motion.div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Mobile Timeline - Vertical Flow - Optimized */}
//         <div className="md:hidden relative" ref={timelineRef}>
//           <ScrollArea className="h-[calc(100vh-200px)] pb-20 overflow-auto pr-4">
//             {/* Mobile vertical timeline line - now using direct scroll position */}
//             <div className="absolute left-8 top-0 bottom-0 w-1.5 bg-gray-200 rounded-full overflow-hidden">
//               <div
//                 className="w-full bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full origin-top"
//                 style={{
//                   height: `${progressHeight}%`,
//                   transition: 'height 0.05s linear', // Even smoother transitions
//                 }}
//               />
//             </div>

//             <div className="space-y-16 relative pb-10">
//               {steps.map((step, index) => (
//                 <motion.div
//                   key={step.id}
//                   ref={stepRefs.current[index]}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true, margin: '-10px' }}
//                   className="relative pl-20"
//                 >
//                   {/* Timeline node */}
//                   <div className="absolute left-0 top-4 z-10 transform -translate-x-1/2">
//                     <motion.div
//                       className={`flex items-center justify-center w-14 h-14 rounded-full bg-white border-4 ${
//                         activeStep >= index
//                           ? step.borderColor
//                           : 'border-gray-300'
//                       } shadow-md transition-all duration-300`}
//                       animate={{
//                         scale: activeStep === index ? [1, 1.1, 1] : 1,
//                         boxShadow:
//                           activeStep === index
//                             ? '0 0 15px rgba(66, 153, 225, 0.5)'
//                             : '0 4px 6px rgba(0, 0, 0, 0.1)',
//                       }}
//                       transition={{
//                         scale: {
//                           repeat: activeStep === index ? Infinity : 0,
//                           duration: 2,
//                         },
//                         boxShadow: { duration: 0.5 },
//                       }}
//                     >
//                       <span
//                         className={`font-bold text-lg ${
//                           activeStep >= index ? step.color : 'text-gray-400'
//                         } transition-colors duration-300`}
//                       >
//                         {step.id}
//                       </span>
//                     </motion.div>

//                     {/* Connection line to content */}
//                     <motion.div
//                       initial={{ width: 0 }}
//                       animate={{ width: '16px' }}
//                       transition={{ duration: 0.3, delay: 0.2 }}
//                       className={`absolute top-1/2 -mt-0.5 h-1.5 ${
//                         activeStep >= index
//                           ? 'bg-gradient-to-r from-blue-500 to-transparent'
//                           : 'bg-gray-300'
//                       } left-full transition-colors duration-300`}
//                     />
//                   </div>

//                   {/* Content box */}
//                   <motion.div
//                     className={`relative bg-white p-5 rounded-xl shadow-md border ${
//                       activeStep >= index ? step.borderColor : 'border-gray-200'
//                     } backdrop-blur-sm bg-opacity-95 transition-all duration-300`}
//                     whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
//                     transition={{ duration: 0.4 }}
//                     whileHover={{ x: 5 }}
//                   >
//                     {/* Arrow pointing to node */}
//                     <motion.div
//                       className="absolute -left-4 top-8 transform -translate-y-1/2"
//                       animate={{
//                         x: [-3, 0, -3],
//                         opacity: activeStep >= index ? 1 : 0.4,
//                       }}
//                       transition={{
//                         x: { repeat: Infinity, duration: 1.5 },
//                         opacity: { duration: 0.3 },
//                       }}
//                     >
//                       <ArrowRight
//                         size={20}
//                         className={
//                           activeStep >= index ? step.color : 'text-gray-300'
//                         }
//                       />
//                     </motion.div>

//                     <div className="flex items-center mb-3">
//                       <motion.div
//                         className={`${
//                           activeStep >= index ? step.bgColor : 'bg-gray-100'
//                         } p-3 rounded-lg mr-3 shadow-sm transition-colors duration-300`}
//                         whileHover={{
//                           rotate: [0, 10, -10, 0],
//                           transition: { duration: 0.5 },
//                         }}
//                       >
//                         <step.icon
//                           size={22}
//                           className={
//                             activeStep >= index ? step.color : 'text-gray-400'
//                           }
//                         />
//                       </motion.div>
//                       <h3
//                         className={`text-xl font-bold ${
//                           activeStep >= index ? step.color : 'text-gray-400'
//                         } transition-colors duration-300`}
//                       >
//                         {step.title}
//                       </h3>
//                     </div>
//                     <p
//                       className={`text-sm ${
//                         activeStep >= index ? 'text-gray-700' : 'text-gray-400'
//                       } transition-colors duration-300`}
//                     >
//                       {step.description}
//                     </p>

//                     {/* Show arrow for all steps except the last one */}
//                     {index < steps.length - 1 && (
//                       <motion.div
//                         className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8"
//                         animate={{
//                           y: [0, 5, 0],
//                           opacity: activeStep === index ? 1 : 0.5,
//                         }}
//                         transition={{
//                           y: { repeat: Infinity, duration: 1.2 },
//                           opacity: { duration: 0.3 },
//                         }}
//                       >
//                         <ChevronDown
//                           size={24}
//                           className={
//                             activeStep >= index ? step.color : 'text-gray-300'
//                           }
//                         />
//                       </motion.div>
//                     )}

//                     {/* Subtle glow effect */}
//                     <div
//                       className={`absolute bottom-0 left-0 w-full h-1/2 bg-gradient-radial ${
//                         activeStep >= index
//                           ? step.glowColor
//                           : 'from-gray-200/30 to-transparent'
//                       } opacity-40 rounded-b-xl pointer-events-none transition-colors duration-300`}
//                     ></div>
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </div>
//           </ScrollArea>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//           viewport={{ once: true }}
//           className="mt-16 text-center"
//         >
//           <motion.button
//             className="px-10 py-4 text-white font-medium rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-xl transition-all duration-300"
//             whileHover={{
//               y: -5,
//               boxShadow: '0 15px 30px -10px rgba(66, 153, 225, 0.5)',
//             }}
//             whileTap={{ y: 0, scale: 0.98 }}
//           >
//             Get Started Today
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;
