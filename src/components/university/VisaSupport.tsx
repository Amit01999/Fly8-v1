import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Calendar, Briefcase, Globe, Users } from 'lucide-react';

export function VisaSupport() {
  const visaSteps = [
    {
      step: 1,
      title: 'I-20 Form',
      description: 'Receive your I-20 after admission and deposit payment',
    },
    {
      step: 2,
      title: 'SEVIS Payment',
      description: 'Pay the SEVIS I-901 fee online',
    },
    {
      step: 3,
      title: 'DS-160 Form',
      description: 'Complete the online DS-160 application',
    },
    {
      step: 4,
      title: 'Embassy Interview',
      description: 'Schedule and attend your visa interview',
    },
  ];

  const workOpportunities = [
    {
      type: 'CPT (Curricular Practical Training)',
      description:
        'Work authorization for internships and co-op programs related to your field of study',
      timing: 'During studies (after 1 year)',
      icon: Briefcase,
    },
    {
      type: 'OPT (Optional Practical Training)',
      description:
        '12-month work authorization after graduation (36 months for STEM programs)',
      timing: 'After graduation',
      icon: Calendar,
    },
  ];

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
            Visa & Immigration Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated international student services team will guide you
            through every step of the F-1 visa process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* F-1 Visa Process */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-blue-600" />
                  F-1 Visa Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {visaSteps.map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg"
                    >
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Support Services */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-green-600" />
                  Student Support Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Dedicated Support Team
                  </h4>
                  <p className="text-sm text-gray-600">
                    Our International Student Services office provides ongoing
                    support for visa maintenance, academic guidance, and
                    cultural adjustment.
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Document Assistance
                  </h4>
                  <p className="text-sm text-gray-600">
                    Help with I-20 issuance, travel signatures, and maintaining
                    F-1 status throughout your studies.
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Orientation Programs
                  </h4>
                  <p className="text-sm text-gray-600">
                    Comprehensive orientation covering immigration regulations,
                    academic expectations, and campus resources.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Work Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Work Opportunities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workOpportunities.map((opportunity, index) => (
              <Card
                key={opportunity.type}
                className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <opportunity.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        {opportunity.type}
                      </CardTitle>
                      <Badge variant="outline" className="mt-1">
                        {opportunity.timing}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{opportunity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
