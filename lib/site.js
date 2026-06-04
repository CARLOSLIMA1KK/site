// Fonte única de verdade para navegação e conteúdo institucional da KodarEdu.
// Edite aqui números, links e textos sem mexer nos componentes.

export const SITE = {
  name: "KodarEdu",
  tagline: "Plataforma white label de avaliação e ENEM.",
  description:
    "Plataforma educacional white label de inteligência e gestão avaliativa: simulados por TRI, redação com IA, banco de questões, plataforma adaptativa e relatórios — com a marca da sua escola.",
  whatsapp: "https://wa.me/5500000000000",
  whatsappLabel: "Falar com especialista",
  login: "https://app.kodaredu.com.br",
  ctaPrimary: "Quero a KodarEdu na minha escola",
  ctaPrimaryHref: "/contato",
};

// Mega menu / cabeçalho
export const NAV = [
  {
    label: "A Plataforma",
    href: "/plataforma",
    columns: [
      {
        items: [
          { label: "Visão Geral", href: "/plataforma", desc: "Um hub para todo o ciclo avaliativo." },
          { label: "Tour pela Plataforma", href: "/plataforma/tour", desc: "Veja as telas por dentro." },
          { label: "White Label / Personalização", href: "/white-label", desc: "A cara da sua marca." },
          { label: "Relatórios & Inteligência de Dados", href: "/plataforma/relatorios", desc: "Decisões guiadas por dados." },
          { label: "Acessos & Perfis", href: "/plataforma/acessos", desc: "Do aluno ao gestor." },
        ],
      },
    ],
  },
  {
    label: "Soluções",
    href: "/solucoes",
    columns: [
      {
        title: "Avaliação & Simulados",
        items: [
          { label: "Simulado ENEM (TRI)", href: "/solucoes/simulado-enem" },
          { label: "Simulado SAEB", href: "/solucoes/simulado-saeb" },
          { label: "Simulado de Vestibulares", href: "/solucoes/simulado-vestibulares" },
          { label: "Avaliação Diagnóstica/Processual", href: "/solucoes/avaliacao" },
        ],
      },
      {
        title: "Conteúdo & Aprendizagem",
        items: [
          { label: "Correção de Redação (IA + especialista)", href: "/solucoes/redacao" },
          { label: "Banco de Questões / Itens", href: "/solucoes/banco-de-questoes" },
          { label: "Plataforma Adaptativa (CAT/trilhas)", href: "/solucoes/adaptativa" },
          { label: "Material de Revisão", href: "/solucoes/revisa" },
        ],
      },
      {
        title: "Gestão Avaliativa",
        items: [
          { label: "Criação & Correção de Provas (IA)", href: "/solucoes/provas" },
        ],
      },
    ],
  },
  {
    label: "Planos",
    href: "/planos",
    columns: [
      {
        items: [
          { label: "Comparar Planos", href: "/planos", desc: "Essencial · Profissional · Redes/Enterprise" },
          { label: "KodarEdu Labs — grátis", href: "/labs", desc: "Crie provas sem custo." },
        ],
      },
    ],
  },
  {
    label: "Para Quem",
    href: "/para/escolas",
    columns: [
      {
        items: [
          { label: "Escolas", href: "/para/escolas" },
          { label: "Cursinhos / Pré-vestibular", href: "/para/cursinhos" },
          { label: "Redes de Ensino & Secretarias", href: "/para/redes" },
          { label: "Sistemas de Ensino & Editoras", href: "/para/editoras" },
        ],
      },
    ],
  },
  {
    label: "Resultados",
    href: "/resultados",
    columns: [
      {
        items: [
          { label: "Números & Impacto", href: "/resultados" },
          { label: "Cases & Depoimentos", href: "/depoimentos" },
          { label: "Na Mídia", href: "/na-midia" },
        ],
      },
    ],
  },
  { label: "Conteúdo", href: "/conteudo" },
];

// Números de impacto (placeholders editáveis)
export const STATS = [
  { value: 320, suffix: " mil", label: "Alunos impactados" },
  { value: 1200, suffix: "+", label: "Instituições parceiras" },
  { value: 11, suffix: " mi", label: "Avaliações aplicadas" },
  { value: 99.7, suffix: "%", label: "Precisão dos dados (TRI)", decimals: 1 },
];

// Jornada avaliativa em 4 passos
export const JOURNEY = [
  { step: "01", title: "Criar", text: "Monte provas e simulados em minutos com IA e banco de questões autoral." },
  { step: "02", title: "Aplicar", text: "Online, impresso ou híbrido — do jeito que sua escola precisa." },
  { step: "03", title: "Corrigir", text: "Correção automática objetiva e discursiva, redação com IA + especialista." },
  { step: "04", title: "Analisar", text: "Relatórios por aluno, turma, competência e habilidade com réguas ENEM/SAEB." },
];

// Soluções em destaque (home)
export const FEATURED_SOLUTIONS = [
  {
    title: "Simulado ENEM (TRI)",
    href: "/solucoes/simulado-enem",
    tag: "TRI",
    print: "/assets/prints/relatorio-tri.svg",
    text: "Simulados no padrão ENEM com correção por TRI ajustada à régua oficial.",
  },
  {
    title: "Correção de Redação",
    href: "/solucoes/redacao",
    tag: "Com IA",
    print: "/assets/prints/redacao-correcao.svg",
    text: "Padrão ENEM com IA + corretor humano. O professor recupera horas.",
  },
  {
    title: "Banco de Questões",
    href: "/solucoes/banco-de-questoes",
    tag: "Autoral",
    print: "/assets/prints/banco-questoes.svg",
    text: "Milhares de itens inéditos por disciplina, nível e habilidade.",
  },
  {
    title: "Plataforma Adaptativa",
    href: "/solucoes/adaptativa",
    tag: "CAT",
    print: "/assets/prints/adaptativa-trilha.svg",
    text: "Teste adaptativo (CAT) que vira trilhas personalizadas por aluno.",
  },
  {
    title: "Relatórios & Dados",
    href: "/plataforma/relatorios",
    tag: "Inteligência",
    print: "/assets/prints/relatorio-gestor.svg",
    text: "Inteligência de dados acionável, com integração ao ERP escolar.",
  },
];

// 3 pilares de autoridade
export const PILLARS = [
  {
    title: "Qualidade Pedagógica",
    text: "Itens autorais alinhados à BNCC e ao ENEM, revisados por especialistas.",
    icon: "book",
  },
  {
    title: "DNA Tecnológico",
    text: "Plataforma em nuvem, leve, 100% responsiva e acessível — sem precisar de TI.",
    icon: "chip",
  },
  {
    title: "Rigor Metodológico (TRI)",
    text: "TRI ajustada às réguas oficiais do ENEM e SAEB para previsibilidade real.",
    icon: "target",
  },
];

// Para quem
export const AUDIENCES = [
  { title: "Escolas", href: "/para/escolas", text: "Mais tempo ao professor e resultado no ENEM.", icon: "school" },
  { title: "Cursinhos", href: "/para/cursinhos", text: "Aprovação, simulados TRI e marca própria.", icon: "rocket" },
  { title: "Redes & Secretarias", href: "/para/redes", text: "Gestão multiunidade e indicadores SAEB.", icon: "network" },
  { title: "Sistemas & Editoras", href: "/para/editoras", text: "Embarque a KodarEdu na sua bandeira.", icon: "book" },
];

// Diferenciais (mensagens-chave)
export const DIFFERENTIATORS = [
  "Tudo em uma só plataforma white label — simulados TRI, redação com IA, banco de questões, adaptativa e relatórios.",
  "IA + especialista humano na correção de redação — não só automático.",
  "A cara da sua marca de verdade: cores, logo, links, domínio e app próprios.",
  "Inteligência de dados acionável com réguas ENEM/SAEB e integração ao ERP escolar.",
  "Flexível: online, impresso ou híbrido — do plano grátis ao enterprise de redes.",
  "Acessível e leve: nuvem, responsiva, recursos para daltonismo e baixa visão.",
];

// FAQ curto (home)
export const FAQ_HOME = [
  {
    q: "O que significa ser white label?",
    a: "A plataforma fica com a cara da sua escola: suas cores, seu logo, seus links, seu domínio e, opcionalmente, um app na sua marca. Os alunos veem a sua instituição, não a KodarEdu.",
  },
  {
    q: "Preciso de equipe de TI para implantar?",
    a: "Não. A implantação é feita por nós, em nuvem, com suporte humano dedicado por WhatsApp — inclusive nos fins de semana.",
  },
  {
    q: "A correção por TRI segue o padrão do ENEM?",
    a: "Sim. Nossa TRI é ajustada às réguas oficiais do ENEM e do SAEB, o que dá previsibilidade real de desempenho aos seus alunos.",
  },
  {
    q: "Posso aplicar provas impressas e online?",
    a: "Sim. A KodarEdu é flexível: você aplica online, impresso (com malote e leitor de gabarito) ou no formato híbrido.",
  },
];

// LogoWall (placeholders nomeados)
export const PARTNER_LOGOS = [
  "Colégio Aurora",
  "Instituto Cedro",
  "Rede Horizonte",
  "Colégio Patativa",
  "Sistema Aprova",
  "Pré-Vest Nação",
];
