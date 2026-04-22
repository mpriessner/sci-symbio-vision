import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedHeadlineProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
  /**
   * Words or phrases to wrap in italic accent. Match the plain-text form
   * exactly (case-sensitive). Matching words render with italic text-accent.
   */
  accent?: string[];
  /** Optional trailing non-animated children (e.g. punctuation). */
  after?: ReactNode;
}

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const word: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const AnimatedHeadline = ({
  text,
  className = "",
  as: Tag = "h1",
  delay = 0,
  accent = [],
  after,
}: AnimatedHeadlineProps) => {
  const accentSet = new Set(accent.map((a) => a.toLowerCase().replace(/[.,]/g, "")));
  const words = text.split(" ");

  const MotionTag = motion[Tag as "h1"];

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
      transition={{ delayChildren: delay }}
    >
      {words.map((w, i) => {
        const clean = w.toLowerCase().replace(/[.,]/g, "");
        const isAccent = accentSet.has(clean);
        return (
          <motion.span
            key={i}
            variants={word}
            className={`inline-block mr-[0.25em] ${
              isAccent ? "italic text-accent" : ""
            }`}
          >
            {w}
          </motion.span>
        );
      })}
      {after}
    </MotionTag>
  );
};

export default AnimatedHeadline;
