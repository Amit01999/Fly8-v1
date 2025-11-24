import React, { useState } from 'react';
import axios from 'axios';
import {
  CheckCircle,
  AlertCircle,
  Loader2,
  GraduationCap,
  Calendar,
  Users,
} from 'lucide-react';

// API base URL - adjust according to your environment
const API_BASE_URL = import.meta.env.VITE_BASE_URL;

interface FormData {
  fullName: string;
  email: string;
  whatsappNumber: string;
  academicLevel: string;
  otherAcademicLevel: string;
  previousFly8Course: string;
  fly8Relation: string;
  otherFly8Relation: string;
}

interface FormErrors {
  [key: string]: string;
}

const GermanCourseRegistration: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    whatsappNumber: '',
    academicLevel: '',
    otherAcademicLevel: '',
    previousFly8Course: '',
    fly8Relation: '',
    otherFly8Relation: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
    registrationNumber?: string;
  }>({ type: null, message: '' });

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
    ) {
      newErrors.email = 'Please enter a valid email address';
    }

    // WhatsApp Number validation
    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'WhatsApp number is required';
    } else if (
      !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
        formData.whatsappNumber
      )
    ) {
      newErrors.whatsappNumber = 'Please enter a valid phone number';
    }

    // Academic Level validation
    if (!formData.academicLevel) {
      newErrors.academicLevel = 'Please select your academic level';
    } else if (
      formData.academicLevel === 'Other' &&
      !formData.otherAcademicLevel.trim()
    ) {
      newErrors.otherAcademicLevel = 'Please specify your academic level';
    }

    // Previous Fly8 Course validation
    if (!formData.previousFly8Course) {
      newErrors.previousFly8Course = 'Please select an option';
    }

    // Fly8 Relation validation
    if (!formData.fly8Relation) {
      newErrors.fly8Relation = 'Please select your relation with Fly8';
    } else if (
      formData.fly8Relation === 'Other' &&
      !formData.otherFly8Relation.trim()
    ) {
      newErrors.otherFly8Relation = 'Please specify your relation';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: '' });

    // Validate form
    if (!validateForm()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fix the errors in the form',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${API_BASE_URL}/german-course/register`,
        formData
      );

      if (response.data.success) {
        setSubmitStatus({
          type: 'success',
          message: response.data.message,
          registrationNumber: response.data.registrationNumber,
        });

        // Reset form
        setFormData({
          fullName: '',
          email: '',
          whatsappNumber: '',
          academicLevel: '',
          otherAcademicLevel: '',
          previousFly8Course: '',
          fly8Relation: '',
          otherFly8Relation: '',
        });

        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        'Registration failed. Please try again later.';
      setSubmitStatus({
        type: 'error',
        message: errorMessage,
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mb-4">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            German Language Free Course
          </h1>
          <p className="text-lg text-gray-600 mb-4">Registration Form</p>

          {/* Course Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 max-w-xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
              <div className="flex items-center justify-center gap-2 text-blue-600">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">Start Date</span>
              </div>
              <p className="text-gray-700 mt-1">27 November, 2025</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
              <div className="flex items-center justify-center gap-2 text-purple-600">
                <Users className="w-5 h-5" />
                <span className="font-semibold">Total Classes</span>
              </div>
              <p className="text-gray-700 mt-1">8 Classes</p>
            </div>
          </div>
        </div>

        {/* Success/Error Messages */}
        {submitStatus.type === 'success' && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Registration Successful!
                </h3>
                <p className="text-green-700 mb-3">{submitStatus.message}</p>
                {submitStatus.registrationNumber && (
                  <div className="bg-white rounded-md p-4 border border-green-300">
                    <p className="text-sm text-gray-600 mb-1">
                      Your Registration Number:
                    </p>
                    <p className="text-2xl font-bold text-green-700">
                      {submitStatus.registrationNumber}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Please save this number for future reference!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {submitStatus.type === 'error' && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-red-900 mb-1">
                  Registration Failed
                </h3>
                <p className="text-sm text-red-700">{submitStatus.message}</p>
              </div>
            </div>
          </div>
        )}

        {/* Registration Form */}
        <div className="bg-white rounded-xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* WhatsApp Number */}
            <div>
              <label
                htmlFor="whatsappNumber"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="whatsappNumber"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                  errors.whatsappNumber ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="+880 1234567890"
              />
              {errors.whatsappNumber && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.whatsappNumber}
                </p>
              )}
            </div>

            {/* Current Academic Level */}
            <div>
              <label
                htmlFor="academicLevel"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Current Academic Level <span className="text-red-500">*</span>
              </label>
              <select
                id="academicLevel"
                name="academicLevel"
                value={formData.academicLevel}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                  errors.academicLevel ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select your academic level</option>
                <option value="HSC / Equivalent">HSC / Equivalent</option>
                <option value="Diploma">Diploma</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
                <option value="Postgraduate">Postgraduate</option>
                <option value="Job Holder">Job Holder</option>
                <option value="Other">Other</option>
              </select>
              {errors.academicLevel && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.academicLevel}
                </p>
              )}

              {/* Other Academic Level */}
              {formData.academicLevel === 'Other' && (
                <div className="mt-3">
                  <input
                    type="text"
                    name="otherAcademicLevel"
                    value={formData.otherAcademicLevel}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                      errors.otherAcademicLevel
                        ? 'border-red-500'
                        : 'border-gray-300'
                    }`}
                    placeholder="Please specify your academic level"
                  />
                  {errors.otherAcademicLevel && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.otherAcademicLevel}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Previous Fly8 Course */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Have you previously participated in Fly8 free courses?{' '}
                <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {[
                  'Yes – IELTS Course',
                  'Yes – Japanese Language Course',
                  'Yes – Both',
                  'No – This will be my first course',
                ].map(option => (
                  <label
                    key={option}
                    className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition"
                  >
                    <input
                      type="radio"
                      name="previousFly8Course"
                      value={option}
                      checked={formData.previousFly8Course === option}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
              {errors.previousFly8Course && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.previousFly8Course}
                </p>
              )}
            </div>

            {/* Fly8 Relation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                What's your relation with Fly8 Family?{' '}
                <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {['Member', 'Intern', 'Other'].map(option => (
                  <label
                    key={option}
                    className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition"
                  >
                    <input
                      type="radio"
                      name="fly8Relation"
                      value={option}
                      checked={formData.fly8Relation === option}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
              {errors.fly8Relation && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.fly8Relation}
                </p>
              )}

              {/* Other Fly8 Relation */}
              {formData.fly8Relation === 'Other' && (
                <div className="mt-3">
                  <input
                    type="text"
                    name="otherFly8Relation"
                    value={formData.otherFly8Relation}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                      errors.otherFly8Relation
                        ? 'border-red-500'
                        : 'border-gray-300'
                    }`}
                    placeholder="Please specify your relation"
                  />
                  {errors.otherFly8Relation && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.otherFly8Relation}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Register Now'
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            For any queries, contact us at{' '}
            <a
              href="mailto:contact@fly8.global"
              className="text-blue-600 hover:underline"
            >
              contact@fly8.global
            </a>{' '}
            or WhatsApp{' '}
            <a
              href="https://wa.me/8801784073483"
              className="text-blue-600 hover:underline"
            >
              +880 1784073483
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GermanCourseRegistration;
