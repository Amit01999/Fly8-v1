import { useState } from 'react';
import {
  FileText,
  Award,
  Briefcase,
  CheckSquare,
  Star,
  Users,
  BookOpen,
  Download,
  ChevronRight,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ResumeBuildingImg from '@/assets/picture/Career Services/1.png';
import { Link } from 'react-router-dom';

export default function ResumeBuilding() {
  const [activeFeature, setActiveFeature] = useState(0);
  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Country-Specific Templates',
      description: 'Resumes that match local expectations.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Professional Design',
      description: 'Clean, modern, and easy to read.',
    },
    {
      icon: <CheckSquare className="w-6 h-6" />,
      title: 'Keyword Integration',
      description: 'Match university or job descriptions.',
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Skill Highlighting',
      description: 'Emphasize hard and soft skills.',
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Experience Structuring',
      description: 'Showcase internships and achievements.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Personalized Guidance',
      description: 'One-on-one expert support.',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Multiple Revisions',
      description: "Perfect your profile until it's ready.",
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: 'PDF & Editable Files',
      description: 'Get both printable and editable formats.',
    },
  ];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section with Monochromatic Design */}

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-32 h-32 bg-indigo-200 rounded-full opacity-40 blur-xl"></div>
              <div className="absolute -right-4 -bottom-4 w-40 h-40 bg-purple-200 rounded-full opacity-50 blur-xl"></div>
              <h1 className="relative text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 sm:text-6xl md:text-7xl">
                Stand Out Before You Even Speak
              </h1>
            </div>
            <p className="mt-8 text-xl leading-relaxed text-slate-700 max-w-3xl">
              A great resume gets you shortlisted. We help you craft modern,
              professional, and impactful resumes tailored for global
              universities and job markets.
            </p>
            <div className="mt-10">
              <Link to={'/signin/student'}>
                <button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Build Your Resume
                  <ChevronRight
                    className={`ml-2 w-5 h-5 transition-transform duration-300 ${
                      isHovered ? 'translate-x-1' : ''
                    }`}
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-3xl transform rotate-2 opacity-20 blur-sm"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-200 to-indigo-200 rounded-3xl transform -rotate-2 opacity-30 blur-sm"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
                <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                <img
                  src={ResumeBuildingImg}
                  alt="Professional Resume Template"
                  className="rounded-2xl shadow-inner"
                />
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full p-5 shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-8 w-24 h-24 bg-pink-200 rounded-full opacity-40 blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-200 rounded-full opacity-50 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Minimalist Style */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Your Career Starts With a Great First Page
            </h2>
            <p className="text-lg text-gray-600">
              From layout to keywords, we help you build a resume that captures
              attention and communicates potential.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="relative">
              {/* Interactive feature display */}
              <div className="sticky top-24 bg-slate-50 rounded-2xl border border-slate-200 p-8 shadow-sm">
                <div className="aspect-square max-w-md mx-auto relative">
                  {/* Dynamic feature visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-indigo-600">
                      {features[activeFeature].icon}
                    </div>
                  </div>

                  {/* Circular progress */}
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="48"
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="2"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="48"
                      fill="none"
                      stroke="#6366f1"
                      strokeWidth="2"
                      strokeDasharray="301.59"
                      strokeDashoffset={
                        301.59 -
                        301.59 * ((activeFeature + 1) / features.length)
                      }
                      transform="rotate(-90 50 50)"
                    />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/80 backdrop-blur-sm w-32 h-32 rounded-full flex items-center justify-center shadow-md">
                      <div>
                        <div className="text-4xl font-bold text-indigo-600">
                          {activeFeature + 1}
                        </div>
                        <div className="text-xs text-slate-500">
                          of {features.length}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    {features[activeFeature].description}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className={`transition-all duration-300 cursor-pointer border-l-4 hover:shadow-md ${
                    activeFeature === index
                      ? 'border-l-indigo-600 shadow-md bg-indigo-50/50'
                      : 'border-l-transparent'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                          activeFeature === index
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-base font-semibold">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="pt-8">
                <Link to={'/signin/student'}>
                  <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Get Your Resume Reviewed
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
