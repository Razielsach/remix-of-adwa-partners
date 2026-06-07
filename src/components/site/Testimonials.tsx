const T = [
  {
    quote: "A strategic partner we can rely on.",
    body: "Working with Adwa Partners gave us a completely new perspective on our challenges. Their insights were clear, practical, and helped us make confident decisions about our future strategy.",
    name: "Samuel B.",
    role: "Operations Director",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "Clear guidance and real results.",
    body: "Their structured approach helped us improve internal processes and align our teams around a clear plan. The results were visible within the first few months.",
    name: "Sarah T.",
    role: "Business Development Manager",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "Professional, insightful, and efficient.",
    body: "The team quickly understood our challenges and provided actionable recommendations that significantly improved our operational efficiency.",
    name: "Mulugeta K.",
    role: "Head of Strategy",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "Insightful and results-driven collaboration.",
    body: "Their team brought clarity to several complex challenges we were facing. The recommendations were practical and easy for our team to implement.",
    name: "Tirsit R.",
    role: "Head of Operations",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
];

export function Testimonials() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <span className="text-xs uppercase tracking-[0.22em] text-foreground/60">Reviews</span>
        <h2 className="mt-3 font-display text-4xl md:text-6xl max-w-3xl leading-[1.05]">
          Trusted by Forward-Thinking Companies
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {T.map((t) => (
            <article key={t.name} className="rounded-3xl bg-accent text-accent-foreground p-7">
              <h3 className="font-display text-2xl md:text-3xl">{t.quote}</h3>
              <p className="mt-5 text-sm text-accent-foreground/80">{t.body}</p>
              <div className="mt-8 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-accent-foreground/70">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}