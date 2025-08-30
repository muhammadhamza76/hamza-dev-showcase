import { Code, Target, Users, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Skilled in MERN Stack with modern development practices"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Strong foundation in C++ and Data Structures & Algorithms"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Excellent teamwork and communication abilities"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Adaptability",
      description: "Quick learner with passion for new technologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Main About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-slide-up">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am a <span className="text-primary font-semibold">Full-Stack Developer</span> skilled in 
                the <span className="text-accent font-semibold">MERN Stack</span> and 
                <span className="text-success font-semibold"> C++ (DSA)</span>, with strengths in 
                problem-solving, collaboration, and adaptability.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Passionate about creating <span className="text-primary font-semibold">efficient solutions</span> and 
                eager to work on real-world projects. I combine technical expertise with creative problem-solving 
                to build applications that make a difference.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Currently seeking <span className="text-warning font-semibold">internships or entry-level roles</span> to 
                contribute, learn, and grow in the IT industry. I'm excited about opportunities to collaborate with 
                talented teams and work on innovative projects.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-card border-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-primary mb-3 flex justify-center">
                    {highlight.icon}
                  </div>
                  <h3 className="font-semibold text-sm mb-2">{highlight.title}</h3>
                  <p className="text-xs text-muted-foreground">{highlight.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Current Goals */}
          <Card className="p-8 bg-gradient-card border-0 text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">🎯 Current Focus</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-3xl">💻</div>
                <h4 className="font-semibold">Building Projects</h4>
                <p className="text-sm text-muted-foreground">Creating innovative web solutions</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">🔢</div>
                <h4 className="font-semibold">LeetCode Journey</h4>
                <p className="text-sm text-muted-foreground">Solving 500+ problems in C++</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">🚀</div>
                <h4 className="font-semibold">Career Growth</h4>
                <p className="text-sm text-muted-foreground">Seeking internship opportunities</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;