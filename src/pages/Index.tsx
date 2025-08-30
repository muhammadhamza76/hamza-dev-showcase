import Header from "@/components/portfolio/Header";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;