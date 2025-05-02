import React from 'react';
import {
  CheckCircle,
  Search,
  FileCheck,
  Award,
  Globe,
  Calendar,
  Shield,
  CheckSquare,
  Zap,
} from 'lucide-react';
import heroimage from '@/assets/picture/DocumentServices/1.png';
import { Link } from 'react-router-dom';

export default function DocumentVerification() {
  const FeatureCard = ({
    icon,
    title,
    description,
  }: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }) => (
    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-b-4 border-indigo-500 flex flex-col items-center">
      <div className="text-indigo-600 mb-5 p-4 bg-indigo-50 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto pt-12 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-left">
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm mb-8">
              Document Verification Service
            </span>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800">
              Submit With Confidence
            </h1>
            <p className="text-xl text-gray-600 mb-10 lg:pr-10">
              Don't let simple document errors delay your dreams. Our
              verification service ensures your transcripts, certificates, and
              IDs are accurate, consistent, and ready for international
              submission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={'/signup/student'}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Verify Your Documents
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-300/30 to-purple-300/30 rounded-3xl backdrop-blur-sm"></div>
            <img
              src={heroimage}
              alt="Document Verification"
              className="relative rounded-3xl shadow-2xl transform rotate-1 border-8 border-white z-10"
            />
            <div className="absolute -right-4 -bottom-4 bg-white shadow-lg rounded-2xl p-4 z-20">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-500" size={24} />
                <span className="font-bold text-gray-800">
                  Verified & Secured
                </span>
              </div>
            </div>
            <div className="absolute -left-6 top-1/2 bg-white shadow-lg rounded-2xl p-4 z-20">
              <div className="flex items-center space-x-2">
                <Shield className="text-indigo-500" size={24} />
                <span className="font-bold text-gray-800">
                  100% Authenticated
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 text-sm text-indigo-600 font-medium uppercase">
              Our Services
            </span>
          </div>
        </div>

        <div className="text-center mt-10 mb-16">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 mb-8">
            Your First Defense Against Application Rejection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our multi-level document verification process increases your chances
            of approval by ensuring authenticity, consistency, and readiness for
            any application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<CheckSquare size={36} />}
            title="University-Ready Format"
            description="All documents formatted to meet institutional standards ensuring acceptance across global institutions."
          />
          <FeatureCard
            icon={<Zap size={36} />}
            title="Error Detection"
            description="Our AI-powered system identifies typos, inconsistencies, and missing data before submission."
          />
          <FeatureCard
            icon={<Search size={36} />}
            title="Authentication Check"
            description="Advanced verification techniques confirm document origin and validity with expert oversight."
          />
          <FeatureCard
            icon={<Award size={36} />}
            title="Consistency Assurance"
            description="Comprehensive name, date, and academic consistency checks across all your documents."
          />
          <FeatureCard
            icon={<Globe size={36} />}
            title="Translation Support"
            description="Professional translation services with certification for international applications."
          />
          <FeatureCard
            icon={<Shield size={36} />}
            title="Pre-Submission Approval"
            description="Final review by our credentialed experts with experience in admissions and immigration."
          />
          <FeatureCard
            icon={<Calendar size={36} />}
            title="Timestamp Review"
            description="Thorough examination of expiry and issue dates ensuring compliance with requirements."
          />
          <FeatureCard
            icon={<FileCheck size={36} />}
            title="Official Templates"
            description="Access to institution-specific templates to ensure proper formatting standards."
          />
          <FeatureCard
            icon={<CheckCircle size={36} />}
            title="Upload Guidelines"
            description="Step-by-step guidance for digital submissions to application portals worldwide."
          />
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex rounded-md shadow">
            <button className="px-8 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Start Your Verification Now
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 shadow-2xl">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 mix-blend-multiply"></div>
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/10 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-white/10 rounded-full filter blur-3xl opacity-20"></div>
          </div>

          <div className="relative px-6 py-16 sm:px-12 lg:px-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Sarah Johnson',
                  role: 'Graduate Student',
                  university: 'Oxford University',
                  rating: 5,
                  content:
                    'The document verification service saved my application! They caught inconsistencies in my transcripts that would have caused serious problems with my doctoral application.',
                },
                {
                  name: 'Michael Chen',
                  role: 'International Student',
                  university: 'MIT',
                  rating: 5,
                  content:
                    'Getting my documents verified gave me peace of mind. The process was smooth and the team was incredibly helpful with translation requirements for my visa application.',
                },
                {
                  name: 'Priya Sharma',
                  role: 'Scholarship Applicant',
                  university: 'Stanford University',
                  rating: 5,
                  content:
                    'Thanks to their thorough verification process, my documents were accepted without any issues. The scholarship committee specifically mentioned how professional my application was!',
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20 hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-300 to-purple-300 flex items-center justify-center text-indigo-800 font-bold text-xl shadow-inner">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-white text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-indigo-100">{testimonial.role}</p>
                        <p className="text-indigo-200 text-sm">
                          {testimonial.university}
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-300 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <svg
                      className="absolute top-0 left-0 w-8 h-8 text-indigo-300/40 -mt-4 -ml-2"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-white leading-relaxed italic pl-6">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm mb-4">
            How It Works
          </span>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700 mb-6">
            Our Verification Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures thorough verification while
            maintaining speed and efficiency
          </p>
        </div>

        <div className="relative mt-20">
          {/* Enhanced Timeline Design */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-indigo-600 via-purple-600 to-indigo-600 rounded-full z-0"></div>

          {/* Timeline Items */}
          {[
            {
              title: 'Upload Your Documents',
              description:
                'Submit your documents through our secure portal with end-to-end encryption',
              icon: <FileCheck size={32} className="text-indigo-600" />,
            },
            {
              title: 'Initial Assessment',
              description:
                'Our AI-powered system performs preliminary checks for common issues within minutes',
              icon: <Search size={32} className="text-purple-600" />,
            },
            {
              title: 'Expert Review',
              description:
                'Our education specialists with international certification experience examine your documents',
              icon: <Award size={32} className="text-indigo-600" />,
            },
            {
              title: 'Verification Report',
              description:
                'Receive a comprehensive report with detailed recommendations and improvement suggestions',
              icon: <CheckCircle size={32} className="text-purple-600" />,
            },
            {
              title: 'Revisions (if needed)',
              description:
                'Make necessary corrections with our guided assistance and expert support',
              icon: <Globe size={32} className="text-indigo-600" />,
            },
            {
              title: 'Final Approval',
              description:
                'Receive final approval from our experts, ensuring your documents are ready for submission.',
              icon: <CheckCircle size={32} className="text-purple-600" />,
            },
          ].map((step, index) => (
            <div
              key={index}
              className={`relative mb-8 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}
            >
              <div
                className={`absolute ${
                  index % 2 === 0 ? 'left-1/2 -ml-1' : 'right-1/2 -mr-1'
                } w-2 h-2 bg-indigo-600 rounded-full z-10`}
              ></div>
              <div
                className={`relative bg-white p-6 rounded-2xl shadow-lg border border-gray-200 ${
                  index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                } md:w-1/2`}
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">{step.icon}</div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-700 to-indigo-600 py-16 px-4 sm:px-6 lg:px-8 rounded-3xl max-w-6xl mx-auto my-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to ensure your documents are perfect?
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-10">
            Don't let document errors stand between you and your dreams. Our
            verification service ensures your application stands out for all the
            right reasons.
          </p>
          <Link
            to={'/signup/student'}
            className="px-8 py-4 bg-white text-indigo-700 font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}
