import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CampaignSlotCounter } from "./CampaignSlotCounter";

export const CampaignCTABanner = () => {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative glass-panel rounded-3xl p-10 md:p-16 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <CampaignSlotCounter variant="banner" /> spots remaining
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Don't miss out. Once all 10 slots are filled, this campaign closes.
              Apply today and let us build something incredible for your business.
            </p>
            <Link to="/campaign/apply">
              <Button
                size="lg"
                className="gap-2 bg-white text-background hover:bg-white/90 text-base px-8 py-6 rounded-xl animate-glow-pulse"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
