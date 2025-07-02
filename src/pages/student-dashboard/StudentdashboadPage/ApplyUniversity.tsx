import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, Users, DollarSign } from 'lucide-react';

const universities = [
  {
    id: 1,
    name: 'University of Toronto',
    location: 'Toronto, Canada',
    ranking: '#1 in Canada',
    programs: 150,
    tuition: '$45,000/year',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop',
  },
  {
    id: 2,
    name: 'Harvard University',
    location: 'Cambridge, USA',
    ranking: '#1 in USA',
    programs: 200,
    tuition: '$55,000/year',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=300&h=200&fit=crop',
  },
  {
    id: 3,
    name: 'Oxford University',
    location: 'Oxford, UK',
    ranking: '#1 in UK',
    programs: 120,
    tuition: '$40,000/year',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=300&h=200&fit=crop',
  },
];

const ApplyUniversity = () => {
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Apply to Universities</h1>
        <p className="text-green-100">
          Find and apply to top universities worldwide
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search universities, programs, or locations..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* University Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {universities.map(university => (
          <div
            key={university.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <img
              src={university.image}
              alt={university.name}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-800 text-lg">
                  {university.name}
                </h3>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">
                    {university.rating}
                  </span>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{university.location}</span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Ranking:</span>
                  <span className="font-medium">{university.ranking}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Programs:</span>
                  <span className="font-medium">{university.programs}+</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tuition:</span>
                  <span className="font-medium text-green-600">
                    {university.tuition}
                  </span>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Application Progress */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Your Applications
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-800">
                University of Toronto - Computer Science
              </h4>
              <p className="text-sm text-gray-600">Applied on March 15, 2025</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-medium text-blue-600">
                  In Review
                </div>
                <div className="text-xs text-gray-500">75% Complete</div>
              </div>
              <div className="w-16 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyUniversity;
