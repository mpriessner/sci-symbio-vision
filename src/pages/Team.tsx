import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LinkedinIcon, Mail, ArrowRight, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import martinPhoto from "@/assets/images/Martin Priessner_Bewerbungsfoto.jpg";
import stealthPhoto1 from "@/assets/images/Markus_Habernig.jpeg";
import stealthPhoto2 from "@/assets/images/Lukas_Zitz.jpeg";

const coFounders = [
  {
    photo: stealthPhoto1,
    role: "Co-founder",
    background: "Ex-management consulting, BDO",
  },
  {
    photo: stealthPhoto2,
    role: "Co-founder",
    background: "Chemistry PhD and postdoc",
  },
];

const advisors = [
  {
    label: "Advisor",
    name: "Peter Llewellyn-Davies",
    detail:
      "President, BIOTECH AUSTRIA · Vice Chairman, Shield Therapeutics · Founder, Accellerate Partners",
  },
  {
    label: "Stealth",
    name: "Executive Director, AstraZeneca",
    detail: "Senior pharma R&D leadership",
  },
  {
    label: "Stealth",
    name: "Ex–Bristol Myers Squibb",
    detail: "22 years in pharma",
  },
  {
    label: "Stealth",
    name: "Ex-McKinsey · Unicorn COO",
    detail: "Scaled a startup to $500M raised",
  },
  {
    label: "Stealth",
    name: "Ex-Google · Ex-Microsoft · Oracle",
    detail: "Big Tech engineering leadership",
  },
  {
    label: "Stealth",
    name: "VP Finance, Porsche",
    detail: "Led the Porsche IPO",
  },
];

const Team = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleJoinMission = () => {
    window.location.href = "mailto:contact@scisymbio.ai";
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Team"
        description="The scientists and operators building SciSymbio — an AI lab companion that captures what happens at the bench."
        path="/team"
      />
      <Navigation onJoinMission={handleJoinMission} />

      {/* Hero strip */}
      <section className="pt-40 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="editorial-rule" />
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              The team
            </span>
            <span className="editorial-rule" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.05] mb-8">
            Built by scientists who{" "}
            <span className="italic text-accent">lived the problem</span>.
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed font-light max-w-2xl mx-auto">
            A small, focused team building the intelligent lab companion we wish we had at the bench.
          </p>
        </motion.div>
      </section>

      {/* Founder — centered */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.25em] text-foreground/50 font-semibold mb-10"
          >
            Founder
          </motion.p>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-10">
              <motion.div
                className="absolute -inset-6 rounded-full bg-accent/10 blur-2xl"
                animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <img
                src={martinPhoto}
                alt="Dr. Martin Priessner"
                className="relative w-60 h-60 md:w-72 md:h-72 object-cover rounded-full border border-border/60 subtle-shadow"
              />
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-2">
              Dr. Martin Priessner
            </h2>
            <p className="text-accent text-sm uppercase tracking-[0.2em] font-semibold mb-8">
              CEO & Founder
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed mb-8 font-light max-w-2xl">
              Experienced the reproducibility problem firsthand as a Chemist & AI Expert at AstraZeneca.
              Previously at BCG. Built the vision and leads the development of SciSymbio's AI platform.
              PhD in Chemistry from Imperial College London.
            </p>

            <div className="flex items-center justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/mpriessner1908/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-card border border-border hover:border-accent hover:text-accent rounded-full smooth-transition"
                aria-label="Martin Priessner LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" strokeWidth={1.75} />
              </a>
              <a
                href="mailto:martin.priessner@scisymbio.ai"
                className="inline-flex items-center justify-center w-10 h-10 bg-card border border-border hover:border-accent hover:text-accent rounded-full smooth-transition"
                aria-label="Email Martin"
              >
                <Mail className="w-4 h-4" strokeWidth={1.75} />
              </a>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Co-founders — stealth */}
      <section className="py-20 px-6 bg-secondary/40">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center mb-12"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-foreground/50 font-semibold mb-4">
              Co-founders
            </p>
            <p className="font-display italic text-foreground/60 text-lg max-w-xl">
              Two stealth co-founders — identities announced soon.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {coFounders.map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 text-center subtle-shadow"
              >
                <div className="relative w-36 h-36 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-accent/10 blur-xl" />
                  <img
                    src={person.photo}
                    alt="Stealth co-founder"
                    className="relative w-full h-full object-cover rounded-full border border-border/60"
                    style={{
                      filter: "blur(14px) grayscale(1) contrast(1.05)",
                    }}
                  />
                  <div className="absolute inset-0 rounded-full bg-accent/5" />
                </div>

                <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-2">
                  Stealth
                </p>
                <h3 className="font-display text-2xl font-light mb-2">{person.role}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {person.background}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-display italic text-center text-foreground/50 mt-12 text-base"
          >
            Full team reveal coming soon.
          </motion.p>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.25em] text-foreground/50 font-semibold mb-10 text-center"
          >
            Advisors
          </motion.p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {advisors.map((advisor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-8 text-center subtle-shadow flex flex-col items-center"
              >
                <div className="w-16 h-16 mb-5 rounded-full bg-accent/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-accent/70" strokeWidth={1.5} />
                </div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-accent font-semibold mb-2">
                  {advisor.label}
                </p>
                <h4 className="font-display text-lg leading-snug mb-2">{advisor.name}</h4>
                <p className="text-sm text-foreground/60 leading-relaxed">{advisor.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* We're hiring */}
      <section className="py-24 px-6 bg-secondary/40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="editorial-rule" />
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              Careers
            </span>
            <span className="editorial-rule" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6">
            We're <span className="italic text-accent">hiring</span>.
          </h2>
          <p className="text-lg text-foreground/70 mb-10 font-light max-w-xl mx-auto leading-relaxed">
            Research engineers, ML, and BD — if you want to help end the reproducibility crisis, we want to meet you.
          </p>
          <Button
            size="lg"
            onClick={() => (window.location.href = "mailto:contact@scisymbio.ai")}
            className="rounded-full px-8 py-6 text-base font-medium bg-foreground hover:bg-foreground/90 text-background smooth-transition group"
          >
            Get in touch
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 smooth-transition" />
          </Button>
        </motion.div>
      </section>

      <div className="text-center pb-16 pt-8">
        <Link to="/" className="text-sm text-foreground/60 hover:text-foreground smooth-transition">
          ← Back to home
        </Link>
      </div>

      <Footer />
    </main>
  );
};

export default Team;
