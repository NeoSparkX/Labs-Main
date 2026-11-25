import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const LETTERS = Array.from("NeoSparkX");

const getStepLabel = (p: number) => {
  if (p < 22) return "CONNECTING...";
  if (p < 48) return "INITIALIZING CORE SYSTEM...";
  if (p < 74) return "LOADING INTERFACES...";
  if (p < 95) return "COMPILING WORK ASSETS...";
  return "READY";
};

export const LoadingIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [stepLabel, setStepLabel] = useState("CONNECTING...");
  const barRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const duration = 950; // Crisp, deterministic ~1s load reveal
    let startTime: number | null = null;
    let rafId = 0;
    let completeTimer: ReturnType<typeof setTimeout> | null = null;
    let lastStep = "CONNECTING...";

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);

      // Smooth ease-out curve with slight mid-load deceleration
      const eased = 1 - Math.pow(1 - t, 2.4);
      const pct = Math.min(Math.round(eased * 100), 100);

      // Pure GPU transform & direct text node update — zero React re-renders per frame
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${eased})`;
      }
      if (pctRef.current) {
        pctRef.current.textContent = `${String(pct).padStart(3, "0")}%`;
      }

      const nextStep = getStepLabel(pct);
      if (nextStep !== lastStep) {
        lastStep = nextStep;
        setStepLabel(nextStep);
      }

      if (t < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        completeTimer = setTimeout(() => onCompleteRef.current(), 220);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      if (completeTimer) clearTimeout(completeTimer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -24,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
      }}
      style={{ willChange: "transform, opacity" }}
      className="fixed inset-0 z-[100] bg-[#07080a] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Lightweight radial ambient glow (no expensive CSS blur filter) */}
      <div
        className="absolute w-[620px] h-[620px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.015) 40%, transparent 70%)",
        }}
      />

      {/* Decorative High-tech Corner Borders (HUD Style) */}
      <div className="absolute inset-8 border border-white/[0.02] pointer-events-none rounded-2xl">
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20 rounded-tl-xl" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20 rounded-tr-xl" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20 rounded-bl-xl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20 rounded-br-xl" />
      </div>

      <div className="text-center space-y-12 z-10 max-w-lg px-6">
        {/* Brand Name Letter Stagger Reveal (GPU transform + opacity only) */}
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.045 } },
          }}
          initial="hidden"
          animate="visible"
          className="flex justify-center items-center gap-1.5"
        >
          {LETTERS.map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              style={{ fontFamily: "'Space Grotesk', sans-serif", willChange: "transform, opacity" }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white select-none"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* High-tech Loader Bar & Percentage */}
        <div className="w-72 mx-auto space-y-4">
          <div className="relative h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              ref={barRef}
              className="h-full w-full origin-left bg-gradient-to-r from-white/40 via-white to-white/60"
              style={{ transform: "scaleX(0)", willChange: "transform" }}
            />
          </div>

          <div className="flex justify-between items-center px-1 font-mono text-[10px] tracking-widest text-white/40">
            <span>{stepLabel}</span>
            <span ref={pctRef} className="font-bold text-white/70">
              000%
            </span>
          </div>
        </div>

        {/* Code Matrix Ticks */}
        <div className="text-[9px] font-mono text-white/20 select-none tracking-[0.3em] uppercase">
          SYSTEM_STATE_OK // NEOSPARKX_INIT
        </div>
      </div>
    </motion.div>
  );
};
