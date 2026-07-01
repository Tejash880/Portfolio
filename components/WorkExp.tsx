import { BlurFade } from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/ui/resume-card";
import { workExperience } from "@/configs/config";
const BLUR_FADE_DELAY = 0.04;

const WorkExp = () => {
  return (
    <section id="work" className="w-full py-12">
      <div className="text-center space-y-4 mb-10">
        <h2 className="tracking-tight font-extrabold !leading-tight text-foreground text-3xl md:text-5xl">
          Work Experience
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          My professional journey and the companies I&apos;ve had the pleasure to work with.
        </p>
      </div>
      <div className="flex flex-col gap-6 max-w-4xl mx-auto px-4">
        {workExperience.map((work, id) => (
          <BlurFade
            key={work.company}
            delay={BLUR_FADE_DELAY * 6 + id * 0.05}
          >
            <ResumeCard
              key={work.company}
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end ?? "Present"}`}
              description={work.description}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default WorkExp;
