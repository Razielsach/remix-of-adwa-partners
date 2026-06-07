import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { CTA } from "./CTA";
import { PageHeader } from "./PageHeader";

const CATEGORIES = [
  "All",
  "Growth",
  "Leadership",
  "Digital Transformation",
  "Operations",
  "Business Insights",
  "Strategy",
] as const;

type Category = (typeof CATEGORIES)[number];

const POSTS: { title: string; tag: Exclude<Category, "All">; image: string }[] = [
  {
    title: "How Strategic Planning Drives Long-Term Business Growth",
    tag: "Strategy",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Key Business Trends Shaping The Future Of Organizations",
    tag: "Business Insights",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Leadership Skills Every Modern Executive Needs",
    tag: "Leadership",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Why Digital Transformation Is Essential For Modern Businesses",
    tag: "Digital Transformation",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "How Process Optimization Improves Business Performance",
    tag: "Operations",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "5 Strategies That Help Businesses Scale Successfully",
    tag: "Growth",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Building Operational Resilience In Uncertain Markets",
    tag: "Operations",
    image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Leading Through Change: A Practical Playbook",
    tag: "Leadership",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "From Insight To Action: Translating Data Into Strategy",
    tag: "Business Insights",
    image: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=1000&q=80",
  },
];

const PAGE_SIZE = 6;

export function BlogPage() {
  const [active, setActive] = useState<Category>("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () => (active === "All" ? POSTS : POSTS.filter((p) => p.tag === active)),
    [active],
  );

  const shown = filtered.slice(0, visible);
  const canLoadMore = visible < filtered.length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <PageHeader eyebrow="Blog" title="Latest Insights" />

        {/* Category filter */}
        <section className="px-4 mt-10">
          <div className="mx-auto max-w-6xl">
            <div className="text-xs uppercase tracking-[0.22em] text-foreground/60">Category</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {CATEGORIES.map((c) => {
                const isActive = c === active;
                return (
                  <button
                    key={c}
                    onClick={() => {
                      setActive(c);
                      setVisible(PAGE_SIZE);
                    }}
                    className={`relative rounded-full px-4 py-2 text-xs font-medium transition ${
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-foreground/70 hover:bg-muted"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Posts grid */}
        <section className="px-4 mt-10 pb-20">
          <div className="mx-auto max-w-6xl">
            <motion.div layout className="grid gap-5 md:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {shown.map((p, i) => (
                  <motion.a
                    key={p.title}
                    href="#"
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4, delay: (i % PAGE_SIZE) * 0.05 }}
                    className="group relative rounded-3xl border border-border bg-card p-3 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex items-start justify-between gap-4 p-3">
                      <div className="flex-1">
                        <h3 className="font-display text-xl leading-snug">{p.title}</h3>
                        <span className="mt-4 inline-block rounded-full bg-secondary px-3 py-1 text-xs">
                          {p.tag}
                        </span>
                      </div>
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground transition-transform group-hover:rotate-45">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </motion.a>
                ))}
              </AnimatePresence>
            </motion.div>

            {filtered.length === 0 && (
              <div className="mt-16 text-center text-sm text-foreground/60">
                No posts in this category yet.
              </div>
            )}

            {canLoadMore && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground hover:opacity-90 transition"
                >
                  Load More
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </button>
              </div>
            )}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
