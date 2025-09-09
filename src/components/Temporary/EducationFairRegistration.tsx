import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  GraduationCap,
  Globe,
  Mail,
  Phone,
  User,
  BookOpen,
  FileText,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  AlertCircle,
} from 'lucide-react';
import bg from '../../assets/event/Screenshot 2025-09-06 134235.png';

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Student Information
    fullName: '',
    gender: '',
    dateOfBirth: '',
    contactNumber: '',
    email: '',
    universityName: '',
    department: '',
    currentYear: '',
    studentId: '',

    // Academic & Career Interest
    studyDestinations: [],
    programLevel: '',
    areasOfInterest: [],
    otherDestination: '',
    otherArea: '',

    // Additional Details
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
      const arrayName = name;
      setFormData(prev => ({
        ...prev,
        [arrayName]: checked
          ? [...prev[arrayName], value]
          : prev[arrayName].filter(item => item !== value),
      }));
    } else if (type === 'checkbox' && name === 'consent') {
      setFormData(prev => ({ ...prev, consent: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Validation functions for each step
  const validateStep1 = () => {
    return (
      formData.fullName.trim() !== '' &&
      formData.contactNumber.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.universityName.trim() !== '' &&
      formData.department.trim() !== '' &&
      formData.studentId.trim() !== ''
    );
  };

  const validateStep2 = () => {
    return (
      formData.studyDestinations.length > 0 &&
      formData.programLevel.trim() !== '' &&
      formData.areasOfInterest.length > 0
    );
  };

  const validateStep3 = () => {
    const basicValidation =
      formData.hasPassport !== '' &&
      formData.hasLanguageTest !== '' &&
      formData.appliedAbroad !== '' &&
      formData.expectations.trim() !== '' &&
      formData.consent;

    if (formData.hasLanguageTest === 'Yes') {
      return (
        basicValidation &&
        formData.languageTestName.trim() !== '' &&
        formData.languageTestScore.trim() !== ''
      );
    }

    return basicValidation;
  };

  const canProceedToNext = () => {
    if (currentStep === 1) return validateStep1();
    if (currentStep === 2) return validateStep2();
    if (currentStep === 3) return validateStep3();
    return false;
  };

  const nextStep = () => {
    if (canProceedToNext() && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (validateStep3()) {
      console.log('Form submitted:', formData);
      alert(
        '🎉 Registration completed successfully! We will contact you soon with event details.'
      );

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
      setCurrentStep(1);
    } else {
      alert('❌ Please fill in all required fields before submitting.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section with Background Image */}
      <div className="relative bg-gradient-to-r from-sky-100 via-blue-100 to-indigo-100 overflow-hidden">
        {/* Hero Background Pattern */}
        <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-sm"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="text-center text-blue-900">
            <div className="flex justify-center items-center mb-6 animate-bounce">
              <div className="bg-blue-50 rounded-full p-4 shadow-md">
                <GraduationCap className="w-16 h-16 text-blue-600" />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
              Global Education Fair
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-indigo-900">
              Research Gateway 2025
            </h2>

            <div className="bg-gradient-to-r from-teal-400 to-cyan-400 text-gray-900 rounded-2xl p-6 mb-8 max-w-4xl mx-auto shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                🎓 ON SPOT ADMISSION AVAILABLE
              </h3>
              <p className="text-lg font-semibold">
                UK • Australia • Malaysia • Cyprus • Spain • Malta
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-sm">
              <div className="bg-white bg-opacity-80 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                <Users className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                <p className="font-semibold text-blue-600">Organizers</p>
                <p className="text-indigo-800">
                  Fly8 & Research and Higher Study Society, GSTU
                </p>
              </div>
              <div className="bg-white bg-opacity-80 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                <MapPin className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                <p className="font-semibold text-blue-600">Venue</p>
                <p className="text-indigo-800">
                  Gopalganj Science & Technology University
                </p>
              </div>
              <div className="bg-white bg-opacity-80 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                <Calendar className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                <p className="font-semibold text-blue-600">Date</p>
                <p className="text-indigo-800">16 September, 2025</p>
              </div>
              <div className="bg-white bg-opacity-80 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                <Clock className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                <p className="font-semibold text-blue-600">Time</p>
                <p className="text-indigo-800">10 AM - 5 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Progress Bar */}
          {/* Advanced Progress Bar with Full Connecting Line */}
          <div className="mb-12">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-slate-800">
                Registration Form
              </h2>
              <span className="text-sm font-medium text-slate-500">
                Step {currentStep} of 3
              </span>
            </div>

            {/* Stepper Wrapper */}
            <div className="relative">
              {/* Background Line */}
              <div className="absolute top-7 left-[7%] right-[7%] h-1 bg-slate-300 rounded-full"></div>

              {/* Animated Progress Line */}
              <div
                className="absolute top-7 left-[7%] h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-in-out"
                style={{ width: `${((currentStep - 1) / (3 - 1)) * 86}%` }}
              ></div>

              {/* Steps */}
              <div className="flex justify-between relative">
                {[1, 2, 3].map(step => (
                  <div
                    key={step}
                    className="flex flex-col items-center relative z-10"
                  >
                    {/* Step Circle */}
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center font-bold transition-all duration-500 border-2 shadow-lg ${
                        currentStep > step
                          ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white border-green-400'
                          : currentStep === step
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-blue-500 scale-110 ring-4 ring-blue-200'
                          : 'bg-white text-slate-500 border-slate-300'
                      }`}
                    >
                      {currentStep > step ? (
                        <CheckCircle className="w-7 h-7 animate-bounce" />
                      ) : (
                        step
                      )}
                    </div>

                    {/* Step Label */}
                    <p
                      className={`mt-3 text-sm font-semibold transition-colors duration-300 ${
                        currentStep === step
                          ? 'text-blue-600'
                          : currentStep > step
                          ? 'text-green-600'
                          : 'text-slate-500'
                      }`}
                    >
                      {step === 1
                        ? 'Student Info'
                        : step === 2
                        ? 'Academic Interest'
                        : 'Additional Details'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden transition-all duration-300 hover:shadow-2xl">
            {/* Step 1: Student Information */}
            {currentStep === 1 && (
              <div className="p-8 animate-fade-in">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-800">
                      Student Information
                    </h3>
                    <p className="text-indigo-600">
                      Please provide your basic details
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-blue-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 bg-blue-50/50"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-700 mb-2">
                      Gender
                    </label>
                    <div className="flex space-x-4">
                      {['Male', 'Female', 'Other'].map(option => (
                        <label
                          key={option}
                          className="flex items-center cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="gender"
                            value={option}
                            checked={formData.gender === option}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 focus:ring-blue-400"
                          />
                          <span className="ml-2 text-sm text-indigo-700">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-700 mb-2">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 bg-blue-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-700 mb-2">
                      Contact Number (WhatsApp preferred){' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-blue-400" />
                      <input
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 bg-blue-50/50"
                        placeholder="+880 1234567890"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-blue-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 bg-blue-50/50"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-700 mb-2">
                      University/College Name{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="universityName"
                      value={formData.universityName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 bg-blue-50/50"
                      placeholder="Enter your university name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-700 mb-2">
                      Department/Class <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 bg-blue-50/50"
                      placeholder="Enter your department"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-700 mb-2">
                      Student ID/Roll No.{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 bg-blue-50/50"
                      placeholder="Enter your student ID"
                      required
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold text-blue-700 mb-2">
                    Current Year
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {['1st', '2nd', '3rd', '4th', "Master's"].map(year => (
                      <label
                        key={year}
                        className="flex items-center cursor-pointer bg-blue-50 hover:bg-blue-100 p-3 rounded-xl transition-colors shadow-sm"
                      >
                        <input
                          type="radio"
                          name="currentYear"
                          value={year}
                          checked={formData.currentYear === year}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-400"
                        />
                        <span className="ml-2 text-sm text-indigo-700">
                          {year}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Academic & Career Interest */}
            {currentStep === 2 && (
              <div className="p-8 animate-fade-in">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-800">
                      Academic & Career Interest
                    </h3>
                    <p className="text-indigo-600">
                      Tell us about your study preferences
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-semibold text-blue-700 mb-3">
                      Interested Study Destination(s){' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="grid md:grid-cols-3 gap-3">
                      {[
                        'USA',
                        'UK',
                        'Canada',
                        'Australia',
                        'Europe',
                        'Asia (Japan, Malaysia, etc.)',
                      ].map(destination => (
                        <label
                          key={destination}
                          className="flex items-center bg-blue-50 hover:bg-blue-100 p-4 rounded-xl cursor-pointer transition-all duration-200 border-2 border-transparent hover:border-blue-300 shadow-sm"
                        >
                          <input
                            type="checkbox"
                            name="studyDestinations"
                            value={destination}
                            checked={formData.studyDestinations.includes(
                              destination
                            )}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 focus:ring-blue-400 rounded"
                          />
                          <span className="ml-3 text-sm font-medium text-indigo-700">
                            {destination}
                          </span>
                        </label>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="flex items-center bg-blue-50 hover:bg-blue-100 p-4 rounded-xl cursor-pointer transition-all duration-200 border-2 border-transparent hover:border-blue-300 shadow-sm">
                        <input
                          type="checkbox"
                          name="studyDestinations"
                          value="Others"
                          checked={formData.studyDestinations.includes(
                            'Others'
                          )}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-400 rounded"
                        />
                        <span className="ml-3 text-sm font-medium text-indigo-700 mr-3">
                          Others:
                        </span>
                        <input
                          type="text"
                          name="otherDestination"
                          value={formData.otherDestination}
                          onChange={handleInputChange}
                          placeholder="Specify other destination"
                          className="flex-1 px-3 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white"
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-700 mb-3">
                      Preferred Program Level{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="grid md:grid-cols-3 gap-3">
                      {[
                        "Bachelor's",
                        "Master's",
                        'PhD',
                        'Postdoctoral',
                        'Language/Short Course',
                      ].map(level => (
                        <label
                          key={level}
                          className="flex items-center bg-purple-50 hover:bg-purple-100 p-4 rounded-xl cursor-pointer transition-all duration-200 border-2 border-transparent hover:border-purple-300 shadow-sm"
                        >
                          <input
                            type="radio"
                            name="programLevel"
                            value={level}
                            checked={formData.programLevel === level}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-purple-600 focus:ring-purple-400"
                          />
                          <span className="ml-3 text-sm font-medium text-indigo-700">
                            {level}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-700 mb-3">
                      Areas of Interest <span className="text-red-500">*</span>{' '}
                      <span className="text-indigo-500 font-normal">
                        (Select multiple if applicable)
                      </span>
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        'Engineering & Technology',
                        'Business & Management',
                        'Medical & Health Sciences',
                        'Arts & Humanities',
                        'Social Sciences',
                        'Agriculture & Environmental Studies',
                      ].map(area => (
                        <label
                          key={area}
                          className="flex items-center bg-green-50 hover:bg-green-100 p-4 rounded-xl cursor-pointer transition-all duration-200 border-2 border-transparent hover:border-green-300 shadow-sm"
                        >
                          <input
                            type="checkbox"
                            name="areasOfInterest"
                            value={area}
                            checked={formData.areasOfInterest.includes(area)}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-green-600 focus:ring-green-400 rounded"
                          />
                          <span className="ml-3 text-sm font-medium text-indigo-700">
                            {area}
                          </span>
                        </label>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="flex items-center bg-green-50 hover:bg-green-100 p-4 rounded-xl cursor-pointer transition-all duration-200 border-2 border-transparent hover:border-green-300 shadow-sm">
                        <input
                          type="checkbox"
                          name="areasOfInterest"
                          value="Other"
                          checked={formData.areasOfInterest.includes('Other')}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-green-600 focus:ring-green-400 rounded"
                        />
                        <span className="ml-3 text-sm font-medium text-indigo-700 mr-3">
                          Other:
                        </span>
                        <input
                          type="text"
                          name="otherArea"
                          value={formData.otherArea}
                          onChange={handleInputChange}
                          placeholder="Specify other area"
                          className="flex-1 px-3 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Additional Details */}
            {currentStep === 3 && (
              <div className="p-8 animate-fade-in">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-800">
                      Additional Details
                    </h3>
                    <p className="text-indigo-600">
                      Final details to complete your registration
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-semibold text-blue-700 mb-3">
                      Do you have a passport?{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-4 flex-wrap">
                      {['Yes', 'No', 'Planning to take soon'].map(option => (
                        <label
                          key={option}
                          className="flex items-center cursor-pointer bg-blue-50 hover:bg-blue-100 p-3 rounded-xl transition-colors shadow-sm"
                        >
                          <input
                            type="radio"
                            name="hasPassport"
                            value={option}
                            checked={formData.hasPassport === option}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 focus:ring-blue-400"
                          />
                          <span className="ml-2 text-sm font-medium text-indigo-700">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-700 mb-3">
                      Do you have any IELTS/TOEFL/PTE/Language Test Score?{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-4">
                      <div className="flex gap-4 flex-wrap">
                        {['Yes', 'No', 'Planning to take soon'].map(option => (
                          <label
                            key={option}
                            className="flex items-center cursor-pointer bg-purple-50 hover:bg-purple-100 p-3 rounded-xl transition-colors shadow-sm"
                          >
                            <input
                              type="radio"
                              name="hasLanguageTest"
                              value={option}
                              checked={formData.hasLanguageTest === option}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-purple-600 focus:ring-purple-400"
                            />
                            <span className="ml-2 text-sm font-medium text-indigo-700">
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>

                      {formData.hasLanguageTest === 'Yes' && (
                        <div className="grid md:grid-cols-2 gap-4 p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl border border-purple-200 shadow-sm">
                          <div>
                            <label className="block text-sm font-semibold text-blue-700 mb-2">
                              Name of Language Test{' '}
                              <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="languageTestName"
                              value={formData.languageTestName}
                              onChange={handleInputChange}
                              placeholder="e.g., IELTS, TOEFL, PTE"
                              className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-blue-700 mb-2">
                              Your Score <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="languageTestScore"
                              value={formData.languageTestScore}
                              onChange={handleInputChange}
                              placeholder="e.g., 7.0, 90, 65"
                              className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-700 mb-3">
                      Have you applied abroad before?{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-4">
                      {['Yes', 'No'].map(option => (
                        <label
                          key={option}
                          className="flex items-center cursor-pointer bg-green-50 hover:bg-green-100 p-3 rounded-xl transition-colors shadow-sm"
                        >
                          <input
                            type="radio"
                            name="appliedAbroad"
                            value={option}
                            checked={formData.appliedAbroad === option}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-green-600 focus:ring-green-400"
                          />
                          <span className="ml-2 text-sm font-medium text-indigo-700">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-700 mb-3">
                      What do you expect to learn from this event?{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="expectations"
                      value={formData.expectations}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 bg-blue-50/50"
                      placeholder="Share your expectations from this education fair..."
                    />
                  </div>

                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-xl border-2 border-blue-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                      <h4 className="text-lg font-bold text-blue-800">
                        Consent & Agreement
                      </h4>
                    </div>
                    <label className="flex items-start cursor-pointer">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-blue-600 focus:ring-blue-400 rounded mt-1 flex-shrink-0"
                        required
                      />
                      <span className="ml-3 text-sm text-indigo-700 leading-relaxed">
                        <strong className="text-blue-600">I agree</strong> that
                        Fly8 and Research and Higher Study Society, GSTU may use
                        my information for event communication and higher study
                        support purposes, in compliance with data protection
                        policies.{' '}
                        <span className="text-red-500 font-semibold">*</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="bg-blue-50 px-8 py-6 border-t border-blue-100">
              <div className="flex justify-between items-center">
                <div>
                  {currentStep > 1 && (
                    <button
                      onClick={prevStep}
                      className="flex items-center px-6 py-3 bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-sm"
                    >
                      <ChevronLeft className="w-5 h-5 mr-2" />
                      Previous
                    </button>
                  )}
                </div>

                <div className="flex items-center space-x-4">
                  {!canProceedToNext() && (
                    <div className="flex items-center text-amber-600 bg-amber-100 px-4 py-2 rounded-lg shadow-sm">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">
                        Please fill all required fields
                      </span>
                    </div>
                  )}

                  {currentStep < 3 ? (
                    <button
                      onClick={nextStep}
                      disabled={!canProceedToNext()}
                      className={`flex items-center px-8 py-3 font-semibold rounded-xl transition-all duration-200 transform ${
                        canProceedToNext()
                          ? 'bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white hover:scale-105 shadow-md hover:shadow-lg'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Next Step
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={!validateStep3()}
                      className={`flex items-center px-8 py-4 font-bold text-lg rounded-xl transition-all duration-300 transform ${
                        validateStep3()
                          ? 'bg-gradient-to-r from-green-400 to-blue-400 hover:from-green-500 hover:to-blue-500 text-white hover:scale-105 shadow-lg hover:shadow-xl'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <GraduationCap className="w-6 h-6 mr-2" />
                      Register Now - FREE
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Form Requirements Info */}
          <div className="mt-6 bg-blue-100 border border-blue-200 rounded-xl p-4 shadow-sm">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-1">Registration Requirements:</p>
                <ul className="space-y-1 text-blue-700">
                  <li>
                    • All fields marked with{' '}
                    <span className="text-red-500 font-bold">*</span> are
                    mandatory
                  </li>
                  <li>
                    • Complete all steps to unlock the registration button
                  </li>
                  <li>• Registration is completely FREE for all students</li>
                  <li>
                    • You will receive confirmation details via email and
                    WhatsApp
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
