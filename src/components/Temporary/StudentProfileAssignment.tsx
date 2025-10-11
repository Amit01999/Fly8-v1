import { motion } from 'framer-motion';
import {
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Clock,
  Shield,
  Sparkles,
} from 'lucide-react';

const StudentProfileAssignment = () => {
  const handleFormRedirect = () => {
    window.open('https://forms.gle/XJjz2JRo8SBK7re99', '_blank');
  };

  const features = [
    {
      title: 'Academic Background Assessment',
      description:
        'We analyze your educational history to find perfect matches',
      icon: '🎓',
    },
    {
      title: 'Career Goals Evaluation',
      description: 'Align your aspirations with optimal program pathways',
      icon: '🎯',
    },
    {
      title: 'Program Matching Assistance',
      description: 'Get personalized recommendations from top institutions',
      icon: '✨',
    },
  ];

  const stats = [
    { label: 'Success Rate', value: '95%', icon: '📊' },
    { label: 'Students Placed', value: '2000+', icon: '👥' },
    { label: 'Partner Universities', value: '3000+', icon: '🏛️' },
  ];

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-4 sm:px-6 py-12 overflow-hidden">
      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/40 to-indigo-400/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-400/40 to-purple-400/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-300/30 to-blue-300/30 rounded-full blur-3xl"
        />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 bg-white/90 backdrop-blur-2xl border border-white/60 rounded-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.04)] max-w-4xl w-full overflow-hidden py-10"
      >
        {/* Gradient Header Bar */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

        <div className="px-8 sm:px-12 lg:px-16 py-12 sm:py-16">
          {/* Icon and Badge Container */}
          <div className="flex flex-col items-center mb-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                type: 'spring',
                stiffness: 200,
                damping: 20,
              }}
              className="relative mb-6"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-[20px] blur-2xl opacity-30 scale-110" />
              <motion.div
                whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-5 rounded-[20px] shadow-xl"
              >
                <GraduationCap
                  className="w-12 h-12 text-white"
                  strokeWidth={1.8}
                />
              </motion.div>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 text-blue-700 text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              Required Assignment
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            </motion.div>
          </div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent leading-tight">
              Student Profile Assignment
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-slate-600 text-base sm:text-lg text-center mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            Help us create your personalized academic journey by sharing your
            background, interests, and aspirations. Your profile enables us to
            match you with the best international programs and opportunities.
          </motion.p>

          {/* Enhanced Features List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid gap-4 mb-10"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="group relative bg-gradient-to-br from-slate-50/50 to-blue-50/30 border border-slate-200/60 rounded-2xl p-5 hover:shadow-md hover:border-blue-300/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 rounded-2xl transition-all duration-300" />
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl border border-slate-200/60 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 text-base mb-1 flex items-center gap-2">
                      {feature.title}
                      <CheckCircle2
                        className="w-4 h-4 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        strokeWidth={2.5}
                      />
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="grid grid-cols-3 gap-4 mb-10 p-6 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl border border-blue-100/60"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleFormRedirect}
              className="group relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-[0_10px_40px_-10px_rgba(79,70,229,0.5)] hover:shadow-[0_20px_50px_-10px_rgba(79,70,229,0.6)] transition-all duration-300 inline-flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Complete Profile Form</span>
              <ArrowRight
                className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                strokeWidth={2.5}
              />

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </motion.button>
          </motion.div>

          {/* Footer Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-10 pt-8 border-t border-slate-200/80"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-slate-600">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full"
              >
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="font-medium">5 minutes to complete</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full"
              >
                <Shield className="w-4 h-4 text-green-600" />
                <span className="font-medium">Secure & confidential</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentProfileAssignment;
