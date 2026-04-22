import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-24 mb-14">
    <h2 className="font-display text-2xl md:text-3xl font-light mb-5 text-foreground">
      {title}
    </h2>
    <div className="space-y-4 text-foreground/75 leading-relaxed font-light">{children}</div>
  </section>
);

const Privacy = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="Privacy & Legal Notice"
        description="SciSymbio privacy policy and legal notice — how we handle personal data, cookies, and GDPR rights."
        path="/privacy"
      />
      <Navigation />

      <article className="max-w-3xl mx-auto px-6 pt-40 pb-24">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="editorial-rule" />
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              Legal
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-light leading-[1.1] mb-4">
            Privacy &amp; <span className="italic text-accent">legal notice</span>.
          </h1>
          <p className="text-foreground/60 text-sm">
            Last updated: 22 April 2026
          </p>

          <nav className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-foreground/65">
            <a href="#imprint" className="hover:text-accent smooth-transition">Imprint</a>
            <span className="text-foreground/30">·</span>
            <a href="#data-we-collect" className="hover:text-accent smooth-transition">Data we collect</a>
            <span className="text-foreground/30">·</span>
            <a href="#legal-basis" className="hover:text-accent smooth-transition">Legal basis</a>
            <span className="text-foreground/30">·</span>
            <a href="#third-parties" className="hover:text-accent smooth-transition">Third parties</a>
            <span className="text-foreground/30">·</span>
            <a href="#your-rights" className="hover:text-accent smooth-transition">Your rights</a>
            <span className="text-foreground/30">·</span>
            <a href="#contact" className="hover:text-accent smooth-transition">Contact</a>
          </nav>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Section id="imprint" title="Imprint">
            <p>
              SciSymbio is operated by Martin Priessner, founder and data
              controller. The company is in formation; upon incorporation this
              imprint will be updated with the legal entity, commercial register
              number, and tax identification.
            </p>
            <p>
              <strong className="text-foreground">Contact:</strong>{" "}
              <a href="mailto:contact@scisymbio.ai" className="text-accent hover:underline">
                contact@scisymbio.ai
              </a>
              <br />
              <strong className="text-foreground">Responsible for content:</strong>{" "}
              Martin Priessner
              <br />
              <strong className="text-foreground">Jurisdiction:</strong> Austria
            </p>
          </Section>

          <Section id="data-we-collect" title="Data we collect on this website">
            <p>
              This website is a static marketing site hosted on GitHub Pages.
              We do not operate our own servers for the website itself. The
              following data is processed:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">Server access logs</strong> by
                GitHub Pages: IP address, timestamp, user agent, requested URL.
                Retained by GitHub per their infrastructure policy.
              </li>
              <li>
                <strong className="text-foreground">Aggregate analytics</strong> via
                Plausible Analytics: page views, referrer, country-level geolocation,
                device type. No cookies are set, no personal data or IP addresses
                are stored.
              </li>
              <li>
                <strong className="text-foreground">Contact form / email:</strong>{" "}
                When you email{" "}
                <a href="mailto:contact@scisymbio.ai" className="text-accent hover:underline">
                  contact@scisymbio.ai
                </a>
                , we receive your name, email, and the content of your message.
                We use this only to respond and to assess pilot interest.
              </li>
            </ul>
            <p>
              The website does not set marketing or tracking cookies. No data is
              sold or shared with advertisers.
            </p>
          </Section>

          <Section id="product-data" title="Data processed by the product (pilots)">
            <p>
              During a pilot engagement, the SciSymbio companion captures voice
              and video from the laboratory workbench to generate structured
              experiment records. This is governed by a separate Data Processing
              Agreement (DPA) signed with the customer.
            </p>
            <p>
              Key commitments to pilot customers:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Customer retains full ownership of raw media and derived records.</li>
              <li>Data is encrypted in transit and at rest.</li>
              <li>Data is stored in the customer's chosen region.</li>
              <li>Customer data is never used to train models.</li>
              <li>
                Enterprise deployments support private cloud and on-premise
                processing.
              </li>
            </ul>
          </Section>

          <Section id="legal-basis" title="Legal basis (GDPR)">
            <p>
              We process personal data under the following legal bases of the EU
              General Data Protection Regulation (GDPR):
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">Art. 6(1)(b) — contract:</strong>{" "}
                processing necessary to respond to your enquiry or pilot request.
              </li>
              <li>
                <strong className="text-foreground">Art. 6(1)(f) — legitimate interest:</strong>{" "}
                aggregate, privacy-preserving analytics to understand site usage
                and improve content.
              </li>
              <li>
                <strong className="text-foreground">Art. 6(1)(a) — consent:</strong>{" "}
                any future marketing communications will be opt-in.
              </li>
            </ul>
          </Section>

          <Section id="third-parties" title="Third-party services">
            <p>This website uses the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">GitHub Pages</strong> (GitHub, Inc., USA) — static hosting.
                Data processed under GitHub's DPA and Standard Contractual Clauses.
              </li>
              <li>
                <strong className="text-foreground">Plausible Analytics</strong> (Plausible Insights OÜ, Estonia) —
                cookieless, GDPR-compliant analytics. No personal data stored,
                no cross-site tracking. See{" "}
                <a href="https://plausible.io/data-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  plausible.io/data-policy
                </a>
                .
              </li>
            </ul>
          </Section>

          <Section id="your-rights" title="Your rights">
            <p>Under GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you (Art. 15)</li>
              <li>Request correction of inaccurate data (Art. 16)</li>
              <li>Request erasure of your data (Art. 17)</li>
              <li>Request restriction of processing (Art. 18)</li>
              <li>Receive your data in a portable format (Art. 20)</li>
              <li>Object to processing based on legitimate interest (Art. 21)</li>
              <li>
                Lodge a complaint with your supervisory authority. In Austria,
                this is the{" "}
                <a
                  href="https://www.dsb.gv.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Datenschutzbehörde (DSB)
                </a>
                .
              </li>
            </ul>
            <p>
              To exercise any of these rights, email{" "}
              <a href="mailto:contact@scisymbio.ai" className="text-accent hover:underline">
                contact@scisymbio.ai
              </a>
              . We respond within 30 days.
            </p>
          </Section>

          <Section id="cookies" title="Cookies">
            <p>
              This website does not set cookies. We use Plausible Analytics,
              which is deliberately cookieless — there is nothing to consent to,
              and no cookie banner is required.
            </p>
          </Section>

          <Section id="changes" title="Changes to this notice">
            <p>
              We may update this privacy notice as our product and operations
              evolve. Material changes will be dated above and — for pilot
              customers — communicated by email.
            </p>
          </Section>

          <Section id="contact" title="Contact">
            <p>
              For any question about privacy, data handling, or the imprint,
              email{" "}
              <a href="mailto:contact@scisymbio.ai" className="text-accent hover:underline">
                contact@scisymbio.ai
              </a>
              .
            </p>
          </Section>
        </motion.div>
      </article>

      <Footer />
    </main>
  );
};

export default Privacy;
