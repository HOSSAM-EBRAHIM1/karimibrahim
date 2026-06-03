import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const skills = [
  "Sales",
  "Account Management",
  "Business Development",
  "Negotiation",
  "Customer Relationship Management",
  "Social Media Marketing",
  "Content Planning",
  "Public Relations",
  "Leadership",
  "Team Management",
  "Data Collection",
  "Communication Skills",
  "Market Research",
  "Microsoft Office",
  "Problem Solving",
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Skills"
          title={<>The toolkit, <span className="italic text-[color:var(--accent)]">honed across</span> ten roles.</>}
          description="A blend of commercial, communication and analytical skills built on the floor — not in a deck."
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {skills.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-xl border border-border bg-card px-4 py-5 text-sm shadow-card hover:border-foreground/40 transition"
            >
              <span className="absolute top-3 right-3 text-[10px] tabular-nums text-muted-foreground/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="font-medium leading-snug">{s}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}