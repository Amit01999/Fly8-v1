import { useState } from 'react';
import {
  Calendar,
  CreditCard,
  Home,
  User,
  Shield,
  MapPin,
  Globe,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import studentHusingImage from '@/assets/picture/TravelandAccommodation/3.png';
import { Link } from 'react-router-dom';

export default function StudentHousing() {
  const [activeTab, setActiveTab] = useState('popular');

  return (
    <div className="font-sans bg-white">
      {/* Hero Section with Colorful Design */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-50 to-teal-50">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-96">
          <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-300 rounded-full blur-xl opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-lime-300 rounded-full blur-xl opacity-30"></div>
          <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-green-300 rounded-full blur-xl opacity-30"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-emerald-300 rounded-full blur-xl opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full mb-6">
                <Home className="mr-2" size={16} />
                <span className="font-medium">Long-Term Student Living</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-600">
                  Your Home Abroad
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-lime-500">
                  Awaits
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Find secure, affordable, and student-friendly housing options
                close to campus — without the headaches of searching alone.
              </p>
              <Link to={'/signin/student'}>
                <Button
                  className="bg-gradient-to-r from-green-500 to-teal-600 text-white text-lg font-bold px-8 py-7 rounded-xl 
                shadow-lg hover:shadow-green-200/50 transition-all duration-300 transform hover:scale-105"
                >
                  Find Your Student Housing
                </Button>
              </Link>
            </div>

            {/* Hero Image */}
            <div className="lg:w-1/2 transform translate-y-4">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-green-300 rounded-full z-10 animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-teal-300 rounded-full z-10 animate-pulse"></div>

                {/* Main image with fancy border */}
                <div
                  className="relative bg-white p-3 rounded-3xl shadow-xl overflow-hidden 
                  bg-gradient-to-r from-green-500/10 to-teal-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-600/20 opacity-30 z-0"></div>

                  {/* The actual image */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden z-10">
                    <img
                      src={studentHusingImage}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-8 right-4 bg-white rounded-xl shadow-lg p-3 z-20 transform rotate-6">
                    <div className="flex items-center space-x-2">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <MapPin size={20} className="text-green-600" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-800">
                          Campus Distance
                        </div>
                        <div className="text-xs text-gray-500">10 min walk</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-2 left-8 bg-white rounded-xl shadow-lg p-3 z-20 transform -rotate-3">
                    <div className="flex items-center space-x-2">
                      <div className="bg-teal-100 p-2 rounded-lg">
                        <CreditCard size={20} className="text-teal-600" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-800">
                          Affordable Rent
                        </div>
                        <div className="text-xs text-gray-500">
                          From $350/mo
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
              Safe, Affordable &
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-lime-500">
              Student-Approved Living
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We match you with trusted student accommodations — from dorms to
            private rentals — based on your preferences and budget.
          </p>
        </div>

        {/* Colorful Feature Tabs */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-3xl p-6 mb-16">
          {/* Tab Navigation */}
          <div className="flex items-center justify-center mb-10 overflow-x-auto">
            <div className="bg-white p-2 rounded-xl shadow-md inline-flex">
              <button
                className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'popular'
                    ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('popular')}
              >
                Housing Options
              </button>
              <button
                className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'support'
                    ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('support')}
              >
                Safety & Security
              </button>
              <button
                className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'extras'
                    ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('extras')}
              >
                Support Services
              </button>
            </div>
          </div>

          {/* Housing Options */}
          {activeTab === 'popular' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 group-hover:from-green-500/10 group-hover:to-teal-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-green-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-green-500 to-teal-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <MapPin className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Campus Proximity
                </h3>
                <p className="text-gray-600">
                  Stay close to your classes with housing options within walking
                  distance of campus.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 group-hover:from-teal-500/10 group-hover:to-emerald-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-teal-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-teal-500 to-emerald-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <CreditCard className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Budget Flexibility
                </h3>
                <p className="text-gray-600">
                  Choose from a variety of options based on your spending range
                  and preferences.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-lime-500/5 group-hover:from-emerald-500/10 group-hover:to-lime-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-emerald-500 to-lime-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Home className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Furnished Rooms
                </h3>
                <p className="text-gray-600">
                  Move in with ease to fully furnished accommodations designed
                  for student needs.
                </p>
              </div>

              {/* Feature Card 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 to-green-500/5 group-hover:from-lime-500/10 group-hover:to-green-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-lime-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-lime-500 to-green-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Shield className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Verified Landlords
                </h3>
                <p className="text-gray-600">
                  No scams or shady contracts with our carefully verified
                  housing providers.
                </p>
              </div>
            </div>
          )}

          {/* Safety & Security */}
          {activeTab === 'support' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Safety Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 group-hover:from-green-500/10 group-hover:to-teal-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-green-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-green-500 to-teal-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Calendar className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Short/Long-Term Options
                </h3>
                <p className="text-gray-600">
                  Flexible rental periods allowing you to rent by month or
                  semester as needed.
                </p>
              </div>

              {/* Safety Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 group-hover:from-teal-500/10 group-hover:to-emerald-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-teal-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <User className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Shared or Private
                </h3>
                <p className="text-gray-600">
                  Options for shared accommodations or private rooms based on
                  your preference and budget.
                </p>
              </div>

              {/* Safety Card 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-lime-500/5 group-hover:from-emerald-500/10 group-hover:to-lime-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-emerald-500 to-lime-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Shield className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Secure Locations
                </h3>
                <p className="text-gray-600">
                  Safe neighborhoods with good transit access and nearby
                  amenities for students.
                </p>
              </div>
            </div>
          )}

          {/* Support Services */}
          {activeTab === 'extras' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Service Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 group-hover:from-green-500/10 group-hover:to-teal-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-green-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-green-500 to-teal-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <CreditCard className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Rental Support
                </h3>
                <p className="text-gray-600">
                  Help with contracts, deposits, and understanding local housing
                  laws and requirements.
                </p>

                <div className="bg-green-50 mt-4 p-4 rounded-xl">
                  <div className="font-medium text-green-800">Free Service</div>
                  <div className="text-green-700">
                    Contract review by our legal partners
                  </div>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 group-hover:from-teal-500/10 group-hover:to-emerald-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-teal-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Globe className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Peer Recommendations
                </h3>
                <p className="text-gray-600">
                  Access verified reviews and recommendations from fellow
                  students who've lived in the accommodations.
                </p>

                <div className="bg-teal-50 mt-4 p-4 rounded-xl">
                  <div className="font-medium text-teal-800">
                    Community Insight
                  </div>
                  <div className="text-teal-700">
                    Over 10,000 student reviews available
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-green-100 to-teal-100 p-1 rounded-full mb-8">
            <div className="bg-white px-6 py-2 rounded-full font-medium text-green-600">
              Priority Placement
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Looking for your perfect student home?
          </h3>
          <Link to={'/signin/student'}>
            <Button
              className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700
            text-white font-bold text-lg px-12 py-7 rounded-full shadow-xl 
            hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Explore My Housing Options
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
