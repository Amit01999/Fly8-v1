import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  Clock,
  User,
  BookOpen,
  FileText,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  AlertCircle,
  X,
  Trophy,
  DollarSign,
  Building,
  Globe,
  Mail,
  Phone,
  GraduationCap,
  Copy,
  Sparkles,
} from 'lucide-react';
import gstuimg from '../../assets/temporary/gstu.jpg';

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    dateOfBirth: '',
    contactNumber: '',
    email: '',
    universityName: '',
    department: '',
    currentYear: '',
    studentId: '',
    studyDestinations: [],
    programLevel: '',
    areasOfInterest: [],
    otherDestination: '',
    otherArea: '',
    hasPassport: '',
    hasLanguageTest: '',
    languageTestName: '',
    languageTestScore: '',
    appliedAbroad: '',
    expectations: '',
    consent: false,
  });

  const handleInputChange = e => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name !== 'consent') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter(item => item !== value),
      }));
    } else if (type === 'checkbox' && name === 'consent') {
      setFormData(prev => ({ ...prev, consent: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateStep1 = () => {
    return (
      formData.fullName &&
      formData.contactNumber &&
      formData.email &&
      formData.universityName &&
      formData.department &&
      formData.studentId
    );
  };

  const validateStep2 = () => {
    return (
      formData.studyDestinations.length > 0 &&
      formData.programLevel &&
      formData.areasOfInterest.length > 0
    );
  };

  const validateStep3 = () => {
    const basicValid =
      formData.hasPassport &&
      formData.hasLanguageTest &&
      formData.appliedAbroad &&
      formData.expectations &&
      formData.consent;

    if (formData.hasLanguageTest === 'Yes') {
      return (
        basicValid && formData.languageTestName && formData.languageTestScore
      );
    }
    return basicValid;
  };

  const canProceed = () => {
    if (currentStep === 1) return validateStep1();
    if (currentStep === 2) return validateStep2();
    if (currentStep === 3) return validateStep3();
    return false;
  };

  const nextStep = () => {
    if (canProceed() && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (validateStep3()) {
      try {
        // Check if email or contact number already exists
        const checkResponse = await fetch(
          'https://fly8-v1-server.vercel.app/api/v1/gstu/check-existing',
          // 'http://localhost:3000/api/v1/gstu/check-existing',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: formData.email,
              contactNumber: formData.contactNumber,
            }),
          }
        );

        const checkData = await checkResponse.json();
        if (checkData.exists) {
          setErrorMessage(
            `You have already registered with Registration Number: ${checkData.registrationNumber}`
          );
          return;
        }

        const response = await fetch(
          'https://fly8-v1-server.vercel.app/api/v1/gstu/register',
          // 'http://localhost:3000/api/v1/gstu/register',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error('Registration failed');
        }

        const data = await response.json();
        setRegistrationNumber(data.registrationNumber);
        setShowSuccess(true);
        setShowForm(false);
        setCurrentStep(1);
        setErrorMessage('');

        // Reset form
        setFormData({
          fullName: '',
          gender: '',
          dateOfBirth: '',
          contactNumber: '',
          email: '',
          universityName: '',
          department: '',
          currentYear: '',
          studentId: '',
          studyDestinations: [],
          programLevel: '',
          areasOfInterest: [],
          otherDestination: '',
          otherArea: '',
          hasPassport: '',
          hasLanguageTest: '',
          languageTestName: '',
          languageTestScore: '',
          appliedAbroad: '',
          expectations: '',
          consent: false,
        });
      } catch (error) {
        console.error('Error submitting registration:', error);
        setErrorMessage('Registration failed. Please try again.');
      }
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(registrationNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-indigo-900/70 to-purple-900/80 z-10"></div>
        <img
          src="/api/placeholder/1200/500"
          className="w-full h-[500px] object-cover"
          // alt="GSTU Campus"
        />

        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-6 space-x-3">
              <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Global Education Gateway Summit 2025
              </h1>
              <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
            </div>

            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Organized by <span className="font-bold text-white">Fly8</span> &
              <span className="font-bold text-white">
                {' '}
                GSTU Research and Higher Studies Society
              </span>
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <Calendar className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm text-blue-200">Date</p>
                <p className="font-bold text-lg">20 September, 2025</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <Clock className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm text-blue-200">Time</p>
                <p className="font-bold text-lg">10:00 AM – 5:00 PM</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <MapPin className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm text-blue-200">Venue</p>
                <p className="font-bold text-lg">GSTU, Gopalganj</p>
              </div>
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="px-12 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-xl rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-2xl"
            >
              Register Now - FREE
            </button>
          </div>
        </div>
      </div>

      {/* Event Details Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About the Event
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            The Global Education Gateway Summit 2025 is your one-stop platform
            to explore international study opportunities. Join students, global
            education counselors, and top universities to discover scholarships,
            admissions, and career pathways worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">
            What's in it for Students?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2">
              <Trophy className="w-12 h-12 text-yellow-500 mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Fully Funded Scholarships
              </h4>
              <p className="text-gray-600">
                Apply for exclusive fully funded scholarships across multiple
                destinations
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2">
              <DollarSign className="w-12 h-12 text-green-500 mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Up to BDT 1,500,000 in Scholarships
              </h4>
              <p className="text-gray-600">
                Special scholarships available during on-spot university
                admissions
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2">
              <Building className="w-12 h-12 text-blue-500 mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                On-Spot Admission – 10+ Countries
              </h4>
              <p className="text-gray-600">
                Direct admission from UK, Australia, Cyprus, Spain, Malaysia,
                Malta, China, Russia, Japan, and India
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2">
              <Globe className="w-12 h-12 text-purple-500 mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                52 Countries & 4000+ Universities
              </h4>
              <p className="text-gray-600">
                Learn about admission processes, course options, and career
                prospects worldwide
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2">
              <FileText className="w-12 h-12 text-indigo-500 mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Free File Assessment
              </h4>
              <p className="text-gray-600">
                Receive expert profile evaluation and advice from top global
                education counselors
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2">
              <BookOpen className="w-12 h-12 text-pink-500 mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Complimentary Online Classes
              </h4>
              <p className="text-gray-600">
                Free access to online preparatory classes for IELTS, PTE, and
                Duolingo
              </p>
            </div>
          </div>
        </div>

        {/* Why Attend Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 text-white mb-12">
          <h3 className="text-3xl font-bold mb-8 text-center">Why Attend?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <p className="text-lg">
                Direct interaction with university delegates and admission
                officers
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <p className="text-lg">
                Explore scholarship and financial aid opportunities
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <p className="text-lg">
                Gain clarity on visa processes and study abroad planning
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <p className="text-lg">
                Build global connections and prepare for an international career
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-10 border-2 border-yellow-200">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">
            Registration
          </h3>
          <p className="text-xl text-gray-700 mb-6">
            Seats are limited! Don't miss this chance to secure your future with
            global education.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="px-10 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-lg rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Register Now
          </button>
        </div>
      </div>

      {/* Registration Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Registration Form - Step {currentStep} of 3
              </h2>

              {errorMessage && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                  <p className="text-red-600">{errorMessage}</p>
                </div>
              )}

              {/* Progress Bar */}
              <div className="flex justify-between mb-8">
                <div
                  className={`flex-1 h-2 rounded-full mr-2 ${
                    currentStep >= 1 ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                ></div>
                <div
                  className={`flex-1 h-2 rounded-full mr-2 ${
                    currentStep >= 2 ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                ></div>
                <div
                  className={`flex-1 h-2 rounded-full ${
                    currentStep >= 3 ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                ></div>
              </div>

              {/* Step 1 */}
              {currentStep === 1 && (
                <div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">
                    Student Information
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-blue-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-blue-200 rounded-xl"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-blue-700 mb-2">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-blue-200 rounded-xl"
                        placeholder="+880 1234567890"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-blue-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-blue-200 rounded-xl"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-blue-700 mb-2">
                        University/College *
                      </label>
                      <input
                        type="text"
                        name="universityName"
                        value={formData.universityName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-blue-200 rounded-xl"
                        placeholder="Enter your university name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-blue-700 mb-2">
                        Department *
                      </label>
                      <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-blue-200 rounded-xl"
                        placeholder="Enter your department"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-blue-700 mb-2">
                        Student ID *
                      </label>
                      <input
                        type="text"
                        name="studentId"
                        value={formData.studentId}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-blue-200 rounded-xl"
                        placeholder="Enter your student ID"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {currentStep === 2 && (
                <div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">
                    Academic Interest
                  </h3>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-blue-700 mb-3">
                      Study Destinations *
                    </label>
                    <div className="grid md:grid-cols-3 gap-3">
                      {[
                        'USA',
                        'UK',
                        'Canada',
                        'Australia',
                        'Europe',
                        'Asia',
                      ].map(dest => (
                        <label
                          key={dest}
                          className="flex items-center bg-blue-50 p-3 rounded-xl cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            name="studyDestinations"
                            value={dest}
                            checked={formData.studyDestinations.includes(dest)}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          <span>{dest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-blue-700 mb-3">
                      Program Level *
                    </label>
                    <select
                      name="programLevel"
                      value={formData.programLevel}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl"
                    >
                      <option value="">Select a program level</option>
                      <option value="Bachelor's">Bachelor's</option>
                      <option value="Master's">Master's</option>
                      <option value="PhD">PhD</option>
                      <option value="Language Course">Language Course</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-700 mb-3">
                      Areas of Interest *
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        'Engineering',
                        'Business',
                        'Medical',
                        'Arts',
                        'Sciences',
                        'Agriculture',
                      ].map(area => (
                        <label
                          key={area}
                          className="flex items-center bg-green-50 p-3 rounded-xl cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            name="areasOfInterest"
                            value={area}
                            checked={formData.areasOfInterest.includes(area)}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          <span>{area}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {currentStep === 3 && (
                <div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">
                    Additional Details
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-blue-700 mb-3">
                        Do you have a passport? *
                      </label>
                      <div className="flex gap-4">
                        {['Yes', 'No', 'Planning to take soon'].map(option => (
                          <label key={option} className="flex items-center">
                            <input
                              type="radio"
                              name="hasPassport"
                              value={option}
                              checked={formData.hasPassport === option}
                              onChange={handleInputChange}
                              className="mr-2"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-blue-700 mb-3">
                        Language Test Score? *
                      </label>
                      <div className="flex gap-4">
                        {['Yes', 'No', 'Planning to take soon'].map(option => (
                          <label key={option} className="flex items-center">
                            <input
                              type="radio"
                              name="hasLanguageTest"
                              value={option}
                              checked={formData.hasLanguageTest === option}
                              onChange={handleInputChange}
                              className="mr-2"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>

                      {formData.hasLanguageTest === 'Yes' && (
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                          <input
                            type="text"
                            name="languageTestName"
                            value={formData.languageTestName}
                            onChange={handleInputChange}
                            className="px-4 py-3 border border-blue-200 rounded-xl"
                            placeholder="Test name (IELTS, TOEFL, etc.)"
                          />
                          <input
                            type="text"
                            name="languageTestScore"
                            value={formData.languageTestScore}
                            onChange={handleInputChange}
                            className="px-4 py-3 border border-blue-200 rounded-xl"
                            placeholder="Your score"
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-blue-700 mb-3">
                        Applied abroad before? *
                      </label>
                      <div className="flex gap-4">
                        {['Yes', 'No'].map(option => (
                          <label key={option} className="flex items-center">
                            <input
                              type="radio"
                              name="appliedAbroad"
                              value={option}
                              checked={formData.appliedAbroad === option}
                              onChange={handleInputChange}
                              className="mr-2"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-blue-700 mb-2">
                        Your Expectations *
                      </label>
                      <textarea
                        name="expectations"
                        value={formData.expectations}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-blue-200 rounded-xl"
                        placeholder="What do you expect from this event?"
                      />
                    </div>

                    <div className="bg-blue-50 p-4 rounded-xl">
                      <label className="flex items-start cursor-pointer">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleInputChange}
                          className="mt-1 mr-3"
                        />
                        <span className="text-sm">
                          I agree that Fly8 and GSTU may use my information for
                          event communication and higher study support purposes.
                          *
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <div>
                  {currentStep > 1 && (
                    <button
                      onClick={prevStep}
                      className="flex items-center px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300"
                    >
                      <ChevronLeft className="w-5 h-5 mr-2" />
                      Previous
                    </button>
                  )}
                </div>

                <div>
                  {currentStep < 3 ? (
                    <button
                      onClick={nextStep}
                      disabled={!canProceed()}
                      className={`flex items-center px-6 py-3 font-semibold rounded-xl ${
                        canProceed()
                          ? 'bg-blue-500 text-white hover:bg-blue-600'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Next
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={!validateStep3()}
                      className={`flex items-center px-8 py-3 font-bold rounded-xl ${
                        validateStep3()
                          ? 'bg-green-500 text-white hover:bg-green-600'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <GraduationCap className="w-6 h-6 mr-2" />
                      Submit Registration
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Congratulations!
            </h2>
            <p className="text-gray-600 mb-6">
              You have successfully registered for the Global Education Gateway
              Summit 2025.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <p className="text-sm text-gray-600 mb-2">
                Your Registration Number:
              </p>
              <div className="flex items-center justify-center space-x-2">
                <p className="text-2xl font-bold text-blue-600">
                  {registrationNumber}
                </p>
                <button
                  onClick={copyToClipboard}
                  className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200"
                >
                  <Copy className="w-5 h-5 text-blue-600" />
                </button>
              </div>
              {copied && <p className="text-xs text-green-600 mt-2">Copied!</p>}
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
              <p className="text-sm font-semibold mb-2">Ticket Collection:</p>
              <p className="text-sm">
                Visit our Registration Booth at JoyBangla Chattor, GSTU,
                Gopalganj with your registration number.
              </p>
            </div>

            <button
              onClick={() => setShowSuccess(false)}
              className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
