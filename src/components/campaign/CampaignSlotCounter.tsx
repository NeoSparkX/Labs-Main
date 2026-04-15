import { motion } from "framer-motion";

const TOTAL_SLOTS = 10;
const REMAINING_SLOTS = 9;

interface CampaignSlotCounterProps {
  variant?: "hero" | "banner";
}

export const CampaignSlotCounter = ({ variant = "hero" }: CampaignSlotCounterProps) => {
  if (variant === "banner") {
    return (
      <span className="font-bold">
        {REMAINING_SLOTS} of {TOTAL_SLOTS}
      </span>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="inline-flex items-center gap-3 glass-panel rounded-full px-5 py-2.5 mt-6"
    >
      {/* Pulsing live dot */}
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
      </span>

      <span className="text-sm text-muted-foreground tracking-wide">
        <span className="text-foreground font-semibold">{REMAINING_SLOTS}</span>{" "}
        of {TOTAL_SLOTS} spots remaining
      </span>
    </motion.div>
  );
};

