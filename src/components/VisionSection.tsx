import visionBackground from "@/assets/vision-bg.jpg";

const VisionSection = () => {
  return (
    <section 
      className="relative py-32 px-6 overflow-hidden"
      style={{
        backgroundImage: `url(${visionBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/85" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-8 fade-in-up">
          Imagine a world where every discovery is{" "}
          <span className="text-accent">verifiable</span>.
        </h3>
        
        <p className="text-xl text-secondary-foreground leading-relaxed fade-in-up">
          SciSymbio is pioneering a new era of scientific integrity. We are building an intelligent partner 
          for researchers that augments human expertise, not replaces it. Our vision is a lab where every step 
          is transparent, every result is traceable, and invaluable knowledge is preserved forever. 
          We accelerate progress by giving research back its foundation:{" "}
          <span className="text-accent font-semibold">Trust</span>.
        </p>
      </div>
    </section>
  );
};

export default VisionSection;