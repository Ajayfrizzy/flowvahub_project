import { HeroSection } from '../components/home/HeroSection';
import { StatsSection } from '../components/home/StatsSection';
import { FeaturesCarousel } from '../components/home/FeaturesCarousel';
import { MobileAppBenefitsSection } from '../components/home/MobileAppBenefitsSection';
import { HowItWorksCarousel } from '../components/home/HowItWorksCarousel';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FAQSection } from '../components/home/FAQSection';
import { FinalCTASection } from '../components/home/FinalCTASection';

export const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section with Tabs */}
      <HeroSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Features Carousel Section */}
      <FeaturesCarousel />
      
      {/* Mobile App and Benefits Section */}
      <MobileAppBenefitsSection />
      
      {/* How It Works Carousel */}
      <HowItWorksCarousel />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* FAQs Section */}
      <FAQSection />
      
      {/* Final CTA Section */}
      <FinalCTASection />
    </div>
  );
};
