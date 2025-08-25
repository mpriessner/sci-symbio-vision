import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemDescriptionSection from "@/components/ProblemDescriptionSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import VisionSection from "@/components/VisionSection";
import ValidationSection from "@/components/ValidationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  const handleJoinMission = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Add smooth scrolling for the entire page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Navigation onJoinMission={handleJoinMission} />
      <HeroSection onJoinMission={handleJoinMission} />
      <ProblemDescriptionSection />
      <ProblemSection />
      <SolutionSection />
      <VisionSection />
      <ValidationSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;