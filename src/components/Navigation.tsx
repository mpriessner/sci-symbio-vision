import { useState, useEffect } from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  onJoinMission: () => void;
}

const Navigation = ({ onJoinMission }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 smooth-transition ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo width={120} height={54} />
          
          <Button 
            onClick={onJoinMission}
            className="px-8 py-2 text-sm font-semibold bg-accent hover:bg-accent/90 text-accent-foreground hover:text-accent-foreground smooth-transition"
          >
            Join the Mission
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;