import { BlurFade } from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/ui/resume-card";
import { educations } from "@/configs/config";
const BLUR_FADE_DELAY = 0.04;
const Education = () => {
  return (
    <div>
      <section
        id="education"
        className="bg-background font-sans antialiased max-w-2xl mx-auto py-2 sm:py-2 px-6 text-xl"
      >
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-3xl py-4 font-bold text-center">Education</h2>
          </BlurFade>
          {educations.map((education) => (
            <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8}>
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
