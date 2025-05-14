import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronDown,
  MapPin,
  Calendar,
  GraduationCap,
  Coins,
  Plane,
  Users,
  Library,
  BookOpen,
  Info,
  Globe,
  Search,
  FileQuestion,
  Landmark,
} from 'lucide-react';

import CountryOverview from '@/components/CountryDetailes/CountryOverview';
import uk from '@/Data/CountryDetailes';
import CountryAcademicsSection from '@/components/CountryDetailes/CountryAcademicsSection';
import CountryCostsSection from '@/components/CountryDetailes/CountryCostsSection';
import CountryVisaSection from '@/components/CountryDetailes/CountryVisaSection';
import CountryStudentLifeSection from '@/components/CountryDetailes/CountryStudentLifeSection';
import CountryFAQs from '@/components/CountryDetailes/CountryFAQs';
import CountryResourcesSection from '@/components/CountryDetailes/CountryResourcesSection';
import SectionHeader from '@/components/CountryDetailes/CountrySectionHeader';
import CountryQuickFacts from '@/components/CountryDetailes/CountryQuickFacts';
// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CountryDetails = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [country, setCountry] = useState<any>(uk);

  // References to each section for scrolling
  const sectionRefs = {
    overview: useRef<HTMLDivElement>(null),
    academics: useRef<HTMLDivElement>(null),
    costs: useRef<HTMLDivElement>(null),
    visa: useRef<HTMLDivElement>(null),
    studentLife: useRef<HTMLDivElement>(null),
    resources: useRef<HTMLDivElement>(null),
    faqs: useRef<HTMLDivElement>(null),
  };

  // Icons for the navigation
  const sectionIcons = {
    overview: <GraduationCap size={18} />,
    academics: <Library size={18} />,
    costs: <Coins size={18} />,
    visa: <Plane size={18} />,
    studentLife: <Users size={18} />,
    resources: <Landmark size={18} />,
    faqs: <FileQuestion size={18} />,
  };

  // Labels for the navigation
  const sectionLabels = {
    overview: 'Overview',
    academics: 'Academics',
    costs: 'Costs',
    visa: 'Visa',
    studentLife: 'Student Life',
    resources: 'Resources',
    faqs: 'FAQs',
  };

  // Scroll to section
  const scrollToSection = (section: string) => {
    const ref = sectionRefs[section as keyof typeof sectionRefs];
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adding offset for the navbar

      Object.keys(sectionRefs).forEach(section => {
        const ref = sectionRefs[section as keyof typeof sectionRefs];
        if (
          ref.current &&
          ref.current.offsetTop <= scrollPosition &&
          ref.current.offsetTop + ref.current.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div
        className="relative h-80 bg-cover bg-center flex items-end"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${country.heroImage})`,
        }}
      >
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center"
          >
            <img
              src={country.flagUrl}
              alt={`${country.name} flag`}
              className="w-16 h-auto rounded shadow-md mr-4"
            />
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Study in {country.name}
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-200 mt-4"
          >
            Your comprehensive guide to higher education in {country.name}
          </motion.p>
        </div>
      </div>

      {/* Sticky Navigation */}
      <div className="sticky top-16 z-30">
        {/* Glass effect background with refined border */}
        <div className="absolute inset-0 bg-indigo-200/60 backdrop-blur-lg border-b border-gray-200/80 shadow-sm"></div>

        <div className="container relative mx-auto px-4 md:px-6 lg:px-8">
          <div className="overflow-x-auto py-4 no-scrollbar">
            <ul className="flex items-center justify-center md:justify-start gap-3">
              {Object.keys(sectionLabels).map(section => {
                const isActive = activeSection === section;

                return (
                  <li key={section} className="inline-block">
                    <button
                      onClick={() => scrollToSection(section)}
                      className={`group relative flex items-center px-5 py-2.5 rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'text-white'
                          : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                      }`}
                    >
                      {/* Beautiful gradient background for active state */}
                      {isActive && (
                        <span className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/30 animate-subtle-pulse"></span>
                      )}

                      {/* Hover effect for inactive state */}
                      {!isActive && (
                        <span className="absolute inset-0 bg-gray-100 dark:bg-gray-800/60 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></span>
                      )}

                      {/* Icon with animation */}
                      <span
                        className={`relative z-10 mr-2.5 transition-all duration-300 ${
                          isActive
                            ? 'text-white scale-110'
                            : 'text-indigo-500 dark:text-indigo-400 group-hover:scale-110'
                        }`}
                      >
                        {sectionIcons[section as keyof typeof sectionIcons]}
                      </span>

                      {/* Label text */}
                      <span
                        className={`relative z-10 font-medium text-sm transition-all duration-300 ${
                          isActive ? 'text-white' : ''
                        }`}
                      >
                        {sectionLabels[section as keyof typeof sectionLabels]}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Quick Facts */}
        <CountryQuickFacts
          population={country.quickFacts.population}
          capital={country.quickFacts.capital}
          language={country.quickFacts.language}
          currency={country.quickFacts.currency}
          academicYear={country.quickFacts.academicYear}
          fallDeadline={country.keyDates.fallDeadline}
          springDeadline={country.keyDates.springDeadline}
          summerDeadline={country.keyDates.summerDeadline}
        ></CountryQuickFacts>

        {/* Overview Section */}
        <motion.div
          variants={containerVariants}
          ref={sectionRefs.overview}
          className="space-y-10 mb-16 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader>Overview</SectionHeader>
          <CountryOverview
            overviewSections={country.overviewSections}
          ></CountryOverview>
        </motion.div>

        {/* Academics Section */}
        <motion.div
          ref={sectionRefs.academics}
          className="mb-16 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader>Academics</SectionHeader>
          <CountryAcademicsSection
            name={country.name}
            topcourse={country.topcourse}
            topuniversites={country.topuniversites}
            intakes={country.intakes}
            deadlines={country.deadlines}
            notes={country.addmissionnotes}
            requirementsData={country.requirementsData}
            countryNote={country.CountrySpecificRequirements}
          ></CountryAcademicsSection>
        </motion.div>

        {/* Costs Section */}
        <motion.div
          ref={sectionRefs.costs}
          className="mb-16 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader>Costs</SectionHeader>
          <CountryCostsSection
            containerVariants={containerVariants}
            itemVariants={itemVariants}
            tuitionData={country.tuitionData}
            tuitionNote={country.tuitionNote}
            expenses={country.expenses}
            regionalCosts={country.regionalCosts}
            scholarships={country.scholarships}
            financialSupports={country.financialSupports}
            tips={country.TipsforScholarship}
          ></CountryCostsSection>
        </motion.div>

        {/* Visa Section */}
        <motion.div
          ref={sectionRefs.visa}
          className="mb-16 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader>Visa & Work Opportunities</SectionHeader>
          <CountryVisaSection
            containerVariants
            itemVariants
            ukVisaData={country.ukVisaData}
            visaStepsData={country.visaStepsData}
            workOpportunitiesData={country.workOpportunitiesData}
            jobMarketData={country.jobMarketData}
          ></CountryVisaSection>
        </motion.div>

        {/* Student Life Section */}
        <motion.div
          ref={sectionRefs.studentLife}
          className="mb-16 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader>Student Life</SectionHeader>
          {/* Best Cities */}
          <CountryStudentLifeSection
            itemVariants
            bestCitiesData={country.bestCitiesData}
            studentLifeData={country.studentLifeData}
            latestUpdates2025={country.latestUpdates2025}
            policyChanges2025={country.policyChanges2025}
          ></CountryStudentLifeSection>
        </motion.div>

        {/* Resources Section */}
        <motion.div
          ref={sectionRefs.resources}
          className="mb-16 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader>Resources</SectionHeader>
          <CountryResourcesSection
            itemVariants
            resourcecards={country.resourcecards}
            resourceofficialLinks={country.resourceofficialLinks}
            resourceguides={country.resourceguides}
            resourcetools={country.resourcetools}
          ></CountryResourcesSection>
        </motion.div>

        {/* FAQs*/}
        <motion.div
          ref={sectionRefs.faqs}
          className="mb-16 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader>FAQs</SectionHeader>
          <CountryFAQs itemVariants faqs={country.faqs}></CountryFAQs>
        </motion.div>

        {/* Back to Top Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-indigo-600 text-white px-5 py-3 rounded-md flex items-center shadow-lg hover:bg-indigo-700 transition-colors"
          >
            <ChevronDown className="transform rotate-180 mr-2" size={18} />
            Back to Top
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
