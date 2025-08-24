import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const ContactSection = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:martin.priessner@scisymbio.com";
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-8 fade-in-up">
          Join the <span className="text-accent">R&D Transformation</span>.
        </h3>
        
        <p className="text-xl text-secondary-foreground mb-12 leading-relaxed fade-in-up">
          We are looking for visionary partners, investors, and talent to set a new standard 
          for science with us. If you share our mission, we would love to hear from you.
        </p>
        
        {/* Contact Information */}
        <div className="mb-12 fade-in-up">
          <a 
            href="mailto:martin.priessner@scisymbio.com"
            className="text-2xl font-semibold text-accent hover:text-accent/80 smooth-transition inline-flex items-center space-x-3"
          >
            <Mail className="w-8 h-8" />
            <span>martin.priessner@scisymbio.com</span>
          </a>
        </div>
        
        {/* CTA Button */}
        <Button 
          onClick={handleEmailClick}
          size="lg"
          className="px-12 py-6 text-lg font-semibold bg-accent hover:bg-accent/90 text-accent-foreground glow-effect smooth-transition fade-in-up"
        >
          Get in Touch
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;