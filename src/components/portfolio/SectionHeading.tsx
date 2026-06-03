import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  invert,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  invert?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.5 }}
        className={`text-xs uppercase tracking-[0.3em] ${invert ? "text-[color:var(--surface-dark-foreground)]/60" : "text-muted-foreground"}`}
      >
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`mt-5 text-base md:text-lg ${invert ? "text-[color:var(--surface-dark-foreground)]/75" : "text-muted-foreground"}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}