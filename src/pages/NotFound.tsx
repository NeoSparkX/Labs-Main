import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground relative overflow-hidden">
      <SEO 
        title="404 Page Not Found" 
        description="The requested page could not be found on NeoSparkX."
      />
      
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      <div className="text-center z-10 space-y-6">
        <h1 className="text-8xl font-bold tracking-tighter gradient-text glow-text">404</h1>
        <p className="text-white/60 text-lg uppercase tracking-widest font-mono">Oops! Page not found</p>
        <div className="pt-4">
          <a href="/" className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/50 text-white font-semibold text-sm transition-all bg-white/5 hover:bg-white/10 backdrop-blur-md">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
