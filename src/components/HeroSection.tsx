import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import jilaniPartnerLogo from "@/assets/jilanihome-partner01.svg";
import tyvikPartnerLogo from "@/assets/tyvik-partner02.svg";
import mudilagbePartnerLogo from "@/assets/mudilagbe-partner02.svg";
export const HeroSection = () => {
  const isMobile = useIsMobile();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32">
    {/* Animated Background Grid */}
    <div className="absolute inset-0 opacity-20">
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
    </div>

    {/* Floating Orbs */}
    <motion.div animate={{
      y: [0, -30, 0],
      opacity: [0.3, 0.6, 0.3]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
    <motion.div animate={{
      y: [0, 30, 0],
      opacity: [0.3, 0.6, 0.3]
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1
    }} className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

    <div className="container mx-auto px-4 z-10">
      <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="text-center space-y-8 max-w-5xl mx-auto">


        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[1.1]">
          <span className="block premium-gradient-text">Designing the Future</span>
          <span className="block premium-gradient-text-alt">of Intelligence.</span>
        </h1>

        <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5
        }} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">Software Architect • AI Automation • SaaS Agency</motion.p>

        <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.7
        }} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button asChild size="lg" className="rounded-full px-8 py-6 text-base font-semibold bg-white text-black hover:bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 transition-all">
            <Link to="/works">
              Explore Our Works<ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base font-semibold border-white/20 hover:bg-white/10 text-white backdrop-blur-sm transition-all">
            <a href="#services">
              Our Agency Services
            </a>
          </Button>
        </motion.div>

        <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1
        }} className="pt-12">
          <p className="text-center text-sm text-muted-foreground mb-2">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 pt-1 pb-4">
            <div className="h-16 w-36 flex items-center justify-center">
              <img
                src={jilaniPartnerLogo}
                alt="Jilani Home Partner Logo"
                className="max-h-full max-w-full opacity-35 hover:opacity-85 transition-opacity object-contain"
              />
            </div>
            <div className="h-16 w-36 flex items-center justify-center">
              <img
                src={tyvikPartnerLogo}
                alt="Tyvik Partner Logo"
                className="max-h-[70%] max-w-full opacity-35 hover:opacity-85 transition-opacity object-contain"
              />
            </div>
            <div className="h-16 w-36 flex items-center justify-center">
              <img
                src={mudilagbePartnerLogo}
                alt="Mudi Lagbe Partner Logo"
                className="max-h-full max-w-full scale-[1.4] opacity-35 hover:opacity-85 transition-opacity object-contain"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>;
};