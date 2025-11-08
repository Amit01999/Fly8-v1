import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader2, AlertCircle, ArrowLeft } from 'lucide-react';
import { UniversityHero } from '@/components/university/UniversityHero';
import { UniversityOverview } from '@/components/university/UniversityOverview';
import { ProgramHighlights } from '@/components/university/ProgramHighlights';
import type { Program } from '@/components/university/ProgramHighlights';
import { TuitionFees } from '@/components/university/TuitionFees';
import { Scholarships } from '@/components/university/Scholarships';
import { VisaSupport } from '@/components/university/VisaSupport';
import { CampusLife } from '@/components/university/CampusLife';
import ApplyFooter from '@/components/university/ApplyFooter';
import AdmissionRequirements from '@/components/university/AdmissionRequirements';
import { fetchUniversityByCode } from '../services/operations/universityAPI';

interface University {
  universitycode: string;
  universityName: string;
  campusName?: string;
  location?: string;
  imageUrl?: string;
  tagline?: string;
  stats?: string[];
  description?: string;
  overviewData?: Array<{ label: string; value: string }>;
  generalInfo?: string;
  applicationFee?: number;
  financialRequirement?: number;
  tuitionDeposit?: number;
  processingFee?: number;
  generalRequirements?: string[];
  undergraduate?: {
    englishTests: Array<{ name: string; score: string }>;
    otherTests?: string[];
    additionalRequirements?: string[];
  };
  graduate?: {
    englishTests: Array<{ name: string; score: string }>;
    additionalRequirements?: string[];
  };
  conditionalAdmission?: {
    available: boolean;
    description: string;
    benefits: string[];
  };
  tuitionData?: Array<{ category: string; amount: string; period: string }>;
  additionalFees?: Array<{ name?: string; amount: string; ' dbl'?: string }>;
  livingCosts?: Array<{ category: string; range: string }>;
  scholarships?: Array<{
    name: string;
    amount: string;
    type: string;
    eligibility: string;
    renewable: boolean;
    popular: boolean;
  }>;
  visaSteps?: Array<{ step: number; title: string; description: string }>;
  workOpportunities?: Array<{
    type: string;
    description: string;
    timing: string;
  }>;
  campusImages?: Array<{ src: string; alt: string }>;
  campusFeatures?: Array<{ title: string; description: string }>;
  testimonial?: {
    quote: string;
    author: string;
    country: string;
    program: string;
  };
  undergraduatePrograms?: Array<{
    title: string;
    duration: string;
    type: string;
    popular: boolean;
    icon?: string;
  }>;
  graduatePrograms?: Array<{
    title: string;
    duration: string;
    type: string;
    popular: boolean;
    icon?: string;
  }>;
}

const UniversityProfile: React.FC = () => {
  const { universitycode } = useParams<{ universitycode: string }>();
  const navigate = useNavigate();

  const [university, setUniversity] = useState<University | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch university data from backend
  useEffect(() => {
    const loadUniversity = async () => {
      if (!universitycode) {
        setError('No university code provided');
        setLoading(false);
        return;
      }

      setLoading(true);
      setError('');

      try {
        const response = await fetchUniversityByCode(universitycode);

        if (response && response.success) {
          setUniversity(response.data);
        } else {
          setError(response?.message || 'University not found');
        }
      } catch (err: any) {
        console.error('Error loading university:', err);
        setError('Failed to load university details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadUniversity();
  }, [universitycode]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <div className="inline-block p-8 rounded-3xl bg-white shadow-2xl">
            <Loader2 className="h-16 w-16 text-sky-600 animate-spin mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Loading University Details...
            </h2>
            <p className="text-gray-600">Please wait while we fetch the information</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !university) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4">
        <div className="text-center max-w-md">
          <div className="inline-block p-8 rounded-3xl bg-white shadow-2xl">
            <div className="p-6 rounded-2xl bg-red-50 w-fit mx-auto mb-6">
              <AlertCircle className="h-16 w-16 text-red-600 mx-auto" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {error || 'University Not Found'}
            </h2>
            <p className="text-gray-600 mb-6">
              {error
                ? 'We encountered an error while loading the university details.'
                : 'The university you are looking for could not be found.'}
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold text-gray-700 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
              <button
                onClick={() => navigate('/universities')}
                className="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white rounded-xl font-semibold transition-all duration-300"
              >
                View All Universities
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Construct data objects for child components
  const universityData = {
    universityName: university.universityName,
    generalInfo: university.generalInfo,
    applicationFee: university.applicationFee,
    financialRequirement: university.financialRequirement,
    tuitionDeposit: university.tuitionDeposit,
    processingFee: university.processingFee,
    generalRequirements: university.generalRequirements,
    undergraduate: university.undergraduate,
    graduate: university.graduate,
    conditionalAdmission: university.conditionalAdmission,
  };

  const tuitionInfo = {
    tuitionData: university.tuitionData,
    additionalFees: university.additionalFees,
    livingCosts: university.livingCosts,
  };

  const scholarshipInfo = {
    universityName: university.universityName,
    scholarships: university.scholarships,
  };

  const visaInfo = {
    visaSteps: university.visaSteps,
    workOpportunities: university.workOpportunities,
  };

  const campusInfo = {
    campusImages: university.campusImages,
    campusFeatures: university.campusFeatures,
    universityName: university.universityName,
    universityLocation: university.location,
  };

  // Define programs arrays from university object
  const undergraduatePrograms = university.undergraduatePrograms || [];
  const graduatePrograms = university.graduatePrograms || [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <UniversityHero
        universityName={university.universityName}
        campusName={university.campusName ?? 'Main Campus'}
        location={university.location ?? 'Unknown Location'}
        imageUrl={university.imageUrl ?? ''}
        tagline={university.tagline ?? ''}
        stats={[
          university.stats?.[0] ?? '',
          university.stats?.[1] ?? '',
          university.stats?.[2] ?? '',
        ]}
      />
      <main className="relative px-20">
        <UniversityOverview
          universityName={university.universityName}
          description={university.description ?? ''}
          overviewData={university.overviewData}
        />
        <ProgramHighlights
          undergraduatePrograms={undergraduatePrograms}
          graduatePrograms={graduatePrograms}
        />
        <AdmissionRequirements universityData={universityData} />
        <TuitionFees tuitionInfo={tuitionInfo} />
        <Scholarships scholarshipInfo={scholarshipInfo} />
        <VisaSupport visaInfo={visaInfo} />
        <CampusLife campusInfo={campusInfo} />
      </main>
      <ApplyFooter />
    </motion.div>
  );
};

export default UniversityProfile;
