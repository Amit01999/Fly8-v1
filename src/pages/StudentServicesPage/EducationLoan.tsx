import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  CreditCard,
  Clock,
  PiggyBank,
  FileText,
  ChevronRight,
  Star,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EducationLoanPage() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const benefits = [
    {
      icon: <CreditCard className="w-6 h-6 text-pink-500" />,
      title: 'No-Collateral Loans',
      description: 'Apply without pledging assets.',
    },
    {
      icon: <PiggyBank className="w-6 h-6 text-purple-500" />,
      title: 'Low-Interest Rates',
      description: 'Competitive offers for students.',
    },
    {
      icon: <Globe className="w-6 h-6 text-indigo-500" />,
      title: 'Country-Specific Guidance',
      description: 'Know which lenders support your destination.',
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: 'Quick Approvals',
      description: 'Fast-tracked processing timelines.',
    },
    {
      icon: <FileText className="w-6 h-6 text-cyan-500" />,
      title: 'Repayment Plans',
      description: 'Choose terms that fit your future.',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-teal-500" />,
      title: 'End-to-End Support',
      description: 'From documents to disbursement.',
    },
  ];

  const testimonials = [
    {
      name: 'Rahul S.',
      program: 'MS in Computer Science, USA',
      text: 'The no-collateral loan option saved me. Their guidance made my dream of studying abroad a reality!',
      initial: 'RS',
    },
    {
      name: 'Ananya P.',
      program: 'MBA, Canada',
      text: 'The team helped me find a loan with great interest rates and a repayment schedule that works perfectly for me.',
      initial: 'AP',
    },
    {
      name: 'Kartik M.',
      program: 'Engineering, Germany',
      text: 'Their country-specific guidance was invaluable. The process was smooth and my loan got approved within weeks!',
      initial: 'KM',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 font-sans">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-16 sm:py-24 lg:py-24">
        {/* Refined background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-white z-0"></div>
        <div className="absolute z-10 top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-blue-300 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-80 h-80 bg-pink-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 w-64 h-64 bg-purple-300 rounded-full opacity-15 blur-2xl"></div>

        {/* Animated geometric shapes */}
        <div className="hidden lg:block absolute top-16 right-32 w-12 h-12 border-4 border-indigo-200 rounded-lg animate-spin-slow opacity-30"></div>
        <div className="hidden lg:block absolute bottom-16 left-1/4 w-8 h-8 bg-pink-200 rounded-full animate-bounce-slow opacity-40"></div>
        <div className="hidden lg:block absolute top-1/3 right-1/4 w-6 h-6 bg-yellow-200 rounded-full animate-pulse opacity-40"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <div className="lg:w-1/2 max-w-2xl">
              <div className="inline-flex items-center mb-6 px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full backdrop-blur-sm shadow-sm">
                <div className="w-3 h-3 rounded-full bg-indigo-500 mr-3 animate-pulse"></div>
                <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                  Global Education Financing
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                <span className="block mb-2">Finance Your Global</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
                  Dreams, Effortlessly
                </span>
              </h1>

              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Worried about funding your studies? We help you find education
                loans with low interest, no collateral, and comprehensive
                support.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to={'/signup/student'}
                  className="group flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-pink-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span>Apply for Education Loan</span>
                  <svg
                    className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 rounded-3xl blur-lg"></div>

              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform perspective-1000 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-pink-500/10 z-10"></div>
                <img
                  src="https://bsmedia.business-standard.com/_media/bs/img/article/2024-09/17/thumb/featurecrop/1200X900/1726573667-858.jpg"
                  alt="Global education opportunities"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Stats overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm font-medium text-indigo-200">
                        Average Loan Amount
                      </p>
                      <p className="text-2xl font-bold">$25,000</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-indigo-200">
                        Success Rate
                      </p>
                      <p className="text-2xl font-bold">98%</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-indigo-200">
                        Countries
                      </p>
                      <p className="text-2xl font-bold">50+</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating benefit cards */}
            </div>
          </div>
        </div>
      </div>
      {/* Floating stat cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-xl p-6 flex items-center border-t-4 border-pink-500 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-pink-100 p-3 rounded-full">
              <Star className="h-8 w-8 text-pink-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Success Rate</p>
              <p className="text-2xl font-bold text-gray-900">98%</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-6 flex items-center border-t-4 border-purple-500 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-purple-100 p-3 rounded-full">
              <Globe className="h-8 w-8 text-purple-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Countries Covered
              </p>
              <p className="text-2xl font-bold text-gray-900">12+</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-6 flex items-center border-t-4 border-indigo-500 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-indigo-100 p-3 rounded-full">
              <CreditCard className="h-8 w-8 text-indigo-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Loan Partners</p>
              <p className="text-2xl font-bold text-gray-900">20+</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full text-indigo-600 bg-indigo-100 mb-4">
              <span className="text-sm font-semibold">Education Loans</span>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
              Finance Your Dreams. Stress-Free.
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Don't let finances hold you back. Fly8 partners with banks and
              NBFCs to offer you smart, low-hassle education loans with flexible
              terms.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="group relative">
                  {/* Card */}
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg p-6 z-10 transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                    {/* Colored top border */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-pink-500"></div>

                    {/* Icon */}
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 transition-colors duration-300">
                      {benefit.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>

                    {/* Learn more link */}
                    <div className="mt-6 flex items-center text-indigo-600 font-medium">
                      <span className="text-sm">Learn more</span>
                      <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>

                    {/* Decorative circle */}
                    <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-indigo-50 -mb-12 -mr-12 opacity-50"></div>
                  </div>

                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-pink-500/5 rounded-2xl transform translate-y-3 scale-95 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <button className="group inline-flex items-center justify-center px-8 py-4 border-0 text-base font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <span>Sign up for loan consultation now!</span>
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gradient-to-br from-indigo-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full text-indigo-600 bg-indigo-100 mb-4">
              <span className="text-sm font-semibold">Success Stories</span>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              What Our Students Say
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300 border-b-4 border-transparent hover:border-purple-500"
              >
                <div className="flex items-center mb-6">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.initial}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-indigo-600">
                      {testimonial.program}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full text-purple-600 bg-purple-100 mb-4">
              <span className="text-sm font-semibold">Simple & Fast</span>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Three Steps to Your Education Loan
            </h2>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="relative z-10">
                <div className="bg-white rounded-3xl shadow-xl p-8 border-b-4 border-indigo-500 h-full transform hover:-translate-y-2 transition-all duration-300">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-xl font-bold shadow-lg">
                      1
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Complete Online Form
                    </h3>
                    <p className="text-gray-600">
                      Fill our simple application with your details and
                      education plans in just 5 minutes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <div className="bg-white rounded-3xl shadow-xl p-8 border-b-4 border-purple-500 h-full transform hover:-translate-y-2 transition-all duration-300">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-white text-xl font-bold shadow-lg">
                      2
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Get Custom Options
                    </h3>
                    <p className="text-gray-600">
                      Our experts match you with the best loan options tailored
                      to your specific needs and goals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <div className="bg-white rounded-3xl shadow-xl p-8 border-b-4 border-pink-500 h-full transform hover:-translate-y-2 transition-all duration-300">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-pink-500 to-red-600 text-white text-xl font-bold shadow-lg">
                      3
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Complete & Receive
                    </h3>
                    <p className="text-gray-600">
                      Complete the process with our guidance and receive your
                      funds directly to your account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button className="group inline-flex items-center justify-center px-8 py-4 border-0 text-base font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <span>Start Your Application</span>
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="/api/placeholder/1200/400"
                alt="Students on campus"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-purple-700/90 mix-blend-multiply"></div>
            </div>

            <div className="relative px-6 py-16 sm:px-12 lg:px-16 flex flex-col md:flex-row items-center">
              <div className="text-center md:text-left md:w-2/3">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block text-indigo-200">
                    Sign up for loan consultation now!
                  </span>
                </h2>
              </div>
              <div className="mt-8 md:mt-0 md:w-1/3 flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 md:justify-end">
                <Link
                  to={'/signup/student'}
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-indigo-700 bg-white hover:bg-indigo-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Curved bottom edge */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg
                viewBox="0 0 1440 80"
                className="fill-current text-indigo-50"
                preserveAspectRatio="none"
                style={{ display: 'block' }}
              >
                <path d="M0,80 L1440,80 L1440,0 C1360,50 1120,80 720,80 C320,80 80,50 0,0 L0,80 Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
