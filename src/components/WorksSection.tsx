import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { WorksGallery } from "./works/WorksGallery";

export const WorksSection = () => {
  const navigate = useNavigate();

  return <section id="works" className="py-32 relative overflow-hidden">
    <div className="container mx-auto px-4">
      <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-10 md:mb-20">
        <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
          Featured Works
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Showcasing our latest innovative solutions
        </p>
        <Button onClick={() => {
          navigate("/works");
          setTimeout(() => window.scrollTo({
            top: 0,
            behavior: "instant"
          }), 0);
        }} variant="outline" size="lg" className="hover-scale">
          View All Projects
        </Button>
      </motion.div>

      <WorksGallery />
    </div>
  </section>;
};
