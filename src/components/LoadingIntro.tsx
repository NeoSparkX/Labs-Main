import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const LoadingIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      let increment = 1;
      if (currentProgress < 30) {
        increment = Math.random() * 6 + 4;
      } else if (currentProgress < 75) {
        increment = Math.random() * 4 + 3;
      } else if (currentProgress < 90) {
        increment = Math.random() * 3 + 1.2; // Quick compiling pause simulation
      } else {
        increment = Math.random() * 10 + 6;
      }

      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(Math.floor(currentProgress));

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(onComplete, 400); //snappier transition to complete
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  const getCurrentStep = (p: number) => {
    if (p < 20) return "CONNECTING...";
    if (p < 45) return "INITIALIZING CORE SYSTEM...";
    if (p < 70) return "LOADING INTERFACES...";
    if (p < 90) return "COMPILING WORK ASSETS...";
    if (p < 100) return "RENDERING ENGINE...";
    return "READY";
  };

  const letters = Array.from("NeoSparkX");

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        y: -30,
        filter: "blur(15px)",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[100] bg-[#07080a] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Premium background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Center radial ambient glow */}
      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full bg-white/[0.02] filter blur-[80px] pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 0.9, 0.6]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)"
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
        {/* Brand Name Letter Stagger Reveal */}
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          initial="hidden"
          animate="visible"
          className="flex justify-center items-center gap-1.5"
        >
          {letters.map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 35, filter: "blur(8px)" },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  filter: "blur(0px)",
                  transition: { type: "spring", stiffness: 100, damping: 12 }
                }
              }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white select-none"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* High-tech Loader Bar & Percentage */}
        <div className="w-72 mx-auto space-y-4">
          <div className="relative h-[2px] bg-white/5 rounded-full overflow-hidden">
            {/* Pulsing main filled progress */}
            <motion.div
              className="h-full bg-gradient-to-r from-white/30 via-white to-white/30 shadow-[0_0_12px_rgba(255,255,255,0.6)]"
              style={{ width: `${progress}%` }}
              transition={{ type: "tween", ease: "linear" }}
            />
          </div>

          <div className="flex justify-between items-center px-1 font-mono text-[10px] tracking-widest text-white/40">
            <span className="animate-pulse">
              {getCurrentStep(progress)}
            </span>
            <span className="font-bold text-white/70">
              {String(progress).padStart(3, '0')}%
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
