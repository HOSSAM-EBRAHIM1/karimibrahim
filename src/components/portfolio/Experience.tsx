import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const experiences = [
  { role: "Account Manager", company: "Medrar Marketing Company", tag: "Marketing" },
  { role: "Sales Representative", company: "Medrar Marketing Company", tag: "Sales" },
  { role: "Sales Representative", company: "X.Dot Agency", tag: "Agency" },
  { role: "Sales Representative", company: "Naw Plast Group", tag: "Industry" },
  { role: "Sales Representative", company: "Mazaq Al Lahm", tag: "FMCG" },
  { role: "Social Media Specialist", company: "Cup Brand", tag: "Social" },
  { role: "Social Media Specialist", company: "Fashion Avenue", tag: "Retail" },
  { role: "Data Collector & Information Specialist", company: "Arqam FC", tag: "Sports Data" },
  { role: "Public Relations (PR)", company: "Rokia Group", tag: "PR" },
  { role: "Team Leader", company: "Traffic Marker", tag: "Leadership" },
];

export function Experience() {
  return (
    <section id="experience" className="bg-surface-dark text-[color:var(--surface-dark-foreground)] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          invert
          eyebrow="Experience"
          title={<>Ten roles. <span className="italic text-[color:var(--accent)]">One throughline</span> — people, persuasion and growth.</>}
          description="From front-line sales reps to account management, PR and sports data, every role sharpened a different muscle. Below is the timeline."
        />

        <div className="mt-16 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[color:var(--surface-dark-foreground)]/15 md:-translate-x-1/2" aria-hidden />
          <ul className="space-y-6 md:space-y-10">
            {experiences.map((e, i) => {
              const left = i % 2 === 0;
              return (
                <motion.li
                  key={`${e.role}-${e.company}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: 0.04 * i }}
                  className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${left ? "" : "md:[&>*:first-child]:col-start-2"}`}
                >
                  <span className="absolute left-4 md:left-1/2 top-5 h-3 w-3 -translate-x-1/2 rounded-full bg-[color:var(--accent)] ring-4 ring-[color:var(--surface-dark)]" />
                  <div className={`${left ? "md:text-right md:pr-8" : "md:pl-8"} rounded-2xl border border-[color:var(--surface-dark-foreground)]/10 glass-dark p-6 hover:border-[color:var(--accent)]/50 transition`}>
                    <div className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--accent)]">{e.tag}</div>
                    <div className="mt-2 font-display text-2xl">{e.role}</div>
                    <div className="mt-1 text-[color:var(--surface-dark-foreground)]/70 text-sm">{e.company}</div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}