import { Zap, Rocket, Layers, PenTool, Sliders, Package } from "lucide-react";
import { IconType } from "react-icons";
import { FaReact, FaJava } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import {
  SiteConfig,
  FeatureSection,
  FAQProps,
  UseCases,
  Reviews,
  PricingSectionFeatures,
  BuiltWithIndieLaunch,
} from "@/types";

export const siteConfigs: SiteConfig = {
  name: "Hazari Tejash",
  tagline: "Software Engineer & AI Enthusiast",
  description:
    "A portfolio showcasing my projects, skills, and experience.",
};

export const useCases: UseCases = [
  {
    title: "New to Frontend?",
    description:
      "Use our ready-made responsive landing page template to create your website fast.",
  },
  {
    title: "Test Your Idea",
    description:
      "Get feedback on your idea quickly with a simple landing page before spending time on development.",
  },
  {
    title: "Build Your Website",
    description:
      "Create a professional website for yourself or your product without technical hassles.",
  },
];

export const indieHackerFeatures: FeatureSection[] = [
  {
    title: "Effortless Setup",
    description:
      "Designed for non-coders to quickly create and launch a professional landing page.",
    list: [
      {
        icon: Zap,
        title: "No Coding Knowledge Needed",
        description:
          "Perfect for creators and entrepreneurs without a technical background.",
      },
      {
        icon: Rocket,
        title: "Launch in Minutes",
        description: "Get your landing page live with minimal effort and time.",
      },
      {
        icon: Layers,
        title: "Easy Configuration",
        description:
          "Modify your page using a simple, beginner-friendly JSON file.",
      },
    ],
    src: "/images/nextjs.jpg",
  },
  {
    title: "Beautiful & Professional",
    description:
      "Give your idea the online presence it deserves with a modern and sleek design.",
    list: [
      {
        icon: PenTool,
        title: "Startup-Optimized Design",
        description:
          "A clean, responsive layout tailored for startups and creators.",
      },
      {
        icon: Sliders,
        title: "Customizable Features",
        description:
          "Adjust the design to fit your brand without writing any code.",
      },
      {
        icon: Package,
        title: "Ready-to-Use Template",
        description:
          "Simply configure and deploy—no complicated setup required.",
      },
    ],
    src: "/images/lander_light.png",
  },
];

export const pricingSectionFeatures: PricingSectionFeatures = [
  "🚀 Zero to Launch in Minutes: Complete SaaS Landing Page Template",
  "🎨 Pixel-Perfect Design System: Tailwind CSS + Shadcn UI Components",
  "⚡ Performance Optimized: Next.js & Framer Motion Powered Interactions",
  "🔧 Code-Free Customization: Make It Yours Without Design Panic",
];
// Testimonials of the product
export const reviews: Reviews = [
  {
    name: "Manjesh",
    rating: 5,
    review:
      "This template is a game-changer. It saves a lot of Development time.",
    image: "/images/manjesh.jpg",
    twitterhandle: "https://x.com/manjesh_webdev",
  },
  {
    name: "Deeps",
    rating: 5,
    review:
      "Happy to see Indie launch, a simple straightforward next js landing page template to launch quickly.",
    image: "/images/deeps.png",
    twitterhandle: "https://x.com/soulblissX",
  },
  {
    name: "Vincent",
    rating: 5,
    review:
      "Very cool bro, code looks well structured and for my first time using next.js, it's a breeze to install and get it running. In 2 commands, my landing page was ready.",
    image: "/images/vincent.jpg",
    twitterhandle: "https://twitter.com/vincent_build",
  },
];

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

export const builtWithIndieLaunch: BuiltWithIndieLaunch[] = [
  {
    title: "Autograde",
    url: "#",
    image: "/images/autograde.png",
    description: "An AI-powered answer evaluation system using semantic similarity, NLP, and NLI to automatically grade descriptive answers."
  },
  {
    title: "SnapShots",
    url: "#",
    image: "https://oafigsv8yj.ufs.sh/f/b7ZUAnePqlpydctMx0VVA9S1UZiNxWHkBYjofKD5gRObEJyp",
    description: "Full-stack mockup generation tool that automates App Store and Product Hunt asset creation, used by 200+ creators."
  },
  {
    title: "TextBehindVideo",
    url: "#",
    image: "/images/textbehindvideo.png",
    description: "Cloud-integrated video processing platform that automates rotoscoping and renders dynamic text layers behind subjects."
  }
];

export const footerConfig = {
  logo: "RocketLaunch",
  brand: "Hazari Tejash",
  description: "",
  sections: [
    {
      title: "Links",
      links: [
        { href: "#skills", text: "Skills" },
        { href: "#work", text: "WorkExp" },
        { href: "#products", text: "Projects" },
        { href: "#socials", text: "Socials" },
        { href: "#education", text: "Education" },
      ],
    },
    {
      title: "Projects",
      links: [
        { text: "Autograde", href: "#" },
        { text: "SnapShots", href: "#" },
        { text: "TextBehindVideo", href: "#" },
      ],
    },
    {
      title: "Connect",
      links: [{ text: "GitHub", href: "https://github.com/tejartr7" }],
    },
  ],
};
export const workExperience = [
  {
    company: "Viswam AI — Meta",
    logoUrl: "/images/meta.png",
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
  icon: IconType; // 'any' added for Lucide icons compatibility
}

export const skills: Skill[] = [
  { name: "Python", icon: FaCode },
  { name: "Java", icon: FaJava },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Flask", icon: FaCode },
  { name: "Machine Learning", icon: FaCode },
  { name: "DSA", icon: FaCode },
];
export const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hazari-tejash/",
  },
  {
    name: "GitHub",
    url: "https://github.com/tejartr7",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/hazari-tejash/",
  },
  {
    name: "Email",
    url: "mailto:hazaritejash@gmail.com",
  },
];
export const educations = [
  {
    school: "Gokaraju Rangaraju Institute Of Engineering and Technology",
    href: "#",
    degree: "BTech in Computer Science - AI and ML",
    logoUrl: "/images/griet.png",
    start: "Sep 2023",
    end: "July 2027",
  },
];
