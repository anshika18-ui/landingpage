import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="flex flex-col items-center space-y-6 text-center">
          <h3 className="text-2xl font-semibold">Aspiring Web Developer</h3>

          <p className="text-muted-foreground max-w-3xl">
            2nd Year Electrical and Computer Engineering student with a passion
            for web development and design. I have a strong foundation in Java,
            and I'm currently expanding my skills in React and Tailwind CSS and
            MERN stack.
          </p>

          <p className="text-muted-foreground max-w-3xl">
            I'm passionate about learning to create new things.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 justify-center">
          <div className="gradient-border p-6 card-hover w-full md:w-[300px]">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Web Development</h4>
                <p className="text-muted-foreground">
                  Learning skills to create web pages.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 card-hover w-full md:w-[300px]">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                <p className="text-muted-foreground">
                  Learning to design user-friendly interfaces and experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 card-hover w-full md:w-[300px]">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Career Goals</h4>
                <p className="text-muted-foreground">
                  Building a strong portfolio and skillset for the tech
                  industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
