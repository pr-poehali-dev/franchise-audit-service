import HeroSection from "@/components/sections/HeroSection";
import ProblemsSection from "@/components/sections/ProblemsSection";
import SolutionSection from "@/components/sections/SolutionSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}