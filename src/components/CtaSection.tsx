
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Globe, Headphones, CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  "AI-powered program matching with 98% acceptance rate",
  "Exclusive application fee waivers at partner institutions",
  "24/7 expert guidance throughout your journey",
  "Comprehensive visa application assistance",
  "Access to $1.5+ million in scholarship opportunities",
  "Pre-departure orientation and arrival support services"
];

const CtaSection = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full hero-gradient opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-container relative z-10">
        <div className="bg-white shadow-xl rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <motion.div 
              className="p-8 md:p-12 bg-gradient-to-br from-primary to-accent text-white"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your International Education Adventure Today</h2>
              <p className="text-lg opacity-90 mb-8">
                Join over 125,000 students who've found their perfect educational match through our platform. Our dedicated advisors are ready to guide you every step of the way.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="mr-3 mt-1 text-white bg-white/20 rounded-full p-1" size={24} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 pt-6 border-t border-white/20">
                <h4 className="text-xl font-semibold mb-4">Prefer to talk with an advisor?</h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center">
                    <Globe className="mr-2" size={20} />
                    <span>Virtual Meeting</span>
                  </div>
                  <div className="flex items-center">
                    <Headphones className="mr-2" size={20} />
                    <span>Call: +1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarCheck className="mr-2" size={20} />
                    <span>Book Consultation</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="p-8 md:p-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Get Your Personalized Education Roadmap</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="Enter your full name as in passport"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="Enter your primary email address"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="Include country code"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
                    <input 
                      type="text" 
                      id="nationality" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="Your country of citizenship"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="studyLevel" className="block text-sm font-medium text-gray-700 mb-1">Desired Study Level</label>
                  <select 
                    id="studyLevel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  >
                    <option value="">Select your study level</option>
                    <option value="undergraduate">Bachelor's Degree</option>
                    <option value="graduate">Master's Degree</option>
                    <option value="phd">PhD/Doctoral</option>
                    <option value="diploma">Diploma/Certificate</option>
                    <option value="language">Language Programs</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="field" className="block text-sm font-medium text-gray-700 mb-1">Field of Interest</label>
                  <select 
                    id="field" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  >
                    <option value="">Select your field of interest</option>
                    <option value="business">Business & Management</option>
                    <option value="tech">Computer Science & IT</option>
                    <option value="engineering">Engineering</option>
                    <option value="arts">Arts & Humanities</option>
                    <option value="science">Natural Sciences</option>
                    <option value="health">Health Sciences</option>
                    <option value="social">Social Sciences</option>
                    <option value="education">Education</option>
                    <option value="law">Law</option>
                    <option value="agriculture">Agriculture & Forestry</option>
                  </select>
                </div>
                
                <Button 
                  className="primary-button w-full group mt-6" 
                  size="lg"
                >
                  Create My Education Roadmap
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </form>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
