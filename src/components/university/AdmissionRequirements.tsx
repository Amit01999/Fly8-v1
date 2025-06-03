import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle,
  FileText,
  Globe,
  GraduationCap,
  DollarSign,
  Clock,
  AlertCircle,
} from 'lucide-react';

// Default data structure - can be easily replaced with props
const defaultUniversityData = {
  universityName: 'Berkeley College',
  generalInfo:
    'Admission requirements for international students at Berkeley College generally include academic qualifications, English language proficiency, and proof of financial capability.',
  applicationFee: 50,
  financialRequirement: 42000,
  tuitionDeposit: 300,
  processingFee: 100,

  generalRequirements: [
    'Complete the Berkeley College International Application',
    'Official secondary or post-secondary transcripts (with certified English translations)',
    'Proof of graduation from all previously attended institutions',
    'Official document of financial support demonstrating minimum funds',
    'Clear copy of valid passport',
  ],

  undergraduate: {
    englishTests: [
      { name: 'TOEFL', score: '61 iBT / 500 PBT' },
      { name: 'IELTS', score: '5.5 or higher' },
      { name: 'Duolingo', score: '90 or above' },
      { name: 'PTE Academic', score: '43 or higher' },
    ],
    otherTests: [
      'Rennert International (Level 6)',
      'DreamIT ESL (Level B2)',
      'Kaplan (High Intermediate)',
      'ELS (Level 112)',
      'Oxford ELLT (Level 5)',
      'Cambridge English (B2 First, C1 Advanced)',
    ],
    additionalRequirements: [
      'Statement of Purpose',
      'Letter of Recommendation',
    ],
  },

  graduate: {
    englishTests: [
      { name: 'TOEFL', score: '80 iBT or higher' },
      { name: 'IELTS', score: '6.5 or higher' },
      { name: 'Duolingo', score: '105 or above' },
    ],
    additionalRequirements: [
      'Resume (minimum of two years professional employment preferred)',
      'Two letters of recommendation',
      'Personal statement',
      'Application for transfer credit (if seeking transfer credit)',
    ],
  },

  conditionalAdmission: {
    available: true,
    description:
      "Students who do not meet English language proficiency requirements can be granted conditional admission to study English as a Second Language (ESL) full-time with Berkeley's on-campus partner, Rennert International, before beginning their degree program.",
    benefits: [
      'SEVIS I-20 sponsorship available',
      'F-1 student visa sponsorship',
      'Pathway to degree program',
    ],
  },
};

export default function AdmissionRequirements({
  universityData = defaultUniversityData,
}) {
  const EnglishTestCard = ({ tests, title, gradient }) => (
    <Card
      className={`bg-gradient-to-br ${gradient} border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 group`}
    >
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl text-gray-800">
          <div className="p-3 bg-white/30 rounded-xl group-hover:bg-white/50 transition-colors duration-300">
            <Globe className="w-6 h-6 text-blue-700" />
          </div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tests.map((test, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white/70 p-4 rounded-lg border border-white/50 hover:bg-white/90 transition-all duration-200"
            >
              <span className="font-semibold text-gray-800">{test.name}</span>
              <Badge className="bg-blue-600 text-white font-bold px-4 py-2 text-sm">
                {test.score}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const RequirementsCard = ({ title, requirements, icon: Icon, gradient }) => (
    <Card
      className={`bg-gradient-to-br ${gradient} border border-white/20 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group`}
    >
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl">
          <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors duration-300">
            <Icon className="w-6 h-6 text-gray-800" />
          </div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {requirements.map((req, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-white/50 rounded-lg hover:bg-white/70 transition-all duration-200 border border-white/30"
            >
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-800 font-medium leading-relaxed">
                {req}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const ExpandableSection = ({ title, children, sectionKey, icon: Icon }) => (
    <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg">
      <CardHeader
        className="cursor-pointer hover:bg-gray-50 transition-colors duration-200"
        onClick={() => toggleSection(sectionKey)}
      >
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon className="w-6 h-6 text-blue-600" />
            {title}
          </div>
          {expandedSections[sectionKey] ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </CardTitle>
      </CardHeader>
      {expandedSections[sectionKey] && (
        <CardContent className="pt-0">{children}</CardContent>
      )}
    </Card>
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Admission Requirements
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            International Students - {universityData.universityName}
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {universityData.generalInfo}
          </p>
        </div>

        {/* Key Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-green-400 to-blue-500 text-white border-0 shadow-xl">
            <CardContent className="p-6 text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">Application Fee</h3>
              <p className="text-2xl font-bold">
                ${universityData.applicationFee}
              </p>
              <p className="text-sm opacity-90">Non-refundable</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white border-0 shadow-xl">
            <CardContent className="p-6 text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">Financial Requirement</h3>
              <p className="text-2xl font-bold">
                ${universityData.financialRequirement.toLocaleString()}
              </p>
              <p className="text-sm opacity-90">First year funds</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-400 to-red-500 text-white border-0 shadow-xl">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">Post-Acceptance</h3>
              <p className="text-xl font-bold">
                ${universityData.tuitionDeposit + universityData.processingFee}
              </p>
              <p className="text-sm opacity-90">Deposit + Processing</p>
            </CardContent>
          </Card>
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {/* General Requirements */}
          <Card className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl text-gray-800">
                <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors duration-300">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                General Requirements
              </CardTitle>
              <p className="text-sm text-gray-600">
                Required for all international students
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {universityData.generalRequirements.map((req, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white/70 rounded-lg hover:bg-white/90 transition-all duration-200 border border-white/40"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 text-sm leading-relaxed">
                      {req}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Financial Requirements */}
          <Card className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border border-green-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl text-gray-800">
                <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors duration-300">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                Financial Documentation
              </CardTitle>
              <p className="text-sm text-gray-600">
                Proof of financial capability
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-100 to-teal-100 p-4 rounded-xl border border-green-200/50">
                  <h4 className="font-bold text-gray-900 mb-3 text-center">
                    Financial Requirements
                  </h4>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-green-700">
                      ${universityData.financialRequirement.toLocaleString()}
                    </span>
                    <p className="text-sm text-gray-600 mt-1">
                      USD minimum required
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg border border-white/40">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-800">
                      Certified bank statement from sponsor
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg border border-white/40">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-800">
                      Covers tuition and living expenses
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg border border-white/40">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-800">
                      Must be for first academic year
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conditional Admission */}
          {universityData.conditionalAdmission.available && (
            <Card className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 border border-amber-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 group lg:col-span-2 xl:col-span-1">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl text-gray-800">
                  <div className="p-3 bg-amber-100 rounded-xl group-hover:bg-amber-200 transition-colors duration-300">
                    <AlertCircle className="w-6 h-6 text-amber-600" />
                  </div>
                  Conditional Admission
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Alternative pathway program
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-xl border border-amber-200/50">
                    <p className="text-gray-800 text-sm leading-relaxed">
                      {universityData.conditionalAdmission.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">
                      Program Benefits:
                    </h4>
                    <div className="space-y-2">
                      {universityData.conditionalAdmission.benefits.map(
                        (benefit, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-white/70 rounded-lg border border-white/40"
                          >
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-gray-700 text-sm">
                              {benefit}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="undergraduate" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-12 bg-white/80 backdrop-blur-sm">
            <TabsTrigger
              value="undergraduate"
              className="text-base font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Undergraduate
            </TabsTrigger>
            <TabsTrigger
              value="graduate"
              className="text-base font-semibold data-[state=active]:bg-purple-600 data-[state=active]:text-white"
            >
              Graduate
            </TabsTrigger>
          </TabsList>

          <TabsContent value="undergraduate">
            <div className="space-y-10">
              {/* English Proficiency Tests */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <EnglishTestCard
                  tests={universityData.undergraduate.englishTests}
                  title="English Proficiency Tests"
                  gradient="from-blue-100 via-cyan-100 to-sky-100"
                />
                <Card className="bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 border border-green-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-xl text-gray-800">
                      <div className="p-3 bg-green-200/50 rounded-xl group-hover:bg-green-200 transition-colors duration-300">
                        <GraduationCap className="w-6 h-6 text-green-700" />
                      </div>
                      Other Accepted Certificates
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {universityData.undergraduate.otherTests.map(
                        (test, index) => (
                          <div
                            key={index}
                            className="bg-white/70 p-4 rounded-lg border border-white/50 hover:bg-white/90 transition-all duration-200"
                          >
                            <span className="text-gray-800 font-medium text-sm">
                              {test}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Requirements */}
              <RequirementsCard
                title="Additional Undergraduate Requirements"
                requirements={
                  universityData.undergraduate.additionalRequirements
                }
                icon={FileText}
                gradient="from-blue-100 via-indigo-100 to-purple-100"
              />
            </div>
          </TabsContent>

          <TabsContent value="graduate">
            <div className="space-y-10">
              {/* English Proficiency Tests */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <EnglishTestCard
                  tests={universityData.graduate.englishTests}
                  title="English Proficiency Tests (Higher Requirements)"
                  gradient="from-purple-100 via-violet-100 to-pink-100"
                />
                <Card className="bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 border border-orange-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-xl text-gray-800">
                      <div className="p-3 bg-orange-200/50 rounded-xl group-hover:bg-orange-200 transition-colors duration-300">
                        <AlertCircle className="w-6 h-6 text-orange-700" />
                      </div>
                      Important Note
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-white/70 p-6 rounded-xl border border-white/50">
                      <p className="text-gray-800 leading-relaxed">
                        Graduate programs have higher English proficiency
                        requirements compared to undergraduate programs. Make
                        sure to meet these elevated standards for successful
                        admission.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Requirements */}
              <RequirementsCard
                title="Additional Graduate Requirements"
                requirements={universityData.graduate.additionalRequirements}
                icon={GraduationCap}
                gradient="from-purple-100 via-violet-100 to-pink-100"
              />
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Application?
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Take the next step in your educational journey at{' '}
                {universityData.universityName}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Start Application
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                  Contact Admissions
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
