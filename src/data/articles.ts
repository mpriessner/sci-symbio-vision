export interface Reference {
  authors: string;
  year: string;
  title: string;
  publication: string;
  url: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readingTime: string;
  category: string;
  /** Body paragraphs, rendered in order. Use ¹²³⁴⁵ for footnote markers. */
  paragraphs: string[];
  references?: Reference[];
}

export const articles: Article[] = [
  {
    slug: "28-billion-reproducibility-tax",
    title: "The $28B reproducibility crisis — and how AI finally changes the math",
    excerpt:
      "For a decade, pharma R&D has been losing tens of billions a year to research it cannot reproduce. The cause isn't fraud — it's procedure, unwritten. Here is why the next generation of AI-native lab tools is, for the first time, a plausible answer.",
    author: "Dr. Martin Priessner",
    date: "April 2026",
    readingTime: "5 min read",
    category: "Industry",
    paragraphs: [
      "In 2015, three economists writing in PLOS Biology put a number on a problem the scientific community had been dancing around for decades. Half of all preclinical research, they estimated, cannot be reproduced — and in the United States alone, that failure costs roughly $28 billion every year.¹ The figure is not a typo. It is the scale of the waste.",
      "The economics paper wasn't the first warning. Three years earlier, scientists at Amgen had tried to confirm fifty-three landmark cancer studies from leading journals. Only six — 11% — held up.² A 2016 Nature survey of 1,576 researchers found that more than 70% had failed to reproduce another scientist's experiment, and over half had failed to reproduce their own.³ The crisis is not a rumor. It is the median experience of working scientists.",
      "Where does the error hide? Not, mostly, in the data. The problem is upstream — in the procedure. A protocol written in the methods section of a paper is a summary, not a recipe. It leaves out the cell-line passage number, the exact order of reagents, the ambient humidity, the unspoken adjustment the senior postdoc made at minute 37. Electronic lab notebooks help, but they capture what a scientist types; they cannot capture what a scientist does. The tacit knowledge that makes an experiment work is precisely the knowledge that never gets written down.",
      "For most of the last fifteen years, there was no obvious way to close this gap. Writing down more was slow; writing down everything was impossible. That constraint is dissolving. Modern AI systems — voice-native, vision-native, and running cheaply on commodity hardware — can now watch and listen to an experiment as it happens, and structure the result into a reproducible record in the background. ELN adoption is already rising: roughly 81% of labs use one today, up from 66% a year earlier.⁴ The missing piece — a layer that captures the execution, not just the plan — is what the current generation of AI lab companions is built to deliver.",
      "Forecasters tracking lab tooling now describe a near future in which reproducibility becomes an automated byproduct of the research process itself: every reagent version logged, every transformation from raw instrument output to final figure tracked end-to-end, every protocol bundled with the exact computational environment it ran in.⁵ This is not a prediction about 2040. It is a description of tools being piloted today. For pharma, the implication is unusually concrete — the $28 billion question stops being about cultural change, and starts being about adoption speed.",
      "The version we're building at SciSymbio is the simplest one. A scientist works as they always have. The AI companion watches, listens, and remembers. When the experiment is finished, the record exists — structured, searchable, shareable, and, for the first time in the history of wet-lab science, reproducible by default.",
      "The tax was always going to get paid. What changes, finally, is who pays it — and whether the bill keeps coming.",
    ],
    references: [
      {
        authors: "Freedman, L. P., Cockburn, I. M., & Simcoe, T. S.",
        year: "2015",
        title: "The Economics of Reproducibility in Preclinical Research",
        publication: "PLOS Biology, 13(6): e1002165",
        url: "https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.1002165",
      },
      {
        authors: "Begley, C. G., & Ellis, L. M.",
        year: "2012",
        title: "Drug development: Raise standards for preclinical cancer research",
        publication: "Nature, 483, 531–533",
        url: "https://www.nature.com/articles/483531a",
      },
      {
        authors: "Baker, M.",
        year: "2016",
        title: "1,500 scientists lift the lid on reproducibility",
        publication: "Nature, 533, 452–454",
        url: "https://www.nature.com/articles/533452a",
      },
      {
        authors: "Lab Manager",
        year: "2026",
        title: "The Future of Analytical Labs: Data, Automation, and AI",
        publication: "Lab Manager industry report",
        url: "https://www.labmanager.com/the-future-of-analytical-labs-data-automation-and-ai-34418",
      },
      {
        authors: "Semmelrock, H., et al.",
        year: "2025",
        title: "Reproducibility in machine-learning-based research: Overview, barriers, and drivers",
        publication: "AI Magazine (Wiley)",
        url: "https://onlinelibrary.wiley.com/doi/10.1002/aaai.70002",
      },
    ],
  },
  {
    slug: "tacit-knowledge-walking-out",
    title: "Tacit knowledge: why senior scientists leaving costs more than you think",
    excerpt:
      "When a ten-year bench chemist retires, the spreadsheets stay. The intuition doesn't. Fifty years after a sociologist first named the problem, AI is what finally makes it tractable.",
    author: "Dr. Martin Priessner",
    date: "April 2026",
    readingTime: "5 min read",
    category: "Research",
    paragraphs: [
      "In 1974, a sociologist named Harry Collins set out to answer a question that should not have had an interesting answer. Why, he asked, were laboratories around the world failing to build a particular kind of laser — the TEA laser, a well-documented design — even when they had the blueprints, the parts, and in some cases a working model in the next room?¹ His finding, after years of fieldwork, was unsettling. The only labs that succeeded were the ones with a researcher who had spent time in a room with someone who had already built one. Reading the paper was not enough. Physical proximity to someone for whom the thing had worked was.",
      "The name Collins gave this missing ingredient was tacit knowledge — the craft a scientist possesses but cannot fully write down. It is the color of a reaction mixture at the moment it has finished, but not a minute before. The feel of a column that is running cleanly. The half-second of hesitation before a senior postdoc corrects a step that the protocol does not mention. It is what makes expertise expertise — the part that lives in the hands and the ears, not the text.",
      "In an academic lab, this costs time. In pharma, it costs money. A single experienced process operator at a manufacturing plant often carries fifteen to twenty years of accumulated knowledge that never made it into any SOP — the exact temperature ramp that prevents aggregation, the mixing speed that keeps a batch viable. When they leave, yield losses per batch can exceed two million dollars.² And leave they are: a recent Deloitte survey found that 83% of pharmaceutical and life-sciences companies struggle to find skilled talent, with three-quarters expecting the shortage to deepen over the next five years.³ The layoffs that defined 2025 and early 2026 did not slow the departures — they accelerated them.⁴",
      "Every knowledge-management tool built in the last two decades has failed to close this gap, and for the same reason. Electronic lab notebooks capture what a scientist types. SOPs capture what a company tells them to do. Handover documents are written by the person leaving, for an imagined successor, in a week too short to matter. None of them capture what the scientist does. Apprenticeship — the oldest solution we have — works, but it scales poorly; it requires years of shared benchtime, and pharma no longer has years.⁵",
      "The shape of a solution is, for the first time, technologically legible. Modern AI — voice-native, vision-native, running cheaply on commodity hardware — can now watch an experiment as it happens. It catches the verbal aside at minute seventeen. It notices the second pipette tip the chemist reached for, and the one they put back. It picks up the moment a senior scientist murmurs, almost to themselves, that the color is wrong today. None of that belongs in a methods section. All of it is what makes the experiment work.",
      "At SciSymbio, this is the layer we are building. An AI companion that observes the bench the way an attentive apprentice would, and stores what it sees as a structured, searchable, replayable record. When a senior scientist walks out the door, their instincts do not leave with them. The next person in the lab can watch them work, listen to them think, and learn the things the ELN never knew how to hold.",
      "Collins' point, fifty years on, was never that tacit knowledge could not be transferred. It was that transfer required presence. What changes now is the definition of presence. The apprentice does not need to be in the room — and, finally, neither does the expert.",
    ],
    references: [
      {
        authors: "Collins, H. M.",
        year: "2001",
        title: "Tacit Knowledge, Trust and the Q of Sapphire",
        publication: "Social Studies of Science, 31(1), 71–85",
        url: "https://journals.sagepub.com/doi/10.1177/030631201031001004",
      },
      {
        authors: "Bonjoy",
        year: "2024",
        title: "Manufacturing Knowledge Transfer: Preventing the Operator Retirement Crisis",
        publication: "Bonjoy industry analysis",
        url: "https://bonjoy.com/articles/operator-retiring-knowledge-transfer-manufacturing/",
      },
      {
        authors: "AMS (citing Deloitte)",
        year: "2024",
        title: "Solving the Pharma and Life Sciences talent deficit",
        publication: "AMS industry report",
        url: "https://www.weareams.com/stories/solving-the-pharma-and-life-sciences-talent-deficit/",
      },
      {
        authors: "IntuitionLabs",
        year: "2026",
        title: "Pharma & CRO Layoffs 2025–2026: An Industry Analysis",
        publication: "IntuitionLabs",
        url: "https://intuitionlabs.ai/articles/pharma-cro-layoffs-2025-2026-analysis",
      },
      {
        authors: "DeLong, D. W.",
        year: "2004",
        title: "Diagnosing the Costs of Lost Knowledge on Organizational Performance",
        publication: "Smart Workforce Strategies (working paper)",
        url: "https://www.smartworkforcestrategies.com/wp-content/uploads/2018/03/DiagnosingCostsOfLostKnowledge_DeLong.pdf",
      },
    ],
  },
  {
    slug: "video-as-evidence-alcoa-primitive",
    title: "Video-as-evidence: a new ALCOA+ primitive",
    excerpt:
      "GxP frameworks were written for paper and for the forms that replaced it. Video captures what neither ever could. The case for adding it as a first-class primitive under ALCOA+.",
    author: "Dr. Martin Priessner",
    date: "March 2026",
    readingTime: "6 min read",
    category: "Compliance",
    paragraphs: [
      "Roughly 40% of all critical and major GMP findings logged by the MHRA between 2016 and 2023 were data-integrity lapses.¹ The framework those findings were judged against — ALCOA+ — is one of the most cited and least-updated regulatory primitives in pharma. It was introduced by the FDA in the early 1990s, when a contemporaneous record meant a pen stroke in a logbook, and has been expanded twice since.² Neither expansion changed what it was designed to govern.",
      "What ALCOA+ says, in order, is that a GxP record must be Attributable, Legible, Contemporaneous, Original, and Accurate — and, in the expanded form, Complete, Consistent, Enduring, and Available.³ Nine tests, all of them written with one medium in mind: the filled-in form. An entry has an author. A timestamp. It cannot be quietly erased. An auditor can find it years later.",
      "What ALCOA+ was never designed for is the thirty minutes between two form entries. The unrecorded step. The question of whether the analyst actually did what the form says they did. Paper and electronic forms are evidence that work was declared — not evidence that it was done. For three decades, the industry has closed this gap the only way available: by trusting the signer, and by auditing downstream for the consequences of breach.",
      "The quiet fact is that the legal ceiling has sat above the practical one for a long time. 21 CFR Part 11 defines an electronic record as 'any combination of text, graphics, data, audio, pictorial, or other information representation in digital form.'⁴ Video and audio are, in the eyes of the regulation, electronic records — they always were. What held the industry back was not law. It was cost, bulk, searchability, and the absence of a framework that told an inspector how to read tape.",
      "All three constraints are falling at once. Commodity cameras, on-device transcription, and vision-language models now make lab footage cheap to capture, cheap to index, and cheap to audit. Every ALCOA+ attribute defined for paper extends cleanly to video: attributable (face and voice biometrics), legible (transcript and OCR'd overlays), contemporaneous (frame-level timestamps), original (cryptographic hash at capture), accurate (cross-validated against instrument output), complete (literally), consistent (single stream), enduring (cold storage), available (searchable by natural language). What the industry lacks is not capability. It is the framework letter.",
      "The window is open. The PIC/S PI 041-1 guidance, issued in 2021, treats data integrity as a living problem to be addressed with the best available technology.⁵ EU GMP Chapter 4 has a draft revision in circulation. The next refresh of ALCOA+ is the moment at which video-as-evidence should be named — not as a replacement for the electronic record, but as its peer. Together they capture both the declaration and the act. Neither alone has ever been enough.",
      "At SciSymbio we build on the bet that this primitive is coming. Every experiment captured through our lab companion produces a hashed, transcribed, timestamp-aligned video-and-voice record, linked to the ELN entry it corroborates, and designed from day one to be auditable under the existing framework. Regulators do not need to change the rules for our customers to benefit. They will benefit faster when the framework catches up.",
      "ALCOA+ was the answer to a paper-era question. The next question is already here. It is time for the framework to grow a new letter.",
    ],
    references: [
      {
        authors: "Amplelogic",
        year: "2024",
        title: "MHRA Data Integrity Failures and How to Prevent Them",
        publication: "Amplelogic industry analysis",
        url: "https://www.amplelogic.com/blog/mhra-data-integrity-failures-and-how-to-prevent-them",
      },
      {
        authors: "ECA Academy",
        year: "2019",
        title: "ALCOA+ — what does it mean?",
        publication: "ECA GMP News",
        url: "https://www.gmp-compliance.org/gmp-news/alcoa-what-does-it-mean",
      },
      {
        authors: "Medicines and Healthcare products Regulatory Agency (MHRA)",
        year: "2018",
        title: "'GXP' Data Integrity Guidance and Definitions, Revision 1",
        publication: "UK Government publication",
        url: "https://assets.publishing.service.gov.uk/media/5aa2b9ede5274a3e391e37f3/MHRA_GxP_data_integrity_guide_March_edited_Final.pdf",
      },
      {
        authors: "U.S. Food and Drug Administration",
        year: "2023",
        title: "21 CFR Part 11 — Electronic Records; Electronic Signatures",
        publication: "Electronic Code of Federal Regulations",
        url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11",
      },
      {
        authors: "Pharmaceutical Inspection Co-operation Scheme (PIC/S)",
        year: "2021",
        title: "PI 041-1: Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments",
        publication: "PIC/S Guidance",
        url: "https://picscheme.org/docview/4234",
      },
    ],
  },
  {
    slug: "why-eln-cant-capture-procedure",
    title: "Why your ELN can't capture procedure",
    excerpt:
      "ELNs are brilliant at capturing plans and results. They are structurally incapable of capturing what happened in between. Here is why — and what finally fills the gap.",
    author: "Dr. Martin Priessner",
    date: "March 2026",
    readingTime: "5 min read",
    category: "Product",
    paragraphs: [
      "The electronic lab notebook market was worth around $700 million in 2024 and is projected to reach roughly $1.4 billion by 2034.¹ Adoption, by any reasonable measure, is winning. The tools are cleaner. The schemas are smarter. The audit trails are deeper. And yet the number everyone cites when they talk about pharma research — the $28 billion a year lost to irreproducible experiments — has not moved. It is worth asking why.",
      "What ELNs do, they do well. A modern ELN from Benchling, Labguru, LabVantage, or SciNote captures what a scientist types, links it to samples and reagents, ties it to instrument output, enforces templates, preserves an audit trail, and makes the whole thing searchable.² For everything that belongs in a form, the industry has genuinely converged on a working answer. The problem is what does not belong in a form.",
      "An ELN is, architecturally, a schema. A schema is a declaration of which fields matter, written before the experiment takes place. It is brilliant at structured data. It is structurally incapable of capturing what was not anticipated — the adjustment at minute thirty-seven, the second pipette tip the chemist reached for, the thirty seconds of troubleshooting when the reagent bottle was not where it should be. Every ELN vendor shares this blind spot, because the blind spot is not a product decision. It is the shape of the tool.",
      "The lab's workaround is older than any software. Scientists keep a paper jot-book on the bench. Data gets cleaned up before it is entered. Tacit steps — the ones 'everyone knows' — never make it into the official record. Recent analyses of ELN adoption in biotech specifically flag this pattern: most labs are not audit-ready, and the gap between what the ELN records and what the experiment actually involved is where that failure lives.³ The ELN is a theatre of the experiment. It is the version the lab wants to remember, not the version that happened.",
      "None of the new ELN features now rolling out — smarter templates, tighter instrument integrations, in-line AI autocomplete⁴ — change this. They make the form faster to fill. They do not change the fact that the form asks the scientist to summarize the process, and summarization is precisely where the tacit knowledge leaks. You cannot fix this by making the form better. The form is not where the information is.",
      "What fills the gap is not a new kind of form. It is a companion layer that observes the experiment as it runs, in voice and video, and produces a continuous record of what actually happened. The ELN then becomes what it should always have been: the structured summary of a fully observed process, rather than the only thing observed. The form no longer has to carry the weight of the whole experiment. It carries the weight of the decisions.",
      "At SciSymbio we do not replace the ELN. We finish it. Every Benchling, Labguru, or custom ELN our customers already use continues to hold the structured record; alongside it, our companion holds the unstructured one — the part that was always too messy, too motion-heavy, too conversational for a form. Together they add up to something neither has ever been alone: a complete account of the bench.",
      "For thirty years, the industry has been told its data-integrity problem was a documentation problem. It was never that. It was a medium problem — and the medium is finally expanding.",
    ],
    references: [
      {
        authors: "Towards Healthcare",
        year: "2025",
        title: "Electronic Lab Notebook Market Size and Trends for 2026",
        publication: "Towards Healthcare industry report",
        url: "https://www.towardshealthcare.com/insights/electronic-lab-notebook-market-sizing",
      },
      {
        authors: "Benchling",
        year: "2025",
        title: "Electronic Lab Notebook Best Practices",
        publication: "Benchling",
        url: "https://www.benchling.com/electronic-lab-notebook-best-practices",
      },
      {
        authors: "Revvity Signals Software",
        year: "2024",
        title: "How to Overcome Barriers in ELN Adoption",
        publication: "Revvity Signals",
        url: "https://revvitysignals.com/blog/how-overcome-barriers-eln-adoption",
      },
      {
        authors: "Genemod",
        year: "2026",
        title: "The 10 Best ELN Platforms Leading Into 2026",
        publication: "Genemod industry analysis",
        url: "https://genemod.net/blog/the-10-best-eln-platforms-leading-into-2026",
      },
    ],
  },
  {
    slug: "onboarding-two-weeks",
    title: "Onboarding a scientist in 2 weeks, not 6 months",
    excerpt:
      "The slowest thing in a lab was never the equipment. It was always the time it took to teach someone to use it. That clock is finally starting to move.",
    author: "Dr. Martin Priessner",
    date: "February 2026",
    readingTime: "5 min read",
    category: "Operations",
    paragraphs: [
      "Full productivity for a new scientist in a pharmaceutical lab typically takes between three and six months.¹ Best-in-class structured onboarding for clinical-research roles can bring time-to-competency to around 28 days — and, after process optimization, as low as 19² — but those are the roles with the cleanest SOPs and the most portable skills. A new bench chemist, a new process scientist, a new analytical-development hire — none of them ramp up in weeks. They ramp up in quarters.",
      "The bottleneck is not paperwork. A new hire can read every SOP in their first week. What takes months is the lab-specific knowledge that no SOP holds. Which reagent supplier this site uses, because the off-brand one drifted on pH last year. How this particular HPLC is actually calibrated, as opposed to how the manual says it is. The unwritten order-of-operations a senior postdoc adds at the end of the Western blot to make the result stable. None of that is in the notebook. All of it is in people's heads.",
      "The oldest solution is the one every lab still uses: shadow a senior scientist until you have seen the work enough times to do it yourself. It works. It is also the most expensive hour in a biotech — the senior scientist's attention — spent on one person at a time. And it scales only by adding more senior scientists, who are leaving the industry faster than the industry is hiring.",
      "The structured fix — video SOPs — has been circulating for a decade, and in controlled settings it works. One pharmaceutical company rolled out video SOPs across multiple production sites and saw a 25% compliance lift within six months.³ That is real. But video SOPs are still a secondary artifact; someone has to sit down and film them, on purpose, outside the flow of real work. The library goes stale the moment the process drifts, which in any live lab is constantly.",
      "What changes this year, for the first time, is that the library can be the work. An AI companion that observes every experiment produces, as a byproduct, a continuously updated archive of how things are actually done in this lab, by these people, with this equipment, today. No one has to film anything. No one has to maintain a training module. Onboarding becomes a search query — 'show me the last three Gibson assemblies on that plasmid, with the senior scientist's running commentary' — and the new hire watches the same hands that will eventually coach them in person, only faster, at their own pace, as many times as they need.",
      "The compound effect is what matters. The first scientist onboards in weeks instead of months. The second onboards faster, because the library has more entries. The tenth onboards faster still. The training artifact is not something the lab builds — it is something the lab becomes, simply by working.⁴ Tribal knowledge stops being tribal the moment it is captured in a searchable form. The senior scientist's time stops being the bottleneck; it becomes the seed of a resource that keeps returning value long after they have left.",
      "This is what we are building at SciSymbio. The first hire ramps up in two weeks — not because we compress training, but because the lab already remembers everything that has been done in it. The slowest thing in a lab was never the equipment. It was always the time it took to teach someone how to use it. That clock is finally starting to move.",
    ],
    references: [
      {
        authors: "Oxford Global Resources",
        year: "2025",
        title: "Current Job Market Trends in the Biotech and Pharmaceutical Lab Industry",
        publication: "Oxford Global Resources",
        url: "https://www.oxfordcorp.com/insights/blog/current-job-market-trends-in-the-biotech-and-pharmaceutical-lab-industry/",
      },
      {
        authors: "Zigpoll (citing Pharma HR Benchmark Report 2023)",
        year: "2024",
        title: "15 ways to optimize onboarding flow in pharmaceuticals",
        publication: "Zigpoll industry analysis",
        url: "https://www.zigpoll.com/content/15-ways-optimize-onboarding-flow-improvement-pharmaceuticals",
      },
      {
        authors: "Speach",
        year: "2024",
        title: "Video SOPs for Pharma: Simplify Training and Ensure Compliance",
        publication: "Speach",
        url: "https://speach.me/video-sops-pharma",
      },
      {
        authors: "Lab Manager",
        year: "2025",
        title: "Onboarding — 2025 industry survey",
        publication: "Lab Manager",
        url: "https://www.labmanager.com/onboarding-6004",
      },
    ],
  },
];

export const getArticleBySlug = (slug: string) =>
  articles.find((a) => a.slug === slug);
