import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Shield,
  Database,
  Eye,
  Globe,
  Bell,
  Lock,
  Smartphone,
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

export const SocialBlockPrivacy = () => {
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
      id: "on-device-storage",
      title: "1. 100% On-Device & Offline-First Architecture",
      icon: Database,
      desc: "SocialBlock (com.neosparkx.socialblock) is engineered as an offline-first digital wellbeing and distraction-blocking application with zero cloud dependencies.",
      bullets: [
        {
          label: "Zero Telemetry & Zero Ad SDKs",
          text: "SocialBlock contains no analytics trackers, no advertising SDKs, no crash-reporting uploads, and no remote user-tracking servers."
        },
        {
          label: "Local Room Database & DataStore",
          text: "All focus schedules, app blocklists, custom DNS rules, screen-time history, and SHA-256 hashed Parental PINs are stored strictly on your device using Android Room (SQLite) and Jetpack DataStore, with cloud auto-backup disabled (android:allowBackup=\"false\")."
        }
      ]
    },
    {
      id: "accessibility-services",
      title: "2. Accessibility Service Disclosures",
      icon: Eye,
      desc: "SocialBlock uses two optional Android Accessibility Services solely to enforce your chosen digital wellbeing and parental control shields:",
      bullets: [
        {
          label: "AppBlockerService (Whole-App & Schedule Shield)",
          text: "Detects when a blocked social media app is opened during Focus Sessions, Hard-Mode Block Box, Sleep Lock, Wind-Down, or after daily time budgets are reached, and displays a local blocking overlay."
        },
        {
          label: "NativeReelsBlockerService (Short-Form Shield)",
          text: "Detects short-form video UI elements (Reels, Shorts, Spotlight, For You feeds) inside native apps so SocialBlock can automatically exit or redirect away from addictive feeds."
        },
        {
          label: "Strict In-Memory Evaluation",
          text: "Accessibility events are processed transiently in volatile device memory in real time. SocialBlock never reads, logs, records, or transmits keystrokes, passwords, private messages, or screen contents to any external server."
        }
      ]
    },
    {
      id: "local-vpn",
      title: "3. Local DNS Web Blocker VPN (VpnService)",
      icon: Globe,
      desc: "SocialBlock includes an optional on-device VPN service (WebBlockerVpnService) for distraction and parental web filtering.",
      bullets: [
        {
          label: "On-Device DNS Filtering Only",
          text: "The VPN creates a local loopback tunnel on your device to block domains matching your selected category presets or custom blocklists."
        },
        {
          label: "No External VPN Servers",
          text: "Your internet traffic is never routed through any remote SocialBlock proxy or VPN server, and no browsing history or DNS query logs are ever stored or transmitted off-device."
        }
      ]
    },
    {
      id: "notification-listener",
      title: "4. Notification Listener Service",
      icon: Bell,
      desc: "SocialBlock offers an optional Notification Listener Service (NotificationBlockerService) to silence or redirect distracting social notifications during Focus or Sleep sessions.",
      bullets: [
        {
          label: "Transient Local Filtering",
          text: "Incoming notification metadata is checked in memory strictly against your active block rules. Notification text is never saved to disk or sent over the network."
        }
      ]
    },
    {
      id: "permissions",
      title: "5. Android Permissions We Request",
      icon: Lock,
      desc: "Each system permission requested by SocialBlock powers a specific local shield or utility:",
      bullets: [
        {
          label: "App Usage & Installed Apps (PACKAGE_USAGE_STATS, QUERY_ALL_PACKAGES)",
          text: "Used locally via Android UsageStatsManager to generate on-device screen-time analytics (14-day trends, 24-hour heatmaps) and let you select which installed apps to restrict."
        },
        {
          label: "Display Over Other Apps & Device Admin (SYSTEM_ALERT_WINDOW, BIND_DEVICE_ADMIN)",
          text: "Used to render the fullscreen block overlay (BlockedAppActivity) and provide optional Uninstall Protection (UninstallProtectionReceiver) for Hard Mode and Parental Controls."
        },
        {
          label: "Camera & Microphone (CAMERA, RECORD_AUDIO, MODIFY_AUDIO_SETTINGS)",
          text: "Optional permissions used solely when you interact with media features inside SocialBlock's sanitized WebView (such as Snapchat, Instagram Stories, or audio/video calls). Never accessed in the background."
        },
        {
          label: "Alarms, Notifications & Foreground Services (POST_NOTIFICATIONS, SCHEDULE_EXACT_ALARM, USE_EXACT_ALARM, USE_FULL_SCREEN_INTENT, RECEIVE_BOOT_COMPLETED, FOREGROUND_SERVICE_*)",
          text: "Used to trigger Sleep Mode and Focus schedules on time, support YouTube background audio playback (YouTubePlaybackService), and restore active shields after device reboot."
        },
        {
          label: "Biometric Authentication",
          text: "Optional on-device fingerprint or face unlock via AndroidX Biometric to protect settings and parental locks. Biometric credentials remain inside Android's hardware keystore."
        }
      ]
    },
    {
      id: "webviews-updates",
      title: "6. Sanitized WebViews & Play Store Updates",
      icon: Smartphone,
      desc: "SocialBlock's built-in sanitized WebViews and update checker interact only with the services you choose to open:",
      bullets: [
        {
          label: "Sanitized Third-Party Web Apps",
          text: "When you browse platforms like Instagram, YouTube, Facebook, TikTok, Snapchat, X, LinkedIn, or Reddit inside SocialBlock, you connect directly to those platforms under their own privacy policies. SocialBlock injects local scripts only to strip algorithmic feeds, Reels, Shorts, and ads—never to intercept passwords or personal data."
        },
        {
          label: "Google Play In-App Updates",
          text: "SocialBlock uses the official Google Play In-App Updates library to check for newer app versions directly through Google Play Services."
        }
      ]
    },
    {
      id: "children-privacy",
      title: "7. Children's Privacy & Family Controls",
      icon: UserCheck,
      desc: "SocialBlock provides Kid Mode profiles and a local SHA-256 Parental PIN to help families manage screen time. Because SocialBlock operates entirely on-device and collects zero personal data, we do not collect personal information from children or adults."
    },
    {
      id: "changes",
      title: "8. Changes to This Privacy Policy",
      icon: RefreshCw,
      desc: "We may update this Privacy Policy as new shields, Android OS requirements, or features are introduced. Any updates will be published on this page with a revised effective date."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <SEO
        title="SocialBlock Privacy Policy"
        description="Read the privacy policy, Accessibility Service disclosures, local DNS VPN details, and 100% on-device data practices for SocialBlock."
        keywords="SocialBlock, SocialLite, privacy policy, Android AccessibilityService, local VPN, digital wellbeing, parental controls, NeoSparkX"
      />
      <ScrollToTop />

      {/* Animated background glow */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      </div>

      {/* Scroll progress indicator (#8839EF Liquid Glass accent matching SocialBlock) */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-border/40 z-50 overflow-hidden">
        <div
          className="h-full bg-[#8839EF] transition-all duration-100 ease-out shadow-[0_0_8px_rgba(136,57,239,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[45vh] flex items-center justify-center px-6 overflow-hidden pt-32">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8839EF]/10 rounded-full blur-[100px] animate-pulse" />
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
              <div className="w-16 h-16 rounded-2xl bg-white border border-white/10 flex items-center justify-center p-2.5 shadow-lg shadow-[#8839EF]/10">
                <img src="/product-logos/socialblock.webp" alt="SocialBlock logo" className="w-full h-full object-contain rounded-xl" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-3 tracking-tight">
              SocialBlock
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-[#A855F7] mb-4 tracking-wide">
              Privacy Policy
            </h2>

            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#8839EF]/10 border border-[#8839EF]/25 text-[#C084FC] text-xs font-semibold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5 text-[#C084FC]" /> 100% On-Device &bull; Zero Telemetry
              </span>
            </div>

            <p className="text-sm md:text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-4">
              NeoSparkX (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) built <strong className="text-white">SocialBlock</strong> (<code className="text-xs text-white/70">com.neosparkx.socialblock</code>) as an offline-first Android focus shield and distraction blocker. Everything runs locally on your device—your screen-time data, blocklists, and browsing never touch our servers.
            </p>
            <p className="text-xs text-white/40">
              Effective Date: November 20, 2026 &bull; App Version 3.0.1-offline
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
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(136, 57, 239, 0.12)" }}>
                    <Icon className="w-6 h-6 text-[#C084FC]" />
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
                            <CheckCircle2 className="w-4 h-4 text-[#C084FC] shrink-0 mt-0.5" />
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
            className="glass-panel p-8 rounded-2xl border border-white/8 bg-gradient-to-br from-white/3 to-[#8839EF]/5 text-center space-y-6"
          >
            <div className="w-12 h-12 rounded-full bg-[#8839EF]/10 flex items-center justify-center mx-auto">
              <Shield className="w-6 h-6 text-[#C084FC]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">9. Contact Us</h3>
              <p className="text-sm text-white/60 max-w-md mx-auto">
                If you have any questions about this Privacy Policy, Android permissions, or SocialBlock&apos;s on-device architecture, reach out to the NeoSparkX team.
              </p>
            </div>

            <div className="pt-2 flex flex-col items-center justify-center gap-3">
              <div className="text-xs text-white/40">
                Developer: <span className="text-white font-medium">NeoSparkX</span>
              </div>
              <Button
                size="lg"
                className="gap-2 bg-[#8839EF] hover:bg-[#8839EF]/90 text-white font-semibold shadow-lg shadow-[#8839EF]/15 px-6"
                onClick={() => window.location.href = "mailto:abrar@neosparkx.com"}
              >
                <Mail className="w-4 h-4" />
                abrar@neosparkx.com
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SocialBlockPrivacy;
