const POSTS = [
  {
    tag: "Strategy",
    title: "How Strategic Planning Drives Long-Term Business Growth",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
  },
  {
    tag: "Business Insights",
    title: "Key Business Trends Shaping The Future Of Organizations",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80",
  },
  {
    tag: "Leadership",
    title: "Leadership Skills Every Modern Executive Needs",
    image:
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1000&q=80",
  },
];

export function Insights() {
  return (
    <section id="insights" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <span className="text-xs uppercase tracking-[0.22em] text-foreground/60">Blog</span>
        <h2 className="mt-3 font-display text-4xl md:text-6xl">Latest Insights</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {POSTS.map((p) => (
            <a
              key={p.title}
              href="#"
              className="group rounded-2xl border border-border bg-card p-3 transition hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h3 className="font-display text-lg leading-snug">{p.title}</h3>
                <span className="mt-3 inline-block rounded-full bg-muted px-3 py-1 text-xs">
                  {p.tag}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}