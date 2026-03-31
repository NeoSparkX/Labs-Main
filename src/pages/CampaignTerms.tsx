import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const CampaignTerms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-36 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/campaign"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground smooth-transition text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Campaign
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Campaign Terms & Conditions
            </h1>
            <p className="text-muted-foreground text-lg mb-12">
              Spark10 Free Client Campaign — NeoSparkX
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose prose-invert prose-lg max-w-none space-y-8"
          >
            <div className="glass-panel rounded-2xl p-8 space-y-8">
              <section>
                <h2 className="text-xl font-bold mb-3">1. Campaign Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The "Spark10" campaign is an initiative by NeoSparkX to select up to 10 businesses
                  and provide them with a fully designed and developed website at zero cost.
                  The campaign is designed to build our portfolio with real-world projects while
                  providing genuine value to early-stage or growing businesses.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">2. Eligibility</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1">•</span>
                    Open to any legitimate business, startup, or personal brand.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1">•</span>
                    Applicants must provide accurate and truthful information.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1">•</span>
                    NeoSparkX reserves the right to accept or reject any application at its sole discretion.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">3. What's Included</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1">•</span>
                    Custom UI/UX design tailored to your brand and industry.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1">•</span>
                    Full frontend development with responsive, mobile-first design.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1">•</span>
                    SEO foundation with proper meta tags and semantic HTML.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1">•</span>
                    One round of revisions included post-delivery.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1">•</span>
                    Source code delivered upon completion.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">4. What's Not Included</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1">•</span>
                    Domain name registration and hosting setup (we can recommend services).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1">•</span>
                    Content writing or copywriting (you provide your content).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1">•</span>
                    Ongoing maintenance or updates beyond the initial delivery.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1">•</span>
                    Backend development, databases, or server-side logic (unless specified).
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">5. Portfolio Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accepting the free service, you agree that NeoSparkX may showcase the
                  completed project in our portfolio, case studies, social media, and marketing
                  materials. This includes screenshots, descriptions, and anonymized performance
                  metrics.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">6. Ownership</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You retain full ownership of your website, content, and domain upon project
                  completion. NeoSparkX retains the right to display the work in our portfolio
                  but does not claim ownership of your business assets.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">7. Testimonial</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Upon delivery, we may request a short written testimonial about your experience
                  working with NeoSparkX. This is optional but greatly appreciated and helps us
                  grow our credibility.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">8. Timeline</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Projects are typically delivered within 1–4 weeks of acceptance, depending on
                  complexity and your responsiveness during the feedback process. Delays caused
                  by the client (e.g., late content, unresponsive communication) may extend the
                  timeline.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">9. Revisions</h2>
                <p className="text-muted-foreground leading-relaxed">
                  One round of revisions is included in the free campaign. Additional revision
                  rounds or feature additions beyond the original scope are available at
                  NeoSparkX's standard rates, which will be communicated in advance.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">10. Cancellation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may cancel the project at any time before final delivery.
                  If the client cancels after work has begun, NeoSparkX reserves the right
                  to use any completed work in our portfolio. If NeoSparkX cancels, no
                  obligation falls on the client.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">11. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  NeoSparkX provides the campaign services "as is" and makes no warranties,
                  express or implied, regarding the services. NeoSparkX shall not be liable
                  for any indirect, incidental, or consequential damages arising from the
                  use of the delivered website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">12. Modifications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  NeoSparkX reserves the right to modify these terms at any time. Applicants
                  will be notified of any changes before their project begins.
                </p>
              </section>
            </div>

            <div className="glass-panel rounded-2xl p-8 space-y-8 mt-8 border-red-500/20 bg-red-500/5">
              <section>
                <h2 className="text-xl font-bold mb-3 text-red-500">13. Conditions of Validity</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    You must bring at least 2 potential real clients within 3 months from your agreement.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    You must provide good reviews on platforms (Facebook page, Fiverr, Facebook groups, etc.).
                  </li>
                </ul>
                <p className="mt-4 font-semibold text-red-400">
                  If you fail to meet any of these conditions, this contract will no longer be valid.
                </p>
              </section>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground">
                Last updated: March 2026 • Questions? Contact us at{" "}
                <a href="mailto:hello@neosparkx.com" className="text-foreground hover:underline">
                  hello@neosparkx.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CampaignTerms;
