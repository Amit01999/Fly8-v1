import React, { useState, useEffect } from 'react';
import {
  User,
  BookOpen,
  GraduationCap,
  FileText,
  Plane,
  Home,
  DollarSign,
  Briefcase,
} from 'lucide-react';
import plane from '../assets/picture/plane.png';
import { Link } from 'react-router-dom';

interface PlaneIconProps {
  className?: string;
  isActive?: boolean;
}

const PlaneIcon: React.FC<PlaneIconProps> = ({
  className = '',
  isActive = false,
}) => {
  return (
    <div
      className={`transition-all duration-500 ${
        isActive ? 'animate-float' : ''
      } ${className}`}
    >
      <img
        src={plane}
        alt="Plane Icon"
        className="w-14 h-14 drop-shadow-xl transform rotate-180 scale-y-[-1]"
      />
    </div>
  );
};

const HowItWork: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(
    new Array(8).fill(false)
  );

  const steps = [
    {
      id: 1,
      title: 'Profile Assessment',
      subtitle: 'Complete evaluation of your profile',
      description:
        'Submit your forms and documents for comprehensive assessment with real-time progress tracking.',
      buttonText: 'Start Assessment',
      icon: User,
      color: 'bg-blue-500',
      border: 'border-blue-500',
      text: 'text-blue-600',
    },
    {
      id: 2,
      title: 'Preparation Support',
      subtitle: 'Complete test and application prep',
      description:
        'Book language tests, classes, and get expert support for SOP, personal statements, and research proposals.',
      buttonText: 'Get Support',
      icon: BookOpen,
      color: 'bg-green-500',
      border: 'border-green-500',
      text: 'text-green-600',
    },
    {
      id: 3,
      title: 'Apply University',
      subtitle: 'Streamlined university applications',
      description:
        'Browse programs and submit applications with real-time tracking and comprehensive support.',
      buttonText: 'Apply Now',
      icon: GraduationCap,
      color: 'bg-purple-500',
      border: 'border-purple-500',
      text: 'text-purple-600',
    },
    {
      id: 4,
      title: 'Visa & Interview Support',
      subtitle: 'Complete visa assistance',
      description:
        'Get comprehensive support for visa applications, document preparation, interview training, and legal assistance.',
      buttonText: 'Get Visa Help',
      icon: FileText,
      color: 'bg-orange-500',
      border: 'border-orange-500',
      text: 'text-orange-600',
    },
    {
      id: 5,
      title: 'Ticket & Travel Support',
      subtitle: 'Complete travel arrangements',
      description:
        'Book air tickets, arrange airport pickup, get travel checklists, guide support, and complete travel packages.',
      buttonText: 'Book Travel',
      icon: Plane,
      color: 'bg-teal-500',
      border: 'border-teal-500',
      text: 'text-teal-600',
    },
    {
      id: 6,
      title: 'Find Accommodation',
      subtitle: 'Secure your ideal housing',
      description:
        'Browse property listings and apply for accommodation with real-time communication and tracking support.',
      buttonText: 'Find Housing',
      icon: Home,
      color: 'bg-indigo-500',
      border: 'border-indigo-500',
      text: 'text-indigo-600',
    },
    {
      id: 7,
      title: 'Education Loan',
      subtitle: 'Secure funding for education',
      description:
        'Explore loan opportunities and apply with comprehensive support and real-time application tracking.',
      buttonText: 'Apply For Loan',
      icon: DollarSign,
      color: 'bg-rose-500',
      border: 'border-rose-500',
      text: 'text-rose-600',
    },
    {
      id: 8,
      title: 'Find Jobs Abroad',
      subtitle: 'Launch your international career',
      description:
        'Discover job opportunities and apply with expert guidance and comprehensive application support.',
      buttonText: 'Find Jobs',
      icon: Briefcase,
      color: 'bg-emerald-500',
      border: 'border-emerald-500',
      text: 'text-emerald-600',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const headerHeight = 80; // Account for 80px header
      const sectionTop =
        (document.getElementById('journey-section')?.offsetTop || 0) -
        headerHeight;
      const sectionHeight =
        document.getElementById('journey-section')?.offsetHeight || 0;

      // Calculate progress through the section
      const progress = Math.max(
        0,
        Math.min(1, (scrollY - sectionTop + windowHeight / 2) / sectionHeight)
      );
      const newCurrentStep = Math.floor(progress * steps.length);

      setCurrentStep(Math.min(newCurrentStep, steps.length - 1));

      // Show steps progressively
      const newVisibleSteps = steps.map((_, index) => {
        return index <= newCurrentStep;
      });
      setVisibleSteps(newVisibleSteps);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <section
      id="journey-section"
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-25 to-pink-50 py-16 px-4"
      style={{ paddingTop: '100px' }} // Account for 80px header
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Your Study Abroad Journey
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            Complete Your Dream Education Path
          </p>
        </div>

        {/* Journey Timeline - Desktop */}
        <div className="hidden md:block relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-indigo-300 via-purple-400 to-pink-400 h-full shadow-sm"></div>

          {/* Animated Plane */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-out z-20"
            style={{
              top: `${(currentStep / (steps.length - 1)) * 85}%`,
            }}
          >
            <PlaneIcon isActive={true} />
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Connection Line from Circle to Card */}
                <div
                  className={`absolute top-6 w-20 h-0.5 bg-gradient-to-r from-indigo-300 to-purple-300 z-5 ${
                    index % 2 === 0 ? 'left-1/2 ml-6' : 'right-1/2 mr-6'
                  }`}
                ></div>

                {/* Step Icon Circle */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 ${
                    currentStep >= index ? `${step.border} ` : 'border-gray-300'
                  } rounded-full flex items-center justify-center z-10 shadow-lg transition-all duration-500`}
                >
                  <step.icon
                    className={`w-6 h-6 transition-colors duration-500 ${
                      currentStep >= index ? `${step.text}` : 'text-gray-400'
                    }`}
                  />
                </div>

                {/* Step Card */}
                <div
                  className={`flex ${
                    index % 2 === 0 ? 'justify-end' : 'justify-start'
                  } w-full`}
                >
                  <div className="w-1/2">
                    <StepCard
                      step={step}
                      isVisible={visibleSteps[index]}
                      side={index % 2 === 0 ? 'left' : 'right'}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Timeline - Mobile */}
        <div className="md:hidden relative">
          {/* Left Timeline Line */}
          <div className="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-indigo-300 via-purple-400 to-pink-400 h-full shadow-sm"></div>

          {/* Animated Plane */}
          {/* Animated Plane */}
          <div
            className="absolute left-6 transform -translate-x-1/2 transition-all duration-700 ease-out z-20"
            style={{
              top: `${(currentStep / (steps.length - 1)) * 85}%`,
            }}
          >
            <PlaneIcon isActive={true} />
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex items-start">
                {/* Step Icon Circle */}
                <div
                  className={`w-12 h-12 bg-white border-4 ${
                    currentStep >= index ? `${step.border}` : 'border-gray-300'
                  } rounded-full flex items-center justify-center shadow-lg z-10 flex-shrink-0 transition-all duration-500`}
                >
                  <step.icon
                    className={`w-6 h-6 transition-colors duration-500 ${
                      currentStep >= index ? `${step.text}` : 'text-gray-400'
                    }`}
                  />
                </div>

                {/* Step Card */}
                <div className="ml-4 flex-1">
                  <MobileStepCard step={step} isVisible={visibleSteps[index]} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 text-center">
          {currentStep >= steps.length - 1 ? (
            <div className="inline-flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-sky-400 rounded-full flex items-center justify-center mb-4 animate-bounce shadow-lg">
                <GraduationCap className="w-8 h-8 text-white animate-pulse" />
              </div>
              <p className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text font-bold text-lg">
                Launch Your Journey Today!✈️
              </p>
            </div>
          ) : (
            <>
              <div className="inline-flex space-x-2 mb-4">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index <= currentStep
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-110 shadow-md'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600">
                Step {currentStep + 1} of {steps.length}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

interface StepCardProps {
  step: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    icon: React.ComponentType<any>;
    color: string;
  };
  isVisible: boolean;
  side: 'left' | 'right';
}

const StepCard: React.FC<StepCardProps> = ({ step, isVisible, side }) => {
  return (
    <div
      className={`transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${side === 'left' ? 'text-right' : 'text-left'}`}
    >
      <div
        className={`inline-block bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 max-w-sm ${
          side === 'left' ? 'mr-20' : 'ml-20'
        } hover:scale-105`}
      >
        <div
          className={`flex items-center gap-3 mb-3 ${
            side === 'left' ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold ${step.color} shadow-lg`}
          >
            <step.icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-lg">{step.title}</h3>
            <p className="text-sm text-purple-600 font-medium">
              {step.subtitle}
            </p>
          </div>
        </div>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {step.description}
        </p>
        <Link
          to="/signup/student"
          className={`${step.color} text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg`}
        >
          {step.buttonText}
        </Link>
      </div>
    </div>
  );
};

interface MobileStepCardProps {
  step: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    icon: React.ComponentType<any>;
    color: string;
  };
  isVisible: boolean;
}

const MobileStepCard: React.FC<MobileStepCardProps> = ({ step, isVisible }) => {
  return (
    <div
      className={`transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold ${step.color} shadow-lg`}
          >
            <step.icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-base">{step.title}</h3>
            <p className="text-xs text-purple-600 font-medium">
              {step.subtitle}
            </p>
          </div>
        </div>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {step.description}
        </p>
        <Link
          to="/signup/student"
          className={`${step.color} text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 w-full sm:w-auto shadow-md hover:shadow-lg`}
        >
          {step.buttonText}
        </Link>
      </div>
    </div>
  );
};

export default HowItWork;
