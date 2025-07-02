import React, { useState } from 'react';
import {
  Book,
  Calendar,
  Video,
  Download,
  FileText,
  PenTool,
  Search,
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Book Language Test',
    description:
      'Schedule IELTS, TOEFL, PTE, and other language proficiency tests',
    icon: Calendar,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    id: 2,
    title: 'Book Language Classes',
    description: 'Online and offline language preparation classes',
    icon: Book,
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 3,
    title: 'Book Online Consultancy',
    description: 'One-on-one consultation with education experts',
    icon: Video,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    title: 'Download Resources',
    description: 'Study materials, practice tests, and preparation guides',
    icon: Download,
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    title: 'Personal Statement Support',
    description: 'Professional help with personal statements',
    icon: FileText,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 6,
    title: 'SOP Support',
    description: 'Statement of Purpose writing and review services',
    icon: PenTool,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 7,
    title: 'Research and Proposal Support',
    description: 'Academic research and proposal writing assistance',
    icon: Search,
    color: 'from-yellow-500 to-orange-500',
  },
];

const PreparationSupport = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Preparation Support</h1>
        <p className="text-blue-100">
          Comprehensive test preparation and academic support services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <div
            key={service.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            onClick={() => setSelectedService(service)}
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
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mock Test Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Featured: Mock Tests
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">
              IELTS Mock Test
            </h4>
            <p className="text-gray-600 text-sm mb-3">
              Complete practice test with scoring
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-blue-600">Free</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                Start Test
              </button>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">
              TOEFL Mock Test
            </h4>
            <p className="text-gray-600 text-sm mb-3">
              Comprehensive TOEFL preparation
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-blue-600">$29</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                Purchase
              </button>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">PTE Mock Test</h4>
            <p className="text-gray-600 text-sm mb-3">
              AI-powered PTE practice
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-blue-600">$19</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreparationSupport;
