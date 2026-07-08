import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Shield, 
  Database, 
  Lock, 
  FileSpreadsheet, 
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

export const ExpenseTrackerPrivacy = () => {
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
      id: "offline-storage",
      title: "1. 100% Offline & Device-Bound Storage",
      icon: Database,
      desc: "The App is designed as an offline-first utility to guarantee absolute data privacy.",
      bullets: [
        {
          label: "No Internet Data Transmission",
          text: "The App does not collect, store, transmit, or share any personal, financial, or transaction data over the internet."
        },
        {
          label: "Local SQLite Database",
          text: "All transaction entries, account names, debt balances, and categories are saved strictly on your local device storage inside a secured sandbox database (Room/SQLite)."
        },
        {
          label: "Zero Remote Server Collection",
          text: "We do not maintain any cloud databases or external logging servers. Your financial information never leaves your device."
        }
      ]
    },
    {
      id: "permissions",
      title: "2. Permissions We Request and Why",
      icon: Lock,
      desc: "To function correctly, the App requests specific hardware permissions. Here is why we need them:",
      bullets: [
        {
          label: "Biometric Sensors (USE_BIOMETRIC)",
          text: "Used exclusively to secure and lock/unlock the App locally using your fingerprint or face recognition, protecting your logs from unauthorized local physical access. No biometric data is ever read or stored by the App."
        },
        {
          label: "Notifications (POST_NOTIFICATIONS / RECEIVE_BOOT_COMPLETED)",
          text: "Used to schedule daily inexact reminders to log your expenses."
        }
      ]
    },
    {
      id: "data-portability",
      title: "3. Data Portability (Excel/PDF Exports)",
      icon: FileSpreadsheet,
      desc: "The App includes local document compilation capabilities (Excel import/export using Apache POI, and PDF report creation using Android's native graphics library).",
      bullets: [
        {
          label: "Local Compilation Only",
          text: "These exports are generated locally on your device."
        },
        {
          label: "Scoped Access API",
          text: "When importing or exporting files, the App uses Android's System File Picker (GetContent and CreateDocument APIs) to read/write specific files. The App does not request broad storage permissions."
        }
      ]
    },
    {
      id: "children-privacy",
      title: "4. Children's Privacy",
      icon: UserCheck,
      desc: "Since we do not collect any personal data, we do not knowingly or unknowingly collect or process any data from children."
    },
    {
      id: "changes",
      title: "5. Changes to This Privacy Policy",
      icon: RefreshCw,
      desc: "We may update this Privacy Policy from time to time. Any changes will be posted on this page and updated in the App's Play Store description."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <SEO 
        title="Expense Tracker Privacy Policy" 
        description="Read the privacy policy and data practices for the Expense Tracker offline-first mobile app."
        keywords="expense tracker, privacy policy, offline finance, data security, NeoSparkX"
      />
      <ScrollToTop />

      {/* Animated background glow */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      </div>

      {/* Scroll progress indicator (Sky Blue accent) */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-border/40 z-50 overflow-hidden">
        <div
          className="h-full bg-[#0EA5E9] transition-all duration-100 ease-out shadow-[0_0_8px_rgba(14,165,233,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[45vh] flex items-center justify-center px-6 overflow-hidden pt-32">
        {/* Soft background glow matching expense tracker sky blue */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0EA5E9]/10 rounded-full blur-[100px] animate-pulse" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button 
              onClick={() => navigate("/products/expense-tracker")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-white/60 hover:text-white transition-all text-xs font-semibold uppercase tracking-wider mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Expense Tracker
            </button>

            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white border border-white/10 flex items-center justify-center p-3 shadow-lg shadow-[#0EA5E9]/5">
                <img src="/product-logos/expense tracker.png" alt="Expense Tracker logo" className="w-full h-full object-contain" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Expense Tracker
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-[#0EA5E9] mb-6 tracking-wide">
              Privacy Policy
            </h2>

            <p className="text-sm md:text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-4">
              NeoSparkx (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the <strong className="text-white">Expense Tracker</strong> mobile application (the &ldquo;App&rdquo;). We are committed to protecting and respecting your privacy.
            </p>
            <p className="text-xs text-white/40">
              Effective Date: July 8, 2026
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
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(14, 165, 233, 0.1)' }}>
                    <Icon className="w-6 h-6 text-[#0EA5E9]" />
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
                            <CheckCircle2 className="w-4 h-4 text-[#0EA5E9] shrink-0 mt-0.5" />
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
            className="glass-panel p-8 rounded-2xl border border-white/8 bg-gradient-to-br from-white/3 to-[#0EA5E9]/5 text-center space-y-6"
          >
            <div className="w-12 h-12 rounded-full bg-[#0EA5E9]/10 flex items-center justify-center mx-auto">
              <Shield className="w-6 h-6 text-[#0EA5E9]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">6. Contact Us</h3>
              <p className="text-sm text-white/60 max-w-md mx-auto">
                If you have any questions about this Privacy Policy or our local offline data practices, reach out to us directly.
              </p>
            </div>
            
            <div className="pt-2 flex flex-col items-center justify-center gap-3">
              <div className="text-xs text-white/40">
                Developer: <span className="text-white font-medium">NeoSparkx</span>
              </div>
              <Button
                size="lg"
                className="gap-2 bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white font-semibold shadow-lg shadow-[#0EA5E9]/10 px-6"
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

export default ExpenseTrackerPrivacy;
