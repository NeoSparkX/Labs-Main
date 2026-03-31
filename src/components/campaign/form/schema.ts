import { z } from "zod";

export const stepOneSchema = z.object({
  full_name:       z.string().min(2, "Name must be at least 2 characters"),
  email:           z.string().email("Enter a valid email address"),
  phone:           z.string().min(7, "Enter a valid phone number"),
  business_name:   z.string().min(2, "Business name is required"),
  business_type:   z.string().min(1, "Select a business type"),
  website:         z.string().url("Enter a valid URL").optional().or(z.literal("")),
  social_link:     z.string().optional(),
  location:        z.string().min(2, "Location is required"),
  referral_source: z.string().min(1, "Select how you heard about us"),
});

export const stepTwoSchema = z.object({
  service_types:      z.array(z.string()).min(1, "Select at least one service"),
  project_brief:      z.string().min(100, "Please write at least 100 characters").max(500, "Max 500 characters"),
  has_existing_brand: z.boolean(),
  timeline:           z.string().min(1, "Select a timeline"),
  reference_links:    z.string().optional(),
});

export const stepThreeSchema = z.object({
  agreed_to_terms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms to proceed" }),
  }),
});

export type StepOneData   = z.infer<typeof stepOneSchema>;
export type StepTwoData   = z.infer<typeof stepTwoSchema>;
export type StepThreeData = z.infer<typeof stepThreeSchema>;
export type CampaignFormData = StepOneData & StepTwoData & StepThreeData;

export const businessTypes = [
  "E-commerce",
  "SaaS / Tech Startup",
  "Agency / Consultancy",
  "Local Business",
  "Restaurant / Food",
  "Healthcare",
  "Education",
  "Real Estate",
  "Non-Profit",
  "Personal Brand",
  "Other",
];

export const referralSources = [
  "Facebook",
  "WhatsApp",
  "Instagram",
  "Direct",
  "Fiverr",
  "LinkedIn",
  "Other",
];

export const serviceOptions = [
  "Web Development",
  "UI/UX Design",
  "Mobile App",
  "Branding & Identity",
  "Automation Systems",
  "Landing Page",
];

export const timelineOptions = [
  "ASAP",
  "2 Weeks",
  "1 Month",
  "Flexible",
];
