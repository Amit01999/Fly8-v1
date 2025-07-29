import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Star, DollarSign, CheckCircle } from 'lucide-react';

export function Scholarships({ scholarshipInfo }) {
  const scholarships = scholarshipInfo?.scholarships || [];
  const scholarshipsToRender = scholarships;
  const universityName = scholarshipInfo?.universityName || 'This';

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
            Scholarships & Financial Aid
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {universityName} offers various scholarship opportunities to help
            international students achieve their educational goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scholarshipsToRender.map((scholarship, index) => (
            <motion.div
              key={scholarship.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg.gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    {scholarship.popular && (
                      <Badge className="bg-orange-500 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg text-gray-900">
                    {scholarship.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      {scholarship.amount}
                    </div>
                    <div className="text-sm text-gray-600">
                      {scholarship.type}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">
                        {scholarship.eligibility}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {scholarship.renewable ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                      )}
                      <span className="text-sm text-gray-700">
                        {scholarship.renewable ? 'Renewable' : 'One-time award'}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-8">
              <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Need More Financial Support?
              </h3>
              <p className="text-gray-600 mb-4">
                Our financial aid advisors can help you explore additional
                funding options including federal aid, private loans, and
                work-study opportunities.
              </p>
              <div className="text-sm text-gray-500">
                Contact our Financial Aid Office for personalized assistance
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
