import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Shield,
  ShoppingBag,
  Lock,
  Share2,
  Database,
  Trash2,
  UserCheck,
  RefreshCw,
  Mail,
  CheckCircle2
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

export const MudiLagbePrivacy = () => {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    {
      id: "data-collection",
      title: "1. Information We Collect and Process",
      icon: ShoppingBag,
      desc: "Mudi Lagbe (com.mudilagbe.customer) is a single-vendor grocery and e-commerce customer application. We collect only the information needed to fulfill orders, manage your account, and provide delivery services.",
      bullets: [
        {
          label: "Account & Authentication Information",
          text: "When you register or sign in, we collect your name, phone number, email address, and OTP verification codes. You may also sign in using Google Sign-In, Facebook Login, or Sign in with Apple."
        },
        {
          label: "Orders, Delivery Addresses & Wallet",
          text: "We process your delivery addresses, cart items, order history, loyalty points, referral codes, and in-app wallet balances to fulfill purchases and calculate delivery charges."
        },
        {
          label: "Prescriptions & Support Chat Attachments",
          text: "If you upload a prescription or send images/files through our in-app customer support chat, those files are transmitted securely to process your order or support request."
        }
      ]
    },
    {
      id: "permissions",
      title: "2. Device Permissions We Request",
      icon: Lock,
      desc: "Mudi Lagbe requests specific Android and iOS permissions only when needed for core shopping and delivery features:",
      bullets: [
        {
          label: "Location (ACCESS_FINE_LOCATION, ACCESS_COARSE_LOCATION, Location When In Use)",
          text: "Used while you are actively using the app to check store delivery coverage, pinpoint your delivery address on Google Maps, and power address autocomplete."
        },
        {
          label: "Microphone (RECORD_AUDIO, NSMicrophoneUsageDescription)",
          text: "Used exclusively when you initiate voice search to convert spoken product queries into text. Audio is never recorded or monitored in the background."
        },
        {
          label: "System Photo & File Picker",
          text: "Used when you voluntarily select an image or document for your profile photo, prescription upload, or support chat. Broad Android media permissions (READ_MEDIA_IMAGES, READ_MEDIA_VIDEO, READ_MEDIA_AUDIO) are explicitly removed."
        },
        {
          label: "Push Notifications (Remote Notifications)",
          text: "Used to deliver real-time order confirmations, dispatch updates, delivery alerts, and promotional notifications."
        }
      ]
    },
    {
      id: "third-party",
      title: "3. Third-Party Services & SDKs",
      icon: Share2,
      desc: "To provide maps, authentication, notifications, and app stability, Mudi Lagbe integrates trusted third-party services:",
      bullets: [
        {
          label: "Google Maps & Geocoding",
          text: "Used to display interactive delivery maps, resolve coordinates to street addresses, and provide place autocomplete."
        },
        {
          label: "Firebase (Cloud Messaging, Analytics & Crashlytics)",
          text: "Used to deliver push notifications, measure aggregate app usage, and collect crash diagnostics so we can fix bugs and improve reliability."
        },
        {
          label: "Social Login & Payment Gateways",
          text: "If you use Google, Facebook, or Apple Sign-In, authentication is handled via their respective SDKs. Online payments are processed inside secure WebView payment gateways; Mudi Lagbe does not store raw payment card numbers on your device."
        }
      ]
    },
    {
      id: "security",
      title: "4. Data Storage & Security",
      icon: Database,
      desc: "We apply industry-standard safeguards to protect your account and order data both on your device and in transit.",
      bullets: [
        {
          label: "Encrypted Local Storage",
          text: "Authentication tokens and sensitive session credentials are stored in encrypted device storage (Flutter Secure Storage), while non-sensitive preferences such as language and cart state are cached locally."
        },
        {
          label: "Encrypted Network Transit",
          text: "All communication between the mobile app and our backend (https://mudilagbe.com) is encrypted using HTTPS/TLS."
        }
      ]
    },
    {
      id: "retention-deletion",
      title: "5. Data Retention & Account Deletion",
      icon: Trash2,
      desc: "You remain in control of your personal information and can request account deletion at any time.",
      bullets: [
        {
          label: "In-App Account Deletion",
          text: "You can permanently delete your Mudi Lagbe account directly from the Profile/Account settings inside the app, which removes your personal profile and authentication access."
        },
        {
          label: "Support Requests",
          text: "You may also request data access, correction, or deletion by emailing our support team. Certain order or transaction records may be retained only where required by tax or legal obligations."
        }
      ]
    },
    {
      id: "children-privacy",
      title: "6. Children's Privacy",
      icon: UserCheck,
      desc: "Mudi Lagbe is a general-audience e-commerce and grocery delivery application and is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13."
    },
    {
      id: "changes",
      title: "7. Changes to This Privacy Policy",
      icon: RefreshCw,
      desc: "We may update this Privacy Policy periodically as new features, payment methods, or OS requirements are introduced. Any revisions will be posted on this page with an updated effective date."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <SEO
        title="Mudi Lagbe Privacy Policy"
        description="Read the privacy policy, device permissions, third-party SDK disclosures, and data security practices for the Mudi Lagbe customer mobile application."
        keywords="Mudi Lagbe, mudilagbe, privacy policy, grocery delivery app, e-commerce privacy, Android permissions, NeoSparkX"
      />
      <ScrollToTop />

      {/* Animated background glow */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      </div>

      {/* Scroll progress indicator (Emerald accent matching Mudi Lagbe) */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-border/40 z-50 overflow-hidden">
        <div
          className="h-full bg-[#10B981] transition-all duration-100 ease-out shadow-[0_0_8px_rgba(16,185,129,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[45vh] flex items-center justify-center px-6 overflow-hidden pt-32">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#10B981]/10 rounded-full blur-[100px] animate-pulse" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => navigate("/privacy")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-white/60 hover:text-white transition-all text-xs font-semibold uppercase tracking-wider mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Privacy Hub
            </button>

            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white border border-white/10 flex items-center justify-center p-2.5 shadow-lg shadow-[#10B981]/10">
                <img src="/product-logos/mudilagbe.png" alt="Mudi Lagbe logo" className="w-full h-full object-contain" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-3 tracking-tight">
              Mudi Lagbe
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-[#34D399] mb-6 tracking-wide">
              Privacy Policy
            </h2>

            <p className="text-sm md:text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-4">
              NeoSparkX (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) built and maintains the <strong className="text-white">Mudi Lagbe</strong> mobile application (<code className="text-xs text-white/70">com.mudilagbe.customer</code>) for <strong className="text-white">mudilagbe.com</strong>. This Privacy Policy explains how your information is collected, used, and protected when you shop and place orders using the App.
            </p>
            <p className="text-xs text-white/40">
              Effective Date: November 20, 2026 &bull; App Version 4.2.0
            </p>
          </motion.div>

          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-12 pb-24">
        <div className="space-y-8">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-panel p-6 md:p-8 rounded-2xl border border-white/8 hover:border-white/12 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(16, 185, 129, 0.1)" }}>
                    <Icon className="w-6 h-6 text-[#34D399]" />
                  </div>
                  <div className="space-y-4 w-full">
                    <h3 className="text-xl font-semibold text-white tracking-tight pt-1">
                      {section.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {section.desc}
                    </p>

                    {section.bullets && (
                      <ul className="space-y-3 pt-2">
                        {section.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3 text-xs leading-relaxed text-white/50 bg-white/3 border border-white/5 p-4 rounded-xl">
                            <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-white block mb-0.5">{bullet.label}</strong>
                              {bullet.text}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-2xl border border-white/8 bg-gradient-to-br from-white/3 to-[#10B981]/5 text-center space-y-6"
          >
            <div className="w-12 h-12 rounded-full bg-[#10B981]/10 flex items-center justify-center mx-auto">
              <Shield className="w-6 h-6 text-[#34D399]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">8. Contact Us</h3>
              <p className="text-sm text-white/60 max-w-md mx-auto">
                If you have questions about this Privacy Policy, your orders, or account data deletion, contact the NeoSparkX team.
              </p>
            </div>

            <div className="pt-2 flex flex-col items-center justify-center gap-3">
              <div className="text-xs text-white/40">
                Developer: <span className="text-white font-medium">NeoSparkX</span> &bull; Storefront: <span className="text-white font-medium">mudilagbe.com</span>
              </div>
              <Button
                size="lg"
                className="gap-2 bg-[#10B981] hover:bg-[#10B981]/90 text-white font-semibold shadow-lg shadow-[#10B981]/10 px-6"
                onClick={() => window.location.href = "mailto:support@neosparkx.com"}
              >
                <Mail className="w-4 h-4" />
                support@neosparkx.com
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MudiLagbePrivacy;
