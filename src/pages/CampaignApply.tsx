import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CampaignFormShell } from "@/components/campaign/form/CampaignFormShell";
import { motion } from "framer-motion";

const CampaignApply = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-36 pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-3">
            Apply for Spark10
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Complete the form below to apply for a free, custom-built website from NeoSparkX.
          </p>
        </motion.div>

        <CampaignFormShell />
      </section>

      <Footer />
    </div>
  );
};

export default CampaignApply;
