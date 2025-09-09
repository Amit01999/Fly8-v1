import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import {
  GraduationCap,
  Globe,
  Users,
  FileText,
  Shield,
  Star,
  CheckCircle,
  Sparkles,
  Award,
  BookOpen,
  Target,
  Heart,
  Building,
  ArrowRight,
  TrendingUp,
  MapPin,
  Plane,
  Home,
  CreditCard,
  Briefcase,
  Eye,
  UserCheck,
} from 'lucide-react';

const AuthLayout = ({ children }) => {
  const location = useLocation();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -12, 0],
      rotate: [0, 2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 relative">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%234F46E5\' fill-opacity=\'0.03\'%3E%3Ccircle cx=\'8\' cy=\'8\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Subtle Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-400/8 to-indigo-400/6 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-32 h-32 bg-gradient-to-br from-violet-400/8 to-purple-400/6 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="flex flex-col lg:flex-row min-h-screen relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Side - Enhanced Benefits Section */}
        <div className="order-2 lg:order-1 flex flex-col justify-center px-4 sm:px-6 lg:px-10 xl:px-12 py-8 bg-gradient-to-br from-white/95 via-blue-50/90 to-indigo-50/80 backdrop-blur-xl lg:border-r border-white/30 shadow-lg lg:w-1/2">
          {location.pathname.includes('/signup/student') ? (
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="max-w-xl mx-auto w-full"
            >
              {/* Enhanced Header with Brand */}
              <div className="mb-8">
                <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                  Join{' '}
                  <span className="bg-gradient-to-r from-[#1C8DEE] to-blue-600 bg-clip-text text-transparent">
                    Fly8
                  </span>{' '}
                </h2>
                <p className="text-gray-700 text-lg sm:text-xl leading-relaxed font-medium">
                  Explore{' '}
                  <span className="font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-xl">
                    52 countries
                  </span>{' '}
                  and{' '}
                  <span className="font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-xl">
                    4000+ universities
                  </span>{' '}
                  worldwide. With Fly8, get{' '}
                  <span className="font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-xl">
                    end-to-end guidance
                  </span>{' '}
                  from application to placement. Your dream study abroad journey
                  starts here.
                </p>
              </div>

              {/* October Special Offer - Moved to Top */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative p-6 rounded-3xl bg-gradient-to-r from-orange-50/90 to-amber-50/90 border border-orange-200/60 shadow-lg overflow-hidden mb-8"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-t-3xl"></div>

                {/* Decorative elements */}
                <div className=" pericarditisabsolute top-4 right-4 w-8 h-8 bg-orange-200/40 rounded-full blur-sm"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-amber-200/40 rounded-full blur-sm"></div>

                <div className="flex items-center mb-5">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <Award className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="font-black text-orange-700 text-lg sm:text-xl">
                    🎁 October Special Offer
                  </h3>
                </div>

                <p className="text-gray-700 mb-5 text-base font-medium">
                  Register before{' '}
                  <span className="font-black text-orange-600 bg-orange-100 px-3 py-1 rounded-xl">
                    October 31st
                  </span>{' '}
                  and get:
                </p>

                <div className="space-y-4">
                  {[
                    '⭐ Free IELTS Preparation Course',
                    '⭐ Free PTE Preparation Course',
                    '⭐ Free Duolingo Test Preparation',
                  ].map((offer, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                      className="flex items-center space-x-4 bg-white/60 rounded-2xl p-3 backdrop-blur-sm border border-orange-100"
                    >
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-gray-800 text-sm font-bold">
                        {offer}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Fly8 8 Services Grid */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mb-8"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
                    Our{' '}
                    <span className="bg-gradient-to-r from-[#1C8DEE] to-blue-600 bg-clip-text text-transparent">
                      8 Services
                    </span>
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg font-medium">
                    Complete{' '}
                    <span className="font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-xl">
                      end-to-end support
                    </span>{' '}
                    for your study abroad journey
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Profile Assessment',
                      color: 'from-blue-500 to-blue-600',
                      bgColor: 'from-blue-50/80 to-blue-100/60',
                      borderColor: 'border-blue-200/50',
                      description: 'Evaluate your eligibility & strengths',
                      number: '01',
                      icon: Eye,
                    },
                    {
                      title: 'Pre-Application Support',
                      color: 'from-emerald-500 to-emerald-600',
                      bgColor: 'from-emerald-50/80 to-emerald-100/60',
                      borderColor: 'border-emerald-200/50',
                      description: 'Prepare documents & statements',
                      number: '02',
                      icon: FileText,
                    },
                    {
                      title: 'Apply to Universities',
                      color: 'from-purple-500 to-purple-600',
                      bgColor: 'from-purple-50/80 to-purple-100/60',
                      borderColor: 'border-purple-200/50',
                      description: 'Apply to 4000+ universities worldwide',
                      number: '03',
                      icon: Building,
                    },
                    {
                      title: 'Visa & Interview Support',
                      color: 'from-rose-500 to-rose-600',
                      bgColor: 'from-rose-50/80 to-rose-100/60',
                      borderColor: 'border-rose-200/50',
                      description: 'Get ready for interviews & visa approvals',
                      number: '04',
                      icon: Shield,
                    },
                    {
                      title: 'Ticket & Travel Support',
                      color: 'from-amber-500 to-amber-600',
                      bgColor: 'from-amber-50/80 to-amber-100/60',
                      borderColor: 'border-amber-200/50',
                      description: 'Book flights & manage travel logistics',
                      number: '05',
                      icon: Plane,
                    },
                    {
                      title: 'Find Accommodation',
                      color: 'from-indigo-500 to-indigo-600',
                      bgColor: 'from-indigo-50/80 to-indigo-100/60',
                      borderColor: 'border-indigo-200/50',
                      description: 'Comfortable housing near your university',
                      number: '06',
                      icon: Home,
                    },
                    {
                      title: 'Education Loans',
                      color: 'from-pink-500 to-pink-600',
                      bgColor: 'from-pink-50/80 to-pink-100/60',
                      borderColor: 'border-pink-200/50',
                      description: 'Secure loans for tuition & living expenses',
                      number: '07',
                      icon: CreditCard,
                    },
                    {
                      title: 'Find Jobs Abroad',
                      color: 'from-teal-500 to-teal-600',
                      bgColor: 'from-teal-50/80 to-teal-100/60',
                      borderColor: 'border-teal-200/50',
                      description:
                        'Career opportunities during & after studies',
                      number: '08',
                      icon: Briefcase,
                    },
                  ].map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          delay: 0.8 + index * 0.08,
                          duration: 0.6,
                          ease: 'easeOut',
                        }}
                        className="group relative"
                      >
                        <motion.div
                          className={`p-5 rounded-2xl bg-gradient-to-br ${service.bgColor} backdrop-blur-sm border ${service.borderColor} hover:border-opacity-100 hover:shadow-lg hover:shadow-gray-400/20 transition-all duration-500 hover:-translate-y-2 hover:scale-105`}
                          whileHover={{
                            boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.12)',
                          }}
                        >
                          {/* Content */}
                          <div className="flex items-center justify-between mb-4">
                            <motion.div
                              className={`px-3 py-1.5 bg-gradient-to-r ${service.color} rounded-xl shadow-md text-white text-xs font-bold`}
                              whileHover={{ scale: 1.05 }}
                            >
                              {service.number}
                            </motion.div>
                            <motion.div
                              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-md`}
                              whileHover={{
                                rotate: 360,
                                scale: 1.1,
                              }}
                              transition={{ duration: 0.6 }}
                            >
                              <IconComponent className="w-5 h-5 text-white" />
                            </motion.div>
                          </div>
                          <h4 className="font-bold text-gray-900 text-sm leading-tight mb-2">
                            {service.title}
                          </h4>
                          <p className="text-gray-600 text-xs leading-relaxed">
                            {service.description}
                          </p>

                          {/* Hover effect overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="flex items-center justify-center space-x-6 pt-6 border-t border-gray-200/50"
              >
                <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-green-200/50">
                  <BookOpen className="w-5 h-5 text-[#1C8DEE]" />
                  <span className="text-sm font-bold text-gray-700">
                    5000+ Students
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-yellow-200/50">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-700">
                    4.9/5 Rating
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            // Enhanced Default left side for other pages
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center relative z-10 max-w-xl mx-auto w-full"
            >
              <motion.div
                className="w-24 h-24 bg-white/20 backdrop-blur-lg rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl border border-white/30"
                variants={floatingVariants}
                animate="animate"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <GraduationCap className="w-12 h-12 text-gray-700" />
              </motion.div>

              <h1 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
                Welcome to
                <br />
                <span className="text-yellow-300 relative">
                  Fly8
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1.5 bg-yellow-300 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-700 max-w-md mx-auto leading-relaxed mb-8 font-medium">
                Your trusted partner for global education success 🚀
              </p>

              <motion.div
                className="flex items-center justify-center space-x-3 bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                    </motion.div>
                  ))}
                </div>
                <span className="text-gray-700 font-bold">
                  Trusted by 5000+ students
                </span>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Right Side - Enhanced Form Container */}
        <div className="order-1 lg:order-2 w-full flex flex-col justify-center px-4 sm:px-6 lg:px-10 xl:px-14 py-12 bg-gradient-to-br from-green-50 via-emerald-50/90 to-teal-50/80 backdrop-blur-xl lg:w-1/2">
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_2px_2px,_#10b981_1px,_transparent_0)] bg-[length:40px_40px]"></div>

          {/* Floating decoration */}
          <motion.div
            className="absolute top-12 right-12 w-20 h-20 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="w-full max-w-full mx-auto relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {children}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthLayout;
