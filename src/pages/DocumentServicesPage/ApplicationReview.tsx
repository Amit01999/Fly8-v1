import React from 'react';
import {
  CheckCircle,
  FileText,
  Star,
  AlignLeft,
  UserCheck,
  MessageSquare,
  Edit,
  Shield,
  Search,
  Lightbulb,
} from 'lucide-react';
import heroimg from '@/assets/picture/DocumentServices/2.png';
import { Link } from 'react-router-dom';

export default function ApplicationReview() {
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
    <div className="bg-gradient-to-br from-indigo-50 via-sky-50 to-violet-50 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto pt-12 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-left">
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm mb-8">
              Application Review Service
            </span>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-sky-700 to-violet-700">
              Make Every Word Count
            </h1>
            <p className="text-xl text-gray-600 mb-10 lg:pr-10">
              Your application is your first impression. We'll help refine,
              review, and enhance it so you stand out among thousands of other
              applicants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={'/signup/student'}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-sky-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Review Your Application
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-300/30 to-sky-300/30 rounded-3xl backdrop-blur-sm"></div>
            <img
              src={heroimg}
              alt="Application Review"
              className="relative rounded-3xl shadow-2xl transform -rotate-1 border-8 border-white z-10"
            />
            <div className="absolute -right-4 -bottom-4 bg-white shadow-lg rounded-2xl p-4 z-20">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-indigo-500" size={24} />
                <span className="font-bold text-gray-800">
                  98% Acceptance Rate
                </span>
              </div>
            </div>
            <div className="absolute -left-6 top-1/2 bg-white shadow-lg rounded-2xl p-4 z-20">
              <div className="flex items-center space-x-2">
                <Star className="text-yellow-500" size={24} />
                <span className="font-bold text-gray-800">Expert Reviewed</span>
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
            <span className="px-4 bg-gradient-to-br from-indigo-50 via-sky-50 to-violet-50 text-sm text-indigo-600 font-medium uppercase">
              Our Services
            </span>
          </div>
        </div>

        <div className="text-center mt-10 mb-16">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-sky-700 mb-8">
            Professional Feedback That Elevates Your Application
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From grammar to clarity and strategic alignment, we polish your
            application for maximum impact and approval potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FileText size={36} />}
            title="Grammar & Clarity Review"
            description="Thorough proofreading ensuring your application is error-free and clearly communicates your intentions."
          />
          <FeatureCard
            icon={<AlignLeft size={36} />}
            title="Structure Optimization"
            description="Strategic organization of content to create flow and logical order that guides admissions committees."
          />
          <FeatureCard
            icon={<Star size={36} />}
            title="Profile Strength Highlighting"
            description="Strategic emphasis on achievements and qualifications that make you stand out as a candidate."
          />
          <FeatureCard
            icon={<UserCheck size={36} />}
            title="Program Alignment Check"
            description="Ensuring your application perfectly aligns with program requirements and institutional values."
          />
          <FeatureCard
            icon={<MessageSquare size={36} />}
            title="Tone Enhancement"
            description="Balancing formal academic language with personal narrative for maximum engagement and impact."
          />
          <FeatureCard
            icon={<Shield size={36} />}
            title="Red Flag Identification"
            description="Identifying and eliminating weak arguments or sections that might raise concerns with evaluators."
          />
          <FeatureCard
            icon={<Edit size={36} />}
            title="Admission-Oriented Edits"
            description="Strategic revisions designed specifically to appeal to admission committee priorities and expectations."
          />
          <FeatureCard
            icon={<Search size={36} />}
            title="Plagiarism Scan"
            description="Comprehensive originality check to ensure your application represents your authentic voice and ideas."
          />
          <FeatureCard
            icon={<Lightbulb size={36} />}
            title="Detailed Reviewer Notes"
            description="Personalized feedback with actionable suggestions to strengthen your application materials."
          />
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex rounded-md ">
            <button className="px-8 py-5 bg-gradient-to-r from-indigo-600 to-sky-600 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Improve Your Application
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-600 to-sky-700 shadow-2xl">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-sky-700 mix-blend-multiply"></div>
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/10 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-white/10 rounded-full filter blur-3xl opacity-20"></div>
          </div>

          <div className="relative px-6 py-16 sm:px-12 lg:px-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Success Stories
              </h2>
              <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Jason Thompson',
                  role: 'MBA Candidate',
                  university: 'Harvard Business School',
                  rating: 5,
                  content:
                    'The feedback I received transformed my personal statement completely. My reviewer identified exactly what was missing and helped me craft a narrative that got me into my dream program.',
                },
                {
                  name: 'Amara Okafor',
                  role: 'PhD Applicant',
                  university: 'Columbia University',
                  rating: 5,
                  content:
                    'I was struggling with how to present my research experience effectively. The review highlighted my unique contributions and helped me articulate my research goals clearly.',
                },
                {
                  name: 'Daniel Ramirez',
                  role: 'Law School Applicant',
                  university: 'Yale Law School',
                  rating: 5,
                  content:
                    'The review process helped me identify weaknesses in my personal statement I never would have caught. The suggestions were practical and helped me stand out among other applicants.',
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20 hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-300 to-sky-300 flex items-center justify-center text-indigo-800 font-bold text-xl shadow-inner">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-800 font-semibold text-sm mb-4 tracking-wide">
            Our Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-sky-700 mb-4">
            How We Review Your Application
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Our comprehensive review process ensures your application receives
            expert attention at every stage.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 relative">
          {/* Horizontal line (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[8%] w-[84%] h-1 bg-gradient-to-r from-indigo-500 via-sky-500 to-violet-500 rounded-full z-0"></div>

          {/* Vertical lines (mobile) */}
          <div className="md:hidden absolute top-20 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 via-sky-500 to-violet-500 opacity-30 z-0"></div>

          {/* Card 1 */}
          <div className="w-full md:w-1/3 relative z-10">
            <StepCard
              number="1"
              title="Initial Submission"
              description="Upload your application materials through our secure portal for initial assessment."
              badge="Secure • Encrypted • Private"
              icon={<FileText size={40} className="text-indigo-600" />}
              color="indigo"
            />
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-1/3 relative z-10">
            <StepCard
              number="2"
              title="Expert Analysis"
              description="Our team of admission specialists evaluates every aspect of your application materials."
              badge="Thorough • Detailed • Personalized"
              icon={<Search size={40} className="text-sky-600" />}
              color="sky"
            />
          </div>

          {/* Card 3 */}
          <div className="w-full md:w-1/3 relative z-10">
            <StepCard
              number="3"
              title="Feedback & Revisions"
              description="Receive detailed feedback with actionable suggestions and guidance for improvements."
              badge="Strategic • Practical • Effective"
              icon={<Edit size={40} className="text-violet-600" />}
              color="violet"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-700 to-sky-700 py-16 px-4 sm:px-6 lg:px-8 rounded-3xl max-w-6xl mx-auto my-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to strengthen your application?
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-10">
            Don't leave your future to chance. Our professional review service
            significantly increases your chances of acceptance.
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
const StepCard = ({ number, title, description, badge, icon, color }) => {
  let borderColor = 'border-t-8 border-indigo-500';
  let badgeColor = 'text-indigo-600';
  let bgColor = 'bg-indigo-50';
  let circleColor = 'bg-indigo-500';

  if (color === 'sky') {
    borderColor = 'border-t-8 border-sky-500';
    badgeColor = 'text-sky-600';
    bgColor = 'bg-sky-50';
    circleColor = 'bg-sky-500';
  } else if (color === 'violet') {
    borderColor = 'border-t-8 border-violet-500';
    badgeColor = 'text-violet-600';
    bgColor = 'bg-violet-50';
    circleColor = 'bg-violet-500';
  }

  return (
    <div
      className={`relative w-full aspect-square rounded-3xl bg-white shadow-xl p-6 ${borderColor}`}
    >
      <div
        className={`absolute -top-6 -right-6 w-16 h-16 ${circleColor} rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg`}
      >
        {number}
      </div>
      <div className="h-full flex flex-col">
        <div
          className={`p-4 ${bgColor} rounded-2xl mb-4 inline-flex items-center justify-center`}
        >
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className={`mt-auto ${badgeColor} font-medium`}>{badge}</div>
      </div>
    </div>
  );
};
