import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Briefcase, Palette, Shield, Laptop } from 'lucide-react';

export function ProgramHighlights() {
  const undergraduatePrograms = [
    {
      icon: Briefcase,
      title: 'BBA in Business Administration',
      duration: '4 Years',
      type: "Bachelor's",
      popular: true,
    },
    {
      icon: Palette,
      title: 'Fashion Management',
      duration: '4 Years',
      type: "Bachelor's",
      popular: true,
    },
    {
      icon: Laptop,
      title: 'BS in Information Technology',
      duration: '4 Years',
      type: "Bachelor's",
      popular: false,
    },
    {
      icon: Palette,
      title: 'BFA in Graphic Design',
      duration: '4 Years',
      type: "Bachelor's",
      popular: false,
    },
    {
      icon: Shield,
      title: 'BS in Criminal Justice',
      duration: '4 Years',
      type: "Bachelor's",
      popular: false,
    },
  ];

  const graduatePrograms = [
    {
      icon: Briefcase,
      title: 'MBA in Management',
      duration: '2 Years',
      type: "Master's",
      popular: true,
    },
    {
      icon: BookOpen,
      title: 'MSN with Specializations',
      duration: '2 Years',
      type: "Master's",
      popular: true,
    },
  ];

  const ProgramCard = ({ program, index }: { program: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <program.icon className="w-6 h-6 text-white" />
            </div>
            {program.popular && (
              <Badge className="bg-orange-500 text-white">Popular</Badge>
            )}
          </div>
          <CardTitle className="text-lg text-gray-900">
            {program.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between text-sm text-gray-600">
            <span>{program.type}</span>
            <span>{program.duration}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Program Highlights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of career-focused programs
            designed to prepare you for success in today's competitive job
            market.
          </p>
        </motion.div>

        {/* Undergraduate Programs */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-8 text-gray-900"
          >
            Undergraduate Programs
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {undergraduatePrograms.map((program, index) => (
              <ProgramCard
                key={program.title}
                program={program}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Graduate Programs */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-8 text-gray-900"
          >
            Graduate Programs
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {graduatePrograms.map((program, index) => (
              <ProgramCard
                key={program.title}
                program={program}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
