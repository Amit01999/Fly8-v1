import React from 'react';
import {
  ArrowRight,
  GraduationCap,
  Users,
  MapPin,
  DollarSign,
  CheckSquare,
  TrendingUp,
  Network,
  Globe,
  School,
  Building,
  Heart,
  Award,
  Search,
} from 'lucide-react';

function FindUniversity() {
  const universityBenefits = [
    {
      title: 'Tailored Recommendations',
      description: 'University list curated just for you.',
      icon: Heart,
      color: 'from-rose-500 to-pink-600',
      bgColor: 'bg-rose-50',
    },
    {
      title: 'Campus Life Preview',
      description: 'Learn about student life, clubs, and culture.',
      icon: Users,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Location Matching',
      description: 'Filter by city, expenses, or several other factors.',
      icon: MapPin,
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Affordability Focus',
      description: 'Tuition cost breakdowns.',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Entry Requirements',
      description: 'Know what you need, before you apply.',
      icon: CheckSquare,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
    },
    {
      title: 'Admission Trends',
      description: 'Get insights on past acceptance rates.',
      icon: TrendingUp,
      color: 'from-sky-500 to-cyan-600',
      bgColor: 'bg-sky-50',
    },
    {
      title: 'Alumni Network',
      description: 'See where grads are now.',
      icon: Network,
      color: 'from-indigo-500 to-blue-600',
      bgColor: 'bg-indigo-50',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 bg-gradient-to-b from-slate-50 to-white">
        {/* Decorative background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(#e1e7ff_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
          <div className="absolute -top-40 right-0 w-72 h-72 bg-gradient-to-br from-blue-300 to-indigo-300 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-1/3 -left-20 w-64 h-64 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-20 left-1/4 w-16 h-16 rounded-lg bg-amber-400 opacity-10 rotate-12 animate-float-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-20 h-20 rounded-lg bg-blue-500 opacity-10 -rotate-12 animate-float-medium"></div>
          <div className="absolute top-40 right-1/3 w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg opacity-20 rotate-45 animate-float-fast"></div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            {/* Left content */}
            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full text-white text-sm font-medium mb-6 shadow-lg animate-shine">
                <GraduationCap className="w-4 h-4" />
                <span>FIND UNIVERSITY</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Discover Your{' '}
                <span className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-clip-text text-transparent animate-gradient-x">
                  Dream University
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-10 max-w-lg">
                From Ivy League giants to emerging academic leaders — we match
                you with universities that align with your academic goals and
                lifestyle.
              </p>

              <button className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-700 px-8 py-5 font-bold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:translate-y-px">
                Get Your Personalized University List
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            </div>

            {/* Right content - Auto-scrolling University Cards */}
            <div className="w-full md:w-1/2">
              <div className="relative overflow-hidden">
                <div className="flex space-x-8 animate-scroll-x">
                  {/* Duplicate these card groups to make infinite feel */}
                  {Array(2)
                    .fill(0)
                    .map((_, idx) => (
                      <div key={idx} className="flex space-x-8">
                        {[
                          {
                            title: 'Harvard University',
                            location: 'Cambridge, MA',
                            image:
                              'https://assets.collegedunia.com/public/college_data/images/studyabroad/appImage/college_1090_29-15:00_o-HARVARD-UNIVERSITY-BUILDING-facebook.jpeg',
                            rank: '#1',
                            acceptance: '4.6%',
                            tuition: '$54,768',
                            students: '22,947',
                            color: 'indigo',
                          },
                          {
                            title: 'Stanford University',
                            location: 'Stanford, CA',
                            image:
                              'https://images.shiksha.com/mediadata/images/1533535408phpRuopAS.jpeg',
                            rank: '#2',
                            acceptance: '3.9%',
                            tuition: '$56,169',
                            students: '16,424',
                            color: 'pink',
                          },
                          {
                            title: 'MIT',
                            location: 'Cambridge, MA',
                            image:
                              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJpBoHhTVDzgWeFzp_xcuYT2BQob5pOv1PWw&s',
                            rank: '#3',
                            acceptance: '6.7%',
                            tuition: '$53,790',
                            students: '11,520',
                            color: 'green',
                          },
                          {
                            title: 'Princeton University',
                            image:
                              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMSUIJ3xmottRZ5n829XX4JGO-hEKMpusPdw&s',
                            rank: '#4',
                          },
                          {
                            title: 'Yale University',
                            image:
                              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBAX31DkNMqM2KVvitRBm5UTV3F2fIWxperQ&s',
                            rank: '#5',
                          },
                        ].map((univ, index) => (
                          <div
                            key={index}
                            className="w-72 h-96 flex-shrink-0 rounded-3xl bg-white/70 backdrop-blur-md p-6 shadow-2xl border border-white/20 hover:scale-105 hover:shadow-3xl transition-all duration-700 ease-in-out"
                          >
                            <div className="flex items-center justify-between mb-4">
                              {univ.title && (
                                <div className="flex items-center">
                                  <div
                                    className={`h-12 w-12 rounded-full bg-${univ.color}-200 flex items-center justify-center mr-4`}
                                  >
                                    <School
                                      className={`h-6 w-6 text-${univ.color}-700`}
                                    />
                                  </div>
                                  <div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                      {univ.title}
                                    </h3>
                                    {univ.location && (
                                      <div className="flex items-center text-gray-500 text-sm">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        {univ.location}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>

                            <div className="h-48 rounded-2xl overflow-hidden mb-4 relative">
                              <img
                                src={univ.image}
                                alt={univ.title}
                                className="object-cover w-full h-full scale-110 hover:scale-100 transition-transform duration-700"
                              />
                              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-3 text-sm">
                                World Ranking: {univ.rank}
                              </div>
                            </div>

                            {univ.acceptance && (
                              <div className="flex justify-between text-sm text-gray-700 font-semibold">
                                <div className="text-center">
                                  <div>Acceptance</div>
                                  <div className="text-gray-900">
                                    {univ.acceptance}
                                  </div>
                                </div>
                                <div className="text-center">
                                  <div>Tuition</div>
                                  <div className="text-gray-900">
                                    {univ.tuition}
                                  </div>
                                </div>
                                <div className="text-center">
                                  <div>Students</div>
                                  <div className="text-gray-900">
                                    {univ.students}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-white to-indigo-50">
        {/* Modern background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 -left-40 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>

          {/* Subtle wave pattern */}
          <svg
            className="absolute left-0 right-0 bottom-0 text-indigo-50 w-full h-48"
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
          {/* Features section header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full text-white text-sm font-medium mb-6 shadow-lg animate-shine overflow-hidden">
              <Search className="w-4 h-4" />
              <span>UNIVERSITY FINDER</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-clip-text text-transparent animate-gradient-x">
                World-Class Universities. One Click Away.
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              The right university can change your life. We help you find it —
              from Ivy League institutions to career-focused colleges — all
              based on your unique goals.
            </p>

            {/* Modern dots indicator */}
            <div className="flex items-center justify-center space-x-3">
              <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="h-3 w-3 rounded-full bg-purple-500 animate-pulse delay-100"></span>
              <span className="h-2 w-2 rounded-full bg-pink-500 animate-pulse delay-200"></span>
            </div>
          </div>

          {/* Benefits cards with hexagonal layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {universityBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-indigo-200 hover:-translate-y-2"
              >
                {/* Animated gradient background */}
                <div
                  className={`absolute -right-6 -bottom-6 h-40 w-40 ${benefit.bgColor} rounded-full transition-all duration-700 group-hover:scale-150 group-hover:opacity-30`}
                ></div>

                {/* Icon with color variations */}
                <div
                  className={`relative inline-flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br ${benefit.color} text-white mb-6 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}
                >
                  <div className="absolute inset-0 bg-white opacity-20 rounded-xl group-hover:opacity-30 transition-opacity duration-300"></div>
                  {React.createElement(benefit.icon, {
                    className: 'h-8 w-8 relative z-10',
                  })}
                </div>

                {/* Content with improved typography */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors duration-300 flex items-center">
                    {benefit.title}
                    <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>

                {/* Interactive overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Section with Glass Morphism */}
          <div className="relative rounded-3xl shadow-2xl backdrop-blur-sm">
            {/* Background glow effects */}
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl opacity-50 blur-xl animate-pulse-slow"></div>

            <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl overflow-hidden backdrop-blur-md">
              {/* Overlay patterns */}
              <div className="absolute inset-0 bg-[url('/api/placeholder/400/400')] mix-blend-overlay opacity-10"></div>
              <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>

              <div className="md:flex items-center justify-between p-10 md:p-16">
                <div className="mb-10 md:mb-0 md:w-3/5 relative">
                  <div className="absolute -left-8 -top-8 w-16 h-16 rounded-full bg-white opacity-10"></div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to find your academic home?
                  </h3>
                  <p className="text-xl text-indigo-100 max-w-lg">
                    Sign up and get your personalized university shortlist!
                  </p>
                </div>

                {/* Modern animated button */}
                <button className="w-full md:w-auto bg-white hover:bg-indigo-50 text-indigo-700 rounded-full font-bold px-10 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-4 group relative overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-50 to-transparent opacity-50 translate-x-full group-hover:animate-shimmer"></span>
                  <span className="text-lg">Get Your University List</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white transition-all duration-300 group-hover:scale-110">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </button>
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

export default FindUniversity;
