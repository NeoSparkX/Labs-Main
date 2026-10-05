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
        title="NeoSparkX | Premium Software Studio & Creative Agency" 
        description="We design and engineer high-performance web applications, native mobile apps, and custom software systems. Premium aesthetics, modern interfaces, and privacy-first engineering."
        keywords="NeoSparkX, software studio, creative agency, web development, mobile apps, software design, UI/UX design, custom software"
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
        <ServicesSection />
        <MottosSection />
        <WorksSection />
        <MarqueeSection />
        <ProductsSection />
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
