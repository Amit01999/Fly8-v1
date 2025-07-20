import React, { useState, useEffect, useRef } from 'react';
import Buffalo from '@/assets/PartnerUniversities/Buffalo State University.png';
import City from '@/assets/PartnerUniversities/City, University of London.png';
import david from '@/assets/PartnerUniversities/david game college.jfif';
import Duquesne from '@/assets/PartnerUniversities/Duquesne University.png';
import Kaplan from '@/assets/PartnerUniversities/Kaplan Singapore.png';
import Kingston from '@/assets/PartnerUniversities/Kingston University.png';
import Kyoto from '@/assets/PartnerUniversities/Kyoto University of Advanced Science.png';
import McGill from '@/assets/PartnerUniversities/McGill University.png';
import Monash from '@/assets/PartnerUniversities/Monash University.png';
import North from '@/assets/PartnerUniversities/North Dakota State University.png';
import SEGi from '@/assets/PartnerUniversities/SEGi University.png';
import SOAS from '@/assets/PartnerUniversities/SOAS University of London.png';
import State from '@/assets/PartnerUniversities/State University of New York.png';
import Taylors from '@/assets/PartnerUniversities/Taylors University.png';
import TIO from '@/assets/PartnerUniversities/TIO University of Applied Sciences.png';
import Tsinghua from '@/assets/PartnerUniversities/Tsinghua University.png';
import Alberta from '@/assets/PartnerUniversities/University of Alberta.png';
import Auckland from '@/assets/PartnerUniversities/University of Auckland.png';
import Columbia from '@/assets/PartnerUniversities/University of British Columbia.png';
import Essex from '@/assets/PartnerUniversities/University of Essex.png';
import Melbourne from '@/assets/PartnerUniversities/University of Melbourne.png';
import Wales from '@/assets/PartnerUniversities/University of New South Wales.png';
import texas from '@/assets/PartnerUniversities/university of north texas.png';
import Queensland from '@/assets/PartnerUniversities/University of Queensland.png';
import Beijing from '@/assets/PartnerUniversities/University of Science & Technology Beijing.png';
import Sydney from '@/assets/PartnerUniversities/University of Sydney.png';
import Toronto from '@/assets/PartnerUniversities/University of Toronto.png';
import Waterloo from '@/assets/PartnerUniversities/University of Waterloo.png';
import Wittenborg from '@/assets/PartnerUniversities/Wittenborg University of Applied Sciences.png';
const universities = [
  {
    name: 'Buffalo State University',
    logo: Buffalo,
  },
  {
    name: 'City, University of London',
    logo: City,
  },
  {
    name: 'David Game College',
    logo: david,
  },
  {
    name: 'Duquesne University',
    logo: Duquesne,
  },
  {
    name: 'Kaplan Singapore',
    logo: Kaplan,
  },
  {
    name: 'Kingston University',
    logo: Kingston,
  },

  {
    name: 'Kyoto University of Advanced Science',
    logo: Kyoto,
  },
  {
    name: 'McGill University',
    logo: McGill,
  },
  {
    name: 'Monash University',
    logo: Monash,
  },
  {
    name: 'North Dakota State University',
    logo: North,
  },
  {
    name: 'SEGi University',
    logo: SEGi,
  },

  {
    name: 'SOAS University of London',
    logo: SOAS,
  },
  {
    name: 'State University of New York',
    logo: State,
  },
  {
    name: 'Taylors University',
    logo: Taylors,
  },
  {
    name: 'TIO University of Applied Sciences',
    logo: TIO,
  },

  {
    name: 'Tsinghua University',
    logo: Tsinghua,
  },
  {
    name: 'University of Alberta',
    logo: Alberta,
  },
  {
    name: 'University of Auckland',
    logo: Auckland,
  },
  {
    name: 'University of British Columbia',
    logo: Columbia,
  },
  {
    name: 'University of Essex',
    logo: Essex,
  },
  {
    name: 'University of Melbourne',
    logo: Melbourne,
  },
  {
    name: 'University of New South Wales',
    logo: Wales,
  },
  {
    name: 'university of north texas',
    logo: texas,
  },
  {
    name: 'University of Queensland',
    logo: Queensland,
  },

  {
    name: 'University of Science & Technology Beijing',
    logo: Beijing,
  },
  {
    name: 'University of Sydney',
    logo: Sydney,
  },
  {
    name: 'University of Toronto',
    logo: Toronto,
  },
  {
    name: 'University of Waterloo',
    logo: Waterloo,
  },
  {
    name: 'Wittenborg University of Applied Sciences',
    logo: Wittenborg,
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
              Partner
            </span>{' '}
            Universities
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
                className="bg-white mt-6 rounded-lg shadow-xl p-4 w-48 h-32 flex flex-col items-center justify-center transition-transform duration-300 hover:shadow-xl hover:scale-105 hover:ring-2 hover:ring-blue-300 group"
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
                className="bg-white rounded-lg shadow-xl p-4 w-48 h-32 flex flex-col items-center justify-center transition-transform duration-300 hover:shadow-xl hover:scale-105 hover:ring-2 hover:ring-blue-300 group"
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
