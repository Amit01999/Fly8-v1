import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const countries = [
  {
    name: 'Canada',
    image:
      'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=1200&h=800',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/188px-Flag_of_Canada_%28Pantone%29.svg.png',
    universities: 96,
    students: '450K+',
  },
  {
    name: 'USA',
    image:
      'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=1200&h=800',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png',
    universities: 203,
    students: '1.2M+',
  },
  {
    name: 'UK',
    image:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200&h=800',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/250px-Flag_of_the_United_Kingdom_%281-2%29.svg.png',
    universities: 114,
    students: '380K+',
  },
  {
    name: 'Australia',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200&h=800',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/250px-Flag_of_Australia_%28converted%29.svg.png',
    universities: 43,
    students: '290K+',
  },
];

export default function TopDestinations() {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
    hover: {
      y: -8,
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const staggerDelay = {
    title: { delay: 0.2 },
    text: { delay: 0.4 },
    button: { delay: 0.6 },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-24 px-4 sm:px-6 lg:px-16">
      {/* Abstract shapes background */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100 to-transparent rounded-full opacity-70 blur-3xl -z-10"
        animate={{
          x: [0, 10, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-purple-100 to-transparent rounded-full opacity-60 blur-3xl -z-10"
        animate={{
          x: [0, -20, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 w-full lg:w-3/5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {countries.map(country => (
              <motion.div
                key={country.name}
                className="group relative rounded-2xl overflow-hidden bg-white"
                variants={cardVariants}
                whileHover="hover"
                onMouseEnter={() => setHoveredCountry(country.name)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <motion.img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-48 sm:h-56 object-cover"
                    animate={{
                      scale: hoveredCountry === country.name ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
                </div>

                <motion.div
                  className="absolute top-3 left-3 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-gray-800">
                    {country.name}
                  </span>
                </motion.div>

                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Globe size={14} className="text-blue-500" />
                      <span>{country.universities} Universities</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Users size={14} className="text-blue-500" />
                      <span>{country.students} Students</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-xs text-gray-500">
                      <span className="inline-flex items-center">
                        <MapPin size={12} className="mr-1" />
                        Popular cities
                      </span>
                    </div>
                    <motion.button
                      className="text-blue-600 text-sm font-medium flex items-center gap-1"
                      whileHover={{ x: 3 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      Explore
                      <ArrowRight size={14} />
                    </motion.button>
                  </div>
                </div>

                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none bg-gradient-to-t from-blue-600/10 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredCountry === country.name ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Text Content */}
          <div className="text-center lg:text-left w-full lg:w-2/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={staggerDelay.title}
              className="inline-block mb-3"
            >
              <span className="bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1.5 rounded-full">
                Global Education
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={staggerDelay.title}
            >
              Best countries for
              <span className="relative">
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-blue-200 opacity-70"
                  viewBox="0 0 80 6"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M1 5.5C20 -0.5 50 -0.5 79 5.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
                <span className="relative"> overseas education</span>
              </span>
            </motion.h2>

            <motion.p
              className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={staggerDelay.text}
            >
              Explore the best countries for overseas education and get the
              latest updates and insights on studying abroad. From top
              universities to the admission process and beyond, we've curated a
              comprehensive guide to help you navigate the exciting realm of
              international education.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={staggerDelay.button}
            >
              <Link to={`/countries`}>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group">
                  Explore countries
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </Link>
              {/* <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:border-blue-500 hover:text-blue-600 transition-all">
                Compare destinations
              </button> */}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Circular decorations */}
      <div className="absolute top-20 right-10 w-20 h-20 border-2 border-dashed border-blue-200 rounded-full opacity-50" />
      <div className="absolute bottom-12 left-12 w-32 h-32 border border-purple-200 rounded-full opacity-40" />
      <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-yellow-100 rounded-full opacity-60" />
      <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-blue-200 rounded-full opacity-70" />
    </section>
  );
}

// Add the missing component
function Users({ size, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
