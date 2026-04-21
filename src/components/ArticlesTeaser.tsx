import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";

const ArticlesTeaser = () => {
  const featured = articles.slice(0, 3);

  return (
    <section className="py-32 px-6 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="editorial-rule" />
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
                Articles
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05]">
              Notes from the <span className="italic text-accent">bench</span>.
            </h2>
          </div>

          <Link
            to="/articles"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent smooth-transition group self-start md:self-auto"
          >
            All articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 smooth-transition" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={`/articles/${article.slug}`}
                className="group block bg-card border border-border rounded-2xl p-8 h-full hover:border-accent hover:-translate-y-1 smooth-transition subtle-shadow"
              >
                <div className="flex items-center gap-3 mb-5 text-xs uppercase tracking-[0.2em] text-foreground/50 font-semibold">
                  <span className="text-accent">{article.category}</span>
                  <span>·</span>
                  <span>{article.readingTime}</span>
                </div>

                <h3 className="font-display text-2xl font-light leading-tight mb-4 group-hover:text-accent smooth-transition">
                  {article.title}
                </h3>

                <p className="text-foreground/70 leading-relaxed font-light mb-6 text-sm">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-5 border-t border-border/60">
                  <span className="text-xs text-foreground/60">{article.date}</span>
                  <ArrowUpRight
                    className="w-5 h-5 text-foreground/40 group-hover:text-accent smooth-transition"
                    strokeWidth={1.5}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesTeaser;
