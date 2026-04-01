import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface GalleryCursorProps {
  isActive: boolean;
}

export const GalleryCursor = ({ isActive }: GalleryCursorProps) => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] bg-white/80 shadow-lg shadow-white/20 will-change-transform"
      style={{ x: springX, y: springY }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ opacity: { duration: 0.2 } }}
    />
  );
};
