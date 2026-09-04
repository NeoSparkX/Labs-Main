import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Shield, 
  Database, 
  Lock, 
  Globe, 
  HeartHandshake, 
  Activity, 
  Share2, 
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

export const PreventionPrivacy = () => {
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
      id: "sobriety-data",
      title: "1. Sensitive Accountability & Sobriety Data",
      icon: HeartHandshake,
      desc: "Prevention is designed to support individuals in overcoming pornography addiction through spiritual grounding, mindful friction, and technical safeguards.",
      bullets: [
        {
          label: "Daily Check-Ins & Streaks",
          text: "The App records daily check-in confirmations, streak counts, and optional mood assessments to help you track personal progress over time."
        },
        {
          label: "Trigger Analysis & Reflection Notes",
          text: "During voluntary relapse assessments, you may log relapse triggers (such as Stress, Boredom, or Social Media) and personal reflection notes. This data is collected purely to assist your self-awareness and recovery journey."
        },
        {
          label: "Account Information",
          text: "We record your email address and authentication credentials via Supabase Authentication to protect your account and sync your streak history across your own devices."
        }
      ]
    },
    {
      id: "rls-confidentiality",
      title: "2. Absolute Confidentiality & Row Level Security (RLS)",
      icon: Database,
      desc: "We understand the deeply personal and vulnerable nature of addiction recovery. Your privacy is paramount.",
      bullets: [
        {
          label: "PostgreSQL Row Level Security (RLS)",
          text: "All streak logs, reflection entries, and check-in records are protected by database-level Row Level Security policies. Only your verified authentication token can access or query your data records."
        },
        {
          label: "No Public Feeds or Confessions",
          text: "Prevention does not operate public confession boards, social feeds, or shared recovery forums. Your struggles and notes are strictly private to you."
        },
        {
          label: "No Internal Profiling",
          text: "NeoSparkX personnel do not inspect, read, or evaluate your personal reflection entries or trigger logs."
        }
      ]
    },
    {
      id: "vpn-service",
      title: "3. DNS VPN Content Filtering Disclosures",
      icon: Globe,
      desc: "Prevention utilizes Android's VpnService API (BlockerVpnService) to protect users from explicit web content.",
      bullets: [
        {
          label: "Local Split-Tunneling DNS",
          text: "The VPN functions locally on your device by intercepting DNS domain queries and resolving them through Cloudflare Family DNS (1.1.1.3 and 1.0.0.3), which actively blocks adult domains at the network level."
        },
        {
          label: "No Full Traffic Proxying",
          text: "The App does NOT route your general internet traffic, downloads, emails, or personal communications through any remote proxy server owned by NeoSparkX."
        },
        {
          label: "Zero Browsing Logs",
          text: "We do not record, inspect, capture, store, or sell your web browsing history, URLs visited, search queries, or DNS lookups."
        },
        {
          label: "No TLS/HTTPS Decryption",
          text: "The local VPN service does not install custom root certificates or decrypt your secure HTTPS encrypted traffic."
        }
      ]
    },
    {
      id: "permissions",
      title: "4. Android Permissions We Request",
      icon: Lock,
      desc: "To provide robust protection and tamper-resistant accountability, Prevention requests the following Android permissions:",
      bullets: [
        {
          label: "VPN Service (BIND_VPN_SERVICE)",
          text: "Required by Android to initiate the local DNS filter to shield you from explicit web content."
        },
        {
          label: "Foreground Service (FOREGROUND_SERVICE, FOREGROUND_SERVICE_SPECIAL_USE)",
          text: "Allows the DNS filter to run continuously in the background without being unexpectedly terminated by OS memory management."
        },
        {
          label: "Exact Alarms & Notifications (SCHEDULE_EXACT_ALARM, POST_NOTIFICATIONS)",
          text: "Enables exact daily check-in reminders and motivational reminders to keep your streak active."
        },
        {
          label: "Boot Completed (RECEIVE_BOOT_COMPLETED)",
          text: "Automatically restores your protection filter and schedules check-in alarms when your phone restarts."
        },
        {
          label: "Task Management (REORDER_TASKS)",
          text: "Used exclusively during Panic Mode to facilitate screen pinning (startLockTask), providing a 4-minute mindful reflection period to interrupt impulsive behavior."
        }
      ]
    },
    {
      id: "anti-tamper",
      title: "5. Device Integrity & Tamper Prevention",
      icon: Activity,
      desc: "To ensure that sobriety streaks reflect genuine discipline, the App incorporates client-side and server-side integrity protections.",
      bullets: [
        {
          label: "Device Fingerprint Hashing",
          text: "An anonymous hardware identifier hash is used during offline sync to prevent multi-device check-in spoofing and duplicate log generation."
        },
        {
          label: "NTP & Server-Time Validation",
          text: "Check-in timestamps are verified against real-time server clocks (via Supabase RPC) to prevent manual device clock manipulation."
        },
        {
          label: "Root & Emulator Detection",
          text: "Detects rooted environments or emulators solely to warn users against bypassing DNS filters."
        }
      ]
    },
    {
      id: "sharing-selling",
      title: "6. Zero Data Monetization & No Advertisements",
      icon: Share2,
      desc: "We stand firmly against the commercialization of sensitive health and recovery data.",
      bullets: [
        {
          label: "No Sale of Personal Information",
          text: "We will never sell, rent, monetize, or disclose your sobriety status or journal entries to data brokers, advertisers, or third parties."
        },
        {
          label: "Zero Advertising SDKs",
          text: "Prevention is completely free of advertising SDKs, tracking pixels, and invasive marketing analytical libraries."
        }
      ]
    },
    {
      id: "retention-deletion",
      title: "7. Data Retention & Full Account Deletion",
      icon: Trash2,
      desc: "You retain full control over your recovery history and personal data.",
      bullets: [
        {
          label: "Complete Account Deletion",
          text: "You can request permanent deletion of your account, all check-in streaks, reflection logs, and database records at any time by emailing privacy@neosparkx.com or support@neosparkx.com."
        },
        {
          label: "Local Cache Clearing",
          text: "Uninstalling the App or clearing app data immediately wipes all local tokens, cached verses, and temporary state from your physical device."
        }
      ]
    },
    {
      id: "children-privacy",
      title: "8. Children's Privacy",
      icon: UserCheck,
      desc: "Prevention is intended for individuals striving for personal discipline and spiritual purity. We do not knowingly collect personal information from individuals under the age of 13. If you become aware that a child has created an account without parental consent, please contact us."
    },
    {
      id: "changes",
      title: "9. Changes to This Privacy Policy",
      icon: RefreshCw,
      desc: "We may update this Privacy Policy periodically to reflect app updates, new security safeguards, or regulatory requirements. Continued use of the App signifies acceptance of the updated policy."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <SEO 
        title="Prevention Privacy Policy" 
        description="Read the privacy policy, confidential streak protection, and DNS VPN data practices for the Prevention mobile application."
        keywords="Prevention, privacy policy, Islamic accountability, DNS VPN filtering, sobriety tracker, data privacy, NeoSparkX"
      />
      <ScrollToTop />

      {/* Animated background glow */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      </div>

      {/* Scroll progress indicator (Calming Blue accent matching Prevention) */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-border/40 z-50 overflow-hidden">
        <div
          className="h-full bg-[#3B82F6] transition-all duration-100 ease-out shadow-[0_0_8px_rgba(59,130,246,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[45vh] flex items-center justify-center px-6 overflow-hidden pt-32">
        {/* Soft background glow matching Prevention blue */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#3B82F6]/10 rounded-full blur-[100px] animate-pulse" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button 
              onClick={() => navigate("/products/prevention")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-white/60 hover:text-white transition-all text-xs font-semibold uppercase tracking-wider mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Prevention
            </button>

            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white border border-white/10 flex items-center justify-center p-3 shadow-lg shadow-[#3B82F6]/10">
                <img src="/product-logos/prevention.png" alt="Prevention logo" className="w-full h-full object-contain" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Prevention
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-[#60A5FA] mb-6 tracking-wide">
              Privacy Policy
            </h2>

            <p className="text-sm md:text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-4">
              NeoSparkX (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the <strong className="text-white">Prevention</strong> mobile application (the &ldquo;App&rdquo;). We are committed to upholding the highest standard of confidentiality, dignity, and data privacy for every user.
            </p>
            <p className="text-xs text-white/40">
              Effective Date: March 31, 2026 &bull; Version 5.1.0
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
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(59, 130, 246, 0.1)' }}>
                    <Icon className="w-6 h-6 text-[#60A5FA]" />
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
                            <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0 mt-0.5" />
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
            className="glass-panel p-8 rounded-2xl border border-white/8 bg-gradient-to-br from-white/3 to-[#3B82F6]/5 text-center space-y-6"
          >
            <div className="w-12 h-12 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mx-auto">
              <Shield className="w-6 h-6 text-[#60A5FA]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">10. Contact Us</h3>
              <p className="text-sm text-white/60 max-w-md mx-auto">
                If you have questions, concerns, or deletion requests regarding this Privacy Policy and your confidential data, reach out directly.
              </p>
            </div>
            
            <div className="pt-2 flex flex-col items-center justify-center gap-3">
              <div className="text-xs text-white/40">
                Developer: <span className="text-white font-medium">NeoSparkX</span>
              </div>
              <Button
                size="lg"
                className="gap-2 bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white font-semibold shadow-lg shadow-[#3B82F6]/10 px-6"
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

export default PreventionPrivacy;
