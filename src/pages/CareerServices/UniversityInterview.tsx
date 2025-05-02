import { useState } from 'react';
import {
  User,
  Mic,
  MessageCircle,
  FileText,
  Award,
  CheckCircle,
  Clock,
  Video,
} from 'lucide-react';
import UniversityInterviewImg from '@/assets/picture/Career Services/2.png';
import { Link } from 'react-router-dom';

export default function UniversityInterview() {
  const [activeTab, setActiveTab] = useState('step1');

  // Interview preparation steps
  const steps = [
    { id: 'step1', label: 'Research', icon: <FileText className="w-5 h-5" /> },
    { id: 'step2', label: 'Practice', icon: <Mic className="w-5 h-5" /> },
    { id: 'step3', label: 'Mock', icon: <Video className="w-5 h-5" /> },
    {
      id: 'step4',
      label: 'Feedback',
      icon: <MessageCircle className="w-5 h-5" />,
    },
  ];

  return (
    <div className="font-sans bg-gradient-to-b from-teal-50 via-white to-white">
      {/* Hero Section with Asymmetrical Layout */}
      <section className="relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-20 right-20 w-64 h-64 bg-teal-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-10 right-40 w-40 h-40 bg-yellow-200 rounded-full opacity-30"></div>
          <div className="absolute top-40 right-60 w-20 h-20 bg-purple-200 rounded-full opacity-40"></div>
          <div className="absolute bottom-40 right-20 w-32 h-32 bg-emerald-200 rounded-full opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3 space-y-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-900/10 to-teal-600/10 text-teal-900 px-4 py-2 rounded-full">
                <User className="w-4 h-4" />
                <span className="font-medium text-sm">
                  Interview Preparation
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Ace Your <br />
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
                  University Interview
                </span>
              </h1>

              <p className="text-xl text-gray-700 max-w-xl">
                From what to say to how to say it — we help you present yourself
                confidently in university admission interviews.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={'/signin/student'}>
                  <button
                    className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 
                  text-white px-8 py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Book Your Mock Interview
                  </button>
                </Link>

                <button
                  className="border border-gray-300 hover:border-teal-500 text-gray-700 hover:text-teal-600 
                  px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                >
                  <Video className="w-5 h-5 mr-2" />
                  Watch Demo Session
                </button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative">
                {/* Main image */}
                <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-2">
                  <img
                    src={UniversityInterviewImg}
                    alt="Students preparing for university interview"
                    className="w-full h-auto"
                  />
                </div>

                {/* Overlapping elements */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg transform -rotate-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-6 h-6 text-emerald-500" />
                    <span className="font-bold text-gray-900">
                      96% Success Rate
                    </span>
                  </div>
                </div>

                <div className="absolute -top-8 -right-8 bg-white p-4 rounded-xl shadow-lg transform rotate-6">
                  <div className="flex items-center space-x-2">
                    <Award className="w-6 h-6 text-yellow-500" />
                    <span className="font-medium text-gray-900">
                      Top Rated Coaches
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section - Modern Timeline Style */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Preparation That Builds Confidence
            </h2>
            <p className="text-lg text-gray-600">
              Fly8 equips you with the skills and mindset to impress professors
              and admission panels.
            </p>
          </div>

          {/* Process Steps */}
          <div className="flex flex-wrap justify-center mb-16">
            <div className="bg-white rounded-full shadow-md p-1 inline-flex mb-8">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  className={`py-3 px-5 md:px-8 rounded-full flex items-center transition-colors duration-300 ${
                    activeTab === step.id
                      ? 'bg-teal-500 text-white'
                      : 'text-gray-500 hover:text-teal-600'
                  }`}
                  onClick={() => setActiveTab(step.id)}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                      activeTab === step.id
                        ? 'bg-teal-400 text-white'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="font-medium hidden md:inline">
                    {step.label}
                  </span>
                  <span className="md:hidden">{step.icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeTab === 'step1' && (
              <>
                <div className="md:col-span-1 order-2 md:order-1">
                  <div className="rounded-xl overflow-hidden h-full">
                    <img
                      src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                      alt="Research phase of interview preparation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-2 order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    Research Your University
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Before your interview, we'll help you research the
                    institution, program, professors, and unique aspects that
                    make your target university special.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-teal-50 p-5 rounded-lg">
                      <FileText className="w-8 h-8 text-teal-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Program Analysis
                      </h4>
                      <p className="text-gray-600">
                        Understand curriculum details and unique program
                        features
                      </p>
                    </div>

                    <div className="bg-teal-50 p-5 rounded-lg">
                      <User className="w-8 h-8 text-teal-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Faculty Research
                      </h4>
                      <p className="text-gray-600">
                        Know about key professors and their research interests
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'step2' && (
              <>
                <div className="md:col-span-1 order-2 md:order-1">
                  <div className="rounded-xl overflow-hidden h-full">
                    <img
                      src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                      alt="Interview practice"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-2 order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    Practice Your Responses
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Develop clear, concise answers to common questions and
                    practice delivering them with confidence and authenticity.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-emerald-50 p-5 rounded-lg">
                      <MessageCircle className="w-8 h-8 text-emerald-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Answer Structuring
                      </h4>
                      <p className="text-gray-600">
                        Learn the STAR method for clear, impactful responses
                      </p>
                    </div>

                    <div className="bg-emerald-50 p-5 rounded-lg">
                      <Mic className="w-8 h-8 text-emerald-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Voice Training
                      </h4>
                      <p className="text-gray-600">
                        Improve tone, pace, and clarity of your speaking
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'step3' && (
              <>
                <div className="md:col-span-1 order-2 md:order-1">
                  <div className="rounded-xl overflow-hidden h-full">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                      alt="Mock interview session"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-2 order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    Take Mock Interviews
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Experience realistic interview simulations with our expert
                    coaches who can mimic the style and format of your target
                    university.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-cyan-50 p-5 rounded-lg">
                      <Video className="w-8 h-8 text-cyan-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Realistic Simulations
                      </h4>
                      <p className="text-gray-600">
                        Full-length interviews replicating real admission
                        conversations
                      </p>
                    </div>

                    <div className="bg-cyan-50 p-5 rounded-lg">
                      <Clock className="w-8 h-8 text-cyan-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Time Management
                      </h4>
                      <p className="text-gray-600">
                        Learn to deliver complete answers within time
                        constraints
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'step4' && (
              <>
                <div className="md:col-span-1 order-2 md:order-1">
                  <div className="rounded-xl overflow-hidden h-full">
                    <img
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                      alt="Receiving interview feedback"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-2 order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    Receive Detailed Feedback
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Get comprehensive assessment of your performance with
                    actionable suggestions for improvement.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-5 rounded-lg">
                      <FileText className="w-8 h-8 text-purple-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Written Report
                      </h4>
                      <p className="text-gray-600">
                        Detailed analysis of your strengths and improvement
                        areas
                      </p>
                    </div>

                    <div className="bg-purple-50 p-5 rounded-lg">
                      <Video className="w-8 h-8 text-purple-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Video Review
                      </h4>
                      <p className="text-gray-600">
                        Recording of your mock interview with timestamped
                        comments
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="text-center mt-16">
            <Link to={'/signin/student'}>
              <button
                className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 
              text-white px-10 py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                Schedule Your Interview Prep
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-b from-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="w-20 h-20 absolute -top-3 -left-3 border-t-4 border-l-4 border-teal-400 rounded-tl-xl"></div>
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    alt="Student testimonial"
                    className="rounded-xl relative z-10"
                  />
                  <div className="w-20 h-20 absolute -bottom-3 -right-3 border-b-4 border-r-4 border-teal-400 rounded-br-xl"></div>
                </div>
              </div>

              <div className="md:w-2/3">
                <div className="text-4xl text-teal-500 mb-4">"</div>
                <p className="text-lg md:text-xl text-gray-700 mb-4 italic">
                  The mock interview sessions were incredibly realistic. My
                  coach pointed out body language issues I wasn't aware of, and
                  after three sessions, I felt completely prepared. I got into
                  my first-choice university!
                </p>
                <div>
                  <h4 className="font-bold text-gray-900">Mia Chen</h4>
                  <p className="text-gray-600">
                    Admitted to University of Toronto
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
