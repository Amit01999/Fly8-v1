import React from 'react';
import StatsCounter from '@/components/StatsCounter';
import FeatureGrid from '@/components/FeatureGrid';
import HowItWorks from '@/components/HowItWorks';
import TestimonialsSection from '@/components/TestimonialsSection';
import FeaturedUniversities from '@/components/FeaturedUniversities';
import BlogNewsletter from '@/components/BlogNewsletter';
import FinalCTA from '@/components/FinalCTA';
import HeroSection from '@/components/HeroSection';
import JoinOurPlatfrom from '@/components/JoinOurPlatfrom';
import TopDestinations from '@/components/TopDestinations';

const Index = () => {
  return (
    <>
      <HeroSection />
      <FeaturedUniversities />
      {/* <StatsCounter /> */}
      {/* <FeatureGrid /> */}
      <HowItWorks />
      <JoinOurPlatfrom />
      <TopDestinations />
      {/* <FeaturedUniversities /> */}
      <BlogNewsletter />
      <FinalCTA />
      <TestimonialsSection />
    </>
  );
};

export default Index;
