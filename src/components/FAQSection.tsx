import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does SciSymbio capture experiments without slowing the scientist down?",
    a: "The companion listens and watches passively in the background. Scientists speak and work as they already do — no new forms, no extra clicks. Our AI structures the captured procedure into a reproducible record automatically.",
  },
  {
    q: "Does it replace our ELN, or work alongside Benchling, LabVantage, or SciNote?",
    a: "It works alongside. SciSymbio captures the procedure — the tacit, in-the-moment execution — and pushes structured output to your existing ELN. It does not ask you to migrate data.",
  },
  {
    q: "How is confidential IP and patient data handled — where is it stored, who has access?",
    a: "Data is encrypted in transit and at rest, stored in your chosen region, and access is scoped per research group. Enterprise deployments support private cloud and on-premise. Customer data is never used to train models.",
  },
  {
    q: "Can the AI understand complex protocols — cell culture, chemical synthesis, multi-step assays?",
    a: "Yes. SciSymbio is built on leading foundation models for voice and vision — we do not train our own models. The companion is grounded in domain context through structured prompting and retrieval over your protocols and reference material. It recognizes apparatus, reagents, sequence of operations, and deviations, and accuracy improves as more of your lab's content is indexed during onboarding — without any model retraining.",
  },
  {
    q: "How is this different from Labguru Assistant, Genemod, or Sapio's AI tools?",
    a: "Most ELN-native AI helps you search and draft. SciSymbio captures the experiment as it happens, in the wet lab, using voice and vision. It's a companion for the bench, not an assistant for the keyboard.",
  },
  {
    q: "Who owns the captured voice and video data — us or you?",
    a: "You do. Full stop. The customer owns the raw media and the derived records. SciSymbio has no rights over your scientific content.",
  },
  {
    q: "What integrations are planned for lab instruments and existing ELNs?",
    a: "We are prioritizing integrations with Revvity Signals, BIOVIA, and Benchling — with more ELN and instrument connectors on the roadmap. Standard instrument output formats (CSV, XLS, common proprietary exports) are supported out of the box. Custom integrations are available for enterprise pilots.",
  },
  {
    q: "What does the reproducibility output look like — a report, a structured record, a video clip?",
    a: "All three. A structured ALCOA+-compatible record, the underlying annotated video for evidence, and a human-readable summary report. Each can be exported or shared with regulators, collaborators, or reviewers.",
  },
  {
    q: "When can we pilot? What's the commitment?",
    a: "Pilots are being scheduled for Q2 and Q3 2026. Commitment is a two-week paid pilot with one research group, no long-term contract required. Get in touch and we'll scope it together.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="editorial-rule" />
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              Questions
            </span>
            <span className="editorial-rule" />
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05] mb-6">
            Frequently <span className="italic text-accent">asked</span>.
          </h2>

          <p className="text-lg text-foreground/70 font-light max-w-2xl mx-auto">
            The questions we hear most from pharma R&D leaders, lab heads, and scientists.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-border last:border-b-0"
              >
                <AccordionTrigger className="text-left font-display text-lg md:text-xl font-normal py-6 hover:no-underline text-foreground hover:text-accent smooth-transition">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/75 leading-relaxed pb-6 text-base font-light">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
