"use client";

import { useState } from "react";

// Mini-carrossel de imagens para um card (ex.: 2 prints de um recurso).
// Troque as imagens em `images` pelos prints reais da plataforma.
export default function MiniCarousel({ images = [], alt = "" }) {
  const [i, setI] = useState(0);
  const n = images.length;
  const go = (k) => setI((k + n) % n);

  if (n === 0) return null;

  return (
    <div className="group relative overflow-hidden rounded-md border border-line bg-bg-soft">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={images[i]}
        alt={`${alt} — exemplo ${i + 1}`}
        loading="lazy"
        className="aspect-[4/3] w-full object-cover"
      />

      {n > 1 && (
        <>
          {/* Setas (aparecem no hover) */}
          <button
            type="button"
            onClick={() => go(i - 1)}
            aria-label="Imagem anterior"
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 shadow-sm transition group-hover:opacity-100 focus-visible:opacity-100"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button
            type="button"
            onClick={() => go(i + 1)}
            aria-label="Próxima imagem"
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 shadow-sm transition group-hover:opacity-100 focus-visible:opacity-100"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>

          {/* Dots */}
          <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
            {images.map((_, k) => (
              <button
                key={k}
                type="button"
                onClick={() => go(k)}
                aria-label={`Ir para imagem ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  k === i ? "w-4 bg-white" : "w-1.5 bg-white/60 hover:bg-white/90"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
