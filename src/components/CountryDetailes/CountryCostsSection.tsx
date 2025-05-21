import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
export default function CountryCostsSection({
  containerVariants,
  itemVariants,
  tuitionData,
  tuitionNote,
  expenses,
  regionalCosts,
  scholarships,
  financialSupports,
  tips,
}) {
  return (
    <div>
      <motion.div variants={containerVariants} className="space-y-10">
        {/* Tuition Fees */}
        <motion.section
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-amber-100 p-3 rounded-full">
              <GraduationCap className="h-6 w-6 text-amber-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Tuition Fees
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-600">
              International student fees vary by university, course, and level
              of study.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-xl overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Level of Study
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Range (Per Year)
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Average Cost
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tuitionData.map((row, index) => (
                    <tr key={index}>
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">
                        {row.level}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">
                        {row.range}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">
                        {row.average}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">
                        {row.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 text-sm bg-amber-50 border border-amber-100 rounded-lg p-4">
              <strong>Note:</strong> {tuitionNote}
            </p>
          </div>
        </motion.section>
        {/* Cost of Living */}
        <motion.section
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <MapPin className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Cost of Living
            </h2>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Monthly Expenses */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Monthly Expenses (Approximate)
                </h3>
                <div className="space-y-3">
                  {expenses.map(expense => (
                    <div key={expense.label}>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">{expense.label}</span>
                        <span className="font-medium">{expense.range}</span>
                      </div>
                      <div className="w-full bg-gray-200 h-1 rounded">
                        <div
                          className="bg-blue-500 h-1 rounded"
                          style={{ width: `${expense.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Regional Comparison */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Regional Comparison
                </h3>
                <div className="space-y-4">
                  {regionalCosts.map(region => (
                    <div
                      key={region.region}
                      className="bg-white rounded-lg border p-4"
                    >
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{region.region}</span>
                        <span className={`${region.color} font-medium`}>
                          {region.level}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Monthly budget: {region.range}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Financial Requirements */}
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm">
              <h4 className="font-semibold text-blue-700 mb-2">
                Financial Requirements for Student Visa
              </h4>
              <p className="text-gray-600 mb-2">
                For a student visa, you need to show you have enough money to
                pay your course fees and living costs:
              </p>
              <ul className="space-y-1 text-gray-600">
                <li>• Course fees for first year</li>
                <li>
                  • Living costs: £1,334/month (£1,023/month outside London) for
                  up to 9 months
                </li>
              </ul>
            </div>
          </div>
        </motion.section>
        {/* Scholarships */}
        <motion.section
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-indigo-100 p-3 rounded-full">
              <GraduationCap className="h-6 w-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Scholarships and Financial Aid
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-600">
              Various scholarships and financial aid options are available for
              international students studying in the UK.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {scholarships.map((scholarship, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-${
                    scholarship.color
                  }-50 to-${
                    scholarship.color === 'blue' ? 'cyan' : 'purple'
                  }-50 rounded-xl border border-${scholarship.color}-100 p-6`}
                >
                  <h3
                    className={`text-xl font-bold mb-4 text-${scholarship.color}-800`}
                  >
                    {scholarship.category}
                  </h3>
                  <ul className="space-y-3">
                    {scholarship.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="bg-white rounded-lg p-3 shadow-sm"
                      >
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Other Financial Support Options
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {financialSupports.map((support, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-3">
                    <h4 className="font-semibold">{support.title}</h4>
                    <p className="text-sm text-gray-600">
                      {support.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-sm">
              <h4 className="font-semibold text-amber-700 mb-2">
                Tips for Scholarship Applications
              </h4>
              <ul className="space-y-1 text-gray-600">
                {tips.map((tip, i) => (
                  <li key={i}>• {tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
