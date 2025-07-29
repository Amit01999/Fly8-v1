import React, { useState, useEffect } from 'react';
import {
  Brain,
  Globe,
  Search,
  ArrowRight,
  Sparkles,
  Zap,
  Star,
} from 'lucide-react';

const AIMatch: React.FC = () => {
  const [email, setEmail] = useState('');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${20 + i * 10}%`,
              top: `${10 + i * 8}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + (i % 3)}s`,
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full opacity-60" />
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div
          className="text-center"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          {/* Fancy Logo */}
          <div className="flex justify-center mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-75" />
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-violet-500/20 backdrop-blur-xl">
                <Brain className="w-16 h-16 text-violet-400 drop-shadow-lg" />
                <div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-full flex items-center justify-center animate-spin"
                  style={{ animationDuration: '3s' }}
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Spectacular Title */}
          <div className="mb-8">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight mb-4">
              <span className="inline-block bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                FLY8
              </span>
              <br />
              <span className="inline-block text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                AI MATCH
              </span>
            </h1>

            {/* Animated Badge */}
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full border border-violet-400/30 backdrop-blur-xl mb-6">
              <Star className="w-4 h-4 text-yellow-400 mr-2 animate-pulse" />
              <span className="text-violet-200 font-medium">
                Revolutionary AI Technology
              </span>
              <Star className="w-4 h-4 text-yellow-400 ml-2 animate-pulse" />
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Experience the future of study abroad matching with our{' '}
            <span className="text-violet-400 font-semibold">
              next-generation AI
            </span>
            . Personalized, intelligent, and designed for your success.
          </p>

          {/* Premium CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl font-bold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-violet-500/25">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              <div className="relative flex items-center">
                <Zap className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Get Early Access
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Superpowers
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Search className="w-10 h-10" />,
              title: 'Neural Matching',
              description:
                'Advanced AI algorithms analyze thousands of parameters to find your perfect university match with 99% accuracy.',
              gradient: 'from-violet-500 to-purple-500',
              glow: 'violet',
            },
            {
              icon: <Globe className="w-10 h-10" />,
              title: 'Global Network',
              description:
                'Connect with 2000+ universities worldwide through our intelligent platform with real-time data synchronization.',
              gradient: 'from-cyan-500 to-blue-500',
              glow: 'cyan',
            },
            {
              icon: <Brain className="w-10 h-10" />,
              title: 'Predictive Analytics',
              description:
                'Machine learning models predict your admission chances and career outcomes with unprecedented precision.',
              gradient: 'from-purple-500 to-pink-500',
              glow: 'purple',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: `slideUp 0.8s ease-out ${index * 0.2}s both`,
              }}
            >
              {/* Card Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              {/* Main Card */}
              <div className="relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-slate-700/50 backdrop-blur-xl group-hover:border-violet-500/30 transition-all duration-500 hover:transform hover:scale-105">
                {/* Icon */}
                <div className="flex justify-center mb-8">
                  <div
                    className={`relative p-6 bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-2xl shadow-${feature.glow}-500/25`}
                  >
                    <div className="text-white">{feature.icon}</div>
                    <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-center mb-4 text-white group-hover:text-violet-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-center leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative bg-gradient-to-r from-violet-900/50 to-purple-900/50 backdrop-blur-xl py-24 border-y border-violet-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Join the Revolution
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Be among the first to experience the future of education matching.
            Exclusive early access awaits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your.email@domain.com"
                className="w-full px-8 py-4 bg-slate-800/50 border border-violet-500/30 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-violet-400 focus:bg-slate-800/70 transition-all duration-300 backdrop-blur-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-2xl opacity-0 focus-within:opacity-100 transition-opacity duration-300" />
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold rounded-2xl hover:from-purple-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-violet-500/25 whitespace-nowrap">
              Reserve Spot
            </button>
          </div>

          <p className="text-slate-400 text-sm mt-6">
            ✨ No spam, just innovation • Unsubscribe anytime
          </p>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AIMatch;
