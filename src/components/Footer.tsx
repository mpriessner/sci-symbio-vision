import { Link } from "react-router-dom";
import Logo from "./Logo";
import { LinkedinIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <Logo width={32} height={32} />
              <span className="font-display text-xl tracking-tight">SciSymbio</span>
            </div>
            <p className="font-display italic text-foreground/70 text-lg max-w-sm leading-snug">
              The objective witness for every experiment.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/50 font-semibold mb-4">
              Sitemap
            </p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-foreground/70 hover:text-foreground smooth-transition">Home</Link></li>
              <li><Link to="/articles" className="text-foreground/70 hover:text-foreground smooth-transition">Articles</Link></li>
              <li><Link to="/team" className="text-foreground/70 hover:text-foreground smooth-transition">Team</Link></li>
              <li><a href="mailto:contact@scisymbio.ai" className="text-foreground/70 hover:text-foreground smooth-transition">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/50 font-semibold mb-4">
              Connect
            </p>
            <a
              href="https://www.linkedin.com/company/scisymbio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground smooth-transition group"
            >
              <LinkedinIcon className="w-4 h-4 group-hover:text-accent smooth-transition" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/50">
          <p>© 2026 SciSymbio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy#imprint" className="hover:text-foreground smooth-transition">Legal notice</Link>
            <Link to="/privacy" className="hover:text-foreground smooth-transition">Privacy policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
