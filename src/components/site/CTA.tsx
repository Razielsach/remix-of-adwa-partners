import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="px-4 pb-20">
      <div className="mx-auto max-w-5xl rounded-[32px] bg-secondary p-8 md:p-14">
        <div className="flex flex-col items-center text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--brand-gold)]">
            Let's talk
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl">
            Ready to Move Your
            <br /> Business Forward?
          </h2>
          <p className="mt-5 max-w-xl text-sm md:text-base text-foreground/70">
            Connect with our team to discuss your challenges and discover solutions designed to
            help your business move forward.
          </p>
          <a
            href="/contact"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground hover:opacity-90 transition"
          >
            Start a conversation
            <span className="grid h-6 w-6 place-items-center rounded-full bg-secondary text-accent transition group-hover:translate-x-0.5">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
