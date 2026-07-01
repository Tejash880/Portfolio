import React from "react";
import { Badge } from "./ui/badge";
import { BlurFade } from "./magicui/blur-fade";
import { skills } from "@/configs/config";
const BLUR_FADE_DELAY = 0.04;

const Skills = () => {
  return (
    <section id="skills" className="w-full py-12">
      <div className="text-center space-y-4 mb-10">
        <h2 className="tracking-tight font-extrabold !leading-tight text-foreground text-3xl md:text-5xl">
          Skills & Technologies
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          The tools and technologies I use to bring ideas to life.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto px-4">
        {skills.map(({ name, icon: Icon }) => (
          <BlurFade key={name} delay={BLUR_FADE_DELAY * 10}>
            <Badge className="flex items-center gap-2 px-4 py-2 text-sm md:text-base hover:scale-110 transition-transform duration-300 shadow-sm border-primary/20 hover:border-primary">
              <Icon className="w-5 h-5" />
              {name}
            </Badge>
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default Skills;
