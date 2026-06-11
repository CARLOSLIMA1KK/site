"use client";

import { useEffect } from "react";

// Microsoft Clarity carregado SOMENTE após o consentimento de cookies (LGPD).
// Liga na hora em que o usuário aceita (via evento "kodaredu:consent") e
// também em visitas seguintes, lendo o consentimento salvo no localStorage.
const CLARITY_ID = "x5gh5tf7nf";
const KEY = "kodaredu-cookie-consent";

function loadClarity() {
  if (typeof window === "undefined" || window.clarity) return; // evita carregar 2x
  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", CLARITY_ID);
}

export default function ClarityAnalytics() {
  useEffect(() => {
    try {
      if (localStorage.getItem(KEY) === "accepted") loadClarity();
    } catch {
      /* localStorage indisponível */
    }
    const onConsent = (e) => {
      if (e.detail === "accepted") loadClarity();
    };
    window.addEventListener("kodaredu:consent", onConsent);
    return () => window.removeEventListener("kodaredu:consent", onConsent);
  }, []);

  return null;
}
