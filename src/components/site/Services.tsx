import { ArrowUpRight } from "lucide-react";
import illusHealth from "@/assets/services/illus-health.jpg";
import illusAli from "@/assets/services/illus-ali.jpg";
import illusInstitutional from "@/assets/services/illus-institutional.jpg";
import illusStrategy from "@/assets/services/illus-strategy.jpg";
import illusTalent from "@/assets/services/illus-talent.jpg";

const SERVICES = [
  {
    title: "Health Strategy & CPD",
    description:
      "Accredited and practical professional development programs for healthcare professionals and institutions.",
    image: illusHealth,
  },
  {
    title: "Adwa Leadership Institute (ALI)",
    description:
      "Leadership development, executive coaching, organizational development, and professional growth programs. TVET & workforce Readiness",
    image: illusAli,
  },
  {
    title: "Institutional Strengthening",
    description:
      "Embedded execution support, performance systems, dashboards, and capability transfer for organizations.",
    image: illusInstitutional,
  },
  {
    title: "Strategy & Advisory",
    description:
      "Feasibility studies, market research, due diligence, and institutional consulting services.",
    image: illusStrategy,
  },
  {
    title: "Talent & Global Pathways",
    description: "TNN, Fellowship & AI In Healthcare",
    image: illusTalent,
  },
];

export function Services() {
  return (
    <section id="services" className="px-4 pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-foreground/60">Services</span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl max-w-2xl leading-[1.05]">
              Practical Solutions
              <br /> For Modern Business
            </h2>
          </div>
          <a
            href="/services"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium hover:bg-muted transition"
          >
            All services →
          </a>
        </div>

        {/* Stackable sticky cards */}
        <div className="mt-12">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="sticky"
              style={{ top: `${96 + i * 28}px` }}
            >
              <article
                className="mt-6 grid gap-6 overflow-hidden rounded-[28px] border border-border p-5 md:grid-cols-2 md:p-7"
                style={{ backgroundColor: "#e8e3da", boxShadow: "0 20px 50px -30px rgba(31,42,36,0.35)" }}
              >
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-accent">
                      Adwa Partners
                    </span>
                    <h3 className="mt-4 font-display text-3xl md:text-4xl leading-tight max-w-md">
                      {s.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm md:text-base text-foreground/70">
                      {s.description}
                    </p>
                  </div>
                  <a
                    href="/contact"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-xs font-medium text-accent-foreground hover:opacity-90"
                  >
                    Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
                <div className="overflow-hidden rounded-2xl bg-[var(--brand-ivory)]">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="h-64 w-full object-contain p-6 md:h-full"
                  />
                </div>
              </article>
            </div>
          ))}
          {/* spacer so last card can settle */}
          <div className="h-20" />
        </div>
      </div>
    </section>
  );
}
