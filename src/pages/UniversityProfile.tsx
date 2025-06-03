import React from 'react';
import { motion } from 'framer-motion';
import { UniversityHero } from '@/components/university/UniversityHero';
import { UniversityOverview } from '@/components/university/UniversityOverview';
import { ProgramHighlights } from '@/components/university/ProgramHighlights';
// import { AdmissionRequirements } from '@/components/university/AdmissionRequirements';
import { TuitionFees } from '@/components/university/TuitionFees';
import { Scholarships } from '@/components/university/Scholarships';
import { VisaSupport } from '@/components/university/VisaSupport';
import { CampusLife } from '@/components/university/CampusLife';
import ApplyFooter from '@/components/university/ApplyFooter';
import AdmissionRequirements from '@/components/university/AdmissionRequirements';

const UniversityProfile = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      <UniversityHero />
      <main className="relative px-20">
        <UniversityOverview />
        <ProgramHighlights />
        <AdmissionRequirements />
        <TuitionFees />
        <Scholarships />
        <VisaSupport />
        <CampusLife />
      </main>
      <ApplyFooter />
    </div>
  );
};

export default UniversityProfile;
