import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-glow">
            Adarsh Pratap Singh Gautam
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-semibold">
            Full Stack Developer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Motivated full stack developer with expertise in Java, Spring Boot, React, and Vue.js. 
            Proficient in handling backend architecture, database management, and modern frontend 
            development with responsive design and user experience focus.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <span>crownapsingh@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            <span>9555840487</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Fatehpur, Uttar Pradesh</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            View Projects
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;