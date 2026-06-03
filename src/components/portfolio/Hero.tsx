import { motion } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { Counter } from "./Counter";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Available for new opportunities — Cairo, Egypt
        </motion.div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-tight"
            >
              Karim <span className="italic text-[color:var(--accent)]">Ibrahim</span>
              <br />
              <span className="text-foreground/70">Khalil Ibrahim.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              Sales, Marketing & Business Development Specialist building
              client-first growth, sharp brand presence and trusted long-term
              accounts across Egypt's most demanding industries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-full bg-surface-dark text-[color:var(--surface-dark-foreground)] px-6 py-3 text-sm hover:opacity-90 transition"
              >
                View Experience <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm hover:bg-foreground/5 transition"
              >
                <Mail className="h-4 w-4" /> Contact Me
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-4 grid grid-cols-2 gap-4"
          >
            <Stat value={10} suffix="+" label="Roles across sales, PR & marketing" />
            <Stat value={8} suffix="+" label="Brands grown and supported" />
            <Stat value={3.75} suffix="" label="University GPA" decimals />
            <Stat value={22} suffix="" label="Years young, fully driven" />
          </motion.div>
        </div>
      </div>

      <div className="mt-20 border-y border-border/70 bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-5 flex items-center gap-10 overflow-x-auto text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {["Medrar", "X.Dot Agency", "Naw Plast", "Mazaq Al Lahm", "Cup Brand", "Fashion Avenue", "Arqam FC", "Rokia Group", "Traffic Marker"].map(
            (b) => (
              <span key={b} className="whitespace-nowrap">{b}</span>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label, decimals }: { value: number; suffix: string; label: string; decimals?: boolean }) {
  return (
    <div className="rounded-2xl border border-border bg-card/70 p-5 shadow-card">
      <div className="font-display text-3xl md:text-4xl">
        {decimals ? value.toFixed(2) : <Counter to={value} suffix={suffix} />}
        {decimals ? suffix : null}
      </div>
      <div className="mt-2 text-[11px] uppercase tracking-wider text-muted-foreground leading-snug">{label}</div>
    </div>
  );
}