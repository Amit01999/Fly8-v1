import React, { useState } from 'react';
import {
  ChevronDown,
  Globe,
  GraduationCap,
  MapPin,
  Calendar,
  Phone as PhoneIcon,
  Users,
  Star,
} from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  degree: string;
  destination: string;
  studyDate: string;
  budget: string;
  consent: boolean;
}

export default function StudentForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+1',
    phone: '',
    degree: '',
    destination: '',
    studyDate: '',
    budget: '',
    consent: false,
  });

  const [focused, setFocused] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const handleFocus = (field: string) => {
    setFocused(field);
  };

  const handleBlur = () => {
    setFocused(null);
  };

  const countryCodes = [
    { code: '+1', country: 'US/Canada' },
    { code: '+44', country: 'UK' },
    { code: '+91', country: 'India' },
    { code: '+61', country: 'Australia' },
    { code: '+86', country: 'China' },
    { code: '+49', country: 'Germany' },
  ];

  const degrees = [
    "Bachelor's Degree",
    "Master's Degree",
    'PhD',
    'Diploma',
    'Certificate',
    'Foundation Year',
  ];

  const destinations = [
    'USA',
    'UK',
    'Canada',
    'Australia',
    'Germany',
    'France',
    'Italy',
    'Singapore',
    'Japan',
    'New Zealand',
  ];

  const studyDates = [
    'Fall 2025',
    'Spring 2026',
    'Summer 2026',
    'Fall 2026',
    'Not decided yet',
  ];

  const budgetRanges = [
    'Under $15,000',
    '$15,000 - $25,000',
    '$25,000 - $35,000',
    '$35,000 - $50,000',
    'Above $50,000',
    'Need scholarship options',
  ];

  return (
    <div className=" flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
          <div className="flex items-center gap-2 mb-1">
            <Globe className="h-5 w-5" />
            <h3 className="text-sm font-medium">Fly8 Student Services</h3>
          </div>
          <h2 className="text-2xl font-bold mb-2">
            Start Your Global Education Journey
          </h2>
          <p className="text-blue-100">
            Share your details and our experts will help you navigate the path
            to studying abroad
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <label
                htmlFor="firstName"
                className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                  focused === 'firstName' || formData.firstName
                    ? 'text-xs text-blue-600 top-1'
                    : 'text-gray-500 top-3'
                }`}
              >
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                onFocus={() => handleFocus('firstName')}
                onBlur={handleBlur}
                className="w-full pt-5 pb-2 px-3 border-b-2 focus:border-blue-500 outline-none transition-colors"
                required
              />
            </div>
            <div className="relative">
              <label
                htmlFor="lastName"
                className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                  focused === 'lastName' || formData.lastName
                    ? 'text-xs text-blue-600 top-1'
                    : 'text-gray-500 top-3'
                }`}
              >
                Last Name*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                onFocus={() => handleFocus('lastName')}
                onBlur={handleBlur}
                className="w-full pt-5 pb-2 px-3 border-b-2 focus:border-blue-500 outline-none transition-colors"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <label
              htmlFor="email"
              className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                focused === 'email' || formData.email
                  ? 'text-xs text-blue-600 top-1'
                  : 'text-gray-500 top-3'
              }`}
            >
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur}
              className="w-full pt-5 pb-2 px-3 border-b-2 focus:border-blue-500 outline-none transition-colors"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex gap-2">
            <div className="relative w-1/3">
              <label
                htmlFor="countryCode"
                className="absolute left-3 text-xs text-blue-600 top-1"
              >
                Country Code*
              </label>
              <div className="relative">
                <select
                  id="countryCode"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="w-full pt-5 pb-2 px-3 border-b-2 focus:border-blue-500 outline-none appearance-none transition-colors"
                  required
                >
                  {countryCodes.map(item => (
                    <option key={item.code} value={item.code}>
                      {item.code} {item.country}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
              </div>
            </div>
            <div className="relative w-2/3 ">
              <label
                htmlFor="phone"
                className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                  focused === 'phone' || formData.phone
                    ? 'text-xs text-blue-600 top-1'
                    : 'text-gray-500 top-3'
                }`}
              >
                Phone Number*
              </label>
              <div className="flex items-center gap-5">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('phone')}
                  onBlur={handleBlur}
                  className="w-full left-10 pt-5 pb-2 pl-8 pr-3 border-b-2 focus:border-blue-500 outline-none transition-colors"
                  required
                />
              </div>
            </div>
          </div>

          {/* Education Details */}
          <div className="space-y-4">
            <div className="relative">
              <label
                htmlFor="degree"
                className="absolute left-3 text-xs text-blue-600 top-1"
              >
                Degree You Want to Pursue*
              </label>
              <div className="relative">
                <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <select
                  id="degree"
                  name="degree"
                  value={formData.degree}
                  onChange={handleInputChange}
                  className="w-full pt-5 pb-2 pl-8 pr-3 border-b-2 focus:border-blue-500 outline-none appearance-none transition-colors"
                  required
                >
                  <option value="" disabled>
                    Select a Degree
                  </option>
                  {degrees.map(degree => (
                    <option key={degree} value={degree}>
                      {degree}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="destination"
                className="absolute left-3 text-xs text-blue-600 top-1"
              >
                Preferred Destination*
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <select
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  className="w-full pt-5 pb-2 pl-8 pr-3 border-b-2 focus:border-blue-500 outline-none appearance-none transition-colors"
                  required
                >
                  <option value="" disabled>
                    Select a Destination
                  </option>
                  {destinations.map(destination => (
                    <option key={destination} value={destination}>
                      {destination}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="studyDate"
                className="absolute left-3 text-xs text-blue-600 top-1"
              >
                When Do You Plan to Study*
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <select
                  id="studyDate"
                  name="studyDate"
                  value={formData.studyDate}
                  onChange={handleInputChange}
                  className="w-full pt-5 pb-2 pl-8 pr-3 border-b-2 focus:border-blue-500 outline-none appearance-none transition-colors"
                  required
                >
                  <option value="" disabled>
                    Select a Time Frame
                  </option>
                  {studyDates.map(date => (
                    <option key={date} value={date}>
                      {date}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="budget"
                className="absolute left-3 text-xs text-blue-600 top-1"
              >
                Your Budget (Annual)
              </label>
              <div className="relative">
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full pt-5 pb-2 pl-8 pr-3 border-b-2 focus:border-blue-500 outline-none appearance-none transition-colors"
                >
                  <option value="" disabled>
                    Select a Budget Range
                  </option>
                  {budgetRanges.map(range => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Consent */}
          <div className="flex items-start gap-2 mt-6">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleCheckboxChange}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              required
            />
            <label htmlFor="consent" className="text-sm text-gray-600">
              I authorize Fly8 & its representatives to contact me with updates
              and notifications via Email/SMS/WhatsApp/Call. This will override
              DND/NDNC registration.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md"
          >
            Start Your Journey with Fly8
          </button>
        </form>

        <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">
                  12,00+ Students
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">
                  150+ Countries
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-gray-700">
                  4.9/5 Rating
                </span>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              Secure & Trusted • SSL Protected
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
