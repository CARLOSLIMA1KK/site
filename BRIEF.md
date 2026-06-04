# KodarEdu — Brief de Construção do Site

> Especificação completa para construir o site comercial/institucional da **KodarEdu**, uma plataforma educacional **white label** de **inteligência e gestão avaliativa** (simulados, ENEM, redação, banco de questões e relatórios). Montado a partir da análise dos concorrentes diretos — **Lize**, **Evolucional** e **TRIEduc** — reunindo o melhor de cada.

Este arquivo é o prompt-mestre do projeto. A implementação atual segue a stack e o design system abaixo; consulte o `README.md` para o status de construção.

---

## 1. Posicionamento

**KodarEdu** é uma **plataforma educacional white label** que resolve toda a **jornada avaliativa** da instituição: criar, aplicar, corrigir e analisar avaliações e simulados — com **correção por TRI**, **correção de redação (IA + especialista)**, **banco de questões**, **plataforma adaptativa** e **relatórios de inteligência de dados**. A instituição parceira coloca a **sua própria marca, cores e domínio**.

**Pilares de comunicação:** White Label · Autoridade · Impacto · Solução ENEM · Redes · Flexibilidade · Diferenciais · Benefícios.

**Públicos (B2B / B2B2C):** Escolas · Cursinhos/pré-vestibular · Redes de ensino & Secretarias · Sistemas de ensino e editoras (white label decisivo).

---

## 2. O que pegar de cada concorrente

- **Lize** — planos produtizados (do grátis ao avançado), ferramenta gratuita de aquisição, IA na criação/correção, integração com ERP, compra simples.
- **Evolucional** — taxonomia de soluções (digital/impresso/externa), stat band de autoridade, logo wall de prestígio, página de depoimentos, formulário qualificador no CTA.
- **TRIEduc** — página de Plataforma com bullets de capacidade, white label explícito, acessos por perfil, página de Relatórios, 3 pilares de autoridade, "Na Mídia", selos/prêmios, suporte humano.

**Síntese "best of":** taxonomia da Evolucional + Plataforma/Relatórios + white label + autoridade da TRIEduc + planos, IA e ferramenta grátis da Lize.

---

## 3. Arquitetura de Informação (menu)

- **A Plataforma** — Visão Geral · Tour · White Label · Relatórios & Inteligência de Dados · Acessos & Perfis
- **Soluções** — *Avaliação & Simulados:* Simulado ENEM (TRI) · SAEB · Vestibulares · Avaliação Diagnóstica/Processual · *Conteúdo & Aprendizagem:* Redação (IA + especialista) · Banco de Questões · Adaptativa (CAT) · Material de Revisão · *Gestão Avaliativa:* Criação & Correção de Provas
- **Planos** — Comparar Planos · KodarEdu Labs (grátis)
- **Para Quem** — Escolas · Cursinhos · Redes & Secretarias · Sistemas & Editoras
- **Resultados** — Números & Impacto · Cases & Depoimentos · Na Mídia
- **Conteúdo** (Blog) · **Entrar** · CTA: "Quero a KodarEdu na minha escola"

### Páginas (rota · prioridade)

| Página | Rota | Prio |
|---|---|---|
| Home | `/` | P0 |
| A Plataforma | `/plataforma` | P0 |
| Tour | `/plataforma/tour` | P1 |
| White Label | `/white-label` | P0 |
| Relatórios | `/plataforma/relatorios` | P0 |
| Acessos & Perfis | `/plataforma/acessos` | P2 |
| Soluções (visão geral) | `/solucoes` | P0 |
| Simulado ENEM (TRI) | `/solucoes/simulado-enem` | P0 |
| Simulado SAEB | `/solucoes/simulado-saeb` | P1 |
| Simulado Vestibulares | `/solucoes/simulado-vestibulares` | P1 |
| Avaliação Diagnóstica | `/solucoes/avaliacao` | P1 |
| Correção de Redação | `/solucoes/redacao` | P0 |
| Banco de Questões | `/solucoes/banco-de-questoes` | P1 |
| Adaptativa (CAT) | `/solucoes/adaptativa` | P1 |
| Material de Revisão | `/solucoes/revisa` | P2 |
| Criação & Correção de Provas | `/solucoes/provas` | P1 |
| Planos & Preços | `/planos` | P0 |
| KodarEdu Labs | `/labs` | P1 |
| Para Escolas | `/para/escolas` | P0 |
| Para Cursinhos | `/para/cursinhos` | P1 |
| Para Redes & Secretarias | `/para/redes` | P0 |
| Para Sistemas & Editoras | `/para/editoras` | P2 |
| Diferenciais | `/por-que-kodaredu` | P1 |
| Resultados & Impacto | `/resultados` | P0 |
| Cases & Depoimentos | `/depoimentos` | P1 |
| Na Mídia | `/na-midia` | P2 |
| Quem Somos | `/quem-somos` | P1 |
| Blog / Conteúdo | `/conteudo` | P2 |
| Contato | `/contato` | P0 |
| Privacidade / LGPD | `/privacidade` | P0 |
| Termos de Uso | `/termos` | P2 |

---

## 4. Design System

**Conceito:** "Brasil contemporâneo" — verde-bandeira como base institucional, azul-cobalto como tecnologia/confiança, **amarelo-ouro exclusivo para CTA e números de impacto**. Muito branco, cantos suaves, tipografia forte.

Tokens implementados em `app/globals.css` e espelhados em `tailwind.config.js`:

```
verde: 900 #0B3D2E · 700 #0E6E4E · 500 #1B9E6B · 100 #E6F4EE
azul:  900 #0A2540 · 600 #1456C4 · 100 #E8F0FE
amarelo: 500 #FFC400 · 300 #FFE08A
neutros: ink #0F1B17 · slate #4A5B54 · line #E3E8E6 · bg #FFF · bg-soft #F6F9F8
raios: sm 10 · md 18 · lg 28 | sombras: card / pop
```

**Tipografia:** display = Sora; corpo = Public Sans. H1 56–72px, H2 36–44px, H3 24–28px, corpo 17–18px.

**Movimento:** revelação escalonada na Home, scroll reveal (fade + translateY), count-up dos números, hover eleva cards. Respeitar `prefers-reduced-motion`.

**Acessibilidade AA:** contraste, foco visível, `alt`, navegação por teclado, modo daltonismo/baixa visão como diferencial citável.

---

## 5. Componentes (checklist §7 do brief)

Header (mega menu + drawer) · Footer · Button (primário/secundário/ghost) · Card · Pill/Tag · StatBand (count-up) · MockupFrame (browser + mobile) · LogoWall · WhiteLabelDemo (seletor de cor/logo ao vivo) · PricingTable · TestimonialCard/CaseCard/MediaCard · QualifierForm (tipo de instituição + perfil + LGPD) · Accordion/FAQ · CTASection · SectionWrapper · FreeToolCTA.

---

## 6. Diferenciais (mensagens-chave)

1. Tudo em uma só plataforma white label (TRI, redação IA, banco, adaptativa, relatórios).
2. IA + especialista humano na redação.
3. A cara da sua marca de verdade (cores, logo, links, domínio, app).
4. Inteligência de dados acionável com réguas ENEM/SAEB e integração ERP.
5. Flexível: online, impresso ou híbrido; do grátis ao enterprise.
6. Acessível e leve (nuvem, responsiva, daltonismo/baixa visão).
7. Implantação sem TI + suporte humano (WhatsApp, inclusive fds).
8. Autoridade e impacto (números, precisão, escolas renomadas, presença nacional).

> Sempre traduzir recurso → benefício.

---

## 7. Prints da plataforma

Ver tabela no `README.md`. Placeholders SVG em `public/assets/prints/` (regeneráveis via `scripts/gen-placeholders.mjs`).

---

## 8. SEO / Performance / Técnico

Meta por página com palavras-chave ("plataforma de avaliação white label", "simulado ENEM TRI", "correção de redação com IA", "banco de questões", "simulado SAEB", "gestão de provas"). Open Graph + favicon + sitemap.xml + robots.txt. Imagens WebP/AVIF, lazy-load, fontes `display:swap`, Lighthouse > 90. Mobile-first; mega menu vira drawer.

---

## 9. Ordem de construção

1. Tokens + Header/Footer. ✅
2. Componentes reutilizáveis. ✅
3. **Home** completa → revisar. ✅
4. White Label → Relatórios → Simulado ENEM → Redação → Para Escolas → Planos (P0).
5. Demais soluções, "Para quem", Labs, Resultados/Depoimentos/Na Mídia.
6. Quem Somos, Contato, Blog, páginas legais.
7. Passada final: SEO, acessibilidade, performance, responsividade.
