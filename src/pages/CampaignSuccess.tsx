import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Mail, Eye, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const nextSteps = [
  {
    icon: Eye,
    title: "Application Review",
    description: "Our founders personally review every application within 48 hours.",
  },
  {
    icon: Mail,
    title: "Confirmation Email",
    description: "If selected, you'll receive a confirmation email with next steps.",
  },
  {
    icon: Rocket,
    title: "Kickoff Call",
    description: "We'll schedule a brief kickoff call to understand your vision and begin building.",
  },
];

const CampaignSuccess = () => {
  const location = useLocation();
  const name = (location.state as { name?: string })?.name || "there";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-40 pb-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-8"
          >
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold gradient-text mb-4"
          >
            You're In, {name}!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-lg mx-auto mb-16"
          >
            Your application has been submitted successfully.
            Here's what happens next.
          </motion.p>

          {/* What's next */}
          <div className="grid gap-6 text-left mb-16">
            {nextSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="glass-panel rounded-2xl p-6 flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Link to="/works">
              <Button size="lg" className="gap-2 bg-white text-background hover:bg-white/90">
                Explore Our Work
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CampaignSuccess;
