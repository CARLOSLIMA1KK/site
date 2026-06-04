// Fonte única de verdade para navegação e conteúdo institucional da KodarEdu.
// Edite aqui números, links e textos sem mexer nos componentes.

export const SITE = {
  name: "KodarEdu",
  tagline: "Plataforma white label de avaliação e ENEM.",
  description:
    "Plataforma educacional white label de inteligência e gestão avaliativa: simulados por TRI, Produção Textual com IA, Banco de Itens, trilha adaptativa e Edu.IA, com a marca da sua escola.",
  whatsapp: "https://wa.me/5500000000000",
  whatsappLabel: "Falar com especialista",
  login: "https://app.kodaredu.com.br",
  ctaPrimary: "Quero uma demonstração",
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
        title: "Avaliações & Ferramentas",
        items: [
          { label: "Simulados ENEM", href: "/solucoes/simulado-enem" },
          { label: "Simulados SAEB", href: "/solucoes/simulado-saeb" },
          { label: "Trilha adaptativa (CAT)", href: "/solucoes/adaptativa" },
          { label: "Produção Textual", href: "/solucoes/redacao" },
        ],
      },
      {
        title: "Recursos Edu",
        items: [
          { label: "Banco de Itens", href: "/solucoes/banco-de-questoes" },
          { label: "Criação e Correção de Provas", href: "/solucoes/provas" },
          { label: "Integração físico-digital", href: "/solucoes/integracao" },
        ],
      },
      {
        title: "Edu.IA",
        items: [
          { label: "Edu.IA para professores", href: "/solucoes/edu-ia" },
        ],
      },
    ],
  },
  { label: "Planos", href: "/planos" },
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
  { step: "01", title: "Criar", text: "Monte provas e simulados em minutos com IA e o Banco de Itens autoral." },
  { step: "02", title: "Aplicar", text: "Online, impresso ou híbrido — do jeito que sua escola precisa." },
  { step: "03", title: "Corrigir", text: "Correção automática objetiva e discursiva, redação com IA + especialista." },
  { step: "04", title: "Analisar", text: "Relatórios por aluno, turma, competência e habilidade com réguas ENEM/SAEB." },
];

// Soluções em destaque (home)
export const FEATURED_SOLUTIONS = [
  {
    title: "Simulados ENEM",
    href: "/solucoes/simulado-enem",
    tag: "TRI",
    print: "/assets/prints/relatorio-tri.svg",
    text: "Simulados no padrão ENEM com correção por TRI ajustada à régua oficial.",
  },
  {
    title: "Produção Textual",
    href: "/solucoes/redacao",
    tag: "Com IA",
    print: "/assets/prints/redacao-correcao.svg",
    text: "Correção de redação no padrão ENEM com IA + corretor humano.",
  },
  {
    title: "Banco de Itens",
    href: "/solucoes/banco-de-questoes",
    tag: "Autoral",
    print: "/assets/prints/banco-questoes.svg",
    text: "Milhares de itens inéditos por disciplina, nível e habilidade.",
  },
  {
    title: "Trilha adaptativa",
    href: "/solucoes/adaptativa",
    tag: "CAT",
    print: "/assets/prints/adaptativa-trilha.svg",
    text: "Teste adaptativo (CAT) que vira trilhas personalizadas por aluno.",
  },
  {
    title: "Edu.IA para professores",
    href: "/solucoes/edu-ia",
    tag: "IA",
    print: "/assets/prints/edu-ia-professor.svg",
    text: "Um assistente de IA com várias ferramentas no dia a dia do professor.",
  },
];

// Capacidades da plataforma (compartilhado entre Home e /plataforma)
export const PLATFORM_CAPABILITIES = [
  { title: "Em nuvem e leve", text: "Roda no navegador, sem instalação e sem infraestrutura sua.", icon: "chip" },
  { title: "100% responsiva", text: "Mesma experiência no computador, tablet e celular.", icon: "bolt" },
  { title: "Acessível (AA)", text: "Recursos para baixa visão e daltonismo, navegação por teclado.", icon: "users" },
  { title: "Personalizável (white label)", text: "A cara da sua marca: cores, logo, links e domínio.", icon: "brush" },
  { title: "Acessos por nível", text: "Cada perfil vê só o que precisa, do aluno ao gestor.", icon: "shield" },
  { title: "Provas híbridas", text: "Online, impressas ou as duas — com leitor de gabarito.", icon: "book" },
  { title: "Suporte humano", text: "Atendimento por WhatsApp, inclusive nos fins de semana.", icon: "clock" },
  { title: "Segura e em conformidade", text: "Infraestrutura em nuvem e tratamento de dados conforme a LGPD.", icon: "lock" },
];

// Perfis de acesso (compartilhado entre Home e /plataforma/acessos)
export const ACCESS_PROFILES = [
  {
    name: "Aluno",
    slug: "aluno",
    desc: "Faz avaliações, vê notas, trilhas e evolução.",
    icon: "rocket",
    print: "/assets/prints/perfil-aluno.svg",
    photo: "/assets/personas/aluno.jpg",
    intro:
      "Para o aluno, a KodarEdu reúne em um só lugar — com a marca da escola — os simulados, a Produção Textual e a trilha de estudos. Ele acompanha a própria nota TRI, vê onde precisa melhorar e estuda no ritmo dele, no computador ou no app.",
    offers: [
      "Simulados ENEM e SAEB com nota por TRI",
      "Produção Textual com devolutiva por competência",
      "Trilha adaptativa (CAT) personalizada",
      "Gabarito comentado e ranking",
      "Evolução por área e habilidade",
      "Acesso pelo app, com a marca da escola",
    ],
  },
  {
    name: "Professor",
    slug: "professor",
    desc: "Cria, aplica e corrige avaliações e redações.",
    icon: "brush",
    print: "/assets/prints/perfil-professor.svg",
    photo: "/assets/personas/professor.jpg",
    intro:
      "O professor ganha horas de volta: cria provas com o Banco de Itens e IA, aplica online ou impresso e deixa a correção — objetiva, discursiva e de redação — com a plataforma. O Edu.IA ainda ajuda a planejar aulas, atividades e feedback.",
    offers: [
      "Criação de provas com Banco de Itens e IA",
      "Correção automática (objetiva e discursiva)",
      "Correção de redação com IA + OCR de manuscritos",
      "Edu.IA: planos de aula, atividades e questões",
      "Relatórios da turma por habilidade",
      "Materiais de apoio para pré e pós-aula",
    ],
  },
  {
    name: "Gestor/Coordenação",
    slug: "gestao",
    desc: "Acompanha turmas, indicadores e a visão completa da escola.",
    icon: "chart",
    print: "/assets/prints/perfil-gestor.svg",
    photo: "/assets/personas/gestao.jpg",
    intro:
      "Da coordenação à direção, a KodarEdu entrega a visão completa da escola: desempenho por turma, disciplina e habilidade, comparativos e evolução, previsibilidade de ENEM/SAEB por TRI e relatórios exportáveis — tudo integrado ao ERP e com a configuração da marca, sem depender de TI.",
    offers: [
      "Indicadores por turma, disciplina e habilidade",
      "Comparativos, ranking e evolução por ciclo",
      "Réguas ENEM/SAEB por TRI e previsibilidade",
      "Relatórios exportáveis da escola",
      "Gestão de professores, usuários e avaliações",
      "Integração com ERP e configuração da marca",
    ],
  },
  {
    name: "Rede",
    slug: "rede",
    desc: "Consolidação multiunidade para secretarias.",
    icon: "network",
    print: "/assets/prints/perfil-rede.svg",
    photo: "/assets/personas/rede.jpg",
    intro:
      "Redes de ensino e secretarias consolidam os dados de todas as unidades em um só painel: comparam escolas, acompanham indicadores SAEB com benchmark nacional e gerenciam tudo de forma centralizada, com conformidade LGPD e BNCC.",
    offers: [
      "Visão consolidada multiunidade",
      "Comparação entre escolas da rede",
      "Indicadores SAEB e benchmark nacional",
      "Gestão centralizada e SSO",
      "Conformidade com LGPD e BNCC",
      "Apoio à formação de professores",
    ],
  },
];

// Visões de análise dos relatórios (compartilhado entre Home e /plataforma/relatorios)
export const REPORT_VIEWS = [
  { title: "Por aluno", text: "Desempenho individual, evolução e pontos de atenção." },
  { title: "Por turma", text: "Comparativos entre turmas e ranking interno." },
  { title: "Por disciplina", text: "Onde a escola avança e onde precisa reforçar." },
  { title: "Por competência", text: "Leitura pedagógica alinhada à BNCC." },
  { title: "Por habilidade", text: "Granularidade que orienta o plano de aula." },
  { title: "Por rede", text: "Visão consolidada multiunidade para secretarias." },
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
  "Tudo em uma só plataforma white label — simulados TRI, Produção Textual com IA, Banco de Itens, trilha adaptativa, provas com IA e Edu.IA.",
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

// Planos produtizados (todos white label) — placeholders de preço editáveis
export const PLANS = [
  {
    name: "Essencial",
    tagline: "Para começar a corrigir e analisar.",
    priceLabel: "Sob consulta",
    features: [
      "Correção automática de provas objetivas",
      "Leitor de gabarito",
      "Relatórios básicos por aluno e turma",
      "Aplicação online ou impressa",
      "Suporte por WhatsApp",
    ],
    cta: { label: "Solicitar proposta", href: "/contato" },
  },
  {
    name: "Profissional",
    tagline: "A plataforma completa de avaliação.",
    priceLabel: "Sob consulta",
    featured: true,
    features: [
      "Tudo do Essencial",
      "Edu.IA para professores",
      "Banco de Itens autoral",
      "Simulados ENEM/SAEB com TRI",
      "Produção Textual (IA + especialista)",
      "Trilha adaptativa (CAT)",
      "Relatórios por competência e habilidade",
    ],
    cta: { label: "Quero este plano", href: "/contato" },
  },
  {
    name: "Redes / Enterprise",
    tagline: "Para redes de ensino e secretarias.",
    priceLabel: "Sob medida",
    features: [
      "Tudo do Profissional",
      "Gestão multiunidade centralizada",
      "Indicadores SAEB e benchmark nacional",
      "Integrações e SSO",
      "Integração com ERP escolar",
      "Atendimento dedicado",
    ],
    cta: { label: "Falar com o time", href: "/contato" },
  },
];

export const PLANS_FAQ = [
  {
    q: "Todos os planos são white label?",
    a: "Sim. Em todos os planos a plataforma assume a marca, as cores e o domínio da sua instituição.",
  },
  {
    q: "Como funciona a cobrança?",
    a: "A cobrança é recorrente, normalmente por aluno ativo, com nota fiscal. O plano Redes/Enterprise tem proposta sob medida conforme a escala.",
  },
  {
    q: "Existe período de garantia?",
    a: "Sim, oferecemos garantia de 30 dias. Se a plataforma não fizer sentido para a sua escola nesse período, devolvemos o investimento.",
  },
  {
    q: "Quanto tempo leva a implantação?",
    a: "Poucos dias. Cuidamos de toda a configuração e da personalização da sua marca — você não precisa de equipe de TI.",
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
