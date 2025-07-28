import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "Kanpur Institute of Technology",
      period: "September 2023 – Present",
      description: "Pursuing a Master's with a focus on backend development, database management, and cloud technologies. Gained 8 SGPA in first semester.",
      grade: "8 SGPA"
    },
    {
      degree: "Bachelor of Science in Computer Application and Maths",
      institution: "D.A-V. College Kanpur",
      period: "September 2020 – July 2023",
      description: "Acquired a solid foundation in computer applications and mathematical concepts, focusing on programming, software development, and mathematical analysis.",
      grade: "53%"
    },
    {
      degree: "Intermediate",
      institution: "UP Board",
      period: "April 2018 – March 2020",
      description: "Developed strong analytical and problem-solving skills, enhanced communication abilities, and gained a solid understanding of scientific principles and critical thinking.",
      grade: "75%"
    },
    {
      degree: "High School",
      institution: "UP Board",
      period: "April 2016 – March 2018",
      description: "Completed higher education with a focus on mathematics and science.",
      grade: "74%"
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic journey and continuous learning in computer science
          </p>
        </div>
        
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card 
              key={index}
              className="bg-gradient-card backdrop-blur-sm border-border p-6 hover:shadow-glow transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20">
                      {edu.grade}
                    </span>
                  </div>
                  
                  <h4 className="text-primary font-semibold">{edu.institution}</h4>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
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

export default Education;