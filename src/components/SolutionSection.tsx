import { motion } from "framer-motion";
import { Clock, Shield, Brain, Zap } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Saves up to 8h/week",
    body: "of every scientist, freeing valuable research time.",
  },
  {
    icon: Shield,
    title: "Eliminates data gaps & errors",
    body: "through video evidence, creating high-quality results.",
  },
  {
    icon: Brain,
    title: "Scales expert knowledge",
    body: "turning insights from your best chemists into a searchable video database.",
  },
  {
    icon: Zap,
    title: "Accelerates experimenting",
    body: "through agent-to-agent communication with lab equipment.",
  },
];

const deliverables = [
  "Automated documentation and tracking",
  "Real-time error detection and prevention",
  "Knowledge preservation and sharing",
  "Seamless lab equipment integration",
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-32 px-6 bg-secondary/40">
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
              The solution
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05] mb-8">
            A companion that speeds up{" "}
            <span className="italic text-accent">drug discovery</span>.
          </h2>

          <p className="text-xl text-foreground/70 leading-relaxed font-light">
            SciSymbio listens, watches, and structures every experiment into a perfect, reproducible record —
            without getting in the scientist's way.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
          {/* Left: benefits */}
          <div className="space-y-10">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="flex gap-5"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                  <b.icon className="w-4 h-4 text-accent" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-2xl mb-2 leading-tight">{b.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{b.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: video + what we deliver */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="rounded-2xl overflow-hidden card-shadow border border-border/60">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/X1Zgf8CwLug"
                  title="SciSymbio Lab Companion Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/60 subtle-shadow">
              <p className="text-xs uppercase tracking-[0.2em] text-foreground/50 font-semibold mb-5">
                What we deliver
              </p>
              <ul className="space-y-3">
                {deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                    <span className="text-foreground/85">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
