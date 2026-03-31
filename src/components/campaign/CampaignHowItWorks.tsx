import { motion } from "framer-motion";
import { ClipboardCheck, ShieldCheck, Rocket } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Apply",
    description: "Fill out a quick 3-step application telling us about you and your project. Takes under 5 minutes.",
  },
  {
    icon: ShieldCheck,
    step: "02",
    title: "Get Verified",
    description: "Our founders personally review every application. If selected, you'll receive a confirmation email within 48 hours.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "We Build",
    description: "We design and develop your website from scratch, you give feedback, we refine. Delivered in 1–4 weeks.",
  },
];

export const CampaignHowItWorks = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Three simple steps from application to a live website.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line (between cards on md+) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(100%+0px)] w-full h-px bg-gradient-to-r from-white/20 to-transparent z-0" />
              )}

              <div className="glass-panel rounded-2xl p-8 relative z-10 h-full">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-bold text-white/10">{item.step}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
