import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  onJoinMission: () => void;
}

const Navigation = ({ onJoinMission }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = (active: boolean) =>
    `text-sm font-medium smooth-transition ${
      active ? 'text-accent' : 'text-foreground/70 hover:text-foreground'
    }`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 smooth-transition ${
      isScrolled || location.pathname !== '/'
        ? 'bg-background/95 backdrop-blur-md border-b border-border'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" aria-label="SciSymbio home">
            <Logo width={120} height={54} />
          </Link>

          <div className="flex items-center gap-8">
            <Link to="/" className={linkClass(location.pathname === '/')}>
              Home
            </Link>
            <Link to="/team" className={linkClass(location.pathname === '/team')}>
              Team
            </Link>
            <Button
              onClick={onJoinMission}
              className="px-6 py-2 text-sm font-semibold bg-accent hover:bg-accent/90 text-accent-foreground hover:text-accent-foreground smooth-transition"
            >
              Join the Mission
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
