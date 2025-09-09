import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Globe, Users, Award, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import SignUpStudent from '@/pages/auth/SignUpStudent';
import SignUPFrom from '@/pages/auth/SingUPFrom';

const FinalCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 z-0"></div>

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="max-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-6">
              Begin Your Global Education Journey Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join over 125,000 students who've found their perfect educational
              match with Fly8. Our platform makes international education
              accessible, affordable, and achievable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <Globe className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Global Access</h4>
                  <p className="text-gray-600 text-sm">
                    1,500+ institutions in 50+ countries
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-secondary/10 p-2 rounded-full mr-3">
                  <Users className="text-secondary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Expert Support</h4>
                  <p className="text-gray-600 text-sm">
                    24/7 guidance from application to arrival
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent/10 p-2 rounded-full mr-3">
                  <Award className="text-accent h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Scholarship Access</h4>
                  <p className="text-gray-600 text-sm">
                    $40M+ in scholarships secured for students
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-full mr-3">
                  <Check className="text-emerald-500 h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Guaranteed Results</h4>
                  <p className="text-gray-600 text-sm">
                    98% visa approval rate for our applicants
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup/student">
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                >
                  Get Started for Free
                </Button>
              </Link>

              <Button size="lg" variant="outline" className="rounded-full">
                <a
                  href="https://calendar.app.google/TyHZuwgs37EGZxW38"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a Consultation
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className=""
          >
            <SignUPFrom />
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              Ready to Take the First Step?
            </h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium text-gray-700 block mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium text-gray-700 block mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 block mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700 block mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="text-sm font-medium text-gray-700 block mb-1"
                >
                  Area of Interest
                </label>
                <select
                  id="interest"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Select your area of interest</option>
                  <option value="business">Business & Management</option>
                  <option value="engineering">Engineering & Technology</option>
                  <option value="medicine">Medicine & Health Sciences</option>
                  <option value="arts">Arts & Humanities</option>
                  <option value="science">Natural Sciences</option>
                  <option value="social">Social Sciences</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                Start My Application
              </Button>

              <p className="text-center text-sm text-gray-500">
                By submitting this form, you agree to our Terms of Service and
                Privacy Policy
              </p>
            </form>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
