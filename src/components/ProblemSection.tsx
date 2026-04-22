import { motion } from "framer-motion";
import { Clock, FlaskConical, Brain } from "lucide-react";

const issues = [
  {
    icon: Clock,
    title: "Time-consuming documentation",
    body: "Researchers spend countless hours on manual record-keeping instead of actual discovery.",
  },
  {
    icon: FlaskConical,
    title: "Costly human errors",
    body: "Small mistakes in protocols or measurements can invalidate entire studies.",
  },
  {
    icon: Brain,
    title: "Loss of tacit knowledge",
    body: "Critical insights and expertise walk out the door when researchers leave.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="editorial-rule" />
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              Billions lost
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05] mb-8">
            Progress, <span className="italic text-accent">stalled</span>.
          </h2>

          <p className="text-xl text-foreground/70 leading-relaxed font-light">
            Over $28 billion is lost annually in the U.S. alone due to research that can't be reproduced.
            This silent crisis is one of the greatest barriers to innovation. Inefficient documentation,
            undetected errors, and the loss of invaluable expertise are slowing down discoveries
            that could change our world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {issues.map((issue, i) => (
            <motion.div
              key={issue.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="group bg-card p-10 flex flex-col relative overflow-hidden"
            >
              <motion.div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-accent/[0.04]"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 smooth-transition">
                <motion.div
                  whileHover={{ rotate: 12 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <issue.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </motion.div>
              </div>
              <h3 className="font-display text-2xl mb-3 leading-tight relative">{issue.title}</h3>
              <p className="text-foreground/70 leading-relaxed relative">{issue.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
