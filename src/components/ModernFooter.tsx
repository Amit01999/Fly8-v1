import React from 'react';
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ModernFooter = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top section with newsletter */}
      <div className="border-b border-gray-800 py-12">
        <div className="max-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Join Our Newsletter</h3>
              <p className="text-gray-400">
                Get updates on new opportunities, resources, and success stories
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white flex-grow focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="bg-primary hover:bg-primary/90 rounded-r-lg whitespace-nowrap">
                  Subscribe <ArrowRight size={16} className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="py-16">
        <div className="max-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Fly8
              </h2>
              <p className="text-gray-400 mb-6 pr-4">
                Fly8 is revolutionizing global education access by connecting
                ambitious students with world-class educational institutions and
                providing comprehensive support through every step of the
                journey.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    University Finder
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    Visa Assistance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    Accommodation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    Ticket Booking
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    Job Portal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    Fly8 Assistant
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    Student Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    Scholarship Database
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    University Rankings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    Visa Requirements
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    Cost Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Mail size={18} className="mr-3 text-gray-400 mt-1" />
                  <span className="text-gray-400">
                    support@fly8education.com
                  </span>
                </li>
                <li className="flex items-start">
                  <Phone size={18} className="mr-3 text-gray-400 mt-1" />
                  <span className="text-gray-400">+1 (800) 123-4567</span>
                </li>
                <li className="flex items-start">
                  <MapPin size={18} className="mr-3 text-gray-400 mt-1" />
                  <span className="text-gray-400">
                    123 Global Avenue, Suite 400
                    <br />
                    San Francisco, CA 94105
                    <br />
                    United States
                  </span>
                </li>
                <li className="flex items-start mt-4">
                  <Globe size={18} className="mr-3 text-gray-400 mt-1" />
                  <span className="text-gray-400">
                    With offices in London, Sydney, Toronto, Singapore, and
                    Mumbai
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Fly8 Education. All rights
              reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-4 text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                Accessibility
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
