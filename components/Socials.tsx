import { socials } from "@/configs/config";
import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode, SiDevpost } from "react-icons/si";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  Twitter: FaTwitter,
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: MdEmail,
  LeetCode: SiLeetcode,
  Devpost: SiDevpost,
  Codolio: FaCode,
};

const Socials = () => {
  return (
    <section id="socials" className="w-full py-12">
      <div className="text-center space-y-4 mb-10">
        <h2 className="tracking-tight font-extrabold !leading-tight text-foreground text-3xl md:text-5xl">
          Let&apos;s Connect
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Find me on these platforms and let&apos;s build something amazing together.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto px-4">
        {socials.map((social, index) => {
          const IconComponent = iconMap[social.name];
          return (
            <Link
              href={social.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-6 py-4 bg-card border border-border/50 
              hover:border-primary/50 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl 
              hover:-translate-y-1 hover:bg-accent/30"
            >
              {IconComponent && (
                <div className="text-primary group-hover:text-[#EC1380] transition-colors duration-300">
                  <IconComponent size={24} />
                </div>
              )}
              <span className="text-lg font-medium group-hover:text-primary transition-colors duration-300">
                {social.name}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Socials;
