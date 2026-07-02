import { IconType } from "react-icons";
import { FaReact, FaJava, FaBrain, FaCode } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiFlask,
  SiTensorflow,
} from "react-icons/si";

import {
  SiteConfig,
  FAQProps,
  Project,
} from "@/types";

export const siteConfigs: SiteConfig = {
  name: "Hazari Tejash",
  tagline: "Software Engineer & AI Enthusiast",
  description:
    "A portfolio showcasing my projects, skills, and experience.",
};

export const FAQList: FAQProps[] = [
  {
    question: "Why should we hire you?",
    answer:
      "In software development, everyone encounters challenges, but I distinguish myself through my relentless problem-solving mindset and collaborative approach. I consistently deliver results by leveraging my technical skills, embracing teamwork, and utilizing available resources effectively to overcome any obstacle.",
    value: "item-1",
  },
  {
    question: "What is the most difficult problem you have solved?",
    answer:
      "The beauty of software development is that each challenge is unique, with every new task potentially more complex than the last. While tasks may initially seem daunting, I've consistently overcome them through collaborative problem-solving and persistence, making each 'most difficult problem' a stepping stone to the next challenge.",
    value: "item-2",
  },

  {
    question: "Where can we find you when you're away from the keyboard?",
    answer:
      "When I'm not coding, you'll find me jogging in the park, enjoying movies, or spending quality time with friends. I believe maintaining a balanced lifestyle fuels creativity and keeps me energized for tackling new challenges.",
    value: "item-3",
  },
];

export const projects: Project[] = [
  {
    title: "Autograde",
    url: "https://autograde-n1lv.vercel.app",
    image: "/images/autograde.png",
    description: "An AI-powered answer evaluation system using semantic similarity, NLP, and NLI to automatically grade descriptive answers."
  },
  {
    title: "SnapShots",
    url: "https://www.getsnapshots.app/",
    image: "https://oafigsv8yj.ufs.sh/f/b7ZUAnePqlpydctMx0VVA9S1UZiNxWHkBYjofKD5gRObEJyp",
    description: "Full-stack mockup generation tool that automates App Store and Product Hunt asset creation, used by 200+ creators."
  },
  {
    title: "TextBehindVideo",
    url: "https://text-behind-video.vercel.app",
    image: "/images/textbehindvideo.png",
    description: "Cloud-integrated video processing platform that automates rotoscoping and renders dynamic text layers behind subjects."
  }
];

export const footerConfig = {
  logo: "RocketLaunch",
  brand: "Hazari Tejash",
  description: "Software Engineer & AI Enthusiast",
  sections: [
    {
      title: "Links",
      links: [
        { href: "#skills", text: "Skills" },
        { href: "#work", text: "Experience" },
        { href: "#products", text: "Projects" },
        { href: "#socials", text: "Socials" },
        { href: "#education", text: "Education" },
      ],
    },
    {
      title: "Projects",
      links: [
        { text: "Autograde", href: "https://autograde-n1lv.vercel.app" },
        { text: "SnapShots", href: "https://www.getsnapshots.app/" },
        { text: "TextBehindVideo", href: "https://text-behind-video.vercel.app" },
      ],
    },
    {
      title: "Connect",
      links: [
        { text: "GitHub", href: "https://github.com/Tejash880" },
        { text: "LinkedIn", href: "https://www.linkedin.com/in/tejash-hazari-015485337/" },
      ],
    },
  ],
};

export const workExperience = [
  {
    company: "Viswam AI — Meta",
    logoUrl: "/images/og-image.png", // Using og-image as placeholder, replace with actual company logo
    title: "AI-Intern",
    href: "#",
    badges: ["Internship"],
    start: "May 2025",
    end: "June 2025",
    description: "Built a data collection and storage application using Python and Flask. Designed and deployed Streamlit applications integrating Hugging Face API. Applied prompt engineering techniques and built automated data pipelines for ML model training pipelines."
  }
];

interface Skill {
  name: string;
  icon: IconType;
}

export const skills: Skill[] = [
  { name: "Python", icon: SiPython },
  { name: "Java", icon: FaJava },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Flask", icon: SiFlask },
  { name: "Machine Learning", icon: SiTensorflow },
  { name: "Artificial Intelligence", icon: FaBrain },
  { name: "DSA", icon: FaCode }, // Using FaCode for DSA as there isn't a specific icon in the current imports, or could use FaChartLine if available
];

export const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tejash-hazari-015485337/",
  },
  {
    name: "GitHub",
    url: "https://github.com/Tejash880",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Tejash9/",
  },
  {
    name: "Email",
    url: "mailto:hazaritejash@gmail.com",
  },
  {
    name: "Codolio",
    url: "https://codolio.com/profile/Tejash9",
  },
];

export const educations = [
  {
    school: "Gokaraju Rangaraju Institute Of Engineering and Technology",
    href: "#",
    degree: "BTech in Computer Science - AI and ML",
    logoUrl: "/images/og-image.png", // Using og-image as placeholder, replace with actual college logo
    start: "Sep 2023",
    end: "July 2027",
  },
];
