"use client";

import { useState } from "react";
import Button from "./Button";

// Captura de lead enxuta (nome + e-mail) para o KodarEdu Labs.
export default function LeadForm({ cta = "Criar prova grátis" }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (!data.name?.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email || "")) {
      setError("Preencha nome e um e-mail válido.");
      return;
    }
    setError("");
    // TODO: integrar com CRM/endpoint + tracking (placeholder).
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-verde-500/40 bg-verde-100 p-6 text-center">
        <p className="font-display text-lg font-bold text-verde-900">Tudo certo! 🎉</p>
        <p className="mt-1 text-[15px] text-slate">
          Enviamos o acesso ao KodarEdu Labs para o seu e-mail. Bom trabalho!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-lg border border-line bg-white p-6 shadow-card">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          placeholder="Seu nome"
          aria-label="Seu nome"
          className="w-full rounded-md border border-line bg-white px-4 py-3 text-[15px] outline-none focus:border-verde-700"
        />
        <input
          name="email"
          type="email"
          placeholder="Seu e-mail"
          aria-label="Seu e-mail"
          className="w-full rounded-md border border-line bg-white px-4 py-3 text-[15px] outline-none focus:border-verde-700"
        />
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      <div className="mt-4">
        <Button type="submit" variant="primary" arrow className="w-full sm:w-auto">{cta}</Button>
      </div>
      <p className="mt-3 text-xs text-slate">
        Ao continuar, você concorda com a{" "}
        <a href="/privacidade" className="font-semibold text-verde-700 underline">Política de Privacidade</a>.
      </p>
    </form>
  );
}
