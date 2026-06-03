import { motion } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { Counter } from "./Counter";
import medrar from "@/assets/brands/medrar.png";
import xdot from "@/assets/brands/xdot.png";
import nawplast from "@/assets/brands/nawplast.png";
import mazaq from "@/assets/brands/mazaq.png";
import cup from "@/assets/brands/cup.png";
import fashion from "@/assets/brands/fashion.png";
import arqam from "@/assets/brands/arqam.png";
import rokia from "@/assets/brands/rokia.png";
import traffic from "@/assets/brands/traffic.png";

const BRANDS = [
  { src: medrar, name: "Medrar" },
  { src: xdot, name: "X.Dot Agency" },
  { src: nawplast, name: "Naw Plast" },
  { src: mazaq, name: "Mazaq Al Lahm" },
  { src: cup, name: "Cup Brand" },
  { src: fashion, name: "Fashion Avenue" },
  { src: arqam, name: "Arqam FC" },
  { src: rokia, name: "Rokia Group" },
  { src: traffic, name: "Traffic Marker" },
];

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
            <Stat value={3.75} suffix="" label="University GPA" decimals={2} />
            <Stat value={22} suffix="" label="Years young, fully driven" />
          </motion.div>
        </div>
      </div>

      <div className="mt-20 border-y border-border/70 bg-card/40 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 py-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70 mb-5 text-center">
            Trusted across — Brands I've supported
          </p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-16 animate-marquee whitespace-nowrap will-change-transform">
              {[...BRANDS, ...BRANDS].map((b, i) => (
                <img
                  key={`${b.name}-${i}`}
                  src={b.src}
                  alt={`${b.name} logo`}
                  loading="lazy"
                  className="h-10 md:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  suffix,
  label,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card/70 p-5 shadow-card">
      <div className="font-display text-3xl md:text-4xl">
        <Counter to={value} suffix={suffix} decimals={decimals} />
      </div>
      <div className="mt-2 text-[11px] uppercase tracking-wider text-muted-foreground leading-snug">{label}</div>
    </div>
  );
}