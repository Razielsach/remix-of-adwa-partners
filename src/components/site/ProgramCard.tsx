import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export type ProgramCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  audience?: string;
  delay?: number;
};

export function ProgramCard({
  eyebrow,
  title,
  description,
  bullets,
  image,
  audience,
  delay = 0,
}: ProgramCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[var(--brand-ivory-deep)] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-22px_rgba(31,42,36,0.25)]"
    >
      <div className="relative w-full overflow-hidden bg-[var(--brand-ivory-deep)] aspect-[16/10]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={800}
          height={500}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-7 md:p-8">
        <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--brand-gold)]">
          {eyebrow}
        </span>
        <h4 className="mt-3 font-display text-2xl leading-tight text-[var(--brand-graphite)]">
          {title}
        </h4>
        {audience && (
          <div className="mt-2 text-xs text-[var(--brand-graphite)]/60">{audience}</div>
        )}
        <p className="mt-4 text-sm leading-relaxed text-[var(--brand-graphite)]/75">
          {description}
        </p>

        {bullets.length > 0 && (
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2.5 text-xs font-medium text-[var(--brand-graphite)]"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 pt-2">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--brand-forest)] hover:text-[var(--brand-gold)] transition-colors"
          >
            <span className="border-b border-transparent group-hover:border-[var(--brand-gold)] transition-colors">
              Learn more
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
