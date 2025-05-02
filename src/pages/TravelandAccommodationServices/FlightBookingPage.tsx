import { useState } from 'react';
import {
  Calendar,
  CreditCard,
  Globe,
  Luggage,
  Plane,
  Shield,
  User,
  Clock,
} from 'lucide-react';
import flightbookingImage from '@/assets/picture/TravelandAccommodation/1.png';
import { Link } from 'react-router-dom';

export default function FlightBooking() {
  const [activeTab, setActiveTab] = useState('popular');

  return (
    <div className="font-sans bg-white">
      {/* Hero Section with Colorful Design */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-96">
          <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-300 rounded-full blur-xl opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-300 rounded-full blur-xl opacity-30"></div>
          <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-green-300 rounded-full blur-xl opacity-30"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-red-300 rounded-full blur-xl opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full mb-6">
                <Plane className="mr-2" size={16} />
                <span className="font-medium">Student Travel Specialists</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                  Book Smart.
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500">
                  Fly Smooth.
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Get the best student deals on international flights. We'll help
                you book affordable, flexible tickets with minimal hassle.
              </p>

              <Link
                to={'/signup/student'}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg font-bold px-8 py-4 rounded-xl 
                shadow-lg hover:shadow-pink-200/50 transition-all duration-300 transform hover:scale-105"
              >
                Book Your Flight Now
              </Link>
            </div>

            {/* Hero Image - Actual Image */}
            <div className="lg:w-1/2 transform translate-y-4">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-yellow-300 rounded-full z-10 animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-purple-300 rounded-full z-10 animate-pulse"></div>

                {/* Main image with fancy border */}
                <div
                  className="relative bg-white p-3 rounded-3xl shadow-xl overflow-hidden 
                  bg-gradient-to-r from-pink-500/10 to-purple-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 opacity-30 z-0"></div>

                  {/* The actual image */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden z-10">
                    <img
                      src={flightbookingImage}
                      alt="Happy students traveling by airplane"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-8 right-4 bg-white rounded-xl shadow-lg p-3 z-20 transform rotate-6">
                    <div className="flex items-center space-x-2">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <Plane size={20} className="text-green-600" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-800">
                          Flight Confirmed
                        </div>
                        <div className="text-xs text-gray-500">JFK → LHR</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-2 left-8 bg-white rounded-xl shadow-lg p-3 z-20 transform -rotate-3">
                    <div className="flex items-center space-x-2">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <CreditCard size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-800">
                          Student Discount
                        </div>
                        <div className="text-xs text-gray-500">40% OFF</div>
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Global Flights,
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500">
              Tailored for Students
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From discounted fares to flexible rebooking options — we make flying
            abroad easier and cheaper.
          </p>
        </div>

        {/* Colorful Feature Tabs */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-6 mb-16">
          {/* Tab Navigation */}
          <div className="flex items-center justify-center mb-10">
            <div className="bg-white p-2 rounded-xl shadow-md inline-flex">
              <button
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'popular'
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('popular')}
              >
                Popular Features
              </button>
              <button
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'support'
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('support')}
              >
                Student Support
              </button>
              <button
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'extras'
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('extras')}
              >
                Travel Extras
              </button>
            </div>
          </div>

          {/* Popular Features */}
          {activeTab === 'popular' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 group-hover:from-pink-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-pink-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <CreditCard className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Student Discounts
                </h3>
                <p className="text-gray-600">
                  Access exclusive flight deals with up to 40% off regular fares
                  with valid student ID.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-blue-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Clock className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Flexible Dates
                </h3>
                <p className="text-gray-600">
                  Change your travel plans without worry - modify your booking
                  with minimal fees.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-pink-500/5 group-hover:from-orange-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-orange-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-orange-500 to-pink-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Plane className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  One-Way or Round-Trip
                </h3>
                <p className="text-gray-600">
                  Choose the travel option that works best for your study abroad
                  journey.
                </p>
              </div>

              {/* Feature Card 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 group-hover:from-green-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-green-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-green-500 to-blue-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Globe className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Preferred Airlines
                </h3>
                <p className="text-gray-600">
                  Select from our curated list of student-friendly carriers
                  offering extra benefits.
                </p>
              </div>
            </div>
          )}

          {/* Student Support */}
          {activeTab === 'support' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Support Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-blue-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Globe className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Visa-Ready Itineraries
                </h3>
                <p className="text-gray-600">
                  Flight plans structured to meet embassy requirements for
                  student visa applications.
                </p>
              </div>

              {/* Support Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-purple-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <User className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  24/7 Travel Desk
                </h3>
                <p className="text-gray-600">
                  Round-the-clock assistance with delays, cancellations, and
                  travel changes.
                </p>
              </div>

              {/* Support Card 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-yellow-500/5 group-hover:from-green-500/10 group-hover:to-yellow-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-green-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-green-500 to-yellow-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Shield className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Instant Confirmations
                </h3>
                <p className="text-gray-600">
                  Receive your booking details immediately after completing your
                  reservation.
                </p>
              </div>
            </div>
          )}

          {/* Travel Extras */}
          {activeTab === 'extras' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Extras Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 group-hover:from-orange-500/10 group-hover:to-red-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-orange-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-orange-500 to-red-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Luggage className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Luggage Guidelines
                </h3>
                <p className="text-gray-600">
                  Expert advice on baggage allowances and student-specific
                  luggage policies for international travel.
                </p>

                <div className="bg-orange-50 mt-4 p-4 rounded-xl">
                  <div className="font-medium text-orange-800">
                    Student Bonus
                  </div>
                  <div className="text-orange-700">
                    Free extra 10kg allowance on selected airlines
                  </div>
                </div>
              </div>

              {/* Extras Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-blue-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-blue-500 to-indigo-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <CreditCard className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Student Travel Bundle
                </h3>
                <p className="text-gray-600">
                  Upgrade your journey with essential student travel services at
                  a special package price.
                </p>

                <div className="bg-blue-50 mt-4 p-4 rounded-xl">
                  <div className="font-medium text-blue-800">
                    Package Includes
                  </div>
                  <div className="text-blue-700">
                    Airport transfers, travel insurance & premium seat selection
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-pink-100 to-purple-100 p-1 rounded-full mb-8">
            <div className="bg-white px-6 py-2 rounded-full font-medium text-pink-600">
              Limited Time Offer
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-10">
            Ready for your next adventure?
          </h3>

          <Link
            to={'/signup/student'}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700
            text-white font-bold text-lg px-12 py-5 rounded-full shadow-xl 
            hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Get Your Student Fare
          </Link>
        </div>
      </div>
    </div>
  );
}
