import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-secondary opacity-90"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Creating Hope,
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
              Changing Lives
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join our mission to make a lasting impact in communities worldwide. 
            Together, we can build a brighter future for those who need it most.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/volunteer">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-glow text-accent-foreground font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group"
              >
                Get Involved
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all duration-300">
                <Users className="h-12 w-12 text-white mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">50,000+</div>
                <div className="text-white/80">Lives Impacted</div>
              </div>
            </div>
            
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all duration-300">
                <Target className="h-12 w-12 text-white mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">200+</div>
                <div className="text-white/80">Projects Completed</div>
              </div>
            </div>
            
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all duration-300">
                <Globe className="h-12 w-12 text-white mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">25</div>
                <div className="text-white/80">Countries Reached</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;