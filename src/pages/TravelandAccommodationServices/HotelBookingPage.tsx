import { useState } from 'react';
import {
  Calendar,
  CreditCard,
  Globe,
  Home,
  User,
  Shield,
  Clock,
  MapPin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import hotelbookingImage from '@/assets/picture/TravelandAccommodation/2.png';
import { Link } from 'react-router-dom';

export default function HotelBooking() {
  const [activeTab, setActiveTab] = useState('popular');

  return (
    <div className="font-sans bg-white">
      {/* Hero Section with Colorful Design */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-96">
          <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-300 rounded-full blur-xl opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-300 rounded-full blur-xl opacity-30"></div>
          <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-blue-300 rounded-full blur-xl opacity-30"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-cyan-300 rounded-full blur-xl opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-4 py-2 rounded-full mb-6">
                <Home className="mr-2" size={16} />
                <span className="font-medium">Student-Friendly Hotels</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-600">
                  Comfortable Stays,
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500">
                  Great Prices
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Short stay before student housing? We book verified, affordable
                hotels near your campus or visa center.
              </p>
              <Link to={'/signin/student'}>
                <Button
                  className="bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-lg font-bold px-8 py-7 rounded-xl 
                shadow-lg hover:shadow-cyan-200/50 transition-all duration-300 transform hover:scale-105"
                >
                  Find Your Hotel Room
                </Button>
              </Link>
            </div>

            {/* Hero Image */}
            <div className="lg:w-1/2 transform translate-y-4">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-cyan-300 rounded-full z-10 animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-indigo-300 rounded-full z-10 animate-pulse"></div>

                {/* Main image with fancy border */}
                <div
                  className="relative bg-white p-3 rounded-3xl shadow-xl overflow-hidden 
                  bg-gradient-to-r from-cyan-500/10 to-indigo-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-indigo-600/20 opacity-30 z-0"></div>

                  {/* The actual image */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden z-10">
                    <img
                      src={hotelbookingImage}
                      alt="Comfortable student hotel room"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-8 right-4 bg-white rounded-xl shadow-lg p-3 z-20 transform rotate-6">
                    <div className="flex items-center space-x-2">
                      <div className="bg-cyan-100 p-2 rounded-lg">
                        <MapPin size={20} className="text-cyan-600" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-800">
                          Near Campus
                        </div>
                        <div className="text-xs text-gray-500">5 min walk</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-2 left-8 bg-white rounded-xl shadow-lg p-3 z-20 transform -rotate-3">
                    <div className="flex items-center space-x-2">
                      <div className="bg-indigo-100 p-2 rounded-lg">
                        <CreditCard size={20} className="text-indigo-600" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-800">
                          Student Discount
                        </div>
                        <div className="text-xs text-gray-500">25% OFF</div>
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-indigo-600">
              Stress-Free Stays
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500">
              Wherever You Go
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our hotel bookings prioritize safety, proximity, and affordability —
            perfect for visa trips, early arrivals, or family visits.
          </p>
        </div>

        {/* Colorful Feature Tabs */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-6 mb-16">
          {/* Tab Navigation */}
          <div className="flex items-center justify-center mb-10 overflow-x-auto">
            <div className="bg-white p-2 rounded-xl shadow-md inline-flex">
              <button
                className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'popular'
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('popular')}
              >
                Room Features
              </button>
              <button
                className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'support'
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('support')}
              >
                Location Benefits
              </button>
              <button
                className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'extras'
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('extras')}
              >
                Special Services
              </button>
            </div>
          </div>

          {/* Room Features */}
          {activeTab === 'popular' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-indigo-500/5 group-hover:from-cyan-500/10 group-hover:to-indigo-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-cyan-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-cyan-500 to-indigo-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <CreditCard className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Student-Friendly Rates
                </h3>
                <p className="text-gray-600">
                  Low-cost options for short stays with valid student ID
                  verification.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-blue-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <MapPin className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Campus Proximity
                </h3>
                <p className="text-gray-600">
                  Hotels carefully selected for their convenient location near
                  universities or visa centers.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 group-hover:from-teal-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-teal-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-teal-500 to-cyan-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Shield className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Verified Properties
                </h3>
                <p className="text-gray-600">
                  Pre-checked accommodations ensuring safety, cleanliness, and
                  proper facilities.
                </p>
              </div>

              {/* Feature Card 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 group-hover:from-indigo-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-indigo-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-indigo-500 to-blue-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Clock className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Instant Booking
                </h3>
                <p className="text-gray-600">
                  Confirmed reservations within minutes, with immediate booking
                  confirmation.
                </p>
              </div>
            </div>
          )}

          {/* Location Benefits */}
          {activeTab === 'support' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Location Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-blue-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Globe className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Flexible Cancellation
                </h3>
                <p className="text-gray-600">
                  Plans changed? No stress with our flexible cancellation
                  policies designed for students.
                </p>
              </div>

              {/* Location Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 group-hover:from-cyan-500/10 group-hover:to-teal-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-cyan-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-cyan-500 to-teal-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <User className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Family Options
                </h3>
                <p className="text-gray-600">
                  Book additional rooms for guardians or family members
                  accompanying you at special rates.
                </p>
              </div>

              {/* Location Card 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 group-hover:from-indigo-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-indigo-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-indigo-500 to-blue-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Clock className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Late Check-ins
                </h3>
                <p className="text-gray-600">
                  Accommodations that understand student travel schedules and
                  welcome late-night arrivals.
                </p>
              </div>
            </div>
          )}

          {/* Special Services */}
          {activeTab === 'extras' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Service Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-indigo-500/5 group-hover:from-cyan-500/10 group-hover:to-indigo-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-cyan-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-cyan-500 to-indigo-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Calendar className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Meal Packages
                </h3>
                <p className="text-gray-600">
                  Optional breakfast or dinner plans to make your stay even more
                  comfortable and convenient.
                </p>

                <div className="bg-cyan-50 mt-4 p-4 rounded-xl">
                  <div className="font-medium text-cyan-800">Student Bonus</div>
                  <div className="text-cyan-700">
                    Free breakfast with bookings of 3+ nights
                  </div>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-blue-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-blue-500 to-indigo-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Globe className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Local Guidance
                </h3>
                <p className="text-gray-600">
                  Support for directions, local transportation and essential
                  information about the area.
                </p>

                <div className="bg-blue-50 mt-4 p-4 rounded-xl">
                  <div className="font-medium text-blue-800">Free Resource</div>
                  <div className="text-blue-700">
                    Digital city guide with every booking
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-100 to-indigo-100 p-1 rounded-full mb-8">
            <div className="bg-white px-6 py-2 rounded-full font-medium text-cyan-600">
              Student Exclusive
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Need a place to stay?
          </h3>
          <Link to={'/signin/student'}>
            <Button
              className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700
            text-white font-bold text-lg px-12 py-7 rounded-full shadow-xl 
            hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Book a Verified Stay
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
