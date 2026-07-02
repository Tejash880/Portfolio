import WorkExp from "@/components/WorkExp";
import Footer from "@/components/Footer";
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
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1 flex flex-col gap-20 md:gap-32 py-12 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <HeroSection />
        <WorkExp />
        <Education />
        <Skills />
        <OurProducts />
        <GithubContributions />
        <FAQ />
        <Socials />
      </main>
      <Footer />
    </div>
  );
}
