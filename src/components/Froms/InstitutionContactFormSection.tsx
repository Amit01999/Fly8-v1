import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function InstitutionContactFormSection() {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error
  const formRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      setFormStatus(Math.random() > 0.2 ? 'success' : 'error');
    }, 1500);
  };

  const inputFields = [
    {
      id: 'name',
      label: 'Full Name',
      type: 'text',
      placeholder: 'Your name',
      colSpan: 1,
    },
    {
      id: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'your.email@example.com',
      colSpan: 1,
    },
    {
      id: 'university',
      label: 'University/Institution',
      type: 'text',
      placeholder: 'Your institution name',
      colSpan: 1,
    },
    {
      id: 'role',
      label: 'Your Role',
      type: 'select',
      placeholder: 'Select your role',
      colSpan: 1,
      options: [
        { value: '', label: 'Select your role' },
        { value: 'admissions', label: 'Admissions Officer' },
        { value: 'international', label: 'International Recruitment' },
        { value: 'dean', label: 'Dean/Department Head' },
        { value: 'faculty', label: 'Faculty Member' },
        { value: 'other', label: 'Other' },
      ],
    },
    {
      id: 'message',
      label: 'Message',
      type: 'textarea',
      placeholder: 'Tell us about your institution and how we can help...',
      colSpan: 2,
      rows: 5,
    },
  ];

  return (
    <section
      id="contact-form"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6 inline-block">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our team is ready to answer your questions and help you get started
            with our partnership program.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100"
        >
          {formStatus === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
              <p className="text-gray-600 mb-8">
                Your message has been received. We'll get back to you within 24
                hours.
              </p>
              <button
                onClick={() => setFormStatus('idle')}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all duration-300"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : formStatus === 'error' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full">
                <AlertCircle size={32} className="text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Something Went Wrong</h3>
              <p className="text-gray-600 mb-8">
                We couldn't send your message. Please try again or contact us
                directly.
              </p>
              <button
                onClick={() => setFormStatus('idle')}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all duration-300"
              >
                Try Again
              </button>
            </motion.div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inputFields.map(field => (
                  <div
                    key={field.id}
                    className={`${field.colSpan === 2 ? 'md:col-span-2' : ''}`}
                  >
                    <label
                      htmlFor={field.id}
                      className="block text-gray-700 font-medium mb-2"
                    >
                      {field.label}
                    </label>

                    {field.type === 'select' ? (
                      <div className="relative">
                        <select
                          id={field.id}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none bg-white transition-all duration-300"
                          disabled={formStatus === 'submitting'}
                        >
                          {field.options.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg
                            className="w-5 h-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    ) : field.type === 'textarea' ? (
                      <textarea
                        id={field.id}
                        rows={field.rows}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                        placeholder={field.placeholder}
                        disabled={formStatus === 'submitting'}
                      ></textarea>
                    ) : (
                      <input
                        type={field.type}
                        id={field.id}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                        placeholder={field.placeholder}
                        disabled={formStatus === 'submitting'}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center mt-2">
                <input
                  id="privacy-policy"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="privacy-policy"
                  className="ml-2 block text-sm text-gray-600"
                >
                  I agree to the{' '}
                  <a
                    href="#"
                    className="text-primary hover:text-indigo-800 font-medium"
                  >
                    privacy policy
                  </a>{' '}
                  and{' '}
                  <a
                    href="#"
                    className="text-primary hover:text-indigo-800 font-medium"
                  >
                    terms of service
                  </a>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full flex items-center justify-center bg-gradient-to-r from-primary to-primary hover:bg-indigo-700 text-white font-bold px-6 py-4 rounded-lg text-lg shadow-md transition duration-300 ${
                    formStatus === 'submitting'
                      ? 'opacity-80 cursor-not-allowed'
                      : ''
                  }`}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <Send className="ml-2" size={20} />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center text-sm text-gray-500 mt-4">
                <p>We usually respond within 24 hours</p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
