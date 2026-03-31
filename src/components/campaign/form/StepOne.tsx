import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { stepOneSchema, businessTypes, referralSources, type StepOneData, type CampaignFormData } from "./schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";

interface StepOneProps {
  onComplete: (data: StepOneData) => void;
  defaultValues?: Partial<CampaignFormData>;
}

export const StepOne = ({ onComplete, defaultValues }: StepOneProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<StepOneData>({
    resolver: zodResolver(stepOneSchema),
    defaultValues: {
      full_name: defaultValues?.full_name || "",
      email: defaultValues?.email || "",
      phone: defaultValues?.phone || "",
      business_name: defaultValues?.business_name || "",
      business_type: defaultValues?.business_type || "",
      website: defaultValues?.website || "",
      social_link: defaultValues?.social_link || "",
      location: defaultValues?.location || "",
      referral_source: defaultValues?.referral_source || "",
    },
  });

  const businessType = watch("business_type");
  const referralSource = watch("referral_source");

  return (
    <form onSubmit={handleSubmit(onComplete)} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-1">About You</h2>
        <p className="text-muted-foreground text-sm">Tell us about yourself and your business.</p>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="full_name">Full Name *</Label>
          <Input id="full_name" placeholder="John Doe" {...register("full_name")} />
          {errors.full_name && (
            <p className="text-xs text-red-400">{errors.full_name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" type="email" placeholder="john@company.com" {...register("email")} />
          {errors.email && (
            <p className="text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" placeholder="+880 1234 567890" {...register("phone")} />
          {errors.phone && (
            <p className="text-xs text-red-400">{errors.phone.message}</p>
          )}
        </div>

        {/* Business Name */}
        <div className="space-y-2">
          <Label htmlFor="business_name">Business Name *</Label>
          <Input id="business_name" placeholder="Your company name" {...register("business_name")} />
          {errors.business_name && (
            <p className="text-xs text-red-400">{errors.business_name.message}</p>
          )}
        </div>

        {/* Business Type */}
        <div className="space-y-2">
          <Label>Business Type *</Label>
          <Select
            value={businessType}
            onValueChange={(val) => setValue("business_type", val, { shouldValidate: true })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your business type" />
            </SelectTrigger>
            <SelectContent>
              {businessTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.business_type && (
            <p className="text-xs text-red-400">{errors.business_type.message}</p>
          )}
        </div>

        {/* Website (optional) */}
        <div className="space-y-2">
          <Label htmlFor="website">Website (optional)</Label>
          <Input id="website" placeholder="https://yoursite.com" {...register("website")} />
          {errors.website && (
            <p className="text-xs text-red-400">{errors.website.message}</p>
          )}
        </div>

        {/* Social link (optional) */}
        <div className="space-y-2">
          <Label htmlFor="social_link">Social Media Link (optional)</Label>
          <Input
            id="social_link"
            placeholder="https://facebook.com/yourbusiness"
            {...register("social_link")}
          />
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label htmlFor="location">Location *</Label>
          <Input id="location" placeholder="City, Country" {...register("location")} />
          {errors.location && (
            <p className="text-xs text-red-400">{errors.location.message}</p>
          )}
        </div>

        {/* Referral source */}
        <div className="space-y-2">
          <Label>How did you hear about us? *</Label>
          <Select
            value={referralSource}
            onValueChange={(val) => setValue("referral_source", val, { shouldValidate: true })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a source" />
            </SelectTrigger>
            <SelectContent>
              {referralSources.map((source) => (
                <SelectItem key={source} value={source}>
                  {source}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.referral_source && (
            <p className="text-xs text-red-400">{errors.referral_source.message}</p>
          )}
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <Button type="submit" className="gap-2 bg-white text-background hover:bg-white/90">
          Next: Your Project
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </form>
  );
};
