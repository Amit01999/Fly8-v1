import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Globe, GraduationCap, Info } from 'lucide-react';
export default function CountryVisaSection({
  containerVariants,
  itemVariants,
  VisaData,
  visaStepsData,
  workOpportunitiesData,
  jobMarketData,
}) {
  return (
    <div>
      {/* Visa Requirements */}
      <motion.div variants={containerVariants} className="space-y-10">
        {/* Visa Process */}
        <motion.section
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
        >
          <div className="flex items-center gap-3 mb-6 ">
            <div className="bg-purple-100 p-3 rounded-full">
              <Info className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Student Visa Application Process
            </h2>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200"></div>
              <div className="space-y-8">
                {visaStepsData.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    <div
                      className={`absolute left-8 -translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full ${item.color} ring-4 ring-white`}
                    ></div>
                    <div className="ml-12">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-1 text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-lg p-4 text-sm">
              <h4 className="font-semibold text-red-700 mb-2">
                Common Visa Rejection Reasons
              </h4>
              <ul className="space-y-1 text-gray-600">
                <li>
                  • Insufficient financial evidence or funds not held for
                  required period
                </li>
                <li>• Missing or incomplete documentation</li>
                <li>• Inconsistencies in application information</li>
                <li>• Previous immigration history issues</li>
                <li>• Failure to demonstrate genuine student status</li>
                <li>• Insufficient English language proficiency</li>
              </ul>
            </div>
          </div>
        </motion.section>
        {/* Work Opportunities */}
        <motion.section
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <GraduationCap className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Work Opportunities
            </h2>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workOpportunitiesData.map((section, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border shadow-sm"
                >
                  <div
                    className={`${section.color} text-white p-4 rounded-t-xl`}
                  >
                    <h3 className="font-bold text-lg">{section.title}</h3>
                  </div>
                  <div className="p-5 space-y-3 text-sm">
                    {section.sections.map((sub, idx) => (
                      <div key={idx}>
                        <p className="font-medium mt-4">{sub.heading}</p>
                        {sub.points.map((point, i) => (
                          <p key={i}>• {point}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
              <h4 className="font-semibold text-blue-800 mb-3">
                Job Market for International Graduates
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium mb-2">In-Demand Sectors</h5>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    {jobMarketData.sectors.map((sector, index) => (
                      <li key={index}>• {sector}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">
                    Average Graduate Salaries
                  </h5>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    {jobMarketData.salaries.map((salary, index) => (
                      <li key={index}>• {salary}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-100">
              <CardHeader>
                <CardTitle className="text-green-800">
                  2025 Update: Post-Study Work Opportunities
                </CardTitle>
                <CardDescription>
                  Latest information for international graduates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Many countries offer post-study work opportunities, allowing
                  international students to work or explore career options after
                  completing their degrees. This reflects a strong commitment to
                  attracting global talent and supporting genuine career
                  development pathways for graduates.
                </p>
              </CardContent>
            </Card> */}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
