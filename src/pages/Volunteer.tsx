import { useState } from "react";
import Navigation from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Heart, Users, Calendar, MapPin, Clock, Award } from "lucide-react";

const Volunteer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    availability: "",
    skills: [],
    interests: [],
    experience: "",
    motivation: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest in volunteering. We'll be in touch soon!",
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      availability: "",
      skills: [],
      interests: [],
      experience: "",
      motivation: ""
    });
  };

  const handleSkillChange = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const opportunities = [
    {
      icon: Heart,
      title: "Healthcare Support",
      description: "Assist in medical camps and health education programs",
      commitment: "4-6 hours/week",
      location: "Local & Remote"
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Help organize events and connect with local communities",
      commitment: "6-8 hours/week",
      location: "Field work"
    },
    {
      icon: Calendar,
      title: "Event Coordination",
      description: "Plan and manage fundraising events and awareness campaigns",
      commitment: "Flexible",
      location: "Remote & On-site"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Become a Volunteer
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Join our community of dedicated volunteers and help us create meaningful 
            change in communities worldwide. Your time and skills can make a real difference.
          </p>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Volunteer with Us?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Make Real Impact</h3>
              <p className="text-muted-foreground">See the direct results of your efforts in communities we serve</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mb-6">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Join a Community</h3>
              <p className="text-muted-foreground">Connect with like-minded individuals passionate about change</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mb-6">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Flexible Scheduling</h3>
              <p className="text-muted-foreground">Choose opportunities that fit your schedule and availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from various roles that match your interests and skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {opportunities.map((opportunity, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mb-4">
                    <opportunity.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {opportunity.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {opportunity.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {opportunity.commitment}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {opportunity.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-foreground mb-4">
                Volunteer Application
              </CardTitle>
              <p className="text-lg text-muted-foreground">
                Fill out the form below to start your volunteer journey with us
              </p>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="location">Location/City</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="availability">Availability</Label>
                    <Select value={formData.availability} onValueChange={(value) => setFormData({...formData, availability: value})}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select your availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekends">Weekends only</SelectItem>
                        <SelectItem value="weekdays">Weekdays only</SelectItem>
                        <SelectItem value="flexible">Flexible schedule</SelectItem>
                        <SelectItem value="evenings">Evenings only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <Label className="text-base font-medium">Skills & Expertise</Label>
                  <p className="text-sm text-muted-foreground mb-3">Select all that apply</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Marketing", "Healthcare", "Education", "Technology", "Project Management", "Translation", "Fundraising", "Event Planning", "Social Media", "Photography", "Writing", "Graphic Design"].map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox
                          id={skill}
                          checked={formData.skills.includes(skill)}
                          onCheckedChange={() => handleSkillChange(skill)}
                        />
                        <Label htmlFor={skill} className="text-sm">{skill}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <Label className="text-base font-medium">Areas of Interest</Label>
                  <p className="text-sm text-muted-foreground mb-3">What causes are you passionate about?</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {["Healthcare Access", "Education", "Clean Water", "Housing", "Women's Empowerment", "Child Welfare", "Environmental Conservation", "Disaster Relief"].map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox
                          id={interest}
                          checked={formData.interests.includes(interest)}
                          onCheckedChange={() => handleInterestChange(interest)}
                        />
                        <Label htmlFor={interest} className="text-sm">{interest}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <Label htmlFor="experience">Previous Volunteer Experience</Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    placeholder="Tell us about any previous volunteer work or relevant experience..."
                    className="mt-1 min-h-[100px]"
                  />
                </div>

                {/* Motivation */}
                <div>
                  <Label htmlFor="motivation">Why do you want to volunteer with us? *</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                    placeholder="Share your motivation for volunteering and what you hope to achieve..."
                    className="mt-1 min-h-[100px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-secondary-glow text-white font-semibold py-3 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;