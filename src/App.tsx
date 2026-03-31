import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTopOnNavigate from "@/components/ScrollToTopOnNavigate";
import { LenisProvider } from "@/components/providers/LenisProvider";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Works from "./pages/Works";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import Campaign from "./pages/Campaign";
import CampaignApply from "./pages/CampaignApply";
import CampaignSuccess from "./pages/CampaignSuccess";
import CampaignTerms from "./pages/CampaignTerms";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <LenisProvider>
            <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                    <ScrollToTopOnNavigate />
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/privacy" element={<Privacy />} />
                        <Route path="/works" element={<Works />} />
                        <Route path="/works/:slug" element={<ProjectDetail />} />
                        <Route path="/campaign" element={<Campaign />} />
                        <Route path="/campaign/apply" element={<CampaignApply />} />
                        <Route path="/campaign/success" element={<CampaignSuccess />} />
                        <Route path="/campaign/terms" element={<CampaignTerms />} />
                        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </TooltipProvider>
        </LenisProvider>
    </QueryClientProvider>
);

export default App;
