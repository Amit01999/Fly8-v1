import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
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
import universities from '../Data/universitydetailes';

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

const findUniversity = (
  universitycode: string | undefined,
  universities: University[]
): University | undefined => {
  if (!universitycode) return universities[0]; // Fallback to first university if no code provided
  return universities.find(uni => uni.universitycode === universitycode);
};

const UniversityProfile: React.FC = () => {
  const { universitycode } = useParams<{ universitycode: string }>(); // Get universitycode from URL params

  const university = findUniversity(universitycode, universities);

  if (!university) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <h2 className="text-2xl font-bold text-gray-900">
          University not found
        </h2>
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
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 to-blue-50">
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
    </div>
  );
};

export default UniversityProfile;
