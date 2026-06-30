import { BlurFade } from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/ui/resume-card";
import { workExperience } from "@/configs/config";
const BLUR_FADE_DELAY = 0.04;
const WorkExp = () => {
  return (
    <div>
      <section
        id="work"
        className="bg-background font-sans antialiased max-w-2xl mx-auto py-4 sm:py-4 px-6 text-xl"
      >
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-3xl py-4 font-bold text-center">Work Experience</h2>
          </BlurFade>
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
    </div>
  );
};

export default WorkExp;
