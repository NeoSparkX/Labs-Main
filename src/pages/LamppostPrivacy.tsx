import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Shield, 
  Database, 
  Lock, 
  FolderOpen, 
  Cpu, 
  Share2, 
  Boxes, 
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

export const LamppostPrivacy = () => {
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
      id: "data-access",
      title: "1. Information Lamppost Accesses",
      icon: FolderOpen,
      desc: "Lamppost accesses on-device documents and file metadata to enable document discovery and management.",
      bullets: [
        {
          label: "Document Metadata",
          text: "After you grant storage access, Lamppost may read document names, file paths, content URIs, file types, file sizes, and modified dates."
        },
        {
          label: "Local Discovery Scan",
          text: "The app scans your device's local storage for supported files (PDF, Word, Markdown, plain text) to populate and display your on-device document library."
        }
      ]
    },
    {
      id: "data-storage",
      title: "2. Information Lamppost Stores Locally",
      icon: Database,
      desc: "To provide a complete reading experience, Lamppost stores application state directly on your device.",
      bullets: [
        {
          label: "App Preferences & Progress",
          text: "Tracks recently opened documents, current reading/page progress, and scroll positions."
        },
        {
          label: "Reader Content & Collections",
          text: "Stores user-generated bookmarks, bookmark preview text, highlighted texts, highlight colors, and ratings."
        },
        {
          label: "Local Database Storage",
          text: "All application data and library configurations are persisted strictly inside the app's local sandbox database (SQLite/Room DB) on your device."
        }
      ]
    },
    {
      id: "data-usage",
      title: "3. How Lamppost Uses Information",
      icon: Cpu,
      desc: "Locally collected details are utilized strictly to run document-reader features.",
      bullets: [
        {
          label: "Core Rendering & Read-State Restoring",
          text: "To open, parse, and render supported document pages and restore your last active reading positions."
        },
        {
          label: "Library Search & Organization",
          text: "To scan storage for supported documents, list recent files, compile user collections/folders, and enable tag-based searches."
        }
      ]
    },
    {
      id: "sharing-selling",
      title: "4. Sharing and Selling Data",
      icon: Share2,
      desc: "We believe in absolute data ownership. Your documents and app data are yours alone.",
      bullets: [
        {
          label: "Zero Remote Servers & No Selling",
          text: "We do not sell personal data. Lamppost does not upload document contents, reading progress, highlights, or library databases to external servers."
        },
        {
          label: "User-Initiated Sharing Only",
          text: "The application handles document sharing exclusively through Android's native sharing sheet, which is fully triggered and controlled by you."
        }
      ]
    },
    {
      id: "third-party",
      title: "5. Third-Party Services",
      icon: Boxes,
      desc: "Lamppost runs entirely standalone.",
      bullets: [
        {
          label: "Zero Tracking Libraries",
          text: "This version of the app does not contain advertising SDKs, cloud sync features, user tracking accounts, or telemetry reporting integrations."
        }
      ]
    },
    {
      id: "permissions",
      title: "6. Permissions We Request",
      icon: Lock,
      desc: "Lamppost requests access to device storage to perform document scanning.",
      bullets: [
        {
          label: "Storage Scoped & All-Files Permissions",
          text: "To scan and read files locally. On newer Android versions, this may include the 'All Files Access' permission, which is required to scan and present non-media documents (.md, .docx). You can revoke or manage this permission in Android Settings at any time."
        }
      ]
    },
    {
      id: "retention-deletion",
      title: "7. Data Retention and Deletion",
      icon: Trash2,
      desc: "You control your app database.",
      bullets: [
        {
          label: "Clear History & Revoke Access",
          text: "You can clear reading history directly in the app, or clear Lamppost's local app storage and permissions inside your Android System Settings."
        },
        {
          label: "App Uninstall",
          text: "Uninstalling the app removes all stored progress, highlights, ratings, and database entries. Your original documents remain untouched on your device storage."
        }
      ]
    },
    {
      id: "children-privacy",
      title: "8. Children's Privacy",
      icon: UserCheck,
      desc: "Lamppost is intended for general audiences. Because we collect zero data remotely, we do not collect, process, or monitor information from children."
    },
    {
      id: "changes",
      title: "9. Changes to This Privacy Policy",
      icon: RefreshCw,
      desc: "We may update this Privacy Policy when features or OS permissions change. The 'Last Updated' date at the bottom will reflect any updates."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <SEO 
        title="Lamppost Document Reader Privacy Policy" 
        description="Read the privacy policy and local-first data protection practices for the Lamppost document reader Android app."
        keywords="lamppost, privacy policy, local-first reader, android pdf reader, data security, NeoSparkX"
      />
      <ScrollToTop />

      {/* Animated background glow */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      </div>

      {/* Scroll progress indicator (Amber/Yellow accent matching Lamppost) */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-border/40 z-50 overflow-hidden">
        <div
          className="h-full bg-[#F59E0B] transition-all duration-100 ease-out shadow-[0_0_8px_rgba(245,158,11,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[45vh] flex items-center justify-center px-6 overflow-hidden pt-32">
        {/* Soft background glow matching lamppost amber */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F59E0B]/10 rounded-full blur-[100px] animate-pulse" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button 
              onClick={() => navigate("/products/lamppost")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-white/60 hover:text-white transition-all text-xs font-semibold uppercase tracking-wider mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Lamppost
            </button>

            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white border border-white/10 flex items-center justify-center p-3 shadow-lg shadow-[#F59E0B]/5">
                <img src="/product-logos/lamppost.png" alt="Lamppost logo" className="w-full h-full object-contain" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Lamppost
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-[#F59E0B] mb-6 tracking-wide">
              Privacy Policy
            </h2>

            <p className="text-sm md:text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-4">
              NeoSparkX (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the <strong className="text-white">Lamppost</strong> mobile application (the &ldquo;App&rdquo;). We are committed to protecting and respecting your local privacy.
            </p>
            <p className="text-xs text-white/40">
              Last updated: July 17, 2026
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
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(245, 158, 11, 0.1)' }}>
                    <Icon className="w-6 h-6 text-[#F59E0B]" />
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
                            <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
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
            className="glass-panel p-8 rounded-2xl border border-white/8 bg-gradient-to-br from-white/3 to-[#F59E0B]/5 text-center space-y-6"
          >
            <div className="w-12 h-12 rounded-full bg-[#F59E0B]/10 flex items-center justify-center mx-auto">
              <Shield className="w-6 h-6 text-[#F59E0B]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">10. Contact Us</h3>
              <p className="text-sm text-white/60 max-w-md mx-auto">
                If you have any questions about this Privacy Policy or local offline data management on Lamppost, contact the developer.
              </p>
            </div>
            
            <div className="pt-2 flex flex-col items-center justify-center gap-3">
              <div className="text-xs text-white/40">
                Developer: <span className="text-white font-medium">NeoSparkX</span>
              </div>
              <Button
                size="lg"
                className="gap-2 bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-white font-semibold shadow-lg shadow-[#F59E0B]/10 px-6"
                onClick={() => window.location.href = "mailto:hello@neosparkx.com"}
              >
                <Mail className="w-4 h-4" />
                hello@neosparkx.com
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LamppostPrivacy;
