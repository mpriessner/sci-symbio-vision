import { Dna } from "lucide-react";

const ValidationSection = () => {
  return (
    <section className="py-24 px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-12 fade-in-up">
          Our Vision. <span className="text-accent">Validated at the Highest Level.</span>
        </h3>
        
        {/* Industry Leader Icon */}
        <div className="flex justify-center mb-12 fade-in-up">
          <div className="p-6 bg-accent/10 rounded-full">
            <Dna className="w-16 h-16 text-accent" />
          </div>
        </div>
        
        {/* Quote */}
        <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 fade-in-up">
          <span className="text-accent">"</span>
          We have signed a Letter of Intent... to solve this crisis at its root.
          <span className="text-accent">"</span>
        </blockquote>
        
        {/* Attribution */}
        <p className="text-lg text-secondary-foreground font-medium fade-in-up">
          – Director of AI at a leading global pharmaceutical company
        </p>
      </div>
    </section>
  );
};

export default ValidationSection;