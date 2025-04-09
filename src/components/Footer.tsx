
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, PhoneCall, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              EduGlobal
            </h2>
            <p className="text-gray-400 mb-6">
              Connecting ambitious students with world-class educational institutions for a brighter future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Programs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Universities</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Student Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Application Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Visa Information</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Scholarships</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Student Housing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="mr-3 text-gray-400" size={20} />
                <span className="text-gray-400">info@eduglobal.com</span>
              </div>
              <div className="flex items-start">
                <PhoneCall className="mr-3 text-gray-400" size={20} />
                <span className="text-gray-400">+1 (800) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-3 text-gray-400" size={20} />
                <span className="text-gray-400">
                  123 Education Street, Suite 400<br />
                  San Francisco, CA 94105<br />
                  United States
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} EduGlobal. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-3">
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
