import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Mission } from "./Mission";
import { Services } from "./Services";
import { WhyUs } from "./WhyUs";
import { Testimonials } from "./Testimonials";
import { Insights } from "./Insights";
import { FAQ } from "./FAQ";
import { CTA } from "./CTA";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";

export function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Reveal><Mission /></Reveal>
        <Reveal><Services /></Reveal>
        <Reveal><WhyUs /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <Reveal><Insights /></Reveal>
        <Reveal><FAQ /></Reveal>
        <Reveal><CTA /></Reveal>
      </main>
      <Footer />
    </div>
  );
}

