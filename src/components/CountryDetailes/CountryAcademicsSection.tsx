import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, GraduationCap, Info } from 'lucide-react';

export default function CountryAcademicsSection({
  name,
  topcourse,
  topuniversites,
  intakes,
  deadlines,
  notes,
  requirementsData,
  countryNote,
}) {
  console.log('CountryAcademicsSection - topuniversites:', topuniversites);
  console.log('CountryAcademicsSection - topuniversites length:', topuniversites?.length);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >
        {/* Top Courses */}
        <motion.section
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <BookOpen className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Top Courses to Study in the {name}
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-600">
              The {name} excels in various academic disciplines, offering
              world-class education across fields.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {topcourse.map((course, index) => (
                <div
                  key={index}
                  className={`${course.color} border rounded-lg p-4`}
                >
                  <h3 className="font-semibold mb-1">{course.title}</h3>
                  <p className="text-sm text-gray-600">{course.details}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-600 text-sm">
              {name} universities are particularly renowned for
              research-intensive programs and innovative learning approaches
              that combine theory with practical experience.
            </p>
          </div>
        </motion.section>

        {/* Top Universities */}
        <motion.section
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-100 p-3 rounded-full">
              <GraduationCap className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Top Universities in the {name}
            </h2>
          </div>

          <div className="space-y-6">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-xl overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      University
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Global Rank
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Notable For
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {topuniversites.map((uni, index) => (
                    <tr key={index}>
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">
                        {uni.name}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">
                        {uni.location}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">
                        {uni.rank}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">
                        {uni.notable}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 text-sm bg-blue-50 border border-blue-100 rounded-lg p-4">
              <strong>{name}University Groups:</strong> The Russell Group
              represents 24 research-intensive universities, while the Million+
              group focuses on modern universities. The {name} also has
              specialized institutions for arts, medicine, and business.
            </p>
          </div>
        </motion.section>

        {/* Intakes and Deadlines */}
        <motion.section
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-100 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-orange-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Intakes and Application Deadlines
            </h2>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Main Intakes */}
              <div className="bg-white rounded-xl border p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-indigo-700">
                  Main Intakes
                </h3>
                <ul className="space-y-3">
                  {intakes.map(({ label, description, icon }) => (
                    <li key={label} className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-medium shrink-0 mt-0.5">
                        {icon}
                      </div>
                      <div>
                        <span className="font-medium">{label}</span>
                        <p className="text-sm text-gray-500">{description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Deadlines */}
              <div className="bg-white rounded-xl border p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-rose-700">
                  Key Deadlines
                </h3>
                <ul className="space-y-3">
                  {deadlines.map(({ title, icon, details }) => (
                    <li key={title} className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 font-medium shrink-0 mt-0.5">
                        {icon}
                      </div>
                      <div>
                        <span className="font-medium">{title}</span>
                        {details.map((d, i) => (
                          <p key={i} className="text-sm text-gray-500">
                            {d}
                          </p>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-sm">
              <h4 className="font-semibold text-amber-700 mb-2">
                Important Notes on Timing
              </h4>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                {notes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Admission Requirements */}
        <motion.section
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-teal-100 p-3 rounded-full">
              <Info className="h-6 w-6 text-teal-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Admission Requirements
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-600">
              Requirements vary by institution and program level, but generally
              include:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirementsData.map(req => (
                <div
                  key={req.title}
                  className="bg-white rounded-xl border shadow-sm"
                >
                  <div className={`${req.color} text-white p-4 rounded-t-xl`}>
                    <h3 className="font-bold text-lg">{req.title}</h3>
                  </div>
                  <div className="p-5 space-y-3">
                    {req.items.map((item, index) => (
                      <p key={index} className="text-sm">
                        • {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-teal-50 border border-teal-100 rounded-lg p-4 text-sm">
              <h4 className="font-semibold text-teal-700 mb-2">
                Country-Specific Requirements
              </h4>
              <p className="text-gray-600">{countryNote}</p>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
