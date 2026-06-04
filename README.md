# KodarEdu — Site institucional

Site comercial/institucional da **KodarEdu**, plataforma educacional **white label** de inteligência e gestão avaliativa (simulados, ENEM, redação, banco de questões e relatórios).

Construído a partir do `BRIEF.md`.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS 3** (design tokens em `app/globals.css` + `tailwind.config.js`)
- **Framer Motion** (scroll reveal, count-up, mega menu)
- Fontes: **Sora** (display) + **Public Sans** (corpo), via `next/font`
- Idioma: **pt-BR**

## Como rodar

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção
npm start          # servir o build
```

## Estrutura

```
app/
  layout.jsx          # Header + Footer globais, fontes, metadata/SEO
  globals.css         # tokens de design (CSS variables) + base
  page.jsx            # HOME (completa)
  not-found.jsx       # 404 branded ("em construção")
  sitemap.js          # sitemap.xml com todas as rotas planejadas
  robots.js           # robots.txt
  icon.svg            # favicon
components/            # componentes reutilizáveis (ver checklist do BRIEF §7)
  Header, Footer, Button, Pill, Card, Icon, Logo
  StatBand, MockupFrame, LogoWall, WhiteLabelDemo
  PricingTable*, Testimonial*, QualifierForm, FAQ, FreeToolCTA
  CTASection, SectionWrapper, Motion (Reveal/Stagger/CountUp)
lib/
  site.js             # FONTE ÚNICA de navegação e conteúdo (edite aqui)
public/assets/prints/  # placeholders SVG dos prints da plataforma
scripts/
  gen-placeholders.mjs # regenera os placeholders SVG
```

> `*` PricingTable e os cards de Case/Media serão criados junto às páginas internas correspondentes.

## Status

- [x] Tokens de design + Header/Footer
- [x] Componentes reutilizáveis base
- [x] **Home** completa
- [x] **Todas as 31 páginas** do `BRIEF.md` construídas (P0, P1 e P2)
- [ ] Passada final: substituir placeholders (prints, números, contatos, textos legais)

Todas as rotas verificadas (build estático + smoke test HTTP 200). Conteúdo de
exemplo marcado como ilustrativo onde aplicável (depoimentos, mídia, blog, cases).

## Prints da plataforma a fornecer

Os arquivos em `public/assets/prints/` são **placeholders SVG neutros**. Substitua pelos
prints reais (mesmos nomes, de preferência `.webp`/`.png` — ajuste as extensões em `lib/site.js`):

| Arquivo | Conteúdo |
|---|---|
| `home-dashboard` | Visão inicial / gestor |
| `relatorio-gestor` | Painel com indicadores |
| `relatorio-turma` | Desempenho por turma |
| `relatorio-habilidade` | Evolução por competência/habilidade |
| `simulado-andamento` | Simulado em execução |
| `relatorio-tri` | Resultado por TRI (régua ENEM/SAEB) |
| `redacao-correcao` | Correção de redação com marcações |
| `redacao-evolucao` | Evolução de nota de redação |
| `banco-questoes` | Banco com filtros |
| `editor-prova` | Criação de prova / malote |
| `correcao-automatica` | Correção automática / leitor de gabarito |
| `adaptativa-trilha` | Trilha adaptativa (CAT) |
| `whitelabel-personalizacao` | Tela de personalização (logo/cores) |
| `acessos-perfis` | Telas por perfil |
| `app-mobile` | App no celular (com a marca) |

## Placeholders a definir com o cliente

- **WhatsApp / telefone**: `SITE.whatsapp` em `lib/site.js`
- **Domínio de login**: `SITE.login`
- **Números de impacto** (`STATS`), **logos de parceiros** (`PARTNER_LOGOS`)
- **Endpoint do formulário** (CRM) e **tracking GA4/Pixel**: ver `components/QualifierForm.jsx`
- **Textos legais** (LGPD / Termos)
