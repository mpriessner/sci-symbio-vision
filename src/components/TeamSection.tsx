import { LinkedinIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import martinPhoto from "@/assets/images/Martin_Priessner.png";
import lukasPhoto from "@/assets/images/Lukas_Zitz.jpeg";
import markusPhoto from "@/assets/images/Markus_Habernig.jpeg";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Martin Priessner",
      title: "CEO, CTO",
      description: "Experienced the problem firsthand as a Chemist & AI Expert at AstraZeneca. Built the vision and leads the development of SciSymbio's AI platform. PhD in Chemistry from Imperial College London.",
      linkedIn: "#", // Replace with actual LinkedIn URLs
      photo: martinPhoto
    },
    {
      name: "Lukas Zitz", 
      title: "CSO",
      description: "Dep. Austrian Trade Commissioner, drives US market entry for Austrian companies. Proven leader, managing a team responsible for transatlantic launches. NYC-based, he oversees fundraising and customer acquisition.",
      linkedIn: "#",
      photo: lukasPhoto
    },
    {
      name: "Markus Habernig",
      title: "COO", 
      description: "7 years as a Manager at BDO, advising Life Science firms on R&D productivity. Expertise in operational bottlenecks and ROI drivers of corporates. Leads customer success, implementation, and scaling operations.",
      linkedIn: "#",
      photo: markusPhoto
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 fade-in-up">
            United by friendship, <span className="text-foreground">focused on success</span>
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
                {/* Professional Portrait */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-accent/30">
                  <img 
                    src={member.photo} 
                    alt={`${member.name} - ${member.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h4 className="text-2xl font-bold mb-2">{member.name}</h4>
                <h5 className="text-lg font-semibold text-foreground mb-4">{member.title}</h5>
                <p className="text-foreground/70 leading-relaxed mb-6">
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