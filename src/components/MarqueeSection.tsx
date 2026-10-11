import { motion } from "framer-motion";

const items = [
  "Autonomous Systems",
  "Frontier AI Architectures",
  "Intelligent Software",
  "Offline-First Privacy",
  "Engineered with Claude",
  "High-Performance Apps",
  "Scalable Systems",
];

export const MarqueeSection = () => {
  return (
    <div className="py-20 space-y-8 overflow-hidden relative">
      {/* Forward Marquee with edge gradient masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left and right edge gradient masks to eliminate mid-word cutting */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 md:w-48 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 md:w-48 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

        <motion.div
          className="flex gap-8 md:gap-14 whitespace-nowrap will-change-transform"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <div
              key={index}
              className="text-4xl sm:text-6xl md:text-8xl font-bold gradient-text opacity-25 hover:opacity-100 smooth-transition shrink-0 select-none"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Reverse Marquee with edge gradient masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left and right edge gradient masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 md:w-48 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 md:w-48 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

        <motion.div
          className="flex gap-8 md:gap-14 whitespace-nowrap will-change-transform"
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...items, ...items, ...items, ...items].reverse().map((item, index) => (
            <div
              key={index}
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-white/15 hover:text-white/40 smooth-transition shrink-0 select-none flex items-center gap-3"
            >
              <span className="text-amber-400/40 text-2xl">•</span>
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
