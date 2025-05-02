import React, { useEffect, useRef } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Zap,
  Sparkles,
  Star,
} from 'lucide-react';

// Sample features data
const features = [
  {
    icon: CheckCircle2,
    title: 'Profile Evaluation',
    description:
      'We analyze your academic background, work experience, and extracurricular activities to identify your strengths.',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'from-pink-100 to-rose-100',
  },
  {
    icon: BarChart3,
    title: 'University Matching',
    description:
      'Our algorithm matches your profile with universities where you have the highest chance of admission.',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'from-amber-100 to-orange-100',
  },
  {
    icon: Zap,
    title: 'Personalized Roadmap',
    description:
      'Get a customized step-by-step plan to achieve your study abroad goals with clear milestones.',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'from-emerald-100 to-teal-100',
  },
];

export default function SuperFancySection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated background particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Particle properties
    const particlesArray: any[] = [];
    const numberOfParticles = 100;

    // Create particles
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
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;

        // Colorful particles
        const colors = [
          'rgba(255, 0, 255, 0.5)', // Magenta
          'rgba(0, 255, 255, 0.5)', // Cyan
          'rgba(255, 255, 0, 0.5)', // Yellow
          'rgba(255, 0, 128, 0.5)', // Pink
          'rgba(128, 0, 255, 0.5)', // Purple
          'rgba(0, 255, 128, 0.5)', // Mint
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.7 }}
      />

      {/* Super colorful background gradients */}
      <div className="absolute inset-0 z-0">
        {/* Main background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 opacity-90"></div>

        {/* Colorful gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,0,255,0.3),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(0,255,255,0.3),transparent_50%)]"></div>

        {/* Vibrant blurred gradients */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full opacity-40 blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-12 -left-24 w-80 h-80 bg-gradient-to-br from-fuchsia-400 to-purple-600 rounded-full opacity-40 blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{ animationDelay: '3s' }}
        ></div>

        {/* Colorful floating elements */}
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full animate-float shadow-lg shadow-yellow-500/50"></div>
        <div
          className="absolute top-2/3 right-1/4 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full animate-float shadow-lg shadow-blue-500/50"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/4 right-1/3 w-5 h-5 bg-gradient-to-br from-fuchsia-400 to-pink-600 rounded-full animate-float shadow-lg shadow-pink-500/50"
          style={{ animationDelay: '1.5s' }}
        ></div>

        {/* Fancy geometric shapes */}
        <div className="absolute top-1/2 left-1/6 w-16 h-16 border-4 border-cyan-400 rounded-xl rotate-12 opacity-40 animate-spin-slow"></div>
        <div
          className="absolute bottom-1/3 right-1/6 w-20 h-10 border-4 border-fuchsia-400 rounded-full rotate-45 opacity-40 animate-spin-slow"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-1/4 left-1/2 w-12 h-12 border-4 border-yellow-400 rounded-lg -rotate-12 opacity-40 animate-spin-slow"
          style={{ animationDelay: '3s' }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          {/* Super fancy label with glow effect */}
          <div className="inline-block px-6 py-2.5 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 rounded-full text-white text-sm font-medium mb-6 shadow-lg shadow-fuchsia-500/50 backdrop-blur-sm border border-white/20 animate-shimmer">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span className="tracking-wider">OUR ASSESSMENT PROCESS</span>
              <Sparkles
                className="h-4 w-4 animate-pulse"
                style={{ animationDelay: '0.5s' }}
              />
            </div>
          </div>

          {/* Super colorful heading with rainbow gradient */}
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent pb-2 mb-6 tracking-tight drop-shadow-sm">
            Your Dream Starts With the Right Strategy
          </h2>

          {/* Enhanced description with better typography and color */}
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Every successful study abroad journey starts with a deep
            understanding of who you are and where you stand. Our Profile
            Assessment tool helps you gain that clarity.
          </p>

          {/* Fancy decorative stars */}
          <div className="flex items-center justify-center space-x-4 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 fill-yellow-400 text-yellow-400 animate-pulse`}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>

          {/* Colorful dots */}
          <div className="flex items-center justify-center space-x-3">
            <span className="h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse shadow-lg shadow-blue-500/50"></span>
            <span
              className="h-4 w-4 rounded-full bg-gradient-to-r from-fuchsia-400 to-pink-500 animate-pulse shadow-lg shadow-pink-500/50"
              style={{ animationDelay: '0.5s' }}
            ></span>
            <span
              className="h-3 w-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 animate-pulse shadow-lg shadow-amber-500/50"
              style={{ animationDelay: '1s' }}
            ></span>
          </div>
        </div>

        {/* Super fancy feature cards with glass morphism and colorful effects */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 hover:border-white/40 hover:-translate-y-2"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
                boxShadow: `0 8px 32px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.1)`,
              }}
            >
              {/* Colorful gradient background */}
              <div
                className={`absolute -right-6 -bottom-6 h-40 w-40 bg-gradient-to-br ${feature.bgColor} rounded-full transition-all duration-500 group-hover:scale-[2] opacity-20 group-hover:opacity-30`}
              ></div>

              {/* Fancy feature number with glow */}
              <div className="absolute top-4 right-4 text-5xl font-bold text-white/10 group-hover:text-white/20 transition-colors duration-500">
                {(index + 1).toString().padStart(2, '0')}
              </div>

              {/* Colorful icon with glow effect */}
              <div
                className={`relative inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:bg-white/10 before:backdrop-blur-sm`}
                style={{
                  boxShadow: `0 10px 25px -5px rgba(0,0,0,0.3), 0 0 10px rgba(255,255,255,0.2) inset`,
                }}
              >
                {React.createElement(feature.icon, {
                  className: 'h-8 w-8 relative z-10',
                })}
              </div>

              {/* Enhanced content with colorful text */}
              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Super fancy CTA section with colorful gradients and effects */}
        <div className="relative">
          {/* Colorful glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/70 via-violet-600/70 to-indigo-600/70 rounded-3xl opacity-90 blur-xl"></div>

          {/* Main container with glass effect */}
          <div
            className="relative bg-gradient-to-r from-fuchsia-600/90 via-violet-600/90 to-indigo-600/90 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            style={{
              boxShadow: `0 25px 50px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1) inset`,
            }}
          >
            {/* Animated pattern overlay */}
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400')] mix-blend-overlay opacity-10"></div>

            {/* Animated colorful particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white/40 animate-float-slow"
                  style={{
                    width: `${Math.random() * 12 + 5}px`,
                    height: `${Math.random() * 12 + 5}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    background: `radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 100%)`,
                    boxShadow: `0 0 10px 2px rgba(255,255,255,0.3)`,
                    animationDuration: `${Math.random() * 10 + 10}s`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                ></div>
              ))}
            </div>

            <div className="md:flex items-center justify-between p-8 md:p-12">
              <div className="mb-8 md:mb-0 md:w-2/3">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-md">
                  Ready to map your educational journey?
                </h3>
                <p className="text-white/80">
                  Join thousands of students who found their perfect academic
                  match through our assessment.
                </p>
              </div>

              {/* Super fancy button with glow and gradient */}
              <button className="w-full md:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-full font-semibold px-10 py-5 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden">
                {/* Button shine effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></div>

                <span className="relative z-10">
                  Sign up for your free assessment today!
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add global styles for animations */}
      <style tsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(15px, 15px);
          }
          50% {
            transform: translate(0, 30px);
          }
          75% {
            transform: translate(-15px, 15px);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-shimmer {
          background-size: 200% 100%;
          background-image: linear-gradient(
            to right,
            #c026d3 0%,
            #8b5cf6 25%,
            #4f46e5 50%,
            #8b5cf6 75%,
            #c026d3 100%
          );
          animation: shimmer 8s linear infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </section>
  );
}
