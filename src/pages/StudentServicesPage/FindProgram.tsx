import React from 'react';
import {
  ArrowRight,
  Heart,
  Briefcase,
  Award,
  BarChart2,
  BookOpen,
  Laptop,
  DollarSign,
  Languages,
  TrendingUp,
  MapPin,
  PieChart,
  ArrowUpRight,
  Search,
} from 'lucide-react';
import findproggtam from '../../assets/picture/StudentService/findcourse.png';
import { Link } from 'react-router-dom';

function FindProgram() {
  const programFeatures = [
    {
      title: 'Interest-Aligned Search',
      description: 'Match programs to your passions.',
      icon: Heart,
      color: 'from-rose-500 to-pink-600',
      bgColor: 'bg-rose-50',
    },
    {
      title: 'Career-Focused Choice',
      description: 'Choose with future job prospects in mind.',
      icon: Briefcase,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Top Global Programs',
      description: 'Access courses from world-ranked universities.',
      icon: Award,
      color: 'from-amber-500 to-yellow-600',
      bgColor: 'bg-amber-50',
    },
    {
      title: 'Course Comparison Tool',
      description: 'Evaluate programs side by side.',
      icon: BarChart2,
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Specialization Clarity',
      description: 'Understand course content and career paths.',
      icon: BookOpen,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
    },
    {
      title: 'Flexible Study Modes',
      description: 'On-campus, online, or hybrid options.',
      icon: Laptop,
      color: 'from-sky-500 to-blue-600',
      bgColor: 'bg-sky-50',
    },
    {
      title: 'Budget Filter',
      description: 'Match your financial comfort.',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Language Fit',
      description: 'Filter by medium of instruction.',
      icon: Languages,
      color: 'from-fuchsia-500 to-purple-600',
      bgColor: 'bg-fuchsia-50',
    },
    {
      title: 'Trending Fields Guide',
      description: 'Discover on-demand subjects globally.',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <div>
      {/* Hero section remains the same */}
      <section className="relative overflow-hidden py-10 lg:py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100"></div>
          <div className="absolute top-0 right-0 w-full h-full">
            <svg
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              opacity="0.1"
            >
              <path
                fill="#3B82F6"
                d="M488.5,142.5Q417,285,307,307Q197,329,98.5,164.5Q0,0,244,0Q488,0,488.5,142.5Z"
              ></path>
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-full">
            <svg
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              opacity="0.1"
            >
              <path
                fill="#4F46E5"
                d="M325,186.5Q250,373,125,311.5Q0,250,125,188.5Q250,127,325,186.5Z"
              ></path>
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="w-full md:w-2/3 z-10">
              <div className="inline-block rounded-lg bg-blue-500 bg-opacity-10 px-3 py-1 text-sm font-medium text-blue-700 mb-4">
                Find Your Ideal Program
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Find the Perfect <span className="text-blue-600">Program</span>{' '}
                for Your Future
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                With thousands of global courses available, we help you choose
                the right one — tailored to your passion, goals, and budget.
              </p>
              <Link
                to={'/signup/student'}
                className="group w-fit flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl"
              >
                Explore Your Best-Fit Programs
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 group-hover:bg-blue-400 transition-all duration-300">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
            <div className="w-full  md:w-1/2 relative">
              <img src={findproggtam} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Program Features Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50">
        {/* Modern background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 -left-40 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-1/4 left-1/5 w-64 h-64 bg-purple-100 rounded-full opacity-20 blur-2xl"></div>

          {/* Floating elements with subtle animation */}
          <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-yellow-400 rounded-full animate-float-slow"></div>
          <div className="absolute top-2/3 right-1/4 w-5 h-5 bg-blue-500 rounded-full animate-float-medium"></div>
          <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-purple-500 rounded-full animate-float-fast"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-500 rounded-full animate-float-medium"></div>

          {/* Decorative wave pattern */}
          <svg
            className="absolute left-0 right-0 bottom-0 text-blue-50 w-full h-48"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Enhanced header section */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full text-white text-sm font-medium mb-6 shadow-lg animate-shine overflow-hidden">
              <Search className="w-4 h-4" />
              <span>PROGRAM FINDER</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 bg-clip-text text-transparent animate-gradient-x">
                Confused About What to Study? Let's Clear the Fog.
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              We help you cut through the clutter and find a study program that
              reflects your passion, matches your goals, and sets you up for
              success.
            </p>

            {/* Modern dots indicator */}
            <div className="flex items-center justify-center space-x-3">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="h-3 w-3 rounded-full bg-indigo-500 animate-pulse delay-100"></span>
              <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse delay-200"></span>
            </div>
          </div>

          {/* New hexagonal grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
            {programFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
              >
                {/* Animated gradient background */}
                <div
                  className={`absolute -right-6 -bottom-6 h-40 w-40 ${feature.bgColor} rounded-full transition-all duration-700 group-hover:scale-150 group-hover:opacity-30`}
                ></div>

                {/* Interactive icon container with color variations */}
                <div
                  className={`relative inline-flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}
                >
                  <div className="absolute inset-0 bg-white opacity-20 rounded-xl group-hover:opacity-30 transition-opacity duration-300"></div>
                  {React.createElement(feature.icon, {
                    className: 'h-8 w-8 relative z-10',
                  })}
                </div>

                {/* Content with improved typography */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300 flex items-center">
                    {feature.title}
                    <ArrowUpRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Interactive overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Section with Glass Morphism */}
          <div className="relative rounded-3xl shadow-2xl backdrop-blur-sm">
            {/* Background glow effects */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-3xl opacity-50 blur-xl animate-pulse-slow"></div>

            <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-3xl overflow-hidden backdrop-blur-md">
              {/* Overlay patterns */}
              <div className="absolute inset-0 bg-[url('/api/placeholder/400/400')] mix-blend-overlay opacity-10"></div>
              <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>

              <div className="md:flex items-center justify-between p-10 md:p-16">
                <div className="mb-10 md:mb-0 md:w-3/5 relative">
                  <div className="absolute -left-8 -top-8 w-16 h-16 rounded-full bg-white opacity-10"></div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to explore thousands of programs?
                  </h3>
                  <p className="text-xl text-blue-100 max-w-lg">
                    Get matched with courses that align perfectly with your
                    career goals and interests.
                  </p>
                </div>

                {/* Modern animated button */}
                <Link
                  to={'/signup/student'}
                  className="w-full md:w-auto bg-white hover:bg-blue-50 text-blue-700 rounded-full font-bold px-10 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-4 group relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent opacity-50 translate-x-full group-hover:animate-shimmer"></span>
                  <span className="text-lg">Explore Programs Now</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white transition-all duration-300 group-hover:scale-110">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Add tailwind animations */}
        <style tsx global>{`
          .animate-float-slow {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-medium {
            animation: float 8s ease-in-out infinite;
          }
          .animate-float-fast {
            animation: float 4s ease-in-out infinite;
          }
          .animate-pulse-slow {
            animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient 15s ease infinite;
          }
          .animate-shine {
            position: relative;
            overflow: hidden;
          }
          .animate-shine::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 50%;
            height: 100%;
            background: linear-gradient(
              to right,
              transparent,
              rgba(255, 255, 255, 0.3),
              transparent
            );
            animation: shine 3s infinite;
          }
          .animate-shimmer {
            animation: shimmer 2s infinite;
          }
          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
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
          @keyframes shine {
            100% {
              left: 100%;
            }
          }
          @keyframes shimmer {
            100% {
              transform: translateX(100%);
            }
          }
        `}</style>
      </section>
    </div>
  );
}

export default FindProgram;
