import { useState, useEffect } from 'react';
import {
  BookOpen,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Globe,
  Calendar,
  FileText,
  Award,
  MessageCircle,
  Target,
  TrendingUp,
  PieChart,
  Clock,
  DollarSign,
  RefreshCw,
  Mic,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LanguageTestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 md:pt-24 md:pb-24">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-blue-200 to-indigo-300 opacity-60 animate-pulse-slow"></div>
          <div className="absolute top-1/3 -left-12 w-64 h-64 rounded-full bg-gradient-to-tr from-indigo-200 to-blue-200 opacity-60 animate-pulse-slower"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-gradient-to-tl from-purple-200 to-indigo-200 opacity-50 animate-pulse"></div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-300/50 animate-ping"></div>
          <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-indigo-400 rounded-full shadow-lg shadow-indigo-300/50 animate-ping-slow"></div>
          <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-300/50 animate-ping-slower"></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-300/50 animate-ping-slower"></div>
        </div>

        <div className="container max-w-7xl gap-10 mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 font-medium text-sm mb-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <Sparkles size={16} className="mr-2 animate-pulse-fast" />
                IELTS • TOEFL • Duolingo • PTE
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Ace Your <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient">
                  Language Test
                </span>{' '}
                with Confidence
              </h1>

              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
                Whether it's IELTS, TOEFL, Duolingo or PTE — we guide you to
                prepare better, score higher, and study faster.
              </p>

              <Link
                to={'/signup/student'}
                className="w-fit group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 flex items-center"
              >
                <BookOpen size={20} className="mr-2" />
                Get Language Test Guidance
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1"
                />
              </Link>

              <div className="mt-8 flex items-center space-x-4">
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
                  <span className="font-bold text-indigo-600">5,000+</span>{' '}
                  students improved their scores
                </p>
              </div>

              {/* Trust badges */}
              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <div className="flex items-center bg-white/70 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-xs font-medium">95% Success rate</span>
                </div>
                <div className="flex items-center bg-white/70 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
                  <Target size={16} className="text-blue-500 mr-2" />
                  <span className="text-xs font-medium">
                    Target score guaranteed
                  </span>
                </div>
                <div className="flex items-center bg-white/70 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
                  <Clock size={16} className="text-indigo-500 mr-2" />
                  <span className="text-xs font-medium">Fast-track prep</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                {/* Glowing background effect */}
                <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full absolute filter blur-3xl opacity-25 animate-pulse-slow"></div>

                {/* Main Hero Image */}
                <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden p-1 bg-gradient-to-br from-blue-500 to-indigo-600 rotate-1 hover:rotate-0 transition-all duration-500">
                  <div className="bg-white p-1 rounded-xl overflow-hidden">
                    <img
                      src="https://www.romaniajournal.ro/wp-content/uploads/2023/02/English-proficiency-tests.jpg"
                      alt="Student preparing for language test"
                      className="rounded-lg object-cover w-full h-80 md:h-96"
                    />
                  </div>
                </div>

                {/* Test badge elements */}
                <div className="absolute -right-6 top-12 bg-white rounded-full shadow-xl p-3 z-20 animate-float">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl6NKHCF1orE2H27Tuj688OdJhw1U7--aYqQ&s"
                    alt="IELTS logo"
                    className="w-12 h-12 rounded-full"
                  />
                </div>

                <div className="absolute right-1/4 -top-6 bg-white rounded-full shadow-xl p-3 z-20 animate-float-delayed">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/TOEFL_Logo.svg/1200px-TOEFL_Logo.svg.png"
                    alt="TOEFL logo"
                    className="w-12 h-12 rounded-full"
                  />
                </div>

                <div className="absolute left-1/4 -top-2 bg-white rounded-full shadow-xl p-3 z-20 animate-float-delayed-more">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Duolingo_logo_%282019%29.svg/768px-Duolingo_logo_%282019%29.svg.png"
                    alt="Duolingo logo"
                    className="w-12 h-12 rounded-full"
                  />
                </div>

                <div className="absolute -left-6 top-1/4 bg-white rounded-full shadow-xl p-3 z-20 animate-float">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Pearson_logo.svg/294px-Pearson_logo.svg.png?20180415080110"
                    alt="PTE logo"
                    className="w-12 h-12 rounded-full"
                  />
                </div>

                {/* Floating stats element */}
                <div className="absolute -right-6 bottom-1/4 bg-white rounded-xl shadow-xl p-4 z-20 animate-float">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <TrendingUp className="text-green-600 w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">+25%</p>
                      <p className="text-xs text-gray-500">Score improvement</p>
                    </div>
                  </div>
                </div>

                {/* Score floating element */}
                <div className="absolute -left-4 bottom-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-xl p-4 z-20 animate-float-delayed">
                  <div className="flex items-center">
                    <div className="bg-white/20 p-2 rounded-full mr-3">
                      <Award className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold">8.0 IELTS</p>
                      <p className="text-xs text-blue-100">
                        Average score achieved
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
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>

        <div className="container max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 font-medium text-sm mb-4 shadow-sm">
              <Globe size={16} className="mr-2" />
              Language Mastery
            </div>

            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 mb-4">
              Nail Your Language Test With Confidence
            </h2>

            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Ace your language test preparation with Fly8's expert guidance and
              smart prep strategies. We make the language barrier disappear.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Target className="text-blue-600" size={36} />}
              title="Test Selection Help"
              description="Know which test suits your target country and institutions."
            />
            <FeatureCard
              icon={<FileText className="text-blue-600" size={36} />}
              title="Practice Tests"
              description="Sharpen your skills with realistic exam simulations."
            />
            <FeatureCard
              icon={<TrendingUp className="text-blue-600" size={36} />}
              title="Scoring Tips"
              description="Proven strategies to achieve higher scores."
            />
            <FeatureCard
              icon={<BookOpen className="text-blue-600" size={36} />}
              title="Preparation Resources"
              description="Hand-picked study guides and learning tools."
            />
            <FeatureCard
              icon={<Calendar className="text-blue-600" size={36} />}
              title="Booking Support"
              description="Get help registering at the right test center."
            />
            <FeatureCard
              icon={<Clock className="text-blue-600" size={36} />}
              title="Success Timeline"
              description="Know exactly how long you need to prepare."
            />
            <FeatureCard
              icon={<DollarSign className="text-blue-600" size={36} />}
              title="Partner Discounts"
              description="Save on test prep courses and materials."
            />
            <FeatureCard
              icon={<RefreshCw className="text-blue-600" size={36} />}
              title="Retake Strategy"
              description="Improve scores if needed with smart approaches."
            />
            <FeatureCard
              icon={<Mic className="text-blue-600" size={36} />}
              title="Mock Interview Practice"
              description="Prepare for visa interviews and university entrance tests."
            />
          </div>

          <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-2xl overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full transform translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full transform -translate-x-32 translate-y-32"></div>

            {/* Added sparkle effects */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
            <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-white rounded-full animate-ping-slow"></div>

            <div className="px-8 py-12 md:p-12 flex flex-col md:flex-row items-center justify-between relative z-10">
              <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Sign up and unlock our prep toolkit!
                </h3>
                <p className="text-blue-100 text-lg">
                  Join thousands of students achieving their target language
                  scores.
                </p>
              </div>
              <div className="w-full md:w-auto">
                <div className="flex flex-col sm:flex-row md:items-center">
                  <Link
                    to={'/signup/student'}
                    className="bg-white text-blue-600 hover:text-blue-700 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 group"
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
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 flex flex-col items-center text-center hover:border-blue-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 relative overflow-hidden">
      {/* Corner decoration that appears on hover */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300 rounded-full opacity-0 group-hover:opacity-10"></div>

      <div className="mb-6 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl group-hover:bg-white transition-colors duration-300 shadow-md group-hover:shadow-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
