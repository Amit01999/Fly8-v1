import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import NetworkAnimation from '@/components/NetworkAnimation';
import {
  Search,
  MessageSquare,
  GraduationCap,
  Globe,
  Award,
  ArrowRight,
  Sparkles,
  ArrowUpRight,
  Star,
  SparklesIcon,
  GlobeIcon,
  GraduationCapIcon,
} from 'lucide-react';

const HeroSection1 = () => {
  const containerRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  // const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   if (!canvas) return;

  //   const ctx = canvas.getContext('2d');
  //   if (!ctx) return;

  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;

  //   const particles: Particle[] = [];
  //   const particleCount = 300;

  //   class Particle {
  //     x: number;
  //     y: number;
  //     size: number;
  //     speedX: number;
  //     speedY: number;
  //     color: string;

  //     constructor() {
  //       this.x = Math.random() * canvas.width;
  //       this.y = Math.random() * canvas.height;
  //       this.size = Math.random() * 5 + 1;
  //       this.speedX = Math.random() * 1 - 0.5;
  //       this.speedY = Math.random() * 1 - 0.5;

  //       // 🎨 Fly8 Theme Colors: #D54CB8 and #1884F0 with opacity
  //       const colorOptions = [
  //         'rgba(213, 76, 184, 0.3)', // #D54CB8
  //         'rgba(24, 132, 240, 0.3)', // #1884F0
  //         'rgba(213, 76, 184, 0.15)',
  //         'rgba(24, 132, 240, 0.15)',
  //         'rgba(180, 60, 160, 0.25)', // Variation of #D54CB8
  //         'rgba(30, 110, 210, 0.25)', // Variation of #1884F0
  //       ];
  //       this.color =
  //         colorOptions[Math.floor(Math.random() * colorOptions.length)];
  //     }

  //     update() {
  //       this.x += this.speedX;
  //       this.y += this.speedY;

  //       if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
  //       if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
  //     }

  //     draw() {
  //       ctx.fillStyle = this.color;
  //       ctx.beginPath();
  //       ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  //       ctx.fill();
  //     }
  //   }

  //   const init = () => {
  //     for (let i = 0; i < particleCount; i++) {
  //       particles.push(new Particle());
  //     }
  //   };

  //   let animationFrameId: number;

  //   const animate = () => {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     particles.forEach(p => {
  //       p.update();
  //       p.draw();
  //     });
  //     animationFrameId = requestAnimationFrame(animate);
  //   };

  //   init();
  //   animate();

  //   const handleResize = () => {
  //     canvas.width = window.innerWidth;
  //     canvas.height = window.innerHeight;
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //     cancelAnimationFrame(animationFrameId);
  //   };
  // }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-100 to-pink-100 py-12 lg:py-0"
    >
      {/* <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 opacity-70"
      /> */}
      {/* <NetworkAnimation /> */}
      {/* Glass morphism main container */}
      <div className="max-container relative z-10 h-full flex items-center px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-16 lg:py-28 w-full">
          {/* Enhanced Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              {/* Enhanced badge with glass morphism and animated elements */}
              <motion.span
                className="inline-flex items-center text-sm md:text-base font-medium text-gray-700 mb-6 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-white/50 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <div className="bg-gradient-to-r from-amber-400 to-orange-400 rounded-full p-1 mr-2">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span>Future-Ready Education Platform</span>
                <motion.div
                  className="ml-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
                  animate={{
                    opacity: [1, 0.5, 1],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.span>

              {/* Enhanced animated heading with gradient text */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-600">
                Your Gateway to{' '}
                <motion.span
                  className="relative inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <span className="font-black italic bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    Global Education
                  </span>
                  {/* Enhanced underline with animation */}
                  <motion.div
                    className="absolute bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-blue-300/60 via-purple-300/60 to-pink-300/60 rounded-full -z-10"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                  <motion.div
                    className="absolute -right-8 -top-6"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, rotate: [0, 10, 0] }}
                    transition={{
                      delay: 1.2,
                      duration: 0.6,
                      rotate: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                  >
                    <Star className="h-6 w-6 text-amber-400 fill-amber-400" />
                  </motion.div>
                </motion.span>
              </h1>
            </motion.div>

            {/* Enhanced paragraph with improved typography */}
            <motion.p
              className="text-xl lg:text-2xl mb-10 text-gray-700 max-w-xl leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Unlock your potential with{' '}
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                world-class education
              </span>{' '}
              opportunities. Our AI-powered platform connects ambitious students
              with prestigious institutions worldwide.
            </motion.p>

            {/* Enhanced call-to-action buttons with more sophisticated effects */}
            <motion.div
              className="flex flex-col sm:flex-row gap-5 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button
                size="lg"
                className="relative group overflow-hidden bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 text-white hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-500 rounded-full px-8 py-6 text-base font-medium border border-white/20"
              >
                <span className="relative z-10 flex items-center">
                  <Search className="mr-2 h-5 w-5" />
                  <span>Explore Universities</span>
                  <motion.div
                    className="ml-2"
                    animate={{
                      x: [0, 5, 0],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: 'easeInOut',
                    }}
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </motion.div>
                </span>
                {/* Enhanced animated gradient background */}
                <motion.span
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                />
                {/* Shine effect */}
                <motion.span
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 1,
                    transition: { duration: 0.6 },
                  }}
                >
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <motion.span
                      className="absolute top-0 left-0 w-20 h-full bg-white/20 blur-md transform -skew-x-30 -translate-x-40"
                      animate={{ translateX: ['0%', '500%'] }}
                      transition={{
                        duration: 1.5,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                  </span>
                </motion.span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="relative group overflow-hidden border-gray-300 text-gray-700 hover:text-gray-900 transition-all duration-300 rounded-full px-8 py-6 text-base font-medium backdrop-blur-md bg-white/70 hover:bg-white/90 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <span className="relative z-10 flex items-center">
                  <motion.div
                    animate={{ rotate: [0, 15, 0, -15, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: 'easeInOut',
                    }}
                    className="mr-2"
                  >
                    <MessageSquare className="h-5 w-5 text-indigo-500" />
                  </motion.div>
                  <span>Talk to AI Assistant</span>
                </span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white via-white/90 to-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
            </motion.div>

            {/* Enhanced trust badges with more sophisticated micro-interactions */}
            <motion.div
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.div
                className="flex items-center p-3 bg-white/80 backdrop-blur-xl rounded-xl shadow-sm border border-white/60 hover:border-blue-200 transition-all duration-300"
                whileHover={{
                  y: -5,
                  boxShadow: '0 15px 30px rgba(59, 130, 246, 0.1)',
                  scale: 1.03,
                }}
              >
                <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 mr-3 shadow-md shadow-blue-500/30">
                  <GraduationCap className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold">125K+</p>
                  <p className="text-gray-600 text-xs">Students</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center p-3 bg-white/80 backdrop-blur-xl rounded-xl shadow-sm border border-white/60 hover:border-purple-200 transition-all duration-300"
                whileHover={{
                  y: -5,
                  boxShadow: '0 15px 30px rgba(147, 51, 234, 0.1)',
                  scale: 1.03,
                }}
              >
                <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 mr-3 shadow-md shadow-purple-500/30">
                  <Globe className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold">1.5K+</p>
                  <p className="text-gray-600 text-xs">Schools</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center p-3 bg-white/80 backdrop-blur-xl rounded-xl shadow-sm border border-white/60 hover:border-amber-200 transition-all duration-300"
                whileHover={{
                  y: -5,
                  boxShadow: '0 15px 30px rgba(245, 158, 11, 0.1)',
                  scale: 1.03,
                }}
              >
                <div className="p-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 mr-3 shadow-md shadow-amber-500/30">
                  <Award className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold">98%</p>
                  <p className="text-gray-600 text-xs">Success Rate</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced 3D Card Design with more sophisticated effects */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-6"
          >
            <div className="relative">
              {/* my style start */}

              <motion.div
                whileHover={{ translateY: -12, scale: 1.02 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl bg-gradient-to-br from-white/90 via-sky-50/90 to-indigo-100/90"
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
              >
                {/* Floating background elements */}
                <div className="absolute -z-10 -left-16 -top-16 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
                <div className="absolute -z-10 -right-16 -bottom-16 w-64 h-64 bg-violet-200/30 rounded-full blur-3xl"></div>

                {/* Image section with animated overlay */}
                <div className="relative rounded-2xl overflow-hidden mb-8 group">
                  <motion.div
                    className="absolute -right-8 -top-8 w-32 h-32 bg-sky-300/30 rounded-full blur-3xl z-0"
                    animate={{
                      scale: hovered ? 1.2 : 1,
                      opacity: hovered ? 0.8 : 0.4,
                    }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                  ></motion.div>

                  <motion.div
                    className="absolute -left-8 bottom-8 w-24 h-24 bg-indigo-300/30 rounded-full blur-3xl z-0"
                    animate={{
                      scale: hovered ? 1.2 : 1,
                      opacity: hovered ? 0.8 : 0.4,
                    }}
                    transition={{ duration: 1, ease: 'easeInOut', delay: 0.1 }}
                  ></motion.div>

                  <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Students collaborating"
                    className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg transform transition-all duration-700 ease-out"
                  />

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent rounded-2xl flex items-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hovered ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="p-6 text-white transform transition-all duration-500">
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{
                          y: hovered ? 0 : 20,
                          opacity: hovered ? 1 : 0,
                        }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg font-medium"
                      >
                        Discover your educational journey
                      </motion.p>
                    </div>
                  </motion.div>
                </div>

                {/* Stats section with hover animations */}
                <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-100 to-sky-100 p-5 shadow-xl border border-white/20"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/40 rounded-full -translate-x-4 -translate-y-4 blur-xl"></div>

                    <div className="flex items-center justify-between relative">
                      <div>
                        <h3 className="text-gray-800 text-lg font-medium mb-1">
                          Countries
                        </h3>
                        <p className="text-gray-900 text-3xl font-bold">50+</p>
                      </div>
                      <div className="bg-white/50 p-3 rounded-xl shadow-md">
                        <Globe className="h-6 w-6 text-indigo-600" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sky-100 to-violet-100 p-5 shadow-lg border border-white/30"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/40 rounded-full -translate-x-4 -translate-y-4 blur-xl"></div>

                    <div className="flex items-center justify-between relative">
                      <div>
                        <h3 className="text-gray-800 text-lg font-medium mb-1">
                          Universities
                        </h3>
                        <p className="text-gray-900 text-3xl font-bold">
                          1,500+
                        </p>
                      </div>
                      <div className="bg-white/50 p-3 rounded-xl shadow-md">
                        <GraduationCap className="h-6 w-6 text-indigo-600" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* CTA Section with improved styling and animations */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-r from-indigo-100 to-sky-100 shadow-lg border border-white/30"
                >
                  <motion.div
                    className="absolute -right-8 -top-8 w-32 h-32 bg-white/40 rounded-full blur-3xl"
                    animate={{
                      x: hovered ? -10 : 0,
                      y: hovered ? -10 : 0,
                      scale: hovered ? 1.2 : 1,
                    }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                  ></motion.div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-5">
                      <div className="p-3 rounded-xl bg-white/60 text-indigo-600 mr-4 shadow-md">
                        <Sparkles className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-xl">
                          AI Program Matching
                        </h3>
                        <p className="text-gray-700">
                          Find your perfect program in minutes
                        </p>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="mt-4 w-full py-4 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium shadow-lg flex items-center justify-center"
                    >
                      <span className="mr-2">Start Matching</span>
                      <ArrowRight className="h-5 w-5" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
              {/* my style end  */}
            </div>
          </motion.div>
        </div>
      </div>
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,69.3C840,64,960,32,1080,21.3C1200,11,1320,21,1380,26.7L1440,32L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection1;
