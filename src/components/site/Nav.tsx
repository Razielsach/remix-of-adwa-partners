import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/adwa-logo.png";

type NavLink = {
  href: string;
  label: string;
  exact?: boolean;
  children?: { href: string; label: string }[];
};

const links: NavLink[] = [
  { href: "/", label: "Home", exact: true },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services", label: "Services & Products" },
      { href: "/services/learning", label: "Learning & Trainings" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div
        className={`shimmer-border relative mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-2.5 transition-all ${
          scrolled ? "bg-background/85 backdrop-blur-md shadow-sm" : "bg-background/60 backdrop-blur-sm"
        }`}
      >
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Adwa Partners Consultancy" className="h-12 w-auto md:h-14" />
        </Link>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          {links.map((l) =>
            l.children ? (
              <div key={l.href} className="group relative">
                <Link
                  to={l.href}
                  className="inline-flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors"
                  activeProps={{ className: "text-foreground font-medium" }}
                >
                  {l.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="min-w-[220px] rounded-2xl border border-border/60 bg-background/95 p-2 shadow-lg backdrop-blur">
                    {l.children.map((c) => (
                      <Link
                        key={c.href}
                        to={c.href}
                        className="block rounded-xl px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                        activeOptions={{ exact: true }}
                        activeProps={{ className: "bg-muted text-foreground font-medium" }}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                className="text-foreground/80 hover:text-foreground transition-colors"
                activeOptions={l.exact ? { exact: true } : undefined}
                activeProps={{ className: "text-foreground font-medium" }}
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90 transition"
        >
          Book a call <ArrowRight className="h-4 w-4" />
        </Link>

        <button
          aria-label="Open menu"
          className="md:hidden grid h-9 w-9 place-items-center rounded-full bg-accent text-accent-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-border/60 bg-background/95 p-4 backdrop-blur md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) =>
              l.children ? (
                <div key={l.href} className="flex flex-col">
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    aria-expanded={mobileServicesOpen}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-left hover:bg-muted"
                  >
                    <span>{l.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-3 flex flex-col border-l border-border/60 pl-3 mt-1">
                      {l.children.map((c) => (
                        <Link
                          key={c.href}
                          to={c.href}
                          onClick={() => {
                            setOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="rounded-lg px-3 py-2 text-sm hover:bg-muted"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 hover:bg-muted"
                >
                  {l.label}
                </Link>
              ),
            )}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-4 py-2 text-center text-sm font-medium text-accent-foreground"
            >
              Book a call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
