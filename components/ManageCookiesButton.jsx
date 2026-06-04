"use client";

// Reabre o banner de cookies (usado no rodapé).
export default function ManageCookiesButton({ className = "" }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("kodaredu:open-cookies"))}
      className={className}
    >
      Cookies
    </button>
  );
}
