import React, { useState, useEffect } from 'react';
import {
  TowerControl,
  Radar,
  Mail,
  ArrowRight,
  Bell,
  Compass,
  Users,
  MapPin,
  Plane,
  Sparkles,
} from 'lucide-react';
import landingImg from '../assets/picture/landingfpageimage.jpg';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [radarSweep, setRadarSweep] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const radarInterval = setInterval(() => {
      setRadarSweep(prev => (prev + 2) % 360);
    }, 50);

    const timeInterval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(radarInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const handleEmailSubmit = e => {
    e.preventDefault();
    if (email.trim()) {
      setShowSuccess(true);
      setEmail('');
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const stats = [
    {
      icon: Users,
      label: 'Passengers Waiting',
      value: '2,847',
      status: 'BOARDING SOON',
      color: 'blue',
    },
    {
      icon: MapPin,
      label: 'Destinations',
      value: '∞',
      status: 'WORLDWIDE',
      color: 'purple',
    },
    {
      icon: Plane,
      label: 'Flight Status',
      value: 'PREP',
      status: 'FINAL CHECKS',
      color: 'amber',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black"></div>

      {/* Control Tower Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Floating Orbs - Hidden on mobile */}
      <div
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl hidden sm:block"
        style={{
          animation: 'float1 20s ease-in-out infinite',
        }}
      />

      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl hidden sm:block"
        style={{
          animation: 'float2 25s ease-in-out infinite',
        }}
      />

      {/* Floating Particles - Reduced on mobile */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/40 rounded-full hidden md:block"
          style={{
            top: `${10 + i * 8}%`,
            left: `${5 + i * 8}%`,
            animation: `particle${i} ${8 + i * 0.5}s ease-in-out infinite ${
              i * 0.8
            }s`,
          }}
        />
      ))}

      {/* Runway Lights - Responsive count */}
      <div className="absolute bottom-0 left-0 right-0 h-4 z-10">
        <div className="flex justify-between items-center h-full px-2 sm:px-6">
          {Array.from({ length: window.innerWidth < 640 ? 15 : 30 }, (_, i) => (
            <div
              key={i}
              className="w-2 h-2 sm:w-4 sm:h-4 bg-blue-400 rounded-full shadow-xl shadow-blue-400/60"
              style={{
                animation: `runway ${2.5}s ease-in-out infinite ${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen">
        {/* Enhanced Header - Mobile Responsive */}
        <header className="relative border-b border-blue-500/30 bg-black/60 backdrop-blur-xl">
          <div className="container mx-auto px-4 sm:px-8 py-4 sm:py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-3 sm:space-x-6">
                <div className="relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-2xl border border-blue-400/30">
                    <TowerControl className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 text-green-800" />
                  </div>
                </div>
                <div>
                  <h1 className="text-3xl sm:text-5xl font-black text-white tracking-wider bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    FLIGHT CONTROL
                  </h1>
                  <p className="text-blue-300 text-sm sm:text-lg font-mono tracking-wide">
                    Terminal Alpha - Gate 8
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm sm:text-lg">
                <div className="flex items-center text-green-400 font-semibold">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full mr-2 sm:mr-3 shadow-lg shadow-green-400/50 animate-pulse" />
                  SYSTEMS ONLINE
                </div>
                <div className="text-blue-300 font-mono font-medium text-xs sm:text-base">
                  LOCAL TIME: {time}
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 sm:px-8 py-8 sm:py-16">
          {/* Enhanced Flight Status Board - Mobile Responsive */}
          <div className="mb-12 sm:mb-20">
            <div className="bg-black/90 border border-amber-500/50 rounded-2xl p-4 sm:p-10 shadow-2xl backdrop-blur-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-8 space-y-4 sm:space-y-0">
                <h2 className="text-amber-400 font-mono text-xl sm:text-3xl font-bold tracking-wider">
                  DEPARTURE BOARD
                </h2>
                <div className="flex items-center text-amber-400 text-lg sm:text-xl">
                  <div className="animate-spin">
                    <Radar className="w-5 h-5 sm:w-7 sm:h-7 mr-2 sm:mr-3" />
                  </div>
                  PREPARING
                </div>
              </div>

              <div className="bg-slate-900/90 rounded-xl p-4 sm:p-8 font-mono border border-slate-700">
                <div className="grid grid-cols-4 gap-2 sm:gap-8 text-sm sm:text-lg text-blue-300 mb-2 sm:mb-4 uppercase tracking-wide font-semibold">
                  <div>Flight</div>
                  <div>Destination</div>
                  <div>Status</div>
                  <div>Gate</div>
                </div>
                <div className="grid grid-cols-4 gap-2 sm:gap-8 text-white text-sm sm:text-xl">
                  <div className="text-xl sm:text-4xl font-black text-amber-400">
                    FLY8
                  </div>
                  <div className="text-blue-100 text-base sm:text-2xl">
                    YOUR DREAMS
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 sm:w-4 sm:h-4 bg-amber-400 rounded-full mr-2 sm:mr-4 shadow-lg shadow-amber-400/50 animate-pulse" />
                    <span className="text-xs sm:text-base">PRE-FLIGHT</span>
                  </div>
                  <div className="text-amber-400 text-xl sm:text-3xl">∞</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20 items-start">
            {/* Enhanced Mission Control - Mobile Responsive */}
            <div className="space-y-6 sm:space-y-10">
              {/* FLY8 Branding */}
              <div className="text-center lg:text-left">
                <div className="inline-flex flex-col sm:flex-row items-center mb-6 sm:mb-10 space-y-4 sm:space-y-0">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 rounded-3xl flex items-center justify-center shadow-2xl sm:mr-8 relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      style={{
                        animation: 'shimmer 3s linear infinite',
                      }}
                    />
                    <span className="text-3xl sm:text-5xl font-black text-white relative z-10">
                      F8
                    </span>
                  </div>
                  <div className="text-center lg:text-left">
                    <h1 className="text-5xl sm:text-8xl md:text-9xl font-black text-white tracking-tight">
                      FLY<span className="text-blue-400">8</span>
                    </h1>
                    <p className="text-blue-300 text-lg sm:text-2xl font-mono tracking-wider">
                      AVIATION SYSTEMS
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Briefing */}
              <div className="bg-slate-800/90 border border-blue-500/30 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center mb-6 sm:mb-8">
                  <div className="animate-spin">
                    <Compass className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400 mr-3 sm:mr-5" />
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-bold text-white">
                    MISSION BRIEFING
                  </h2>
                </div>

                <div className="space-y-6 sm:space-y-8 text-blue-100">
                  <h3 className="text-2xl sm:text-5xl font-bold text-white leading-tight">
                    Fly8 is <span className="text-amber-400">Fueling Up</span>{' '}
                    for Takeoff!
                  </h3>

                  <p className="text-lg sm:text-2xl leading-relaxed">
                    Dear Passenger, your adventure is just a gate away! Our
                    ground crew is performing final system checks, fueling
                    operations are in progress, and our flight deck is preparing
                    for departure — snacks, seatbelts, and sky-high dreams
                    included.
                  </p>

                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 sm:p-8">
                    <div className="flex items-start">
                      <div className="animate-bounce">
                        <Bell className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 mr-3 sm:mr-5 mt-1" />
                      </div>
                      <div>
                        <h4 className="font-bold text-amber-400 mb-2 sm:mb-3 text-lg sm:text-2xl">
                          BOARDING ANNOUNCEMENT
                        </h4>
                        <p className="text-base sm:text-xl">
                          Please remain in the departure lounge. We'll notify
                          you via our ground communication system the moment we
                          receive clearance for takeoff!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ground Control Communication */}
              <div className="bg-black/90 border border-green-500/30 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-400 rounded-full mr-3 sm:mr-4 animate-pulse" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    GROUND CONTROL
                  </h3>
                </div>

                <p className="text-green-300 mb-6 sm:mb-8 font-mono text-lg sm:text-xl">
                  📡 Join our priority communication channel for real-time
                  flight updates
                </p>

                <div className="flex flex-col gap-4 sm:gap-5">
                  <div className="relative">
                    <Mail className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5 sm:w-7 sm:h-7" />
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Enter radio frequency (email)"
                      className="w-full pl-12 sm:pl-16 pr-4 sm:pr-5 py-4 sm:py-6 bg-slate-800 border border-blue-500/50 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all font-mono text-base sm:text-xl"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={handleEmailSubmit}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 sm:py-6 px-8 sm:px-12 rounded-xl transition-all duration-300 flex items-center justify-center shadow-2xl text-lg sm:text-xl transform hover:scale-105 active:scale-95"
                  >
                    <TowerControl className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                    CONNECT
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3" />
                  </button>
                </div>

                {showSuccess && (
                  <div className="mt-6 sm:mt-8 bg-green-500/20 border border-green-400/50 text-green-300 px-4 sm:px-8 py-4 sm:py-5 rounded-xl flex items-center">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-400 rounded-full mr-3 sm:mr-4 animate-pulse" />
                    <span className="font-mono text-sm sm:text-xl">
                      ✈️ CONNECTED TO FLIGHT CONTROL - STANDBY FOR UPDATES
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Enhanced Radar Section - Mobile Responsive */}
            <div className="space-y-6 sm:space-y-10">
              {/* Air Traffic Control Radar */}
              <div className="bg-black/90 border border-green-500/30 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 space-y-2 sm:space-y-0">
                  <h3 className="text-xl sm:text-3xl font-bold text-white">
                    AIR TRAFFIC CONTROL
                  </h3>
                  <div className="flex items-center text-green-400 text-base sm:text-lg">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full mr-2 sm:mr-3 animate-pulse" />
                    ACTIVE
                  </div>
                </div>

                <div className="relative w-60 h-60 sm:w-80 sm:h-80 mx-auto mb-6 sm:mb-8">
                  <div className="absolute inset-0 rounded-full border-2 border-green-500/40"></div>
                  <div className="absolute inset-6 sm:inset-10 rounded-full border border-green-500/25"></div>
                  <div className="absolute inset-12 sm:inset-20 rounded-full border border-green-500/15"></div>

                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `conic-gradient(from ${radarSweep}deg, transparent 0deg, rgba(34, 197, 94, 0.4) 30deg, transparent 60deg)`,
                      transform: `rotate(${radarSweep}deg)`,
                    }}
                  />

                  <div className="absolute top-12 right-16 sm:top-16 sm:right-20 w-3 h-3 sm:w-4 sm:h-4 bg-amber-400 rounded-full shadow-xl shadow-amber-400/60 animate-pulse" />
                  <div className="absolute bottom-16 left-12 sm:bottom-24 sm:left-16 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full shadow-xl shadow-blue-400/60 animate-pulse" />
                  <div className="absolute top-24 left-24 sm:top-32 sm:left-32 w-4 h-4 sm:w-5 sm:h-5 bg-red-400 rounded-full shadow-xl shadow-red-400/60 animate-pulse" />

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-green-400 rounded-full shadow-xl shadow-green-400/60"></div>
                </div>

                <div className="text-center text-green-300 font-mono text-lg sm:text-2xl">
                  SCANNING FOR OPTIMAL FLIGHT PATH...
                </div>
              </div>

              {/* Captain Status */}
              <div className="relative">
                <div className="bg-slate-800/90 border border-blue-500/30 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0">
                    <h3 className="text-xl sm:text-3xl font-bold text-white">
                      FLIGHT CREW STATUS
                    </h3>
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-bold shadow-xl animate-pulse">
                      READY
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent z-10" />
                    <div className="w-full h-60 sm:h-96 bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center text-white text-4xl font-bold">
                      <img
                        src={landingImg}
                        alt="Captain"
                        className="w-full h-96 object-cover"
                      />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-8 z-20">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-bold text-lg sm:text-2xl">
                            CAPTAIN
                          </h4>
                          <p className="text-blue-300 text-base sm:text-xl">
                            Flight Operations Ready
                          </p>
                        </div>
                        <div className="flex items-center text-amber-400">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-amber-400 rounded-full mr-2 sm:mr-3 animate-pulse" />
                          ON DUTY
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Airport Stats - Mobile Responsive */}
          <div className="mt-16 sm:mt-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-black/80 border border-blue-500/30 rounded-2xl p-6 sm:p-10 text-center shadow-2xl backdrop-blur-xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300"
                >
                  <div
                    className={`bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-700 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-2xl`}
                  >
                    <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="text-3xl sm:text-5xl font-black text-white mb-3 sm:mb-4">
                    {stat.value}
                  </div>
                  <div className="text-blue-300 mb-3 sm:mb-4 text-lg sm:text-xl">
                    {stat.label}
                  </div>
                  <div
                    className={`text-sm text-${stat.color}-400 font-mono bg-${stat.color}-400/10 px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-${stat.color}-400/30`}
                  >
                    {stat.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Enhanced Footer - Mobile Responsive */}
        <footer className="mt-16 sm:mt-32 border-t border-blue-500/30 bg-black/60 backdrop-blur-xl">
          <div className="container mx-auto px-4 sm:px-8 py-8 sm:py-12">
            <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-0 sm:flex-row sm:justify-between">
              <div className="flex items-center">
                <TowerControl className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mr-3 sm:mr-5" />
                <span className="text-blue-300 font-mono text-base sm:text-xl">
                  © 2025 FLY8 AVIATION SYSTEMS
                </span>
              </div>
              <div className="flex flex-col items-center space-y-2 sm:space-y-0 sm:flex-row sm:space-x-6 text-sm sm:text-lg text-blue-300 font-mono">
                <span>TERMINAL STATUS: OPERATIONAL</span>
                <span className="hidden sm:block">•</span>
                <span>WEATHER: CLEAR SKIES</span>
                <span className="hidden sm:block">•</span>
                <span>CLEARANCE: PENDING</span>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Add CSS animations */}
      <style>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(50px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-30px, 30px) scale(0.9);
          }
        }

        @keyframes float2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-60px, 60px) scale(1.2);
          }
          66% {
            transform: translate(40px, -40px) scale(0.8);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-150px);
          }
          100% {
            transform: translateX(250px);
          }
        }

        @keyframes runway {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        ${[...Array(6)]
          .map(
            (_, i) => `
          @keyframes particle${i} {
            0%, 100% { transform: translateY(0) scale(0.5); opacity: 0; }
            50% { transform: translateY(-150px) scale(1.2); opacity: 1; }
          }
        `
          )
          .join('')}
      `}</style>
    </div>
  );
}
