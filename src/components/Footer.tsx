import Logo from "./Logo";
import { LinkedinIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left Column - Logo and Tagline */}
          <div className="text-center md:text-left">
            <Logo className="mb-4 mx-auto md:mx-0" />
            <p className="text-secondary-foreground">
              The objective witness for every experiment.
            </p>
          </div>
          
          {/* Center Column - Copyright */}
          <div className="text-center">
            <p className="text-secondary-foreground mb-2">
              © 2025 SciSymbio. All Rights Reserved.
            </p>
            <div className="space-x-4">
              <a 
                href="#" 
                className="text-secondary-foreground hover:text-accent smooth-transition text-sm"
              >
                Legal Notice
              </a>
              <span className="text-secondary-foreground">•</span>
              <a 
                href="#" 
                className="text-secondary-foreground hover:text-accent smooth-transition text-sm"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          
          {/* Right Column - LinkedIn */}
          <div className="text-center md:text-right">
            <a 
              href="#"
              className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 hover:bg-accent/20 rounded-full smooth-transition group"
              aria-label="SciSymbio LinkedIn Page"
            >
              <LinkedinIcon className="w-6 h-6 text-accent group-hover:scale-110 smooth-transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;