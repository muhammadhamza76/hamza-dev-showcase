import { ExternalLink, Github, Calendar, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import neuraviewImage from "@/assets/neuraview-project.jpg";
import carcoopImage from "@/assets/carcoop-project.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "NeuraView – Mind Scan",
      description: "Built during a hackathon, uses AI to provide insights into mental well-being. Features intuitive UI design with real-time analysis and calming user experience.",
      image: neuraviewImage,
      tags: ["React", "AI/ML", "Node.js", "Healthcare", "Hackathon"],
      highlights: [
        "🏆 Hackathon Project - Built under pressure",
        "🧠 AI-powered mental health insights",
        "🎨 Intuitive UI design for sensitive healthcare data",
        "👥 Collaborative team development"
      ],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "CarCoop Clone",
      description: "Fully responsive clone of a car rental platform using HTML, CSS, JavaScript. Focus on clean UI/UX, smooth animations, and mobile responsiveness.",
      image: carcoopImage,
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
      highlights: [
        "📱 Fully responsive design across all devices",
        "✨ Smooth animations and interactions",
        "🎨 Clean, modern UI/UX implementation",
        "⚡ Optimized performance and loading"
      ],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world applications showcasing my technical skills and creative problem-solving abilities
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-[1.02] bg-gradient-card border-0 ${
                  project.featured ? 'ring-2 ring-primary/20' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`grid ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Award className="w-4 h-4" />
                        <span>Featured</span>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                        {project.featured && <Award className="w-5 h-5 text-primary" />}
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Project Highlights */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="text-sm text-muted-foreground">
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <Button 
                        className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-12">
            <Card className="p-8 bg-gradient-card border-0">
              <h3 className="text-xl font-bold mb-4">🚀 More Projects Coming Soon!</h3>
              <p className="text-muted-foreground mb-6">
                I'm constantly working on new projects and expanding my portfolio. 
                Check out my GitHub for the latest updates and contributions.
              </p>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View All Projects on GitHub
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;