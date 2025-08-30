import { Github, Linkedin, Mail, Globe, Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />, 
      href: "https://github.com", 
      label: "GitHub",
      username: "@hamza-dev"
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: "https://linkedin.com", 
      label: "LinkedIn",
      username: "/in/hamza-dev"
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      href: "mailto:hamza.dev@example.com", 
      label: "Email",
      username: "hamza.dev@example.com"
    },
    { 
      icon: <Globe className="w-5 h-5" />, 
      href: "https://leetcode.com", 
      label: "LeetCode",
      username: "@hamza-dev"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Muhammad Hamza
              </h3>
              <div className="bg-primary text-primary-foreground rounded-full p-1">
                <Heart className="w-4 h-4" />
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Full-Stack Developer passionate about creating innovative web solutions. 
              Skilled in MERN Stack, C++, and competitive programming. Ready to contribute 
              to your next project!
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>📍 Faisalabad, Punjab, Pakistan</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="inline-block w-2 h-2 bg-success rounded-full animate-pulse"></span>
              <span className="text-success font-medium">Available for opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect With Me</h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <div className="p-2 bg-muted group-hover:bg-primary/10 group-hover:text-primary rounded-lg transition-all duration-300">
                    {social.icon}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{social.label}</div>
                    <div className="text-xs opacity-75">{social.username}</div>
                  </div>
                  {social.href.startsWith('http') && (
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 mt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6">
              <p className="text-sm text-muted-foreground">
                © 2025 Muhammad Hamza. All rights reserved.
              </p>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <span>Built with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>using React & TypeScript</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>🏆 Programming Winner @ GCUF</span>
              <span>•</span>
              <span>🔢 50+ LeetCode Problems</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;