/**
 * Site-wide configuration the user edits after signing up for third-party
 * services. All three constants are read at runtime — if a value is an
 * empty string, the corresponding feature is silently disabled.
 */

/**
 * Calendly booking link for the "Book a 20-min intro" button.
 * Leave empty to hide the button.
 */
export const CALENDLY_URL =
  "https://calendly.com/martin-priessner-scisymbio/30min";

/**
 * Microsoft Clarity project ID for session recordings + heatmaps.
 *
 * TODO(user): Sign up at https://clarity.microsoft.com (free, no limits),
 * create a project for scisymbio.ai, and paste the project ID here
 * (short alphanumeric code, e.g. "abc123xyz").
 */
export const CLARITY_PROJECT_ID = "";

/**
 * Cloudflare Web Analytics token for privacy-friendly, cookieless analytics.
 *
 * TODO(user): Sign up at https://cloudflare.com (free), add scisymbio.ai in
 * the Web Analytics dashboard via "Manual setup", and paste the `token`
 * value from the snippet they show (a 32-char hex string).
 */
export const CLOUDFLARE_ANALYTICS_TOKEN = "";
