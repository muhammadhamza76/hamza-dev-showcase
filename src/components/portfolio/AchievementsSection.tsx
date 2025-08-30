import { Trophy, Award, Code, Calendar, DollarSign, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Winner – Programming Competition",
      event: "SOFTEC'25 at FAST NUCES",
      date: "May 2025",
      description: "First place in competitive programming contest among top universities",
      type: "competition",
      highlight: true
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "First Place – CodeCrud Competition",
      event: "Government College University, Faisalabad",
      date: "December 2024",
      description: "Won first place with cash prize for innovative coding solution",
      type: "competition",
      highlight: true,
      prize: "Cash Prize Winner"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "LeetCode 50 Days Badge",
      event: "Consistent Problem Solving",
      date: "2025",
      description: "Earned badge for solving problems consistently for 50 days",
      type: "certification",
      highlight: false
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Hackathon Participation",
      event: "Devpost 2025",
      date: "2025",
      description: "Active participant in multiple hackathons building innovative solutions",
      type: "participation",
      highlight: false
    }
  ];

  const stats = [
    { number: "50+", label: "LeetCode Problems", target: "500+", icon: <Code className="w-5 h-5" /> },
    { number: "2", label: "Competition Wins", target: "More Wins", icon: <Trophy className="w-5 h-5" /> },
    { number: "3.76", label: "CGPA", target: "4.0", icon: <Award className="w-5 h-5" /> },
    { number: "Multiple", label: "Hackathons", target: "Regular Participation", icon: <Target className="w-5 h-5" /> }
  ];

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Achievements</span> & Awards
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognition for technical excellence and competitive programming accomplishments
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-card border-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-2 flex justify-center">{stat.icon}</div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                <div className="text-xs text-primary font-medium">Goal: {stat.target}</div>
              </Card>
            ))}
          </div>

          {/* Achievements List */}
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className={`p-6 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] bg-gradient-card border-0 ${
                  achievement.highlight ? 'ring-2 ring-primary/20' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className={`p-3 rounded-full ${achievement.highlight ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}`}>
                      {achievement.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-bold text-foreground">{achievement.title}</h3>
                        {achievement.highlight && <Trophy className="w-5 h-5 text-primary" />}
                      </div>
                      
                      <p className="text-lg text-primary font-semibold mb-2">{achievement.event}</p>
                      <p className="text-muted-foreground mb-3">{achievement.description}</p>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{achievement.date}</span>
                        </div>
                        {achievement.prize && (
                          <div className="flex items-center space-x-1">
                            <DollarSign className="w-4 h-4 text-success" />
                            <Badge variant="secondary" className="text-success bg-success/10">
                              {achievement.prize}
                            </Badge>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 lg:mt-0">
                    <Badge 
                      variant={achievement.highlight ? "default" : "secondary"}
                      className="capitalize"
                    >
                      {achievement.type}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Coding Journey */}
          <Card className="p-8 mt-12 bg-gradient-card border-0">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-primary">🌍 Coding Journey & Community</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <div className="text-4xl">🔢</div>
                  <h4 className="font-semibold">Problem Solving</h4>
                  <p className="text-sm text-muted-foreground">
                    Solved 50+ LeetCode problems in C++, aiming for 500+ to master algorithmic thinking
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="text-4xl">🏆</div>
                  <h4 className="font-semibold">Competitions</h4>
                  <p className="text-sm text-muted-foreground">
                    Active participant in hackathons, programming competitions, and coding societies
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="text-4xl">🚀</div>
                  <h4 className="font-semibold">Growth Mindset</h4>
                  <p className="text-sm text-muted-foreground">
                    Continuously learning new technologies and contributing to the developer community
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;