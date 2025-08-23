// import React from 'react';
// import {
//   Facebook,
//   Instagram,
//   Twitter,
//   Linkedin,
//   Youtube,
//   Mail,
//   Phone,
//   MapPin,
//   Globe,
//   ArrowRight,
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import logo from '@/assets/logo/logo.png';

// const ModernFooter = () => {
//   return (
//     <footer className="bg-gray-900 text-white">
//       {/* Top section with newsletter */}
//       <div className="border-b border-gray-800 py-12">
//         <div className="max-container">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//             <div>
//               <h3 className="text-2xl font-bold mb-2">Join Our Newsletter</h3>
//               <p className="text-gray-400">
//                 Get updates on new opportunities, resources, and success stories
//               </p>
//             </div>
//             <div>
//               <form className="flex flex-col sm:flex-row gap-2">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white flex-grow focus:outline-none focus:ring-2 focus:ring-primary"
//                 />
//                 <Button className="bg-primary hover:bg-primary/90 rounded-r-lg whitespace-nowrap">
//                   Subscribe <ArrowRight size={16} className="ml-2" />
//                 </Button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main footer content */}
//       <div className="py-16">
//         <div className="max-container">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
//             <div className="lg:col-span-2">
//               <div className="relative w-20 h-14 mb-4">
//                 <img src={logo} alt="Fly8" />
//               </div>
//               <p className="text-gray-400 mb-6 pr-4">
//                 Fly8 is revolutionizing global education access by connecting
//                 ambitious students with world-class educational institutions and
//                 providing comprehensive support through every step of the
//                 journey.
//               </p>
//               <div className="flex space-x-4">
//                 <a
//                   href="#"
//                   className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
//                 >
//                   <Facebook size={18} />
//                 </a>
//                 <a
//                   href="#"
//                   className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
//                 >
//                   <Instagram size={18} />
//                 </a>
//                 <a
//                   href="#"
//                   className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
//                 >
//                   <Twitter size={18} />
//                 </a>
//                 <a
//                   href="#"
//                   className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
//                 >
//                   <Linkedin size={18} />
//                 </a>
//                 <a
//                   href="#"
//                   className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
//                 >
//                   <Youtube size={18} />
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold mb-4 text-white">
//                 Services
//               </h3>
//               <ul className="space-y-3">
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-primary transition-colors"
//                   >
//                     University Finder
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-primary transition-colors"
//                   >
//                     Visa Assistance
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-primary transition-colors"
//                   >
//                     Accommodation
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-primary transition-colors"
//                   >
//                     Ticket Booking
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-primary transition-colors"
//                   >
//                     Job Portal
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-primary transition-colors"
//                   >
//                     Fly8 Assistant
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold mb-4 text-white">
//                 Resources
//               </h3>
//               <ul className="space-y-3">
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-primary transition-colors"
//                   >
//                     Student Blog
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-primary transition-colors"
//                   >
//                     Scholarship Database
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-primary transition-colors"
//                   >
//                     University Rankings
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-primary transition-colors"
//                   >
//                     Visa Requirements
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-primary transition-colors"
//                   >
//                     Cost Calculator
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-primary transition-colors"
//                   >
//                     Success Stories
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold mb-4 text-white">
//                 Contact Us
//               </h3>
//               <ul className="space-y-3">
//                 <li className="flex items-start">
//                   <Mail size={18} className="mr-3 text-gray-400 mt-1" />
//                   <span className="text-gray-400">
//                     support@fly8education.com
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <Phone size={18} className="mr-3 text-gray-400 mt-1" />
//                   <span className="text-gray-400">+1 (800) 123-4567</span>
//                 </li>
//                 <li className="flex items-start">
//                   <MapPin size={18} className="mr-3 text-gray-400 mt-1" />
//                   <span className="text-gray-400">
//                     123 Global Avenue, Suite 400
//                     <br />
//                     San Francisco, CA 94105
//                     <br />
//                     United States
//                   </span>
//                 </li>
//                 <li className="flex items-start mt-4">
//                   <Globe size={18} className="mr-3 text-gray-400 mt-1" />
//                   <span className="text-gray-400">
//                     With offices in London, Sydney, Toronto, Singapore, and
//                     Mumbai
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="border-t border-gray-800 py-8">
//         <div className="max-container">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-500 text-sm mb-4 md:mb-0">
//               &copy; {new Date().getFullYear()} Fly8 Education. All rights
//               reserved.
//             </p>
//             <div className="flex flex-wrap justify-center space-x-4 text-sm">
//               <a
//                 href="#"
//                 className="text-gray-500 hover:text-gray-300 transition-colors"
//               >
//                 Terms of Service
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-500 hover:text-gray-300 transition-colors"
//               >
//                 Privacy Policy
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-500 hover:text-gray-300 transition-colors"
//               >
//                 Cookie Policy
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-500 hover:text-gray-300 transition-colors"
//               >
//                 Accessibility
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-500 hover:text-gray-300 transition-colors"
//               >
//                 Sitemap
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default ModernFooter;

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
import logo from '@/assets/logo/logo.png';

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
              <div className="relative w-20 h-14 mb-4">
                <img src={logo} alt="Fly8" />
              </div>
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
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mail size={18} className="mr-3 text-gray-400 mt-1" />
                  <span className="text-gray-400">contact@fly8.global</span>
                </li>
                <li className="flex items-start">
                  <Phone size={18} className="mr-3 text-gray-400 mt-1" />
                  <span className="text-gray-400">+880 1686-395927</span>
                </li>
                <li className="flex items-start">
                  <MapPin size={18} className="mr-3 text-gray-400 mt-1" />
                  <div className="text-gray-400">
                    <span className="font-medium">Head Office, Khulna</span>
                    <br />
                    Munna Tower, 6th Floor, Shib Bari
                    <br />
                    Khulna 9100, Bangladesh
                  </div>
                </li>
                {/* <li className="flex items-start">
                  <Globe size={18} className="mr-3 text-gray-400 mt-1" />
                  <div className="text-gray-400">
                    <span className="font-medium">Our Global Offices</span>
                    <ul className="mt-2 space-y-3">
                      {[
                        {
                          city: 'Dhaka',
                          address:
                            'House 6 (5th Floor), Road 2/B, J Block, Baridhara, Dhaka 1212',
                          country: 'Bangladesh',
                          countryCode: 'BD',
                          flag: '🇧🇩',
                        },
                        {
                          city: 'Khulna',
                          address:
                            'House 115/A, Road 2, Nirjon R/A, Nirala, Khulna 9100',
                          country: 'Bangladesh',
                          countryCode: 'BD',
                          flag: '🇧🇩',
                        },
                        {
                          city: 'Rajshahi',
                          address:
                            '3rd Floor of Dorjibari, Alokar Mor, Rajshahi',
                          country: 'Bangladesh',
                          countryCode: 'BD',
                          flag: '🇧🇩',
                        },
                        {
                          city: 'Chittagong',
                          address:
                            'Epic Emdad Heights Chattoshawri circle, Mehedibag (Ebl building) Flat B-8 (left side), Chittagong',
                          country: 'Bangladesh',
                          countryCode: 'BD',
                          flag: '🇧🇩',
                        },
                        {
                          city: 'London',
                          address:
                            'ACC Tech, Greenfield Road, East London Business Center, London, England E1 1EJ',
                          country: 'United Kingdom',
                          countryCode: 'GB',
                          flag: '🇬🇧',
                        },
                        {
                          city: 'Calgary',
                          address:
                            'Clagary Place, 330 5th Avenue SW, Suit 1800, Calgary, AB, T2P0L4',
                          country: 'Canada',
                          countryCode: 'CA',
                          flag: '🇨🇦',
                        },
                        {
                          city: 'Sydney',
                          address: '123 Global Avenue, Sydney',
                          country: 'Australia',
                          countryCode: 'AU',
                          flag: '🇦🇺',
                        },
                      ].map((office, idx) => (
                        <li
                          key={idx}
                          className="flex items-start hover:text-primary transition-colors"
                        >
                          <span className="mr-2">{office.flag}</span>
                          <div>
                            <span className="font-medium">{office.city}</span>
                            <br />
                            <span className="text-sm">{office.address}</span>
                            <br />
                            <span className="text-sm">
                              {office.country} ({office.countryCode})
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li> */}
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
