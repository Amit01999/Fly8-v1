// import React from 'react';
// import { motion } from 'framer-motion';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { DollarSign, Home, Book, Wifi } from 'lucide-react';

// export function TuitionFees() {
//   const tuitionData = [
//     {
//       category: 'Undergraduate Tuition',
//       amount: '$23,200 - $28,600',
//       period: 'per year',
//       icon: Book,
//       color: 'from-blue-500 to-purple-600',
//     },
//     {
//       category: 'Graduate Tuition',
//       amount: '$25,800 - $31,200',
//       period: 'per year',
//       icon: Book,
//       color: 'from-purple-500 to-pink-600',
//     },
//   ];

//   const additionalFees = [
//     { name: 'Technology Fee', amount: '$600' },
//     { name: 'Administrative Fee', amount: '$300' },
//     { name: 'International Student Fee', amount: '$500' },
//     { name: 'Student Activities Fee', amount: '$200' },
//   ];

//   const livingCosts = [
//     { category: 'Housing (on-campus)', range: '$12,000 - $16,000' },
//     { category: 'Meals', range: '$3,500 - $4,500' },
//     { category: 'Books & Supplies', range: '$1,200 - $1,800' },
//     { category: 'Personal Expenses', range: '$1,300 - $2,700' },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative">
//       <div className="container-custom">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold mb-4 text-gray-900">
//             Tuition & Fees
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Transparent pricing for your education investment. All costs are in
//             USD and subject to change.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Tuition Cards */}
//           <div className="lg:col-span-2 space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {tuitionData.map((item, index) => (
//                 <motion.div
//                   key={item.category}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
//                     <CardHeader className="text-center">
//                       <div
//                         className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}
//                       >
//                         <item.icon className="w-8 h-8 text-white" />
//                       </div>
//                       <CardTitle className="text-lg">{item.category}</CardTitle>
//                     </CardHeader>
//                     <CardContent className="text-center">
//                       <div className="text-3xl font-bold text-gray-900 mb-1">
//                         {item.amount}
//                       </div>
//                       <div className="text-gray-600">{item.period}</div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Additional Fees */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//             >
//               <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     <Wifi className="w-6 h-6 text-blue-600" />
//                     Additional Fees (Annual)
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {additionalFees.map((fee, index) => (
//                       <div
//                         key={fee.name}
//                         className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
//                       >
//                         <span className="text-gray-700">{fee.name}</span>
//                         <Badge variant="outline">{fee.amount}</Badge>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>

//           {/* Living Costs */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg h-fit">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <Home className="w-6 h-6 text-green-600" />
//                   Living Costs (Annual)
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   {livingCosts.map((cost, index) => (
//                     <div
//                       key={cost.category}
//                       className="border-b border-gray-100 pb-3 last:border-b-0"
//                     >
//                       <div className="flex justify-between items-start">
//                         <span className="text-gray-700 text-sm">
//                           {cost.category}
//                         </span>
//                         <span className="font-semibold text-gray-900 text-sm">
//                           {cost.range}
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                   <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
//                     <div className="flex justify-between items-center">
//                       <span className="font-semibold text-gray-900">
//                         Total Estimate
//                       </span>
//                       <span className="font-bold text-lg text-blue-600">
//                         $18,000 - $25,000
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, Home, Book, Wifi } from 'lucide-react';

export function TuitionFees({ tuitionInfo }) {
  const { tuitionData, additionalFees, livingCosts } = tuitionInfo || {};

  // Default values to prevent errors if data is missing
  const defaultTuitionData = [
    {
      category: 'Undergraduate Tuition',
      amount: '$23,200 - $28,600',
      period: 'per year',
    },
    {
      category: 'Graduate Tuition',
      amount: '$25,800 - $31,200',
      period: 'per year',
    },
  ];

  const defaultAdditionalFees = [
    { name: 'Technology Fee', amount: '$600' },
    { name: 'Administrative Fee', amount: '$300' },
    { name: 'International Student Fee', amount: '$500' },
    { name: 'Student Activities Fee', amount: '$200' },
  ];

  const defaultLivingCosts = [
    { category: 'Housing (on-campus)', range: '$12,000 - $16,000' },
    { category: 'Meals', range: '$3,500 - $4,500' },
    { category: 'Books & Supplies', range: '$1,200 - $1,800' },
    { category: 'Personal Expenses', range: '$1,300 - $2,700' },
  ];

  // Use provided data or fall back to defaults
  const tuitionDataToRender = tuitionData || defaultTuitionData;
  const additionalFeesToRender = additionalFees || defaultAdditionalFees;
  const livingCostsToRender = livingCosts || defaultLivingCosts;

  // Hardcode colors for each tuition item based on index
  const getGradientColor = index => {
    return index === 0
      ? 'from-blue-500 to-purple-600'
      : 'from-purple-500 to-pink-600';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Tuition & Fees
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing for your education investment. All costs are in
            USD and subject to change.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tuition Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tuitionDataToRender.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${getGradientColor(
                          index
                        )} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <Book className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg">{item.category}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-3xl font-bold text-gray-900 mb-1">
                        {item.amount}
                      </div>
                      <div className="text-gray-600">{item.period}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Additional Fees */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wifi className="w-6 h-6 text-blue-600" />
                    Additional Fees (Annual)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {additionalFeesToRender.map((fee, index) => (
                      <div
                        key={fee.name}
                        className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                      >
                        <span className="text-gray-700">{fee.name}</span>
                        <Badge variant="outline">{fee.amount}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Living Costs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="w-6 h-6 text-green-600" />
                  Living Costs (Annual)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {livingCostsToRender.map((cost, index) => (
                    <div
                      key={cost.category}
                      className="border-b border-gray-100 pb-3 last:border-b-0"
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-gray-700 text-sm">
                          {cost.category}
                        </span>
                        <span className="font-semibold text-gray-900 text-sm">
                          {cost.range}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">
                        Total Estimate
                      </span>
                      <span className="font-bold text-lg text-blue-600">
                        $
                        {livingCostsToRender
                          .reduce((acc, cost) => {
                            const min = parseInt(
                              cost.range.split('-')[0].replace(/[^0-9]/g, '')
                            );
                            return acc + min;
                          }, 0)
                          .toLocaleString()}{' '}
                        - $
                        {livingCostsToRender
                          .reduce((acc, cost) => {
                            const max = parseInt(
                              cost.range.split('-')[1].replace(/[^0-9]/g, '')
                            );
                            return acc + max;
                          }, 0)
                          .toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
