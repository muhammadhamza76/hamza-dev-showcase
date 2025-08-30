import { GraduationCap, Calendar, MapPin, Users, Trophy, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  const activities = [
    { icon: <Users className="w-4 h-4" />, text: "IT Society Member" },
    { icon: <Trophy className="w-4 h-4" />, text: "Hackathon Participant" },
    { icon: <Users className="w-4 h-4" />, text: "Annual IT Fest Volunteer" },
    { icon: <Trophy className="w-4 h-4" />, text: "Programming Contests" }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Academic foundation and continuous learning journey
            </p>
          </div>

          {/* Education Card */}
          <Card className="p-8 mb-8 hover:shadow-xl transition-all duration-500 bg-gradient-card border-0 animate-slide-up">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-full">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Bachelor of Science (BS)</h3>
                    <p className="text-lg text-primary font-semibold">Information Technology</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <BookOpen className="w-4 h-4" />
                    <span>Government College University, Faisalabad</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>2022 – 2026</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Faisalabad, Punjab, Pakistan</span>
                  </div>
                </div>

                {/* CGPA Highlight */}
                <div className="mb-6">
                  <div className="inline-flex items-center space-x-3 bg-success/10 text-success px-4 py-2 rounded-full">
                    <Trophy className="w-5 h-5" />
                    <span className="font-semibold">Current CGPA: 3.76/4.0</span>
                  </div>
                </div>
              </div>

              {/* Visual CGPA Indicator */}
              <div className="text-center lg:text-right">
                <div className="relative w-32 h-32 mx-auto lg:mx-0">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="hsl(var(--muted))"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="hsl(var(--success))"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${(3.76/4) * 283} 283`}
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success">3.76</div>
                      <div className="text-sm text-muted-foreground">out of 4.0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Activities & Involvement */}
          <Card className="p-8 bg-gradient-card border-0 animate-fade-in">
            <h3 className="text-xl font-bold mb-6 text-center">
              🎯 Campus Activities & Involvement
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors duration-300"
                >
                  <div className="text-primary">{activity.icon}</div>
                  <span className="font-medium">{activity.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <h4 className="font-semibold mb-4 text-foreground">Key Learning Areas</h4>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary">Software Engineering</Badge>
                <Badge variant="secondary">Data Structures</Badge>
                <Badge variant="secondary">Algorithm Design</Badge>
                <Badge variant="secondary">Database Systems</Badge>
                <Badge variant="secondary">Web Development</Badge>
                <Badge variant="secondary">Object-Oriented Programming</Badge>
                <Badge variant="secondary">Computer Networks</Badge>
                <Badge variant="secondary">Software Architecture</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;