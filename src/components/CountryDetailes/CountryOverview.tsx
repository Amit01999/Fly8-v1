import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BookOpen, GraduationCap } from 'lucide-react';

export default function CountryOverview({ overviewSections }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {overviewSections.map((section, index) => (
        <motion.section
          key={index}
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-full">
              {section.points ? (
                <GraduationCap className="h-6 w-6 text-blue-600" />
              ) : (
                <BookOpen className="h-6 w-6 text-indigo-600" />
              )}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              {section.title}
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-600">{section.description}</p>

            {/* If section has points */}
            {section.points && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {section.points.map((point, idx) => (
                  <div
                    key={idx}
                    className="bg-blue-50 rounded-lg p-4 border border-blue-100"
                  >
                    <h3 className="font-semibold text-blue-800 mb-2">
                      {point.heading}
                    </h3>
                    <p className="text-gray-600 text-sm">{point.text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* If section has cards */}
            {section.cards && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {section.cards.map((card, idx) => (
                  <Card key={idx} className={`border-t-4 border-t-indigo-300`}>
                    <CardHeader>
                      <CardTitle className="text-lg">{card.title}</CardTitle>
                      <CardDescription>{card.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {card.points.map((pt, pidx) => (
                        <p key={pidx} className="text-sm">
                          • {pt}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Note */}
            {section.note && (
              <p
                className={`text-gray-600 text-sm bg-${section.note.color} border border-${section.note.border} rounded-lg p-4`}
              >
                <strong className={`text-${section.note.textColor}`}>
                  Note:
                </strong>{' '}
                {section.note.text}
              </p>
            )}
          </div>
        </motion.section>
      ))}
    </div>
  );
}
