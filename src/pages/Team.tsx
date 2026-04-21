import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LinkedinIcon, Mail, ArrowRight, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import martinPhoto from "@/assets/images/Martin_Priessner.png";

const advisors = [
  { name: "Stealth", title: "Announced soon" },
  { name: "Stealth", title: "Announced soon" },
  { name: "Stealth", title: "Announced soon" },
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
      <Navigation onJoinMission={handleJoinMission} />

      {/* Hero strip */}
      <section className="pt-40 pb-20 px-6 paper-texture">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="editorial-rule" />
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              The team
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.05] mb-8">
            Built by scientists who{" "}
            <span className="italic text-accent">lived the problem</span>.
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed font-light max-w-2xl">
            A small, focused team building the intelligent lab companion we wish we had at the bench.
          </p>
        </motion.div>
      </section>

      {/* Founder */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
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
            className="grid md:grid-cols-[320px_1fr] gap-12 items-start"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-2xl blur-2xl" />
              <img
                src={martinPhoto}
                alt="Dr. Martin Priessner"
                className="relative w-full aspect-square object-cover rounded-2xl border border-border/60 subtle-shadow"
              />
            </div>

            <div>
              <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-2">
                Dr. Martin Priessner
              </h2>
              <p className="text-accent text-sm uppercase tracking-[0.2em] font-semibold mb-8">
                CEO & Founder
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed mb-8 font-light">
                Experienced the reproducibility problem firsthand as a Chemist & AI Expert at AstraZeneca.
                Built the vision and leads the development of SciSymbio's AI platform.
                PhD in Chemistry from Imperial College London.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/martin-priessner/"
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
            </div>
          </motion.article>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-display italic text-center text-foreground/50 mt-16 text-lg"
          >
            More team members announced soon.
          </motion.p>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-24 px-6 bg-secondary/40">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.25em] text-foreground/50 font-semibold mb-10"
          >
            Advisors
          </motion.p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {advisors.map((advisor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-8 text-center subtle-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-accent/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-accent/70" strokeWidth={1.5} />
                </div>
                <h4 className="font-display text-xl mb-1">{advisor.name}</h4>
                <p className="text-sm text-foreground/60 uppercase tracking-wider">{advisor.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* We're hiring */}
      <section className="py-24 px-6">
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

      <div className="text-center pb-16">
        <Link to="/" className="text-sm text-foreground/60 hover:text-foreground smooth-transition">
          ← Back to home
        </Link>
      </div>

      <Footer />
    </main>
  );
};

export default Team;
