import WorkExp from "@/components/WorkExp";
import Footer from "../components/Footer";
import { HeroSection } from "@/components/Hero2";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import Education from "@/components/Education";
import { GithubContributions } from "@/components/GithubCalender";
import OurProducts from "@/components/OurProducts";
import FAQ from "@/components/FAQ";
export default function Home() {
  return (
    <div suppressHydrationWarning>
      <>
        <Navbar />
        <HeroSection />
        <GithubContributions />
        <Skills />
        <WorkExp />
        <OurProducts />
        <Socials />
        <Education />
        <FAQ/>
        <Footer />
      </>
    </div>
  );
}
