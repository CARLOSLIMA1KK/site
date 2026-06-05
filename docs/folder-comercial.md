# Folder comercial KodarEdu — especificação

Documento de referência do folder comercial em PDF (`public/kodaredu-folder-comercial.pdf`).
Serve para (a) regenerar o PDF no projeto e (b) recriar o material em qualquer
outra ferramenta/IA mantendo identidade, textos e assets idênticos ao site.

## Como gerar / regenerar

```bash
npm i -D puppeteer        # baixa o Chromium na primeira vez
node scripts/gen-folder.mjs
# saída: public/kodaredu-folder-comercial.pdf  (A4, 10 páginas)

# pré-visualização em PNG (uma imagem por página em /tmp/folder-preview):
PREVIEW=1 node scripts/gen-folder.mjs
```

O script lê os textos de `lib/site.js` e `lib/solutions.js` e embute os SVGs/fotos
de `public/assets/**` como data-URI — ou seja, qualquer ajuste de copy no site se
reflete no folder ao regenerar.

## Identidade (igual ao site)

- **Cores da logo:** verde `#1ba559`, amarelo `#ffc400`, azul `#1e50e0`, navy/ink `#0b1033`.
- **Fontes:** Sora (display/títulos) + Public Sans (corpo).
- **Marca "Edu":** sempre realçada (E verde, d amarelo, u azul, em Sora) em
  `Edu.IA`, `Recursos Edu` e no wordmark `KodarEdu`. Nunca em "Educacional/educação".
- **Fundo escuro:** gradiente `linear-gradient(135deg,#0b1033,#0e1e4d 52%,#15327a)` (capa e contato).
- **Formato:** A4 retrato, 10 páginas, sem margem de página (margens internas 16/15mm).

## Estrutura página a página

| # | Seção | Conteúdo | Assets |
|---|-------|----------|--------|
| 1 | **Capa** | Wordmark, pills, "A plataforma completa de avaliação. Com a sua marca.", `SITE.description`, contatos | `home-dashboard.svg` |
| 2 | **Quem somos + números** | Parágrafo institucional, `STATS` (300 mil+, 4M+, 1M+, 99%), 3 `PILLARS` | — |
| 3 | **Visão geral** | "Robusta por dentro, simples por fora", 3 grupos (Avaliações & Ferramentas / Recursos Edu / Edu.IA), 8 `PLATFORM_CAPABILITIES` | — |
| 4 | **Soluções I** | Provas, Simulados ENEM, Simulados SAEB, Produção Textual (card: thumb + tag + texto + 3 bullets) | `editor-prova`, `relatorio-tri`, `relatorio-gestor`, `redacao-correcao` |
| 5 | **Soluções II** | Banco de Itens, Trilha adaptativa (CAT), Integração físico-digital, Edu.IA | `banco-questoes`, `adaptativa-trilha`, `correcao-automatica`, `edu-ia-professor` |
| 6 | **Relatórios** | "Decisões pedagógicas guiadas por dados precisos", print grande, 6 `REPORT_VIEWS` | `relatorios-consolidado.svg` |
| 7 | **Acessos & Perfis** | 4 perfis (`ACCESS_PROFILES`): Aluno, Professor, Gestor/Coordenação, Rede — intro + 4 ofertas | `perfil-*.svg` |
| 8 | **White Label** | "A plataforma com a cara da sua marca", foto de dispositivos, 6 itens de personalização | `white-label-devices.jpg` |
| 9 | **Para quem** | `AUDIENCES`: Escolas, Cursinhos, Redes & Secretarias, Sistemas & Editoras (com foto) | `para-*-hero.jpg` |
| 10 | **CTA / Contato** | "Leve a plataforma...", e-mail, WhatsApp, plataforma, site, garantia 30 dias, planos sob consulta | — |

## Fontes de conteúdo

- `lib/site.js` → `SITE`, `STATS`, `PILLARS`, `PLATFORM_CAPABILITIES`, `ACCESS_PROFILES`, `REPORT_VIEWS`, `AUDIENCES`, `PLANS`.
- `lib/solutions.js` → `SOLUTIONS` (subtítulos das soluções SAEB, adaptativa, banco, integração, Edu.IA).
- Cards de Provas/ENEM/Produção Textual têm copy curta definida em `SOLUTION_CARDS` dentro de `scripts/gen-folder.mjs`.

## Notas comerciais

- **Planos:** apresentados como "sob consulta" (sem valores fixos), CTA leva a demonstração/proposta.
- **Contatos:** `contato@kodartech.com.br`, `+55 83 98787-9695`, `app.kodaredu.com.br`, `kodaredu.com.br`.
- O PDF também fica acessível pela web em `/kodaredu-folder-comercial.pdf` (pode virar um botão "Baixar folder" no site, se desejado).
