import { Card } from "@/components/ui/card";
import { Trophy, Code, Target } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Coding Competition Winner",
      icon: Code,
      description: "Achieved first place in a competitive coding event, demonstrating strong problem-solving skills and proficiency in algorithms and data structures. Successfully tackled complex challenges under time constraints, showcasing ability to perform in high-pressure situations."
    },
    {
      title: "Runner up in Annual College Cricket Tournament (CAPL)",
      icon: Trophy,
      description: "Contributed as a key bowler in the tournament, leading the team to the runner-up position. Recognized as the Best Bowler for outstanding performance, demonstrating exceptional skills in wicket-taking and bowling accuracy."
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognition and accomplishments in coding competitions and extracurricular activities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="bg-gradient-card backdrop-blur-sm border-border p-6 hover:shadow-glow transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;