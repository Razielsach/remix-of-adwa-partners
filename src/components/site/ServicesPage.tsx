import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Compass,
  Globe2,
  Sparkles,
} from "lucide-react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { CTA } from "./CTA";
import { SlideTabs } from "@/components/ui/slide-tabs";
import { ProgramCard } from "./ProgramCard";
import talentTnn from "@/assets/learning/talent-tnn.jpg";
import talentFellowship from "@/assets/learning/talent-fellowship.jpg";
import talentAiHealth from "@/assets/learning/talent-ai-health.jpg";

const SECTIONS = [
  { id: "institutional", label: "Institutional Strengthening" },
  { id: "advisory", label: "Strategy & Advisory" },
  { id: "talent", label: "Talent & Global Pathways" },
];

// Health & ALI data moved to LearningPage

const INSTITUTIONAL_SERVICES = [
  "Organizational Assessments",
  "Embedded Execution Support",
  "KPI & Performance Dashboards",
  "SOP & Playbook Development",
  "Capability Transfer Programs",
  "Governance Support",
  "Institutional Performance Improvement",
];

const ADVISORY_SERVICES = [
  "Feasibility Studies",
  "Market Research",
  "Due Diligence",
  "Hospital Consultancy",
  "Organizational Strategy",
  "Sector Advisory",
  "Performance Reviews",
  "Partnership Assessments",
];

const TALENT_PROGRAMS = [
  {
    name: "TNN",
    eyebrow: "Global Pathways",
    tagline: "Global academic & career pathways",
    description:
      "For students and professionals pursuing international opportunities — undergraduate, MPH/Masters, PhD, USMLE & residency, fellowships, and other graduate pathways.",
    bullets: [
      "Personalized mentorship",
      "Strategic application support",
      "Career planning & interview prep",
      "Document development",
    ],
    image: talentTnn,
  },
  {
    name: "Fellowship Program",
    eyebrow: "Leadership Pipeline",
    tagline: "High-potential leadership development",
    description:
      "Identifies and develops high-potential professionals through leadership development, mentorship, and collaborative projects across healthcare, education, and organizational transformation.",
    bullets: [
      "Leadership development",
      "Mentorship & coaching",
      "Practical learning experiences",
      "Cross-sector collaborative projects",
    ],
    image: talentFellowship,
  },
  {
    name: "AI in Healthcare Initiative",
    eyebrow: "Health × Technology",
    tagline: "Healthcare × technology × leadership",
    description:
      "A platform for future-focused healthcare innovation — exploring how AI can improve healthcare systems, education, decision-making, and service delivery across Ethiopia and beyond.",
    bullets: [
      "Training & capacity building",
      "Applied research",
      "Strategic partnerships",
      "Decision-support innovation",
    ],
    image: talentAiHealth,
  },
];

// Distinct color theme per section (forest / gold / graphite / ivory rotation)
type Theme = {
  band: string; // section background
  text: string; // section text
  eyebrow: string;
  iconBg: string;
  cardBgs: string[]; // rotating card backgrounds
  cardText: string;
  cardSubtle: string;
  checkColor: string;
  chipBg: string;
  chipText: string;
};

const THEMES: Record<string, Theme> = {
  health: {
    band: "bg-[var(--brand-ivory)]",
    text: "text-[var(--brand-graphite)]",
    eyebrow: "text-[var(--brand-forest)]",
    iconBg: "bg-[var(--brand-forest)] text-[var(--brand-ivory)]",
    cardBgs: [
      "bg-[var(--brand-forest)] text-[var(--brand-ivory)]",
      "bg-[var(--brand-ivory-deep)] text-[var(--brand-graphite)]",
      "bg-[var(--brand-graphite)] text-[var(--brand-ivory)]",
      "bg-[var(--brand-gold)] text-[var(--brand-graphite)]",
    ],
    cardText: "",
    cardSubtle: "opacity-80",
    checkColor: "text-current",
    chipBg: "bg-white/15",
    chipText: "text-current",
  },
  ali: {
    band: "bg-[var(--brand-forest)]",
    text: "text-[var(--brand-ivory)]",
    eyebrow: "text-[var(--brand-gold)]",
    iconBg: "bg-[var(--brand-gold)] text-[var(--brand-graphite)]",
    cardBgs: [
      "bg-[var(--brand-ivory)] text-[var(--brand-graphite)]",
      "bg-[var(--brand-gold)] text-[var(--brand-graphite)]",
      "bg-[var(--brand-ivory-deep)] text-[var(--brand-graphite)]",
      "bg-[var(--brand-graphite)] text-[var(--brand-ivory)]",
    ],
    cardText: "",
    cardSubtle: "opacity-70",
    checkColor: "text-[var(--brand-forest)]",
    chipBg: "bg-[var(--brand-gold)]/20",
    chipText: "text-[var(--brand-ivory)]",
  },
  institutional: {
    band: "bg-[var(--brand-graphite)]",
    text: "text-[var(--brand-ivory)]",
    eyebrow: "text-[var(--brand-gold)]",
    iconBg: "bg-[var(--brand-ivory)] text-[var(--brand-graphite)]",
    cardBgs: ["bg-[var(--brand-ivory)] text-[var(--brand-graphite)]"],
    cardText: "",
    cardSubtle: "opacity-70",
    checkColor: "text-[var(--brand-forest)]",
    chipBg: "bg-[var(--brand-gold)] text-[var(--brand-graphite)]",
    chipText: "",
  },
  advisory: {
    band: "bg-[var(--brand-gold)]",
    text: "text-[var(--brand-graphite)]",
    eyebrow: "text-[var(--brand-forest)]",
    iconBg: "bg-[var(--brand-forest)] text-[var(--brand-ivory)]",
    cardBgs: ["bg-[var(--brand-ivory)] text-[var(--brand-graphite)]"],
    cardText: "",
    cardSubtle: "opacity-70",
    checkColor: "text-[var(--brand-forest)]",
    chipBg: "bg-[var(--brand-graphite)] text-[var(--brand-ivory)]",
    chipText: "",
  },
  talent: {
    band: "bg-[var(--brand-ivory-deep)]",
    text: "text-[var(--brand-graphite)]",
    eyebrow: "text-[var(--brand-forest)]",
    iconBg: "bg-[var(--brand-forest)] text-[var(--brand-ivory)]",
    cardBgs: [
      "bg-[var(--brand-forest)] text-[var(--brand-ivory)]",
      "bg-[var(--brand-gold)] text-[var(--brand-graphite)]",
      "bg-[var(--brand-graphite)] text-[var(--brand-ivory)]",
    ],
    cardText: "",
    cardSubtle: "opacity-80",
    checkColor: "text-current",
    chipBg: "bg-white/15",
    chipText: "text-current",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function SectionHeader({
  number,
  eyebrow,
  title,
  tagline,
  icon: Icon,
  theme,
}: {
  number: string;
  eyebrow: string;
  title: string;
  tagline?: string;
  icon: React.ComponentType<{ className?: string }>;
  theme: Theme;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.55 }}
      className="max-w-3xl"
    >
      <div className="flex items-center gap-3">
        <span className={`grid h-11 w-11 place-items-center rounded-full ${theme.iconBg}`}>
          <Icon className="h-5 w-5" />
        </span>
        <span className={`text-xs uppercase tracking-[0.24em] font-semibold ${theme.eyebrow}`}>
          {number} — {eyebrow}
        </span>
      </div>
      <h2 className={`mt-5 font-display text-4xl md:text-6xl leading-[1.05] ${theme.text}`}>
        {title}
      </h2>
      {tagline && (
        <p className={`mt-4 text-base md:text-lg ${theme.text} opacity-80`}>{tagline}</p>
      )}
    </motion.div>
  );
}

function ColoredCard({
  className,
  style,
  children,
  delay = 0,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-3xl p-6 md:p-7 shadow-[0_18px_40px_-28px_rgba(31,42,36,0.45)] ${className ?? ""}`}
      style={style}
    >
      {children}
    </motion.article>
  );
}

export function ServicesPage() {
  const [selected, setSelected] = useState(0);

  const handleSelect = (i: number) => {
    setSelected(i);
    const target = document.getElementById(SECTIONS[i].id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        {/* HERO — animated split */}
        <ServicesHero />


        {/* Sticky SlideTabs nav */}
        <section className="px-4 mt-14 md:mt-20">
          <div className="sticky top-20 z-30 flex justify-center">
            <SlideTabs
              tabs={SECTIONS.map((s) => s.label)}
              selected={selected}
              onSelect={handleSelect}
              className="shadow-[0_10px_30px_-15px_rgba(31,42,36,0.35)] backdrop-blur"
            />
          </div>
        </section>


        {/* Health Strategy & CPD and Adwa Leadership Institute moved to /services/learning */}

        {/* 3. INSTITUTIONAL */}
        <Band id="institutional" theme={THEMES.institutional}>
          <SectionHeader
            number="01"
            eyebrow="Institutions"
            title="Institutional Strengthening"
            tagline="Embedded support focused on execution, systems improvement, and sustainable performance."
            icon={Building2}
            theme={THEMES.institutional}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-[1fr_1.2fr] items-start">
            <ColoredCard className="bg-[var(--brand-forest)] text-[var(--brand-ivory)]">
              <p className="text-sm md:text-base leading-relaxed">
                We work alongside leadership teams to improve how organizations operate day to day —
                from governance and SOPs to performance dashboards and capability transfer — so
                improvements stick long after the engagement ends.
              </p>
            </ColoredCard>
            <div className="flex flex-wrap gap-2.5">
              {INSTITUTIONAL_SERVICES.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className={`rounded-full px-4 py-2 text-sm ${
                    i % 3 === 0
                      ? "bg-[var(--brand-gold)] text-[var(--brand-graphite)]"
                      : i % 3 === 1
                        ? "bg-[var(--brand-ivory)] text-[var(--brand-graphite)]"
                        : "bg-[var(--brand-forest)] text-[var(--brand-ivory)] ring-1 ring-[var(--brand-ivory)]/20"
                  }`}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </Band>

        {/* 4. ADVISORY */}
        <Band id="advisory" theme={THEMES.advisory}>
          <SectionHeader
            number="02"
            eyebrow="Advisory"
            title="Strategy & Advisory"
            tagline="Research-driven advisory supporting growth, investment decisions, and strategic planning."
            icon={Compass}
            theme={THEMES.advisory}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-[1.2fr_1fr] items-start">
            <div className="flex flex-wrap gap-2.5">
              {ADVISORY_SERVICES.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className={`rounded-full px-4 py-2 text-sm ${
                    i % 3 === 0
                      ? "bg-[var(--brand-forest)] text-[var(--brand-ivory)]"
                      : i % 3 === 1
                        ? "bg-[var(--brand-graphite)] text-[var(--brand-ivory)]"
                        : "bg-[var(--brand-ivory)] text-[var(--brand-graphite)]"
                  }`}
                >
                  {s}
                </motion.span>
              ))}
            </div>
            <ColoredCard className="bg-[var(--brand-graphite)] text-[var(--brand-ivory)]">
              <p className="text-sm md:text-base leading-relaxed">
                From feasibility and due diligence to sector and partnership reviews, our advisory
                work blends rigorous research with on-the-ground sector understanding — equipping
                clients to make confident, evidence-based decisions.
              </p>
            </ColoredCard>
          </div>
        </Band>

        {/* 5. TALENT */}
        <Band id="talent" theme={THEMES.talent}>
          <SectionHeader
            number="03"
            eyebrow="Talent"
            title="Talent & Global Pathways"
            tagline="Building talent, expanding global opportunities, and preparing future leaders."
            icon={Globe2}
            theme={THEMES.talent}
          />

          <p className="mt-8 max-w-3xl text-sm md:text-base text-[var(--brand-graphite)]/80 leading-relaxed">
            Through structured learning, mentorship, innovation, and professional development, we
            help individuals and organizations access global standards while staying grounded in
            local context.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TALENT_PROGRAMS.map((p, i) => (
              <ProgramCard
                key={p.name}
                eyebrow={p.eyebrow}
                title={p.name}
                audience={p.tagline}
                description={p.description}
                bullets={p.bullets}
                image={p.image}
                delay={i * 0.05}
              />
            ))}
          </div>


          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mt-10 rounded-[32px] bg-[var(--brand-graphite)] text-[var(--brand-ivory)] p-8 md:p-12 grid gap-8 md:grid-cols-[1fr_1.4fr] items-center"
          >
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-[var(--brand-gold)]">
                Projects & Impact
              </div>
              <div className="mt-4 font-display text-6xl md:text-7xl leading-none text-[var(--brand-gold)]">
                100%
              </div>
              <div className="mt-3 text-sm opacity-80">Placement & acceptance rate via TNN</div>
            </div>
            <p className="text-base md:text-lg leading-relaxed opacity-90">
              The students and professionals we've guided through TNN are now pursuing opportunities
              in strong academic and professional environments across multiple international
              pathways — a track record we continue to build with every cohort.
            </p>
          </motion.div>

          <div className="mt-10 flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-forest)] px-5 py-3 text-sm font-medium text-[var(--brand-ivory)] hover:opacity-90 transition"
            >
              Explore working with us
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Band>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Band({
  id,
  theme,
  children,
}: {
  id: string;
  theme: Theme;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="px-4 pt-16 md:pt-20 scroll-mt-32">
      <div className="mx-auto max-w-6xl">
        <div className={`rounded-[36px] ${theme.band} ${theme.text} p-6 md:p-12`}>{children}</div>
      </div>
    </section>
  );
}

function ServicesHero() {
  return (
    <section className="relative px-4 pt-24 md:pt-28 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[28px] md:rounded-[36px] bg-[var(--brand-ivory-deep)] shadow-[0_30px_60px_-30px_rgba(31,42,36,0.35)]">
          <div className="grid gap-10 md:grid-cols-2 items-center p-8 md:p-14 lg:p-20 min-h-[520px]">
            {/* LEFT — title */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-forest)]/30 bg-white/50 px-4 py-1.5 text-[10px] uppercase tracking-[0.28em] text-[var(--brand-forest)] backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-forest)]" /> What we do
              </span>
              <h1 className="mt-6 font-display text-[68px] leading-[0.92] tracking-tight text-[var(--brand-graphite)] md:text-[112px] lg:text-[136px]">
                Services
              </h1>
              <p className="mt-6 max-w-md text-base md:text-lg text-[var(--brand-graphite)]/75 leading-relaxed">
                Practical, measurable solutions across health, leadership, institutions, advisory,
                and global talent — engineered for execution.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#institutional"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-forest)] px-5 py-3 text-xs md:text-sm font-medium uppercase tracking-wider text-[var(--brand-ivory)] hover:opacity-90 transition"
                >
                  Explore services <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-forest)]/30 bg-white/60 px-5 py-3 text-xs md:text-sm font-medium uppercase tracking-wider text-[var(--brand-forest)] hover:bg-white transition"
                >
                  Book a call
                </a>
              </div>
            </motion.div>

            {/* RIGHT — animated shapes */}
            <HeroPattern />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroPattern() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* Concentric rings */}
      <svg
        viewBox="0 0 500 500"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <radialGradient id="hero-fade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--brand-forest)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--brand-forest)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="250" cy="250" r="240" fill="url(#hero-fade)" />
        {[220, 180, 140, 100, 60].map((r, i) => (
          <motion.circle
            key={r}
            cx="250"
            cy="250"
            r={r}
            fill="none"
            stroke="var(--brand-forest)"
            strokeOpacity={0.18 + i * 0.05}
            strokeWidth={1}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.2 + i * 0.12, ease: "easeOut" }}
          />
        ))}
        {/* radial ticks */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i / 24) * Math.PI * 2;
          const x1 = 250 + Math.cos(angle) * 235;
          const y1 = 250 + Math.sin(angle) * 235;
          const x2 = 250 + Math.cos(angle) * 245;
          const y2 = 250 + Math.sin(angle) * 245;
          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="var(--brand-graphite)"
              strokeOpacity={0.4}
              strokeWidth={1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.02 }}
            />
          );
        })}
      </svg>

      {/* Rotating dashed ring */}
      <motion.div
        className="absolute inset-[6%] rounded-full border border-dashed border-[var(--brand-forest)]/40"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--brand-gold)] shadow-[0_0_0_4px_rgba(201,168,76,0.2)]" />
        <span className="absolute top-1/2 -right-1.5 h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--brand-forest)]" />
        <span className="absolute -bottom-1 left-[20%] h-2 w-2 rounded-full bg-[var(--brand-graphite)]" />
      </motion.div>

      {/* Counter-rotating inner ring */}
      <motion.div
        className="absolute inset-[22%] rounded-full border border-[var(--brand-graphite)]/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute top-1/2 -left-1 h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--brand-forest)]" />
      </motion.div>

      {/* Center pill */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="flex flex-col items-center gap-3 rounded-3xl bg-[var(--brand-forest)] px-8 py-6 text-center shadow-[0_30px_60px_-20px_rgba(31,42,36,0.45)]">
          <Sparkles className="h-5 w-5 text-[var(--brand-gold)]" />
          <div className="font-display text-xl text-[var(--brand-ivory)] leading-tight">
            Five
            <br />
            Practices
          </div>
        </div>
      </motion.div>

      {/* Floating chips */}
      {[
        { label: "Health", className: "top-[4%] left-[6%]", delay: 0.4 },
        { label: "Leadership", className: "top-[12%] right-[2%]", delay: 0.6 },
        { label: "Advisory", className: "bottom-[10%] left-[2%]", delay: 0.8 },
        { label: "Talent", className: "bottom-[4%] right-[10%]", delay: 1.0 },
      ].map((chip) => (
        <motion.span
          key={chip.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: chip.delay },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: chip.delay },
          }}
          className={`absolute ${chip.className} rounded-full bg-white/90 px-3 py-1.5 text-[11px] uppercase tracking-widest text-[var(--brand-graphite)] shadow-[0_10px_25px_-12px_rgba(31,42,36,0.45)] backdrop-blur`}
        >
          {chip.label}
        </motion.span>
      ))}
    </div>
  );
}

