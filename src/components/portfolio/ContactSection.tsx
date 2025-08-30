import { Mail, Github, Linkedin, ExternalLink, MapPin, Phone, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "hamza.dev@example.com",
      href: "mailto:hamza.dev@example.com",
      primary: true
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/hamza-dev",
      href: "https://github.com",
      primary: true
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/hamza-dev",
      href: "https://linkedin.com",
      primary: true
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: "LeetCode",
      value: "leetcode.com/hamza-dev",
      href: "https://leetcode.com",
      primary: false
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Faisalabad, Punjab, Pakistan",
      href: null,
      primary: false
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Available for",
      value: "Remote & On-site opportunities",
      href: null,
      primary: false
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on exciting projects or discuss opportunities. I'm always open to new challenges and connections.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-8 bg-gradient-card border-0">
                <h3 className="text-2xl font-bold mb-6 text-foreground">📧 Get in Touch</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm currently seeking <span className="text-primary font-semibold">internship opportunities</span> or 
                  <span className="text-accent font-semibold"> entry-level positions</span> where I can contribute to meaningful projects 
                  while growing my skills. Whether you have a project in mind, want to discuss technology, 
                  or explore collaboration opportunities, I'd love to hear from you!
                </p>

                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${contact.primary ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground">{contact.label}</div>
                        {contact.href ? (
                          <a 
                            href={contact.href}
                            target={contact.href.startsWith('http') ? '_blank' : undefined}
                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-muted-foreground hover:text-primary transition-colors duration-300"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <span className="text-muted-foreground">{contact.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Languages */}
              <Card className="p-6 bg-gradient-card border-0">
                <h3 className="text-lg font-bold mb-4 text-foreground">🌍 Languages</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">English</span>
                    <span className="text-sm text-muted-foreground">Professional Working Proficiency</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Urdu</span>
                    <span className="text-sm text-muted-foreground">Native</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="space-y-6">
              <Card className="p-8 bg-gradient-primary text-primary-foreground border-0 text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
                <p className="mb-6 opacity-90 leading-relaxed">
                  I'm passionate about creating innovative solutions and eager to contribute to your team. 
                  Let's discuss how my skills in MERN stack development and competitive programming can 
                  add value to your projects.
                </p>
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="w-full text-primary hover:bg-primary-foreground/90"
                    asChild
                  >
                    <a href="mailto:hamza.dev@example.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </Card>

              {/* Current Status */}
              <Card className="p-6 bg-gradient-card border-0">
                <h3 className="text-lg font-bold mb-4 text-foreground">📊 Current Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Availability</span>
                    <span className="font-semibold text-success">Open for Opportunities</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Seeking</span>
                    <span className="font-semibold text-primary">Internships & Entry-level</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Preferred Work</span>
                    <span className="font-semibold text-accent">Remote & On-site</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Response Time</span>
                    <span className="font-semibold text-warning">Within 24 hours</span>
                  </div>
                </div>
              </Card>

              {/* Quick Links */}
              <Card className="p-6 bg-gradient-card border-0">
                <h3 className="text-lg font-bold mb-4 text-foreground">🔗 Quick Links</h3>
                <div className="space-y-3">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 hover:bg-background/50 rounded-lg transition-colors duration-300 group"
                  >
                    <div className="flex items-center space-x-3">
                      <Github className="w-4 h-4 text-muted-foreground" />
                      <span>View Code Portfolio</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a 
                    href="https://leetcode.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 hover:bg-background/50 rounded-lg transition-colors duration-300 group"
                  >
                    <div className="flex items-center space-x-3">
                      <Globe className="w-4 h-4 text-muted-foreground" />
                      <span>LeetCode Profile</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;