import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LinkedinIcon, Mail, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import martinPhoto from "@/assets/images/Martin_Priessner.png";

const Team = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleJoinMission = () => {
    window.location.href = "mailto:contact@scisymbio.ai";
  };

  const advisors = [
    { name: "Stealth", title: "Advisor — Announced soon" },
    { name: "Stealth", title: "Advisor — Announced soon" },
    { name: "Stealth", title: "Advisor — Announced soon" },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation onJoinMission={handleJoinMission} />

      {/* Hero strip */}
      <section className="pt-40 pb-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            The people behind SciSymbio
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Built by scientists who{" "}
            <span className="text-accent">lived the problem.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            A small, focused team building the intelligent lab companion we wish we had at the bench.
          </p>
        </motion.div>
      </section>

      {/* Founder */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-widest uppercase text-foreground/50 mb-8"
          >
            Founder
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid md:grid-cols-[320px_1fr] gap-10 items-start bg-card rounded-2xl p-8 md:p-10 card-shadow"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-2xl" />
              <img
                src={martinPhoto}
                alt="Dr. Martin Priessner"
                className="relative w-full aspect-square object-cover rounded-2xl"
              />
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Dr. Martin Priessner</h3>
              <p className="text-accent font-semibold mb-6 text-lg">CEO & Founder</p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Experienced the reproducibility problem firsthand as a Chemist & AI Expert at AstraZeneca.
                Built the vision and leads the development of SciSymbio's AI platform.
                PhD in Chemistry from Imperial College London.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/martin-priessner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-accent/10 hover:bg-accent/20 rounded-full smooth-transition group"
                  aria-label="Martin Priessner LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5 text-accent group-hover:scale-110 smooth-transition" />
                </a>
                <a
                  href="mailto:martin.priessner@scisymbio.ai"
                  className="inline-flex items-center justify-center w-10 h-10 bg-accent/10 hover:bg-accent/20 rounded-full smooth-transition group"
                  aria-label="Email Martin"
                >
                  <Mail className="w-5 h-5 text-accent group-hover:scale-110 smooth-transition" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-foreground/50 text-sm mt-8"
          >
            More team members announced soon.
          </motion.p>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-16 px-6 bg-muted/40">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-widest uppercase text-foreground/50 mb-8"
          >
            Advisors
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {advisors.map((advisor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-background border border-border rounded-xl p-6 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-accent/60" />
                </div>
                <h4 className="font-semibold text-lg mb-1">{advisor.name}</h4>
                <p className="text-sm text-foreground/60">{advisor.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* We're hiring strip */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-2xl p-10 md:p-14 border border-accent/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">We're hiring.</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-xl mx-auto">
            Research engineers, ML, and BD — if you want to help end the reproducibility crisis, we want to meet you.
          </p>
          <Button
            size="lg"
            onClick={() => (window.location.href = "mailto:contact@scisymbio.ai")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8"
          >
            Get in touch
          </Button>
        </motion.div>
      </section>

      <div className="text-center pb-12">
        <Link to="/" className="text-accent hover:underline text-sm">
          ← Back to home
        </Link>
      </div>

      <Footer />
    </main>
  );
};

export default Team;
