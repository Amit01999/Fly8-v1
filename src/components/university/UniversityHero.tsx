import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Award } from 'lucide-react';

type UniversityHeroProps = {
  universityName: string;
  campusName: string;
  location: string;
  imageUrl: string;
  tagline: string;
  stats: [string, string, string]; // [established, accreditation, locations]
};

export function UniversityHero({
  universityName,
  campusName,
  location,
  imageUrl,
  tagline,
  stats,
}: UniversityHeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt={universityName}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-900/60 to-sky-800/70 mix-blend-multiply" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          {/* Location */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-blue-200">
            <MapPin className="w-5 h-5" />
            {location}
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
            <span className="bg-gradient-to-r from-blue-300 via-white to-sky-300 bg-clip-text text-transparent">
              {universityName}
            </span>
            <span className="block text-xl sm:text-2xl md:text-4xl font-light text-blue-100 mt-2">
              {campusName}
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl mt-6 mb-8 max-w-3xl mx-auto text-blue-100">
            {tagline}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-sm text-white backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-md transition">
              <Calendar className="w-4 h-4" />
              {stats[0]}
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-sm text-white backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-md transition">
              <Award className="w-4 h-4" />
              {stats[1]}
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-sm text-white backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-md transition">
              <MapPin className="w-4 h-4" />
              {stats[2]}
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-sky-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-4 text-lg font-semibold shadow-xl transition-transform hover:scale-105"
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-gradient-to-r from-blue-300 to-sky-300 text-black hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold transition-transform hover:scale-105"
            >
              Explore Programs
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center items-start">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
