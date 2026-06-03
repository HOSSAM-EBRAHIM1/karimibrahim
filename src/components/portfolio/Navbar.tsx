import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-5 flex items-center justify-between rounded-2xl transition-all duration-300 ${
          scrolled ? "glass shadow-card border border-border/60 px-5 py-3" : ""
        }`}
      >
        <a href="#top" className="flex items-center gap-2 group">
          <span className="h-9 w-9 rounded-xl bg-surface-dark grid place-items-center font-display text-lg text-[color:var(--surface-dark-foreground)]">
            K
          </span>
          <span className="font-display text-lg leading-none">
            Karim<span className="text-muted-foreground"> Ibrahim</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-foreground/70 hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-surface-dark px-4 py-2 text-sm text-[color:var(--surface-dark-foreground)] hover:opacity-90 transition"
          >
            <Download className="h-4 w-4" /> Download CV
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden h-10 w-10 grid place-items-center rounded-xl border border-border"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mx-5 mt-3 rounded-2xl glass border border-border p-5 flex flex-col gap-3"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-foreground/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-surface-dark px-4 py-3 text-sm text-[color:var(--surface-dark-foreground)]"
          >
            <Download className="h-4 w-4" /> Download CV
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
