import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Profolio",
      description: "Developed using Java, Spring Boot, RESTful APIs, Postgres for the database, and AWS for deployment. End-to-end backend development, AWS deployment, database design, and REST API integration.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "AWS", "RESTful APIs"],
      liveUrl: "https://profolio.live",
      githubUrl: "#"
    },
    {
      title: "Uber Back-End Clone",
      description: "Created with Spring Boot, using Twilio as E-mails and SMSs sending tool, using PostgreSQL and deployed on AWS. Focus on sending E-mails and SMSs, scaling backend systems, performance optimization, and cloud deployment.",
      technologies: ["Spring Boot", "Twilio", "PostgreSQL", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Institute Management System",
      description: "Developed using Java Swing, MySQL for the database. UI designing using Java Swing, database schema management, and desktop application development.",
      technologies: ["Java Swing", "MySQL", "Desktop Application"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my backend development work and technical expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300 hover:scale-105 p-6"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-secondary rounded-full text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-4">
                  {project.liveUrl !== "#" && (
                    <Button size="sm" className="bg-gradient-primary hover:shadow-glow">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;