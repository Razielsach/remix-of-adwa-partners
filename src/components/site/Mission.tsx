import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { LogoCloud, type Logo } from "@/components/ui/logo-cloud-3";
import amc from "@/assets/clients/amc_networks_logo.png.asset.json";
import amref from "@/assets/clients/amref_logo.png.asset.json";
import devAfrique from "@/assets/clients/dev_afrique_logo.jpg.asset.json";
import emergency from "@/assets/clients/emegency_logo.png.asset.json";
import esmap from "@/assets/clients/ESMAP_Logo.png.asset.json";
import ecma from "@/assets/clients/ethiopian_capital_market_authority_logo.png.asset.json";
import ema from "@/assets/clients/ethiopian_medical_association_logo.png.asset.json";
import efda from "@/assets/clients/ethiopian-food-and-drug-authority.jpg.asset.json";
import heineken from "@/assets/clients/heineken-ethiopia.png.asset.json";
import kitchen from "@/assets/clients/Kitchen_world_logo.png.asset.json";
import aboutImg from "@/assets/home-about.jpg.asset.json";

const ALL_LOGOS: Logo[] = [
  { src: amc.url, alt: "AMC Network" },
  { src: amref.url, alt: "Amref Health Africa" },
  { src: devAfrique.url, alt: "Dev-Afrique" },
  { src: emergency.url, alt: "Emergency" },
  { src: esmap.url, alt: "ESMAP" },
  { src: ecma.url, alt: "Ethiopian Capital Market Authority" },
  { src: ema.url, alt: "Ethiopian Medical Association" },
  { src: efda.url, alt: "EFDA" },
  { src: heineken.url, alt: "Heineken Ethiopia" },
  { src: kitchen.url, alt: "Kitchen World" },
];

const ROW_ONE = ALL_LOGOS.slice(0, 5);
const ROW_TWO = ALL_LOGOS.slice(5);

const STATS = [
  { value: "150", label: "Successful Projects" },
  { value: "40", label: "Industry Partners" },
  { value: "12", label: "Years of Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

export function Mission() {
  return (
    <section id="about" className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-foreground/60">
              About Us
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">
              A Vibrant Firm Driving Positive Change in Ethiopia
            </h2>

            <div className="mt-6 space-y-4 text-base text-foreground/75 leading-relaxed">
              <p>
                As a vibrant firm dedicated to driving positive change in Ethiopia, we provide
                a comprehensive suite of advisory and training solutions designed to elevate
                both public and private sector endeavors.
              </p>
              <p>
                We help institutions and professionals perform better, scale faster, and
                sustain results through practical, measurable, and execution-focused
                solutions.
              </p>
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-foreground border-b border-foreground pb-1 hover:text-[var(--brand-gold)] hover:border-[var(--brand-gold)] transition-colors"
            >
              Learn More <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src={aboutImg.url}
              alt="Adwa Partners team in collaboration"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover aspect-[4/5] md:aspect-[5/6]"
            />
          </div>
        </div>

        {/* Metrics row */}
        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
              <div className="text-xs uppercase tracking-wider text-foreground/60">
                {s.label}
              </div>
              <div className="mt-6 font-display text-4xl md:text-5xl text-primary">
                {s.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <div className="text-xs uppercase tracking-[0.22em] text-foreground/60 mb-6">
            Our clients
          </div>
          <div className="flex flex-col gap-6">
            <LogoCloud logos={ROW_ONE} duration={35} />
            <LogoCloud logos={ROW_TWO} duration={40} reverse />
          </div>
        </div>
      </div>
    </section>
  );
}
