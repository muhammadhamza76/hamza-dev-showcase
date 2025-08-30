import { ArrowDown, Github, Linkedin, Mail, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile-avatar.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background to-muted/20"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profileImage}
                alt="Muhammad Hamza Profile"
                className="w-32 h-32 rounded-full border-4 border-primary shadow-glow animate-glow"
              />
              <div className="absolute -top-2 -right-2 bg-success text-success-foreground rounded-full p-1">
                <Award className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Name with Verification Badge */}
          <div className="mb-4 flex items-center justify-center space-x-3">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Muhammad Hamza
            </h1>
            <div className="bg-primary text-primary-foreground rounded-full p-2 shadow-lg animate-glow">
              <Award className="w-6 h-6" />
            </div>
          </div>

          {/* Title/Headline */}
          <div className="mb-6 text-lg md:text-xl text-muted-foreground space-y-2">
            <div className="flex flex-wrap justify-center items-center gap-2">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">💻 MERN Developer</span>
              <span className="bg-accent/10 text-accent px-3 py-1 rounded-full font-semibold">⚡ C++ Enthusiast</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2">
              <span className="bg-warning/10 text-warning px-3 py-1 rounded-full font-semibold">💡 LeetCoder | DSA</span>
              <span className="bg-success/10 text-success px-3 py-1 rounded-full font-semibold">🌐 Building Web Solutions</span>
            </div>
            <div className="mt-2">
              <span className="bg-gradient-primary bg-clip-text text-transparent font-bold text-xl">
                🏆 Winner – Programming @ GCUF
              </span>
            </div>
          </div>

          {/* Location */}
          <p className="text-muted-foreground mb-8">📍 Faisalabad, Punjab, Pakistan</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
              <Mail className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Github className="w-8 h-8" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a 
              href="mailto:hamza@example.com" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <ArrowDown className="w-8 h-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;