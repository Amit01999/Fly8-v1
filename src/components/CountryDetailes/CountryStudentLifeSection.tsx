import React from 'react';
import { motion } from 'framer-motion';
import { Badge, BookOpen, MapPin } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function CountryStudentLifeSection({
  containerVariants,
  itemVariants,
  bestCitiesData,
  studentLifeData,
  latestUpdates2025,
  policyChanges2025,
}) {
  return (
    <div>
      <motion.div variants={containerVariants} className="space-y-10">
        <motion.section
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-full">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Best Cities for International Students
            </h2>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bestCitiesData.map((city, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden bg-white shadow-sm border"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={city.image}
                      alt={`${city.city} cityscape`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-1">{city.city}</h3>
                    <p className="text-sm text-blue-600 mb-2">
                      {city.universities}
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      {city.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {city.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
        {/* Student Life */}
        <motion.section
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className={`${studentLifeData.icon.bg} p-3 rounded-full`}>
              <BookOpen className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              {studentLifeData.title}
            </h2>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {studentLifeData.sections.slice(0, 2).map((section, index) => (
                  <div
                    key={index}
                    className={`${section.bg} rounded-xl border ${section.border} p-5`}
                  >
                    <h3
                      className={`text-xl font-bold mb-4 ${section.textColor}`}
                    >
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex gap-3 items-start">
                          <div
                            className={`${section.bg.replace(
                              '50',
                              '100'
                            )} p-1 rounded-full mt-0.5`}
                          >
                            <svg
                              className={`w-4 h-4 ${section.textColor}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium">{item.title}</span>
                            <p className="text-sm text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                {studentLifeData.sections.slice(2).map((section, index) => (
                  <div
                    key={index}
                    className={`${section.bg} rounded-xl border ${section.border} p-5`}
                  >
                    <h3
                      className={`text-xl font-bold mb-4 ${section.textColor}`}
                    >
                      {section.title}
                    </h3>
                    {section.title === 'Accommodation Options' ? (
                      <div className="space-y-4">
                        {section.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="bg-white rounded-lg p-3 shadow-sm"
                          >
                            <h4 className="font-semibold">{item.title}</h4>
                            <p className="text-sm text-gray-600">
                              {item.description}
                            </p>
                            {item.badges && (
                              <div className="mt-2 flex items-center gap-2">
                                {item.badges.map((badge, badgeIndex) => (
                                  <span
                                    key={badgeIndex}
                                    className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full"
                                  >
                                    {badge}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex gap-3 items-start"
                          >
                            <div
                              className={`${section.bg.replace(
                                '50',
                                '100'
                              )} p-1 rounded-full mt-0.5`}
                            >
                              <svg
                                className={`w-4 h-4 ${section.textColor}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                            </div>
                            <div>
                              <span className="font-medium">{item.title}</span>
                              <p className="text-sm text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100">
              <CardHeader>
                <CardTitle className="text-indigo-800">
                  {studentLifeData.additionalInfo.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">
                  {studentLifeData.additionalInfo.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {studentLifeData.additionalInfo.items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-3 shadow-sm"
                    >
                      <h4 className="font-semibold">{item.title}</h4>
                      <ul className="text-sm text-gray-600 space-y-1 mt-2">
                        {item.points.map((point, pointIndex) => (
                          <li key={pointIndex}>• {point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>
        {/* Latest Updates */}
        <motion.section
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestUpdates2025.map((update, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${update.gradient} ${update.border}`}
              >
                <CardHeader>
                  <Badge className={`w-fit mb-2 ${update.badgeColor}`}>
                    {update.category}
                  </Badge>
                  <CardTitle className={`${update.titleColor}`}>
                    {update.title}
                  </CardTitle>
                  <CardDescription>{update.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{update.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-red-50 border mt-8 border-red-100 rounded-lg p-5">
            <h3 className="text-xl font-bold mb-4 text-red-800">
              Important Policy Changes
            </h3>
            <div className="space-y-4">
              {policyChanges2025.map((policy, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold">{policy.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{policy.content}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
