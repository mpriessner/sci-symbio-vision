import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import MoleculeOrbit from "@/components/MoleculeOrbit";
import CountUp from "@/components/CountUp";
import MagneticButton from "@/components/MagneticButton";

interface HeroSectionProps {
  onJoinMission: () => void;
}

const HeroSection = ({ onJoinMission }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 px-6 overflow-hidden">
      {/* Large rotating molecule motif, bottom-right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.55, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
        className="absolute -right-32 -bottom-32 md:-right-20 md:-bottom-20 w-[600px] h-[600px] lg:w-[720px] lg:h-[720px] pointer-events-none"
      >
        <MoleculeOrbit />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="editorial-rule" />
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
                The AI lab companion
              </span>
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-accent"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            <AnimatedHeadline
              text="Accelerating drug discovery, one experiment at a time."
              accent={["drug", "discovery,"]}
              className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] font-light text-foreground mb-8"
              as="h1"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-2xl mb-12 font-light"
            >
              We are solving the multi-billion dollar research reproducibility crisis
              with the intelligent lab companion of the future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
              className="flex flex-wrap items-center gap-4"
            >
              <MagneticButton>
                <Button
                  onClick={onJoinMission}
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-medium bg-foreground hover:bg-foreground/90 text-background smooth-transition group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Join the mission
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 smooth-transition" />
                  </span>
                  {/* shimmering accent bar */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                  />
                </Button>
              </MagneticButton>
              <a
                href="#solution"
                className="text-sm font-medium text-foreground/70 hover:text-foreground smooth-transition underline underline-offset-4 decoration-accent/40 hover:decoration-accent"
              >
                See how it works
              </a>
            </motion.div>
          </div>

          {/* Stats aside */}
          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="lg:col-span-4 lg:border-l lg:border-border lg:pl-10 bg-background/40 backdrop-blur-[2px] rounded-xl p-6 lg:p-0 lg:bg-transparent"
          >
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/50 font-semibold mb-3">
                  The crisis
                </p>
                <CountUp
                  end={28}
                  prefix="$"
                  suffix="B"
                  duration={2.2}
                  className="font-display text-5xl md:text-6xl text-foreground font-light leading-none"
                />
                <p className="text-sm text-foreground/60 mt-3 leading-relaxed">
                  lost each year in the U.S. to non-reproducible preclinical research.
                </p>
              </div>

              <div className="h-px bg-border" />

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/50 font-semibold mb-3">
                  The waste
                </p>
                <CountUp
                  end={20}
                  suffix="%"
                  duration={2}
                  className="font-display text-5xl md:text-6xl text-foreground font-light leading-none"
                />
                <p className="text-sm text-foreground/60 mt-3 leading-relaxed">
                  of every scientist's week spent on manual documentation.
                </p>
              </div>

              <div className="h-px bg-border" />

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/50 font-semibold mb-3">
                  The answer
                </p>
                <p className="font-display text-2xl text-foreground italic leading-tight">
                  A companion that watches,<br />listens, and remembers.
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Scanning line bottom of hero */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, ease: "easeInOut", delay: 0.8 }}
        style={{ transformOrigin: "left" }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0"
      />
    </section>
  );
};

export default HeroSection;
