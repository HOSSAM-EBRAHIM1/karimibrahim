import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Linkedin, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="bg-surface-dark text-[color:var(--surface-dark-foreground)] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          invert
          eyebrow="Contact"
          title={<>Let's build the next <span className="italic text-[color:var(--accent)]">growth chapter</span> together.</>}
          description="Open to full-time roles, freelance projects and partnerships in sales, marketing and business development."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          <ContactCard
            icon={Phone}
            label="Phone"
            value="01021680972"
            href="tel:+201021680972"
          />
          <ContactCard
            icon={Mail}
            label="Email"
            value="arqamkarim74@gmail.com"
            href="mailto:arqamkarim74@gmail.com"
          />
          <ContactCard
            icon={MessageCircle}
            label="WhatsApp"
            value="Chat instantly"
            href="https://wa.me/201021680972"
          />
          <ContactCard
            icon={Linkedin}
            label="LinkedIn"
            value="Connect with me"
            href="#"
          />
        </div>

        <motion.a
          href="mailto:arqamkarim74@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 group block rounded-3xl border border-[color:var(--surface-dark-foreground)]/15 p-10 md:p-14 hover:border-[color:var(--accent)]/60 transition"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="font-display text-4xl md:text-6xl leading-[1.05]">
              arqamkarim74<span className="text-[color:var(--accent)]">@</span>gmail.com
            </div>
            <ArrowUpRight className="h-10 w-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </motion.a>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group rounded-2xl border border-[color:var(--surface-dark-foreground)]/15 glass-dark p-6 flex items-center justify-between hover:border-[color:var(--accent)]/50 transition"
    >
      <div className="flex items-center gap-4">
        <div className="h-11 w-11 rounded-xl bg-[color:var(--surface-dark-foreground)]/10 grid place-items-center">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--surface-dark-foreground)]/60">{label}</div>
          <div className="mt-1 font-medium">{value}</div>
        </div>
      </div>
      <ArrowUpRight className="h-5 w-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
    </a>
  );
}