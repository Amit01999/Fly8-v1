import React, { useState, useEffect, useRef } from 'react';
import Harverd from '../assets/picture/UniversityLogo/Harvard_University.png';
import Stanford from '../assets/picture/UniversityLogo/Stanford University.png';
import MIT from '../assets/picture/UniversityLogo/MIT.png';
import Oxford from '../assets/picture/UniversityLogo/Oxford University.png';
import Cambridge from '../assets/picture/UniversityLogo/Cambridge University.png';
import Yale from '../assets/picture/UniversityLogo/Yale University.png';
import Princeton from '../assets/picture/UniversityLogo/Princeton University.png';
import Columbia from '../assets/picture/UniversityLogo/Columbia University.png';
const universities = [
  {
    name: 'Harvard University',
    logo: Harverd,
  },
  {
    name: 'Stanford University',
    logo: Stanford,
  },
  {
    name: 'MIT',
    logo: MIT,
  },
  {
    name: 'Oxford University',
    logo: Oxford,
  },
  {
    name: 'Cambridge University',
    logo: Cambridge,
  },
  {
    name: 'Yale University',
    logo: Yale,
  },
  {
    name: 'Princeton University',
    logo: Princeton,
  },
  {
    name: 'Columbia University',
    logo: Columbia,
  },
];

const UniversityPartnersSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);

  // Prefers reduced motion accessibility check
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Create duplicated array for seamless scroll
  const duplicatedUniversities = [
    ...universities,
    ...universities,
    ...universities,
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800">
              University
            </span>{' '}
            Partners
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-700 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-700">
            We collaborate with top universities worldwide to offer you the best
            educational opportunities.
          </p>
        </div>

        <div
          className="mt-12 relative overflow-hidden"
          aria-label="University partners carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          ref={scrollContainerRef}
        >
          {/* First row */}
          <div
            className={`flex gap-6 mb-6 ${
              prefersReducedMotion
                ? ''
                : isHovered
                ? 'paused'
                : 'animate-scroll'
            }`}
          >
            {duplicatedUniversities.map((university, index) => (
              <div
                key={`row1-${index}`}
                className="bg-white mt-6 rounded-lg shadow-lg p-4 w-48 h-32 flex flex-col items-center justify-center transition-transform duration-300 hover:shadow-xl hover:scale-105 hover:ring-2 hover:ring-blue-300 group"
              >
                <div className="flex items-center justify-center h-16 mb-2">
                  <img
                    src={university.logo}
                    alt={`${university.name} logo`}
                    className="max-h-12 max-w-[80px] object-contain transition-opacity duration-300 group-hover:opacity-100 opacity-80"
                  />
                </div>
                <p className="min-h-[1.5rem] text-center w-full truncate text-sm font-medium text-gray-800 antialiased">
                  {university.name}
                </p>
              </div>
            ))}
          </div>

          {/* Second row - reverse direction */}
          <div
            className={`flex gap-6 mb-5 ${
              prefersReducedMotion
                ? ''
                : isHovered
                ? 'paused'
                : 'animate-scroll-reverse'
            }`}
          >
            {duplicatedUniversities.map((university, index) => (
              <div
                key={`row2-${index}`}
                className="bg-white rounded-lg shadow-lg p-4 w-48 h-32 flex flex-col items-center justify-center transition-transform duration-300 hover:shadow-xl hover:scale-105 hover:ring-2 hover:ring-blue-300 group"
              >
                <div className="flex items-center justify-center h-16 mb-2">
                  <img
                    src={university.logo}
                    alt={`${university.name} logo`}
                    className="max-h-12 max-w-[80px] object-contain transition-opacity duration-300 group-hover:opacity-100 opacity-80"
                  />
                </div>
                <p className="text-sm text-gray-800 font-medium text-center truncate w-full">
                  {university.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            View All Partners
          </button>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-48px * 8 - 6px * 8));
          }
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(calc(-48px * 8 - 6px * 8));
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 30s linear infinite;
          width: max-content;
        }

        .paused {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default UniversityPartnersSection;
