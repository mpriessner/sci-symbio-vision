import { motion } from "framer-motion";

const ValidationSection = () => {
  return (
    <section className="py-32 px-6 bg-secondary/40">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="editorial-rule" />
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
            Discovery
          </span>
          <span className="editorial-rule" />
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-light leading-[1.1] mb-10">
          Shaped by <span className="italic text-accent">200+ conversations</span> with the people who do the work.
        </h2>

        <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed max-w-3xl mx-auto mb-14">
          Wet-lab scientists, lab heads, R&amp;D leaders, IT, compliance, and CEOs — across global pharma, leading academic institutions, and early-stage biotech.
        </p>

        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-px bg-accent/40" />
          <p className="text-xs text-foreground/55 uppercase tracking-[0.22em] font-semibold">
            Including researchers at
          </p>
          <p className="font-display text-base md:text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            AstraZeneca · Takeda · Roche · Boehringer Ingelheim · Harvard · Imperial College London · TU Wien
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ValidationSection;
