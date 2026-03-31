import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

const keyTerms = [
  "This is real portfolio work, we retain the right to showcase your project.",
  "You must bring at least 2 potential real clients within 3 months from your agreement.",
  "You must provide good reviews on platforms (Facebook page, Fiverr, Facebook groups, etc.).",
  "If you fail to meet any of these conditions, this contract will no longer be valid.",
  "You retain full ownership of your website and content.",
  "We'll ask for a short testimonial and your permission to feature the project.",
  "Timeline: 1–4 weeks from acceptance to delivery.",
  "Hosting and domain are your responsibility (we can recommend options).",
  "One revision round included; additional revisions are available at standard rates.",
];

export const CampaignTermsSummary = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Key Terms
          </h2>
          <p className="text-lg text-muted-foreground">
            The important points, simplified.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-panel rounded-2xl p-8"
        >
          <ul className="space-y-4">
            {keyTerms.map((term, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + index * 0.05 }}
                className="flex items-start gap-3"
              >
                <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-foreground/90 leading-relaxed">{term}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <Link
            to="/campaign/terms"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground smooth-transition text-sm uppercase tracking-wider group"
          >
            Read full terms
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 smooth-transition" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
