import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, MouseEvent } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";

const ArticleCard = ({ article, index }: { article: typeof articles[0]; index: number }) => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-50, 50], [6, -6]);
  const rotateY = useTransform(mx, [-50, 50], [-6, 6]);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left - rect.width / 2);
    my.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className="relative"
    >
      <Link
        to={`/articles/${article.slug}`}
        className="group block bg-card border border-border rounded-2xl p-8 h-full hover:border-accent smooth-transition subtle-shadow relative overflow-hidden"
      >
        {/* hover glow */}
        <div
          className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 smooth-transition pointer-events-none"
          style={{
            background:
              "radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), hsla(182, 79%, 22%, 0.08), transparent 40%)",
          }}
        />

        <div className="relative">
          <div className="rounded-lg overflow-hidden mb-6 aspect-[2/1] border border-border/60">
            <img
              src={`/articles-hero/${article.slug}.png`}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover group-hover:scale-[1.03] smooth-transition"
              loading="lazy"
            />
          </div>

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
              className="w-5 h-5 text-foreground/40 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 smooth-transition"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ArticlesTeaser = () => {
  const featured = articles.slice(0, 3);

  return (
    <section className="py-32 px-6 bg-secondary/40 relative">
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
            <ArticleCard key={article.slug} article={article} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesTeaser;
