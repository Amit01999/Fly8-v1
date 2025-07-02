import React, { useState } from 'react';
import {
  Search,
  Filter,
  MapPin,
  Star,
  Wifi,
  Car,
  Utensils,
  Home,
  DollarSign,
  Users,
  Shield,
} from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Modern Studio Apartment',
    location: 'Downtown Toronto',
    price: '$1,200/month',
    rating: 4.8,
    reviews: 24,
    type: 'Studio',
    amenities: ['Wifi', 'Kitchen', 'Parking'],
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=250&fit=crop',
  },
  {
    id: 2,
    title: 'Shared Student Housing',
    location: 'Near University Campus',
    price: '$800/month',
    rating: 4.6,
    reviews: 18,
    type: 'Shared',
    amenities: ['Wifi', 'Common Area', 'Study Room'],
    image:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop',
  },
  {
    id: 3,
    title: 'Luxury 1BR Apartment',
    location: 'City Center',
    price: '$1,800/month',
    rating: 4.9,
    reviews: 32,
    type: '1 Bedroom',
    amenities: ['Wifi', 'Gym', 'Parking', 'Kitchen'],
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=250&fit=crop',
  },
];

const Accommodation = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Find Accommodation</h1>
        <p className="text-indigo-100">
          Discover perfect student housing and accommodations
        </p>
      </div>

      {/* Search Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Enter city or university name"
                value={searchLocation}
                onChange={e => setSearchLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Budget
            </label>
            <select className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Any Budget</option>
              <option>Under $800</option>
              <option>$800 - $1,200</option>
              <option>$1,200 - $1,800</option>
              <option>Above $1,800</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type
            </label>
            <select className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Any Type</option>
              <option>Studio</option>
              <option>1 Bedroom</option>
              <option>Shared</option>
              <option>Dormitory</option>
            </select>
          </div>
        </div>
        <button className="mt-4 bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
          Search Properties
        </button>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map(property => (
          <div
            key={property.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-800 text-lg">
                  {property.title}
                </h3>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">
                    {property.rating}
                  </span>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{property.location}</span>
              </div>

              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-bold text-indigo-600">
                  {property.price}
                </span>
                <span className="text-sm text-gray-600">
                  {property.reviews} reviews
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {property.amenities.map((amenity, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                  >
                    {amenity}
                  </span>
                ))}
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                  Rent Now
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Housing Tips */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Student Housing Tips
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Home className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-medium text-gray-800 mb-2">Location Matters</h4>
            <p className="text-sm text-gray-600">
              Choose housing close to your university or with good transport
              links
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-medium text-gray-800 mb-2">Budget Planning</h4>
            <p className="text-sm text-gray-600">
              Factor in utilities, internet, and other additional costs
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-medium text-gray-800 mb-2">
              Roommate Compatibility
            </h4>
            <p className="text-sm text-gray-600">
              Consider lifestyle preferences and study habits
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="w-6 h-6 text-orange-600" />
            </div>
            <h4 className="font-medium text-gray-800 mb-2">Safety First</h4>
            <p className="text-sm text-gray-600">
              Research neighborhood safety and building security
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
