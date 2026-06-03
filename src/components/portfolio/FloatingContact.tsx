import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingContact() {
  return (
    <motion.a
      href="https://wa.me/201021680972"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-surface-dark text-[color:var(--surface-dark-foreground)] grid place-items-center shadow-soft"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
}