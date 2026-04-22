import { motion } from "framer-motion";
import scientistImage from "@/assets/images/Scientist_sad.png";

const ProblemDescriptionSection = () => {
  return (
    <section className="py-32 px-6 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="editorial-rule" />
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
                The problem
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] mb-10 text-foreground">
              Every day saved in R&D is worth <span className="italic text-accent">millions</span>.
            </h2>

            <p className="text-xl leading-relaxed text-foreground/80 font-light">
              Scientists <span className="font-semibold text-foreground">waste 20%</span> of their <span className="font-semibold text-foreground">time</span> with inefficient documentation — a <span className="font-semibold text-foreground">~$400,000 annual loss</span> per lab, <span className="font-semibold text-foreground">causing errors</span> that contribute to a <span className="font-semibold text-foreground">$28B</span> annual <span className="font-semibold text-foreground">reproducibility crisis</span> in the U.S.
            </p>

            <div className="text-xs text-foreground/50 mt-10 space-y-1 leading-relaxed">
              <p>1. 200+ in-depth interviews with preclinical scientists within pharma and academia.</p>
              <p>2. Based on a typical 10-person lab and an estimated $200k fully-loaded annual cost per scientist.</p>
              <p>3. Baker, M. & Penny, D. Is there a reproducibility crisis? <em>Nature 533, 452–454 (2016)</em>.</p>
              <p>4. Freedman, L. P. et. al (2015) The Economics of Reproducibility in Preclinical Research. <em>PLOS Biology</em>.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden subtle-shadow border border-border/60">
              <img
                src={scientistImage}
                alt="Frustrated scientist working with complex data"
                className="w-full h-[28rem] object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 max-w-xs card-shadow border border-border/60">
              <blockquote className="font-display italic text-foreground leading-snug">
                "When you make a mistake, you might not find out until three months and thousands of dollars later."
              </blockquote>
              <p className="text-xs text-foreground/50 mt-3 uppercase tracking-wider font-medium">
                — Postdoc, Genomics
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemDescriptionSection;
