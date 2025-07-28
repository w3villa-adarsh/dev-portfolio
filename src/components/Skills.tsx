import { Card } from "@/components/ui/card";

const Skills = () => {
  const technicalSkills = [
    "Java", "Spring Boot", "React", "Vue.js", "Microservices", "RESTful APIs", "SQL", "AWS", 
    "Docker", "AOP", "DSA", "C++", "C", "JavaScript", "HTML", "CSS", "Git & GitHub", "CI/CD Pipelining"
  ];
  
  const nonTechnicalSkills = [
    "Team Collaboration", "Problem-Solving", "Communication", "Time Management"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical expertise and soft skills that drive my development work
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-gradient-card backdrop-blur-sm border-border p-8 hover:shadow-glow transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-primary">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
          
          <Card className="bg-gradient-card backdrop-blur-sm border-border p-8 hover:shadow-glow transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-accent">Non-Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {nonTechnicalSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-accent/10 text-accent rounded-lg border border-accent/20 hover:bg-accent/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;