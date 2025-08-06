import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              HopeForward
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors hover:text-primary ${
                isActive("/") ? "text-primary font-medium" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary font-medium" : "text-muted-foreground"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/volunteer"
              className={`transition-colors hover:text-primary ${
                isActive("/volunteer") ? "text-primary font-medium" : "text-muted-foreground"
              }`}
            >
              Volunteer
            </Link>
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-secondary-glow transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Donate Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive("/")
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive("/about")
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/volunteer"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive("/volunteer")
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Volunteer
              </Link>
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-secondary-glow"
                >
                  Donate Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;