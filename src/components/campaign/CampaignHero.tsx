import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CampaignSlotCounter } from "./CampaignSlotCounter";

export const CampaignHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20 px-4">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 glass-panel rounded-full px-4 py-1.5 text-sm text-muted-foreground">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Limited Offer <span className="font-bold text-foreground">Only 9 Slots Left</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]"
        >
          <span className="premium-gradient-text">
            Get a Premium Service
          </span>
          <br />
          <span className="text-muted-foreground text-3xl sm:text-4xl md:text-5xl font-medium">
            Built by NeoSparkX  <span className="font-bold text-foreground"> Free. Forever. </span>
          </span>
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          We're selecting <span className="text-foreground font-medium">10 businesses</span> to
          receive a fully designed, custom-built website <span className="font-bold text-foreground">at zero cost. </span>
          No catch. No templates. Just real, portfolio-grade work
          from our design studio.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <Link to="/campaign/apply">
            <Button
              size="lg"
              className="gap-2 bg-white text-background hover:bg-white/90 text-base px-8 py-6 rounded-xl animate-glow-pulse"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>

          <CampaignSlotCounter />
        </motion.div>
      </div>
    </section>
  );
};
