import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Custom SVG icons instead of using lucide-react
const CustomIcons = {
  Users: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  School: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  GraduationCap: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  Award: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
  MapPin: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Clock: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
};

const statsData = [
  {
    id: 1,
    icon: CustomIcons.Users,
    countTo: 125000,
    label: 'Student Success Stories',
    suffix: '+',
    gradient: 'from-indigo-500 to-violet-500',
    bg: 'from-indigo-300 to-violet-300',
  },
  {
    id: 2,
    icon: CustomIcons.School,
    countTo: 1500,
    label: 'Global Partner Institutions',
    suffix: '+',
    gradient: 'from-violet-500 to-purple-500',
    bg: 'from-violet-300 to-purple-300',
  },
  {
    id: 3,
    icon: CustomIcons.GraduationCap,
    countTo: 98,
    label: 'Placement Success Rate',
    suffix: '%',
    gradient: 'from-purple-500 to-fuchsia-500',
    bg: 'from-purple-300 to-fuchsia-300',
  },
  {
    id: 4,
    icon: CustomIcons.MapPin,
    countTo: 50,
    label: 'Countries Represented',
    suffix: '+',
    gradient: 'from-fuchsia-500 to-pink-500',
    bg: 'from-fuchsia-300 to-pink-300',
  },
  {
    id: 5,
    icon: CustomIcons.Clock,
    countTo: 24,
    label: 'Hours Support',
    suffix: '/7',
    gradient: 'from-pink-500 to-rose-500',
    bg: 'from-pink-300 to-rose-300',
  },
  {
    id: 6,
    icon: CustomIcons.Award,
    countTo: 15,
    label: 'Years of Excellence',
    suffix: '+',
    gradient: 'from-rose-500 to-indigo-500',
    bg: 'from-rose-300 to-indigo-300',
  },
];

const AnimatedCounter = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // ms
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(value * progress);

        setCount(currentCount);

        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);

      return () => clearInterval(counter);
    }
  }, [value, isInView]);

  return (
    <span ref={ref} className="font-bold">
      {count}
      {suffix}
    </span>
  );
};

const StatsCounter = () => {
  return (
    <section
      id="about"
      className="py-20 relative bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-3 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100"
          >
            <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Our Global Impact
            </span>
          </motion.div>

          <motion.h2
            className="ext-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Transforming Global Education Access
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We're on a mission to democratize international education by
            connecting students with life-changing opportunities worldwide.
          </motion.p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
                damping: 12,
              }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -5 }}
            >
              {/* Background blur effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
              ></div>

              {/* Card content */}
              <div className="relative backdrop-blur-sm bg-white/90 rounded-3xl p-6 h-full flex flex-col items-center justify-center shadow-lg group-hover:shadow-xl border border-gray-100/50 transition-all duration-300">
                {/* Top border gradient */}
                {/* <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient}`}
                ></div> */}

                {/* Animated icon container */}
                <motion.div
                  className={`p-4 rounded-2xl bg-gradient-to-br ${stat.bg} text-white shadow-md mb-5 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon />
                </motion.div>

                {/* Counter */}
                <h3
                  className={`text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${stat.gradient}`}
                >
                  <AnimatedCounter value={stat.countTo} suffix={stat.suffix} />
                </h3>

                {/* Label */}
                <p className="text-sm font-medium text-gray-600 text-center">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#learn-more"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:from-purple-700 hover:to-indigo-700"
          >
            <span>Discover Our Impact</span>
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsCounter;
