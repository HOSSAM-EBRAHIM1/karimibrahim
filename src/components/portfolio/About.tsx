import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { GraduationCap, Handshake, Megaphone, BarChart3 } from "lucide-react";

const pillars = [
  { icon: Handshake, title: "Sales & Accounts", text: "Closing, retention and account growth across agencies and FMCG brands." },
  { icon: Megaphone, title: "Marketing & PR", text: "Social strategy, content planning and public relations for lifestyle brands." },
  { icon: BarChart3, title: "Data & Research", text: "Sports data collection at Arqam FC and customer market research." },
  { icon: GraduationCap, title: "Sociology Lens", text: "A behavioral, people-first take on business — the way modern teams sell." },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="About"
          title={<>A people-first operator <span className="italic text-[color:var(--accent)]">at the intersection</span> of sales, marketing & data.</>}
          description="Final-semester Sociology student at Ain Shams University with a 3.75 GPA, blending strong communication skills with hands-on experience in sales, account management, PR, social media management and sports data collection. Interested in marketing, business development, customer relations and analytics."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-card hover:-translate-y-1 hover:border-foreground/30 transition-all"
            >
              <div className="h-11 w-11 rounded-xl bg-surface-dark text-[color:var(--surface-dark-foreground)] grid place-items-center">
                <p.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 font-display text-xl">{p.title}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}