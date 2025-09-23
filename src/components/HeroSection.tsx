import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import heroBackground from "@/assets/hero-network-bg.jpg";

interface HeroSectionProps {
  onJoinMission: () => void;
}

const HeroSection = ({ onJoinMission }: HeroSectionProps) => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/80 network-bg" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Logo */}
        <div className="mb-8 fade-in-up">
          <Logo 
            width={300} 
            height={135} 
            className="mx-auto mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            SciSymbio
          </h1>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up">
          The AI Lab Companion{" "}
          <span className="text-foreground">
            Accelerating Drug Discovery
          </span>
        </h2>
        
        <h3 className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed fade-in-up">
          We are solving the multi-billion dollar research reproducibility crisis 
          with the intelligent lab companion of the future.
        </h3>
        
        <Button 
          onClick={onJoinMission}
          size="lg"
          className="px-12 py-6 text-lg font-semibold bg-foreground hover:bg-foreground/90 text-background hover:text-background glow-effect smooth-transition fade-in-up"
        >
          Join the Mission
        </Button>
      </div>
      
      {/* Subtle animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/30 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-accent/20 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-accent/25 rounded-full animate-pulse delay-2000" />
      </div>
    </section>
  );
};

export default HeroSection;