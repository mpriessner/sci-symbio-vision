import { LinkedinIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Martin Priessner",
      title: "CEO & Vision",
      description: "Fusing deep research experience (AstraZeneca, PhD) with applied AI and strategic expertise (BCG).",
      linkedIn: "#" // Replace with actual LinkedIn URLs
    },
    {
      name: "Lukas Zitz", 
      title: "CCO & International Growth",
      description: "Expert in international market expansion and strategic networks (Austrian Trade Commission, New York).",
      linkedIn: "#"
    },
    {
      name: "Markus Habernig",
      title: "COO & Strategy", 
      description: "Specialist in pharma strategy and commercialization with an insider's perspective (BDO, Boehringer Ingelheim).",
      linkedIn: "#"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 fade-in-up">
            Driven by Experience. <span className="text-accent">United by a Mission.</span>
          </h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name} 
              className="bg-card border-border card-shadow smooth-transition hover:shadow-2xl fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 text-center">
                {/* Professional Portrait Placeholder */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent/30 flex items-center justify-center">
                  <div className="text-4xl font-bold text-accent">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold mb-2">{member.name}</h4>
                <h5 className="text-lg font-semibold text-accent mb-4">{member.title}</h5>
                <p className="text-secondary-foreground leading-relaxed mb-6">
                  {member.description}
                </p>
                
                <a 
                  href={member.linkedIn}
                  className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 hover:bg-accent/20 rounded-full smooth-transition group"
                  aria-label={`${member.name} LinkedIn Profile`}
                >
                  <LinkedinIcon className="w-6 h-6 text-accent group-hover:scale-110 smooth-transition" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;