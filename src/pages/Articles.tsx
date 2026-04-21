import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";

const Articles = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleJoinMission = () => {
    window.location.href = "mailto:contact@scisymbio.ai";
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation onJoinMission={handleJoinMission} />

      {/* Hero strip */}
      <section className="pt-40 pb-16 px-6 paper-texture">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="editorial-rule" />
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              Articles
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.05] mb-8">
            Notes from the{" "}
            <span className="italic text-accent">bench</span>.
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed font-light max-w-2xl">
            Essays and research on reproducibility, tacit knowledge, and the future of lab work.
          </p>
        </motion.div>
      </section>

      {/* Articles list */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="divide-y divide-border">
            {articles.map((article, i) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="py-10 first:pt-0"
              >
                <Link
                  to={`/articles/${article.slug}`}
                  className="group grid md:grid-cols-[1fr_auto] gap-6 items-start"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-3 text-xs uppercase tracking-[0.2em] text-foreground/50 font-semibold">
                      <span className="text-accent">{article.category}</span>
                      <span>·</span>
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readingTime}</span>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-light leading-tight mb-4 group-hover:text-accent smooth-transition">
                      {article.title}
                    </h2>
                    <p className="text-foreground/70 leading-relaxed font-light max-w-2xl">
                      {article.excerpt}
                    </p>
                    <p className="mt-4 text-sm text-foreground/60">
                      By <span className="font-medium text-foreground/80">{article.author}</span>
                    </p>
                  </div>
                  <ArrowUpRight
                    className="w-6 h-6 text-foreground/40 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 smooth-transition mt-1"
                    strokeWidth={1.5}
                  />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <div className="text-center pb-16">
        <Link to="/" className="text-sm text-foreground/60 hover:text-foreground smooth-transition">
          ← Back to home
        </Link>
      </div>

      <Footer />
    </main>
  );
};

export default Articles;
