import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  { q: "What types of businesses do you work with?", a: "We work with organizations across various industries, from growing startups to established companies and government bodies. Our approach is flexible and tailored to each client's specific goals and challenges." },
  { q: "How does your consulting process begin?", a: "Every engagement starts with a discovery phase where we learn about your business, objectives, and current challenges. This allows us to develop a strategy that aligns with your needs." },
  { q: "How long does a typical project take?", a: "Project timelines depend on the scope and complexity of the work. Some initiatives may take a few weeks, while larger strategic projects may require several months." },
  { q: "Do you work with internal teams?", a: "Yes. Collaboration with internal teams is a key part of our approach. We work closely with stakeholders to ensure that strategies can be effectively implemented." },
  { q: "What industries do you specialize in?", a: "Our experience spans public health, pharmaceuticals, manufacturing, education, employment services, government and growing digital businesses." },
];

export function FAQ() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <span className="text-xs uppercase tracking-[0.22em] text-foreground/60">FAQ</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl leading-[1.05]">
            Frequently
            <br /> Asked
            <br /> Questions
          </h2>
        </div>
        <div className="rounded-3xl border border-border bg-card p-3 md:p-5">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border last:border-0">
                <AccordionTrigger className="text-left text-base font-display py-5 px-2">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-2 text-foreground/70">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}