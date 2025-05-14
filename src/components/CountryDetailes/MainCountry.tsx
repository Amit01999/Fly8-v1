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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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

// Sample ukVisaData structure for UK country details
const countryData = {
  uk: {
    name: 'United Kingdom',
    flagUrl: 'https://flagcdn.com/w320/gb.png',
    heroImage:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200',
    quickFacts: {
      population: '67.8 million',
      capital: 'London',
      language: 'English',
      currency: 'Pound Sterling (£)',
      academicYear: 'September to June',
    },
    keyDates: {
      fallDeadline: 'January 15 (for most undergraduate courses)',
      springDeadline:
        'October 15 (for Oxford, Cambridge, medicine, dentistry, veterinary courses)',
      summerDeadline: 'June 30 (Late applications)',
    },
  },
};

// Component for section headers
const SectionHeader = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add animation when component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="relative mb-10 group">
      <div
        className={`absolute -inset-1 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 ${
          isVisible ? 'scale-100' : 'scale-95'
        }`}
      ></div>
      <div className="relative px-6 py-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-l-lg"></div>
        <div className="absolute -right-1 -top-1 w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full opacity-80"></div>
        <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 pl-4 flex items-center">
          {children}
        </h2>
      </div>
    </div>
  );
};

// Component for sub-section headers
const SubSectionHeader = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-2xl font-semibold text-gray-700 mb-4 mt-8">{children}</h3>
);

const CountryDetails = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const [activeSection, setActiveSection] = useState<string>('overview');

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

  // Default to UK if no country code is provided
  const country =
    countryData[countryCode as keyof typeof countryData] || countryData.uk;

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
        {/* Quick Facts and Key Dates Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Quick Facts Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-indigo-500"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <MapPin className="mr-2 text-indigo-600" size={20} />
              Quick Facts
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-600">Population</span>
                <span className="font-medium">
                  {country.quickFacts.population}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Capital</span>
                <span className="font-medium">
                  {country.quickFacts.capital}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Language</span>
                <span className="font-medium">
                  {country.quickFacts.language}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Currency</span>
                <span className="font-medium">
                  {country.quickFacts.currency}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Academic Year</span>
                <span className="font-medium">
                  {country.quickFacts.academicYear}
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Key Dates Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-amber-500"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Calendar className="mr-2 text-amber-600" size={20} />
              Key Application Dates
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-600">Main Deadline</span>
                <span className="font-medium">
                  {country.keyDates.fallDeadline}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Early Deadline</span>
                <span className="font-medium">
                  {country.keyDates.springDeadline}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Late Applications</span>
                <span className="font-medium">
                  {country.keyDates.summerDeadline}
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Main Content Sections */}

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
          {overviewSections.map((section, index) => (
            <motion.section
              key={index}
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`bg-${section.color} p-3 rounded-full`}>
                  {section.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600">{section.description}</p>

                {/* If section has points */}
                {section.points && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {section.points.map((point, idx) => (
                      <div
                        key={idx}
                        className="bg-blue-50 rounded-lg p-4 border border-blue-100"
                      >
                        <h3 className="font-semibold text-blue-800 mb-2">
                          {point.heading}
                        </h3>
                        <p className="text-gray-600 text-sm">{point.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* If section has cards */}
                {section.cards && (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {section.cards.map((card, idx) => (
                      <Card
                        key={idx}
                        className={`border-t-4 border-t-indigo-300`}
                      >
                        <CardHeader>
                          <CardTitle className="text-lg">
                            {card.title}
                          </CardTitle>
                          <CardDescription>{card.subtitle}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          {card.points.map((pt, pidx) => (
                            <p key={pidx} className="text-sm">
                              • {pt}
                            </p>
                          ))}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}

                {/* Note */}
                {section.note && (
                  <p
                    className={`text-gray-600 text-sm bg-${section.note.color} border border-${section.note.border} rounded-lg p-4`}
                  >
                    <strong className={`text-${section.note.textColor}`}>
                      Note:
                    </strong>{' '}
                    {section.note.text}
                  </p>
                )}
              </div>
            </motion.section>
          ))}
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

          <motion.div variants={containerVariants} className="space-y-10">
            {/* Top Courses */}
            <motion.section
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Top Courses to Study in the UK
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600">
                  The UK excels in various academic disciplines, offering
                  world-class education across fields.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {topcourse.map((course, index) => (
                    <div
                      key={index}
                      className={`${course.color} border rounded-lg p-4`}
                    >
                      <h3 className="font-semibold mb-1">{course.title}</h3>
                      <p className="text-sm text-gray-600">{course.details}</p>
                    </div>
                  ))}
                </div>

                <p className="text-gray-600 text-sm">
                  UK universities are particularly renowned for
                  research-intensive programs and innovative learning approaches
                  that combine theory with practical experience.
                </p>
              </div>
            </motion.section>

            {/* Top Universities */}
            <motion.section
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Top Universities in the UK
                </h2>
              </div>

              <div className="space-y-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-xl overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          University
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Location
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Global Rank
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Notable For
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {topuniversites.map((uni, index) => (
                        <tr key={index}>
                          <td className="py-3 px-4 text-sm font-medium text-gray-900">
                            {uni.name}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-500">
                            {uni.location}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-500">
                            {uni.rank}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-500">
                            {uni.notable}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-600 text-sm bg-blue-50 border border-blue-100 rounded-lg p-4">
                  <strong>UK's University Groups:</strong> The Russell Group
                  represents 24 research-intensive universities, while the
                  Million+ group focuses on modern universities. The UK also has
                  specialized institutions for arts, medicine, and business.
                </p>
              </div>
            </motion.section>

            {/* Intakes and Deadlines */}
            <motion.section
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-orange-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Intakes and Application Deadlines
                </h2>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Main Intakes */}
                  <div className="bg-white rounded-xl border p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-4 text-indigo-700">
                      Main Intakes
                    </h3>
                    <ul className="space-y-3">
                      {intakes.map(({ label, description, icon }) => (
                        <li key={label} className="flex items-start gap-2">
                          <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-medium shrink-0 mt-0.5">
                            {icon}
                          </div>
                          <div>
                            <span className="font-medium">{label}</span>
                            <p className="text-sm text-gray-500">
                              {description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Deadlines */}
                  <div className="bg-white rounded-xl border p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-4 text-rose-700">
                      Key Deadlines
                    </h3>
                    <ul className="space-y-3">
                      {deadlines.map(({ title, icon, details }) => (
                        <li key={title} className="flex items-start gap-2">
                          <div className="h-6 w-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 font-medium shrink-0 mt-0.5">
                            {icon}
                          </div>
                          <div>
                            <span className="font-medium">{title}</span>
                            {details.map((d, i) => (
                              <p key={i} className="text-sm text-gray-500">
                                {d}
                              </p>
                            ))}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Notes Section */}
                <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-sm">
                  <h4 className="font-semibold text-amber-700 mb-2">
                    Important Notes on Timing
                  </h4>
                  <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    {notes.map((note, idx) => (
                      <li key={idx}>{note}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Admission Requirements */}
            <motion.section
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Info className="h-6 w-6 text-teal-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Admission Requirements
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600">
                  Requirements vary by institution and program level, but
                  generally include:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {requirementsData.map(req => (
                    <div
                      key={req.title}
                      className="bg-white rounded-xl border shadow-sm"
                    >
                      <div
                        className={`${req.color} text-white p-4 rounded-t-xl`}
                      >
                        <h3 className="font-bold text-lg">{req.title}</h3>
                      </div>
                      <div className="p-5 space-y-3">
                        {req.items.map((item, index) => (
                          <p key={index} className="text-sm">
                            • {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-teal-50 border border-teal-100 rounded-lg p-4 text-sm">
                  <h4 className="font-semibold text-teal-700 mb-2">
                    Country-Specific Requirements
                  </h4>
                  <p className="text-gray-600">{countryNote}</p>
                </div>
              </div>
            </motion.section>
          </motion.div>
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

          <motion.div variants={containerVariants} className="space-y-10">
            {/* Tuition Fees */}
            <motion.section
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-100 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-amber-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Tuition Fees
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600">
                  International student fees vary by university, course, and
                  level of study.
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-xl overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Level of Study
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Range (Per Year)
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Average Cost
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Notes
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {tuitionData.map((row, index) => (
                        <tr key={index}>
                          <td className="py-3 px-4 text-sm font-medium text-gray-900">
                            {row.level}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-500">
                            {row.range}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-500">
                            {row.average}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-500">
                            {row.notes}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-600 text-sm bg-amber-50 border border-amber-100 rounded-lg p-4">
                  <strong>Note:</strong> {tuitionNote}
                </p>
              </div>
            </motion.section>
            {/* Cost of Living */}
            <motion.section
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Cost of Living in the UK
                </h2>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Monthly Expenses */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Monthly Expenses (Approximate)
                    </h3>
                    <div className="space-y-3">
                      {expenses.map(expense => (
                        <div key={expense.label}>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">
                              {expense.label}
                            </span>
                            <span className="font-medium">{expense.range}</span>
                          </div>
                          <div className="w-full bg-gray-200 h-1 rounded">
                            <div
                              className="bg-blue-500 h-1 rounded"
                              style={{ width: `${expense.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Regional Comparison */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Regional Comparison
                    </h3>
                    <div className="space-y-4">
                      {regionalCosts.map(region => (
                        <div
                          key={region.region}
                          className="bg-white rounded-lg border p-4"
                        >
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">{region.region}</span>
                            <span className={`${region.color} font-medium`}>
                              {region.level}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            Monthly budget: {region.range}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Financial Requirements */}
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm">
                  <h4 className="font-semibold text-blue-700 mb-2">
                    Financial Requirements for Student Visa
                  </h4>
                  <p className="text-gray-600 mb-2">
                    For a student visa, you need to show you have enough money
                    to pay your course fees and living costs:
                  </p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Course fees for first year</li>
                    <li>
                      • Living costs: £1,334/month (£1,023/month outside London)
                      for up to 9 months
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>
            {/* Scholarships */}
            <motion.section
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Scholarships and Financial Aid
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600">
                  Various scholarships and financial aid options are available
                  for international students studying in the UK.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {scholarships.map((scholarship, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-br from-${
                        scholarship.color
                      }-50 to-${
                        scholarship.color === 'blue' ? 'cyan' : 'purple'
                      }-50 rounded-xl border border-${
                        scholarship.color
                      }-100 p-6`}
                    >
                      <h3
                        className={`text-xl font-bold mb-4 text-${scholarship.color}-800`}
                      >
                        {scholarship.category}
                      </h3>
                      <ul className="space-y-3">
                        {scholarship.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="bg-white rounded-lg p-3 shadow-sm"
                          >
                            <h4 className="font-semibold">{item.title}</h4>
                            <p className="text-sm text-gray-600">
                              {item.description}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-xl border p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">
                    Other Financial Support Options
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {financialSupports.map((support, i) => (
                      <div key={i} className="bg-gray-50 rounded-lg p-3">
                        <h4 className="font-semibold">{support.title}</h4>
                        <p className="text-sm text-gray-600">
                          {support.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-sm">
                  <h4 className="font-semibold text-amber-700 mb-2">
                    Tips for Scholarship Applications
                  </h4>
                  <ul className="space-y-1 text-gray-600">
                    {tips.map((tip, i) => (
                      <li key={i}>• {tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>
          </motion.div>
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
          {/* Visa Requirements */}
          <motion.div variants={containerVariants} className="space-y-10">
            <motion.section
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {ukVisaData.title}
                </h2>
              </div>

              <div className="space-y-6">
                {/* Intro */}
                <p className="text-gray-600">{ukVisaData.intro}</p>

                {/* Requirement Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {ukVisaData.sections.map((sec, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl border shadow-sm"
                    >
                      <div
                        className={`p-4 rounded-t-xl text-white`}
                        style={{ backgroundColor: sec.color }}
                      >
                        <h3 className="font-bold text-lg">{sec.title}</h3>
                      </div>
                      <div className="p-5 space-y-3 text-sm">
                        {sec.items.map((item, idx) => (
                          <p key={idx}>• {item}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Facts Box */}
                <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 text-sm">
                  <h4 className="font-semibold text-indigo-700 mb-2">
                    Important Facts
                  </h4>
                  <ul className="space-y-1 text-gray-600">
                    {ukVisaData.facts.map((fact, idx) => (
                      <li key={idx}>• {fact}</li>
                    ))}
                  </ul>
                </div>

                {/* Benefits Section */}
                <div className="p-5 bg-green-50 border border-green-100 rounded-lg text-sm">
                  <h4 className="font-semibold text-green-700 mb-3">
                    Student Visa Benefits
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {ukVisaData.benefits.map((b, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-3 rounded-lg shadow-sm"
                      >
                        <h5 className="font-medium mb-1">{b.title}</h5>
                        <p className="text-gray-600">{b.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          </motion.div>
          {/* Visa Process */}
          <motion.section
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-100 p-3 rounded-full">
                <Info className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Student Visa Application Process
              </h2>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200"></div>
                <div className="space-y-8">
                  {visaStepsData.map((item, index) => (
                    <div key={index} className="relative flex items-start">
                      <div
                        className={`absolute left-8 -translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full ${item.color} ring-4 ring-white`}
                      ></div>
                      <div className="ml-12">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="mt-1 text-gray-600">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-red-50 border border-red-100 rounded-lg p-4 text-sm">
                <h4 className="font-semibold text-red-700 mb-2">
                  Common Visa Rejection Reasons
                </h4>
                <ul className="space-y-1 text-gray-600">
                  <li>
                    • Insufficient financial evidence or funds not held for
                    required period
                  </li>
                  <li>• Missing or incomplete documentation</li>
                  <li>• Inconsistencies in application information</li>
                  <li>• Previous immigration history issues</li>
                  <li>• Failure to demonstrate genuine student status</li>
                  <li>• Insufficient English language proficiency</li>
                </ul>
              </div>
            </div>
          </motion.section>
          {/* Work Opportunities */}
          <motion.section
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-3 rounded-full">
                <GraduationCap className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Work Opportunities
              </h2>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {workOpportunitiesData.map((section, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border shadow-sm"
                  >
                    <div
                      className={`${section.color} text-white p-4 rounded-t-xl`}
                    >
                      <h3 className="font-bold text-lg">{section.title}</h3>
                    </div>
                    <div className="p-5 space-y-3 text-sm">
                      {section.sections.map((sub, idx) => (
                        <div key={idx}>
                          <p className="font-medium mt-4">{sub.heading}</p>
                          {sub.points.map((point, i) => (
                            <p key={i}>• {point}</p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
                <h4 className="font-semibold text-blue-800 mb-3">
                  UK Job Market for International Graduates
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium mb-2">In-Demand Sectors</h5>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      {jobMarketData.sectors.map((sector, index) => (
                        <li key={index}>• {sector}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">
                      Average Graduate Salaries
                    </h5>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      {jobMarketData.salaries.map((salary, index) => (
                        <li key={index}>• {salary}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-100">
                <CardHeader>
                  <CardTitle className="text-green-800">
                    2025 Update: Post-Study Work Opportunities
                  </CardTitle>
                  <CardDescription>
                    Latest information for international graduates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    The UK Government continues to support the Graduate Route
                    visa, allowing international students to work or seek
                    employment after completing their degrees. This demonstrates
                    the UK's commitment to attracting international talent and
                    providing genuine career development pathways for graduates.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.section>
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
          <motion.section
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Best Cities for International Students
              </h2>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bestCitiesData.map((city, index) => (
                  <div
                    key={index}
                    className="rounded-xl overflow-hidden bg-white shadow-sm border"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={city.image}
                        alt={`${city.city} cityscape`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-1">{city.city}</h3>
                      <p className="text-sm text-blue-600 mb-2">
                        {city.universities}
                      </p>
                      <p className="text-sm text-gray-600 mb-3">
                        {city.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {city.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
          {/* Student Life */}
          <motion.section
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`${studentLifeData.icon.bg} p-3 rounded-full`}>
                {studentLifeData.icon.component}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {studentLifeData.title}
              </h2>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {studentLifeData.sections
                    .slice(0, 2)
                    .map((section, index) => (
                      <div
                        key={index}
                        className={`${section.bg} rounded-xl border ${section.border} p-5`}
                      >
                        <h3
                          className={`text-xl font-bold mb-4 ${section.textColor}`}
                        >
                          {section.title}
                        </h3>
                        <ul className="space-y-3">
                          {section.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex gap-3 items-start"
                            >
                              <div
                                className={`${section.bg.replace(
                                  '50',
                                  '100'
                                )} p-1 rounded-full mt-0.5`}
                              >
                                <svg
                                  className={`w-4 h-4 ${section.textColor}`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                              <div>
                                <span className="font-medium">
                                  {item.title}
                                </span>
                                <p className="text-sm text-gray-600">
                                  {item.description}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>

                <div className="space-y-6">
                  {studentLifeData.sections.slice(2).map((section, index) => (
                    <div
                      key={index}
                      className={`${section.bg} rounded-xl border ${section.border} p-5`}
                    >
                      <h3
                        className={`text-xl font-bold mb-4 ${section.textColor}`}
                      >
                        {section.title}
                      </h3>
                      {section.title === 'Accommodation Options' ? (
                        <div className="space-y-4">
                          {section.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="bg-white rounded-lg p-3 shadow-sm"
                            >
                              <h4 className="font-semibold">{item.title}</h4>
                              <p className="text-sm text-gray-600">
                                {item.description}
                              </p>
                              {item.badges && (
                                <div className="mt-2 flex items-center gap-2">
                                  {item.badges.map((badge, badgeIndex) => (
                                    <span
                                      key={badgeIndex}
                                      className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full"
                                    >
                                      {badge}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {section.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex gap-3 items-start"
                            >
                              <div
                                className={`${section.bg.replace(
                                  '50',
                                  '100'
                                )} p-1 rounded-full mt-0.5`}
                              >
                                <svg
                                  className={`w-4 h-4 ${section.textColor}`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                              <div>
                                <span className="font-medium">
                                  {item.title}
                                </span>
                                <p className="text-sm text-gray-600">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100">
                <CardHeader>
                  <CardTitle className="text-indigo-800">
                    {studentLifeData.additionalInfo.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">
                    {studentLifeData.additionalInfo.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {studentLifeData.additionalInfo.items.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg p-3 shadow-sm"
                      >
                        <h4 className="font-semibold">{item.title}</h4>
                        <ul className="text-sm text-gray-600 space-y-1 mt-2">
                          {item.points.map((point, pointIndex) => (
                            <li key={pointIndex}>• {point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.section>
          {/* Latest Updates */}
          <motion.section
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {latestUpdates2025.map((update, index) => (
                <Card
                  key={index}
                  className={`bg-gradient-to-br ${update.gradient} ${update.border}`}
                >
                  <CardHeader>
                    <Badge className={`w-fit mb-2 ${update.badgeColor}`}>
                      {update.category}
                    </Badge>
                    <CardTitle className={`${update.titleColor}`}>
                      {update.title}
                    </CardTitle>
                    <CardDescription>{update.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{update.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-red-50 border border-red-100 rounded-lg p-5">
              <h3 className="text-xl font-bold mb-4 text-red-800">
                Important Policy Changes
              </h3>
              <div className="space-y-4">
                {policyChanges2025.map((policy, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-sm"
                  >
                    <h4 className="font-semibold">{policy.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {policy.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
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

          <motion.section
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Helpful Resources and Tools
              </h2>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-blue-800">
                      Course Finder
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-gray-600">
                      Search across all UK universities to find your perfect
                      course based on subject, location, and entry requirements.
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Find Your Course
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-50 to-fuchsia-50 border-purple-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-purple-800">
                      University Rankings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-gray-600">
                      Compare UK universities across various metrics including
                      teaching quality, research, and student satisfaction.
                    </p>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      View Rankings
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-green-800">
                      Visa Checklist
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-gray-600">
                      Interactive tool to help you prepare all necessary
                      documents and meet requirements for your UK student visa.
                    </p>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Get Checklist
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-sm border p-5">
                  <h3 className="text-xl font-bold mb-4">Official Websites</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <a href="#" className="text-blue-600 hover:underline">
                        UCAS - Universities and Colleges Admissions Service
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <a href="#" className="text-blue-600 hover:underline">
                        UK Visas and Immigration
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <a href="#" className="text-blue-600 hover:underline">
                        British Council
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <a href="#" className="text-blue-600 hover:underline">
                        Study UK - British Council
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <a href="#" className="text-blue-600 hover:underline">
                        UK Council for International Student Affairs (UKCISA)
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-sm border p-5">
                  <h3 className="text-xl font-bold mb-4">
                    Downloadable Guides
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <svg
                        className="w-5 h-5 text-red-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 4v12h10V7.414L11.586 4H5zm1 1h4.586L14 8.414V15H6V5z"
                          clipRule="evenodd"
                        ></path>
                        <path
                          fillRule="evenodd"
                          d="M8 10a1 1 0 100 2h4a1 1 0 100-2H8z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <a href="#" className="text-blue-600 hover:underline">
                        UK University Application Guide (PDF)
                      </a>
                    </li>
                    <li className="flex gap-3">
                      <svg
                        className="w-5 h-5 text-red-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 4v12h10V7.414L11.586 4H5zm1 1h4.586L14 8.414V15H6V5z"
                          clipRule="evenodd"
                        ></path>
                        <path
                          fillRule="evenodd"
                          d="M8 10a1 1 0 100 2h4a1 1 0 100-2H8z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <a href="#" className="text-blue-600 hover:underline">
                        Student Visa Application Walkthrough (PDF)
                      </a>
                    </li>
                    <li className="flex gap-3">
                      <svg
                        className="w-5 h-5 text-red-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 4v12h10V7.414L11.586 4H5zm1 1h4.586L14 8.414V15H6V5z"
                          clipRule="evenodd"
                        ></path>
                        <path
                          fillRule="evenodd"
                          d="M8 10a1 1 0 100 2h4a1 1 0 100-2H8z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <a href="#" className="text-blue-600 hover:underline">
                        UK Accommodation Guide (PDF)
                      </a>
                    </li>
                    <li className="flex gap-3">
                      <svg
                        className="w-5 h-5 text-red-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 4v12h10V7.414L11.586 4H5zm1 1h4.586L14 8.414V15H6V5z"
                          clipRule="evenodd"
                        ></path>
                        <path
                          fillRule="evenodd"
                          d="M8 10a1 1 0 100 2h4a1 1 0 100-2H8z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <a href="#" className="text-blue-600 hover:underline">
                        Scholarship Application Templates (PDF)
                      </a>
                    </li>
                    <li className="flex gap-3">
                      <svg
                        className="w-5 h-5 text-red-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 4v12h10V7.414L11.586 4H5zm1 1h4.586L14 8.414V15H6V5z"
                          clipRule="evenodd"
                        ></path>
                        <path
                          fillRule="evenodd"
                          d="M8 10a1 1 0 100 2h4a1 1 0 100-2H8z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <a href="#" className="text-blue-600 hover:underline">
                        Pre-departure Checklist (PDF)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border border-amber-100 p-6">
                <h3 className="text-xl font-bold mb-4 text-amber-800">
                  Interactive Tools
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-semibold">Cost Calculator</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Estimate your total cost of studying including tuition,
                      living expenses, and travel.
                    </p>
                    <Button variant="outline" className="w-full mt-3">
                      Calculate Costs
                    </Button>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-semibold">Scholarship Matcher</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Find scholarships you're eligible for based on your
                      profile and study plans.
                    </p>
                    <Button variant="outline" className="w-full mt-3">
                      Find Scholarships
                    </Button>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-semibold">Document Checker</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Verify you have all required documents for your
                      application and visa process.
                    </p>
                    <Button variant="outline" className="w-full mt-3">
                      Check Documents
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
        {/* FAQs*/}
        <motion.div
          ref={sectionRefs.faqs}
          className="mb-16 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.section
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
          >
            <SectionHeader>FAQs</SectionHeader>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-indigo-100 p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="hover:no-underline py-4">
                      <span className="text-left font-medium">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-1 rounded-full mt-1">
                    <Info className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-gray-600">
                    Have more questions? Contact our student advisors for
                    personalized assistance with your UK study plans. We're here
                    to help you navigate every step of your educational journey.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
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
//my ukVisaData
const overviewSections = [
  {
    icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
    title: 'Why Study in the UK?',
    color: 'blue-100',
    points: [
      {
        heading: 'World-Renowned Universities',
        text: "Home to some of the world's oldest and most prestigious institutions, with 28 universities in the global top 200.",
      },
      {
        heading: 'Shorter Duration Programs',
        text: "Bachelor's degrees typically take 3 years, while Master's programs are often completed in just 1 year.",
      },
      {
        heading: 'Post-Study Work Options',
        text: 'The Graduate Route allows graduates to work or look for work for 2 years (3 years for PhD graduates).',
      },
      {
        heading: 'Cultural Experience',
        text: 'Experience rich history, diverse cultures, and explore Europe during breaks with convenient travel options.',
      },
    ],
    description:
      'The United Kingdom offers an educational experience that combines centuries of excellence with cutting-edge innovation, making it a top destination for international students.',
  },
  {
    icon: <BookOpen className="h-6 w-6 text-indigo-600" />,
    title: 'Education System at a Glance',
    color: 'indigo-100',
    description:
      'The UK education system is recognized globally for its high standards and quality assurance mechanisms.',
    cards: [
      {
        color: 'red-500',
        title: 'Undergraduate',
        subtitle: "Bachelor's Degree",
        points: [
          '3-4 years duration',
          'Honours degrees (BA, BSc)',
          'Foundation years available',
          'Focus on independent study',
        ],
      },
      {
        color: 'blue-500',
        title: 'Postgraduate',
        subtitle: "Master's Degree",
        points: [
          '1-2 years duration',
          'Taught vs Research-based',
          'MA, MSc, MBA, LLM',
          'Specialist knowledge',
        ],
      },
      {
        color: 'purple-500',
        title: 'Doctorate',
        subtitle: 'PhD/Doctoral Degree',
        points: [
          '3-4 years duration',
          'Original research',
          'Thesis & defense required',
          'Expert-level knowledge',
        ],
      },
    ],
    note: {
      text: 'The UK uses a unique grading system. First-class honours (70%+) is the highest achievement, followed by Upper second-class honours (2:1, 60-69%), Lower second-class honours (2:2, 50-59%), and Third-class honours (40-49%).',
      color: 'yellow-50',
      border: 'yellow-100',
      textColor: 'yellow-700',
    },
  },
];
const topcourse = [
  {
    title: 'Business & Management',
    details: 'MBA, International Business, Finance',
    color: 'bg-amber-50 border-amber-200',
  },
  {
    title: 'Engineering',
    details: 'Civil, Mechanical, Electrical, Aerospace',
    color: 'bg-blue-50 border-blue-200',
  },
  {
    title: 'Computer Science',
    details: 'AI, Data Science, Cybersecurity',
    color: 'bg-indigo-50 border-indigo-200',
  },
  {
    title: 'Medicine & Healthcare',
    details: 'Medicine, Nursing, Public Health',
    color: 'bg-red-50 border-red-200',
  },
  {
    title: 'Law',
    details: 'LLM, International Law, Commercial Law',
    color: 'bg-purple-50 border-purple-200',
  },
  {
    title: 'Arts & Humanities',
    details: 'Literature, History, Philosophy',
    color: 'bg-pink-50 border-pink-200',
  },
  {
    title: 'Social Sciences',
    details: 'Economics, International Relations',
    color: 'bg-green-50 border-green-200',
  },
  {
    title: 'Media & Communications',
    details: 'Journalism, Digital Media, Film',
    color: 'bg-orange-50 border-orange-200',
  },
  {
    title: 'Natural Sciences',
    details: 'Physics, Chemistry, Biology',
    color: 'bg-cyan-50 border-cyan-200',
  },
];
const topuniversites = [
  {
    name: 'University of Oxford',
    location: 'Oxford',
    rank: '1',
    notable: 'Arts, Humanities, Sciences, Medicine',
  },
  {
    name: 'University of Cambridge',
    location: 'Cambridge',
    rank: '3',
    notable: 'Mathematics, Sciences, Engineering',
  },
  {
    name: 'Imperial College London',
    location: 'London',
    rank: '6',
    notable: 'Engineering, Medicine, Science',
  },
  {
    name: 'University College London',
    location: 'London',
    rank: '8',
    notable: 'Arts, Sciences, Engineering, Medicine',
  },
  {
    name: 'University of Edinburgh',
    location: 'Edinburgh',
    rank: '15',
    notable: 'Arts, Medicine, Veterinary Science',
  },
  {
    name: "King's College London",
    location: 'London',
    rank: '35',
    notable: 'Law, Medicine, Humanities',
  },
  {
    name: 'London School of Economics',
    location: 'London',
    rank: '49',
    notable: 'Economics, Politics, Social Sciences',
  },
  {
    name: 'University of Manchester',
    location: 'Manchester',
    rank: '51',
    notable: 'Engineering, Life Sciences, Humanities',
  },
];
const intakes = [
  {
    label: 'September/October',
    description: 'Primary intake with most course options available',
    icon: 'S',
  },
  {
    label: 'January/February',
    description: 'Secondary intake with limited course availability',
    icon: 'J',
  },
  {
    label: 'April/May',
    description: 'Limited intake for select programs only',
    icon: 'A',
  },
];

const deadlines = [
  {
    title: 'UCAS Undergraduate',
    icon: 'U',
    details: [
      '15 October (Oxford, Cambridge, medicine)',
      '25 January (most undergraduate courses)',
    ],
  },
  {
    title: 'Postgraduate',
    icon: 'P',
    details: ['Varies by university (typically 6–8 months before start)'],
  },
  {
    title: 'Scholarships',
    icon: 'S',
    details: [
      'January–March for most scholarships',
      'Chevening: early November',
    ],
  },
];
const notes = [
  'Apply early for competitive programs and universities',
  'International students should apply 1–2 months earlier than deadlines',
  'Allow 4–8 weeks for visa processing after receiving acceptance',
  'Some universities have rolling admissions for postgraduate courses',
];
const requirementsData = [
  {
    title: 'Undergraduate Requirements',
    color: 'bg-blue-500',
    items: [
      'Completed secondary education (12 years)',
      'High school transcripts/certificates',
      'English proficiency (IELTS 6.0–7.0 or equivalent)',
      'Personal statement',
      'Letters of recommendation (1–2)',
      'Entrance exams (for specific programs)',
      'Portfolio (for art/design courses)',
      'Interview (for competitive programs)',
    ],
  },
  {
    title: 'Postgraduate Requirements',
    color: 'bg-purple-500',
    items: [
      "Bachelor's degree (2:1 or 2:2 minimum)",
      'Academic transcripts',
      'English proficiency (IELTS 6.5–7.5)',
      'Research proposal (for research degrees)',
      'CV/Resume',
      'Statement of purpose',
      'Letters of recommendation (2–3)',
      'GMAT/GRE (for MBA and some programs)',
    ],
  },
];
const countryNote = `UK universities evaluate international qualifications against British standards. Many provide country-specific entry requirements on their websites. Foundation programs are available if your qualifications don't meet direct entry requirements.`;
const tuitionData = [
  {
    level: 'Undergraduate',
    range: '£15,000 - £40,000',
    average: '£22,000',
    notes: 'Higher for medicine, dentistry',
  },
  {
    level: 'Postgraduate Taught',
    range: '£17,000 - £35,000',
    average: '£23,500',
    notes: 'Higher for MBA programs',
  },
  {
    level: 'MBA',
    range: '£25,000 - £90,000',
    average: '£40,000',
    notes: 'Top schools exceed £70,000',
  },
  {
    level: 'PhD',
    range: '£16,000 - £30,000',
    average: '£20,000',
    notes: 'Funding often available',
  },
  {
    level: 'Medicine & Dentistry',
    range: '£38,000 - £65,000',
    average: '£45,000',
    notes: 'Clinical years are costlier',
  },
];

const tuitionNote =
  'Additional costs may include laboratory fees, field trips, and course materials. Some universities charge different fees for different courses within the same level. Always check the specific fees for your chosen program.';

const expenses = [
  { label: 'Accommodation', range: '£500 - £1,200', percentage: 70 },
  { label: 'Food & Groceries', range: '£200 - £300', percentage: 40 },
  { label: 'Transportation', range: '£60 - £150', percentage: 25 },
  { label: 'Utilities', range: '£120 - £200', percentage: 30 },
  { label: 'Mobile/Internet', range: '£40 - £60', percentage: 15 },
  { label: 'Books & Supplies', range: '£40 - £100', percentage: 20 },
  { label: 'Entertainment', range: '£100 - £250', percentage: 35 },
];

const regionalCosts = [
  {
    region: 'London',
    level: 'Expensive',
    color: 'text-red-500',
    range: '£1,400 - £2,000+',
  },
  {
    region: 'South East (Oxford, Brighton)',
    level: 'High',
    color: 'text-orange-500',
    range: '£1,100 - £1,500',
  },
  {
    region: 'Major Cities (Manchester, Birmingham)',
    level: 'Moderate',
    color: 'text-yellow-500',
    range: '£900 - £1,300',
  },
  {
    region: 'Northern Cities & Wales',
    level: 'Affordable',
    color: 'text-green-500',
    range: '£800 - £1,100',
  },
];

const scholarships = [
  {
    category: 'Government Scholarships',
    color: 'indigo',
    items: [
      {
        title: 'Chevening Scholarships',
        description:
          "Fully-funded scholarships for outstanding emerging leaders to pursue a one-year master's degree.",
      },
      {
        title: 'Commonwealth Scholarships',
        description:
          "For students from Commonwealth countries at master's and doctoral levels.",
      },
      {
        title: 'GREAT Scholarships',
        description:
          '£10,000 towards tuition fees for one-year postgraduate courses.',
      },
    ],
  },
  {
    category: 'University Scholarships',
    color: 'blue',
    items: [
      {
        title: 'Merit-Based Scholarships',
        description:
          'Awarded for academic excellence, typically covering 10-50% of tuition.',
      },
      {
        title: 'Department-Specific Awards',
        description: 'Offered by specific academic departments or faculties.',
      },
      {
        title: 'Country-Specific Scholarships',
        description:
          'Many universities have scholarships for students from specific countries.',
      },
    ],
  },
];

const financialSupports = [
  {
    title: 'Part-Time Work',
    description: 'Students can work up to 20 hours per week during term time.',
  },
  {
    title: 'Internships',
    description: 'Paid internships during vacation periods.',
  },
  {
    title: 'Graduate Assistantships',
    description: 'For PhD students, may include stipend and tuition waiver.',
  },
  {
    title: 'International Student Loans',
    description:
      'Some private lenders offer loans specifically for international students.',
  },
];

const tips = [
  'Apply early – many scholarships have deadlines 6-12 months before courses start',
  'Research thoroughly – check university websites and scholarship databases',
  'Prepare strong personal statements highlighting your achievements and goals',
  'Secure strong recommendation letters from academic or professional references',
];

const ukVisaData = {
  title: 'UK Student Visa Requirements',
  intro:
    'Most international students will need a Student visa (previously Tier 4) to study in the UK for courses longer than 6 months.',
  sections: [
    {
      title: 'Basic Requirements',
      color: '#3B82F6', // Tailwind 'blue-500'
      items: [
        'An unconditional offer from a licensed student sponsor',
        'Confirmation of Acceptance for Studies (CAS) from your university',
        'Proof of English language proficiency',
        'Proof of financial support for course fees and living expenses',
        'Valid passport or travel document',
        'Tuberculosis (TB) test results if from certain countries',
        'Academic Technology Approval Scheme (ATAS) certificate if applicable',
        'Parental/guardian consent if under 18',
      ],
    },
    {
      title: 'Financial Requirements',
      color: '#F59E0B', // Tailwind 'amber-500'
      items: [
        'First year tuition fees',
        'Living expenses: £1,334/month for London (£12,006 for 9 months)',
        'Living expenses: £1,023/month outside London (£9,207 for 9 months)',
        'Funds must be held for at least 28 consecutive days',
        'Bank statements must be dated within 31 days of application',
      ],
    },
  ],
  facts: [
    'Visa application fee: £363 for students outside the UK',
    'Immigration Health Surcharge: £470 per year of study',
    'Processing time: 3 weeks (may vary by country)',
  ],
  benefits: [
    {
      title: 'Work Rights',
      description:
        'Work up to 20 hours/week during term time and full-time during holidays',
    },
    {
      title: 'Dependants',
      description:
        'Postgraduate students can bring dependants for courses 9+ months',
    },
    {
      title: 'Healthcare',
      description:
        'Access to NHS services after paying Immigration Health Surcharge',
    },
  ],
};
const visaStepsData = [
  {
    step: '1',
    title: 'Receive University Offer',
    color: 'bg-blue-500',
    content:
      'Accept an unconditional offer from a UK university that is a licensed student sponsor.',
  },
  {
    step: '2',
    title: 'Pay Deposit & Request CAS',
    color: 'bg-indigo-500',
    content:
      'Pay any required deposit to the university to secure your place and request your CAS (Confirmation of Acceptance for Studies).',
  },
  {
    step: '3',
    title: 'Prepare Required Documents',
    color: 'bg-purple-500',
    content:
      'Gather all required documents including passport, financial evidence, academic qualifications, and English language certificates.',
  },
  {
    step: '4',
    title: 'Complete Online Application',
    color: 'bg-pink-500',
    content:
      'Complete the online Student visa application form on the UK government website and pay the visa fee and Immigration Health Surcharge.',
  },
  {
    step: '5',
    title: 'Attend Biometric Appointment',
    color: 'bg-red-500',
    content:
      'Attend an appointment at a visa application center to provide your fingerprints and photo (biometric information).',
  },
  {
    step: '6',
    title: 'Submit Documents',
    color: 'bg-orange-500',
    content:
      'Submit your supporting documents online or at the visa application center as required.',
  },
  {
    step: '7',
    title: 'Wait for Decision',
    color: 'bg-amber-500',
    content:
      'Wait for your visa application to be processed. Standard processing time is typically 3 weeks for Student visas.',
  },
  {
    step: '8',
    title: 'Receive Visa & Travel',
    color: 'bg-green-500',
    content:
      'Once approved, collect your visa/BRP card and make travel arrangements to the UK before your course starts.',
  },
];
const workOpportunitiesData = [
  {
    title: 'During Studies',
    color: 'bg-indigo-500',
    sections: [
      {
        heading: 'Working Hours',
        points: [
          'Up to 20 hours per week during term time',
          'Full-time during official holidays',
          'On-campus employment opportunities',
          'Paid or unpaid work placements (if part of course)',
        ],
      },
      {
        heading: 'Common Student Jobs',
        points: [
          'Retail and hospitality positions',
          'Administrative roles',
          'University jobs (library, ambassadors)',
          'Tutoring and teaching assistantships',
        ],
      },
    ],
  },
  {
    title: 'Post-Graduation',
    color: 'bg-green-500',
    sections: [
      {
        heading: 'Graduate Route Visa',
        points: [
          "2 years for bachelor's and master's graduates",
          '3 years for PhD graduates',
          'No sponsorship required',
          'Unrestricted work rights',
        ],
      },
      {
        heading: 'Skilled Worker Visa',
        points: [
          'Requires job offer from licensed employer',
          'Job must meet skill and salary requirements',
          'Potential path to settlement',
          'Dependent family members can join you',
        ],
      },
    ],
  },
];

const jobMarketData = {
  sectors: [
    'Technology and IT',
    'Engineering',
    'Healthcare and life sciences',
    'Finance and banking',
    'Education',
    'Digital marketing',
  ],
  salaries: [
    'London: £30,000 - £35,000',
    'Other major cities: £24,000 - £28,000',
    'Technology sector: £28,000 - £40,000',
    'Finance sector: £30,000 - £45,000',
    'Engineering: £27,000 - £35,000',
  ],
};
const bestCitiesData = [
  {
    city: 'London',
    image:
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=600&auto=format',
    universities: '40+ universities',
    description:
      'The capital offers unparalleled cultural diversity, career opportunities, and networking possibilities.',
    highlights: [
      'Global connections',
      'Cultural diversity',
      'Career opportunities',
      'Museums and galleries',
    ],
  },
  {
    city: 'Manchester',
    image:
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=600&auto=format',
    universities: '5 universities',
    description:
      'Vibrant, affordable city with excellent music scene and friendly atmosphere.',
    highlights: [
      'Affordable living',
      'Music scene',
      'Sports culture',
      'Tech hub',
    ],
  },
  {
    city: 'Edinburgh',
    image:
      'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=600&auto=format',
    universities: '4 universities',
    description:
      "Scotland's capital combines historic architecture with festival culture.",
    highlights: [
      'Historic beauty',
      'Festival city',
      'Safe environment',
      'Quality of life',
    ],
  },
  {
    city: 'Birmingham',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=600&auto=format',
    universities: '5 universities',
    description:
      "The UK's second largest city offers diversity and affordability.",
    highlights: [
      'Central location',
      'Cultural diversity',
      'Modern campus facilities',
      'Affordability',
    ],
  },
  {
    city: 'Glasgow',
    image:
      'https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=600&auto=format',
    universities: '3 universities',
    description:
      'Friendly Scottish city with vibrant arts scene and rich architecture.',
    highlights: [
      'Arts and music',
      'Friendly locals',
      'Affordability',
      'Architecture',
    ],
  },
  {
    city: 'Bristol',
    image:
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=600&auto=format',
    universities: '2 universities',
    description:
      'Creative hub with excellent quality of life and strong job market.',
    highlights: [
      'Creative scene',
      'Tech industry',
      'Green spaces',
      'Harbor area',
    ],
  },
];
const studentLifeData = {
  title: 'Student Life and Support Services',
  icon: {
    bg: 'bg-purple-100',
    color: 'text-purple-600',
    component: <BookOpen className="h-6 w-6 text-purple-600" />,
  },
  sections: [
    {
      title: 'Campus Life',
      bg: 'bg-purple-50',
      border: 'border-purple-100',
      textColor: 'text-purple-800',
      items: [
        {
          title: 'Student Unions',
          description:
            'Representative bodies offering services, societies, and support.',
        },
        {
          title: 'Clubs & Societies',
          description:
            'Over 100 options at most universities, from academic to recreational.',
        },
        {
          title: 'Sports Facilities',
          description: 'Gyms, fields, courts, and competitive sports teams.',
        },
        {
          title: 'Events & Traditions',
          description:
            "Fresher's Week, balls, cultural celebrations, and graduation ceremonies.",
        },
      ],
    },
    {
      title: 'Support Services',
      bg: 'bg-blue-50',
      border: 'border-blue-100',
      textColor: 'text-blue-800',
      items: [
        {
          title: 'International Student Office',
          description:
            'Dedicated support for visa, cultural, and academic matters.',
        },
        {
          title: 'Wellbeing Services',
          description:
            'Counseling, mental health support, and disability services.',
        },
        {
          title: 'Career Services',
          description:
            'CV workshops, job fairs, interview preparation, and placement support.',
        },
        {
          title: 'Academic Support',
          description:
            'Study skills, language support, writing centers, and tutoring.',
        },
      ],
    },
    {
      title: 'Accommodation Options',
      bg: 'bg-green-50',
      border: 'border-green-100',
      textColor: 'text-green-800',
      items: [
        {
          title: 'University Halls of Residence',
          description:
            'On-campus living with meal plans and social activities.',
          badges: ['Convenient', 'Supportive', 'Social'],
        },
        {
          title: 'Private Student Accommodation',
          description:
            'Purpose-built housing with modern amenities and social spaces.',
          badges: ['Modern', 'Community', 'Independent'],
        },
        {
          title: 'Shared Houses/Flats',
          description:
            'Private rentals shared with other students, often in second year+.',
          badges: ['Affordable', 'Independent', 'Flexible'],
        },
        {
          title: 'Homestay',
          description:
            'Living with a local family, ideal for language immersion.',
          badges: ['Cultural', 'Supportive', 'Family-feel'],
        },
      ],
    },
    {
      title: 'Transportation',
      bg: 'bg-amber-50',
      border: 'border-amber-100',
      textColor: 'text-amber-800',
      items: [
        {
          title: 'Public Transport',
          description:
            'Excellent bus and train networks with student discounts available.',
        },
        {
          title: 'Cycling',
          description:
            'Bike-friendly cities with cycle lanes and bike-sharing schemes.',
        },
        {
          title: 'Walking',
          description:
            'Many campus facilities and accommodations within walking distance.',
        },
        {
          title: 'Travel Cards',
          description:
            'Railcards and travel cards offer significant discounts for students.',
        },
      ],
    },
  ],
  additionalInfo: {
    title: 'Healthcare for International Students',
    description:
      'International students studying in the UK for more than 6 months can access the National Health Service (NHS) after paying the Immigration Health Surcharge as part of their visa application.',
    items: [
      {
        title: 'Covered Services',
        points: [
          'GP consultations',
          'Hospital treatment',
          'Emergency care',
          'Maternity care',
        ],
      },
      {
        title: 'Additional Costs',
        points: [
          'Prescription charges',
          'Dental treatment',
          'Optical services',
          'Some specialist services',
        ],
      },
    ],
  },
};
const latestUpdates2025 = [
  {
    title: 'Graduate Route Confirmed',
    description: 'Post-study work opportunities',
    content:
      'The UK Government has reaffirmed its commitment to the Graduate Route visa, allowing international students to stay and work for 2 years after graduation (3 years for PhD graduates). This remains a key attraction for international students seeking work experience in the UK.',
    category: 'Visa Policy',
    gradient: 'from-blue-50 to-sky-50',
    border: 'border-blue-100',
    badgeColor: 'bg-blue-500',
    titleColor: 'text-blue-800',
  },
  {
    title: 'Digital Visa Application',
    description: 'Streamlined process',
    content:
      'The UK is transitioning to a fully digital immigration system. International students can now complete most of their visa application online, with reduced need for physical document submission and biometric appointments in many countries.',
    category: 'Digital Innovation',
    gradient: 'from-purple-50 to-pink-50',
    border: 'border-purple-100',
    badgeColor: 'bg-purple-500',
    titleColor: 'text-purple-800',
  },
  {
    title: 'Increased Funding',
    description: 'More opportunities',
    content:
      'The UK has expanded its international scholarship programs for 2025, with a 20% increase in Chevening Scholarship places and new country-specific scholarship schemes. Several universities have also launched additional funding options focusing on STEM subjects and sustainability.',
    category: 'Scholarships',
    gradient: 'from-amber-50 to-yellow-50',
    border: 'border-amber-100',
    badgeColor: 'bg-amber-500',
    titleColor: 'text-amber-800',
  },
  {
    title: 'Hybrid Learning Options',
    description: 'Flexible study models',
    content:
      'Many UK universities are maintaining hybrid learning options that developed during the pandemic, offering more flexibility for international students. This includes enhanced digital resources, recorded lectures, and some blended learning programs.',
    category: 'Education',
    gradient: 'from-green-50 to-emerald-50',
    border: 'border-green-100',
    badgeColor: 'bg-green-500',
    titleColor: 'text-green-800',
  },
];
const policyChanges2025 = [
  {
    title: 'Student Visa Financial Requirements',
    content:
      'Financial requirements for student visas have been updated for 2025. Students now need to show higher maintenance funds - £1,334 per month for London (increased from £1,265) and £1,023 for outside London (increased from £1,015).',
  },
  {
    title: 'English Language Requirements',
    content:
      'Some universities have increased their IELTS requirements, with many undergraduate programs now requiring a minimum score of 6.5 overall (up from 6.0) and postgraduate programs requiring 7.0 (up from 6.5).',
  },
  {
    title: 'New High Potential Individual Visa',
    content:
      'The High Potential Individual (HPI) visa has been expanded to include graduates from more international universities, allowing talented individuals to come to the UK without a job offer.',
  },
];
const faqs = [
  {
    question: 'How long does it take to get a UK student visa?',
    answer:
      "The standard processing time for a UK student visa is around 3 weeks from the date of your biometric appointment. However, this can vary depending on your country and the time of year. During peak periods (July-September), processing times may be longer, so it's advisable to apply at least 3 months before your course start date.",
  },
  {
    question: 'Can I work while studying in the UK?',
    answer:
      'Yes, most international students on a Student visa (previously Tier 4) can work part-time during term time (up to 20 hours per week) and full-time during official holidays. However, there are some restrictions based on your course level and type of institution. PhD students may have different allowances. Always check your specific visa conditions.',
  },
  {
    question:
      'What English language tests are accepted for UK university applications?',
    answer:
      'UK universities typically accept IELTS Academic, TOEFL iBT, PTE Academic, and Cambridge English: Advanced (CAE) or Proficiency (CPE). The required scores vary by institution and program level. For undergraduate courses, an IELTS score of 6.0-6.5 is typically required, while postgraduate programs often require 6.5-7.0. Some universities also accept the Duolingo English Test.',
  },
  {
    question:
      'How much does it cost to study in the UK as an international student?',
    answer:
      'Tuition fees for international students range from £15,000 to £40,000 per year for undergraduate degrees, and £17,000 to £35,000 for postgraduate taught programs. Medical and MBA programs can cost significantly more. Living expenses vary by location, with London being the most expensive (approximately £12,000-£15,000 per year) and other cities being more affordable (£9,000-£12,000 per year).',
  },
  {
    question: 'What scholarships are available for international students?',
    answer:
      "Various scholarships are available, including: Chevening Scholarships (fully-funded master's degrees), Commonwealth Scholarships (for students from Commonwealth countries), GREAT Scholarships (£10,000 towards tuition fees), and University-specific scholarships (merit-based, country-specific, or subject-specific). Additionally, some governments and external organizations offer funding opportunities for students studying abroad.",
  },
  {
    question: 'Can I stay in the UK after completing my studies?',
    answer:
      "Yes, through the Graduate Route visa. This allows international students to stay and work (or look for work) in the UK for 2 years after completing an undergraduate or master's degree, or 3 years after completing a PhD. Alternatively, if you receive a qualifying job offer, you can switch to a Skilled Worker visa which can lead to settlement in the UK.",
  },
  {
    question: 'What are the application deadlines for UK universities?',
    answer:
      'For undergraduate courses through UCAS, the main deadlines are: 15 October for Oxford, Cambridge, medicine, dentistry, and veterinary science; 25 January for most other courses. Many universities also accept later applications if they have places available. For postgraduate courses, deadlines vary by institution but are typically 6-8 months before the course start date. Popular courses may close applications earlier.',
  },
  {
    question: 'Do I need to register with a doctor when I arrive in the UK?',
    answer:
      "Yes, it's highly recommended to register with a local General Practitioner (GP) soon after arriving in the UK. Most universities have a health center on campus or can direct you to nearby medical practices. Registration is free, and once registered, you can access NHS services. You'll need your passport, proof of address, and proof that you're a student (such as an enrollment letter).",
  },
  {
    question: 'How do I open a bank account in the UK?',
    answer:
      "To open a UK bank account, you'll typically need: your passport, Biometric Residence Permit (BRP), proof of address in the UK (such as accommodation contract), and an enrollment letter from your university. Many banks offer student accounts with special benefits. It's advisable to research different banks and their account options before arriving. Some banks also offer international student accounts that you can apply for before leaving your home country.",
  },
  {
    question:
      'What support services do UK universities offer for international students?',
    answer:
      'UK universities typically offer comprehensive support services for international students, including: dedicated international student advisors, orientation programs, visa and immigration advice, academic support and language assistance, career services with international student focus, cultural and social events, wellbeing and counseling services, and accommodation assistance. Many universities also have international student societies representing different countries and regions.',
  },
];

export default CountryDetails;
