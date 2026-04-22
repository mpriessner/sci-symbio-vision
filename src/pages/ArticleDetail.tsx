import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getArticleBySlug } from "@/data/articles";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  const handleJoinMission = () => {
    window.location.href = "mailto:contact@scisymbio.ai";
  };

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: { "@type": "Person", name: article.author },
    datePublished: article.date,
    articleSection: article.category,
    mainEntityOfPage: `https://www.scisymbio.ai/articles/${article.slug}`,
    publisher: {
      "@type": "Organization",
      name: "SciSymbio",
      logo: {
        "@type": "ImageObject",
        url: "https://www.scisymbio.ai/SciSymbio_Logo.png",
      },
    },
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title={article.title}
        description={article.excerpt}
        path={`/articles/${article.slug}`}
        image={`https://www.scisymbio.ai/og/${article.slug}.png`}
        type="article"
        article={{
          publishedTime: article.date,
          author: article.author,
          section: article.category,
        }}
        structuredData={articleSchema}
      />
      <Navigation onJoinMission={handleJoinMission} />

      <article className="pt-28 pb-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground smooth-transition mb-10"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.75} />
            All articles
          </Link>

          <div className="rounded-xl overflow-hidden mb-10 shadow-lg border border-border/50">
            <img
              src={`/articles-hero/${article.slug}.png`}
              alt={`${article.category} — ${article.title}`}
              width={1600}
              height={800}
              className="w-full h-auto block"
              loading="eager"
            />
          </div>

          <div className="flex items-center gap-4 mb-6 text-xs uppercase tracking-[0.2em] text-foreground/50 font-semibold">
            <span className="text-accent">{article.category}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readingTime}</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-light leading-[1.05] mb-8">
            {article.title}
          </h1>

          <p className="font-display italic text-xl md:text-2xl text-foreground/80 leading-relaxed mb-10 border-l-2 border-accent pl-6">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-3 text-sm text-foreground/60 mb-12 pb-10 border-b border-border">
            By <span className="font-medium text-foreground">{article.author}</span>
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            {article.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-foreground/80 leading-relaxed text-lg font-light"
              >
                {p}
              </p>
            ))}
          </div>

          {article.references && article.references.length > 0 && (
            <section className="mt-16 pt-10 border-t border-border">
              <h2 className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-6">
                References
              </h2>
              <ol className="space-y-4 list-decimal list-outside ml-5">
                {article.references.map((ref, i) => (
                  <li key={i} className="text-sm text-foreground/70 leading-relaxed">
                    <span className="font-medium text-foreground">{ref.authors}</span>{" "}
                    ({ref.year}). {ref.title}.{" "}
                    <span className="italic">{ref.publication}</span>.{" "}
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline break-words"
                    >
                      {ref.url}
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <div className="mt-20 pt-10 border-t border-border">
            <p className="font-display italic text-center text-foreground/50 text-lg">
              More essays coming soon.
            </p>
          </div>
        </motion.div>
      </article>

      <Footer />
    </main>
  );
};

export default ArticleDetail;
