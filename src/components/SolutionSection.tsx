import { Clock, Shield, Brain, Zap } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold text-accent mb-4 fade-in-up">Solution</h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 fade-in-up">
            Our Lab Companion Speeds Up{" "}
            <span className="text-foreground">Drug Discovery</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Benefits */}
          <div className="space-y-12 fade-in-left">
            <div>
              <h4 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Clock className="w-8 h-8 mr-3 text-foreground" />
                Saves up to 8h/week
              </h4>
              <p className="text-lg text-foreground/70">
                of scientists, freeing up valuable research time.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Shield className="w-8 h-8 mr-3 text-foreground" />
                Eliminates data gaps and errors
              </h4>
              <p className="text-lg text-foreground/70">
                through video evidence, creating high quality results.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Brain className="w-8 h-8 mr-3 text-foreground" />
                Scales Expert Knowledge
              </h4>
              <p className="text-lg text-foreground/70">
                Turns knowledge from best chemists into a video database.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Zap className="w-8 h-8 mr-3 text-foreground" />
                Boosts speed of experimenting
              </h4>
              <p className="text-lg text-foreground/70">
                through Agent-to-Agent Communication with lab equipment.
              </p>
            </div>
          </div>

          {/* Right Column - Video and Key Benefits Summary */}
          <div className="fade-in-right space-y-8">
            {/* YouTube Video */}
            <div className="rounded-2xl overflow-hidden card-shadow">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/X1Zgf8CwLug"
                  title="SciSymbio Lab Companion Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* What We Deliver Section */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 card-shadow">
              <h4 className="text-2xl font-bold text-foreground mb-6 text-center">
                What We Deliver
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-foreground rounded-full"></div>
                  <p className="text-foreground font-medium">Automated documentation and tracking</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-foreground rounded-full"></div>
                  <p className="text-foreground font-medium">Real-time error detection and prevention</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-foreground rounded-full"></div>
                  <p className="text-foreground font-medium">Knowledge preservation and sharing</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-foreground rounded-full"></div>
                  <p className="text-foreground font-medium">Seamless lab equipment integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
