import { Card, CardContent } from "@/components/ui/card";
import { Heart, GraduationCap, Home, Droplets } from "lucide-react";

const ImpactSection = () => {
  const impacts = [
    {
      icon: Heart,
      title: "Healthcare Access",
      description: "Providing essential medical care and health education to underserved communities.",
      stat: "15,000+ patients treated",
      color: "text-red-500"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Building schools and supporting educational programs for children in need.",
      stat: "50+ schools built",
      color: "text-blue-500"
    },
    {
      icon: Home,
      title: "Shelter & Housing",
      description: "Creating safe, sustainable housing solutions for displaced families.",
      stat: "1,200+ homes built",
      color: "text-green-500"
    },
    {
      icon: Droplets,
      title: "Clean Water",
      description: "Installing water systems and sanitation facilities in remote areas.",
      stat: "300+ wells drilled",
      color: "text-cyan-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Impact Around the World
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every action creates a ripple effect. See how our collective efforts 
            are transforming communities and creating lasting change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-border/50 hover:border-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <impact.icon className={`h-8 w-8 ${impact.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {impact.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {impact.description}
                </p>
                
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {impact.stat}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Your contribution, no matter the size, helps us continue our mission 
              of creating positive change in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-secondary-glow text-white font-semibold px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Donate Today
              </button>
              <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                Start Fundraising
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;