import { BlurFade } from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/ui/resume-card";
import { educations } from "@/configs/config";
const BLUR_FADE_DELAY = 0.04;

const Education = () => {
  return (
    <section id="education" className="w-full py-12">
      <div className="text-center space-y-4 mb-10">
        <h2 className="tracking-tight font-extrabold !leading-tight text-foreground text-3xl md:text-5xl">
          Education
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          My academic background and qualifications.
        </p>
      </div>
      <div className="flex flex-col gap-6 max-w-4xl mx-auto px-4">
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
  );
};

export default Education;
