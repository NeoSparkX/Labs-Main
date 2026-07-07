import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { LayoutGrid, Globe, Smartphone, Cpu, Palette, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, Project } from "@/data/projects";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const WorkCard = ({ project, index }: { project: Project; index: number }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!isHovered) {
      setCurrentImageIndex(0);
      return;
    }
    if (!project.images || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered, project.images]);

  return (
    <div
      className="relative group cursor-pointer animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
      onClick={() => navigate(`/works/${project.slug}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
      role="link"
    >
      <div className="relative rounded-2xl flex flex-col overflow-hidden smooth-transition group-hover:-translate-y-2 h-[500px] bg-[#0a0a0a] border border-white/5 group-hover:border-white/10 shadow-2xl">
        
        {/* Full Card Image Background with strong Gradient Mask */}
        <div className="absolute inset-0 z-0">
           <AnimatePresence>
              <motion.img 
                 key={currentImageIndex}
                 src={project.images?.[currentImageIndex] ?? "/placeholder.svg"}
                 alt={project.title}
                 className="absolute inset-x-0 top-0 w-full h-[65%] object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                 initial={{ opacity: currentImageIndex === 0 ? 1 : 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.8 }}
              />
           </AnimatePresence>
           
           {/* Dark Gradient Overlay for seamless fading */}
           <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pointer-events-none" />
           <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a] to-transparent pointer-events-none" />
        </div>

        {/* Top layer features (Category badge) */}
        <div className="relative z-10 flex justify-between items-start p-6">
           <Badge variant="secondary" className="bg-black/40 backdrop-blur-md border border-white/10 text-white/90 font-medium hover:bg-black/60 rounded-full px-3.5 py-1">
             {project.category}
           </Badge>
           
           {/* Floating arrow that appears on hover */}
           <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
             <span className="text-white">→</span>
           </div>
        </div>

        <div className="mt-auto" />

        {/* Content Section Overlay (Gradient fade instead of box) */}
        <div className="relative z-10 p-6 pt-12">
          
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white transition-colors leading-tight">
            {project.title}
          </h3>
          <p className="text-white/60 text-sm md:text-base mb-6 line-clamp-2 pr-4 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="text-[11px] md:text-xs px-4 py-1.5 rounded-full bg-transparent border border-white/10 text-white/80 font-medium tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-6 border-t border-white/5">
            <div className="grid grid-cols-3 gap-2">
              {project.metrics && Object.entries(project.metrics).slice(0, 3).map(([key, value]) => (
                <div key={key} className="flex flex-col gap-1.5">
                  <span className="text-white/40 capitalize text-[11px] font-medium tracking-wide">{key}</span>
                  <span className="font-bold text-white truncate text-xl">{String(value)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const categories = ["All", "Web App", "Mobile App", "Automation", "Product Design", "Analytics"];

const categoryIcons: Record<string, React.ReactNode> = {
  All: <LayoutGrid className="w-3.5 h-3.5" />,
  "Web App": <Globe className="w-3.5 h-3.5" />,
  "Mobile App": <Smartphone className="w-3.5 h-3.5" />,
  Automation: <Cpu className="w-3.5 h-3.5" />,
  "Product Design": <Palette className="w-3.5 h-3.5" />,
  Analytics: <BarChart3 className="w-3.5 h-3.5" />,
};

const getCategoryCount = (category: string) => {
  if (category === "All") return projects.length;
  return projects.filter(project => project.category.includes(category)).length;
};

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
              Our Works
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Transforming ideas into intelligent solutions that drive real business impact
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {projects.length} Projects Delivered
              </span>
              <span>•</span>
              <span>15+ Industries Served</span>
              <span>•</span>
              <span>98% Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 sticky top-[84px] md:top-24 z-30 bg-background/80 backdrop-blur-xl border-y border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div 
            className="flex overflow-x-auto md:flex-wrap items-center justify-start md:justify-center gap-2 pb-1 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 flex-nowrap md:flex-wrap"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              const count = getCategoryCount(category);
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex-shrink-0 ${
                    isActive 
                      ? "text-black" 
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {/* Sliding Background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeWorkCategory"
                      className="absolute inset-0 bg-white rounded-xl shadow-[0_4px_20px_rgba(255,255,255,0.15)] z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  {/* Icon & Label */}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {categoryIcons[category]}
                    <span className="whitespace-nowrap">{category}</span>
                  </span>

                  {/* Count Badge */}
                  <span className={`relative z-10 text-[10px] font-bold px-2 py-0.5 rounded-full transition-colors duration-300 ${
                    isActive 
                      ? "bg-black/10 text-black/80" 
                      : "bg-white/10 text-white/50"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <WorkCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 animate-fade-in">
              <p className="text-xl text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto glass-panel rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's build something extraordinary together. Our team is ready to turn your vision into reality.
            </p>
            <Button
              size="lg"
              onClick={() => {
                window.location.href = '/#connect';
              }}
              className="font-semibold"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Works;
