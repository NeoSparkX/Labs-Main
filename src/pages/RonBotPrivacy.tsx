import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Shield, 
  Cpu, 
  Lock, 
  Camera, 
  Bell, 
  Bot, 
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

export const RonBotPrivacy = () => {
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
      title: "1. Information We Access and Process",
      icon: Cpu,
      desc: "Ron Bot Mobile is the companion application engineered to configure, command, and monitor the Ron Bot physical desktop robot.",
      bullets: [
        {
          label: "Account Information",
          text: "When you create an account, we process your email address and authentication credentials via Supabase Authentication. All session tokens are stored securely in encrypted local storage."
        },
        {
          label: "Robot Pairing & Local Telemetry",
          text: "The App communicates over your local network and Bluetooth to receive real-time telemetry from your Ron Bot (temperature, distance, motion sensor readings, and servo status). Telemetry data is displayed live on your dashboard and is not sent to external advertising servers."
        },
        {
          label: "Camera Scanner (QR Pairing Only)",
          text: "The App uses your device camera exclusively for live on-screen QR code scanning to pair your smartphone with your physical Ron Bot unit. Camera frames are analyzed locally in device memory in real time; no images, video streams, or photos are ever recorded, saved, or uploaded."
        }
      ]
    },
    {
      id: "permissions",
      title: "2. Android Permissions We Request",
      icon: Lock,
      desc: "To orchestrate hardware communication and real-time alerts, Ron Bot Mobile requests specific Android system permissions:",
      bullets: [
        {
          label: "Camera (CAMERA)",
          text: "Required solely to scan the pairing QR code displayed on your Ron Bot or documentation. Never used in the background."
        },
        {
          label: "Local Network & Wi-Fi (INTERNET, ACCESS_WIFI_STATE, CHANGE_WIFI_MULTICAST_STATE)",
          text: "Required to establish direct TCP/WebSocket communication with the Ron Bot hardware on your local Wi-Fi subnet and to connect to authenticated backend endpoints."
        },
        {
          label: "Notifications & Alarms (POST_NOTIFICATIONS, RECEIVE_BOOT_COMPLETED, VIBRATE)",
          text: "Enables status alerts, connection loss warnings, and Pomodoro work timer alerts."
        },
        {
          label: "Foreground Service & Wake Lock (FOREGROUND_SERVICE, WAKE_LOCK)",
          text: "Used exclusively when you enable persistent real-time telemetry streaming to prevent Android OS from terminating active robot synchronization."
        }
      ]
    },
    {
      id: "notification-listener",
      title: "3. Notification Listener Service Disclosures",
      icon: Bell,
      desc: "The App includes an optional Notification Listener Service (RonNotificationListenerService) designed to bring your desktop robot to life with physical reactions.",
      bullets: [
        {
          label: "Opt-In Physical Mirroring",
          text: "If you explicitly enable this feature in Android Settings, the service can detect incoming notifications (such as messages or priority alerts) solely to trigger physical animations, audio chimes, or LED patterns on the desk robot."
        },
        {
          label: "Transient In-Memory Evaluation",
          text: "Notification data is processed transiently in volatile memory strictly to generate the command signal for the robot. We never store, log, read sensitive message bodies, or transmit your personal notifications to any remote cloud database."
        },
        {
          label: "Full User Revocation",
          text: "You can revoke Notification Listener access at any time directly through your Android System Settings > Apps > Special App Access > Device & App Notifications."
        }
      ]
    },
    {
      id: "ai-services",
      title: "4. Conversational AI & Cloud Processing",
      icon: Bot,
      desc: "Ron Bot features an interactive AI personality for conversation and task management.",
      bullets: [
        {
          label: "User-Initiated Prompts Only",
          text: "When you interact with the Chat tab, your text prompts are transmitted securely via TLS encryption to configured LLM gateway APIs (such as OpenRouter) to generate the robot's intelligent conversational replies."
        },
        {
          label: "No Ad Monetization or Profiling",
          text: "Your conversations are not used to build behavioral advertising profiles, nor are they sold to third-party data brokers."
        }
      ]
    },
    {
      id: "security-storage",
      title: "5. Security & Encrypted Local Storage",
      icon: Shield,
      desc: "We follow industry-standard security protocols to protect all sensitive keys on your mobile device.",
      bullets: [
        {
          label: "Android Keystore & Secure Storage",
          text: "Auth tokens and pairing secret keys are encrypted using the Android Keystore system via Flutter Secure Storage (AES encryption backed by hardware-backed Keymaster where available)."
        },
        {
          label: "Transport Layer Security (TLS)",
          text: "All remote communications with Supabase and cloud APIs are strictly enforced over HTTPS/TLS 1.3 encryption."
        }
      ]
    },
    {
      id: "sharing-selling",
      title: "6. Zero Selling and Third-Party Data Sharing",
      icon: Share2,
      desc: "NeoSparkX maintains a strict policy regarding your personal hardware and usage data.",
      bullets: [
        {
          label: "No Sale of Personal Data",
          text: "We do not sell, rent, or trade your personal information, sensor logs, or robot telemetry to third parties."
        },
        {
          label: "Zero Third-Party Ad Trackers",
          text: "Ron Bot Mobile contains no advertising SDKs, ad networks, or invasive cross-app user tracking frameworks."
        }
      ]
    },
    {
      id: "retention-deletion",
      title: "7. Data Retention & Account Erasure",
      icon: Trash2,
      desc: "You have complete ownership over your account data and paired devices.",
      bullets: [
        {
          label: "In-App Reset",
          text: "You can clear local robot pairing configs, cached telemetry, and credentials at any time by logging out or clearing app data in Android settings."
        },
        {
          label: "Account Deletion Request",
          text: "To permanently delete your cloud account and all associated profile records, you can submit a deletion request to support@neosparkx.com or utilize the account deletion flow within Settings."
        }
      ]
    },
    {
      id: "children-privacy",
      title: "8. Children's Privacy",
      icon: UserCheck,
      desc: "Ron Bot Mobile is intended for general audiences and technology hobbyists. We do not knowingly collect personal information from children under the age of 13. If you believe a child has provided us with personal information, contact us immediately for deletion."
    },
    {
      id: "changes",
      title: "9. Changes to This Privacy Policy",
      icon: RefreshCw,
      desc: "We may revise this Privacy Policy as new hardware capabilities, firmware versions, or OS requirements are introduced. The effective date at the top of this document will always reflect the latest revision."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <SEO 
        title="Ron Bot Mobile Privacy Policy" 
        description="Read the privacy policy and hardware data security practices for the Ron Bot Mobile companion application."
        keywords="Ron Bot, privacy policy, IoT robot companion, BLE telemetry, robotics security, NeoSparkX"
      />
      <ScrollToTop />

      {/* Animated background glow */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      </div>

      {/* Scroll progress indicator (Indigo/Slate accent matching Ron Bot) */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-border/40 z-50 overflow-hidden">
        <div
          className="h-full bg-[#6366F1] transition-all duration-100 ease-out shadow-[0_0_8px_rgba(99,102,241,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[45vh] flex items-center justify-center px-6 overflow-hidden pt-32">
        {/* Soft background glow matching Ron Bot indigo/slate */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6366F1]/10 rounded-full blur-[100px] animate-pulse" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button 
              onClick={() => navigate("/products/ron-bot")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-white/60 hover:text-white transition-all text-xs font-semibold uppercase tracking-wider mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Ron Bot Mobile
            </button>

            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white border border-white/10 flex items-center justify-center p-3 shadow-lg shadow-[#6366F1]/10">
                <img src="/product-logos/ron bot mobile.png" alt="Ron Bot Mobile logo" className="w-full h-full object-contain" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Ron Bot Mobile
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-[#818CF8] mb-6 tracking-wide">
              Privacy Policy
            </h2>

            <p className="text-sm md:text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-4">
              NeoSparkX (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) provides the <strong className="text-white">Ron Bot Mobile</strong> companion application (the &ldquo;App&rdquo;). We are committed to protecting your privacy and ensuring transparent handling of your device and hardware data.
            </p>
            <p className="text-xs text-white/40">
              Effective Date: August 15, 2026 &bull; Version 2.0
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
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(99, 102, 241, 0.1)' }}>
                    <Icon className="w-6 h-6 text-[#818CF8]" />
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
                            <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0 mt-0.5" />
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
            className="glass-panel p-8 rounded-2xl border border-white/8 bg-gradient-to-br from-white/3 to-[#6366F1]/5 text-center space-y-6"
          >
            <div className="w-12 h-12 rounded-full bg-[#6366F1]/10 flex items-center justify-center mx-auto">
              <Shield className="w-6 h-6 text-[#818CF8]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">10. Contact Us</h3>
              <p className="text-sm text-white/60 max-w-md mx-auto">
                If you have questions regarding this Privacy Policy, your connected devices, or data practices, contact the NeoSparkX team.
              </p>
            </div>
            
            <div className="pt-2 flex flex-col items-center justify-center gap-3">
              <div className="text-xs text-white/40">
                Developer: <span className="text-white font-medium">NeoSparkX</span>
              </div>
              <Button
                size="lg"
                className="gap-2 bg-[#6366F1] hover:bg-[#6366F1]/90 text-white font-semibold shadow-lg shadow-[#6366F1]/10 px-6"
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

export default RonBotPrivacy;
