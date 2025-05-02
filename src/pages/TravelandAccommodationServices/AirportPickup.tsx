import { useState } from 'react';
import {
  Calendar,
  Clock,
  Globe,
  Luggage,
  Plane,
  Shield,
  User,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import AirportPickImg from '@/assets/picture/TravelandAccommodation/4.png';
import { Link } from 'react-router-dom';

export default function AirportPickup() {
  const [activeTab, setActiveTab] = useState('popular');

  return (
    <div className="font-sans bg-white">
      {/* Hero Section with Colorful Design */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-50 to-rose-50">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-rose-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-96">
          <div className="absolute top-0 left-0 w-32 h-32 bg-amber-300 rounded-full blur-xl opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-300 rounded-full blur-xl opacity-30"></div>
          <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-orange-300 rounded-full blur-xl opacity-30"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-rose-300 rounded-full blur-xl opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-rose-500 text-white px-4 py-2 rounded-full mb-6">
                <Plane className="mr-2" size={16} />
                <span className="font-medium">Airport Transfer Service</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
                  Land. Ride.
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-rose-500">
                  Relax.
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Skip the stress after landing. We arrange reliable, affordable
                airport pickups — so your first impression is a warm welcome.
              </p>
              <Link to={'/signin/student'}>
                <Button
                  className="bg-gradient-to-r from-orange-500 to-rose-600 text-white text-lg font-bold px-8 py-7 rounded-xl 
                shadow-lg hover:shadow-orange-200/50 transition-all duration-300 transform hover:scale-105"
                >
                  Book Your Airport Pickup
                </Button>
              </Link>
            </div>

            {/* Hero Image */}
            <div className="lg:w-1/2 transform translate-y-4">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-amber-300 rounded-full z-10 animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-rose-300 rounded-full z-10 animate-pulse"></div>

                {/* Main image with fancy border */}
                <div
                  className="relative bg-white p-3 rounded-3xl shadow-xl overflow-hidden 
                  bg-gradient-to-r from-orange-500/10 to-rose-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-rose-600/20 opacity-30 z-0"></div>

                  {/* The actual image */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden z-10">
                    <img
                      src={AirportPickImg}
                      alt="Professional airport pickup service"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-8 right-4 bg-white rounded-xl shadow-lg p-3 z-20 transform rotate-6">
                    <div className="flex items-center space-x-2">
                      <div className="bg-orange-100 p-2 rounded-lg">
                        <Clock size={20} className="text-orange-600" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-800">
                          On-Time Service
                        </div>
                        <div className="text-xs text-gray-500">
                          98% reliability
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-2 left-8 bg-white rounded-xl shadow-lg p-3 z-20 transform -rotate-3">
                    <div className="flex items-center space-x-2">
                      <div className="bg-rose-100 p-2 rounded-lg">
                        <Shield size={20} className="text-rose-600" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-800">
                          Safety First
                        </div>
                        <div className="text-xs text-gray-500">
                          Vetted drivers
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
              Your First Step Abroad,
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-rose-500">
              Seamlessly Managed
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From airport to accommodation, our pickup service ensures you arrive
            safely — no waiting, no confusion.
          </p>
        </div>

        {/* Colorful Feature Tabs */}
        <div className="bg-gradient-to-r from-orange-50 to-rose-50 rounded-3xl p-6 mb-16">
          {/* Tab Navigation */}
          <div className="flex items-center justify-center mb-10 overflow-x-auto">
            <div className="bg-white p-2 rounded-xl shadow-md inline-flex">
              <button
                className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'popular'
                    ? 'bg-gradient-to-r from-orange-500 to-rose-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('popular')}
              >
                Service Features
              </button>
              <button
                className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'support'
                    ? 'bg-gradient-to-r from-orange-500 to-rose-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('support')}
              >
                Safety Standards
              </button>
              <button
                className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'extras'
                    ? 'bg-gradient-to-r from-orange-500 to-rose-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('extras')}
              >
                Added Benefits
              </button>
            </div>
          </div>

          {/* Service Features */}
          {activeTab === 'popular' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-rose-500/5 group-hover:from-orange-500/10 group-hover:to-rose-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-orange-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-orange-500 to-rose-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Plane className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Pre-Booked Transfers
                </h3>
                <p className="text-gray-600">
                  Avoid airport queues with our pre-arranged pickup service
                  straight to your accommodation.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-red-500/5 group-hover:from-rose-500/10 group-hover:to-red-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-rose-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-rose-500 to-red-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <User className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Meet & Greet
                </h3>
                <p className="text-gray-600">
                  Friendly drivers with name placards waiting for you at the
                  arrivals gate.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-amber-500/5 group-hover:from-red-500/10 group-hover:to-amber-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-red-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-red-500 to-amber-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Clock className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  24/7 Service
                </h3>
                <p className="text-gray-600">
                  Available at all hours to accommodate any flight schedule, day
                  or night.
                </p>
              </div>

              {/* Feature Card 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 group-hover:from-amber-500/10 group-hover:to-orange-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-amber-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Luggage className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Luggage Assistance
                </h3>
                <p className="text-gray-600">
                  Help with your bags from the terminal to the vehicle for a
                  stress-free arrival.
                </p>
              </div>
            </div>
          )}

          {/* Safety Standards */}
          {activeTab === 'support' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Safety Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-rose-500/5 group-hover:from-orange-500/10 group-hover:to-rose-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-orange-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-orange-500 to-rose-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Globe className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Route Familiarity
                </h3>
                <p className="text-gray-600">
                  Drivers know your destination well, ensuring a direct and
                  efficient journey.
                </p>
              </div>

              {/* Safety Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-red-500/5 group-hover:from-rose-500/10 group-hover:to-red-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-rose-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-rose-500 to-red-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Shield className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Emergency Contact
                </h3>
                <p className="text-gray-600">
                  On-call assistance available for flight delays or unexpected
                  circumstances.
                </p>
              </div>

              {/* Safety Card 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-amber-500/5 group-hover:from-red-500/10 group-hover:to-amber-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-red-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-red-500 to-amber-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Clock className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Affordable Rates
                </h3>
                <p className="text-gray-600">
                  Lower than local taxis with upfront pricing and no hidden fees
                  or surcharges.
                </p>
              </div>
            </div>
          )}

          {/* Added Benefits */}
          {activeTab === 'extras' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Service Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-rose-500/5 group-hover:from-orange-500/10 group-hover:to-rose-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-orange-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-orange-500 to-rose-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <User className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Multilingual Drivers
                </h3>
                <p className="text-gray-600">
                  Basic communication in multiple languages to help
                  international students feel welcome.
                </p>

                <div className="bg-orange-50 mt-4 p-4 rounded-xl">
                  <div className="font-medium text-orange-800">
                    Language Support
                  </div>
                  <div className="text-orange-700">
                    Available in 8+ languages
                  </div>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-red-500/5 group-hover:from-rose-500/10 group-hover:to-red-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-rose-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-rose-500 to-red-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Calendar className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Flight Monitoring
                </h3>
                <p className="text-gray-600">
                  We track your flight so drivers adjust to delays or early
                  arrivals automatically.
                </p>

                <div className="bg-rose-50 mt-4 p-4 rounded-xl">
                  <div className="font-medium text-rose-800">
                    No Extra Charge
                  </div>
                  <div className="text-rose-700">
                    Free waiting time up to 60 minutes
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-orange-100 to-rose-100 p-1 rounded-full mb-8">
            <div className="bg-white px-6 py-2 rounded-full font-medium text-orange-600">
              Easy Booking
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready for a stress-free arrival?
          </h3>
          <Link to={'/signin/student'}>
            <Button
              className="bg-gradient-to-r from-orange-500 to-rose-600 hover:from-orange-600 hover:to-rose-700
            text-white font-bold text-lg px-12 py-7 rounded-full shadow-xl 
            hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Your Pickup Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
