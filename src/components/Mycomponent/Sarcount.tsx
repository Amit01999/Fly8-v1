// import React, { useEffect, useRef, useState } from 'react';
// import { motion, useInView } from 'framer-motion';
// import {
//   Users,
//   School,
//   GraduationCap,
//   Award,
//   MapPin,
//   Clock,
// } from 'lucide-react';

// const statsData = [
//   {
//     id: 1,
//     icon: Users,
//     countTo: 125000,
//     label: 'Student Success Stories',
//     suffix: '+',
//     color: 'text-primary',
//   },
//   {
//     id: 2,
//     icon: School,
//     countTo: 1500,
//     label: 'Global Partner Institutions',
//     suffix: '+',
//     color: 'text-secondary',
//   },
//   {
//     id: 3,
//     icon: GraduationCap,
//     countTo: 98,
//     label: 'Placement Success Rate',
//     suffix: '%',
//     color: 'text-accent',
//   },
//   {
//     id: 4,
//     icon: MapPin,
//     countTo: 50,
//     label: 'Countries Represented',
//     suffix: '+',
//     color: 'text-primary',
//   },
//   {
//     id: 5,
//     icon: Clock,
//     countTo: 24,
//     label: 'Hours Support',
//     suffix: '/7',
//     color: 'text-secondary',
//   },
//   {
//     id: 6,
//     icon: Award,
//     countTo: 15,
//     label: 'Years of Excellence',
//     suffix: '+',
//     color: 'text-accent',
//   },
// ];

// const AnimatedCounter = ({ value, suffix = '' }) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });

//   useEffect(() => {
//     if (isInView) {
//       const duration = 2000; // ms
//       const frameDuration = 1000 / 60; // 60fps
//       const totalFrames = Math.round(duration / frameDuration);
//       let frame = 0;

//       const counter = setInterval(() => {
//         frame++;
//         const progress = frame / totalFrames;
//         const currentCount = Math.round(value * progress);

//         setCount(currentCount);

//         if (frame === totalFrames) {
//           clearInterval(counter);
//         }
//       }, frameDuration);

//       return () => clearInterval(counter);
//     }
//   }, [value, isInView]);

//   return (
//     <span ref={ref}>
//       {count}
//       {suffix}
//     </span>
//   );
// };
// const StatsCounter = () => {
//   return (
//     <section id="about" className="bg-white py-5 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <motion.h2
//             className="text-[56px] leading-[1.25] font-extrabold font-gothic line-clamp-4 hover:underline text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             Transforming Global Education Access
//           </motion.h2>
//           <motion.p
//             className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             We're on a mission to democratize international education by
//             connecting students with life-changing opportunities worldwide.
//           </motion.p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//           {statsData.map(stat => (
//             <motion.div
//               key={stat.id}
//               className="rounded-2xl p-6 text-center flex flex-col items-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 shadow-md hover:shadow-xl transition duration-300"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: stat.id * 0.1 }}
//               viewport={{ once: true, margin: '-50px' }}
//             >
//               <div
//                 className={`p-6 rounded-full bg-white shadow-inner mb-4 text-indigo-500`}
//               >
//                 <stat.icon size={28} />
//               </div>
//               <h3 className="text-3xl md:text-4xl font-bold mb-2 text-secondary ">
//                 <AnimatedCounter value={stat.countTo} suffix={stat.suffix} />
//               </h3>
//               <p className="text-sm text-gray-600">{stat.label}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsCounter;
