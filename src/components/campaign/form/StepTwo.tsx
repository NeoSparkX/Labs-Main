import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { stepTwoSchema, serviceOptions, timelineOptions, type StepTwoData, type CampaignFormData } from "./schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface StepTwoProps {
  onComplete: (data: StepTwoData) => void;
  onBack: () => void;
  defaultValues?: Partial<CampaignFormData>;
}

export const StepTwo = ({ onComplete, onBack, defaultValues }: StepTwoProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<StepTwoData>({
    resolver: zodResolver(stepTwoSchema),
    defaultValues: {
      service_types: defaultValues?.service_types || [],
      project_brief: defaultValues?.project_brief || "",
      has_existing_brand: defaultValues?.has_existing_brand || false,
      timeline: defaultValues?.timeline || "",
      reference_links: defaultValues?.reference_links || "",
    },
  });

  const selectedServices = watch("service_types");
  const timeline = watch("timeline");
  const hasExistingBrand = watch("has_existing_brand");
  const projectBrief = watch("project_brief") || "";

  const toggleService = (service: string) => {
    const current = selectedServices || [];
    const updated = current.includes(service)
      ? current.filter((s) => s !== service)
      : [...current, service];
    setValue("service_types", updated, { shouldValidate: true });
  };

  return (
    <form onSubmit={handleSubmit(onComplete)} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-1">Your Project</h2>
        <p className="text-muted-foreground text-sm">Tell us what you need built.</p>
      </div>

      <div className="space-y-5">
        {/* Service Types */}
        <div className="space-y-3">
          <Label>What services do you need? *</Label>
          <div className="grid grid-cols-2 gap-3">
            {serviceOptions.map((service) => (
              <label
                key={service}
                className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer smooth-transition ${
                  selectedServices?.includes(service)
                    ? "border-white/40 bg-white/10"
                    : "border-border/40 hover:border-white/20"
                }`}
              >
                <Checkbox
                  checked={selectedServices?.includes(service)}
                  onCheckedChange={() => toggleService(service)}
                />
                <span className="text-sm">{service}</span>
              </label>
            ))}
          </div>
          {errors.service_types && (
            <p className="text-xs text-red-400">{errors.service_types.message}</p>
          )}
        </div>

        {/* Project Brief */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="project_brief">Project Brief *</Label>
            <span className={`text-xs ${projectBrief.length < 100 ? "text-muted-foreground" : projectBrief.length > 500 ? "text-red-400" : "text-emerald-400"}`}>
              {projectBrief.length}/500
            </span>
          </div>
          <Textarea
            id="project_brief"
            placeholder="Describe your project, your goals, and what makes your business unique. (100–500 characters)"
            rows={5}
            {...register("project_brief")}
          />
          {errors.project_brief && (
            <p className="text-xs text-red-400">{errors.project_brief.message}</p>
          )}
        </div>

        {/* Has existing brand */}
        <div className="flex items-center justify-between p-4 rounded-xl border border-border/40">
          <div>
            <Label htmlFor="has_existing_brand">Do you have existing branding?</Label>
            <p className="text-xs text-muted-foreground mt-0.5">Logo, colors, fonts, brand guidelines</p>
          </div>
          <Switch
            id="has_existing_brand"
            checked={hasExistingBrand}
            onCheckedChange={(checked) => setValue("has_existing_brand", checked)}
          />
        </div>

        {/* Timeline */}
        <div className="space-y-2">
          <Label>Preferred Timeline *</Label>
          <Select
            value={timeline}
            onValueChange={(val) => setValue("timeline", val, { shouldValidate: true })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a timeline" />
            </SelectTrigger>
            <SelectContent>
              {timelineOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.timeline && (
            <p className="text-xs text-red-400">{errors.timeline.message}</p>
          )}
        </div>

        {/* Reference Links */}
        <div className="space-y-2">
          <Label htmlFor="reference_links">Reference Links (optional)</Label>
          <Input
            id="reference_links"
            placeholder="Links to websites you like (comma-separated)"
            {...register("reference_links")}
          />
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button type="button" variant="ghost" className="gap-2" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <Button type="submit" className="gap-2 bg-white text-background hover:bg-white/90">
          Next: Agreement
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </form>
  );
};
