import { useState } from 'react';
import {
  Calendar,
  CreditCard,
  Globe,
  User,
  Shield,
  Clock,
  MapPin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import TravelInsuranceImg from '@/assets/picture/TravelandAccommodation/6.png';
import { Link } from 'react-router-dom';

export default function TravelPackage() {
  const [activeTab, setActiveTab] = useState('popular');

  return (
    <div className="font-sans bg-white">
      {/* Hero Section with Colorful Design */}
      <div className="relative overflow-hidden bg-gradient-to-r from-yellow-50 to-amber-50">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-96">
          <div className="absolute top-0 left-0 w-32 h-32 bg-orange-300 rounded-full blur-xl opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-300 rounded-full blur-xl opacity-30"></div>
          <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-yellow-300 rounded-full blur-xl opacity-30"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-orange-300 rounded-full blur-xl opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-4 py-2 rounded-full mb-6">
                <Globe className="mr-2" size={16} />
                <span className="font-medium">Student Travel Adventures</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">
                  Explore More Than
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                  Just Classrooms
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Study abroad is more than lectures — experience culture, nature,
                and adventure with our student travel packages.
              </p>
              <Link to={'/signin/student'}>
                <Button
                  className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-lg font-bold px-8 py-7 rounded-xl 
                shadow-lg hover:shadow-yellow-200/50 transition-all duration-300 transform hover:scale-105"
                >
                  See Student Packages
                </Button>
              </Link>
            </div>

            {/* Hero Image */}
            <div className="lg:w-1/2 transform translate-y-4">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-yellow-300 rounded-full z-10 animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-amber-300 rounded-full z-10 animate-pulse"></div>

                {/* Main image with fancy border */}
                <div
                  className="relative bg-white p-3 rounded-3xl shadow-xl overflow-hidden 
                  bg-gradient-to-r from-yellow-500/10 to-amber-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-amber-600/20 opacity-30 z-0"></div>

                  {/* The actual image */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden z-10">
                    <img
                      src={TravelInsuranceImg}
                      alt="Students exploring nature on a travel package"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-8 right-4 bg-white rounded-xl shadow-lg p-3 z-20 transform rotate-6">
                    <div className="flex items-center space-x-2">
                      <div className="bg-yellow-100 p-2 rounded-lg">
                        <Calendar size={20} className="text-yellow-600" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-800">
                          Weekend Trips
                        </div>
                        <div className="text-xs text-gray-500">
                          20+ destinations
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-2 left-8 bg-white rounded-xl shadow-lg p-3 z-20 transform -rotate-3">
                    <div className="flex items-center space-x-2">
                      <div className="bg-amber-100 p-2 rounded-lg">
                        <User size={20} className="text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-800">
                          Group Discounts
                        </div>
                        <div className="text-xs text-gray-500">
                          Up to 25% OFF
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-amber-600">
              Make Memories
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
              Beyond the Campus
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We curate group travel packages so students can explore their new
            country, meet peers, and make unforgettable memories.
          </p>
        </div>

        {/* Colorful Feature Tabs */}
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-3xl p-6 mb-16">
          {/* Tab Navigation */}
          <div className="flex items-center justify-center mb-10 overflow-x-auto">
            <div className="bg-white p-2 rounded-xl shadow-md inline-flex">
              <button
                className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'popular'
                    ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('popular')}
              >
                Trip Types
              </button>
              <button
                className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'support'
                    ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('support')}
              >
                Travel Benefits
              </button>
              <button
                className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'extras'
                    ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('extras')}
              >
                Special Services
              </button>
            </div>
          </div>

          {/* Trip Types */}
          {activeTab === 'popular' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 group-hover:from-yellow-500/10 group-hover:to-amber-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-yellow-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-yellow-500 to-amber-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Calendar className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Weekend Adventures
                </h3>
                <p className="text-gray-600">
                  Short city tours, beach trips, and hiking excursions perfect
                  for weekends.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 group-hover:from-amber-500/10 group-hover:to-orange-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-amber-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <User className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Group Discounts
                </h3>
                <p className="text-gray-600">
                  Travel with friends and classmates to enjoy significant
                  savings on all packages.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 group-hover:from-orange-500/10 group-hover:to-red-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-orange-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-orange-500 to-red-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Globe className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Cultural Immersions
                </h3>
                <p className="text-gray-600">
                  Guided tours of museums, local festivals, and authentic food
                  trails.
                </p>
              </div>

              {/* Feature Card 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-yellow-500/5 group-hover:from-red-500/10 group-hover:to-yellow-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-red-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-red-500 to-yellow-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Shield className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Safety First
                </h3>
                <p className="text-gray-600">
                  All adventures run by trusted operators with comprehensive
                  travel insurance included.
                </p>
              </div>
            </div>
          )}

          {/* Travel Benefits */}
          {activeTab === 'support' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Benefit Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 group-hover:from-yellow-500/10 group-hover:to-amber-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-yellow-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-yellow-500 to-amber-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <CreditCard className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Custom Packages
                </h3>
                <p className="text-gray-600">
                  Trips tailored to match your interests, schedule and available
                  budget.
                </p>
              </div>

              {/* Benefit Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 group-hover:from-amber-500/10 group-hover:to-orange-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-amber-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Calendar className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Seasonal Offers
                </h3>
                <p className="text-gray-600">
                  Special trips during semester breaks and holidays at reduced
                  rates.
                </p>
              </div>

              {/* Benefit Card 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 group-hover:from-orange-500/10 group-hover:to-red-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-orange-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-orange-500 to-red-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <User className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Guided Tours
                </h3>
                <p className="text-gray-600">
                  Local experts lead every journey, providing cultural context
                  and insider knowledge.
                </p>
              </div>
            </div>
          )}

          {/* Special Services */}
          {activeTab === 'extras' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Service Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 group-hover:from-yellow-500/10 group-hover:to-amber-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-yellow-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-yellow-500 to-amber-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Globe className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Language Support
                </h3>
                <p className="text-gray-600">
                  Bilingual guides ensure smooth communication and deeper
                  cultural understanding.
                </p>

                <div className="bg-yellow-50 mt-4 p-4 rounded-xl">
                  <div className="font-medium text-yellow-800">
                    Communication Ease
                  </div>
                  <div className="text-yellow-700">
                    Guides fluent in 12+ languages
                  </div>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 group-hover:from-amber-500/10 group-hover:to-orange-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-amber-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <MapPin className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Hassle-Free Booking
                </h3>
                <p className="text-gray-600">
                  Every detail handled by Fly8, from reservations to
                  transportation and accommodations.
                </p>

                <div className="bg-amber-50 mt-4 p-4 rounded-xl">
                  <div className="font-medium text-amber-800">
                    All-Inclusive
                  </div>
                  <div className="text-amber-700">
                    One simple payment for everything
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-100 to-amber-100 p-1 rounded-full mb-8">
            <div className="bg-white px-6 py-2 rounded-full font-medium text-yellow-600">
              Limited Spots
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to explore beyond your campus?
          </h3>
          <Link to={'/signin/student'}>
            <Button
              className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700
            text-white font-bold text-lg px-12 py-7 rounded-full shadow-xl 
            hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Book Your Student Trip
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
