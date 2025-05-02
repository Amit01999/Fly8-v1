import { useState } from 'react';
import {
  ArrowRight,
  ChevronRight,
  FileText,
  Sparkles,
  Book,
  Feather,
  BookOpen,
  FileCheck,
  RefreshCw,
  Clock,
  MessageSquare,
} from 'lucide-react';
import heroimage from '@/assets/picture/DocumentServices/4.png';
import { Link } from 'react-router-dom';

export default function SOPLORSupport() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <FileText className="text-purple-600" />,
      title: 'Customized SOPs',
      description: 'Unique content aligned with your goals.',
    },
    {
      icon: <Book className="text-purple-600" />,
      title: 'Academic Journey Framing',
      description: 'Highlight the right achievements.',
    },
    {
      icon: <MessageSquare className="text-purple-600" />,
      title: 'Professional Tone Matching',
      description: 'Appropriate for each institution.',
    },
    {
      icon: <Feather className="text-purple-600" />,
      title: 'Storytelling Structure',
      description: 'Make your journey memorable.',
    },
    {
      icon: <FileText className="text-purple-600" />,
      title: 'LOR Structuring Templates',
      description: 'Guide recommenders with best practices.',
    },
    {
      icon: <FileCheck className="text-purple-600" />,
      title: 'Plagiarism-Free Content',
      description: '100% original writing support.',
    },
    {
      icon: <RefreshCw className="text-purple-600" />,
      title: 'Multi-Round Edits',
      description: "Refine until it's just right.",
    },
    {
      icon: <MessageSquare className="text-purple-600" />,
      title: 'Reviewer Feedback',
      description: 'Get notes from SOP and LOR specialists.',
    },
    {
      icon: <Clock className="text-purple-600" />,
      title: 'Deadline-Aligned Delivery',
      description: 'Always ready on time.',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-slate-50 text-slate-800 min-h-screen font-sans">
      {/* Hero Section with modern design */}
      <section className="relative overflow-hidden py-24 px-6">
        {/* Colorful abstract shapes in background */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-400 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-pink-400 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-indigo-400 opacity-10 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="inline-block mb-3 px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
                SOP & LOR Support
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-transparent bg-clip-text">
                  Write Your Way In
                </span>
              </h1>
              <p className="text-slate-600 text-xl md:text-2xl mb-8 max-w-xl">
                Craft the perfect Statement of Purpose and Letters of
                Recommendation that tell your story, reflect your goals, and
                impress admission committees.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  to={'/signup/student'}
                  className="group relative px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium text-lg transition-all hover:shadow-lg hover:shadow-purple-500/30"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Build Your SOP & LORs Through Our Guidance
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative">
                {/* Modern card with subtle shadow */}
                <div className="relative bg-white p-2 rounded-3xl border border-slate-100 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100/70 to-pink-100/70 rounded-3xl"></div>
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={heroimage}
                      alt="SOP and LOR writing"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute -right-3 -bottom-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full p-2 shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -left-6 top-1/3 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform -rotate-3">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text font-medium">
                    98% Acceptance Rate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design elements between sections */}
      <div className="relative">
        <div className="absolute left-0 right-0 h-24 bg-gradient-to-b from-slate-50 to-white"></div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
        </div>
      </div>

      {/* Features Section with modern card design */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-3 px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
              Our Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              Personalized, Impactful, and Admissions-Ready
            </h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto">
              Our experts help you write compelling SOPs and guide your
              recommenders on how to structure impactful LORs — tailored to each
              program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-1 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 cursor-pointer overflow-hidden transition-all duration-500"
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 opacity-0 transition-opacity duration-500 ${
                    activeFeature === index ? 'opacity-100' : ''
                  }`}
                ></div>
                <div className="relative bg-white p-6 rounded-2xl h-full border border-slate-100 shadow-md group-hover:shadow-xl transition-all duration-300">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-xl bg-purple-50 mb-5 transition-transform duration-500 ${
                      activeFeature === index ? 'scale-110 bg-purple-100' : ''
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="group relative px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium text-lg transition-all hover:shadow-lg hover:shadow-purple-500/30">
              <span className="relative z-10 flex items-center gap-2">
                Start now
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300 opacity-10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-3 px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
              Our Process
            </div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              How We Craft Your Perfect Documents
            </h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto">
              A step-by-step approach that transforms your experiences into
              compelling narratives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Discovery & Planning',
                description:
                  'We learn about your academic journey, aspirations, and target programs to establish the foundation of your documents.',
              },
              {
                step: '2',
                title: 'Drafting & Refining',
                description:
                  'Our experts craft compelling narratives and work with you through multiple revisions until the content perfectly represents you.',
              },
              {
                step: '3',
                title: 'Finalization & Delivery',
                description:
                  'After professional proofreading and formatting, you receive polished documents ready for submission to your dream programs.',
              },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg h-full">
                  <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-lg">
                    {process.step}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">
                      {process.title}
                    </h3>
                    <p className="text-slate-600">{process.description}</p>
                  </div>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-1/2 w-8 h-8 text-purple-400">
                    <ArrowRight className="w-full h-full" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6 relative overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-3 px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
              Success Stories
            </div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              What Our Students Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  'The SOP guidance transformed my application. I got into my top-choice university with a scholarship!',
                name: 'Michael T.',
                program: 'MS in Computer Science, Stanford',
              },
              {
                quote:
                  'My recommenders were so grateful for the LOR templates. My documents stood out and I received offers from 3 top schools.',
                name: 'Jessica K.',
                program: 'MBA, Wharton',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-1 rounded-2xl"
              >
                <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-md h-full">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-700 text-lg italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-slate-600">
                        {testimonial.program}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-3 px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
              Got Questions?
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'How early should I start working on my SOP?',
                answer:
                  'We recommend starting at least 2-3 months before your application deadlines. This gives enough time for brainstorming, drafting, multiple revisions, and final polishing.',
              },
              {
                question: 'Will you write my SOP for me?',
                answer:
                  'We provide guidance, structure, and editing rather than ghost-writing. Our collaborative approach ensures the document truly reflects your voice while meeting high academic standards.',
              },
              {
                question: 'How do I choose the right recommenders for my LORs?',
                answer:
                  'We help you identify recommenders who can speak to your strengths relevant to your target programs, and provide them with templates to highlight your achievements effectively.',
              },
            ].map((faq, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-1 rounded-xl">
                  <div className="bg-white rounded-xl p-6 group-hover:bg-slate-50 transition-colors border border-slate-100 shadow-md group-hover:shadow-lg">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-purple-600 group-hover:text-purple-700 transition-colors">
                        {faq.question}
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                        <ChevronRight className="w-5 h-5 text-purple-600 group-hover:text-purple-700  transform group-hover:rotate-90 transition-transform" />
                      </div>
                    </div>
                    <div className="mt-2 text-slate-600 group-hover:text-slate-700 transition-colors">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-2 border border-white/30 shadow-2xl">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl px-8 py-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-transparent bg-clip-text">
                Ready to Craft Your Perfect SOP & LOR?
              </h2>
              <p className="text-xl text-slate-700 mb-10 max-w-3xl mx-auto">
                Join thousands of students who've secured admissions to their
                dream schools with our expert guidance.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  to={'/signup/student'}
                  className="group relative px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium text-lg transition-all hover:shadow-lg hover:shadow-purple-500/30"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started Today
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Link>
                <Link
                  to={'/signup/student'}
                  className="px-8 py-4 rounded-full bg-transparent border border-purple-400 text-purple-600 font-medium text-lg transition-all hover:bg-purple-50 hover:text-purple-700 hover:border-purple-600"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
