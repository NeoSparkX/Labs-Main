import { useState } from "react";
import { projects } from "@/data/projects";
import { PillarCard } from "./PillarCard";
import { GalleryCursor } from "./GalleryCursor";
import { useIsMobile } from "@/hooks/use-mobile";

export const WorksGallery = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const featured = projects.slice(0, 4);
  const isMobile = useIsMobile();

  return (
    <div className="relative w-full overflow-hidden mt-8 px-4 md:px-8 lg:px-12">
      {!isMobile && <GalleryCursor isActive={activeId !== null} />}
      
      {/* Mobile Stack vs Desktop Row */}
      <div 
        className={isMobile 
          ? "flex flex-col gap-4" 
          : "flex gap-2 lg:gap-3 items-stretch h-[460px] lg:h-[580px]"
        }
      >
        {featured.map((project, index) => (
          <PillarCard
            key={project.slug}
            project={project}
            index={index}
            isActive={activeId === project.slug}
            isAnyActive={activeId !== null}
            onEnter={() => !isMobile && setActiveId(project.slug)}
            onLeave={() => !isMobile && setActiveId(null)}
          />
        ))}
      </div>
    </div>
  );
};
