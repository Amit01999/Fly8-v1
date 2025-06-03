import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Building,
  Calendar,
  Award,
  MapPin,
  BookOpen,
  Users,
} from 'lucide-react';

export function UniversityOverview() {
  const overviewData = [
    {
      icon: Building,
      label: 'Institution Type',
      value: 'Private, For-Profit',
    },
    {
      icon: Calendar,
      label: 'Established',
      value: '1931',
    },
    {
      icon: Award,
      label: 'Accreditation',
      value: 'MSCHE',
    },
    {
      icon: MapPin,
      label: 'Locations',
      value: 'NYC, NJ, Online',
    },
    {
      icon: BookOpen,
      label: 'Focus Areas',
      value: 'Business, Health, Professional Studies',
    },
    {
      icon: Users,
      label: 'Student Body',
      value: '5,000+ Students',
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            About Berkeley College
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berkeley College has been preparing students for successful careers
            for over 90 years, offering practical, career-focused education in
            the dynamic environment of New York City.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {overviewData.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {item.label}
                  </h3>
                  <p className="text-gray-600 font-medium">{item.value}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
