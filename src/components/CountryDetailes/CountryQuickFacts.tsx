import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
export default function CountryQuickFacts({
  population,
  capital,
  language,
  currency,
  academicYear,
  fallDeadline,
  springDeadline,
  summerDeadline,
}) {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Quick Facts Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-indigo-500"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <MapPin className="mr-2 text-indigo-600" size={20} />
            Quick Facts
          </h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-gray-600">Population</span>
              <span className="font-medium">{population}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">Capital</span>
              <span className="font-medium">{capital}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">Language</span>
              <span className="font-medium">{language}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">Currency</span>
              <span className="font-medium">{currency}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">Academic Year</span>
              <span className="font-medium">{academicYear}</span>
            </li>
          </ul>
        </motion.div>

        {/* Key Dates Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-amber-500"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-5 flex items-center">
            <Calendar className="mr-2 text-amber-600" size={22} />
            Key Application Dates
          </h3>

          <ul className="space-y-2">
            {[
              { label: 'Main Deadline', value: fallDeadline },
              { label: 'Early Deadline', value: springDeadline },
              { label: 'Late Applications', value: summerDeadline },
            ].map(({ label, value }, idx) => (
              <li key={idx} className="grid grid-cols-2 gap-4 items-center">
                <span className="text-gray-600">{label}</span>
                <span className="text-right font-semibold text-gray-800">
                  {value || '—'}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
