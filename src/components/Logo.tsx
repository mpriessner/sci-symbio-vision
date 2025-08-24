interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <svg 
      width="160" 
      height="40" 
      viewBox="0 0 160 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Placeholder Icon: Two overlapping circles for "Symbiosis" */}
      <circle cx="20" cy="20" r="12" stroke="#0c6066" strokeWidth="2"/>
      <circle cx="32" cy="20" r="12" stroke="#0c6066" strokeWidth="1.5" strokeOpacity="0.7"/>
      {/* Placeholder Text: "SciSymbio" in the defined font */}
      <text 
        x="52" 
        y="27" 
        fontFamily="Poppins, sans-serif" 
        fontSize="20" 
        fontWeight="600" 
        fill="hsl(var(--foreground))"
      >
        SciSymbio
      </text>
    </svg>
  );
};

export default Logo;