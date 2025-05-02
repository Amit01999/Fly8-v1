import React, { useState } from 'react';
import {
  Shield,
  CheckCircle,
  AlertCircle,
  FileCheck,
  Users,
  Globe,
  Clock,
  Mic,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import VisaInterviewImg from '@/assets/picture/Career Services/3.png';
import { Link } from 'react-router-dom';

export default function VisaInterview() {
  // Track the video that's currently playing
  const [activeVideo, setActiveVideo] = useState(0);
  const videos = [
    {
      id: 1,
      title: 'Understanding Visa Officer Psychology',
      duration: '4:38',
      thumbnail:
        'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      title: "Answering 'Why This Country?'",
      duration: '6:12',
      thumbnail:
        'https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      title: 'Handling Difficult Questions',
      duration: '5:45',
      thumbnail:
        'https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div className="font-sans">
      {/* Modern, Geometric Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-blue-50 to-purple-50 text-gray-800 overflow-hidden">
        {/* Animated Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        {/* Diagonal Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-white transform -skew-y-3"></div>

        <div className="container mx-auto px-4 pt-14 pb-44 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
            {/* Textual Content */}
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Shield className="text-blue-600 w-4 h-4" />
                <span className="text-sm font-medium text-blue-600">
                  Visa Success Program
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="block">Secure Your Visa</span>
                <span className="text-blue-600">With Confidence</span>
              </h1>

              <p className="text-lg text-gray-600 max-w-lg">
                The visa interview can be your final hurdle — and we'll help you
                cross it smoothly with expert guidance and mock sessions.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to={'/signin/student'}>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 text-base px-8 py-6">
                    Prepare for Your Visa Interview
                  </Button>
                </Link>
                <Link to={'/signin/student'}>
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 text-base px-8 py-6"
                  >
                    See Success Stories
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="Student success"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    2,400+ Students
                  </div>
                  <div className="text-gray-500 text-sm">
                    Secured visas with our help
                  </div>
                </div>
              </div>
            </div>

            {/* Card Visual */}
            <div className="lg:w-5/12">
              <div className="relative perspective-1000">
                <div className="absolute inset-0 transform rotate-6 translate-x-4 translate-y-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-20 blur-md"></div>
                <div className="relative bg-white rounded-2xl shadow-xl p-6 transform transition-transform hover:-rotate-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
                      Free Training Preview
                    </div>
                    <div className="text-gray-400 text-sm">04:25 / 10:32</div>
                  </div>

                  <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 mb-6 relative">
                    <img
                      src="https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?auto=format&fit=crop&w=800&q=80"
                      alt="Visa interview training"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white fill-current ml-1"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800">
                    Top 5 Visa Interview Mistakes
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Learn the common pitfalls that lead to visa rejection and
                    how to avoid them.
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img
                          src="https://i.pravatar.cc/100?img=3"
                          alt="Instructor"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">
                          Lisa Chen
                        </div>
                        <div className="text-xs text-gray-500">Visa Expert</div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs border-gray-300 text-gray-700 hover:bg-gray-100"
                    >
                      Full Access
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Split Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
              Our Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Say the Right Things the Right Way
            </h2>
            <p className="text-xl text-gray-600">
              Our structured training helps you answer confidently, avoid red
              flags, and satisfy embassy officers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
                <div className="flex space-x-5">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-xl h-min">
                    <Mic size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Mock Visa Sessions
                    </h3>
                    <p className="text-gray-600">
                      Practice with real questions in simulated interview
                      environment to build confidence and fluency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-2xl">
                <div className="flex space-x-5">
                  <div className="bg-purple-100 text-purple-600 p-3 rounded-xl h-min">
                    <FileCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Documentation Coaching
                    </h3>
                    <p className="text-gray-600">
                      Learn which documents to present, when to show them, and
                      how to explain their relevance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl">
                <div className="flex space-x-5">
                  <div className="bg-red-100 text-red-600 p-3 rounded-xl h-min">
                    <AlertCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Red Flag Training
                    </h3>
                    <p className="text-gray-600">
                      Identify and learn how to avoid common phrases and
                      behaviors that trigger visa officer suspicion.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Training Preview */}
            <div className="lg:mt-12">
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img
                      src={videos[activeVideo].thumbnail}
                      alt={videos[activeVideo].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <svg
                            className="w-4 h-4 text-blue-600 fill-current ml-1"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {videos[activeVideo].title}
                  </h3>
                  <div className="flex justify-between items-center text-white/80">
                    <div>
                      Module {activeVideo + 1} of {videos.length}
                    </div>
                    <div>{videos[activeVideo].duration}</div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {videos.map((video, idx) => (
                    <div
                      key={video.id}
                      className={`p-4 rounded-lg cursor-pointer transition-all ${
                        idx === activeVideo
                          ? 'bg-blue-50 border-l-4 border-blue-600'
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveVideo(idx)}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              idx === activeVideo
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-500'
                            }`}
                          >
                            {idx + 1}
                          </div>
                          <div>
                            <div
                              className={`font-medium ${
                                idx === activeVideo
                                  ? 'text-blue-900'
                                  : 'text-gray-900'
                              }`}
                            >
                              {video.title}
                            </div>
                          </div>
                        </div>
                        <div className="text-gray-500 text-sm">
                          {video.duration}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* More Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="border-t-4 border-blue-500">
              <CardContent className="pt-6">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-xl w-min mb-4">
                  <Globe size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Country-Specific Coaching
                </h3>
                <p className="text-gray-600">
                  Tailored preparation based on your destination country's
                  embassy requirements and interview style.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-indigo-500">
              <CardContent className="pt-6">
                <div className="bg-indigo-100 text-indigo-600 p-3 rounded-xl w-min mb-4">
                  <CheckCircle size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Real-Time Feedback
                </h3>
                <p className="text-gray-600">
                  Immediate guidance on how to improve responses, body language,
                  and presentation style.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-purple-500">
              <CardContent className="pt-6">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-xl w-min mb-4">
                  <Users size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Rejection Case Handling
                </h3>
                <p className="text-gray-600">
                  Special coaching for students who need to reapply after a
                  previous visa rejection.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Link to={'/signin/student'}>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-base px-10 py-6">
                Train for Your Visa Interview
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-b from-blue-500 to-indigo-500">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">96%</div>
                <div className="text-gray-600">Visa Approval Rate</div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  12,000+
                </div>
                <div className="text-gray-600">Students Trained</div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  40+
                </div>
                <div className="text-gray-600">Destination Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
