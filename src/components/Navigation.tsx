import { motion } from "framer-motion";
import { Phone, Mail, Menu } from "lucide-react";
import logo from "@/assets/logo.png";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState } from "react";
import StaggeredMenu from "@/components/ui/StaggeredMenu";
import BorderGlow from "@/components/ui/BorderGlow";

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
          { label: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61584209024278' },
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

            <Link
              to="/"
              className="flex items-center gap-2 group"
              aria-label="NeoSparkX Home"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <span
                  className="text-2xl font-bold gradient-text tracking-tight"
                  style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, letterSpacing: '-0.02em' }}
                >
                  NeoSparkX
                </span>
              </motion.div>
            </Link>
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
            <Link
              to="/works"
              className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground smooth-transition relative group"
            >
              works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground group-hover:w-full smooth-transition" />
            </Link>
            <Link
              to="/products"
              className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground smooth-transition relative group"
            >
              products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground group-hover:w-full smooth-transition" />
            </Link>
          </div>

          {/* Right Action buttons (Visible on all devices!) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct WhatsApp DM Button */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative"
            >
              <BorderGlow
                edgeSensitivity={30}
                glowColor="142 70% 50%"
                backgroundColor="#0d0f12"
                borderRadius={12}
                glowRadius={18}
                glowIntensity={1.2}
                coneSpread={25}
                animated={true}
                colors={['#25D366', '#10b981', '#064e3b']}
              >
                <a
                  href="https://wa.me/8801788992953"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 sm:px-4 sm:py-2.5 font-semibold text-sm text-white hover:text-white transition-all bg-white/5 hover:bg-emerald-500/10 backdrop-blur-md rounded-xl"
                  aria-label="Direct WhatsApp DM"
                >
                  <svg
                    className="w-4 h-4 text-[#25D366] shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.188 8.188 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.182 8.182 0 0 1 2.41 5.83c.01 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43s-.56-1.36-.77-1.86c-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.13.17 1.74 2.66 4.21 3.73.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z" />
                  </svg>
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
              </BorderGlow>
            </motion.div>

            {/* Book a Call Button */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative"
            >
              <BorderGlow
                edgeSensitivity={30}
                glowColor="220 15% 90%"
                backgroundColor="#0d0f12"
                borderRadius={12}
                glowRadius={18}
                glowIntensity={1.2}
                coneSpread={25}
                animated={true}
                colors={['#ffffff', '#94a3b8', '#1e293b']}
              >
                <button
                  className="flex items-center justify-center gap-2 p-2.5 sm:px-5 sm:py-2.5 font-semibold text-sm text-white hover:text-white transition-all bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-xl"
                  onClick={() => window.location.href = "tel:+8801788992953"}
                >
                  <Phone className="w-4 h-4 text-white/80 shrink-0" />
                  <span className="hidden sm:inline">Book a Call</span>
                </button>
              </BorderGlow>
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};
