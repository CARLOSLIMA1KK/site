"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./Button";

const KEY = "kodaredu-cookie-consent";

// Banner de consentimento de cookies (LGPD). Aparece na primeira visita.
export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setOpen(true);
    } catch {
      /* localStorage indisponível */
    }
  }, []);

  function decide(value) {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setOpen(false);
    // TODO: ativar/desativar tracking (GA4/Pixel) conforme `value` ("accepted" | "rejected").
  }

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6" role="dialog" aria-label="Aviso de cookies" aria-live="polite">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-lg border border-line bg-white p-5 shadow-pop sm:flex-row sm:items-center sm:gap-5">
        <p className="text-sm leading-relaxed text-slate">
          Usamos cookies para melhorar sua experiência e analisar o uso do site. Você pode aceitar
          todos ou recusar. Saiba mais na nossa{" "}
          <Link href="/privacidade" className="font-semibold text-verde-700 underline">
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="flex flex-none gap-3">
          <Button onClick={() => decide("rejected")} variant="secondary" size="sm">
            Negar
          </Button>
          <Button onClick={() => decide("accepted")} variant="primary" size="sm">
            Aceitar todos
          </Button>
        </div>
      </div>
    </div>
  );
}
