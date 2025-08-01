import React from 'react';
import { motion } from 'framer-motion';
import {
  X,
  ChevronRight,
  GraduationCap,
  Building,
  FileText,
  Plane,
  CreditCard,
  Home,
  Briefcase,
  Stethoscope,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

type ServiceCategory = {
  title: string;
  icon: React.ReactNode;
  services: Array<{
    name: string;
    href: string;
  }>;
};

const serviceCategories: ServiceCategory[] = [
  {
    title: 'Student Services',
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    services: [
      {
        name: 'Profile Assessment',
        href: '/services/profile-assessment',
      },
      { name: ' Find Program', href: '/services/find-program' },
      {
        name: 'Find University',
        href: '/services/find-university',
      },
      { name: 'Find Scholarship', href: '/services/find-scholarship' },
      { name: 'Language Test', href: '/services/language-test' },
      { name: 'Education Loan', href: '/services/education-loan' },
    ],
  },
  {
    title: 'Document Services',
    icon: <FileText className="h-6 w-6 text-amber-500" />,
    services: [
      {
        name: 'Document Verification',
        href: '/services/document-verification',
      },
      {
        name: 'Application Review',
        href: '/services/application-review',
      },
      { name: 'Visa Assistance', href: '/services/visa-assistance' },
      { name: 'SOP & LOR Help', href: '/services/sop-lor' },
      {
        name: 'Medical Insurance',
        href: '/services/medical-insurance',
      },
    ],
  },
  {
    title: 'Travel & Accommodation',
    icon: <Plane className="h-6 w-6 text-blue-500" />,
    services: [
      { name: 'Flight Booking', href: '/services/flight-booking' },
      { name: 'Hotel Booking', href: '/services/hotel-booking' },
      { name: 'Student Housing', href: '/services/student-housing' },
      { name: 'Airport Pickup', href: '/services/airport-pickup' },
      { name: 'Travel Insurance', href: '/services/travel-insurance' },
      { name: 'Travel Package', href: '/services/travel-package' },
    ],
  },
  {
    title: 'Career Services',
    icon: <Briefcase className="h-6 w-6 text-emerald-500" />,
    services: [
      { name: 'Resume Building', href: '/services/resume-building' },
      {
        name: 'University Interview',
        href: '/services/university-interview',
      },
      { name: 'Visa Interview', href: '/services/visa-interview' },
      { name: 'Job Placement', href: '/services/job-placement' },
      { name: 'Global Events', href: '/services/global-events' },
    ],
  },
];

type ServicesDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ServicesDrawer = ({ isOpen, onClose }: ServicesDrawerProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={open => !open && onClose()}>
      <DialogContent className="sm:max-w-[85rem] h-[80vh] p-0 overflow-auto">
        <div className="sticky top-0 bg-white z-10 p-6 flex items-center justify-between border-b">
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Services
          </DialogTitle>
          <DialogDescription className="sr-only">
            Browse through our comprehensive education services
          </DialogDescription>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
          {serviceCategories.map(category => (
            <div key={category.title} className="space-y-4">
              <div className="flex items-center space-x-3">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-800">
                  {category.title}
                </h3>
              </div>
              <Separator />
              <div className="space-y-3">
                {category.services.map(service => (
                  <motion.a
                    key={service.name}
                    href={service.href}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span className="font-medium text-gray-700">
                      {service.name}
                    </span>
                    <ChevronRight className="h-5 w-5 text-primary" />
                  </motion.a>
                ))}

                {/* {category.title === 'Student Services' && (
                  <a
                    href="/services/student"
                    className="inline-flex items-center mt-4 px-6 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                  >
                    <span>Explore all student services</span>
                  </a>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServicesDrawer;
