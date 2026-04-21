import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
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
            Our vision
          </span>
          <span className="editorial-rule" />
        </div>

        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-12">
          Imagine a world where every discovery is{" "}
          <span className="italic text-accent">verifiable</span>.
        </h2>

        <p className="text-xl md:text-2xl text-foreground/75 leading-relaxed font-light max-w-3xl mx-auto">
          SciSymbio is pioneering a new era of scientific integrity. We are building an intelligent partner
          for researchers that augments human expertise, not replaces it. Our vision is a lab where every step
          is transparent, every result is traceable, and invaluable knowledge is preserved forever.
          We accelerate progress by giving research back its foundation:{" "}
          <span className="font-semibold text-foreground not-italic">Trust</span>.
        </p>
      </motion.div>
    </section>
  );
};

export default VisionSection;
