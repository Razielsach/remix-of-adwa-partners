import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  GraduationCap,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { CTA } from "./CTA";
import { SlideTabs } from "@/components/ui/slide-tabs";
import { ProgramCard } from "./ProgramCard";
import healthClinical from "@/assets/learning/health-clinical.jpg";
import healthResearch from "@/assets/learning/health-research.jpg";
import healthLeaders from "@/assets/learning/health-leaders.jpg";
import healthMonitoring from "@/assets/learning/health-monitoring.jpg";
import aliExecutive from "@/assets/learning/ali-executive.jpg";
import aliOperational from "@/assets/learning/ali-operational.jpg";
import aliEmerging from "@/assets/learning/ali-emerging.jpg";
import aliTvet from "@/assets/learning/ali-tvet.jpg";

const SECTIONS = [
  { id: "health", label: "Health Strategy & CPD" },
  { id: "ali", label: "Adwa Leadership Institute (ALI)" },
];

const HEALTH_AREAS = [
  {
    eyebrow: "Clinical Excellence",
    title: "Accredited Clinical Skills & Webinars",
    description:
      "Practical, accredited CPD training delivered through in-person workshops and webinars to strengthen clinical skills, emergency response, and patient care.",
    programs: [
      "BLS & ACLS Training",
      "Patient Assessment & Clinical Decision-Making",
      "POCUS & Basic Echocardiography",
      "Emergency & Critical Care Skills",
      "Clinical CPD Workshops & Webinars",
    ],
    image: healthClinical,
  },
  {
    eyebrow: "Research & Evidence",
    title: "Research, Epidemiology & Scientific Capacity",
    description:
      "Strengthening research, analytical, and evidence-generation capacity for healthcare professionals and institutions.",
    programs: [
      "Research Methodology & Scientific Writing",
      "Epidemiology & Biostatistics",
      "Implementation & Health Systems Research",
      "Data Interpretation & Research Design",
    ],
    image: healthResearch,
  },
  {
    eyebrow: "Health Leadership",
    title: "Building the Next Generation of Health Leaders",
    description:
      "Developing healthcare leaders through leadership, innovation, and systems-focused professional development.",
    programs: [
      "Healthcare Leadership Development",
      "Strategic Thinking & Decision-Making",
      "Innovation & Change Management",
      "Health Systems & Collaboration Workshops",
    ],
    image: healthLeaders,
  },
  {
    eyebrow: "M&E and Learning",
    title: "Monitoring, Evaluation & Program Implementation",
    description:
      "Supporting organizations with program design, implementation, monitoring, and data-driven improvement systems.",
    programs: [
      "Monitoring, Evaluation & Quality Improvement",
      "Program Design & Implementation Support",
      "Health Program Strategy & Operations",
      "Survey Design & Data Analytics",
    ],
    image: healthMonitoring,
  },
];

const ALI_TIERS = [
  {
    eyebrow: "Tier 01 — Executive",
    name: "Executive Accelerator",
    audience: "C-suite, senior leaders, directors and managers",
    description:
      "Strategic leadership, organizational transformation, executive decision-making, innovation, and systems thinking for high-level leadership effectiveness.",
    focus: [
      "Strategic leadership",
      "Organizational transformation",
      "Executive decision-making",
      "Innovation & systems thinking",
    ],
    image: aliExecutive,
  },
  {
    eyebrow: "Tier 02 — Operational",
    name: "Operational Excellence",
    audience: "Middle managers, supervisors, and operational leaders",
    description:
      "Translating strategy into execution through hands-on management capability and accountability systems.",
    focus: [
      "Team leadership",
      "Operational management",
      "Performance improvement",
      "Project execution",
      "Accountability systems",
    ],
    image: aliOperational,
  },
  {
    eyebrow: "Tier 03 — Emerging",
    name: "Emerging Leader Program",
    audience: "High-potential professionals and early-career talent",
    description:
      "Preparing future leaders with the foundations and confidence to take on responsibility and grow into leadership roles.",
    focus: [
      "Leadership foundations",
      "Professional development",
      "Communication & presentation",
      "Collaboration & teamwork",
      "Career growth readiness",
    ],
    image: aliEmerging,
  },
  {
    eyebrow: "Pathway — Workforce",
    name: "TVET Bridge & Workforce Readiness",
    audience: "Workforce readiness pathway across sectors",
    description:
      "A formal workforce readiness pathway strengthening the connection between vocational training, employability, and long-term professional growth.",
    focus: [
      "Administrative capability",
      "Workplace professionalism",
      "Customer handling & communication",
      "Digital literacy",
      "Supervisory & coordination skills",
    ],
    image: aliTvet,
  },
];

const ALI_DELIVERY = [
  "Competency-based curriculum design",
  "Trainer productivity and facilitation programs",
  "Workforce readiness bootcamps",
  "Apprenticeship and placement support",
  "Institutional partnership programs",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};


export function LearningPage() {
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
        {/* HERO */}
        <section className="relative px-4 pt-24 md:pt-28 overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[28px] md:rounded-[36px] bg-[var(--brand-ivory-deep)] shadow-[0_30px_60px_-30px_rgba(31,42,36,0.35)] p-8 md:p-14 lg:p-20">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-3xl"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-forest)]/30 bg-white/50 px-4 py-1.5 text-[10px] uppercase tracking-[0.28em] text-[var(--brand-forest)] backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-forest)]" /> Learning & Trainings
                </span>
                <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-[var(--brand-graphite)]">
                  Learning & Trainings
                </h1>
                <p className="mt-6 max-w-xl text-base md:text-lg text-[var(--brand-graphite)]/75 leading-relaxed">
                  Accredited CPD for healthcare professionals and structured
                  leadership programs that build capability across every stage of growth.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#health"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-forest)] px-5 py-3 text-xs md:text-sm font-medium uppercase tracking-wider text-[var(--brand-ivory)] hover:opacity-90 transition"
                  >
                    Explore programs <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-forest)]/30 bg-white/60 px-5 py-3 text-xs md:text-sm font-medium uppercase tracking-wider text-[var(--brand-forest)] hover:bg-white transition"
                  >
                    Book a call
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sticky tabs */}
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

        {/* HEALTH */}
        <section id="health" className="px-4 pt-16 md:pt-20 scroll-mt-32">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[36px] bg-[var(--brand-ivory)] text-[var(--brand-graphite)] p-6 md:p-12">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                transition={{ duration: 0.55 }}
                className="max-w-3xl"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--brand-forest)] text-[var(--brand-ivory)]">
                    <Stethoscope className="h-5 w-5" />
                  </span>
                  <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[var(--brand-forest)]">
                    01 — Health
                  </span>
                </div>
                <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05]">
                  Health Strategy & CPD
                </h2>
                <p className="mt-4 text-base md:text-lg opacity-80">
                  Advancing healthcare through practical learning and system-level impact.
                </p>
              </motion.div>

              <div className="mt-12 grid gap-6 md:grid-cols-[1.4fr_1fr]">
                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                  className="rounded-3xl bg-white/70 backdrop-blur p-6 md:p-7 text-[var(--brand-graphite)] shadow-[0_18px_40px_-28px_rgba(31,42,36,0.45)]"
                >
                  <div className="space-y-4 text-sm md:text-base leading-relaxed">
                    <p>
                      At Adwa Partners, PLC we believe strengthening healthcare systems begins with
                      strengthening healthcare professionals. Our Health Strategy & CPD division bridges
                      the gap between knowledge, practice, and implementation through workplace-relevant
                      learning tailored to Ethiopia's evolving healthcare landscape.
                    </p>
                    <p>
                      We combine expertise in public health, clinical practice, research, and program
                      implementation with strong partnerships across hospitals, associations, academia,
                      NGOs, and the private sector.
                    </p>
                  </div>
                </motion.article>
                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="rounded-3xl bg-[var(--brand-graphite)] text-[var(--brand-ivory)] p-6 md:p-7 shadow-[0_18px_40px_-28px_rgba(31,42,36,0.45)]"
                >
                  <div className="text-xs uppercase tracking-[0.22em] text-[var(--brand-gold)]">
                    Pillars
                  </div>
                  <ul className="mt-5 space-y-4 text-sm">
                    {[
                      { k: "Accredited CPD", v: "Workshops & webinars" },
                      { k: "Research capacity", v: "Methods, stats, writing" },
                      { k: "Health leadership", v: "Systems-focused growth" },
                      { k: "M&E and learning", v: "Implementation support" },
                    ].map((p) => (
                      <li
                        key={p.k}
                        className="flex items-start justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0"
                      >
                        <span className="font-display text-base">{p.k}</span>
                        <span className="opacity-70 text-right">{p.v}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              </div>

              <div className="mt-14">
                <h3 className="font-display text-2xl md:text-3xl">Our Areas of Focus</h3>
                <p className="mt-2 text-sm md:text-base text-[var(--brand-graphite)]/65 max-w-2xl">
                  Practical programs designed to strengthen clinical practice, research,
                  leadership, and implementation across the health system.
                </p>
                <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {HEALTH_AREAS.map((a, i) => (
                    <ProgramCard
                      key={a.title}
                      eyebrow={a.eyebrow}
                      title={a.title}
                      description={a.description}
                      bullets={a.programs}
                      image={a.image}
                      delay={i * 0.05}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ALI */}
        <section id="ali" className="px-4 pt-16 md:pt-20 scroll-mt-32">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[36px] bg-[var(--brand-ivory)] text-[var(--brand-graphite)] p-6 md:p-12">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                transition={{ duration: 0.55 }}
                className="max-w-3xl"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--brand-forest)] text-[var(--brand-ivory)]">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[var(--brand-forest)]">
                    02 — Flagship
                  </span>
                </div>
                <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05]">
                  Adwa Leadership Institute (ALI)
                </h2>
                <p className="mt-4 text-base md:text-lg opacity-80">
                  Developing leaders. Strengthening organizations. Building workforce readiness.
                </p>
              </motion.div>

              <div className="mt-10 text-sm md:text-base leading-relaxed text-[var(--brand-graphite)]/85">
                <p>
                  Adwa Leadership Institute (ALI) is the flagship leadership, professional development, and organizational development platform of Adwa Partners, PLC. ALI is established to equip executives, managers, emerging professionals, and institutional teams with the practical leadership, operational, and workforce capabilities required to lead in rapidly evolving environments.
                </p>
                <p className="mt-4">
                  ALI is one of the core identities of Adwa Partners, PLC and serves as a central platform for leadership transformation, executive learning, workforce readiness, and institutional capacity building across sectors.
                </p>
                <p className="mt-4">
                  Through structured learning pathways, coaching, organizational support, and workforce development programs, ALI combines practical execution with long-term leadership growth.
                </p>
              </div>

              <div className="mt-12">
                <h3 className="font-display text-2xl md:text-3xl">
                  Leadership Development Framework
                </h3>
                <p className="mt-2 text-sm text-[var(--brand-graphite)]/65 max-w-2xl">
                  Three leadership tiers and one workforce bridge supporting professionals across every
                  stage of growth.
                </p>

                <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {ALI_TIERS.map((t, i) => (
                    <ProgramCard
                      key={t.name}
                      eyebrow={t.eyebrow}
                      title={t.name}
                      audience={t.audience}
                      description={t.description}
                      bullets={t.focus}
                      image={t.image}
                      delay={i * 0.05}
                    />
                  ))}
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-[1.2fr_1fr]">
                  <motion.article
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                    className="rounded-3xl bg-[var(--brand-ivory)] text-[var(--brand-graphite)] p-6 md:p-7 shadow-[0_18px_40px_-28px_rgba(31,42,36,0.45)]"
                  >
                    <div className="text-xs uppercase tracking-wider text-[var(--brand-forest)]">
                      Delivery model
                    </div>
                    <h4 className="mt-3 font-display text-xl">ALI delivers programs through</h4>
                    <ul className="mt-4 grid sm:grid-cols-2 gap-y-2 text-sm">
                      {ALI_DELIVERY.map((d) => (
                        <li key={d} className="flex items-start gap-2.5">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-forest)]" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                  <motion.article
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="rounded-3xl bg-[var(--brand-gold)] text-[var(--brand-graphite)] p-6 md:p-7 flex flex-col justify-between shadow-[0_18px_40px_-28px_rgba(31,42,36,0.45)]"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        <span className="text-xs uppercase tracking-wider opacity-80">Pathway</span>
                      </div>
                      <h4 className="mt-3 font-display text-2xl leading-snug">
                        Vocational-to-Leadership Pipeline
                      </h4>
                      <p className="mt-3 text-sm opacity-90">
                        High-performing TVET participants can transition into ALI's leadership tracks —
                        creating a sustainable talent pipeline and long-term organizational impact.
                      </p>
                    </div>
                  </motion.article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
