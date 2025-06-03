import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  const handleEmailSubmit = (e: React.FormEvent) => {
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

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, -50, 0],
          x: [0, 50, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"
        animate={{
          y: [0, 60, 0],
          x: [0, -60, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/40 rounded-full"
          style={{
            top: `${10 + i * 8}%`,
            left: `${5 + i * 8}%`,
          }}
          animate={{
            y: [0, -150, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 8 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Runway Lights */}
      <div className="absolute bottom-0 left-0 right-0 h-4 z-10">
        <div className="flex justify-between items-center h-full px-6">
          {Array.from({ length: 30 }, (_, i) => (
            <motion.div
              key={i}
              className="w-4 h-4 bg-blue-400 rounded-full shadow-xl shadow-blue-400/60"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.3, 0.8],
                boxShadow: [
                  '0 0 10px rgba(59, 130, 246, 0.6)',
                  '0 0 25px rgba(59, 130, 246, 1)',
                  '0 0 10px rgba(59, 130, 246, 0.6)',
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen">
        {/* Enhanced Header */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative border-b border-blue-500/30 bg-black/60 backdrop-blur-xl"
        >
          <div className="container mx-auto px-8 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-2xl border border-blue-400/30">
                    <TowerControl className="w-8 h-8 text-white" />
                  </div>
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-3 h-3 text-green-800" />
                  </motion.div>
                </motion.div>
                <div>
                  <h1 className="text-5xl font-black text-white tracking-wider bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    FLIGHT CONTROL
                  </h1>
                  <p className="text-blue-300 text-lg font-mono tracking-wide">
                    Terminal Alpha - Gate 8
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-8 text-lg">
                <motion.div
                  className="flex items-center text-green-400 font-semibold"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <div className="w-4 h-4 bg-green-400 rounded-full mr-3 shadow-lg shadow-green-400/50" />
                  SYSTEMS ONLINE
                </motion.div>
                <div className="text-blue-300 font-mono font-medium">
                  LOCAL TIME: {time}
                </div>
              </div>
            </div>
          </div>
        </motion.header>

        <main className="container mx-auto px-8 py-16">
          {/* Enhanced Flight Status Board */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-20"
          >
            <div className="bg-black/90 border border-amber-500/50 rounded-2xl p-10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-amber-400 font-mono text-3xl font-bold tracking-wider">
                  DEPARTURE BOARD
                </h2>
                <div className="flex items-center text-amber-400 text-xl">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <Radar className="w-7 h-7 mr-3" />
                  </motion.div>
                  PREPARING
                </div>
              </div>

              <div className="bg-slate-900/90 rounded-xl p-8 font-mono border border-slate-700">
                <div className="grid grid-cols-4 gap-8 text-lg text-blue-300 mb-4 uppercase tracking-wide font-semibold">
                  <div>Flight</div>
                  <div>Destination</div>
                  <div>Status</div>
                  <div>Gate</div>
                </div>
                <motion.div
                  className="grid grid-cols-4 gap-8 text-white text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="text-4xl font-black text-amber-400">FLY8</div>
                  <div className="text-blue-100 text-2xl">YOUR DREAMS</div>
                  <div className="flex items-center">
                    <motion.div
                      className="w-4 h-4 bg-amber-400 rounded-full mr-4 shadow-lg shadow-amber-400/50"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    PRE-FLIGHT
                  </div>
                  <div className="text-amber-400 text-3xl">∞</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Enhanced Mission Control */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-10"
            >
              {/* FLY8 Branding */}
              <div className="text-center lg:text-left">
                <motion.div
                  className="inline-flex items-center mb-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-28 h-28 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 rounded-3xl flex items-center justify-center shadow-2xl mr-8 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: [-150, 250] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                    <span className="text-5xl font-black text-white relative z-10">
                      F8
                    </span>
                  </div>
                  <div>
                    <h1 className="text-8xl md:text-9xl font-black text-white tracking-tight">
                      FLY<span className="text-blue-400">8</span>
                    </h1>
                    <p className="text-blue-300 text-2xl font-mono tracking-wider">
                      AVIATION SYSTEMS
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Mission Briefing */}
              <motion.div
                className="bg-slate-800/90 border border-blue-500/30 rounded-2xl p-10 shadow-2xl backdrop-blur-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-8">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <Compass className="w-10 h-10 text-amber-400 mr-5" />
                  </motion.div>
                  <h2 className="text-4xl font-bold text-white">
                    MISSION BRIEFING
                  </h2>
                </div>

                <div className="space-y-8 text-blue-100">
                  <h3 className="text-5xl font-bold text-white leading-tight">
                    Fly8 is <span className="text-amber-400">Fueling Up</span>{' '}
                    for Takeoff!
                  </h3>

                  <p className="text-2xl leading-relaxed">
                    Dear Passenger, your adventure is just a gate away! Our
                    ground crew is performing final system checks, fueling
                    operations are in progress, and our flight deck is preparing
                    for departure — snacks, seatbelts, and sky-high dreams
                    included.
                  </p>

                  <motion.div
                    className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    <div className="flex items-start">
                      <motion.div
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Bell className="w-8 h-8 text-amber-400 mr-5 mt-1" />
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-amber-400 mb-3 text-2xl">
                          BOARDING ANNOUNCEMENT
                        </h4>
                        <p className="text-xl">
                          Please remain in the departure lounge. We'll notify
                          you via our ground communication system the moment we
                          receive clearance for takeoff!
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Ground Control Communication */}
              <motion.div
                className="bg-black/90 border border-green-500/30 rounded-2xl p-10 shadow-2xl backdrop-blur-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    className="w-5 h-5 bg-green-400 rounded-full mr-4"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <h3 className="text-3xl font-bold text-white">
                    GROUND CONTROL
                  </h3>
                </div>

                <p className="text-green-300 mb-8 font-mono text-xl">
                  📡 Join our priority communication channel for real-time
                  flight updates
                </p>

                <form
                  onSubmit={handleEmailSubmit}
                  className="flex flex-col sm:flex-row gap-5"
                >
                  <div className="flex-1 relative">
                    <Mail className="absolute left-5 top-1/2 transform -translate-y-1/2 text-blue-400 w-7 h-7" />
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Enter radio frequency (email)"
                      className="w-full pl-16 pr-5 py-6 bg-slate-800 border border-blue-500/50 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all font-mono text-xl"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-6 px-12 rounded-xl transition-all duration-300 flex items-center justify-center shadow-2xl text-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <TowerControl className="w-6 h-6 mr-3" />
                    CONNECT
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </motion.button>
                </form>

                {showSuccess && (
                  <motion.div
                    className="mt-8 bg-green-500/20 border border-green-400/50 text-green-300 px-8 py-5 rounded-xl flex items-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <motion.div
                      className="w-5 h-5 bg-green-400 rounded-full mr-4"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="font-mono text-xl">
                      ✈️ CONNECTED TO FLIGHT CONTROL - STANDBY FOR UPDATES
                    </span>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>

            {/* Enhanced Radar Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="space-y-10"
            >
              {/* Air Traffic Control Radar */}
              <div className="bg-black/90 border border-green-500/30 rounded-2xl p-10 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold text-white">
                    AIR TRAFFIC CONTROL
                  </h3>
                  <div className="flex items-center text-green-400 text-lg">
                    <motion.div
                      className="w-4 h-4 bg-green-400 rounded-full mr-3"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    ACTIVE
                  </div>
                </div>

                <div className="relative w-80 h-80 mx-auto mb-8">
                  <div className="absolute inset-0 rounded-full border-2 border-green-500/40"></div>
                  <div className="absolute inset-10 rounded-full border border-green-500/25"></div>
                  <div className="absolute inset-20 rounded-full border border-green-500/15"></div>

                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `conic-gradient(from ${radarSweep}deg, transparent 0deg, rgba(34, 197, 94, 0.4) 30deg, transparent 60deg)`,
                    }}
                    animate={{ rotate: radarSweep }}
                  />

                  <motion.div
                    className="absolute top-16 right-20 w-4 h-4 bg-amber-400 rounded-full shadow-xl shadow-amber-400/60"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-24 left-16 w-4 h-4 bg-blue-400 rounded-full shadow-xl shadow-blue-400/60"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.div
                    className="absolute top-32 left-32 w-5 h-5 bg-red-400 rounded-full shadow-xl shadow-red-400/60"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2.2, repeat: Infinity, delay: 1 }}
                  />

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-green-400 rounded-full shadow-xl shadow-green-400/60"></div>
                </div>

                <div className="text-center text-green-300 font-mono text-2xl">
                  SCANNING FOR OPTIMAL FLIGHT PATH...
                </div>
              </div>

              {/* Captain Status */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-slate-800/90 border border-blue-500/30 rounded-2xl p-10 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-3xl font-bold text-white">
                      FLIGHT CREW STATUS
                    </h3>
                    <motion.div
                      className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-xl"
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(34, 197, 94, 0.4)',
                          '0 0 0 15px rgba(34, 197, 94, 0)',
                          '0 0 0 0 rgba(34, 197, 94, 0)',
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      READY
                    </motion.div>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    />
                    <img
                      src={landingImg}
                      alt="Captain"
                      className="w-full h-96 object-cover"
                    />

                    <motion.div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8 z-20"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.5 }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-bold text-2xl">
                            CAPTAIN
                          </h4>
                          <p className="text-blue-300 text-xl">
                            Flight Operations Ready
                          </p>
                        </div>
                        <div className="flex items-center text-amber-400">
                          <motion.div
                            className="w-4 h-4 bg-amber-400 rounded-full mr-3"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          ON DUTY
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Airport Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-24"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-black/80 border border-blue-500/30 rounded-2xl p-10 text-center shadow-2xl backdrop-blur-xl"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <motion.div
                    className={`bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <motion.div
                    className="text-5xl font-black text-white mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5 + index * 0.1, type: 'spring' }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-blue-300 mb-4 text-xl">{stat.label}</div>
                  <div
                    className={`text-sm text-${stat.color}-400 font-mono bg-${stat.color}-400/10 px-4 py-3 rounded-xl border border-${stat.color}-400/30`}
                  >
                    {stat.status}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </main>

        {/* Enhanced Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-32 border-t border-blue-500/30 bg-black/60 backdrop-blur-xl"
        >
          <div className="container mx-auto px-8 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                className="flex items-center mb-8 md:mb-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <TowerControl className="w-8 h-8 text-blue-400 mr-5" />
                <span className="text-blue-300 font-mono text-xl">
                  © 2025 FLY8 AVIATION SYSTEMS
                </span>
              </motion.div>
              <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-10 text-lg text-blue-300 font-mono">
                <span>TERMINAL STATUS: OPERATIONAL</span>
                <span className="hidden sm:block">•</span>
                <span>WEATHER: CLEAR SKIES</span>
                <span className="hidden sm:block">•</span>
                <span>CLEARANCE: PENDING</span>
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
