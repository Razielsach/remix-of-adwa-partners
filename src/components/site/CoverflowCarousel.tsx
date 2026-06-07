import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import purposeIcon from "@/assets/icons/purpose-3d.webp.asset.json";
import targetIcon from "@/assets/icons/target-3d.webp.asset.json";
import visionIcon from "@/assets/icons/telescope-3d.webp.asset.json";

interface CarouselCard {
  label: string;
  title: string;
  content: string;
  accent: string; // hex
  glowColor: string;
  icon: string;
}

const cards: CarouselCard[] = [
  {
    label: "Our Purpose",
    title: "PURPOSE",
    content:
      "To leverage the power of people and partnership, to spark innovation & drive transformation for lasting change.",
    accent: "#B8945A",
    glowColor: "rgba(184, 148, 90, 0.5)",
    icon: purposeIcon.url,
  },
  {
    label: "Our Mission",
    title: "MISSION",
    content:
      "Empowering visionary leaders and resilient organizations to transform Ethiopia through execution excellence.",
    accent: "#D9694A",
    glowColor: "rgba(217, 105, 74, 0.5)",
    icon: targetIcon.url,
  },
  {
    label: "Our Vision",
    title: "VISION",
    content:
      "To establish Ethiopia as Africa's benchmark for operational excellence powered by homegrown innovation.",
    accent: "#E8D8B8",
    glowColor: "rgba(232, 216, 184, 0.5)",
    icon: visionIcon.url,
  },
];

const hexToRgba = (hex: string, alpha: number) => {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const CoverflowCarousel = () => {
  const [active, setActive] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && active > 0) setActive(active - 1);
      if (diff < 0 && active < cards.length - 1) setActive(active + 1);
    }
    setTouchStart(null);
  };

  const goTo = useCallback((dir: -1 | 1) => {
    setActive((prev) => {
      const next = prev + dir;
      if (next < 0 || next >= cards.length) return prev;
      return next;
    });
  }, []);

  const getStyle = (index: number) => {
    const offset = index - active;
    if (isMobile) {
      if (offset === 0) return { x: 0, rotateY: 0, z: 0, scale: 1, opacity: 1 };
      return { x: offset < 0 ? -300 : 300, rotateY: 0, z: -100, scale: 0.8, opacity: 0 };
    }
    if (offset === 0) return { x: 0, rotateY: 0, z: 0, scale: 1, opacity: 1 };
    if (offset === -1) return { x: -280, rotateY: 35, z: -150, scale: 0.82, opacity: 0.7 };
    if (offset === 1) return { x: 280, rotateY: -35, z: -150, scale: 0.82, opacity: 0.7 };
    return { x: offset < 0 ? -400 : 400, rotateY: offset < 0 ? 45 : -45, z: -300, scale: 0.7, opacity: 0 };
  };

  return (
    <div className="w-full">
      <div
        className="relative mx-auto flex items-center justify-center overflow-hidden"
        style={{ perspective: "1200px", height: isMobile ? "auto" : "clamp(400px, 55vw, 520px)", minHeight: isMobile ? "420px" : undefined }}
        role="region"
        aria-roledescription="carousel"
        aria-label="Purpose, Mission and Vision"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {cards.map((card, i) => {
          const s = getStyle(i);
          const isActive = i === active;

          return (
            <motion.div
              key={card.title}
              className="absolute cursor-pointer"
              style={{
                width: isMobile ? "85vw" : "clamp(280px, 42vw, 360px)",
                maxWidth: isMobile ? "320px" : undefined,
                transformStyle: "preserve-3d",
              }}
              animate={s}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              onClick={() => setActive(i)}
              role="group"
              aria-roledescription="slide"
              aria-label={card.label}
            >
              <div
                className="relative rounded-2xl overflow-hidden flex flex-col items-center text-center"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(0px)",
                  background: isActive
                    ? `linear-gradient(160deg, ${hexToRgba(card.accent, 0.18)} 0%, rgba(255,255,255,0.06) 40%, ${hexToRgba(card.accent, 0.10)} 100%)`
                    : "linear-gradient(160deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                  border: `1px solid ${isActive ? hexToRgba(card.accent, 0.5) : "rgba(255,255,255,0.12)"}`,
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  minHeight: isMobile ? "auto" : "clamp(340px, 42vw, 440px)",
                  padding: isMobile ? "24px 20px" : "clamp(24px, 3vw, 36px)",
                  boxShadow: isActive
                    ? `0 25px 60px -12px rgba(0,0,0,0.5), 0 0 0 1px ${hexToRgba(card.accent, 0.2)}`
                    : "0 10px 30px -8px rgba(0,0,0,0.3)",
                }}
              >
                {isActive && (
                  <motion.div
                    className="absolute -inset-px rounded-2xl pointer-events-none"
                    style={{
                      boxShadow: `0 0 60px 8px ${card.glowColor}, 0 0 120px 20px ${hexToRgba(card.accent, 0.15)}, inset 0 0 40px ${hexToRgba(card.accent, 0.08)}`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}

                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(120deg, transparent 25%, ${hexToRgba(card.accent, isActive ? 0.18 : 0.08)} 50%, transparent 75%)`,
                    }}
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.6,
                    }}
                  />
                </div>

                <div
                  className="absolute top-0 left-0 right-0 pointer-events-none"
                  style={{
                    height: "40%",
                    background: `linear-gradient(180deg, rgba(255,255,255,${isActive ? 0.12 : 0.06}) 0%, transparent 100%)`,
                    borderRadius: "16px 16px 0 0",
                  }}
                />

                <div
                  className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                  style={{
                    background: `linear-gradient(90deg, transparent 10%, rgba(255,255,255,${isActive ? 0.4 : 0.15}) 50%, transparent 90%)`,
                  }}
                />

                <motion.div
                  className="relative mt-2 mb-3 sm:mb-4"
                  style={{
                    width: isMobile ? "72px" : "clamp(72px, 10vw, 96px)",
                    height: isMobile ? "72px" : "clamp(72px, 10vw, 96px)",
                    transform: "translateZ(30px)",
                    transformStyle: "preserve-3d",
                  }}
                  animate={isActive ? { y: [0, -4, 0] } : {}}
                  transition={isActive ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : {}}
                >
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-full h-full object-contain"
                    style={{
                      filter: isActive
                        ? `drop-shadow(0 8px 16px ${hexToRgba(card.accent, 0.4)})`
                        : "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                    }}
                    loading="eager"
                    width={96}
                    height={96}
                  />
                </motion.div>

                <h3
                  className="font-display font-bold tracking-[0.18em] mb-3 sm:mb-5"
                  style={{
                    fontSize: isMobile ? "1.25rem" : "clamp(1.35rem, 2.5vw, 1.75rem)",
                    color: isActive ? "#F5F2EC" : "rgba(245,242,236,0.4)",
                    textShadow: isActive
                      ? `0 0 30px ${card.glowColor}, 0 2px 4px rgba(0,0,0,0.5)`
                      : "none",
                    transform: "translateZ(20px)",
                    letterSpacing: "0.2em",
                  }}
                >
                  {card.title}
                </h3>

                {isActive && (
                  <motion.div
                    className="mb-3 sm:mb-4 rounded-full"
                    style={{
                      width: "40px",
                      height: "2px",
                      background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)`,
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  />
                )}

                <div style={{ transform: "translateZ(10px)" }}>
                  <p
                    className="leading-relaxed text-[var(--brand-ivory)]/80 px-1 text-center"
                    style={{ fontSize: isMobile ? "0.8125rem" : "clamp(0.875rem, 1.5vw, 1rem)" }}
                  >
                    {card.content}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-6 mt-4 sm:mt-6">
        <button
          onClick={() => goTo(-1)}
          disabled={active === 0}
          className="h-10 w-10 rounded-lg border border-[var(--brand-ivory)]/20 bg-[var(--brand-ivory)]/10 flex items-center justify-center text-[var(--brand-ivory)] disabled:opacity-30 hover:bg-[var(--brand-ivory)]/20 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-[var(--brand-ivory)]" : "w-2.5 bg-[var(--brand-ivory)]/30 hover:bg-[var(--brand-ivory)]/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(1)}
          disabled={active === cards.length - 1}
          className="h-10 w-10 rounded-lg border border-[var(--brand-ivory)]/20 bg-[var(--brand-ivory)]/10 flex items-center justify-center text-[var(--brand-ivory)] disabled:opacity-30 hover:bg-[var(--brand-ivory)]/20 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default CoverflowCarousel;
