import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export const CampaignPortfolioPreview = () => {
  // Show first 4 projects (or fewer if less available)
  const previewProjects = projects.slice(0, 4);

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Our Recent Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real projects built for real businesses. This is the quality you'll receive.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {previewProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <Link to={`/works/${project.slug}`}>
                <div className={`glass-panel rounded-2xl overflow-hidden hover:shadow-glow smooth-transition`}>
                  {/* Image area */}
                  {project.images?.[0] ? (
                    <div className="aspect-video overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <span className="text-2xl font-bold text-white/20">{project.title}</span>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">{project.category}</span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 smooth-transition" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            to="/works"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground smooth-transition text-sm uppercase tracking-wider group"
          >
            See all work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 smooth-transition" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
