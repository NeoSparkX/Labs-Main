import { motion } from "framer-motion";
import { Phone, Mail, Menu } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import StaggeredMenu from "@/components/ui/StaggeredMenu";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateToWorks = () => {
    navigate("/works");
  };

  const navigateToProducts = () => {
    navigate("/products");
  };

  return (
    <>
      {/* Mobile/Tablet Staggered Menu Overlay (Controlled via isOpen state) */}
      <StaggeredMenu
        position="right"
        className="lg:hidden"
        isFixed={true}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        hideHeader={true}
        items={[
          { label: 'Home', ariaLabel: 'Go to home page', link: '/', onClick: () => scrollToSection('home') },
          { label: 'Services', ariaLabel: 'View our services', link: '/#services', onClick: () => scrollToSection('services') },
          { label: 'Works', ariaLabel: 'Explore our works', link: '/works', onClick: navigateToWorks },
          { label: 'Products', ariaLabel: 'Explore our products', link: '/products', onClick: navigateToProducts },
          { label: 'Contact', ariaLabel: 'Get in touch', link: '/#connect', onClick: () => scrollToSection('connect') }
        ]}
        socialItems={[
          { label: 'LinkedIn', link: 'https://www.linkedin.com/company/neosparkx/' },
          { label: 'Instagram', link: 'https://www.instagram.com/neosparkx.agency/' },
          { label: 'Behance', link: 'https://www.behance.net/neuralabs-projects' }
        ]}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={['#17181c', '#2c2d33', '#1e1f24']}
        logoUrl={logo}
        accentColor="#a78bfa"
      />

      {/* Main Header Bar (Visible on all devices, glass-panel style) */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-6 inset-x-0 z-50 px-4"
      >
        <div className="glass-panel mx-auto w-[95%] max-w-6xl rounded-2xl px-4 sm:px-6 py-4 flex items-center justify-between shadow-elegant overflow-hidden relative">
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger menu toggle (Visible only on mobile/tablet) */}
            <button
              className="lg:hidden p-2 rounded-lg text-white/90 hover:text-white transition-colors focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              type="button"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span
                  className="block h-[2px] w-full bg-current rounded-full transition-all duration-300 ease-in-out origin-center"
                  style={isOpen ? { transform: 'translateY(7px) rotate(45deg)' } : {}}
                />
                <span
                  className="block h-[2px] w-full bg-current rounded-full transition-all duration-300 ease-in-out"
                  style={isOpen ? { opacity: 0, transform: 'scaleX(0)' } : {}}
                />
                <span
                  className="block h-[2px] w-full bg-current rounded-full transition-all duration-300 ease-in-out origin-center"
                  style={isOpen ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}}
                />
              </div>
            </button>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            >
              <span
                className="text-2xl font-bold gradient-text tracking-tight"
                style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, letterSpacing: '-0.02em' }}
              >
                NeoSparkX
              </span>
            </motion.div>
          </div>

          {/* Desktop links (Hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {["home", "services"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground smooth-transition relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground group-hover:w-full smooth-transition" />
              </button>
            ))}
            <button
              onClick={navigateToWorks}
              className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground smooth-transition relative group"
            >
              works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground group-hover:w-full smooth-transition" />
            </button>
            <button
              onClick={navigateToProducts}
              className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground smooth-transition relative group"
            >
              products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground group-hover:w-full smooth-transition" />
            </button>
          </div>

          {/* Right Action buttons (Visible on all devices!) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                className="w-10 h-10 sm:w-auto sm:h-9 p-0 sm:px-3 gap-2 relative overflow-hidden group border border-border/40 hover:border-foreground/60 smooth-transition rounded-xl"
                onClick={() => window.location.href = "tel:+8801788992953"}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center justify-center"
                >
                  <Phone className="w-4 h-4" />
                </motion.div>
                <span className="hidden sm:inline relative z-10">Book a Call</span>
              </Button>
            </motion.div>
            <Button
              className="w-10 h-10 sm:w-auto sm:h-9 p-0 sm:px-3 gap-2 bg-white text-background hover:bg-white/90 animate-glow-pulse rounded-xl flex items-center justify-center"
              onClick={() => scrollToSection("connect")}
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Let's Connect</span>
            </Button>
          </div>
        </div>
      </motion.nav>
    </>
  );
};
