import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

// The online Lab Notebook tool is deployed separately (its own subdomain on the cloud
// VPS — see chatbot-notebook-transparency-prototype-ui/deploy). Until it's live, the nav
// shows it as "coming soon". When it's deployed, flip NOTEBOOK_COMING_SOON to false and
// this becomes a live link to NOTEBOOK_URL — no other change needed.
const NOTEBOOK_URL = "https://notebook.scisymbio.ai";
const NOTEBOOK_COMING_SOON = true;

interface NavigationProps {
  onJoinMission: () => void;
}

const Navigation = ({ onJoinMission }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = (active: boolean) =>
    `text-sm tracking-tight smooth-transition ${
      active ? 'text-foreground font-semibold' : 'text-foreground/60 hover:text-foreground'
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 smooth-transition ${
        isScrolled || !isHome
          ? 'bg-background/90 backdrop-blur-md border-b border-border/80'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" aria-label="SciSymbio home" className="flex items-center gap-2">
            <Logo width={36} height={36} />
            <span className="font-display text-xl tracking-tight">SciSymbio</span>
          </Link>

          <div className="flex items-center gap-8">
            <Link to="/" className={linkClass(location.pathname === '/')}>
              Home
            </Link>
            <Link to="/articles" className={linkClass(location.pathname.startsWith('/articles'))}>
              Articles
            </Link>
            <Link to="/team" className={linkClass(location.pathname === '/team')}>
              Team
            </Link>
            {NOTEBOOK_COMING_SOON ? (
              <span
                className="flex items-center gap-1.5 text-sm tracking-tight text-foreground/40 cursor-not-allowed select-none"
                title="The online Lab Notebook is coming soon"
                aria-disabled="true"
              >
                Lab Notebook
                <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded-full bg-foreground/10 text-foreground/60">
                  Soon
                </span>
              </span>
            ) : (
              <a href={NOTEBOOK_URL} className={linkClass(false)}>
                Lab Notebook
              </a>
            )}
            <Button
              onClick={onJoinMission}
              className="px-5 py-2 h-9 text-sm font-medium bg-foreground hover:bg-foreground/90 text-background smooth-transition rounded-full"
            >
              Join the mission
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
