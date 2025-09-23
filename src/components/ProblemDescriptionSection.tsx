import scientistImage from "@/assets/images/Scientist_sad.png";

const ProblemDescriptionSection = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Problem Description */}
          <div className="fade-in-left">
            <h3 className="text-sm font-semibold text-accent mb-4 fade-in-up">Problem</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 fade-in-up text-foreground">
              Every day saved in R&D<br />
              is worth millions but:
            </h2>
            
            <div className="space-y-8">
              <div>
                <p className="text-xl leading-relaxed text-foreground/80">
                  ...scientists spend <span className="font-bold text-foreground">20% of their time*</span> on documentation.
                </p>
              </div>
              
              <div>
                <p className="text-xl leading-relaxed text-foreground/80">
                  ...<span className="font-bold text-foreground">error-prone documentation systems</span> (ELNs) are a massive pain for scientists.
                </p>
              </div>
              
              <div>
                <p className="text-xl leading-relaxed text-foreground/80">
                  ...experimental <span className="font-bold text-foreground">knowledge</span> that was not captured in written form is <span className="font-bold text-foreground">lost in translation</span> between the lab bench and the ELN.
                </p>
              </div>
            </div>
            
            <p className="text-sm text-foreground/60 mt-12 italic">
              *200+ interviews with preclinical scientists within pharma and academia
            </p>
          </div>
          
          {/* Right Column - Visual with Quote */}
          <div className="fade-in-right">
            <div className="relative">
              {/* Scientist image */}
              <div className="rounded-2xl overflow-hidden card-shadow">
                <img 
                  src={scientistImage} 
                  alt="Frustrated scientist working with complex data" 
                  className="w-full h-96 object-cover"
                />
              </div>
              
              {/* Quote Box */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 max-w-xs card-shadow">
                <blockquote className="text-foreground italic text-sm leading-relaxed">
                  "When you make a mistake, you might not find out until three months and thousands of dollars later."
                </blockquote>
                <p className="text-xs text-foreground/60 mt-2 text-right">
                  interviewed Postdoc Genomics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemDescriptionSection;
