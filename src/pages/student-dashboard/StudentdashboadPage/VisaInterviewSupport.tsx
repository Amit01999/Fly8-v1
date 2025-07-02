import React from 'react';
import {
  FileText,
  CreditCard,
  Globe,
  Shield,
  Users,
  GraduationCap,
  Scale,
  MessageSquare,
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Bank Support',
    description: 'Bank statement preparation and financial documentation',
    icon: CreditCard,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 2,
    title: 'Translation Support',
    description: 'Document translation and certified translations',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Document Preparation',
    description: 'Complete visa document checklist and preparation',
    icon: FileText,
    color: 'from-purple-500 to-violet-500',
  },
  {
    id: 4,
    title: 'Attestation Support',
    description: 'Document attestation and notarization services',
    icon: Shield,
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 5,
    title: 'Visa Consultancy',
    description: 'Expert guidance on visa requirements and procedures',
    icon: Users,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    id: 6,
    title: 'Visa Interview Training',
    description: 'Mock interviews and preparation sessions',
    icon: GraduationCap,
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 7,
    title: 'Apply Visa',
    description: 'Complete visa application submission assistance',
    icon: FileText,
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 8,
    title: 'Lawyer Support',
    description: 'Legal consultation for complex visa cases',
    icon: Scale,
    color: 'from-gray-600 to-gray-700',
  },
];

const VisaInterviewSupport = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Visa & Interview Support</h1>
        <p className="text-red-100">
          Complete visa application and interview preparation services
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map(service => (
          <div
            key={service.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            <div className="p-6">
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}
              >
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {service.description}
              </p>
              <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Visa Application Process */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          Visa Application Process
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 font-bold">1</span>
            </div>
            <h4 className="font-medium text-gray-800 mb-2">Document Review</h4>
            <p className="text-sm text-gray-600">
              We review your documents and create a checklist
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-green-600 font-bold">2</span>
            </div>
            <h4 className="font-medium text-gray-800 mb-2">Application Prep</h4>
            <p className="text-sm text-gray-600">
              Complete application form and document preparation
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-purple-600 font-bold">3</span>
            </div>
            <h4 className="font-medium text-gray-800 mb-2">
              Interview Training
            </h4>
            <p className="text-sm text-gray-600">
              Mock interviews and preparation sessions
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-orange-600 font-bold">4</span>
            </div>
            <h4 className="font-medium text-gray-800 mb-2">Visa Approval</h4>
            <p className="text-sm text-gray-600">
              Track application and receive your visa
            </p>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Success Stories
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-medium">RS</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Rahul Sharma</h4>
                <p className="text-sm text-gray-600">Canada Student Visa</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              "Excellent support throughout the visa process. Got my visa
              approved in just 3 weeks!"
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-medium">AP</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Anita Patel</h4>
                <p className="text-sm text-gray-600">UK Student Visa</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              "The interview training was amazing. I felt confident and prepared
              for my visa interview."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaInterviewSupport;
