import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { AnimatePresence, motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { StepOne } from "./StepOne.tsx";
import { StepTwo } from "./StepTwo.tsx";
import { StepThree } from "./StepThree.tsx";
import type { StepOneData, StepTwoData, CampaignFormData } from "./schema";

export const CampaignFormShell = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<Partial<CampaignFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const progressValue = (step / 3) * 100;

  const handleStepOneComplete = (data: StepOneData) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(2);
  };

  const handleStepTwoComplete = (data: StepTwoData) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(3);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      const finalData = {
        ...formData,
        agreed_to_terms: true,
        campaign_id: import.meta.env.VITE_CAMPAIGN_ID || "spark10-2026",
        status: "pending",
        submitted_at: serverTimestamp(),
        agreed_at: serverTimestamp(),
      };

      await addDoc(collection(db, "campaign_applications"), finalData);

      navigate("/campaign/success", {
        state: { name: formData.full_name },
      });
    } catch (err) {
      console.error("Submission error:", err);
      setError("Something went wrong submitting your application. Please try again.");
      setIsSubmitting(false);
    }
  };

  const stepLabels = ["About You", "Your Project", "Agreement"];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Step indicator */}
      <div className="mb-10">
        <div className="flex justify-between mb-3">
          {stepLabels.map((label, index) => (
            <span
              key={label}
              className={`text-xs uppercase tracking-wider transition-colors ${
                step >= index + 1 ? "text-foreground font-medium" : "text-muted-foreground"
              }`}
            >
              {label}
            </span>
          ))}
        </div>
        <Progress value={progressValue} className="h-1" />
      </div>

      {/* Error message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-sm"
        >
          {error}
        </motion.div>
      )}

      {/* Steps */}
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <StepOne onComplete={handleStepOneComplete} defaultValues={formData} />
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <StepTwo
              onComplete={handleStepTwoComplete}
              onBack={() => setStep(1)}
              defaultValues={formData}
            />
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <StepThree
              onSubmit={handleSubmit}
              onBack={() => setStep(2)}
              isSubmitting={isSubmitting}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
