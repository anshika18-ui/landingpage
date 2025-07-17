import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Line 1 */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight opacity-0 animate-fade-in">
            Hi, I'm
          </h1>

          {/* Line 2: Full name */}
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-primary opacity-0 animate-fade-in-delay-1">
            ANSHIKA UPADHYAY
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am working my skills in web development and design.
          </p>
        </div>
      </div>

      {/* Scroll icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
