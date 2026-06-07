import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { PageHeader } from "./PageHeader";

const SUBJECTS = [
  "Health Strategy & CPD",
  "Adwa Leadership Institute (ALI)",
  "Institutional Strengthening",
  "Strategy & Advisory",
  "Talent & Global Pathways",
  "General inquiry",
];

export function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    subject: SUBJECTS[0],
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (k: string, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "Please enter your first name.";
    if (!form.lastName.trim()) e.lastName = "Please enter your last name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!/^[+\d][\d\s().-]{6,}$/.test(form.phone.trim())) e.phone = "Enter a valid phone number.";
    if (form.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
    toast.success("Message received — we'll get back to you within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <PageHeader eyebrow="Contact" title="Let's start a conversation.">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-5 max-w-xl text-base text-foreground/70 md:text-lg"
          >
            Whether you're scoping a new initiative or looking to strengthen
            existing programs — tell us where you are and where you want to go.
          </motion.p>
        </PageHeader>

        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.4fr_1fr]">
            {/* Info column */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 rounded-[28px] bg-accent p-7 text-accent-foreground md:p-9"
            >
              <h2 className="font-display text-3xl leading-tight md:text-4xl">
                Reach our team directly.
              </h2>
              <p className="mt-3 text-sm text-accent-foreground/75">
                Or use the form — every inquiry lands in the partner inbox.
              </p>

              <div className="mt-8 space-y-5 text-sm">
                <InfoRow Icon={Mail} label="Email" value="info@adwapartners.com" href="mailto:info@adwapartners.com" />
                <InfoRow Icon={Phone} label="Phone" value="+251-979-09-9669" href="tel:+251979099669" />
                <InfoRow Icon={MapPin} label="Office" value="Salam Tower, 11ᵗʰ floor. Yeka Sub-City, Addis Ababa" />
              </div>

              <div className="mt-10 rounded-2xl bg-background/10 p-5 ring-1 ring-accent-foreground/15">
                <p className="text-xs uppercase tracking-[0.22em] text-accent-foreground/70">
                  Response time
                </p>
                <p className="mt-2 font-display text-2xl">Within 24 hours</p>
              </div>
            </motion.aside>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="order-1 rounded-[28px] border border-border bg-card p-7 md:p-9"
            >
              {submitted ? (
                <div className="flex h-full min-h-[460px] flex-col items-center justify-center text-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 14 }}
                    className="grid h-16 w-16 place-items-center rounded-full bg-accent text-accent-foreground"
                  >
                    <CheckCircle2 className="h-8 w-8" />
                  </motion.div>
                  <h3 className="mt-6 font-display text-3xl">Message received.</h3>
                  <p className="mt-3 max-w-sm text-sm text-foreground/70">
                    Thanks {form.firstName} — a partner will reach back to you at{" "}
                    <span className="font-medium">{form.email}</span> within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ firstName: "", lastName: "", email: "", phone: "", organization: "", subject: SUBJECTS[0], message: "" });
                    }}
                    className="mt-8 rounded-full border border-border bg-background px-5 py-2.5 text-xs font-medium hover:bg-muted"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="First name" error={errors.firstName}>
                      <input
                        type="text"
                        value={form.firstName}
                        onChange={(e) => update("firstName", e.target.value)}
                        placeholder="Jane"
                        className="field-input"
                      />
                    </Field>
                    <Field label="Last name" error={errors.lastName}>
                      <input
                        type="text"
                        value={form.lastName}
                        onChange={(e) => update("lastName", e.target.value)}
                        placeholder="Doe"
                        className="field-input"
                      />
                    </Field>
                    <Field label="Email" error={errors.email}>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="you@company.com"
                        className="field-input"
                      />
                    </Field>
                    <Field label="Phone" error={errors.phone}>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="+251 ..."
                        className="field-input"
                      />
                    </Field>
                  </div>

                  <Field label="Organization (optional)">
                    <input
                      type="text"
                      value={form.organization}
                      onChange={(e) => update("organization", e.target.value)}
                      placeholder="Adwa Partners PLC"
                      className="field-input"
                    />
                  </Field>

                  <Field label="What can we help with?">
                    <div className="flex flex-wrap gap-2">
                      {SUBJECTS.map((s) => {
                        const active = form.subject === s;
                        return (
                          <button
                            type="button"
                            key={s}
                            onClick={() => update("subject", s)}
                            className={`rounded-full border px-3 py-1.5 text-xs transition ${
                              active
                                ? "border-accent bg-accent text-accent-foreground"
                                : "border-border bg-background hover:bg-muted"
                            }`}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </Field>

                  <Field label="Message" error={errors.message}>
                    <textarea
                      rows={6}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Tell us about your goals, timelines, and any constraints…"
                      className="field-input resize-none"
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition hover:opacity-90 disabled:opacity-70 md:w-auto"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        Send message
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-secondary text-accent transition group-hover:translate-x-0.5">
                          <Send className="h-3.5 w-3.5" />
                        </span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .field-input {
          width: 100%;
          border-radius: 14px;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: var(--color-foreground);
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .field-input:focus {
          outline: none;
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-accent) 18%, transparent);
        }
        .field-input::placeholder { color: color-mix(in oklab, var(--color-foreground) 40%, transparent); }
      `}</style>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-foreground/70">
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function InfoRow({
  Icon,
  label,
  value,
  href,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-full bg-background/15 ring-1 ring-accent-foreground/15">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <div className="text-[11px] uppercase tracking-[0.18em] text-accent-foreground/60">{label}</div>
        <div className="text-sm">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-90">{content}</a> : content;
}
