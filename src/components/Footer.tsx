import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Services", href: "/#services" },
    { name: "Works", href: "/works" },
    { name: "About Us", href: "/#about" },
    { name: "Contact Us", href: "/#connect" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/neosparkx/" },
    { name: "Instagram", href: "https://www.instagram.com/neosparkx.agency/" },
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61584209024278" },
    { name: "Behance", href: "https://www.behance.net/neosparkx" },
    { name: "Fiverr", href: "https://www.fiverr.com/neosparkx/" },
  ];

  return (
    <footer className="footer-section">
      {/* Top divider line */}
      <div className="footer-divider" />

      {/* Main content area */}
      <div className="footer-content">
        {/* Left column — Contact info */}
        <div className="footer-contact">
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
          @ {currentYear} NeoSparkX All rights reserved
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
        <img src={logo} alt="" className="footer-logo-image" />
      </div>
    </footer>
  );
};
