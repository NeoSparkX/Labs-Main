import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { motion } from "framer-motion";

const TOTAL_SLOTS = Number(import.meta.env.VITE_CAMPAIGN_TOTAL_SLOTS) || 10;
const CAMPAIGN_ID = import.meta.env.VITE_CAMPAIGN_ID || "spark10-2026";

interface CampaignSlotCounterProps {
  variant?: "hero" | "banner";
}

export const CampaignSlotCounter = ({ variant = "hero" }: CampaignSlotCounterProps) => {
  const [remaining, setRemaining] = useState<number>(TOTAL_SLOTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, "campaign_applications"),
      where("campaign_id", "==", CAMPAIGN_ID),
      where("status", "==", "accepted")
    );

    const unsubscribe = onSnapshot(
      q,
      (snap) => {
        const acceptedCount = snap.size;
        setRemaining(Math.max(0, TOTAL_SLOTS - acceptedCount));
        setLoading(false);
      },
      () => {
        // On error, fallback to total slots
        setRemaining(TOTAL_SLOTS);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  if (variant === "banner") {
    return (
      <span className="font-bold">
        {loading ? "..." : remaining} of {TOTAL_SLOTS}
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
        {loading ? (
          <span className="animate-pulse">Checking availability...</span>
        ) : (
          <>
            <span className="text-foreground font-semibold">{remaining}</span>{" "}
            of {TOTAL_SLOTS} spots remaining
          </>
        )}
      </span>
    </motion.div>
  );
};
