import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Soft teal aurora that drifts on scroll. Fixed, behind content,
 * adds warmth and depth without competing with typography.
 */
const AuroraGlow = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 4000], [0, -400]);
  const y2 = useTransform(scrollY, [0, 4000], [0, 300]);
  const x1 = useTransform(scrollY, [0, 4000], [0, 150]);
  const x2 = useTransform(scrollY, [0, 4000], [0, -100]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      <motion.div
        style={{ y: y1, x: x1 }}
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full"
      >
        <div
          className="w-full h-full rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, hsla(182, 79%, 32%, 0.22), transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: y2, x: x2 }}
        className="absolute top-[40%] right-[-15%] w-[700px] h-[700px] rounded-full"
      >
        <div
          className="w-full h-full rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, hsla(182, 79%, 42%, 0.18), transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[30%] w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, hsla(182, 79%, 22%, 0.15), transparent 70%)",
        }}
      />
    </div>
  );
};

export default AuroraGlow;
