import { motion } from "framer-motion";

/**
 * Rotating hexagonal molecule motif — benzene-like ring with orbiting
 * satellite atoms and a central AI "nucleus". Teal, editorial-friendly.
 */
const MoleculeOrbit = ({ className = "" }: { className?: string }) => {
  const ringRadius = 60;
  const satelliteRadius = 110;
  const orbitRadius = 160;

  // hexagon vertices for the ring
  const hexPoints = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    return {
      x: Math.cos(angle) * ringRadius,
      y: Math.sin(angle) * ringRadius,
    };
  });

  const satellites = Array.from({ length: 5 }, (_, i) => {
    const angle = ((Math.PI * 2) / 5) * i;
    return {
      x: Math.cos(angle) * satelliteRadius,
      y: Math.sin(angle) * satelliteRadius,
    };
  });

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="-200 -200 400 400"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* outer orbit ring */}
        <motion.circle
          cx="0"
          cy="0"
          r={orbitRadius}
          fill="none"
          stroke="hsl(182 79% 22%)"
          strokeWidth="0.6"
          strokeOpacity="0.2"
          strokeDasharray="2 6"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        />

        {/* mid orbit */}
        <motion.circle
          cx="0"
          cy="0"
          r={satelliteRadius}
          fill="none"
          stroke="hsl(182 79% 22%)"
          strokeWidth="0.5"
          strokeOpacity="0.15"
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        />

        {/* rotating benzene-like ring */}
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        >
          {/* bonds */}
          {hexPoints.map((p, i) => {
            const next = hexPoints[(i + 1) % 6];
            return (
              <line
                key={`bond-${i}`}
                x1={p.x}
                y1={p.y}
                x2={next.x}
                y2={next.y}
                stroke="hsl(182 79% 22%)"
                strokeWidth="1.4"
                strokeOpacity="0.55"
              />
            );
          })}
          {/* inner ring for double-bond feel */}
          <circle
            cx="0"
            cy="0"
            r={ringRadius * 0.72}
            fill="none"
            stroke="hsl(182 79% 22%)"
            strokeWidth="0.8"
            strokeOpacity="0.25"
          />
          {/* atoms */}
          {hexPoints.map((p, i) => (
            <circle
              key={`atom-${i}`}
              cx={p.x}
              cy={p.y}
              r="4"
              fill="hsl(182 79% 22%)"
              fillOpacity="0.9"
            />
          ))}
        </motion.g>

        {/* counter-rotating satellites */}
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        >
          {satellites.map((p, i) => (
            <g key={`sat-${i}`}>
              <circle
                cx={p.x}
                cy={p.y}
                r="3"
                fill="hsl(182 79% 22%)"
                fillOpacity="0.7"
              />
              <motion.circle
                cx={p.x}
                cy={p.y}
                r="3"
                fill="hsl(182 79% 22%)"
                animate={{ r: [3, 10, 3], opacity: [0.5, 0, 0.5] }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  delay: i * 0.35,
                  ease: "easeOut",
                }}
              />
            </g>
          ))}
        </motion.g>

        {/* central "AI" nucleus — pulsing */}
        <motion.circle
          cx="0"
          cy="0"
          r="10"
          fill="hsl(182 79% 22%)"
          animate={{
            r: [10, 13, 10],
            opacity: [0.85, 1, 0.85],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="0"
          cy="0"
          r="10"
          fill="none"
          stroke="hsl(182 79% 22%)"
          strokeWidth="1"
          animate={{ r: [10, 36, 10], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
};

export default MoleculeOrbit;
