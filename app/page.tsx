import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PhoneScrollShowcase from "../components/PhoneScrollShowcase";
import BentoShowcase from "../components/BentoShowcase";
import FeaturesDeepDive from "../components/FeaturesDeepDive";
import ArchitectureSection from "../components/ArchitectureSection";
import ComparisonSection from "../components/ComparisonSection";
import Footer from "../components/Footer";
import CursorGlow from "../components/CursorGlow";
import FloatingParticles from "../components/FloatingParticles";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <FloatingParticles />
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <PhoneScrollShowcase />
      <BentoShowcase />
      <FeaturesDeepDive />
      <ArchitectureSection />
      <ComparisonSection />
      <Footer />
    </main>
  );
}
