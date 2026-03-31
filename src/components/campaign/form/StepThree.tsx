import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { stepThreeSchema, type StepThreeData } from "./schema";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { ArrowLeft, Loader2, Send } from "lucide-react";

interface StepThreeProps {
  onSubmit: () => Promise<void>;
  onBack: () => void;
  isSubmitting: boolean;
}

export const StepThree = ({ onSubmit, onBack, isSubmitting }: StepThreeProps) => {
  const {
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<StepThreeData>({
    resolver: zodResolver(stepThreeSchema),
    defaultValues: {
      agreed_to_terms: undefined as unknown as true,
    },
  });

  const agreed = watch("agreed_to_terms");

  const onFormSubmit = async () => {
    await onSubmit();
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-1">Agreement</h2>
        <p className="text-muted-foreground text-sm">
          Review and accept the terms to submit your application.
        </p>
      </div>

      <div className="glass-panel rounded-2xl p-6 space-y-4">
        <h3 className="font-semibold text-lg">Campaign Terms Summary</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-foreground mt-0.5">•</span>
            This website is built <span className="text-foreground">100% free</span> — no hidden costs.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-foreground mt-0.5">•</span>
            NeoSparkX retains the right to <span className="text-foreground">showcase the project</span> in our portfolio.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-foreground mt-0.5">•</span>
            You <span className="text-foreground">own your website</span> and all content.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-foreground mt-0.5">•</span>
            We may ask for a brief <span className="text-foreground">testimonial</span> after delivery.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-foreground mt-0.5">•</span>
            Delivery within <span className="text-foreground">1–4 weeks</span> of acceptance.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-foreground mt-0.5">•</span>
            Hosting and domain are <span className="text-foreground">your responsibility</span>.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-foreground mt-0.5">•</span>
            Must bring at least <span className="text-foreground">2 potential real clients</span> within 3 months.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-foreground mt-0.5">•</span>
            Must provide <span className="text-foreground">good reviews</span> on platforms (Facebook page, Fiverr, Facebook groups, etc.).
          </li>
          <li className="flex items-start gap-2">
            <span className="text-foreground text-red-400 mt-0.5">•</span>
            <span className="text-red-400">If you fail to meet any of these conditions, this contract will no longer be valid.</span>
          </li>
        </ul>

        <div className="pt-2">
          <Link
            to="/campaign/terms"
            target="_blank"
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground smooth-transition"
          >
            Read the full Terms & Conditions →
          </Link>
        </div>
      </div>

      {/* Agreement checkbox */}
      <label className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer smooth-transition ${
        agreed ? "border-emerald-500/40 bg-emerald-500/10" : "border-border/40"
      }`}>
        <Checkbox
          checked={agreed === true}
          onCheckedChange={(checked) => {
            setValue("agreed_to_terms", checked === true ? true : (undefined as unknown as true), {
              shouldValidate: true,
            });
          }}
          className="mt-0.5"
        />
        <div>
          <Label className="cursor-pointer">
            I agree to the Spark10 Campaign Terms & Conditions *
          </Label>
          <p className="text-xs text-muted-foreground mt-1">
            By checking this box, you confirm that you have read and accept the terms.
          </p>
        </div>
      </label>
      {errors.agreed_to_terms && (
        <p className="text-xs text-red-400">{errors.agreed_to_terms.message}</p>
      )}

      <div className="flex justify-between pt-4">
        <Button type="button" variant="ghost" className="gap-2" onClick={onBack} disabled={isSubmitting}>
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <Button
          type="submit"
          className="gap-2 bg-white text-background hover:bg-white/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Submit Application
              <Send className="w-4 h-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
};
