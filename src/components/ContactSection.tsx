import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:contact@scisymbio.ai";
  };

  return (
    <section id="contact" className="py-32 px-6">
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
            Get in touch
          </span>
          <span className="editorial-rule" />
        </div>

        <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05] mb-8">
          Join the <span className="italic text-accent">R&D transformation</span>.
        </h2>

        <p className="text-xl text-foreground/70 mb-14 leading-relaxed font-light max-w-2xl mx-auto">
          We are looking for visionary partners, investors, and talent to set a new standard
          for science with us. If you share our mission, we would love to hear from you.
        </p>

        <div className="flex flex-col items-center gap-8">
          <a
            href="mailto:contact@scisymbio.ai"
            className="font-display text-2xl md:text-3xl italic text-foreground hover:text-accent smooth-transition border-b border-accent/30 hover:border-accent pb-1"
          >
            contact@scisymbio.ai
          </a>

          <Button
            onClick={handleEmailClick}
            size="lg"
            className="rounded-full px-8 py-6 text-base font-medium bg-foreground hover:bg-foreground/90 text-background smooth-transition group"
          >
            Get in touch
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 smooth-transition" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
