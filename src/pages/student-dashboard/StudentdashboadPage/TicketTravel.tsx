import React, { useState } from 'react';
import { Plane, MapPin, CheckSquare, Users, Package } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Request for Air Ticket',
    description: 'Book flights at student-friendly prices',
    icon: Plane,
    color: 'from-blue-500 to-sky-500',
  },
  {
    id: 2,
    title: 'Airport Pickup',
    description: 'Safe and reliable airport transfer services',
    icon: MapPin,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    title: 'Fly Checklist',
    description: 'Complete pre-departure checklist and guidance',
    icon: CheckSquare,
    color: 'from-purple-500 to-violet-500',
  },
  {
    id: 4,
    title: 'Guide Support',
    description: 'Personal assistance and local guidance',
    icon: Users,
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 5,
    title: 'Travel Package',
    description: 'Complete travel packages for students',
    icon: Package,
    color: 'from-pink-500 to-rose-500',
  },
];

const TicketTravel = () => {
  const [departureCity, setDepartureCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-sky-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Ticket & Travel Support</h1>
        <p className="text-blue-100">
          Complete travel assistance for international students
        </p>
      </div>

      {/* Flight Search */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Search Flights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              From
            </label>
            <input
              type="text"
              placeholder="Departure city"
              value={departureCity}
              onChange={e => setDepartureCity(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              To
            </label>
            <input
              type="text"
              placeholder="Destination city"
              value={destinationCity}
              onChange={e => setDestinationCity(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Departure
            </label>
            <input
              type="date"
              value={departureDate}
              onChange={e => setDepartureDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Return
            </label>
            <input
              type="date"
              value={returnDate}
              onChange={e => setReturnDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <button className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Search Flights
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pre-departure Checklist */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Pre-Departure Checklist
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-gray-800">Documents</h4>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-600">
                  Passport (valid for 6+ months)
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-600">Student visa</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-600">Acceptance letter</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-600">
                  Financial documents
                </span>
              </label>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-gray-800">Essentials</h4>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-600">Travel insurance</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-600">
                  International SIM card
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-600">Currency exchange</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-600">
                  Emergency contacts
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketTravel;
