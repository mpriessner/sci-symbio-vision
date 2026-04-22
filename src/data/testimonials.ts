export interface Testimonial {
  /** The spoken quote, kept short — one sentence, two at most. */
  quote: string;
  /** e.g. "Senior scientist, global pharma" — anonymized is fine. */
  attribution: string;
  /** Optional role/affiliation line shown under attribution. */
  context?: string;
}

/**
 * Add one real quote from the 200+ discovery interviews and it will render
 * automatically in ValidationSection. Anonymized attribution is fine.
 *
 * Until a quote is added, this array stays empty and the testimonial card
 * is not rendered.
 */
export const testimonials: Testimonial[] = [
  // {
  //   quote: "Every lab I know has this exact problem. Nobody has a real answer yet.",
  //   attribution: "Senior scientist",
  //   context: "Global top-10 pharma — discovery interview, March 2026",
  // },
];
