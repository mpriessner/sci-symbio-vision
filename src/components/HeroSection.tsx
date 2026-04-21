import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import heroBackground from "@/assets/hero-network-bg.jpg";

interface HeroSectionProps {
  onJoinMission: () => void;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HeroSection = ({ onJoinMission }: HeroSectionProps) => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-background/85 network-bg" />

      {/* Animated SVG timeline motif — experiment steps being captured */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(182 79% 22%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(182 79% 22%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(182 79% 22%)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Horizontal timeline */}
        <motion.line
          x1="0" y1="750" x2="1440" y2="750"
          stroke="url(#lineGrad)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Step nodes with staggered pulse */}
        {[180, 420, 660, 900, 1140, 1320].map((x, i) => (
          <motion.g key={x}>
            <motion.circle
              cx={x} cy={750} r="6"
              fill="hsl(182 79% 22%)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.8 }}
              transition={{ delay: 0.4 + i * 0.18, duration: 0.5 }}
            />
            <motion.circle
              cx={x} cy={750} r="6"
              fill="hsl(182 79% 22%)"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{
                delay: 1.2 + i * 0.18,
                duration: 2.4,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          </motion.g>
        ))}

        {/* Floating capture arcs — subtle hint of video/audio capture */}
        {[260, 540, 820, 1060].map((x, i) => (
          <motion.path
            key={`arc-${x}`}
            d={`M${x - 40} 750 Q${x} 680 ${x + 40} 750`}
            stroke="hsl(182 79% 22%)"
            strokeWidth="0.8"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.5, 0.5, 0] }}
            transition={{
              delay: 1.8 + i * 0.35,
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-5xl mx-auto px-6"
      >
        <motion.div variants={item} className="mb-8">
          <Logo
            width={400}
            height={180}
            className="mx-auto mb-4"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 tracking-tight">
            SciSymbio
          </h1>
        </motion.div>

        <motion.h2
          variants={item}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          The AI Lab Companion{" "}
          <span className="text-accent">
            Accelerating Drug Discovery
          </span>
        </motion.h2>

        <motion.h3
          variants={item}
          className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          We are solving the multi-billion dollar research reproducibility crisis
          with the intelligent lab companion of the future.
        </motion.h3>

        <motion.div variants={item}>
          <Button
            onClick={onJoinMission}
            size="lg"
            className="px-12 py-6 text-lg font-semibold bg-foreground hover:bg-foreground/90 text-background hover:text-background glow-effect smooth-transition"
          >
            Join the Mission
          </Button>
        </motion.div>
      </motion.div>

      {/* Subtle ambient dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/30 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-accent/20 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-accent/25 rounded-full animate-pulse delay-2000" />
      </div>
    </section>
  );
};

export default HeroSection;
