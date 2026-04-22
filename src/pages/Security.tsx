import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Lock, Server, FileText, Clock, Users } from "lucide-react";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="scroll-mt-24 mb-14">
    <h2 className="font-display text-2xl md:text-3xl font-light mb-5 text-foreground">
      {title}
    </h2>
    <div className="space-y-4 text-foreground/75 leading-relaxed font-light">
      {children}
    </div>
  </section>
);

const PrincipleCard = ({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof ShieldCheck;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="border border-border rounded-lg p-6 bg-background/40">
    <div className="flex items-center gap-3 mb-3">
      <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
      <h3 className="font-display text-lg font-light text-foreground">{title}</h3>
    </div>
    <p className="text-sm text-foreground/70 leading-relaxed font-light">{children}</p>
  </div>
);

const Security = () => {
  const handleJoinMission = () => {
    window.location.href = "mailto:contact@scisymbio.ai";
  };

  return (
    <main className="min-h-screen">
      <SEO
        title="Security & Data Handling"
        description="How SciSymbio handles customer data: encryption, residency, DPA availability, GDPR posture, and compliance roadmap."
        path="/security"
      />
      <Navigation onJoinMission={handleJoinMission} />

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
              Security
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-light leading-[1.1] mb-4">
            How we handle your <span className="italic text-accent">data</span>.
          </h1>
          <p className="text-foreground/70 text-lg font-light leading-relaxed">
            SciSymbio is built for regulated research. This page is a plain-English
            summary of our security posture, data-handling commitments, and the
            compliance roadmap ahead. For pilot customers, every commitment here
            is formalised in a signed Data Processing Agreement.
          </p>
          <p className="text-foreground/55 text-sm mt-4">
            Last updated: 22 April 2026
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-4 mb-16"
        >
          <PrincipleCard icon={Lock} title="Encrypted end-to-end">
            Data is encrypted in transit (TLS 1.2+) and at rest (AES-256).
            Keys are managed by our cloud provider's KMS, never exposed to
            application code.
          </PrincipleCard>
          <PrincipleCard icon={Server} title="Residency of your choice">
            Customer data stays in the region you pick — EU, US, or a private
            cloud you control. On-premise deployments are available for
            enterprise pilots.
          </PrincipleCard>
          <PrincipleCard icon={ShieldCheck} title="You own it. Always.">
            Customer retains full ownership of raw media and derived records.
            Data is never used to train shared models. Ever.
          </PrincipleCard>
          <PrincipleCard icon={FileText} title="DPA on request">
            A GDPR-compliant Data Processing Agreement and Standard
            Contractual Clauses are available for every pilot. Email us
            and we'll send the templates the same day.
          </PrincipleCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Section id="what-we-capture" title="What the product captures">
            <p>
              The SciSymbio lab companion records voice and video at the
              workbench to generate structured experiment records. Capture is
              initiated and ended by the scientist. There is no passive,
              always-on recording.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Voice and video from the bench, during active capture only.</li>
              <li>Transcripts, structured step-by-step experiment records, and frame-level timestamps.</li>
              <li>Optional links to the customer's ELN entries (Benchling, Labguru, LabVantage, etc.).</li>
            </ul>
            <p>
              Nothing is captured before the scientist starts a session, and
              nothing persists after they end it without explicit confirmation.
            </p>
          </Section>

          <Section id="storage" title="Where your data lives">
            <p>
              Customer pilots run on isolated per-tenant infrastructure.
              Storage region is chosen by the customer at the start of the
              engagement — EU (default), US, or private cloud / on-premise
              for enterprise.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>No commingling of customer data.</li>
              <li>Raw media encrypted with customer-scoped keys.</li>
              <li>Network boundary: private VPC, no public ingress to storage.</li>
              <li>Access on a least-privilege basis; every access is logged.</li>
            </ul>
          </Section>

          <Section id="ai-and-models" title="AI processing">
            <p>
              Speech-to-text and vision-language processing run on enterprise-grade
              model providers (e.g. Google Vertex AI, OpenAI Enterprise) under
              zero-retention agreements. Customer data is not used to train
              shared models — this is contractual, not aspirational.
            </p>
            <p>
              For on-premise deployments, all model inference runs inside the
              customer's perimeter. No data leaves the customer's network.
            </p>
          </Section>

          <Section id="compliance" title="Compliance roadmap">
            <p>
              We are an early-stage company building toward regulated-enterprise
              readiness. Here is the honest status:
            </p>
            <div className="not-prose space-y-4 mt-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <div>
                  <span className="font-medium text-foreground">GDPR</span>
                  <span className="text-foreground/60"> — foundational commitments in place (this page, the privacy notice, DPA templates). Active for every pilot from day one.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                <div>
                  <span className="font-medium text-foreground">ISO 27001</span>
                  <span className="text-foreground/60"> — readiness assessment in preparation. Target: certified within 12 months of first paid deployment.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                <div>
                  <span className="font-medium text-foreground">SOC 2 Type II</span>
                  <span className="text-foreground/60"> — planned alongside ISO 27001. Audit window begins once pilots graduate to multi-tenant production.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-foreground/30 flex-shrink-0" />
                <div>
                  <span className="font-medium text-foreground">GxP / 21 CFR Part 11</span>
                  <span className="text-foreground/60"> — the product is designed from day one to generate audit-ready records. Formal validation support is offered per customer, per workflow.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-foreground/30 flex-shrink-0" />
                <div>
                  <span className="font-medium text-foreground">HIPAA</span>
                  <span className="text-foreground/60"> — relevant only where workflows touch PHI. BAAs available on request for US enterprise pilots.</span>
                </div>
              </div>
            </div>
            <p className="text-foreground/55 text-sm mt-6 italic">
              Legend: teal = in production, amber = in progress, grey = on request.
            </p>
          </Section>

          <Section id="incidents" title="Incident response">
            <p>
              In the event of a security incident affecting customer data, we
              commit to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Notify the customer's designated contact within 24 hours of confirmed detection.</li>
              <li>Provide a written preliminary report within 72 hours (aligned with GDPR Art. 33).</li>
              <li>Provide a full post-incident report with root-cause analysis and remediation within 30 days.</li>
            </ul>
          </Section>

          <Section id="who-accesses-data" title="Who can access your data">
            <div className="flex items-start gap-3 mb-4">
              <Users className="w-5 h-5 text-accent mt-1 flex-shrink-0" strokeWidth={1.5} />
              <p className="m-0">
                Access is limited to the smallest engineering team required to
                operate the service, under written confidentiality and access-log
                obligations. No third-party marketing, analytics, or advertising
                vendor ever sees customer product data.
              </p>
            </div>
            <p>
              Customers can request a full list of individuals with production
              access at any time.
            </p>
          </Section>

          <Section id="retention" title="Retention & deletion">
            <div className="flex items-start gap-3 mb-4">
              <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" strokeWidth={1.5} />
              <p className="m-0">
                Retention windows are set by the customer in the pilot agreement.
                On request or contract end, all customer data (raw media,
                transcripts, derived records, backups) is deleted within 30
                days. A signed deletion certificate is provided.
              </p>
            </div>
          </Section>

          <Section id="contact" title="Questions?">
            <p>
              For security reviews, DPA requests, or any specific question about
              how your data would be handled in a pilot, email{" "}
              <a href="mailto:contact@scisymbio.ai" className="text-accent hover:underline">
                contact@scisymbio.ai
              </a>
              . We respond the same day.
            </p>
            <p className="text-foreground/55 text-sm mt-6">
              For personal-data rights under GDPR (access, correction,
              erasure), see our{" "}
              <Link to="/privacy#your-rights" className="text-accent hover:underline">
                privacy notice
              </Link>
              .
            </p>
          </Section>
        </motion.div>
      </article>

      <Footer />
    </main>
  );
};

export default Security;
