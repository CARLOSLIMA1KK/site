"use client";

import { useState } from "react";
import Button from "./Button";

const INSTITUTION_TYPES = [
  "Escola privada",
  "Escola pública",
  "Secretaria de Educação",
  "Cursinho / Pré-vestibular",
  "Sistema de ensino / Editora",
];

const PROFILES = ["Aluno", "Professor", "Coordenador(a)", "Diretor(a)", "Gestor(a) de rede"];

// Formulário qualificador (tipo de instituição + perfil) com validação e LGPD.
export default function QualifierForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const next = {};
    if (!data.name?.trim()) next.name = "Informe seu nome.";
    if (!data.institution?.trim()) next.institution = "Informe a instituição.";
    if (!data.email?.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) next.email = "E-mail inválido.";
    if (!data.consent) next.consent = "É necessário concordar com a Política de Privacidade.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // TODO: integrar com CRM/endpoint + tracking GA4/Pixel (placeholder).
      setSent(true);
    }
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-verde-500/40 bg-verde-100 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-verde-500 text-white">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l5 5 9-9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-verde-900">Recebemos seu contato!</h3>
        <p className="mt-2 text-slate">
          Um especialista da KodarEdu vai falar com você em breve. Quer adiantar? Chame no WhatsApp.
        </p>
        <div className="mt-6 flex justify-center">
          <Button href="https://wa.me/5500000000000" external variant="secondary">
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-lg border border-line bg-white p-6 shadow-card sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome completo" name="name" error={errors.name} />
        <Field label="Instituição" name="institution" error={errors.institution} />
        <SelectField label="Tipo de instituição" name="institutionType" options={INSTITUTION_TYPES} />
        <SelectField label="Seu perfil" name="profile" options={PROFILES} />
        <Field label="Nº de alunos" name="students" type="number" optional />
        <Field label="Telefone / WhatsApp" name="phone" type="tel" optional />
        <div className="sm:col-span-2">
          <Field label="E-mail" name="email" type="email" error={errors.email} />
        </div>
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm text-slate">
        <input type="checkbox" name="consent" value="1" className="mt-1 h-4 w-4 accent-verde-700" />
        <span>
          Concordo em ser contatado(a) e com o tratamento dos meus dados conforme a{" "}
          <a href="/privacidade" className="font-semibold text-verde-700 underline">
            Política de Privacidade (LGPD)
          </a>
          .
        </span>
      </label>
      {errors.consent && <p className="mt-1 text-sm text-red-600">{errors.consent}</p>}

      <div className="mt-6">
        <Button type="submit" variant="primary" size="lg" arrow className="w-full sm:w-auto">
          Quero a KodarEdu na minha escola
        </Button>
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", error, optional = false }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-ink">
        {label} {optional && <span className="font-normal text-slate/60">(opcional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        aria-invalid={!!error}
        className={`w-full rounded-md border bg-white px-4 py-3 text-[15px] outline-none transition focus:border-verde-700 ${
          error ? "border-red-400" : "border-line"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

function SelectField({ label, name, options }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue={options[0]}
        className="w-full rounded-md border border-line bg-white px-4 py-3 text-[15px] outline-none transition focus:border-verde-700"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
