import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTopOnNavigate from "@/components/ScrollToTopOnNavigate";
import { ScrollToTop } from "@/components/ScrollToTop";
import { LenisProvider } from "@/components/providers/LenisProvider";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Works from "./pages/Works";
import Products from "./pages/Products";
import ProjectDetail from "./pages/ProjectDetail";
import ProductDetail from "./pages/ProductDetail";
import ExpenseTrackerPrivacy from "./pages/ExpenseTrackerPrivacy";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <LenisProvider>
            <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                    <ScrollToTopOnNavigate />
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/privacy" element={<Privacy />} />
                        <Route path="/works" element={<Works />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/products/expense-tracker/privacy-policy" element={<ExpenseTrackerPrivacy />} />
                        <Route path="/works/:slug" element={<ProjectDetail />} />
                        <Route path="/products/:id" element={<ProductDetail />} />

                        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </TooltipProvider>
        </LenisProvider>
    </QueryClientProvider>
);

export default App;
