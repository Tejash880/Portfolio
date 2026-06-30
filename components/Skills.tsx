import React from "react";
import { Badge } from "./ui/badge";
import { BlurFade } from "./magicui/blur-fade";
import { skills } from "@/configs/config";
const BLUR_FADE_DELAY = 0.04;

const Skills = () => {
  return (
    <div>
      <section
        id="skills"
        className="bg-background font-sans antialiased max-w-2xl mx-auto py-4 sm:py-2 px-6 text-xl"
      >
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.map(({ name, icon: Icon }) => (
              <BlurFade key={name} delay={BLUR_FADE_DELAY * 10}>
                <Badge className="flex items-center gap-2 px-3 py-1.5 text-sm hover:scale-105 transition-transform duration-200">
                  <Icon className="w-4 h-4" />
                  {name}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
