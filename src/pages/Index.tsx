import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingIntro } from "@/components/LoadingIntro";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WorksSection } from "@/components/WorksSection";
import { MottosSection } from "@/components/MottosSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { AboutSection } from "@/components/AboutSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import SEO from "@/components/SEO";

const Index = () => {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === "undefined") return false;
    if (window.location.hash) return false;
    try {
      return !sessionStorage.getItem("hasSeenIntro");
    } catch {
      return false;
    }
  });

  const handleIntroComplete = () => {
    setShowIntro(false);
    try {
      sessionStorage.setItem("hasSeenIntro", "true");
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="NeoSparkX | AI-Native Software & Product Startup" 
        description="NeoSparkX is an independent AI-native product startup founded in 2023 in Rangpur, Bangladesh. We build context tools for Claude, intelligent software architectures, and privacy-first consumer applications."
        keywords="NeoSparkX, AI product startup, Claude context tools, MarkItDown, PeerHire, autonomous systems, software architecture, Rangpur Bangladesh"
      />
      <AnimatePresence mode="wait">
        {showIntro && <LoadingIntro onComplete={handleIntroComplete} />}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navigation />
        <HeroSection />
        <ProductsSection />
        <ServicesSection />
        <MottosSection />
        <WorksSection />
        <MarqueeSection />
        <AboutSection />
        {/* <TestimonialsSection /> */}
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </motion.div>
    </div>
  );
};

export default Index;
