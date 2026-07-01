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
    <section id="socials" className="w-full flex flex-col items-center py-8 gap-6">
      <h2 className="text-3xl font-bold">Socials</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto px-4">
        {socials.map((social, index) => {
          const IconComponent = iconMap[social.name];
          return (
            <Link
              href={social.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#EC1380] 
              hover:bg-gray-700 rounded-lg transition-all duration-300 text-white text-center 
              hover:scale-105"
            >
              {IconComponent && <IconComponent size={22} />}
              <span className="text-lg">{social.name}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Socials;
