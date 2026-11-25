import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { WorksGallery } from "./works/WorksGallery";

export const WorksSection = () => {
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
          Flagship Deployments
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Deep-dives into systems, architectures, and applications engineered by NeoSparkX
        </p>
        <Button asChild variant="outline" size="lg" className="hover-scale border-white/20">
          <Link to="/works">
            Explore All Case Studies
          </Link>
        </Button>
      </motion.div>
    </div>

    <WorksGallery />
  </section>;
};
