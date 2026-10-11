import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Project } from "@/data/projects";
import { useNavigate, Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

interface PillarCardProps {
  project: Project;
  isActive: boolean;
  isAnyActive: boolean;
  index: number;
  onEnter: () => void;
  onLeave: () => void;
}

export const PillarCard = ({ project, isActive, isAnyActive, index, onEnter, onLeave }: PillarCardProps) => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setCurrentImageIndex(0);
      return;
    }

    if (!project.images || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isActive, project.images]);

  // On mobile, card is always in static form (full width, colored)
  if (isMobile) {
    return (
      <Link 
        to={`/works/${project.slug}`}
        className="relative rounded-[2rem] overflow-hidden w-full aspect-[4/3] group cursor-pointer block border border-white/15 hover:border-white/30 shadow-2xl transition-all"
        aria-label={`View ${project.title} case study`}
      >
        <img
          src={project.images?.[0] ?? "/placeholder.svg"}
          alt={`${project.title} project thumbnail`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-95 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
           <div className="backdrop-blur-xl bg-black/60 border border-white/15 rounded-2xl p-5 shadow-2xl">
             <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/60 mb-2 block">
               {project.category}
             </span>
             <h3 className="font-bold text-white text-lg leading-tight mb-2 tracking-tight font-['Space_Grotesk']">
               {project.title}
             </h3>
             <p className="text-white/80 text-xs font-mono leading-relaxed mb-3 line-clamp-2">
               {project.description}
             </p>
             <div className="flex items-center justify-between border-t border-white/10 pt-3">
               <span className="font-mono text-xs text-white/90 flex items-center gap-1 group-hover:gap-2 transition-all font-semibold">
                 View Case Study →
               </span>
             </div>
           </div>
        </div>
      </Link>
    );
  }

  // Desktop/Tablet Pillar
  return (
    <motion.div
      layout
      animate={{
        flexGrow: isActive ? 2.5 : isAnyActive ? 0.5 : 0.8,
        opacity: isAnyActive && !isActive ? 0.85 : 1,
      }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              layout: { type: "spring", stiffness: 300, damping: 35 },
              opacity: { duration: 0.3 },
              flexGrow: { type: "spring", stiffness: 300, damping: 35 },
            }
      }
      style={{ minWidth: "140px", cursor: "none" }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={() => {
        navigate(`/works/${project.slug}`);
        window.scrollTo(0, 0);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navigate(`/works/${project.slug}`);
          window.scrollTo(0, 0);
        }
      }}
      className="relative rounded-[2rem] overflow-hidden h-full group outline-none border border-white/15 hover:border-white/35 transition-colors shadow-2xl focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      role="button"
      tabIndex={0}
      aria-label={`View ${project.title} case study`}
    >
      <Link 
        to={`/works/${project.slug}`} 
        className="absolute inset-0 z-30 opacity-0" 
        tabIndex={-1} 
        aria-label={`View ${project.title} case study`} 
      />
      {/* Layer 0 & 1: High-contrast vibrant thumbnail + Slideshow */}
      <div className="absolute inset-0 bg-slate-950">
        <AnimatePresence>
          <motion.img
            key={currentImageIndex}
            src={project.images?.[currentImageIndex] ?? "/placeholder.svg"}
            alt={`${project.title} project thumbnail`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: currentImageIndex === 0 ? 1 : 0 }}
            animate={{
              opacity: 1,
              filter: isActive
                ? "grayscale(0%) brightness(105%) contrast(105%)"
                : "grayscale(10%) brightness(92%) contrast(100%)",
            }}
            exit={{ opacity: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { opacity: { duration: 1 }, filter: { duration: 0.2 } }}
            style={{ willChange: "filter, opacity" }}
          />
        </AnimatePresence>
      </div>

      {/* Layer 2: Resting label - Polished high-contrast glass pill */}
      <motion.div
        animate={{ opacity: isActive ? 0 : 1 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3 }}
        className="absolute bottom-4 left-3 right-3 p-3.5 flex flex-col items-center justify-end pointer-events-none rounded-2xl bg-black/75 backdrop-blur-md border border-white/15 shadow-xl"
      >
        <span className="font-bold text-white text-center text-xs md:text-sm tracking-wider uppercase font-['Space_Grotesk'] leading-tight line-clamp-1">
          {project.title}
        </span>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-[10px] uppercase font-mono tracking-wider text-white/50">
            {project.category}
          </span>
          <span className="font-mono text-[10px] text-white/50">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </motion.div>

      {/* Layer 3: Active Overlay */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4 }}
            className="absolute inset-0 pointer-events-none"
          >
            {/* Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Info Card */}
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4, delay: 0.1 }}
              className="absolute bottom-0 left-0 right-0 p-6"
            >
              <div
                className="
                bg-black/70
                border border-white/10
                rounded-2xl
                p-5
                shadow-2xl
              "
              >
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/50 mb-3 block">
                  {project.category}
                </span>

                <h3 className="font-bold text-white text-lg leading-tight mb-2 tracking-tight font-['Space_Grotesk'] max-w-[90%]">
                  {project.title}
                </h3>

                <p className="text-white/60 text-xs font-mono leading-relaxed mb-3 line-clamp-2">
                  {project.description}
                </p>

                {project.techStack && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono text-white/40 border border-white/10 rounded px-1.5 py-0.5 whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between border-t border-white/10 pt-3">
                  <span className="font-mono text-[10px] text-white/30 tracking-widest">
                    {new Date().getFullYear()}
                  </span>
                  <span className="font-mono text-xs text-white/70 flex items-center gap-1 transition-all">
                    View Case Study
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                    >
                      →
                    </motion.span>
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
