import React from 'react';
import {
  FileText,
  MessageCircle,
  Send,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from 'lucide-react';

export default function ApplyFooter() {
  const quickActions = [
    {
      icon: FileText,
      title: 'Request Information',
      description: 'Get detailed program brochures and admission guides',
      action: 'Request Info',
      color: 'from-blue-600 to-indigo-600',
      hoverColor: 'hover:from-blue-700 hover:to-indigo-700',
    },
    {
      icon: MessageCircle,
      title: 'Talk to a Counselor',
      description: 'Schedule a free consultation with our admission experts',
      action: 'Schedule Call',
      color: 'from-emerald-600 to-teal-600',
      hoverColor: 'hover:from-emerald-700 hover:to-teal-700',
    },
    {
      icon: Send,
      title: 'Start Application',
      description:
        'Begin your journey with our streamlined application process',
      action: 'Apply Now',
      color: 'from-purple-600 to-pink-600',
      hoverColor: 'hover:from-purple-700 hover:to-pink-700',
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: 'Call Us',
      value: '+1 (212) 986-4343',
      description: 'Mon-Fri 9AM-6PM EST',
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: 'international@berkeleycollege.edu',
      description: 'Response within 24 hours',
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: '3 East 43rd Street, New York, NY 10017',
      description: 'Schedule a campus tour',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200/40 rounded-full blur-xl" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-200/25 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-emerald-200/35 rounded-full blur-2xl" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(99 102 241) 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/60 mb-6">
            <span className="text-sm font-medium text-gray-600">
              Ready to Begin?
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight">
            Start Your Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take the next step toward your future at Berkeley College. Our
            dedicated team is here to support you throughout your entire
            journey.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {quickActions.map((action, index) => (
            <div key={action.title} className="group">
              <div className="bg-white/70 backdrop-blur-sm border border-sky-200 hover:border-gray-300/80 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 h-full hover:-translate-y-1 rounded-2xl">
                <div className="p-8 text-center relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent rounded-t-2xl" />

                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${action.color} ${action.hoverColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                  >
                    <action.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {action.description}
                  </p>

                  <button className="w-full bg-gray-900 hover:bg-gray-800 text-white border-0 rounded-xl py-3 px-6 font-semibold transition-all duration-300 group-hover:shadow-lg flex items-center justify-center gap-2">
                    {action.action}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
