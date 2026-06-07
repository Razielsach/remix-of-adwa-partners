import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SlideTabs } from "@/components/ui/slide-tabs";
import spiralBlob from "@/assets/spiral-blob-3d.png";

const TABS = [
  {
    title: "Capacity Building",
    description: "Practical training that scales expertise across teams.",
  },
  {
    title: "Leadership Development",
    description: "Executive coaching for visionary Ethiopian leaders.",
  },
  {
    title: "Organizational Redesign",
    description: "Restructure for clarity, speed, and accountability.",
  },
  {
    title: "Strategic Advisory",
    description: "Sector insight that turns strategy into execution.",
  },
];

export function ScrollMorphHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const bandRef = useRef<HTMLDivElement>(null);
  const arcsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Auto-rotate tabs
  useEffect(() => {
    if (reducedMotion || hasInteracted || isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % TABS.length);
    }, 3500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [reducedMotion, hasInteracted, isPaused]);

  // GSAP ScrollTrigger
  useEffect(() => {
    if (typeof window === "undefined" || reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const band = bandRef.current;
      const arcs = arcsRef.current;
      const content = contentRef.current;
      if (!band || !arcs || !content) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%",
          pin: pinRef.current,
          scrub: 0.6,
        },
      });

      tl.fromTo(
        band,
        {
          height: "420px",
          borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
        },
        {
          height: "100vh",
          borderRadius: "0",
          ease: "power2.inOut",
        },
        0
      );

      tl.to(
        arcs,
        {
          opacity: 0,
          ease: "power1.inOut",
        },
        0
      );

      tl.fromTo(
        content,
        {
          opacity: 0,
          scale: 0.96,
          y: 20,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          ease: "power2.out",
        },
        0.5
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const handleTabSelect = useCallback(
    (i: number) => {
      setActiveTab(i);
      setHasInteracted(true);
    },
    []
  );

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  // Reduced motion: render end-state statically
  if (reducedMotion) {
    return (
      <section className="relative z-10">
        <div className="flex min-h-screen items-center justify-center overflow-hidden bg-[var(--brand-forest)]">
          <div className="flex w-full max-w-6xl flex-col items-center px-4 py-20">
            <div className="mb-8">
              <SlideTabs
                tabs={TABS.map((t) => t.title)}
                selected={0}
                onSelect={() => {}}
              />
            </div>
            <div className="flex w-full flex-col items-center gap-8 md:flex-row md:justify-center">
              <ReducedMotionBlob />
              <div className="max-w-sm text-center md:text-left">
                <h3 className="font-display text-2xl font-bold text-[var(--brand-ivory)] md:text-3xl">
                  {TABS[0].title}
                </h3>
                <p className="mt-2 text-[var(--brand-ivory)]/80">
                  {TABS[0].description}
                </p>
                <Link
                  to="/services"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--brand-gold)] hover:underline"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div ref={sectionRef} className="relative z-10" style={{ height: "220vh" }}>
      <div ref={pinRef} className="h-screen w-full overflow-hidden bg-background">
        <div
          ref={bandRef}
          className="absolute bottom-0 left-0 right-0 mx-auto flex items-center justify-center overflow-hidden bg-[var(--brand-forest)]"
          style={{
            width: "100%",
            height: "420px",
            borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
          }}
        >
          {/* Concentric ivory arcs */}
          <div ref={arcsRef} className="absolute inset-0" aria-hidden>
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 1600 700"
              preserveAspectRatio="none"
            >
              {[...Array(6)].map((_, i) => (
                <ellipse
                  key={i}
                  cx="800"
                  cy="760"
                  rx={920 - i * 110}
                  ry={550 - i * 64}
                  fill="none"
                  stroke="rgba(245,242,236,0.35)"
                  strokeWidth={1.2}
                />
              ))}
            </svg>
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className="relative z-10 flex w-full max-w-6xl flex-col items-center px-4"
            style={{ opacity: 0 }}
          >
            {/* Pill tabs */}
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="mb-8 md:mb-12"
            >
              <SlideTabs
                tabs={TABS.map((t) => t.title)}
                selected={activeTab}
                onSelect={handleTabSelect}
              />
            </div>

            {/* Blob + side card */}
            <div className="flex w-full flex-col items-center gap-10 md:flex-row md:justify-center md:gap-16">
              {/* Spiral blob with glow */}
              <div className="relative flex-shrink-0">
                <div
                  className="absolute inset-0 rounded-full blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(184,148,90,0.45) 0%, transparent 70%)",
                    transform: "scale(1.5)",
                  }}
                  aria-hidden
                />
                <motion.img
                  src={spiralBlob}
                  alt="3D spiral blob"
                  width={256}
                  height={256}
                  className="relative h-44 w-44 md:h-64 md:w-64"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    animation: "spin 24s linear infinite",
                  }}
                />
              </div>

              {/* Side card */}
              <div className="max-w-sm text-center md:text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h3 className="font-display text-2xl font-bold text-[var(--brand-ivory)] md:text-3xl">
                      {TABS[activeTab].title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-[var(--brand-ivory)]/80">
                      {TABS[activeTab].description}
                    </p>
                    <Link
                      to="/services"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-gold)] transition hover:opacity-80"
                    >
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReducedMotionBlob() {
  return (
    <div className="relative flex-shrink-0">
      <div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(184,148,90,0.45) 0%, transparent 70%)",
          transform: "scale(1.5)",
        }}
        aria-hidden
      />
      <img
        src={spiralBlob}
        alt="3D spiral blob"
        width={256}
        height={256}
        className="relative h-44 w-44 md:h-64 md:w-64"
      />
    </div>
  );
}
