import { motion } from "framer-motion";

import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { CTA } from "./CTA";
import { PageHeader } from "./PageHeader";
import { CoverflowCarousel } from "./CoverflowCarousel";
import teferaImg from "@/assets/team/dr_tefera_gezmu.webp.asset.json";
import delinaImg from "@/assets/team/dr_delina_amare.webp.asset.json";
import laltuImg from "@/assets/team/dr_laltu_negasa.webp.asset.json";
import kebronImg from "@/assets/team/dr_kebron_aweke.webp.asset.json";
import rahelImg from "@/assets/team/dr_rahel_dawit.webp.asset.json";
import selamImg from "@/assets/team/dr_selam_bisrat.webp.asset.json";
import hermonImg from "@/assets/team/dr_hermon_amare.webp.asset.json";
import edomImg from "@/assets/team/dr_edom_mengistu.webp.asset.json";

const HERO =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80";


const TEAM = [
  {
    name: "Dr. Tefera Gezmu",
    role: "Managing Director",
    img: teferaImg.url,
    bio: "A medical epidemiologist and public health executive with over a decade of global experience across the US and Ethiopia, spanning public health strategy, pharmaceuticals, academic research, and organizational transformation specializing in risk mitigation and strategic consulting for public and private institutions.",
  },
  {
    name: "Dr. Delina Amare",
    role: "CPD Courses Developer & Practice Lead",
    img: delinaImg.url,
    bio: "A clinician and academic lecturer advancing health equity and professional development. Affiliated with the Healthcare Leadership Academy, she designs tailored CPD courses to elevate healthcare delivery standards. She holds an MD from Arba Minch University and is completing her MPH.",
  },
  {
    name: "Dr. Laltu Negasa",
    role: "Research Associate & CPD Director",
    img: laltuImg.url,
    bio: "A public health strategist and corporate leadership trainer specializing in resilient health systems. She directs the CPD internship program and leads research in maternal health, SRHR, and disability-inclusive healthcare, while designing transformative leadership programs for multinationals.",
  },
  {
    name: "Dr. Kebron Aweke",
    role: "Research and Program Associate",
    img: kebronImg.url,
    bio: "A medical doctor focused on community-driven, evidence-based public health research and capacity building. She coordinates CPD training and proposal development, and leads The Nudge Nest (TNN) mentorship program for early-career public health professionals. MD, Addis Ababa University.",
  },
  {
    name: "Dr. Rahel Dawit",
    role: "Doctor",
    img: rahelImg.url,
    bio: "Advises leadership teams on organizational design, growth, and performance improvement across sectors.",
  },
  {
    name: "Dr. Selam Bisrat",
    role: "CPD Courses Sr. Advisor",
    img: selamImg.url,
    bio: "Dr. Selam is a veteran pediatrician and public health expert with extensive experience across Addis Ababa’s public hospital network. A former clinical educator at Tikur Anbessa Specialized Hospital, she specializes in medical student training, community health education, and developing institutional capacity-building programs for healthcare professionals.",
  },
  {
    name: "Dr. Hermon Amare",
    role: "Psychiatrist & CPD Advisor",
    img: hermonImg.url,
    bio: "Dr. Hermon is a consultant psychiatrist bridging clinical practice and public health program management across governmental and non-governmental organizations. She has extensive experience in undergraduate and postgraduate medical education, with a core focus on mental health advocacy and non-communicable disease (NCD) prevention.",
  },
  {
    name: "Dr. Edom Mengistu",
    role: "Doctor",
    img: edomImg.url,
    bio: "Directs primary research and sector analysis that anchors every Adwa Partners recommendation.",
  },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <PageHeader eyebrow="About Us" title="We Are Adwa Partners Consultancy PLC">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 max-w-2xl text-base md:text-lg text-foreground/70 leading-relaxed"
          >
            Reinventing Leadership, Consulting & Implementation Services in Ethiopia
          </motion.p>
        </PageHeader>

        {/* Hero image */}
        <section className="px-4 mt-8 md:mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto max-w-6xl overflow-hidden rounded-[28px]"
          >
            <img src={HERO} alt="Our team" className="h-[280px] md:h-[460px] w-full object-cover" />
          </motion.div>
        </section>

        {/* Intro paragraphs */}
        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-sm md:text-base text-foreground/75 leading-relaxed">
            <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}>
              Adwa Partners, PLC is a dynamic boutique consulting and training firm established by a visionary Ethiopian-American group. Their foundational intent was to bridge global expertise with local needs, focusing on critical areas such as knowledge transfer both in the private and public sectors, focusing on robust capacity building, leadership and professional development, and strategic organizational redesign and refresh. What sets Adwa Partners, PLC apart is its our unique composition: a collective of experts distinguished by advanced educational backgrounds, proven and varied experience and rigorous work ethic, as well as a profound, and deep-rooted understanding of Ethiopia's unique context. This blend enables us to deliver essential insights, effective workflow solutions, and unparalleled sectoral expertise; driving operational excellence and contributing significantly to Ethiopia's transformative growth.
            </motion.p>
          </div>
        </section>

        {/* Purpose, Mission & Vision */}
        <section className="bg-[var(--brand-forest)] py-16 md:py-24 overflow-hidden">
          <div className="mx-auto max-w-6xl px-4">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-[0.25em] text-[var(--brand-ivory)]/60 text-center mb-3 md:mb-4"
            >
              Our Purpose, Mission & Vision
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="font-display text-3xl md:text-5xl text-[var(--brand-ivory)] text-center mb-10 md:mb-14"
            >
              What Drives Us
            </motion.h2>
            <CoverflowCarousel />
          </div>
        </section>

        {/* Team */}
        <section className="px-4 pt-16 md:pt-20 pb-20">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-4xl md:text-6xl"
            >
              Our Team
            </motion.h2>

            <div className="mt-24 grid gap-x-6 gap-y-24 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM.map((m, i) => (
                <motion.article
                  key={m.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                  className="group relative flex flex-col overflow-visible rounded-[2rem] border border-[var(--brand-ivory-deep)] bg-white pt-24 pb-0 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-22px_rgba(31,42,36,0.25)]"
                >
                  <div className="absolute left-1/2 -top-20 -translate-x-1/2">
                    <div className="relative h-40 w-40 rounded-full p-[4px] bg-gradient-to-br from-[var(--brand-gold)] to-[var(--brand-forest)] transition-transform duration-500 group-hover:scale-105 shadow-[0_18px_40px_-18px_rgba(31,42,36,0.35)]">
                      <div className="h-full w-full overflow-hidden rounded-full bg-white p-[4px]">
                        <img
                          src={m.img}
                          alt={m.name}
                          loading="lazy"
                          className="h-full w-full rounded-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col px-6 pt-5 pb-6 text-center">
                    <h4 className="font-display text-lg tracking-wide text-[var(--brand-graphite)]">
                      {m.name}
                    </h4>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
                      {m.role}
                    </div>
                    <p className="mt-4 text-xs leading-relaxed text-[var(--brand-graphite)]/70 text-justify">
                      {m.bio}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-center gap-5 rounded-b-[2rem] bg-[var(--brand-forest)] py-3 text-white/90 transition-colors duration-500 group-hover:bg-[var(--brand-graphite)]">
                    <a href="#" aria-label={`${m.name} on LinkedIn`} className="transition-transform hover:scale-110 hover:text-[var(--brand-gold)]">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.26-.02-2.88-1.76-2.88-1.76 0-2.03 1.37-2.03 2.79V21H9z"/></svg>
                    </a>
                    <a href="#" aria-label={`${m.name} on X`} className="transition-transform hover:scale-110 hover:text-[var(--brand-gold)]">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21l-6.52 7.45L22 22h-6.797l-4.74-6.18L4.93 22H2.17l6.97-7.97L2 2h6.93l4.29 5.66L18.244 2zm-2.39 18.4h1.88L7.27 3.48H5.25l10.605 16.92z"/></svg>
                    </a>
                    <a href="mailto:#" aria-label={`Email ${m.name}`} className="transition-transform hover:scale-110 hover:text-[var(--brand-gold)]">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

          </div>
        </section>

        {/* Gallery marquee-ish strip */}
        <section className="px-4 pb-20">
          <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="overflow-hidden rounded-3xl"
              >
                <img
                  src={src}
                  alt=""
                  className="h-48 md:h-56 w-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </section>

        <CTA />

      </main>
      <Footer />
    </div>
  );
}
