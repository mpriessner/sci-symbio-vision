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
              Every day saved in R&D is<br />
              worth millions because...
            </h2>
            
            <div className="space-y-8">
              <div>
                <p className="text-xl leading-relaxed text-foreground/80">
                  ... scientists <span className="font-bold text-foreground">waste 20%</span> of their <span className="font-bold text-foreground">time¹</span> with inefficient documentation, a <span className="font-bold text-foreground">~$400,000 annual loss</span> per lab², <span className="font-bold text-foreground">causing errors³</span> that contribute to a <span className="font-bold text-foreground">$28B</span> annual <span className="font-bold text-foreground">reproducibility crisis⁴</span> in US.
                </p>
              </div>
            </div>
            
            <div className="text-sm text-foreground/60 mt-12 space-y-1">
              <p>1. 200+ in-depth interviews with preclinical scientists within pharma and academia.</p>
              <p>2. Based on a typical 10-person lab and an estimated $200k fully-loaded annual cost per scientist.</p>
              <p>3. Baker, M. & Penny, D. Is there a reproducibility crisis? <em>Nature 533, 452–454 (2016)</em>.</p>
              <p>4. Freedman, L. P. et. al (2015) The Economics of Reproducibility in Preclinical Research. <em>PLOS Biology</em>.</p>
            </div>
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
