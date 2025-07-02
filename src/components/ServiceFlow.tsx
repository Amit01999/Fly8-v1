// main code
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
//   const radius = 260;
//   const centerX = 260;
//   const centerY = 420;
//   const cardOffset = 100; // Adjust how far left cards are from the curve

//   return (
//     <div className="hidden lg:flex items-center justify-center p-8 bg-gray-50 min-h-screen">
//       <div className="relative" style={{ width: '700px', height: '850px' }}>
//         {/* Semicircle Path */}
//         <svg width="700" height="850" className="absolute inset-0">
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

//         {/* Service Cards */}
//         {services.map((service, index) => {
//           const total = services.length + 1; // Add extra step to add padding
//           const angle = -Math.PI / 2 + (Math.PI * (index + 1)) / total;

//           const x = centerX - radius * Math.cos(angle) - cardOffset;
//           const y = centerY + radius * Math.sin(angle);

//           return (
//             <div
//               key={index}
//               className="absolute transform -translate-y-1/2"
//               style={{ left: `${x}px`, top: `${y}px` }}
//             >
//               <div
//                 className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 ${service.color} backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap bg-white/90`}
//               >
//                 <div className="p-1 bg-white rounded-full shadow-sm">
//                   <service.icon className="w-5 h-5" />
//                 </div>
//                 <div className="text-sm font-medium leading-none whitespace-nowrap">
//                   {service.title} {service.subtitle}
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
// import { GraduationCap, DollarSign, MapPin, User, Globe } from 'lucide-react';
// import logo from '../assets/logo/logo2.png';

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
//   const radius = 200;
//   const centerX = 350;
//   const centerY = 400;

//   return (
//     <div className="hidden lg:flex items-center justify-center p-8 bg-gray-50 min-h-screen">
//       <div className="relative" style={{ width: '700px', height: '800px' }}>
//         {/* Full Circle Path */}
//         <svg width="700" height="800" className="absolute inset-0">
//           <circle
//             cx={centerX}
//             cy={centerY}
//             r={radius}
//             stroke="url(#pathGradient)"
//             strokeWidth="3"
//             fill="none"
//             opacity="0.8"
//           />
//           <defs>
//             <linearGradient
//               id="pathGradient"
//               x1="0%"
//               y1="0%"
//               x2="100%"
//               y2="100%"
//             >
//               <stop offset="0%" stopColor="#fed7aa" />
//               <stop offset="33%" stopColor="#99f6e4" />
//               <stop offset="66%" stopColor="#bfdbfe" />
//               <stop offset="100%" stopColor="#e879f9" />
//             </linearGradient>
//           </defs>
//         </svg>

//         {/* Globe in the center */}
//         <div
//           className="absolute rounded-full  p-6  flex items-center justify-center"
//           style={{
//             left: `${centerX - 40}px`,
//             top: `${centerY - 40}px`,
//             width: '80px',
//             height: '80px',
//           }}
//         >
//           <img className="w-full h-full object-contain" src={logo} alt="" />
//         </div>

//         {/* Service Cards Around the Circle */}
//         {services.map((service, index) => {
//           const angle = (2 * Math.PI * index) / services.length;

//           const x = centerX + radius * Math.cos(angle);
//           const y = centerY + radius * Math.sin(angle);

//           return (
//             <div
//               key={index}
//               className="absolute transform -translate-x-1/2 -translate-y-1/2"
//               style={{ left: `${x}px`, top: `${y}px` }}
//             >
//               <div
//                 className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 ${service.color} backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap bg-white/90`}
//               >
//                 <div className="p-1 bg-white rounded-full shadow-sm">
//                   <service.icon className="w-5 h-5" />
//                 </div>
//                 <div className="text-sm font-medium leading-none whitespace-nowrap">
//                   {service.title} {service.subtitle}
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

import { GraduationCap, DollarSign, MapPin, User, Globe } from 'lucide-react';
import logo from '../assets/logo/logo2.png';

const services = [
  {
    icon: User,
    title: 'Free',
    subtitle: 'Counselling',
    color: 'bg-orange-100/90 border-orange-300 text-orange-700',
  },
  {
    icon: GraduationCap,
    title: 'University',
    subtitle: 'Application',
    color: 'bg-teal-100/90 border-teal-300 text-teal-700',
  },
  {
    icon: DollarSign,
    title: 'Loan',
    subtitle: 'Assistance',
    color: 'bg-green-100/90 border-green-300 text-green-700',
  },
  {
    icon: MapPin,
    title: 'Visa &',
    subtitle: 'Accommodation',
    color: 'bg-blue-100/90 border-blue-300 text-blue-700',
  },
  {
    icon: User,
    title: 'Free',
    subtitle: 'Counselling',
    color: 'bg-purple-100/90 border-purple-300 text-purple-700',
  },
  {
    icon: GraduationCap,
    title: 'University',
    subtitle: 'Application',
    color: 'bg-pink-100/90 border-pink-300 text-pink-700',
  },
  {
    icon: DollarSign,
    title: 'Loan',
    subtitle: 'Assistance',
    color: 'bg-indigo-100/90 border-indigo-300 text-indigo-700',
  },
  {
    icon: MapPin,
    title: 'Visa &',
    subtitle: 'Accommodation',
    color: 'bg-cyan-100/90 border-cyan-300 text-cyan-700',
  },
];

const ServiceFlow = () => {
  const radius = 200;
  const centerX = 350;
  const centerY = 400;

  return (
    <div className="hidden lg:flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="relative" style={{ width: '700px', height: '800px' }}>
        {/* Globe Background Circle */}
        <div
          className="absolute rounded-full shadow-2xl bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 overflow-hidden"
          style={{
            left: `${centerX - radius}px`,
            top: `${centerY - radius}px`,
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
          }}
        >
          {/* Globe Image */}
          <img
            src="https://clipart-library.com/newhp/Earth-animated-globe-clipart-free-images-2.png"
            alt="Globe"
            className="w-full h-full object-cover opacity-80 mix-blend-overlay"
          />

          {/* Globe Overlay Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-transparent to-blue-800/40"></div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" className="w-full h-full">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-full border-4 border-white/30 shadow-inner"></div>
        </div>

        {/* Animated Ring Effect */}
        <div
          className="absolute rounded-full border-2 border-blue-300/50 animate-pulse"
          style={{
            left: `${centerX - radius - 20}px`,
            top: `${centerY - radius - 20}px`,
            width: `${radius * 2 + 40}px`,
            height: `${radius * 2 + 40}px`,
          }}
        ></div>

        {/* Logo in the Center */}
        <div
          className="absolute rounded-full  backdrop-blur-md shadow-2xl border-4 border-white/50 p-4 flex items-center justify-center transform hover:scale-110 transition-all duration-300"
          style={{
            left: `${centerX - 50}px`,
            top: `${centerY - 50}px`,
            width: '100px',
            height: '100px',
            zIndex: 20,
          }}
        >
          <img src={logo} alt="" />
        </div>

        {/* Service Cards Floating Around the Globe */}
        {services.map((service, index) => {
          const angle = (2 * Math.PI * index) / services.length;
          const cardRadius = radius + 80; // Positioned outside the globe

          const x = centerX + cardRadius * Math.cos(angle);
          const y = centerY + cardRadius * Math.sin(angle);

          return (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-fade-in"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div
                className={`flex items-center gap-3 px-5 py-3 rounded-2xl border-2 ${service.color} backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 whitespace-nowrap bg-white/95 group cursor-pointer transform hover:-translate-y-2`}
              >
                <div className="p-2 bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="text-sm font-semibold leading-tight">
                  <div className="font-bold">{service.title}</div>
                  <div className="text-xs opacity-80">{service.subtitle}</div>
                </div>
              </div>

              {/* Connection Line to Globe */}
              <div
                className="absolute w-0.5 bg-gradient-to-r from-blue-300 to-transparent opacity-30"
                style={{
                  left: '50%',
                  top: '50%',
                  height: '60px',
                  transform: `rotate(${(angle * 180) / Math.PI + 180}deg)`,
                  transformOrigin: 'top center',
                }}
              ></div>
            </div>
          );
        })}

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-300 rounded-full opacity-40 animate-pulse"
              style={{
                left: `${Math.random() * 700}px`,
                top: `${Math.random() * 800}px`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s',
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFlow;
