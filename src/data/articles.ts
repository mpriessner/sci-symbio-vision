export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readingTime: string;
  category: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: "28-billion-reproducibility-tax",
    title: "The $28B reproducibility tax — where it hides in pharma R&D budgets",
    excerpt:
      "Most of the reproducibility cost never shows up on a line item. It's absorbed into timelines, attrition, and failed follow-ups. Here's how we found it — and how to get it back.",
    author: "Dr. Martin Priessner",
    date: "April 2026",
    readingTime: "8 min read",
    category: "Industry",
    content: `Placeholder article. The full piece will argue that reproducibility cost is structurally invisible in most pharma P&Ls — it doesn't have a budget line, so leadership can't see it. We will map the five places it actually hides (trial restarts, attrition, IP friction, audit overhead, knowledge loss) and show what recovering even a third of it is worth.`,
  },
  {
    slug: "tacit-knowledge-walking-out",
    title: "Tacit knowledge: why senior scientists leaving costs more than you think",
    excerpt:
      "When a ten-year bench chemist retires, the spreadsheets stay. The intuition doesn't. We put a number on what walks out the door — and what it takes to retain it.",
    author: "Dr. Martin Priessner",
    date: "April 2026",
    readingTime: "6 min read",
    category: "Research",
    content: `Placeholder article. Deep-dive into tacit knowledge — the procedural, sensory, and intuitive knowledge scientists carry that can't be captured in an ELN. We'll interview three lab heads about what was lost the last time a senior person left, and show how video-and-voice capture recovers it.`,
  },
  {
    slug: "video-as-evidence-alcoa-primitive",
    title: "Video-as-evidence: a new ALCOA+ primitive",
    excerpt:
      "GxP frameworks were written for paper and forms. Video captures what paper never could. We argue for adding it as a first-class primitive under ALCOA+.",
    author: "SciSymbio Research",
    date: "March 2026",
    readingTime: "10 min read",
    category: "Compliance",
    content: `Placeholder article. Technical piece on why the ALCOA+ framework (Attributable, Legible, Contemporaneous, Original, Accurate + Complete, Consistent, Enduring, Available) is overdue an upgrade for the video-and-voice era. We'll propose a concrete extension and how regulators could accept it.`,
  },
  {
    slug: "why-eln-cant-capture-procedure",
    title: "Why your ELN can't capture procedure",
    excerpt:
      "ELNs are brilliant at capturing plans and results. They are structurally incapable of capturing what happened in between. Here is why — and what fills the gap.",
    author: "Dr. Martin Priessner",
    date: "March 2026",
    readingTime: "5 min read",
    category: "Product",
    content: `Placeholder article. An honest take on why every ELN — Benchling, LabVantage, SciNote, Labguru — has the same architectural blind spot: they're forms, and forms can't capture motion. We'll explain where the gap is and why a companion approach complements rather than competes with them.`,
  },
  {
    slug: "onboarding-two-weeks",
    title: "Onboarding a scientist in 2 weeks, not 6 months",
    excerpt:
      "The slowest thing in a lab isn't the equipment. It's getting a new scientist to run experiments independently. Here's how video + voice changes the math.",
    author: "SciSymbio Research",
    date: "February 2026",
    readingTime: "7 min read",
    category: "Operations",
    content: `Placeholder article. Case study on how a combination of annotated video, searchable voice transcripts, and structured procedural records collapses new-scientist ramp-up from months to weeks. Includes a framework for measuring onboarding time in your lab today.`,
  },
];

export const getArticleBySlug = (slug: string) =>
  articles.find((a) => a.slug === slug);
