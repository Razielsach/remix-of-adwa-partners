const BENEFITS = [
  { n: "01", title: "Strategic Clarity", body: "We help businesses understand complex challenges and develop clear strategies that support confident decision-making." },
  { n: "02", title: "Practical Solutions", body: "Our recommendations are grounded in real business experience, ensuring ideas can be implemented effectively." },
  { n: "03", title: "Measurable Results", body: "Every engagement focuses on outcomes that improve performance, efficiency, and long-term growth." },
  { n: "04", title: "Collaborative Approach", body: "We work closely with your team, creating solutions that align with your goals and internal processes." },
  { n: "05", title: "Industry Expertise", body: "Our experience across multiple industries allows us to bring valuable insights and proven methods." },
  { n: "06", title: "Long-Term Value", body: "We focus on sustainable improvements that continue delivering benefits long after the project is complete." },
];

export function WhyUs() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl rounded-[32px] bg-secondary p-6 md:p-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-foreground/60">Benefits</span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl leading-[1.05]">
              Why Businesses
              <br /> Choose Us
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-xs font-medium text-accent-foreground hover:opacity-90"
          >
            Book a consultation →
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {BENEFITS.map((b) => (
            <div
              key={b.n}
              className="rounded-2xl border border-white/30 bg-white/15 p-6 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(31,42,36,0.18)] ring-1 ring-white/10 transition hover:bg-white/25 hover:border-white/40"
            >
              <div className="text-xs text-foreground/50">{b.n}</div>
              <h3 className="mt-3 font-display text-2xl text-foreground">{b.title}</h3>
              <p className="mt-3 text-sm text-foreground/70">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}