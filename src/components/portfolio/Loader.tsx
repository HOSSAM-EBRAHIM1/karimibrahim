import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1100);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] bg-surface-dark grid place-items-center"
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="h-16 w-16 rounded-2xl border border-[color:var(--surface-dark-foreground)]/30 grid place-items-center font-display text-2xl text-[color:var(--surface-dark-foreground)]"
            >
              K
            </motion.div>
            <div className="h-px w-40 bg-[color:var(--surface-dark-foreground)]/20 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="h-full w-1/2 bg-[color:var(--surface-dark-foreground)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}