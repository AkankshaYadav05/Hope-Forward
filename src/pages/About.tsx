import Navigation from "@/components/ui/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Globe2 } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "We believe in empowering local communities to lead their own development initiatives."
    },
    {
      icon: Target,
      title: "Sustainable Impact",
      description: "Our programs are designed for long-term sustainability and lasting positive change."
    },
    {
      icon: Award,
      title: "Transparency",
      description: "We maintain full transparency in our operations and use of donations."
    },
    {
      icon: Globe2,
      title: "Global Reach",
      description: "Working across borders to address challenges wherever they exist."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Executive Director",
      experience: "15 years in international development",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Program Director",
      experience: "12 years in project management",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Amira Hassan",
      role: "Healthcare Lead",
      experience: "20 years in public health",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            About HopeForward
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Founded in 2015, HopeForward has been dedicated to creating sustainable 
            change in communities worldwide through innovative programs and partnerships.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                To empower communities worldwide by providing access to education, healthcare, 
                clean water, and sustainable development opportunities. We believe that every 
                person deserves the chance to thrive, regardless of their circumstances.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A world where every community has the resources and opportunities needed 
                to build a sustainable, prosperous future for all its members.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 animate-slide-up">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">8</div>
                  <div className="text-muted-foreground">Years of Impact</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">25</div>
                  <div className="text-muted-foreground">Countries</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">500+</div>
                  <div className="text-muted-foreground">Volunteers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">$2M+</div>
                  <div className="text-muted-foreground">Funds Raised</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and help us stay true to our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced professionals dedicated to making a meaningful impact in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether through volunteering, donating, or spreading awareness, 
            there are many ways to be part of the change we're creating.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent hover:bg-accent-glow text-accent-foreground font-semibold px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Become a Volunteer
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 rounded-lg transition-all duration-300">
              Support Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;