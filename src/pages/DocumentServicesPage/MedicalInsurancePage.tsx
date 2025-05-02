import {
  ArrowRight,
  ShieldCheck,
  Hospital,
  HeartPulse,
  PhoneCall,
  CreditCard,
  Clock,
  FileSearch,
  Smartphone,
  Zap,
  CheckCircle,
} from 'lucide-react';
import heroimage from '@/assets/picture/DocumentServices/5.png';
import { Link } from 'react-router-dom';

export default function MedicalInsurance() {
  const features = [
    {
      icon: <ShieldCheck className="text-indigo-500" />,
      title: 'Visa-Approved Plans',
      description: 'Meet embassy health insurance standards.',
    },
    {
      icon: <CreditCard className="text-indigo-500" />,
      title: 'Affordable Premiums',
      description: 'Budget-friendly coverage options.',
    },
    {
      icon: <Hospital className="text-indigo-500" />,
      title: 'Hospitalization & OPD',
      description: 'Covers emergencies, visits, and tests.',
    },
    {
      icon: <Smartphone className="text-indigo-500" />,
      title: 'Digital Insurance Cards',
      description: 'Access your policy on the go.',
    },
    {
      icon: <HeartPulse className="text-indigo-500" />,
      title: 'Pre-existing Illness Support',
      description: 'Plans with partial or full cover.',
    },
    {
      icon: <PhoneCall className="text-indigo-500" />,
      title: 'Emergency Helplines',
      description: '24/7 global medical support.',
    },
    {
      icon: <FileSearch className="text-indigo-500" />,
      title: 'Cashless Claims',
      description: 'No upfront payment at partner hospitals.',
    },
    {
      icon: <Clock className="text-indigo-500" />,
      title: 'Quick Claim Processing',
      description: 'Hassle-free reimbursement workflows.',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-sky-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center mb-5 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium shadow-sm">
                <Zap className="w-4 h-4 mr-2 text-indigo-600" />
                Medical Insurance
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Stay Protected, <br />
                <span className="bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">
                  Study Confidently
                </span>
              </h1>
              <p className="text-gray-600 text-lg mb-8 max-w-lg leading-relaxed">
                We help you choose affordable, embassy-approved health insurance
                plans — so you're covered from day one, no matter where you go.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={'/signup/student'}
                  className="group relative px-7 py-3.5 overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/30"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Choose Your Insurance Plan
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-1.5 rounded-2xl shadow-2xl border border-gray-100/50">
                <div className="rounded-xl overflow-hidden bg-gradient-to-br from-indigo-50 to-white relative">
                  <img
                    src={heroimage}
                    alt="Medical insurance illustration"
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-6">
                    <div className="flex items-center gap-2 text-white">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">
                        24/7 Emergency Support Included
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-4 -right-4 bg-white px-5 py-2.5 rounded-xl shadow-xl border border-gray-200/50 flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    97% Approval Rate
                  </span>
                </div>
                <div className="h-6 w-px bg-gray-200"></div>
                <div className="text-sm font-medium text-gray-700">
                  24h Claims
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Health Coverage{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">
                Made Simple
              </span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Fly8 partners with top providers to offer medical insurance
              policies designed specifically for international students.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-0.5 rounded-xl bg-gradient-to-br from-indigo-50 to-white hover:from-indigo-100 hover:to-violet-50 transition-all cursor-pointer"
              >
                <div className="bg-white rounded-xl p-6 h-full border border-gray-100 group-hover:border-indigo-100 transition-colors shadow-sm group-hover:shadow-md">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-50 mb-4 group-hover:bg-indigo-100 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="group relative px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/30">
              <span className="relative z-10 flex items-center gap-2">
                Protect Your Journey Abroad
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-indigo-50 to-violet-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-1 shadow-xl border border-white/50 overflow-hidden">
            <div className="rounded-xl bg-gradient-to-br from-white to-indigo-50/50 p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/3">
                  <div className="relative">
                    <div className="rounded-2xl overflow-hidden w-40 h-40 border-4 border-white shadow-lg mx-auto bg-gradient-to-br from-indigo-100 to-violet-100">
                      <img
                        src="/api/placeholder/200/200"
                        alt="Student testimonial"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg p-2 shadow-md">
                      <HeartPulse className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                    "When I had a medical emergency in Germany, my Fly8
                    insurance handled everything. They coordinated with the
                    hospital directly and I didn't have to pay anything upfront.
                    Such a relief!"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-px bg-gradient-to-r from-indigo-500 to-violet-500"></div>
                    <div className="font-medium text-gray-900">
                      Priya K., Student in Berlin
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-indigo-700 to-violet-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Health Coverage?
          </h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            Get instant quotes and purchase your insurance policy in minutes.
            Your safety abroad starts here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={'/signup/student'}
              className="group relative px-8 py-4 overflow-hidden rounded-lg bg-white text-indigo-700 font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Insurance Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Link>
            <Link
              to={'/signup/student'}
              className="px-8 py-4 border-2 border-white/30 bg-white/5 hover:bg-white/10 text-white font-medium rounded-lg transition-all backdrop-blur-sm"
            >
              Contact Our Advisors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
