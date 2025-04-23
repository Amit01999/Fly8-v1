import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  ChevronRight,
  Award,
  MapPin,
  Clock,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function EnhancedFeatureCard() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFeature, setActiveFeature] = useState('discovery');

  // Track mouse position for 3D hover effect
  useEffect(() => {
    const handleMouseMove = e => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Enhanced features data
  const features = {
    discovery: {
      title: 'Discovery',
      description:
        'Find institutions that perfectly match your academic profile and aspirations.',
      icon: <MapPin className="h-5 w-5" />,
      color: 'from-cyan-600 to-blue-700',
    },
    application: {
      title: 'Application',
      description:
        'Streamlined process with personalized guidance every step of the way.',
      icon: <Clock className="h-5 w-5" />,
      color: 'from-violet-600 to-purple-700',
    },
    scholarships: {
      title: 'Scholarships',
      description:
        'Access exclusive scholarships tailored to your unique qualifications.',
      icon: <Award className="h-5 w-5" />,
      color: 'from-amber-600 to-orange-700',
    },
    community: {
      title: 'Community',
      description:
        'Connect with fellow students and alumni from your target institutions.',
      icon: <Users className="h-5 w-5" />,
      color: 'from-emerald-600 to-teal-700',
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="lg:col-span-6"
      ref={containerRef}
    >
      <div className="relative">
        {/* Enhanced ambient background elements */}
        <div className="absolute -z-10 inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/10 to-violet-500/20 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-500/10 to-pink-500/20 blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-60 h-60 rounded-full bg-gradient-to-bl from-cyan-500/10 to-emerald-500/10 blur-3xl"></div>
        </div>

        {/* Dynamic floating orbs */}
        <motion.div
          className="absolute -top-16 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-16 -left-10 w-36 h-36 rounded-full bg-gradient-to-tr from-violet-500/20 to-pink-400/20 blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, -360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />

        {/* Main Content Card with enhanced glass morphism */}
        <motion.div
          className="backdrop-blur-xl rounded-3xl p-8 border border-white/20 relative overflow-hidden"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.4 }}
          animate={{
            rotateX: mousePosition.y
              ? (mousePosition.y / (containerRef.current?.offsetHeight || 600) -
                  0.5) *
                5
              : 0,
            rotateY: mousePosition.x
              ? -(
                  mousePosition.x / (containerRef.current?.offsetWidth || 800) -
                  0.5
                ) * 5
              : 0,
          }}
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1500px',
            backgroundImage:
              'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 100%)',
            boxShadow:
              '0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 -12px 25px -12px rgba(255, 255, 255, 0.08), 0 0 40px rgba(59, 130, 246, 0.08)',
          }}
        >
          {/* Hero section with parallax effect */}
          <div className="rounded-2xl overflow-hidden mb-8 relative group h-72">
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-900/70 z-10"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 0.9 }}
            />

            <motion.div
              className="absolute inset-0 z-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              <motion.div
                className="w-full h-full bg-cover bg-center"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80")`,
                  height: '110%',
                }}
              />
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 z-20"
              initial={{ y: 10, opacity: 0.8 }}
              whileHover={{ y: 0, opacity: 1 }}
            >
              <div className="flex items-center">
                <motion.div
                  className="bg-white/20 backdrop-blur-xl p-3 rounded-full mr-4 shadow-lg"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(255,255,255,0.3)',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <GraduationCap className="h-6 w-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-white font-bold text-2xl tracking-tight">
                    Find Your Perfect Match
                  </h3>
                  <p className="text-white/90 text-sm mt-1 font-medium tracking-wide">
                    50+ countries, 1,500+ universities
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Feature Tabs with glass morphism */}
          <div className="mb-10">
            <motion.div
              className="flex space-x-1 mb-8 p-1 rounded-full backdrop-blur-xl"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(255,255,255,0.5), rgba(255,255,255,0.2))',
                boxShadow:
                  '0 4px 15px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(255,255,255,0.4)',
              }}
            >
              {Object.keys(features).map(feature => (
                <motion.button
                  key={feature}
                  className={`flex-1 py-3 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFeature === feature
                      ? 'text-white shadow-lg'
                      : 'text-gray-700 hover:bg-white/40 hover:shadow-sm'
                  }`}
                  onClick={() => setActiveFeature(feature)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={
                    activeFeature === feature
                      ? {
                          backgroundImage: `linear-gradient(to right, ${features[
                            feature
                          ].color
                            .replace('from-', '')
                            .replace(' to-', ', ')})`,
                        }
                      : {}
                  }
                >
                  <span className="flex items-center justify-center">
                    {activeFeature === feature && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mr-2"
                      >
                        {features[feature].icon}
                      </motion.span>
                    )}
                    {features[feature].title}
                  </span>
                </motion.button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="p-6 rounded-2xl backdrop-blur-md relative overflow-hidden"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.5)',
                  boxShadow:
                    'inset 0 0 0 1px rgba(255,255,255,0.5), 0 10px 30px rgba(0,0,0,0.08)',
                }}
              >
                {/* Background gradient for feature card */}
                <div
                  className="absolute inset-0 -z-10 opacity-10 rounded-2xl"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${features[
                      activeFeature
                    ].color
                      .replace('from-', '')
                      .replace(' to-', ', ')})`,
                  }}
                />

                <div className="flex items-start">
                  <motion.div
                    className={`p-4 rounded-2xl mr-5 text-white shadow-lg`}
                    initial={{ rotate: -5 }}
                    animate={{ rotate: 0 }}
                    whileHover={{
                      scale: 1.05,
                      rotate: 5,
                    }}
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${features[
                        activeFeature
                      ].color
                        .replace('from-', '')
                        .replace(' to-', ', ')})`,
                    }}
                  >
                    {features[activeFeature].icon}
                  </motion.div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-lg mb-2">
                      {features[activeFeature].title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {features[activeFeature].description}
                    </p>

                    <motion.button
                      className="mt-4 text-sm font-medium inline-flex items-center"
                      style={{
                        background:
                          'linear-gradient(to right, currentColor, currentColor)',
                        backgroundSize: '0% 1px',
                        backgroundPosition: '0 100%',
                        backgroundRepeat: 'no-repeat',
                        color: `var(--${
                          features[activeFeature].color
                            .split('-')[1]
                            .split(' ')[0]
                        }-600)`,
                      }}
                      whileHover={{
                        backgroundSize: '100% 1px',
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      Learn more <ChevronRight className="ml-1 h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced University Showcase with 3D cards */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-gray-900 text-lg">
                Featured Universities
              </h3>
              <Button
                variant="ghost"
                size="sm"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                View all <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[1, 2, 3, 4].map(item => (
                <motion.div
                  key={item}
                  className="backdrop-blur-md rounded-xl p-5 relative overflow-hidden group"
                  whileHover={{
                    y: -8,
                    transition: { type: 'spring', stiffness: 300, damping: 20 },
                  }}
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)',
                    boxShadow:
                      '0 15px 30px -10px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255,255,255,0.4)',
                  }}
                >
                  {/* Animated gradient background on hover */}
                  <motion.div
                    className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                    animate={{
                      background: [
                        'linear-gradient(45deg, #4f46e5, #3b82f6, #0ea5e9)',
                        'linear-gradient(45deg, #0ea5e9, #4f46e5, #3b82f6)',
                        'linear-gradient(45deg, #3b82f6, #0ea5e9, #4f46e5)',
                      ],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: 'mirror',
                    }}
                  />

                  {/* Decorative elements */}
                  <div className="absolute -right-6 -top-6 w-20 h-20 bg-blue-500/5 rounded-full blur-md"></div>
                  <div className="absolute -left-6 -bottom-6 w-20 h-20 bg-indigo-500/5 rounded-full blur-md"></div>

                  <div className="flex items-center mb-4">
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white mr-4 shadow-md"
                      whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 0.5 }}
                      style={{
                        backgroundImage:
                          'linear-gradient(135deg, #4f46e5, #818cf8)',
                      }}
                    >
                      <GraduationCap className="h-6 w-6" />
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base group-hover:text-indigo-700 transition-colors duration-300">
                        University #{item}
                      </h4>
                      <p className="text-xs text-gray-500 font-medium">
                        Top {Math.floor(Math.random() * 50) + 50} Worldwide
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white/50 backdrop-blur-sm">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-gray-700">
                        Acceptance: {Math.floor(Math.random() * 20) + 10}%
                      </span>
                      <span className="text-indigo-600">
                        Rank: #{Math.floor(Math.random() * 50) + 1}
                      </span>
                    </div>

                    <motion.div
                      className="w-full bg-gray-200 rounded-full h-1.5 mt-2 overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div
                        className="h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{
                          width: `${Math.floor(Math.random() * 60) + 40}%`,
                        }}
                        transition={{ duration: 1, delay: 0.2 * item }}
                        style={{
                          backgroundImage:
                            'linear-gradient(to right, #4f46e5, #818cf8)',
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
