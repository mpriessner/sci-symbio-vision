import { useEffect } from "react";
import SEO from "@/components/SEO";
import { faqs } from "@/data/faqs";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemDescriptionSection from "@/components/ProblemDescriptionSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import VisionSection from "@/components/VisionSection";
import ValidationSection from "@/components/ValidationSection";
import ArticlesTeaser from "@/components/ArticlesTeaser";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
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
      <SEO
        path="/"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "SciSymbio",
            url: "https://www.scisymbio.ai",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.scisymbio.ai/articles?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          },
        ]}
      />
      <Navigation onJoinMission={handleJoinMission} />
      <HeroSection onJoinMission={handleJoinMission} />
      <ProblemDescriptionSection />
      <ProblemSection />
      <SolutionSection />
      <VisionSection />
      <ValidationSection />
      <ArticlesTeaser />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;