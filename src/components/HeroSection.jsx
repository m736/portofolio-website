import { ArrowDown } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center flex-col justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-4xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi,I'm</span>
            <span className="text-primary animate-fade-in-deleay-1 opacity-0">
              {" "}
              Megala
            </span>
            <span className="text-gradient opacity-0 ml-2 animate-fade-in-deleay-2">
              Arasu
            </span>
          </h2>
          <p className="animate-fade-in-deleay-3 text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0">
            Building responsive and performant web applications with React and
            modern frontend technologies
          </p>
          <div className="animate-fade-in-deleay-4 pt-4 opacity-0">
            <a href="#projects" className="cosmic-button">
              View My Projectt
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 flex flex-col items-center left-1/2 transform-translate-x-1/2 animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
