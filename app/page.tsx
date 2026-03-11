import { Navigation } from "@/components/profile/navigation";
import { HeroSection } from "@/components/profile/hero-section";
import { StatsSection } from "@/components/profile/stats-section";
import { ExperienceSection } from "@/components/profile/experience-section";
import { SkillsSection } from "@/components/profile/skills-section";
import { MissionSection } from "@/components/profile/mission-section";
import { Footer } from "@/components/profile/footer";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-6 pt-24">
        <section id="about">
          <HeroSection />
        </section>
        
        <StatsSection />
        
        <section id="experience">
          <ExperienceSection />
        </section>
        
        <SkillsSection />
        
        <section id="mission">
          <MissionSection />
        </section>
        
        <Footer />
      </div>
    </main>
  );
}
