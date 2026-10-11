import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Pillars", href: "/#services" },
    { name: "Our Works", href: "/works" },
    { name: "Products", href: "/products" },
    { name: "About Startup", href: "/#about" },
    { name: "Contact", href: "/#connect" },
  ];

  const socialLinks = [
    { name: "LinkedIn Company", href: "https://www.linkedin.com/company/neosparkx/" },
    { name: "Instagram", href: "https://www.instagram.com/neosparkx.agency/" },
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61584209024278" },
    { name: "Behance", href: "https://www.behance.net/neosparkx" },
  ];

  return (
    <footer className="footer-section">
      {/* Top divider line */}
      <div className="footer-divider" />

      {/* Main content area */}
      <div className="footer-content">
        {/* Left column — Company Verification & Contact info */}
        <div className="footer-contact">
          {/* Startup Verification Signals for Reviewers */}
          <div className="mb-6 space-y-2">
            <p className="text-xs font-semibold text-white/80 tracking-wide">
              Founded 2025 • Rangpur, Bangladesh
            </p>
            <p className="text-xs text-white/50 leading-relaxed max-w-sm">
              NeoSparkX Technologies Registered Product Startup Building Autonomous Software Architectures and Consumer Utilities.
            </p>
            <div className="pt-2">
              <a
                href="https://www.linkedin.com/company/neosparkx/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.05] border border-white/15 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/30 text-xs font-medium transition-all group"
              >
                <svg className="w-3.5 h-3.5 fill-current opacity-80 group-hover:opacity-100" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn Company Profile</span>
                <span className="text-[10px] text-white/40 group-hover:translate-x-0.5 transition-transform">↗</span>
              </a>
            </div>
          </div>

          <div className="footer-contact-row">
            <span className="footer-label">| CALL US |</span>
            <a href="tel:+8801788992953" className="footer-phone">
              +8801788992953
            </a>
          </div>
          <div className="footer-contact-row">
            <span className="footer-label">| MAIL US |</span>
            <a href="mailto:hello@neosparkx.com" className="footer-email">
              hello@neosparkx.com
            </a>
          </div>
        </div>

        {/* Right column — Navigation + Social */}
        <div className="footer-links-area">
          <div className="footer-link-column">
            <span className="footer-column-label">| NAVIGATION |</span>
            <ul className="footer-link-list">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                    <Link to={link.href} className="footer-link">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-link-column">
            <span className="footer-column-label">| FOLLOW US |</span>
            <ul className="footer-link-list">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright row */}
      <div className="footer-copyright">
        <span className="footer-copyright-text">
          @ {currentYear} NeoSparkX Technologies • Founded 2025, Rangpur, Bangladesh. All rights reserved.
        </span>
        <span className="footer-copyright-dot"> . </span>
        <Link to="/privacy" className="footer-copyright-bold">
          Privacy Policy
        </Link>
        <span className="footer-copyright-dot"> . </span>
        <Link to="/privacy" className="footer-copyright-bold">
          Terms of Service
        </Link>
      </div>

      {/* Background watermark text */}
      <div className="footer-watermark" aria-hidden="true">
        NeoSparkX
      </div>

      {/* Center logo image */}
      <div className="footer-logo-container" aria-hidden="true">
        <img src={logo} alt="NeoSparkX Logo" className="footer-logo-image" />
      </div>
    </footer>
  );
};
