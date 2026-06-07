import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
// @ts-expect-error - JSX component without types
import DotGrid from "@/components/DotGrid";

const words = [
  { text: "ADWA" },
  { text: "PARTNERS" },
  { text: "CONSULTANCY" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setProgress(0);
      return;
    }

    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const about = document.getElementById("about");
      if (!about) return;

      const vh = window.innerHeight;
      const aboutTop = about.getBoundingClientRect().top;
      // Start morph when About is 1 viewport away; complete when it reaches viewport top.
      const raw = 1 - aboutTop / vh;
      setProgress(Math.min(Math.max(raw, 0), 1));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Band geometry: half-visible curved band → full-bleed flat panel.
  const bandWidth = 165 - 65 * progress;
  const bandWidthDesktop = 135 - 35 * progress;
  const bandHeight = 52 + progress * 60;
  const bandBottom = -26 + progress * 26;
  const radiusX = 50 - progress * 50;
  const radiusY = 100 - progress * 100;
  const arcsOpacity = Math.max(1 - progress * 1.6, 0);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative z-20 min-h-screen overflow-clip bg-background"
    >
      <div className="sticky top-0 z-20 h-screen overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          <DotGrid
            dotSize={4}
            gap={22}
            baseColor="#EDE8DE"
            activeColor="#993c1d"
            proximity={120}
            speedTrigger={100}
            shockRadius={250}
            shockStrength={5}
            maxSpeed={4000}
            resistance={750}
            returnDuration={1.5}
          />
        </div>

        <div className="relative z-20 mx-auto flex h-full max-w-6xl flex-col px-4 pt-28 md:pt-32">
          <div className="mx-auto max-w-5xl pb-[28vh] text-center md:pb-[30vh]">
            <h1 className="font-display font-bold leading-[0.95] tracking-tight text-foreground">
              <span className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-3xl md:text-5xl lg:text-6xl">
                {words.slice(0, 2).map((word, index) => (
                  <WordChip key={word.text} word={word} delay={index * 0.12} />
                ))}
              </span>
              <span className="mt-1 flex flex-wrap items-center justify-center text-3xl md:text-5xl lg:text-6xl">
                <WordChip word={words[2]} delay={0.24} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mx-auto mt-8 max-w-2xl text-base text-foreground/75 md:text-lg"
            >
              We help institutions and professionals perform better, scale
              faster, and sustain results through practical, measurable, and
              execution focused solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90"
              >
                Get started
                <span className="grid h-6 w-6 place-items-center rounded-full bg-secondary text-accent">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium hover:bg-muted"
              >
                Explore services
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-10">
          <div
            className="absolute left-1/2 -translate-x-1/2 overflow-hidden"
            style={{
              width: `min(${bandWidth}vw, ${bandWidthDesktop}vw)`,
              height: `${bandHeight}vh`,
              bottom: `${bandBottom}vh`,
              backgroundColor: "var(--brand-forest)",
              borderTopLeftRadius: `${radiusX}% ${radiusY}%`,
              borderTopRightRadius: `${radiusX}% ${radiusY}%`,
              willChange: "width,height,bottom,border-radius",
            }}
          >
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              aria-hidden
              style={{ opacity: arcsOpacity }}
            >
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 1600 700"
                preserveAspectRatio="none"
              >
                {[...Array(6)].map((_, index) => (
                  <motion.ellipse
                    key={index}
                    cx="800"
                    cy="760"
                    rx={920 - index * 110}
                    ry={550 - index * 64}
                    fill="none"
                    stroke="rgba(245,242,236,0.35)"
                    strokeWidth={1.2}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.45 + index * 0.08 }}
                  />
                ))}
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WordChip({
  word,
  delay = 0,
}: {
  word: { text: string };
  delay?: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="inline-flex items-center"
    >
      <span>{word.text}</span>
    </motion.span>
  );
}
