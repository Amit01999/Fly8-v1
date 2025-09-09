import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  Search,
  MessageSquare,
  GraduationCap,
  Globe,
  Award,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ArrowUpRight,
  Layers,
  Users,
  Star,
  Zap,
  Compass,
} from 'lucide-react';
import heobg from '../assets/picture/hero-bg.png';
import { Link } from 'react-router-dom';
import heroImage from '../assets/picture/heroImage.jpg';
const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 300;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;

        // 🌈 Soft pastel rainbow color using HSL
        const hue = Math.floor(Math.random() * 360);
        this.color = `hsla(${hue}, 60%, 80%, 0.5)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }

        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <section className="relative min-h-[110vh] pt-10 pb-20 overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-100 to-pink-100">
      {/* Canvas background for particle effect */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 opacity-70"
      />

      <div className="max-container">
        <div className="flex flex-col lg:gap-10 lg:flex-row ">
          {/* Hero Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 "
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Your Gateway to{' '}
                <motion.span
                  className="relative inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <span className="font-black italic bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
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
              className="text-lg lg:text-xl mb-10 text-gray-700 max-w-xl leading-relaxed font-light"
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
                className="relative group overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 text-white hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-500 rounded-full px-8 py-6 text-base font-medium border border-white/20"
              >
                <span className="relative z-10 flex items-center">
                  <Search className="mr-2 h-5 w-5" />
                  <Link to={'/universities'}>Explore Universities</Link>
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
                  <Link to={'signup/student'}>Talk to AI Assistant</Link>
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
                  <p className="text-gray-900 font-bold">1.2K+</p>
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
                  <p className="text-gray-900 font-bold">4K+</p>
                  <p className="text-gray-600 text-xs">Institutions</p>
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
                  <p className="text-gray-900 font-bold">92%</p>
                  <p className="text-gray-600 text-xs">Success Rate</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          {/* Hero Image */}
          <motion.div
            className="w-full lg:w-4/5 relative z-10 max-sm:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* 3D Image Card with Glassmorphism */}
            <div className="relative rounded-3xl shadow-2xl backdrop-blur-md bg-white/70 p-3 ring-1 ring-white/20 hover:scale-[1.02] transition-transform duration-500">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src={heroImage}
                  alt="Students studying together"
                  className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* AI Matching Section */}
            <div className="relative overflow-hidden rounded-2xl mt-6 p-5 bg-white/80 backdrop-blur-xl shadow-md ring-1 ring-gray-200">
              {/* Background Blobs */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-indigo-300/90 to-blue-300/80 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-tr from-blue-300/90 to-cyan-300/80 rounded-full blur-2xl"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-indigo-500 text-white text-lg shadow-md shadow-indigo-300/40">
                    🤖
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-800 text-base">
                      AI Program Matching
                    </h3>
                    <p className="text-sm text-gray-600 leading-tight">
                      Discover your perfect academic fit in minutes
                    </p>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link to="/AiMatch">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full text-primary border border-indigo-300 bg-white/70 backdrop-blur-md shadow-sm hover:bg-indigo-500 hover:shadow-md transition-all"
                    >
                      Start Matching <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
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

export default HeroSection;
