import { useState } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { StatsSection } from '../components/home/StatsSection';
import { FeaturesCarousel } from '../components/home/FeaturesCarousel';
import { MobileAppBenefitsSection } from '../components/home/MobileAppBenefitsSection';
import { HowItWorksCarousel } from '../components/home/HowItWorksCarousel';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { NeedAnswerSection } from '../components/home/NeedAnswerSection';
import { FinalCTASection } from '../components/home/FinalCTASection';
// Brand Components
import { AmplifySection } from '../components/home/brands/AmplifySection';
import { WhySubscribeSection } from '../components/home/brands/WhySubscribeSection';
import { GrowthPlansSection } from '../components/home/brands/GrowthPlansSection';
import { HowItWorksBrandsSection } from '../components/home/brands/HowItWorksBrandsSection';
import { SuccessStoriesSection } from '../components/home/brands/SuccessStoriesSection';
import { BrandsFAQSection } from '../components/home/brands/BrandsFAQSection';
import { BrandsCTASection } from '../components/home/brands/BrandsCTASection';

export const Home = () => {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div className="pt-16">
      {/* Hero Section with Tabs */}
      <HeroSection activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === 'users' ? (
        <>
        {/* Users Content */}
          <StatsSection />
          <FeaturesCarousel />
          <MobileAppBenefitsSection />
          <HowItWorksCarousel />
          <TestimonialsSection />
          <NeedAnswerSection />
          <FinalCTASection />
        </>
      ) : (
        <>
          {/* Brands Content */}
          <AmplifySection />
          <WhySubscribeSection />
          <GrowthPlansSection />
          <HowItWorksBrandsSection />
          <SuccessStoriesSection />
          <BrandsFAQSection />
          <BrandsCTASection />
        </>
      )}
    </div>
  );
};
