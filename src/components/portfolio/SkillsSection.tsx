import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "MERN Stack",
      icon: "🌐",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
      color: "primary"
    },
    {
      category: "Programming Languages",
      icon: "💻",
      skills: ["C++", "JavaScript", "Python", "PHP"],
      color: "accent"
    },
    {
      category: "Frameworks & Libraries",
      icon: "⚛️",
      skills: ["Laravel", "React", "Express", "Tailwind CSS"],
      color: "success"
    },
    {
      category: "Web Technologies",
      icon: "🎨",
      skills: ["HTML5", "CSS3", "JavaScript", "UI/UX Design"],
      color: "warning"
    },
    {
      category: "Data Structures & Algorithms",
      icon: "🔢",
      skills: ["Problem Solving", "Competitive Programming", "LeetCode", "DSA"],
      color: "primary"
    },
    {
      category: "Tools & Platforms",
      icon: "🛠️",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
      color: "accent"
    }
  ];

  const getSkillVariant = (color: string) => {
    switch (color) {
      case "primary": return "default";
      case "accent": return "secondary";
      case "success": return "outline";
      case "warning": return "destructive";
      default: return "default";
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks I use to build robust applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-card border-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h3 className="text-lg font-bold text-foreground">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant={getSkillVariant(category.color)}
                      className="text-xs transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Proficiency Highlights */}
          <Card className="p-8 bg-gradient-card border-0">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">🎯 Core Competencies</h3>
              <p className="text-muted-foreground">Areas where I excel and continue to grow</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">
                  85%
                </div>
                <h4 className="font-semibold mb-1">Full-Stack Development</h4>
                <p className="text-sm text-muted-foreground">MERN Stack Proficiency</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">
                  90%
                </div>
                <h4 className="font-semibold mb-1">Problem Solving</h4>
                <p className="text-sm text-muted-foreground">C++ & DSA Expertise</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">
                  80%
                </div>
                <h4 className="font-semibold mb-1">UI/UX Design</h4>
                <p className="text-sm text-muted-foreground">Modern Web Interfaces</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-warning/10 text-warning rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">
                  95%
                </div>
                <h4 className="font-semibold mb-1">Learning Agility</h4>
                <p className="text-sm text-muted-foreground">Adapting to New Tech</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;