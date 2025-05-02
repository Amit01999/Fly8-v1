import React from 'react';
import {
  ArrowRight,
  CheckCircle,
  Award,
  Globe,
  BookOpen,
  Zap,
  MessageCircle,
  FileCheck,
  Languages,
  Compass,
  Medal,
} from 'lucide-react';
import heroimg from '@/assets/picture/StudentServices/1.png';

export default function ProfileAssessmentPage() {
  const features = [
    {
      title: 'Academic Fit Check',
      description: 'We evaluate your transcripts and academic background.',
      icon: Award,
    },
    {
      title: 'Goal-Oriented Matching',
      description: 'Align your study plan with your career vision.',
      icon: Compass,
    },
    {
      title: 'Country Compatibility',
      description: 'Know which destinations suit you best.',
      icon: Globe,
    },
    {
      title: 'Course Readiness Review',
      description: 'Discover areas you need to improve.',
      icon: BookOpen,
    },
    {
      title: 'Skill Gap Insight',
      description: 'See if your skills align with international standards.',
      icon: Zap,
    },
    {
      title: 'Language Evaluation',
      description: 'Understand your current language level.',
      icon: Languages,
    },
    {
      title: 'Visa Feasibility Check',
      description: 'Get early insights on your visa eligibility.',
      icon: FileCheck,
    },
    {
      title: 'Strengths Highlighted',
      description: 'We identify your academic and extracurricular strengths.',
      icon: Medal,
    },
    {
      title: 'Next Step Plan',
      description: 'Get a roadmap with actionable recommendations.',
      icon: MessageCircle,
    },
  ];

  return (
    <div className="w-full font-sans">
      {/* Top Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-800 py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-10 top-0 h-64 w-64 rounded-full bg-yellow-400"></div>
          <div className="absolute -left-16 bottom-0 h-80 w-80 rounded-full bg-teal-400"></div>
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-purple-400"></div>
        </div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between ">
            <div className="w-full md:w-1/2 z-10">
              <div className="inline-block rounded-lg bg-blue-500 bg-opacity-20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm mb-4">
                Profile Assessment
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Start Smart.
                <span className="block text-yellow-300">Study Smart.</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg">
                Not sure which country, course, or university fits you best? Our
                expert profile assessment gives you a personalized path to
                global success.
              </p>
              <button className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-xl">
                Get Your Free Assessment
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 transition-all duration-300 group-hover:bg-blue-200">
                  <ArrowRight className="h-3 w-3" />
                </span>
              </button>
            </div>

            <div className="w-full md:w-1/2 z-10">
              <div className="relative">
                <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-yellow-300 blur-lg opacity-60"></div>
                <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-teal-300 blur-lg opacity-60"></div>
                <img
                  src="https://img.freepik.com/free-photo/close-up-student-with-his-homework_1098-332.jpg?semt=ais_hybrid&w=740"
                  alt="Students succeeding globally"
                  className="relative z-10 rounded-3xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-white opacity-80"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-12 -left-24 w-80 h-80 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-blue-500 rounded-full"></div>
          <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-purple-500 rounded-full"></div>
          <svg
            className="absolute right-0 bottom-0 text-blue-50 w-48 h-48"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M43.5,-75.1C56.3,-67.8,66.8,-55.7,74.2,-42C81.7,-28.2,86.1,-14.1,85.2,-0.5C84.3,13.1,78.1,26.1,70.2,38.2C62.3,50.2,52.8,61.3,40.8,68.4C28.8,75.4,14.4,78.5,0.6,77.5C-13.3,76.6,-26.5,71.7,-39.8,65.4C-53.1,59.1,-66.5,51.4,-74.3,39.8C-82.2,28.1,-84.6,14.1,-84.3,0.2C-84,-13.8,-80.9,-27.5,-73.7,-39.5C-66.5,-51.4,-55.3,-61.5,-42.3,-68.8C-29.3,-76,-14.7,-80.4,0.5,-81.4C15.8,-82.3,31.5,-79.8,43.5,-75.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white text-sm font-medium mb-4">
              OUR ASSESSMENT PROCESS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent pb-2 mb-6">
              Your Dream Starts With the Right Strategy
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Every successful study abroad journey starts with a deep
              understanding of who you are and where you stand. Our Profile
              Assessment tool helps you gain that clarity.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              <span className="h-3 w-3 rounded-full bg-indigo-500"></span>
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200"
              >
                {/* Decorative gradient circle */}
                <div className="absolute -right-6 -bottom-6 h-32 w-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:opacity-70"></div>

                {/* Feature number */}
                <div className="absolute top-4 right-4 text-5xl font-bold text-gray-100 group-hover:text-blue-100 transition-colors duration-500">
                  {(index + 1).toString().padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className="relative inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  {React.createElement(feature.icon, { className: 'h-8 w-8' })}
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-1 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-3xl opacity-50 blur-lg"></div>
            <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('/api/placeholder/400/400')] mix-blend-overlay opacity-10"></div>
              <div className="md:flex items-center justify-between p-8 md:p-12">
                <div className="mb-8 md:mb-0 md:w-2/3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Ready to map your educational journey?
                  </h3>
                  <p className="text-blue-100">
                    Join thousands of students who found their perfect academic
                    match through our assessment.
                  </p>
                </div>
                <button className="w-full md:w-auto bg-white hover:bg-blue-50 text-blue-700 rounded-full font-semibold px-10 py-5 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group">
                  <span>Sign up for your free assessment today!</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white transition-all duration-300">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
