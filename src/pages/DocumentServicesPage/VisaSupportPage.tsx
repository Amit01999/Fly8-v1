import { useState } from 'react';
import {
  CheckCircle,
  ArrowRight,
  Globe,
  FileText,
  ListChecks,
  MessageSquare,
  Calendar,
  Clock,
  AlertCircle,
  RefreshCw,
  ChevronRight,
} from 'lucide-react';
import visaImage from '@/assets/picture/DocumentServices/3.png';
import { Link } from 'react-router-dom';

export default function VisaSupport() {
  const [isHovering, setIsHovering] = useState<number | null>(null);

  const features = [
    {
      icon: <Globe className="text-blue-500" />,
      title: 'Destination-Specific Advice',
      description: 'Tailored steps for your chosen country.',
    },
    {
      icon: <FileText className="text-blue-500" />,
      title: 'Form Filling Assistance',
      description: 'Expert help to avoid critical errors.',
    },
    {
      icon: <ListChecks className="text-blue-500" />,
      title: 'Document Checklist',
      description: 'Stay on track with embassy requirements.',
    },
    {
      icon: <MessageSquare className="text-blue-500" />,
      title: 'Interview Coaching',
      description: 'Practice with real questions and expert tips.',
    },
    {
      icon: <Calendar className="text-blue-500" />,
      title: 'Mock Visa Sessions',
      description: 'Build confidence before your big day.',
    },
    {
      icon: <FileText className="text-blue-500" />,
      title: 'Financial Document Review',
      description: 'Ensure your bank statements pass scrutiny.',
    },
    {
      icon: <Clock className="text-blue-500" />,
      title: 'Application Timing Plan',
      description: 'Apply at the best time to avoid delays.',
    },
    {
      icon: <AlertCircle className="text-blue-500" />,
      title: 'Policy Updates',
      description: 'Stay ahead of changing rules.',
    },
    {
      icon: <RefreshCw className="text-blue-500" />,
      title: 'Reapplication Support',
      description: 'Get help if your visa is delayed or denied.',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6 md:px-10 lg:px-16">
        <div className="absolute inset-0 bg-blue-600 opacity-5 rounded-bl-full"></div>
        <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-blue-500 opacity-10 rounded-full"></div>
        <div className="absolute -left-16 -top-16 w-48 h-48 bg-indigo-500 opacity-10 rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-indigo-600 text-sm font-medium shadow-sm">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                </span>
                Visa Assistance
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                Navigate Visa Hassles <br />
                With Expert Guidance
              </h1>
              <p className="text-slate-600 text-xl md:text-2xl mb-8 max-w-xl leading-relaxed">
                Don't risk delays or denials — our visa team walks you through
                every step for a successful visa journey.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  to={'/signup/student'}
                  className="group relative px-8 py-4 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-lg transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Visa Support
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                {/* Modern glassmorphism card */}
                <div className="relative bg-white/80 backdrop-blur-sm p-2 rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/40 to-purple-100/40"></div>
                  <div className="relative rounded-2xl overflow-hidden border border-white/20">
                    <img
                      src={visaImage}
                      alt="Visa support illustration"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="absolute  -right-3 -bottom-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-2 shadow-lg hover:scale-105 transition-transform">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>

                {/* Floating badge */}
                <div className="absolute -left-6 top-1/3 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 transform -rotate-3 border border-slate-100">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text font-medium">
                    97% Success Rate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Visa Success Starts With Preparation
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Every country has its rules. We help you meet them — accurately,
              confidently, and stress-free — so your study abroad plans stay on
              track.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:border-blue-200"
                onMouseEnter={() => setIsHovering(index + 10)}
                onMouseLeave={() => setIsHovering(null)}
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mb-4 transition-transform duration-300 ${
                    isHovering === index + 10 ? 'transform scale-110' : ''
                  }`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto group"
              onMouseEnter={() => setIsHovering(2)}
              onMouseLeave={() => setIsHovering(null)}
            >
              Secure Your Visa Path
              <ArrowRight
                className={`transition-transform duration-300 ${
                  isHovering === 2 ? 'transform translate-x-1' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-6 md:px-10 lg:px-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="rounded-full overflow-hidden border-4 border-blue-100 w-32 h-32 mx-auto">
                  <img
                    src="/api/placeholder/200/200"
                    alt="Student testimonial"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="text-blue-500 mb-2">★★★★★</div>
                <p className="text-slate-700 text-lg italic mb-4">
                  "I was overwhelmed by visa requirements until I found this
                  service. They guided me through every step, and my visa was
                  approved on the first try! Worth every penny."
                </p>
                <p className="font-semibold text-slate-800">
                  Sarah L. — Student in Canada
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                How early should I start my visa process?
              </h3>
              <p className="text-slate-600">
                We recommend starting at least 3-4 months before your planned
                departure date. This gives enough time for document preparation,
                application processing, and addressing any unexpected issues.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                What if my visa gets rejected?
              </h3>
              <p className="text-slate-600">
                Our reapplication support helps identify why your visa was
                rejected and provides guidance on addressing those issues for a
                successful second application.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Do you guarantee visa approval?
              </h3>
              <p className="text-slate-600">
                While we can't guarantee approval (no one can), our clients have
                a significantly higher approval rate than average due to our
                thorough preparation process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 md:px-10 lg:px-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Visa?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of students who've successfully navigated the visa
            process with our expert guidance.
          </p>
          <Link
            to={'/signup/student'}
            className="w-fit px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
            onMouseEnter={() => setIsHovering(3)}
            onMouseLeave={() => setIsHovering(null)}
          >
            Get Started Today
            <ArrowRight
              className={`text-blue-600 transition-transform duration-300 ${
                isHovering === 3 ? 'transform translate-x-1' : ''
              }`}
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
