import { Card } from "@/components/ui/card";
import { Award, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Spring Boot 0 to 1 - Kickstart Your Journey with Spring Boot Fundamentals",
      provider: "Coding Shuttle",
      period: "September 2024",
      description: "Completed a certification course covering Spring Boot fundamentals, including MVC architecture, Spring Security, and production-ready features. Gained hands-on experience in unit testing, CI/CD pipelining, and deployment using AWS services like RDS, EC2, and S3."
    },
    {
      title: "Java Basic",
      provider: "Hacker Rank",
      period: "23-DEC-2023",
      description: "Deepened understanding of Java programming, object-oriented concepts, and software design principles."
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="bg-gradient-card backdrop-blur-sm border-border p-6 hover:shadow-glow transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-accent/10 p-3 rounded-lg border border-accent/20">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-3">
                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    {cert.title}
                  </h3>
                  
                  <h4 className="text-primary font-semibold">{cert.provider}</h4>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{cert.period}</span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
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

export default Certifications;