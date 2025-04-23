import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Search,
  MessageSquare,
  GraduationCap,
  Globe,
  Award,
} from 'lucide-react';

const NewHeroSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  // Animated background shapes
  const shapes = [
    {
      size: 'w-20 h-20',
      color: 'bg-primary/20',
      position: 'top-20 left-1/4',
      delay: 0.2,
    },
    {
      size: 'w-32 h-32',
      color: 'bg-secondary/20',
      position: 'top-40 right-1/3',
      delay: 0.5,
    },
    {
      size: 'w-24 h-24',
      color: 'bg-accent/20',
      position: 'bottom-20 left-1/3',
      delay: 0.7,
    },
    {
      size: 'w-16 h-16',
      color: 'bg-white/10',
      position: 'bottom-40 right-1/4',
      delay: 0.3,
    },
  ];

  return (
    <section className="relative min-h-[90vh] py-20 lg:py-0 overflow-hidden bg-gradient-to-br from-primary/90 via-secondary/80 to-accent/70">
      {/* Animated Background Shapes */}
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-2xl opacity-70 ${shape.size} ${shape.color} ${shape.position}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: shape.delay,
          }}
        />
      ))}

      {/* Glass overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />

      <div className="max-container relative z-10 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-28">
          {/* Hero Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className="text-white"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: 'easeOut' },
                },
              }}
              className="mb-6"
            >
              <motion.span
                className="inline-block text-sm md:text-base font-semibold text-white/80 mb-3 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <GraduationCap className="w-4 h-4 inline-block mr-2" />
                International Education Platform
              </motion.span>
              <h1 className="heading-xl mb-4">
                Your Gateway to{' '}
                <motion.span
                  className="relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
                    Global Education
                  </span>
                  <motion.span
                    className="absolute bottom-2 left-0 h-3 w-full bg-accent/20 rounded-lg -z-0"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl lg:text-2xl mb-8 text-white/90 max-w-xl leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.6, ease: 'easeOut' },
                },
              }}
            >
              Unlock your potential with world-class education opportunities
              across the globe. We connect ambitious students with prestigious
              institutions and provide end-to-end support.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-5 mb-12"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.6, duration: 0.6, ease: 'easeOut' },
                },
              }}
            >
              <Button
                size="lg"
                className="relative group overflow-hidden bg-white text-primary hover:bg-white hover:text-primary hover:shadow-lg hover:shadow-white/20 transition-all duration-300 rounded-full px-8 py-6 text-base font-medium"
              >
                <motion.span className="absolute inset-0 w-0 bg-gradient-to-r from-white/10 to-white/5 transition-all duration-300 group-hover:w-full" />
                <Search className="mr-2 h-5 w-5" /> Search Universities
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="relative group overflow-hidden border-white text-white hover:bg-white/10 transition-all duration-300 rounded-full px-8 py-6 text-base font-medium backdrop-blur-sm"
              >
                <motion.span className="absolute inset-0 w-0 bg-gradient-to-r from-white/10 to-white/5 transition-all duration-300 group-hover:w-full" />
                <MessageSquare className="mr-2 h-5 w-5" /> Talk to Fly8
                Assistant
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap items-center gap-x-8 gap-y-4 text-white/80"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { delay: 0.8, duration: 0.6 },
                },
              }}
            >
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm mr-3">
                  <GraduationCap className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm md:text-base font-medium">
                  125K+ Students
                </span>
              </div>
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm mr-3">
                  <Globe className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm md:text-base font-medium">
                  1.5K+ Schools
                </span>
              </div>
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm mr-3">
                  <Award className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm md:text-base font-medium">
                  98% Success
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
              <motion.div
                className="absolute -bottom-10 -right-5 w-40 h-40 bg-gradient-to-tr from-accent/30 to-transparent rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 1,
                }}
              />

              {/* Main card */}
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl"
                whileHover={{ translateY: -5 }}
                transition={{ duration: 0.4 }}
              >
                <div className="rounded-xl overflow-hidden mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Students collaborating"
                    className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                    <p className="text-white/70 text-sm">Countries</p>
                    <p className="text-white text-xl font-bold">50+</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                    <p className="text-white/70 text-sm">Universities</p>
                    <p className="text-white text-xl font-bold">1,500+</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      Begin Your Journey
                    </h3>
                    <p className="text-white/80 text-sm">
                      Find your perfect university match
                    </p>
                  </div>
                  <Button className="bg-white text-primary hover:bg-white hover:text-primary rounded-full">
                    Start Now
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="fill-white"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default NewHeroSection;
