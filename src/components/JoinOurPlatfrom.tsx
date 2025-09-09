import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface TabContentProps {
  title: string;
  benefits: string[];
  buttonText: string;
  buttonLink: string;
}

const TabContent: React.FC<TabContentProps> = ({
  title,
  benefits,
  buttonText,
  buttonLink,
}) => (
  <div className="space-y-6 p-6">
    <h3 className="text-xl font-bold text-slate-800">{title}</h3>
    <ul className="space-y-3">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-center gap-3">
          <span className="flex h-6 w-6 rounded-full bg-secondary/30 text-primary items-center justify-center">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 3L4.5 8.5L2 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-slate-700">{benefit}</span>
        </li>
      ))}
    </ul>
    <Link to={buttonLink}>
      <button className=" mt-3 w-full rounded-lg bg-primary py-3 text-sm font-medium text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl focus:ring-2 focus:ring-primary/50">
        {buttonText}
      </button>
    </Link>
  </div>
);

export default function JoinOurPlatfrom() {
  const [activeTab, setActiveTab] = useState('student');

  const tabs = [
    { id: 'student', label: 'Student' },
    { id: 'agent', label: 'Agent' },
    { id: 'university', label: 'University' },
  ];

  const tabContents = {
    student: {
      title: 'Student Benefits',
      benefits: [
        'Access to 5000+ universities worldwide',
        'Personalized program recommendations',
        'Application tracking and management',
      ],
      buttonText: 'Register as Student',
      buttonLink: '/signup/student',
    },
    agent: {
      title: 'Agent Benefits',
      benefits: [
        'Manage multiple student applications',
        'Direct communication with universities',
        'Commission tracking and reporting',
      ],
      buttonText: 'Register as Agent',
      buttonLink: '/signup/partner',
    },
    university: {
      title: 'University Benefits',
      benefits: [
        'Showcase programs to global students',
        'Streamlined application processing',
        'Analytics and recruitment insights',
      ],
      buttonText: 'Register as University',
      buttonLink: 'signup/institution',
    },
  };

  return (
    <section className="bg-gradient-to-br from-indigo-600 to-blue-700 py-20 text-white">
      <div className="container mx-auto px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-blue-400 bg-opacity-20 px-4 py-1 text-sm font-medium">
                Education Platform
              </span>
              <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Ready to Start <br />
                Your{' '}
                <span className="bg-gradient-to-r from-sky-200 to-white bg-clip-text text-transparent">
                  Journey?
                </span>
              </h2>
              <p className="max-w-xl text-lg text-blue-100 md:text-xl">
                Join thousands of students who have found their perfect
                educational path with us.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/signup/student">
                <button className="group flex h-12 items-center justify-center rounded-lg bg-white px-6 font-medium text-indigo-700 shadow-lg transition-all hover:bg-opacity-90">
                  Register as Student
                  <svg
                    className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </Link>
              <Link to="/signup/partner">
                <button className="flex h-12 items-center justify-center rounded-lg border-2 border-white border-opacity-50 bg-transparent px-6 font-medium text-white backdrop-blur-sm transition-all hover:bg-white hover:bg-opacity-10">
                  Register as Agent
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <div className="flex rounded-t-2xl bg-slate-50 p-5">
              <div className="bg-slate-300 w-full rounded-xl flex rounded-t-2xl ">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex-1 rounded-lg py-3 text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? 'text-slate-800 bg-secondary'
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-lg bg-white shadow-md"
                        style={{ zIndex: -1 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white">
              {Object.entries(tabContents).map(([key, content]) => (
                <div
                  key={key}
                  className={activeTab === key ? 'block' : 'hidden'}
                >
                  <TabContent {...content} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
