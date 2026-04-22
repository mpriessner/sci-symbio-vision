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
            Validated
          </span>
          <span className="editorial-rule" />
        </div>

        <h2 className="font-display text-3xl md:text-4xl font-light leading-tight mb-16 text-foreground/70">
          Our vision — validated at the highest level.
        </h2>

        <blockquote className="font-display text-3xl md:text-5xl font-light italic leading-[1.15] mb-10">
          <span className="text-accent">"</span>
          We have signed a Letter of Intent&nbsp;… to solve this crisis at its root.
          <span className="text-accent">"</span>
        </blockquote>

        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-px bg-accent/40" />
          <p className="text-sm text-foreground/60 uppercase tracking-[0.15em] font-medium">
            Director of AI · Leading global pharmaceutical company
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ValidationSection;
