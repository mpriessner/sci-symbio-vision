import { Clock, FlaskConical, Brain } from "lucide-react";
import problemVisual from "@/assets/28-billion-visual.jpg";

const ProblemSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="fade-in-left">
            <h3 className="text-4xl md:text-5xl font-bold mb-8">
              Billions Lost. <span className="text-foreground">Progress Stalled.</span>
            </h3>
            
            <p className="text-lg text-foreground/70 mb-12 leading-relaxed">
              Over $28 billion is lost annually in the U.S. alone due to research that can't be reproduced. 
              This silent crisis is one of the greatest barriers to innovation. Inefficient documentation, 
              undetected errors, and the loss of invaluable expertise are slowing down discoveries 
              that could change our world.
            </p>
            
            {/* Key Issues */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Clock className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Time-Consuming Documentation</h4>
                  <p className="text-foreground/70">
                    Researchers spend countless hours on manual record-keeping instead of actual discovery.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <FlaskConical className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Costly Human Errors</h4>
                  <p className="text-foreground/70">
                    Small mistakes in protocols or measurements can invalidate entire studies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Brain className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Loss of "Tacit Knowledge"</h4>
                  <p className="text-foreground/70">
                    Critical insights and expertise walk out the door when researchers leave.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="fade-in-right">
            <div className="relative">
              <img 
                src={problemVisual} 
                alt="$28 Billion Research Crisis Visualization"
                className="w-full h-auto rounded-2xl card-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;