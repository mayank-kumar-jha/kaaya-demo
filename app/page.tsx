"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PhoneScrollShowcase from "../components/PhoneScrollShowcase";
import ArchitectureSection from "../components/ArchitectureSection";
import BentoShowcase from "../components/BentoShowcase";
import FeaturesDeepDive from "../components/FeaturesDeepDive";
import ComparisonSection from "../components/ComparisonSection";
import Footer from "../components/Footer";
import CursorGlow from "../components/CursorGlow";
import FloatingParticles from "../components/FloatingParticles";

const LoadingScreen = dynamic(() => import("../components/LoadingScreen"), { ssr: false });

export default function Home() {
  // showMain triggers at 2000ms — exactly when the LoadingScreen starts its fade-out.
  // This allows the HeroSection to mount and start its enter animations WHILE the 
  // LoadingScreen fades out, creating a single seamless crossfade instead of a double transition.
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowMain(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <LoadingScreen />
      {showMain && (
    <main className="relative overflow-hidden">
      <FloatingParticles />
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <PhoneScrollShowcase />
      <ArchitectureSection />
      <BentoShowcase />
      <FeaturesDeepDive />
      <ComparisonSection />
      <Footer />
    </main>
      )}
    </>
  );
}
