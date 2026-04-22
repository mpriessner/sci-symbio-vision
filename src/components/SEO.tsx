import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.scisymbio.ai";
const SITE_NAME = "SciSymbio";
const DEFAULT_TITLE = "SciSymbio — The intelligent lab companion";
const DEFAULT_DESCRIPTION =
  "SciSymbio is the voice- and vision-native AI companion for the wet lab. We solve the $28B research-reproducibility crisis by capturing what happens at the bench — automatically, faithfully, and audit-ready.";
const DEFAULT_OG_IMAGE = `${SITE_URL}/SciSymbio_Logo.png`;

export interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  article?: {
    publishedTime?: string;
    author?: string;
    section?: string;
  };
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
  noIndex?: boolean;
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  description: DEFAULT_DESCRIPTION,
  sameAs: ["https://www.linkedin.com/company/scisymbio"],
};

const SEO = ({
  title,
  description,
  path = "",
  image,
  type = "website",
  article,
  structuredData,
  noIndex,
}: SEOProps) => {
  const fullTitle = title ? `${title} · ${SITE_NAME}` : DEFAULT_TITLE;
  const metaDescription = description ?? DEFAULT_DESCRIPTION;
  const canonical = `${SITE_URL}${path}`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  const extras = Array.isArray(structuredData)
    ? structuredData
    : structuredData
    ? [structuredData]
    : [];
  const schemas = [organizationSchema, ...extras];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.author && <meta property="article:author" content={article.author} />}
      {article?.section && <meta property="article:section" content={article.section} />}

      <script type="application/ld+json">
        {JSON.stringify(schemas.length === 1 ? schemas[0] : schemas)}
      </script>
    </Helmet>
  );
};

export default SEO;
