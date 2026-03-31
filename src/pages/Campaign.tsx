import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ScrollToTop } from "@/components/ScrollToTop";
import {
  CampaignHero,
  CampaignWhatYouGet,
  CampaignHowItWorks,
  CampaignPortfolioPreview,
  CampaignTermsSummary,
  CampaignCTABanner,
} from "@/components/campaign";

const Campaign = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <CampaignHero />
      <CampaignWhatYouGet />
      <CampaignPortfolioPreview />
      <TestimonialsSection />
      <CampaignHowItWorks />
      <CampaignTermsSummary />
      <CampaignCTABanner />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Campaign;
