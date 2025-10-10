import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronDown,
  GraduationCap,
  Library,
  Coins,
  Plane,
  Users,
  Landmark,
  FileQuestion,
  Info,
} from 'lucide-react';

import CountryOverview from '@/components/CountryDetailes/CountryOverview';
import CountryAcademicsSection from '@/components/CountryDetailes/CountryAcademicsSection';
import CountryCostsSection from '@/components/CountryDetailes/CountryCostsSection';
import CountryVisaSection from '@/components/CountryDetailes/CountryVisaSection';
import CountryStudentLifeSection from '@/components/CountryDetailes/CountryStudentLifeSection';
import CountryFAQs from '@/components/CountryDetailes/CountryFAQs';
import CountryResourcesSection from '@/components/CountryDetailes/CountryResourcesSection';
import SectionHeader from '@/components/CountryDetailes/CountrySectionHeader';
import CountryQuickFacts from '@/components/CountryDetailes/CountryQuickFacts';
import StudentForm from '@/components/Froms/StudentContactForm';
import { fetchCountryDetails } from '@/services/operations/countryDetailsAPI';

// Define interfaces based on provided data format
interface Course {
  title: string;
  details: string;
  color: string;
}

interface University {
  name: string;
  location: string;
  rank: string;
  notable: string;
}

interface Intake {
  label: string;
  description: string;
  icon: string;
}

interface Deadline {
  title: string;
  icon: string;
  details: string[];
}

interface Requirement {
  title: string;
  color: string;
  items: string[];
}

interface QuickFacts {
  population: string;
  capital: string;
  language: string;
  currency: string;
  academicYear: string;
}

interface KeyDates {
  fallDeadline: string;
  springDeadline: string;
  summerDeadline: string;
}

interface OverviewSection {
  title: string;
  description: string;
  points?: { heading: string; text: string }[];
  cards?: {
    color: string;
    title: string;
    subtitle: string;
    points: string[];
  }[];
  note?: { text: string; color: string; border: string; textColor: string };
}

interface TuitionData {
  level: string;
  range: string;
  average: string;
  notes: string;
}

interface Expense {
  label: string;
  range: string;
  percentage: number;
}

interface RegionalCost {
  region: string;
  level: string;
  color: string;
  range: string;
}

interface Scholarship {
  category: string;
  color: string;
  items: { title: string; description: string }[];
}

interface FinancialSupport {
  title: string;
  description: string;
}

interface VisaData {
  title: string;
  intro: string;
  sections: { title: string; color: string; items: string[] }[];
  facts: string[];
  benefits: { title: string; description: string }[];
}

interface VisaStep {
  step: string;
  title: string;
  color: string;
  content: string;
}

interface WorkOpportunity {
  title: string;
  color: string;
  sections: { heading: string; points: string[] }[];
}

interface JobMarketData {
  sectors: string[];
  salaries: string[];
}

interface City {
  city: string;
  image: string;
  universities: string;
  description: string;
  highlights: string[];
}

interface StudentLifeData {
  title: string;
  icon: { bg: string; color: string };
  sections: {
    title: string;
    bg: string;
    border: string;
    textColor: string;
    items: { title: string; description: string; badges?: string[] }[];
  }[];
  additionalInfo: {
    title: string;
    description: string;
    items: { title: string; points: string[] }[];
  };
}

interface Update {
  title: string;
  description: string;
  content: string;
  category: string;
  gradient: string;
  border: string;
  badgeColor: string;
  titleColor: string;
}

interface PolicyChange {
  title: string;
  content: string;
}

interface ResourceCard {
  title: string;
  description: string;
  buttonText: string;
  gradient: string;
  borderColor: string;
  textColor: string;
  buttonColor: string;
}

interface ResourceLink {
  label: string;
  href: string;
}

interface ResourceTool {
  title: string;
  description: string;
  buttonText: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Country {
  code: string;
  name: string;
  flagUrl: string;
  heroImage: string;
  quickFacts: QuickFacts;
  keyDates: KeyDates;
  overviewSections: OverviewSection[];
  topcourse: Course[];
  topuniversites: University[];
  intakes: Intake[];
  deadlines: Deadline[];
  addmissionnotes: string[];
  requirementsData: Requirement[];
  CountrySpecificRequirements: string;
  tuitionData: TuitionData[];
  tuitionNote: string;
  expenses: Expense[];
  regionalCosts: RegionalCost[];
  scholarships: Scholarship[];
  financialSupports: FinancialSupport[];
  TipsforScholarship: string[];
  ukVisaData: VisaData;
  visaStepsData: VisaStep[];
  workOpportunitiesData: WorkOpportunity[];
  jobMarketData: JobMarketData;
  bestCitiesData: City[];
  studentLifeData: StudentLifeData;
  latestUpdates2025: Update[];
  policyChanges2025: PolicyChange[];
  resourcecards: ResourceCard[];
  resourceofficialLinks: ResourceLink[];
  resourceguides: ResourceLink[];
  resourcetools: ResourceTool[];
  faqs: FAQ[];
}

interface SectionRefs {
  overview: React.RefObject<HTMLDivElement>;
  academics: React.RefObject<HTMLDivElement>;
  costs: React.RefObject<HTMLDivElement>;
  visa: React.RefObject<HTMLDivElement>;
  studentLife: React.RefObject<HTMLDivElement>;
  resources: React.RefObject<HTMLDivElement>;
  faqs: React.RefObject<HTMLDivElement>;
  contact: React.RefObject<HTMLDivElement>;
}

interface SectionIcons {
  overview: JSX.Element;
  academics: JSX.Element;
  costs: JSX.Element;
  visa: JSX.Element;
  studentLife: JSX.Element;
  resources: JSX.Element;
  faqs: JSX.Element;
  contact: JSX.Element;
}

interface SectionLabels {
  overview: string;
  academics: string;
  costs: string;
  visa: string;
  studentLife: string;
  resources: string;
  faqs: string;
  contact: string;
}

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

const CountryDetails: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [country, setCountry] = useState<Country | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { countryname } = useParams<{ countryname: string }>();

  useEffect(() => {
    console.log('Country:', countryname);
    console.log('useEffect triggered');
    if (!countryname) {
      setError('No country specified');
      return;
    }
    (async () => {
      try {
        const res = await fetchCountryDetails(countryname);
        console.log('Raw API Response:', JSON.stringify(res.data, null, 2));
        console.log('topuniversities from API:', res.data.topuniversities);
        console.log('topuniversities length:', res.data.topuniversities?.length);

        // Handle field name variations from API
        // Map topuniversities to topuniversites
        if (res.data.topuniversities && !res.data.topuniversites) {
          console.log('Mapping topuniversities to topuniversites');
          res.data.topuniversites = res.data.topuniversities;
          delete res.data.topuniversities;
          console.log('After mapping - topuniversites:', res.data.topuniversites);
          console.log('After mapping - topuniversites length:', res.data.topuniversites?.length);
        }

        // Map admissionnotes to addmissionnotes
        if (res.data.admissionnotes && !res.data.addmissionnotes) {
          console.log('Mapping admissionnotes to addmissionnotes');
          res.data.addmissionnotes = res.data.admissionnotes;
          delete res.data.admissionnotes;
        }

        // Map spainVisaData to ukVisaData if country is not Spain
        if (res.data.spainVisaData && !res.data.ukVisaData) {
          console.log('Mapping spainVisaData to ukVisaData');
          res.data.ukVisaData = res.data.spainVisaData;
          delete res.data.spainVisaData;
        }

        const requiredFields = [
          'code',
          'name',
          'flagUrl',
          'heroImage',
          'quickFacts',
          'keyDates',
          'overviewSections',
          'topcourse',
          'topuniversites',
          'intakes',
          'deadlines',
          'addmissionnotes',
          'requirementsData',
          'CountrySpecificRequirements',
          'tuitionData',
          'tuitionNote',
          'expenses',
          'regionalCosts',
          'scholarships',
          'financialSupports',
          'TipsforScholarship',
          'ukVisaData',
          'visaStepsData',
          'workOpportunitiesData',
          'jobMarketData',
          'bestCitiesData',
          'studentLifeData',
          'latestUpdates2025',
          'policyChanges2025',
          'resourcecards',
          'resourceofficialLinks',
          'resourceguides',
          'resourcetools',
          'faqs',
        ];
        const missingFields = requiredFields.filter(
          field => res.data[field] === undefined
        );
        if (missingFields.length > 0) {
          console.warn('Missing fields:', missingFields);
          // Set default values for all required fields
          res.data.code = res.data.code ?? '';
          res.data.name = res.data.name ?? '';
          res.data.flagUrl = res.data.flagUrl ?? '';
          res.data.heroImage = res.data.heroImage ?? '';
          res.data.quickFacts = res.data.quickFacts ?? {
            population: '',
            capital: '',
            language: '',
            currency: '',
            academicYear: '',
          };
          res.data.keyDates = res.data.keyDates ?? {
            fallDeadline: '',
            springDeadline: '',
            summerDeadline: '',
          };
          res.data.overviewSections = res.data.overviewSections ?? [];
          res.data.topcourse = res.data.topcourse ?? [];
          res.data.topuniversites = res.data.topuniversites ?? [];
          res.data.intakes = res.data.intakes ?? [];
          res.data.deadlines = res.data.deadlines ?? [];
          res.data.addmissionnotes = res.data.addmissionnotes ?? [];
          res.data.requirementsData = res.data.requirementsData ?? [];
          res.data.CountrySpecificRequirements =
            res.data.CountrySpecificRequirements ?? '';
          res.data.tuitionData = res.data.tuitionData ?? [];
          res.data.tuitionNote = res.data.tuitionNote ?? '';
          res.data.expenses = res.data.expenses ?? [];
          res.data.regionalCosts = res.data.regionalCosts ?? [];
          res.data.scholarships = res.data.scholarships ?? [];
          res.data.financialSupports = res.data.financialSupports ?? [];
          res.data.TipsforScholarship = res.data.TipsforScholarship ?? [];
          res.data.ukVisaData = res.data.ukVisaData ?? {
            title: '',
            intro: '',
            sections: [],
            facts: [],
            benefits: [],
          };
          res.data.visaStepsData = res.data.visaStepsData ?? [];
          res.data.workOpportunitiesData = res.data.workOpportunitiesData ?? [];
          res.data.jobMarketData = res.data.jobMarketData ?? {
            sectors: [],
            salaries: [],
          };
          res.data.bestCitiesData = res.data.bestCitiesData ?? [];
          res.data.studentLifeData = res.data.studentLifeData ?? {
            title: '',
            icon: { bg: '', color: '' },
            sections: [],
            additionalInfo: { title: '', description: '', items: [] },
          };
          res.data.latestUpdates2025 = res.data.latestUpdates2025 ?? [];
          res.data.policyChanges2025 = res.data.policyChanges2025 ?? [];
          res.data.resourcecards = res.data.resourcecards ?? [];
          res.data.resourceofficialLinks = res.data.resourceofficialLinks ?? [];
          res.data.resourceguides = res.data.resourceguides ?? [];
          res.data.resourcetools = res.data.resourcetools ?? [];
          res.data.faqs = res.data.faqs ?? [];
        }
        console.log(
          'Processed API Response:',
          JSON.stringify(res.data, null, 2)
        );
        console.log('Final topuniversites before setState:', res.data.topuniversites);
        console.log('Final topuniversites length before setState:', res.data.topuniversites?.length);
        setCountry(res.data);
        setError(null);
      } catch (error) {
        console.error('Could not fetch Country Details:', error);
        setError('Failed to load country details');
      }
    })();
  }, [countryname]);

  console.log('Country Details set in state:', country);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      (Object.keys(sectionRefs) as (keyof SectionRefs)[]).forEach(section => {
        const ref = sectionRefs[section];
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

  const sectionRefs: SectionRefs = {
    overview: useRef<HTMLDivElement>(null),
    academics: useRef<HTMLDivElement>(null),
    costs: useRef<HTMLDivElement>(null),
    visa: useRef<HTMLDivElement>(null),
    studentLife: useRef<HTMLDivElement>(null),
    resources: useRef<HTMLDivElement>(null),
    faqs: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const sectionIcons: SectionIcons = {
    overview: <GraduationCap size={18} />,
    academics: <Library size={18} />,
    costs: <Coins size={18} />,
    visa: <Plane size={18} />,
    studentLife: <Users size={18} />,
    resources: <Landmark size={18} />,
    faqs: <FileQuestion size={18} />,
    contact: <Info size={18} />,
  };

  const sectionLabels: SectionLabels = {
    overview: 'Overview',
    academics: 'Academics',
    costs: 'Costs',
    visa: 'Visa',
    studentLife: 'Student Life',
    resources: 'Resources',
    faqs: 'FAQs',
    contact: 'Contact Us',
  };

  const scrollToSection = (section: keyof SectionRefs) => {
    const ref = sectionRefs[section];
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-red-600">{error}</p>
      </div>
    );
  }

  if (
    !country ||
    !country.heroImage ||
    !country.quickFacts ||
    !country.keyDates ||
    !Array.isArray(country.topcourse) ||
    !Array.isArray(country.topuniversites) ||
    !Array.isArray(country.intakes) ||
    !Array.isArray(country.deadlines) ||
    !Array.isArray(country.addmissionnotes) ||
    !Array.isArray(country.requirementsData) ||
    !country.ukVisaData ||
    !Array.isArray(country.overviewSections) ||
    !Array.isArray(country.tuitionData) ||
    !Array.isArray(country.expenses) ||
    !Array.isArray(country.regionalCosts) ||
    !Array.isArray(country.scholarships) ||
    !Array.isArray(country.financialSupports) ||
    !Array.isArray(country.TipsforScholarship) ||
    !Array.isArray(country.visaStepsData) ||
    !Array.isArray(country.workOpportunitiesData) ||
    !country.jobMarketData ||
    !Array.isArray(country.bestCitiesData) ||
    !country.studentLifeData ||
    !Array.isArray(country.latestUpdates2025) ||
    !Array.isArray(country.policyChanges2025) ||
    !Array.isArray(country.resourcecards) ||
    !Array.isArray(country.resourceofficialLinks) ||
    !Array.isArray(country.resourceguides) ||
    !Array.isArray(country.resourcetools) ||
    !Array.isArray(country.faqs)
  ) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading country details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
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

      <div className="sticky top-16 z-30">
        <div className="absolute inset-0 bg-indigo-200/60 backdrop-blur-lg border-b border-gray-200/80 shadow-sm"></div>
        <div className="container relative mx-auto px-4 md:px-6 lg:px-8">
          <div className="overflow-x-auto py-4 no-scrollbar">
            <ul className="flex items-center justify-center md:justify-start gap-3">
              {(Object.keys(sectionLabels) as (keyof SectionLabels)[]).map(
                section => {
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
                        {isActive && (
                          <span className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/30 animate-subtle-pulse"></span>
                        )}
                        {!isActive && (
                          <span className="absolute inset-0 bg-gray-100 dark:bg-gray-800/60 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></span>
                        )}
                        <span
                          className={`relative z-10 mr-2.5 transition-all duration-300 ${
                            isActive
                              ? 'text-white scale-110'
                              : 'text-indigo-500 dark:text-indigo-400 group-hover:scale-110'
                          }`}
                        >
                          {sectionIcons[section]}
                        </span>
                        <span
                          className={`relative z-10 font-medium text-sm transition-all duration-300 ${
                            isActive ? 'text-white' : ''
                          }`}
                        >
                          {sectionLabels[section]}
                        </span>
                      </button>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <CountryQuickFacts
          population={country.quickFacts.population}
          capital={country.quickFacts.capital}
          language={country.quickFacts.language}
          currency={country.quickFacts.currency}
          academicYear={country.quickFacts.academicYear}
          fallDeadline={country.keyDates.fallDeadline}
          springDeadline={country.keyDates.springDeadline}
          summerDeadline={country.keyDates.summerDeadline}
        />

        <motion.div
          variants={containerVariants}
          ref={sectionRefs.overview}
          className="space-y-10 mb-16 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader>Overview</SectionHeader>
          <CountryOverview overviewSections={country.overviewSections} />
        </motion.div>

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
          />
        </motion.div>

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
          />
        </motion.div>

        <motion.div
          ref={sectionRefs.visa}
          className="mb-16 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader>Visa & Work Opportunities</SectionHeader>
          <CountryVisaSection
            containerVariants={containerVariants}
            itemVariants={itemVariants}
            ukVisaData={country.ukVisaData}
            visaStepsData={country.visaStepsData}
            workOpportunitiesData={country.workOpportunitiesData}
            jobMarketData={country.jobMarketData}
          />
        </motion.div>

        <motion.div
          ref={sectionRefs.studentLife}
          className="mb-16 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader>Student Life</SectionHeader>
          <CountryStudentLifeSection
            containerVariants={containerVariants}
            itemVariants={itemVariants}
            bestCitiesData={country.bestCitiesData}
            studentLifeData={country.studentLifeData}
            latestUpdates2025={country.latestUpdates2025}
            policyChanges2025={country.policyChanges2025}
          />
        </motion.div>

        <motion.div
          ref={sectionRefs.resources}
          className="mb-16 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader>Resources</SectionHeader>
          <CountryResourcesSection
            itemVariants={itemVariants}
            resourcecards={country.resourcecards}
            resourceofficialLinks={country.resourceofficialLinks}
            resourceguides={country.resourceguides}
            resourcetools={country.resourcetools}
          />
        </motion.div>

        <motion.div
          ref={sectionRefs.faqs}
          className="mb-16 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader>FAQs</SectionHeader>
          <CountryFAQs itemVariants={itemVariants} faqs={country.faqs} />
        </motion.div>

        <motion.div
          ref={sectionRefs.contact}
          className="mb-16 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader>Interested in studying abroad?</SectionHeader>
          <StudentForm />
        </motion.div>

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
