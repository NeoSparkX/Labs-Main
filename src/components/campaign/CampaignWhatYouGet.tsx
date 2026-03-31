import { motion } from "framer-motion";
import { Code, Palette, Zap, Globe, Smartphone, BarChart3 } from "lucide-react";

const offerings = [
  {
    icon: Code,
    title: "Custom Website",
    description: "A fully coded, responsive website tailored to your brand — not a template.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "A professional design system with typography, colors, and layouts crafted for conversion.",
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    description: "Lightning-fast load times with modern frameworks and best-in-class Core Web Vitals.",
  },
  {
    icon: Globe,
    title: "SEO Foundation",
    description: "Built with proper meta tags, semantic HTML, and search engine visibility from day one.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Flawless experience across every device — phone, tablet, and desktop.",
  },
  {
    icon: BarChart3,
    title: "Analytics Ready",
    description: "Integrated with analytics so you can track visitors and measure impact immediately.",
  },
];

export const CampaignWhatYouGet = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            What You'll Get
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every selected business receives a complete digital product. Designed, built, and deployed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-panel rounded-2xl p-7 group hover:shadow-glow smooth-transition"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 group-hover:bg-white/20 smooth-transition">
                <item.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
