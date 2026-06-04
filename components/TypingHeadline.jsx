"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

// Título do hero com efeito de digitação; ao terminar, desenha o risco amarelo.
const SEG = [
  { t: "A plataforma educacional " },
  { t: "completa", mark: true },
  { t: "." },
  { t: " " },
  { t: "Com a sua marca.", green: true },
];
const FULL = SEG.map((s) => s.t).join("");
const TOTAL = FULL.length;

function Parts({ count, done }) {
  let rem = count;
  return SEG.map((s, i) => {
    const shown = Math.max(0, Math.min(s.t.length, rem));
    rem -= s.t.length;
    const text = s.t.slice(0, shown);
    if (s.mark) {
      return (
        <span key={i} className="relative inline-block whitespace-nowrap text-ink">
          <span className="relative z-10">{text}</span>
          <svg
            aria-hidden="true"
            className="absolute -bottom-1.5 left-0 h-[0.38em] w-full"
            viewBox="0 0 200 16"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M3 11C40 5 160 4 197 9"
              stroke="var(--amarelo-500)"
              strokeWidth="6"
              strokeLinecap="round"
              style={{
                strokeDasharray: 230,
                strokeDashoffset: done ? 0 : 230,
                transition: "stroke-dashoffset 0.6s ease 0.15s",
              }}
            />
          </svg>
        </span>
      );
    }
    return (
      <span key={i} className={s.green ? "text-verde-700" : "text-ink"}>
        {text}
      </span>
    );
  });
}

export default function TypingHeadline({ className = "" }) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduce) {
      setCount(TOTAL);
      setDone(true);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= TOTAL) {
        clearInterval(id);
        setDone(true);
      }
    }, 34);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <h1 aria-label={FULL} className={`relative font-display text-display font-extrabold text-ink ${className}`}>
      {/* camada invisível: reserva o espaço/altura final (evita reflow) */}
      <span className="invisible" aria-hidden="true">
        <Parts count={TOTAL} done={false} />
      </span>
      {/* camada visível: o texto sendo digitado */}
      <span className="absolute inset-0" aria-hidden="true">
        <Parts count={count} done={done} />
        {!done && (
          <span className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.08em] animate-pulse rounded-sm bg-ink align-baseline" />
        )}
      </span>
    </h1>
  );
}
