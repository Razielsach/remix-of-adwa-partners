import logo from "@/assets/adwa-logo-footer.png";

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src={logo} alt="Adwa Partners Consultancy" className="h-16 w-auto" />
            <p className="mt-4 max-w-sm text-sm text-accent-foreground/70">
              Practical advisory, transformation and training that drive measurable results for
              organizations across Ethiopia and beyond.
            </p>
            <form
              className="mt-6 flex max-w-sm overflow-hidden rounded-full bg-background/10 ring-1 ring-accent-foreground/15"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent px-4 py-3 text-sm placeholder:text-accent-foreground/50 focus:outline-none"
              />
              <button className="bg-accent px-4 text-sm font-medium text-accent-foreground">Subscribe</button>
            </form>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-accent-foreground/60">Company</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/about" className="hover:opacity-80">About</a></li>
              <li><a href="/#services" className="hover:opacity-80">Services</a></li>
              <li><a href="/blog" className="hover:opacity-80">Blog</a></li>
              <li><a href="/contact" className="hover:opacity-80">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-accent-foreground/60">Contact</div>
            <ul className="mt-4 space-y-2 text-sm text-accent-foreground/80">
              <li>Salam Tower, 11ᵗʰ floor. Yeka Sub-City, Addis Ababa</li>
              <li>info@adwapartners.com</li>
              <li>+251-979-09-9669</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-accent-foreground/15 pt-6 text-xs text-accent-foreground/60">
          <span>© {new Date().getFullYear()} Adwa Partners Consultancy, PLC. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:opacity-80">Privacy</a>
            <a href="#" className="hover:opacity-80">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}