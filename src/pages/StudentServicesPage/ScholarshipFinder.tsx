import { useState, useEffect } from 'react';
import {
  Search,
  BookOpen,
  Bell,
  FileText,
  Award,
  Globe,
  Calendar,
  CheckCircle,
  ArrowRight,
  Sparkles,
  User,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FindScholarship() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-20 md:pb-32">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-blue-200 to-indigo-300 opacity-60 animate-pulse"></div>
          <div className="absolute top-1/3 -left-12 w-64 h-64 rounded-full bg-gradient-to-tr from-purple-200 to-pink-200 opacity-60 animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-gradient-to-tl from-indigo-200 to-cyan-200 opacity-50 animate-pulse-slower"></div>

          {/* Enhanced Decorative Elements */}
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-yellow-400 rounded-full shadow-lg shadow-yellow-300/50 animate-ping"></div>
          <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-300/50 animate-ping-slow"></div>
          <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-300/50 animate-ping-slower"></div>

          {/* Additional Decorative Elements */}
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-pink-400 rounded-full shadow-lg shadow-pink-300/50 animate-ping-slower"></div>
          <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-indigo-400 rounded-full shadow-lg shadow-indigo-300/50 animate-ping-slow"></div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="flex gap-10 flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-600 font-medium text-sm mb-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <Sparkles size={16} className="mr-2 animate-pulse-fast" />
                Discover 10,000+ Scholarships
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
                Study Abroad. <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient">
                  Pay Less.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
                We connect you with scholarships that match your profile — so
                you can follow your dreams without financial stress.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to={'/signup/student'}
                  className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 flex items-center"
                >
                  <Search size={20} className="mr-2" />
                  Find Scholarships
                  <ArrowRight
                    size={18}
                    className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to={'/signup/student'}
                  className="group bg-white hover:bg-gray-50 text-indigo-600 border border-indigo-200 font-semibold py-4 px-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 flex items-center"
                >
                  <User size={20} className="mr-2" />
                  Create Profile
                </Link>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex -space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg"
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://t4.ftcdn.net/jpg/06/28/04/87/360_F_628048704_BIm31smMFDYYFCGItT45pS2agYStYZmm.jpg"
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-500 flex items-center justify-center text-white text-xs font-bold">
                    +2k
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-indigo-600">10,000+</span>{' '}
                  students already found scholarships
                </p>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center bg-white/70 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-xs font-medium">
                    Trusted by universities
                  </span>
                </div>
                <div className="flex items-center bg-white/70 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
                  <Zap size={16} className="text-yellow-500 mr-2" />
                  <span className="text-xs font-medium">Fast application</span>
                </div>
                <div className="flex items-center bg-white/70 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
                  <Globe size={16} className="text-blue-500 mr-2" />
                  <span className="text-xs font-medium">
                    Global opportunities
                  </span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                {/* Glowing background effect */}
                <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full absolute filter blur-3xl opacity-25 animate-pulse-slow"></div>

                {/* Main Hero Image */}
                <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden p-1 bg-gradient-to-br from-indigo-500 to-purple-600 rotate-1 hover:rotate-0 transition-all duration-500">
                  <div className="bg-white p-1 rounded-xl overflow-hidden">
                    <img
                      src="https://educator.com.bd/wp-content/uploads/2024/09/Study-Abroad-with-Scholarship-A-Step-by-Step-Guide-for-Students.jpg"
                      alt="Students studying abroad"
                      className="rounded-lg object-cover w-full h-80 md:h-96"
                    />
                  </div>
                </div>

                {/* New Decorative Image Element */}
                <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg z-20 animate-float">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQHik2TQARhAR-y9CHj4Xq5c50aelIILH7A&s"
                    alt="University campus"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badge element */}
                <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-xl shadow-xl p-4 z-20 animate-float">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <CheckCircle className="text-green-600 w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">91% Success</p>
                      <p className="text-xs text-gray-500">Application rate</p>
                    </div>
                  </div>
                </div>

                {/* Floating stats element */}
                <div className="absolute -left-10 -bottom-4 bg-white rounded-xl shadow-xl p-4 z-20 animate-float-delayed">
                  <div className="flex items-center">
                    <div className="bg-indigo-100 p-2 rounded-full mr-3">
                      <Globe className="text-indigo-600 w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">30+ Countries</p>
                      <p className="text-xs text-gray-500">
                        Global opportunities
                      </p>
                    </div>
                  </div>
                </div>

                {/* New scholarship amount floating element */}
                <div className="absolute -left-4 top-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-xl p-4 z-20 animate-float-delayed-more">
                  <div className="flex items-center">
                    <div className="bg-white/20 p-2 rounded-full mr-3">
                      <Award className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold">$50,000+</p>
                      <p className="text-xs text-indigo-100">
                        Available per student
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>

        <div className="container max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-600 font-medium text-sm mb-4 shadow-sm">
              <Award size={16} className="mr-2" />
              Scholarships Made Easy
            </div>

            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 mb-4">
              Study Abroad Without Breaking the Bank
            </h2>

            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Scholarships shouldn't be hard to find — and with Fly8, they're
              not. We guide you to the funding you deserve based on your profile
              and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Globe className="text-indigo-600" size={36} />}
              title="Global Access"
              description="Scholarships from 30+ countries around the world."
            />
            <FeatureCard
              icon={<CheckCircle className="text-indigo-600" size={36} />}
              title="Profile-Based Matches"
              description="Filtered by your grades, needs & personal goals."
            />
            <FeatureCard
              icon={<Bell className="text-indigo-600" size={36} />}
              title="Deadline Alerts"
              description="Stay ahead, never miss an opportunity."
            />
            <FeatureCard
              icon={<FileText className="text-indigo-600" size={36} />}
              title="Application Support"
              description="Get help writing killer scholarship applications."
            />
            <FeatureCard
              icon={<Award className="text-indigo-600" size={36} />}
              title="Fully/Partially Funded"
              description="From tuition-only to all-inclusive awards."
            />
            <FeatureCard
              icon={<BookOpen className="text-indigo-600" size={36} />}
              title="Government Grants"
              description="Apply for national-level funding schemes."
            />
            <FeatureCard
              icon={<Calendar className="text-indigo-600" size={36} />}
              title="University Awards"
              description="Explore internal merit-based scholarships."
            />
            <FeatureCard
              icon={<Award className="text-indigo-600" size={36} />}
              title="Exclusive Offers"
              description="Fly8-only scholarship deals you won't find elsewhere."
            />
          </div>

          <div className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl shadow-2xl overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full transform translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full transform -translate-x-32 translate-y-32"></div>

            {/* Added sparkle effects */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
            <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-white rounded-full animate-ping-slow"></div>

            <div className="px-8 py-12 md:p-12 flex flex-col md:flex-row items-center justify-between relative z-10">
              <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Sign up and get exclusive scholarship offers!
                </h3>
                <p className="text-indigo-100 text-lg">
                  Join thousands of students finding their perfect funding
                  match.
                </p>
              </div>
              <div className="w-full md:w-auto">
                <div className="flex flex-col sm:flex-row md:items-center">
                  <Link
                    to={'/signup/student'}
                    className="bg-white text-indigo-600 hover:text-indigo-700 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 group"
                  >
                    Get Started
                    <ArrowRight
                      size={18}
                      className="ml-2 inline-block transition-transform duration-300 transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes floatDelayed {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes floatDelayedMore {
          0% {
            transform: translateY(0px) rotate(-2deg);
          }
          50% {
            transform: translateY(-12px) rotate(0deg);
          }
          100% {
            transform: translateY(0px) rotate(-2deg);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes pulse-fast {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.3;
          }
        }

        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.2;
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          70% {
            transform: scale(2);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }

        @keyframes ping-slower {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          70% {
            transform: scale(2);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 5s ease-in-out 1s infinite;
        }

        .animate-float-delayed-more {
          animation: floatDelayedMore 6s ease-in-out 2s infinite;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s linear infinite;
        }

        .animate-pulse-fast {
          animation: pulse-fast 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 8s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-ping-slower {
          animation: ping-slower 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              #f1f5f9 1px,
              transparent 1px
            ),
            linear-gradient(to bottom, #f1f5f9 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 flex flex-col items-center text-center hover:border-indigo-200 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 relative overflow-hidden">
      {/* Corner decoration that appears on hover */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300 rounded-full opacity-0 group-hover:opacity-10"></div>

      <div className="mb-6 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl group-hover:bg-white transition-colors duration-300 shadow-md group-hover:shadow-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-indigo-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
