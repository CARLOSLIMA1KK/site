"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Abas simples e acessíveis. tabs = [{ label, content }]
export default function Tabs({ tabs = [] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div role="tablist" className="flex flex-wrap gap-2 rounded-full border border-line bg-bg-soft p-1.5">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              active === i ? "bg-verde-700 text-white shadow-card" : "text-slate hover:text-ink"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            role="tabpanel"
          >
            {tabs[active].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
