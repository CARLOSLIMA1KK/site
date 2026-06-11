import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

// Envio do formulário de contato por e-mail via Resend.
// Configure no Vercel (Settings → Environment Variables):
//   RESEND_API_KEY   (obrigatório)  -> sua chave da Resend (re_...)
//   CONTACT_TO       (opcional)     -> e-mail que recebe (padrão: SITE.email)
//   CONTACT_FROM     (opcional)     -> remetente verificado; enquanto não
//                                      verificar o domínio, use o padrão de teste.
export const runtime = "nodejs";

const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(req) {
  let data;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Requisição inválida." }, { status: 400 });
  }

  const { name, institution, institutionType, profile, students, phone, email } = data || {};

  // Validação básica no servidor.
  if (
    !name?.trim() ||
    !institution?.trim() ||
    !email?.trim() ||
    !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)
  ) {
    return NextResponse.json({ ok: false, error: "Preencha nome, instituição e um e-mail válido." }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("RESEND_API_KEY ausente");
    return NextResponse.json({ ok: false, error: "Envio de e-mail não configurado." }, { status: 500 });
  }

  const TO = process.env.CONTACT_TO || SITE.email;
  const FROM = process.env.CONTACT_FROM || "KodarEdu <onboarding@resend.dev>";

  const rows = [
    ["Nome", name],
    ["Instituição", institution],
    ["Tipo de instituição", institutionType],
    ["Perfil", profile],
    ["Nº de alunos", students],
    ["Telefone / WhatsApp", phone],
    ["E-mail", email],
  ]
    .filter(([, v]) => v && String(v).trim())
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;color:#4a5170;font:600 13px sans-serif">${esc(k)}</td><td style="padding:6px 12px;color:#0b1033;font:13px sans-serif">${esc(v)}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:sans-serif;color:#0b1033">
      <h2 style="margin:0 0 8px">Novo contato pelo site</h2>
      <p style="color:#4a5170;margin:0 0 16px">Recebido pelo formulário de demonstração da KodarEdu.</p>
      <table style="border-collapse:collapse;border:1px solid #e6e8f0;border-radius:8px">${rows}</table>
    </div>`;

  try {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `Novo contato — ${name} (${institution})`,
        html,
      }),
    });

    if (!resp.ok) {
      const detail = await resp.text();
      console.error("Resend falhou:", resp.status, detail);
      return NextResponse.json({ ok: false, error: "Não foi possível enviar agora." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Erro ao enviar contato:", e);
    return NextResponse.json({ ok: false, error: "Erro inesperado ao enviar." }, { status: 500 });
  }
}
