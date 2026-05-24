import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import TechMarquee from "@/sections/TechMarquee";
import ExperienceSection from "@/sections/ExperienceSection";
import SkillsSection from "@/sections/SkillsSection";
import ProjectsPreviewSection from "@/sections/ProjectsPreviewSection";
import LeadershipSection from "@/sections/LeadershipSection";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TechMarquee />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsPreviewSection />
      <LeadershipSection />
      <ContactCTA />
    </>
  );
}
