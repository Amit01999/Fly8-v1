import { useState } from 'react';
import {
  Calendar,
  CreditCard,
  Globe,
  Shield,
  User,
  Clock,
  Luggage,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import TravelInsuranceImg from '@/assets/picture/TravelandAccommodation/5.png';
import { Link } from 'react-router-dom';

export default function TravelInsurance() {
  const [activeTab, setActiveTab] = useState('popular');

  return (
    <div className="font-sans bg-white">
      {/* Hero Section with Colorful Design */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-50 to-violet-50">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-violet-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-96">
          <div className="absolute top-0 left-0 w-32 h-32 bg-fuchsia-300 rounded-full blur-xl opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-300 rounded-full blur-xl opacity-30"></div>
          <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-purple-300 rounded-full blur-xl opacity-30"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-violet-300 rounded-full blur-xl opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-violet-500 text-white px-4 py-2 rounded-full mb-6">
                <Shield className="mr-2" size={16} />
                <span className="font-medium">Student Travel Protection</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-violet-600">
                  Travel Safe.
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-indigo-500">
                  Study Safer.
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Protect your journey from surprises with our student-friendly
                travel insurance — accepted by embassies and universities
                worldwide.
              </p>
              <Link to={'/signin/student'}>
                <Button
                  className="bg-gradient-to-r from-purple-500 to-violet-600 text-white text-lg font-bold px-8 py-7 rounded-xl 
                shadow-lg hover:shadow-purple-200/50 transition-all duration-300 transform hover:scale-105"
                >
                  Get Your Insurance Plan
                </Button>
              </Link>
            </div>

            {/* Hero Image */}
            <div className="lg:w-1/2 transform translate-y-4">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-fuchsia-300 rounded-full z-10 animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-violet-300 rounded-full z-10 animate-pulse"></div>

                {/* Main image with fancy border */}
                <div
                  className="relative bg-white p-3 rounded-3xl shadow-xl overflow-hidden 
                  bg-gradient-to-r from-purple-500/10 to-violet-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-violet-600/20 opacity-30 z-0"></div>

                  {/* The actual image */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden z-10">
                    <img
                      src={TravelInsuranceImg}
                      alt="Student travel insurance protection"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-8 right-4 bg-white rounded-xl shadow-lg p-3 z-20 transform rotate-6">
                    <div className="flex items-center space-x-2">
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <Globe size={20} className="text-purple-600" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-800">
                          Global Coverage
                        </div>
                        <div className="text-xs text-gray-500">
                          180+ countries
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-2 left-8 bg-white rounded-xl shadow-lg p-3 z-20 transform -rotate-3">
                    <div className="flex items-center space-x-2">
                      <div className="bg-violet-100 p-2 rounded-lg">
                        <Shield size={20} className="text-violet-600" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-800">
                          Embassy Approved
                        </div>
                        <div className="text-xs text-gray-500">
                          All visa types
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-600">
              Coverage That
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-indigo-500">
              Travels With You
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fly8 provides access to trusted insurers offering complete
            protection for health, travel delays, lost baggage, and more.
          </p>
        </div>

        {/* Colorful Feature Tabs */}
        <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-3xl p-6 mb-16">
          {/* Tab Navigation */}
          <div className="flex items-center justify-center mb-10 overflow-x-auto">
            <div className="bg-white p-2 rounded-xl shadow-md inline-flex">
              <button
                className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'popular'
                    ? 'bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('popular')}
              >
                Key Benefits
              </button>
              <button
                className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'support'
                    ? 'bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('support')}
              >
                Medical Coverage
              </button>
              <button
                className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'extras'
                    ? 'bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('extras')}
              >
                Travel Protection
              </button>
            </div>
          </div>

          {/* Key Benefits */}
          {activeTab === 'popular' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 group-hover:from-purple-500/10 group-hover:to-violet-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-purple-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-purple-500 to-violet-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Shield className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Embassy-Approved
                </h3>
                <p className="text-gray-600">
                  Insurance plans accepted by all embassies and consulates for
                  visa applications.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-indigo-500/5 group-hover:from-violet-500/10 group-hover:to-indigo-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-violet-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-violet-500 to-indigo-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <CreditCard className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Affordable Plans
                </h3>
                <p className="text-gray-600">
                  Specially designed options for student budgets with
                  comprehensive coverage.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-fuchsia-500/5 group-hover:from-indigo-500/10 group-hover:to-fuchsia-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-indigo-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-indigo-500 to-fuchsia-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <User className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Medical Coverage
                </h3>
                <p className="text-gray-600">
                  Protection for doctor visits, hospital stays, emergencies, and
                  prescription medications.
                </p>
              </div>

              {/* Feature Card 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-purple-500/5 group-hover:from-fuchsia-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-fuchsia-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-fuchsia-500 to-purple-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Clock className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  24/7 Assistance
                </h3>
                <p className="text-gray-600">
                  Round-the-clock emergency support available in multiple
                  languages worldwide.
                </p>
              </div>
            </div>
          )}

          {/* Medical Coverage */}
          {activeTab === 'support' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Medical Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 group-hover:from-purple-500/10 group-hover:to-violet-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-purple-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-purple-500 to-violet-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <User className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Outpatient Care
                </h3>
                <p className="text-gray-600">
                  Coverage for doctor's visits, specialist consultations, and
                  diagnostic tests.
                </p>
              </div>

              {/* Medical Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-indigo-500/5 group-hover:from-violet-500/10 group-hover:to-indigo-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-violet-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-violet-500 to-indigo-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Shield className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Emergency Services
                </h3>
                <p className="text-gray-600">
                  Hospital treatment, emergency room visits, and ambulance
                  services included.
                </p>
              </div>

              {/* Medical Card 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-fuchsia-500/5 group-hover:from-indigo-500/10 group-hover:to-fuchsia-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-indigo-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-indigo-500 to-fuchsia-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Globe className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Prescription Coverage
                </h3>
                <p className="text-gray-600">
                  Reimbursement for necessary medications prescribed by medical
                  professionals.
                </p>
              </div>
            </div>
          )}

          {/* Travel Protection */}
          {activeTab === 'extras' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Travel Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 group-hover:from-purple-500/10 group-hover:to-violet-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-purple-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-purple-500 to-violet-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Calendar className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Instant Certificates
                </h3>
                <p className="text-gray-600">
                  Receive proof of insurance immediately for your visa
                  application or university requirements.
                </p>

                <div className="bg-purple-50 mt-4 p-4 rounded-xl">
                  <div className="font-medium text-purple-800">
                    Document Ready
                  </div>
                  <div className="text-purple-700">
                    Digital certificate in minutes
                  </div>
                </div>
              </div>

              {/* Travel Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-indigo-500/5 group-hover:from-violet-500/10 group-hover:to-indigo-500/10 transition-all duration-300"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-violet-100 rounded-full"></div>

                <div className="bg-gradient-to-br from-violet-500 to-indigo-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Luggage className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Travel Disruption Protection
                </h3>
                <p className="text-gray-600">
                  Coverage for flight delays, cancellations, lost baggage and
                  personal belongings.
                </p>

                <div className="bg-violet-50 mt-4 p-4 rounded-xl">
                  <div className="font-medium text-violet-800">
                    Quick Claims
                  </div>
                  <div className="text-violet-700">
                    Fast reimbursement process
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-purple-100 to-violet-100 p-1 rounded-full mb-8">
            <div className="bg-white px-6 py-2 rounded-full font-medium text-purple-600">
              Student Protection
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to travel with peace of mind?
          </h3>
          <Link to={'/signin/student'}>
            <Button
              className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700
            text-white font-bold text-lg px-12 py-7 rounded-full shadow-xl 
            hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Secure Your Travel Today
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
