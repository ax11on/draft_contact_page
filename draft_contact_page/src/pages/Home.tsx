/*
 * Home — Main page assembling all sections
 * Design: "Cold Lab" dark technical interface
 * Single-page layout with smooth scroll navigation
 */

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DivisionsSection from "@/components/DivisionsSection";
import AboutSection from "@/components/AboutSection";
import GovernanceSection from "@/components/GovernanceSection";
import LeadershipSection from "@/components/LeadershipSection";
import ContactSection from "@/components/ContactSection";
import DisclaimerDialog from "@/components/DisclaimerDialog";
import Footer from "@/components/Footer";

export default function Home() {
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[9999] focus:px-3 focus:py-2 focus:rounded-xl focus:border focus:border-white/[0.08] focus:bg-card focus:text-foreground focus:shadow-lg"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <HeroSection />
        <DivisionsSection />
        <AboutSection />
        <GovernanceSection />
        <LeadershipSection />
        <ContactSection onOpenDisclaimer={() => setDisclaimerOpen(true)} />
      </main>

      <Footer />

      <DisclaimerDialog
        open={disclaimerOpen}
        onClose={() => setDisclaimerOpen(false)}
      />
    </div>
  );
}
