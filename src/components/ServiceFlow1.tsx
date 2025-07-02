// // import { GraduationCap, DollarSign, MapPin, User } from 'lucide-react';

// // const services = [
// //   {
// //     icon: User,
// //     title: 'Free',
// //     subtitle: 'Counselling',
// //     color: 'bg-orange-100 border-orange-300 text-orange-600',
// //   },
// //   {
// //     icon: GraduationCap,
// //     title: 'University',
// //     subtitle: 'Application',
// //     color: 'bg-teal-100 border-teal-300 text-teal-600',
// //   },
// //   {
// //     icon: DollarSign,
// //     title: 'Loan',
// //     subtitle: 'Assistance',
// //     color: 'bg-green-100 border-green-300 text-green-600',
// //   },
// //   {
// //     icon: MapPin,
// //     title: 'Visa &',
// //     subtitle: 'Accommodation',
// //     color: 'bg-blue-100 border-blue-300 text-blue-600',
// //   },
// //   {
// //     icon: User,
// //     title: 'Free',
// //     subtitle: 'Counselling',
// //     color: 'bg-orange-100 border-orange-300 text-orange-600',
// //   },
// //   {
// //     icon: GraduationCap,
// //     title: 'University',
// //     subtitle: 'Application',
// //     color: 'bg-teal-100 border-teal-300 text-teal-600',
// //   },
// //   {
// //     icon: DollarSign,
// //     title: 'Loan',
// //     subtitle: 'Assistance',
// //     color: 'bg-green-100 border-green-300 text-green-600',
// //   },
// //   {
// //     icon: MapPin,
// //     title: 'Visa &',
// //     subtitle: 'Accommodation',
// //     color: 'bg-blue-100 border-blue-300 text-blue-600',
// //   },
// // ];

// // const ServiceFlow = () => {
// //   const radius = 180;
// //   const centerX = 200;
// //   const centerY = 300;

// //   return (
// //     <div className="hidden lg:flex items-center justify-center p-8 h-full">
// //       <div className="relative" style={{ width: '400px', height: '700px' }}>
// //         {/* Vertical Semicircle Path */}
// //         <svg
// //           width="400"
// //           height="700"
// //           className="absolute inset-0"
// //           style={{ overflow: 'visible' }}
// //         >
// //           <path
// //             d={`M ${centerX} ${
// //               centerY - radius
// //             } A ${radius} ${radius} 0 0 0 ${centerX} ${centerY + radius}`}
// //             stroke="url(#pathGradient)"
// //             strokeWidth="3"
// //             fill="none"
// //             opacity="0.8"
// //           />
// //           <defs>
// //             <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
// //               <stop offset="0%" stopColor="#fed7aa" />
// //               <stop offset="33%" stopColor="#99f6e4" />
// //               <stop offset="66%" stopColor="#bfdbfe" />
// //               <stop offset="100%" stopColor="#e879f9" />
// //             </linearGradient>
// //           </defs>
// //         </svg>

// //         {/* Services positioned along the vertical semicircle */}
// //         {services.map((service, index) => {
// //           // Calculate angle for each service (from -π/2 to π/2 for vertical semicircle)
// //           const angle =
// //             -Math.PI / 2 + (Math.PI * index) / (services.length - 1);
// //           const x = centerX + radius * Math.cos(angle);
// //           const y = centerY + radius * Math.sin(angle);

// //           return (
// //             <div
// //               key={index}
// //               className="absolute transform -translate-x-1/2 -translate-y-1/2"
// //               style={{
// //                 left: `${x}px`,
// //                 top: `${y}px`,
// //               }}
// //             >
// //               <div
// //                 className={`flex items-center gap-3 px-6 py-4 rounded-full border-2 ${service.color} backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap bg-white/90`}
// //               >
// //                 <div className="p-2 bg-white rounded-full shadow-sm">
// //                   <service.icon className="w-6 h-6" />
// //                 </div>
// //                 <div className="text-left">
// //                   <div className="font-semibold text-lg">{service.title}</div>
// //                   <div className="font-medium">{service.subtitle}</div>
// //                 </div>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ServiceFlow;

// import { GraduationCap, DollarSign, MapPin, User } from 'lucide-react';

// const services = [
//   {
//     icon: User,
//     title: 'Free',
//     subtitle: 'Counselling',
//     color: 'bg-orange-100 border-orange-300 text-orange-600',
//   },
//   {
//     icon: GraduationCap,
//     title: 'University',
//     subtitle: 'Application',
//     color: 'bg-teal-100 border-teal-300 text-teal-600',
//   },
//   {
//     icon: DollarSign,
//     title: 'Loan',
//     subtitle: 'Assistance',
//     color: 'bg-green-100 border-green-300 text-green-600',
//   },
//   {
//     icon: MapPin,
//     title: 'Visa &',
//     subtitle: 'Accommodation',
//     color: 'bg-blue-100 border-blue-300 text-blue-600',
//   },
//   {
//     icon: User,
//     title: 'Free',
//     subtitle: 'Counselling',
//     color: 'bg-orange-100 border-orange-300 text-orange-600',
//   },
//   {
//     icon: GraduationCap,
//     title: 'University',
//     subtitle: 'Application',
//     color: 'bg-teal-100 border-teal-300 text-teal-600',
//   },
//   {
//     icon: DollarSign,
//     title: 'Loan',
//     subtitle: 'Assistance',
//     color: 'bg-green-100 border-green-300 text-green-600',
//   },
//   {
//     icon: MapPin,
//     title: 'Visa &',
//     subtitle: 'Accommodation',
//     color: 'bg-blue-100 border-blue-300 text-blue-600',
//   },
// ];

// const ServiceFlow = () => {
//   const radius = 260; // Increased radius
//   const centerX = 100; // Move left
//   const centerY = 400; // Recenter vertically

//   return (
//     <div className="hidden lg:flex items-center justify-center p-8 h-full">
//       <div className="relative" style={{ width: '500px', height: '800px' }}>
//         {/* Vertical Semicircle Path on Left */}
//         <svg
//           width="500"
//           height="800"
//           className="absolute inset-0"
//           style={{ overflow: 'visible' }}
//         >
//           <path
//             d={`M ${centerX} ${
//               centerY - radius
//             } A ${radius} ${radius} 0 0 0 ${centerX} ${centerY + radius}`}
//             stroke="url(#pathGradient)"
//             strokeWidth="3"
//             fill="none"
//             opacity="0.8"
//           />
//           <defs>
//             <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" stopColor="#fed7aa" />
//               <stop offset="33%" stopColor="#99f6e4" />
//               <stop offset="66%" stopColor="#bfdbfe" />
//               <stop offset="100%" stopColor="#e879f9" />
//             </linearGradient>
//           </defs>
//         </svg>

//         {/* Positioned Services */}
//         {services.map((service, index) => {
//           const angle =
//             -Math.PI / 2 + (Math.PI * index) / (services.length - 1);
//           const x = centerX + radius * Math.cos(angle);
//           const y = centerY + radius * Math.sin(angle);

//           return (
//             <div
//               key={index}
//               className="absolute transform -translate-x-1/2 -translate-y-1/2"
//               style={{ left: `${x}px`, top: `${y}px` }}
//             >
//               <div
//                 className={`flex items-center gap-3 px-6 py-4 rounded-full border-2 ${service.color} backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap bg-white/90`}
//               >
//                 <div className="p-2 bg-white rounded-full shadow-sm">
//                   <service.icon className="w-6 h-6" />
//                 </div>
//                 <div className="text-left">
//                   <div className="font-semibold text-lg">{service.title}</div>
//                   <div className="font-medium">{service.subtitle}</div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ServiceFlow;

// import { GraduationCap, DollarSign, MapPin, User } from 'lucide-react';

// const services = [
//   {
//     icon: User,
//     title: 'Free',
//     subtitle: 'Counselling',
//     color: 'bg-orange-100 border-orange-300 text-orange-600',
//   },
//   {
//     icon: GraduationCap,
//     title: 'University',
//     subtitle: 'Application',
//     color: 'bg-teal-100 border-teal-300 text-teal-600',
//   },
//   {
//     icon: DollarSign,
//     title: 'Loan',
//     subtitle: 'Assistance',
//     color: 'bg-green-100 border-green-300 text-green-600',
//   },
//   {
//     icon: MapPin,
//     title: 'Visa &',
//     subtitle: 'Accommodation',
//     color: 'bg-blue-100 border-blue-300 text-blue-600',
//   },
//   {
//     icon: User,
//     title: 'Free',
//     subtitle: 'Counselling',
//     color: 'bg-orange-100 border-orange-300 text-orange-600',
//   },
//   {
//     icon: GraduationCap,
//     title: 'University',
//     subtitle: 'Application',
//     color: 'bg-teal-100 border-teal-300 text-teal-600',
//   },
//   {
//     icon: DollarSign,
//     title: 'Loan',
//     subtitle: 'Assistance',
//     color: 'bg-green-100 border-green-300 text-green-600',
//   },
//   {
//     icon: MapPin,
//     title: 'Visa &',
//     subtitle: 'Accommodation',
//     color: 'bg-blue-100 border-blue-300 text-blue-600',
//   },
// ];

// const ServiceFlow = () => {
//   const radius = 220;
//   const centerX = 280;
//   const centerY = 350;

//   return (
//     <div className="hidden lg:flex justify-start items-center p-4 h-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       <div className="relative" style={{ width: '550px', height: '800px' }}>
//         {/* Services positioned along the left semicircle */}
//         {services.map((service, index) => {
//           // Position services on the left semicircle with proper spacing
//           const totalAngle = Math.PI * 0.85; // Use 85% of semicircle for better spacing
//           const startAngle = Math.PI / 2 + (Math.PI - totalAngle) / 2; // Start slightly after bottom
//           const angle =
//             startAngle + (totalAngle * index) / (services.length - 1);

//           const x = centerX + radius * Math.cos(angle);
//           const y = centerY + radius * Math.sin(angle);

//           return (
//             <div
//               key={index}
//               className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
//               style={{
//                 left: `${x}px`,
//                 top: `${y}px`,
//                 animation: `fadeInUp 0.5s ease-out ${index * 0.08}s both`,
//               }}
//             >
//               <div
//                 className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 ${service.color} backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-250 hover:scale-105 hover:-translate-y-0.5 whitespace-nowrap bg-white/95 cursor-pointer group`}
//               >
//                 <div className="p-1.5 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-250">
//                   <service.icon className="w-5 h-5 group-hover:scale-105 transition-transform duration-250" />
//                 </div>
//                 <div className="text-left">
//                   <div className="font-semibold text-sm leading-tight">
//                     {service.title}
//                   </div>
//                   <div className="font-medium text-xs opacity-75">
//                     {service.subtitle}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}

//         {/* Left-side Semicircle Path - Behind the service cards */}
//         <svg
//           width="550"
//           height="800"
//           className="absolute inset-0 z-0 "
//           style={{
//             overflow: 'visible',
//             transform: 'rotate(90deg)',
//             transformOrigin: 'center',
//           }}
//         >
//           <path
//             d={`M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 1 0 ${
//               centerX + radius
//             } ${centerY}`}
//             stroke="url(#pathGradient)"
//             strokeWidth="8"
//             fill="none"
//             opacity="0.3"
//           />
//           <defs>
//             <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" stopColor="#fb923c" />
//               <stop offset="25%" stopColor="#2dd4bf" />
//               <stop offset="50%" stopColor="#60a5fa" />
//               <stop offset="75%" stopColor="#a78bfa" />
//               <stop offset="100%" stopColor="#f472b6" />
//             </linearGradient>
//           </defs>
//         </svg>

//         {/* Services positioned along the left semicircle */}
//         {services.map((service, index) => {
//           // Position services on the left semicircle with proper spacing
//           const totalAngle = Math.PI * 0.85; // Use 85% of semicircle for better spacing
//           const startAngle = Math.PI / 2 + (Math.PI - totalAngle) / 2; // Start slightly after bottom
//           const angle =
//             startAngle + (totalAngle * index) / (services.length - 1);

//           const x = centerX + radius * Math.cos(angle);
//           const y = centerY + radius * Math.sin(angle);

//           return (
//             <div
//               key={index}
//               className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
//               style={{
//                 left: `${x}px`,
//                 top: `${y}px`,
//                 animation: `fadeInUp 0.5s ease-out ${index * 0.08}s both`,
//               }}
//             >
//               <div
//                 className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 ${service.color} backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-250 hover:scale-105 hover:-translate-y-0.5 whitespace-nowrap bg-white/95 cursor-pointer group`}
//               >
//                 <div className="p-1.5 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-250">
//                   <service.icon className="w-5 h-5 group-hover:scale-105 transition-transform duration-250" />
//                 </div>
//                 <div className="text-left">
//                   <div className="font-semibold text-sm leading-tight">
//                     {service.title}
//                   </div>
//                   <div className="font-medium text-xs opacity-75">
//                     {service.subtitle}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}

//         {/* Center decoration */}
//         <div
//           className="absolute transform -translate-x-1/2 -translate-y-1/2 z-0"
//           style={{
//             left: `${centerX}px`,
//             top: `${centerY}px`,
//           }}
//         >
//           <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translate(-50%, -50%) translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translate(-50%, -50%) translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ServiceFlow;
// import { GraduationCap, DollarSign, MapPin, User } from 'lucide-react';

// const services = [
//   {
//     icon: User,
//     title: 'Free',
//     subtitle: 'Counselling',
//     color: 'bg-orange-100 border-orange-300 text-orange-600',
//   },
//   {
//     icon: GraduationCap,
//     title: 'University',
//     subtitle: 'Application',
//     color: 'bg-teal-100 border-teal-300 text-teal-600',
//   },
//   {
//     icon: DollarSign,
//     title: 'Loan',
//     subtitle: 'Assistance',
//     color: 'bg-green-100 border-green-300 text-green-600',
//   },
//   {
//     icon: MapPin,
//     title: 'Visa &',
//     subtitle: 'Accommodation',
//     color: 'bg-blue-100 border-blue-300 text-blue-600',
//   },
//   {
//     icon: User,
//     title: 'Free',
//     subtitle: 'Counselling',
//     color: 'bg-orange-100 border-orange-300 text-orange-600',
//   },
//   {
//     icon: GraduationCap,
//     title: 'University',
//     subtitle: 'Application',
//     color: 'bg-teal-100 border-teal-300 text-teal-600',
//   },
//   {
//     icon: DollarSign,
//     title: 'Loan',
//     subtitle: 'Assistance',
//     color: 'bg-green-100 border-green-300 text-green-600',
//   },
//   {
//     icon: MapPin,
//     title: 'Visa &',
//     subtitle: 'Accommodation',
//     color: 'bg-blue-100 border-blue-300 text-blue-600',
//   },
// ];

// const ServiceFlow = () => {
//   const radius = 250;
//   const centerX = 400;
//   const centerY = 400;

//   return (
//     <div className="hidden lg:flex justify-center items-center p-8 h-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       <div className="relative" style={{ width: '800px', height: '800px' }}>
//         {/* Semicircle Path - Behind the service cards */}
//         <svg
//           width="800"
//           height="800"
//           className="absolute inset-0 z-0"
//           style={{
//             overflow: 'visible',
//           }}
//         >
//           <path
//             d={`M ${centerX} ${
//               centerY - radius
//             } A ${radius} ${radius} 0 0 1 ${centerX} ${centerY + radius}`}
//             stroke="url(#pathGradient)"
//             strokeWidth="6"
//             fill="none"
//             opacity="0.4"
//             strokeDasharray="10,5"
//           />
//           <defs>
//             <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" stopColor="#fb923c" />
//               <stop offset="25%" stopColor="#2dd4bf" />
//               <stop offset="50%" stopColor="#60a5fa" />
//               <stop offset="75%" stopColor="#a78bfa" />
//               <stop offset="100%" stopColor="#f472b6" />
//             </linearGradient>
//           </defs>
//         </svg>

//         {/* Services positioned along the left side of semicircle */}
//         {services.map((service, index) => {
//           // Calculate angle with proper spacing to avoid overlap
//           const totalAngle = Math.PI * 0.9; // Use 90% of semicircle for better spacing
//           const startAngle = Math.PI * 0.05; // Start 5% from top
//           const angle =
//             startAngle + (totalAngle * index) / (services.length - 1);

//           // Convert to x,y coordinates on the left side of semicircle
//           const x = centerX - radius * Math.cos(angle);
//           const y = centerY - radius * Math.sin(angle);

//           return (
//             <div
//               key={index}
//               className="absolute z-10"
//               style={{
//                 left: `${x - 80}px`, // Offset to align card end with semicircle
//                 top: `${y - 20}px`, // Center vertically
//                 animation: `fadeInLeft 0.6s ease-out ${index * 0.1}s both`,
//               }}
//             >
//               <div
//                 className={`flex items-center gap-3 px-5 py-3 rounded-2xl border-2 ${service.color} backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-x-1 whitespace-nowrap bg-white/95 cursor-pointer group`}
//               >
//                 <div className="p-2 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:rotate-6">
//                   <service.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
//                 </div>
//                 <div className="text-left">
//                   <div className="font-bold text-base leading-tight">
//                     {service.title} {service.subtitle}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}

//         {/* Center decoration with connecting lines */}
//         <div
//           className="absolute transform -translate-x-1/2 -translate-y-1/2 z-0"
//           style={{
//             left: `${centerX}px`,
//             top: `${centerY}px`,
//           }}
//         >
//           <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 rounded-full opacity-25 animate-pulse shadow-2xl"></div>
//           <div
//             className="absolute inset-2 bg-white rounded-full opacity-60 animate-spin"
//             style={{ animationDuration: '20s' }}
//           ></div>
//           <div className="absolute inset-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-40"></div>
//         </div>

//         {/* Connecting lines from center to cards */}
//         <svg
//           width="800"
//           height="800"
//           className="absolute inset-0 z-0"
//           style={{ overflow: 'visible' }}
//         >
//           {services.map((_, index) => {
//             const totalAngle = Math.PI * 0.9;
//             const startAngle = Math.PI * 0.05;
//             const angle =
//               startAngle + (totalAngle * index) / (services.length - 1);

//             const x = centerX - radius * Math.cos(angle);
//             const y = centerY - radius * Math.sin(angle);

//             return (
//               <line
//                 key={index}
//                 x1={centerX}
//                 y1={centerY}
//                 x2={x}
//                 y2={y}
//                 stroke="url(#lineGradient)"
//                 strokeWidth="2"
//                 opacity="0.2"
//                 strokeDasharray="5,3"
//                 style={{
//                   animation: `drawLine 1s ease-out ${index * 0.15}s both`,
//                 }}
//               />
//             );
//           })}
//           <defs>
//             <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" stopColor="#8b5cf6" />
//               <stop offset="100%" stopColor="#06b6d4" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>

//       <style>{`
//         @keyframes fadeInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes drawLine {
//           from {
//             stroke-dashoffset: 100;
//           }
//           to {
//             stroke-dashoffset: 0;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ServiceFlow;
