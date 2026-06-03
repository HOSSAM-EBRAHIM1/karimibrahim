import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Education & Certifications"
          title={<>Academic ground, <span className="italic text-[color:var(--accent)]">commercial edge.</span></>}
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 rounded-3xl border border-border bg-card p-8 shadow-card"
          >
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-surface-dark text-[color:var(--surface-dark-foreground)] grid place-items-center">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">University</div>
                <div className="mt-1 font-display text-3xl">Ain Shams University</div>
                <div className="mt-1 text-muted-foreground">Faculty of Arts — Sociology Department</div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
              <Detail icon={BookOpen} label="Status" value="Final Semester" />
              <Detail icon={Award} label="GPA" value="3.75 / 4.0" />
              <Detail icon={GraduationCap} label="Field" value="Sociology" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border border-border bg-surface-dark text-[color:var(--surface-dark-foreground)] p-8 shadow-soft flex flex-col justify-between"
          >
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--surface-dark-foreground)]/60">Certification</div>
              <div className="mt-3 font-display text-2xl leading-tight">Media Buying Course</div>
              <p className="mt-3 text-sm text-[color:var(--surface-dark-foreground)]/70">
                Performance media planning, audience targeting and budget allocation across paid social and search.
              </p>
            </div>
            <div className="mt-8 text-xs uppercase tracking-[0.25em] text-[color:var(--accent)]">Completed</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Detail({ icon: Icon, label, value }: { icon: typeof Award; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border p-4 bg-background/60">
      <Icon className="h-4 w-4 text-muted-foreground" />
      <div className="mt-3 text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 font-medium">{value}</div>
    </div>
  );
}