// Conteúdo das páginas de solução (template SolutionPage).

export const SOLUTIONS = {
  "simulado-saeb": {
    meta: {
      title: "Simulado SAEB alinhado à BNCC",
      description:
        "Diagnóstico alinhado ao SAEB e à BNCC, com comparação a benchmark nacional. Ideal para redes públicas e secretarias de educação.",
    },
    hero: {
      eyebrow: "Avaliação & Simulados",
      title: "Simulado SAEB alinhado à",
      highlight: "BNCC.",
      subtitle:
        "Diagnostique o desempenho da sua rede no padrão SAEB, compare com o benchmark nacional e oriente políticas pedagógicas com dados confiáveis.",
      pills: ["BNCC", "Benchmark nacional", "Redes públicas", "White Label"],
      mockup: { src: "/assets/prints/relatorio-tri.svg", alt: "Relatório SAEB", label: "Resultado SAEB" },
    },
    features: {
      title: "Diagnóstico no padrão da avaliação oficial",
      items: [
        { title: "Alinhado ao SAEB/BNCC", text: "Itens e escala fiéis à avaliação nacional." },
        { title: "Benchmark nacional", text: "Compare sua rede com referências do país." },
        { title: "Visão por escola e rede", text: "Indicadores consolidados e por unidade." },
        { title: "Foco em redes públicas", text: "Pensado para secretarias de educação." },
        { title: "Relatórios exportáveis", text: "Dados prontos para a gestão pública." },
        { title: "Online ou impresso", text: "Aplicação flexível conforme a infraestrutura." },
      ],
    },
    split: {
      eyebrow: "Para secretarias",
      title: "Decisões de política pública guiadas por dados",
      text: "Com o Simulado SAEB da KodarEdu, a secretaria enxerga onde a rede avança e onde precisa de intervenção, antecipando os resultados oficiais e direcionando formação e recursos.",
      items: ["Comparação entre unidades", "Acompanhamento de evolução", "Indicadores por habilidade", "Apoio à formação de professores"],
      mockup: { src: "/assets/prints/relatorio-gestor.svg", alt: "Painel de rede SAEB", label: "Painel da rede" },
    },
    cta: {
      title: "Quero o Simulado SAEB na minha rede",
      subtitle: "Fale com nosso time e leve diagnóstico alinhado à BNCC para todas as suas escolas.",
    },
  },

  "simulado-vestibulares": {
    meta: {
      title: "Simulado de Vestibulares",
      description:
        "Simulados fiéis às principais bancas e vestibulares, com relatórios de desempenho detalhados. White label para escolas e cursinhos.",
    },
    hero: {
      eyebrow: "Avaliação & Simulados",
      title: "Simulados fiéis às",
      highlight: "principais bancas.",
      subtitle:
        "Prepare seus alunos para os vestibulares mais concorridos com simulados que reproduzem o estilo de cada banca — e relatórios que mostram onde focar.",
      pills: ["Principais bancas", "Relatórios", "Cursinhos", "White Label"],
      mockup: { src: "/assets/prints/simulado-andamento.svg", alt: "Simulado de vestibular", label: "Simulado · Vestibular" },
    },
    features: {
      title: "Tudo para a reta final do vestibular",
      items: [
        { title: "Estilo de cada banca", text: "Simulados que imitam os principais vestibulares." },
        { title: "Relatórios de desempenho", text: "Por área, disciplina e habilidade." },
        { title: "Ranking e engajamento", text: "Estímulo saudável à preparação." },
        { title: "Correção automática", text: "Resultado na hora, sem trabalho manual." },
        { title: "Gabarito comentado", text: "Estudo guiado a partir dos erros." },
        { title: "Online, impresso ou híbrido", text: "Aplique como o cursinho preferir." },
      ],
    },
    cta: {
      title: "Quero simulados de vestibular na minha escola",
      subtitle: "Aumente as aprovações com simulados fiéis às bancas — com a marca da sua instituição.",
    },
  },

  avaliacao: {
    meta: {
      title: "Avaliação Diagnóstica e Processual",
      description:
        "Avaliações diagnósticas e somativas do Ensino Fundamental ao Médio, alinhadas à BNCC, com criação e gestão simples e banco de itens.",
    },
    hero: {
      eyebrow: "Avaliação & Simulados",
      title: "Avaliação diagnóstica e",
      highlight: "processual.",
      subtitle:
        "Acompanhe a aprendizagem do Fundamental ao Médio com avaliações diagnósticas e somativas alinhadas à BNCC — fáceis de criar, aplicar e analisar.",
      pills: ["BNCC", "Fund. → Médio", "Diagnóstica", "White Label"],
      mockup: { src: "/assets/prints/relatorio-habilidade.svg", alt: "Relatório de avaliação por habilidade", label: "Evolução por habilidade" },
    },
    features: {
      title: "Avaliar para ensinar melhor",
      items: [
        { title: "Diagnóstica e somativa", text: "Do mapeamento inicial à avaliação de resultado." },
        { title: "Alinhada à BNCC", text: "Competências e habilidades como referência." },
        { title: "Criação e gestão simples", text: "Monte e aplique em poucos cliques." },
        { title: "Banco de itens", text: "Questões prontas para acelerar a criação." },
        { title: "Relatórios pedagógicos", text: "Onde reforçar, por turma e habilidade." },
        { title: "Correção automática", text: "Resultados rápidos para agir a tempo." },
      ],
    },
    cta: {
      title: "Quero avaliações alinhadas à BNCC",
      subtitle: "Leve avaliação diagnóstica e processual para todas as etapas da sua escola.",
    },
  },

  "banco-de-questoes": {
    meta: {
      title: "Banco de Questões / Itens",
      description:
        "Milhares de itens autorais e inéditos por disciplina, nível e habilidade, com filtros e criação/edição por IA. Monte provas em poucos cliques.",
    },
    hero: {
      eyebrow: "Conteúdo & Aprendizagem",
      title: "Milhares de itens autorais,",
      highlight: "na ponta dos dedos.",
      subtitle:
        "Encontre, filtre e monte provas com um banco de questões inéditas por disciplina, nível e habilidade — e crie ou edite itens com apoio de IA.",
      pills: ["Autoral", "Com IA", "Filtros avançados", "White Label"],
      mockup: { src: "/assets/prints/banco-questoes.svg", alt: "Banco de questões com filtros", label: "Banco de questões" },
    },
    features: {
      title: "Monte provas em minutos, não em horas",
      items: [
        { title: "Itens inéditos e autorais", text: "Conteúdo exclusivo por disciplina e nível." },
        { title: "Filtros por habilidade", text: "Inclusive 'cai muito no ENEM'." },
        { title: "Criação/edição com IA", text: "Gere e ajuste questões com inteligência artificial." },
        { title: "Montagem em poucos cliques", text: "Da seleção à prova pronta, rápido." },
        { title: "Layout profissional", text: "Provas bem diagramadas para impressão ou online." },
        { title: "Reaproveitamento", text: "Reutilize itens entre provas e turmas." },
      ],
    },
    split: {
      eyebrow: "Com IA",
      title: "Inteligência que acelera a criação",
      text: "A IA da KodarEdu ajuda a gerar variações de questões, ajustar nível de dificuldade e alinhar itens a habilidades específicas — sempre com revisão pedagógica.",
      items: ["Geração de variações", "Ajuste de dificuldade", "Alinhamento a habilidades", "Revisão pedagógica"],
      mockup: { src: "/assets/prints/editor-prova.svg", alt: "Editor de prova com IA", label: "Editor de prova" },
    },
    cta: {
      title: "Quero o banco de questões na minha escola",
      subtitle: "Dê aos seus professores um banco autoral com IA — e horas de volta no dia a dia.",
    },
  },

  adaptativa: {
    meta: {
      title: "Plataforma Adaptativa (CAT / trilhas)",
      description:
        "Teste Adaptativo Computadorizado (CAT) que reduz o tempo de prova sem perder precisão e transforma resultados em trilhas de estudo personalizadas.",
    },
    hero: {
      eyebrow: "Conteúdo & Aprendizagem",
      title: "Avaliação adaptativa que vira",
      highlight: "trilha de estudo.",
      subtitle:
        "O CAT (Teste Adaptativo Computadorizado) ajusta as questões ao nível do aluno, reduz o tempo de prova sem perder precisão e gera trilhas personalizadas.",
      pills: ["CAT", "Trilhas", "Recomendação", "White Label"],
      mockup: { src: "/assets/prints/adaptativa-trilha.svg", alt: "Trilha adaptativa personalizada", label: "Trilha adaptativa" },
    },
    features: {
      title: "Mede melhor e em menos tempo",
      items: [
        { title: "Teste adaptativo (CAT)", text: "As questões se ajustam ao nível do aluno." },
        { title: "Menos tempo, mesma precisão", text: "Avaliações mais curtas e confiáveis." },
        { title: "Trilhas personalizadas", text: "Resultados viram um plano de estudo individual." },
        { title: "Recomendação adaptativa", text: "Conteúdo certo, na hora certa." },
        { title: "Acompanhamento de evolução", text: "Progresso visível por aluno e turma." },
        { title: "Engajamento do aluno", text: "Estudo no ritmo de cada um." },
      ],
    },
    cta: {
      title: "Quero a plataforma adaptativa na minha escola",
      subtitle: "Transforme cada resultado em uma trilha de estudo personalizada para o aluno.",
    },
  },

  revisa: {
    meta: {
      title: "Material de Revisão (impresso + app)",
      description:
        "Cadernos de revisão impressos combinados a um app inteligente, com questões autorais e selecionadas do histórico do ENEM. Formato híbrido.",
    },
    hero: {
      eyebrow: "Conteúdo & Aprendizagem",
      title: "Revisão que une",
      highlight: "papel e app.",
      subtitle:
        "Cadernos de revisão impressos com um app inteligente por trás: questões autorais e selecionadas do histórico do ENEM, no melhor do formato híbrido.",
      pills: ["Híbrido", "Impresso + App", "ENEM", "White Label"],
      mockup: { src: "/assets/prints/app-mobile.svg", alt: "App de revisão no celular", label: "App de revisão" },
    },
    features: {
      title: "O melhor do impresso e do digital",
      items: [
        { title: "Cadernos de revisão", text: "Material impresso de alta qualidade." },
        { title: "App inteligente", text: "Estudo guiado e prática no celular." },
        { title: "Questões autorais", text: "Conteúdo exclusivo da KodarEdu." },
        { title: "Histórico do ENEM", text: "Itens selecionados de provas anteriores." },
        { title: "Formato híbrido", text: "Combine papel e digital sem fricção." },
        { title: "Com a sua marca", text: "Material e app personalizados para a escola." },
      ],
    },
    cta: {
      title: "Quero o material de revisão na minha escola",
      subtitle: "Ofereça revisão híbrida — impressa e no app — com a marca da sua instituição.",
    },
  },

  provas: {
    meta: {
      title: "Criação & Correção de Provas (IA)",
      description:
        "Crie provas com layout profissional, gere malotes para impressão ou aplique online, com correção automática objetiva e discursiva, leitor de gabarito e integração com ERP.",
    },
    hero: {
      eyebrow: "Gestão Avaliativa",
      title: "Crie, aplique e corrija provas —",
      highlight: "sem trabalho manual.",
      subtitle:
        "Monte provas com layout profissional, gere malotes para impressão ou aplique online, e deixe a correção automática (objetiva e discursiva) com a KodarEdu.",
      pills: ["Com IA", "Leitor de gabarito", "Online/Impresso", "Integra ERP"],
      mockup: { src: "/assets/prints/correcao-automatica.svg", alt: "Correção automática e leitor de gabarito", label: "Correção automática" },
    },
    features: {
      title: "Do editor à correção, num só fluxo",
      items: [
        { title: "Layout profissional", text: "Provas bem diagramadas em poucos cliques." },
        { title: "Malote para impressão", text: "Gere e imprima com leitor de gabarito." },
        { title: "Aplicação online", text: "Provas digitais com correção imediata." },
        { title: "Correção automática", text: "Objetiva e discursiva, sem trabalho manual." },
        { title: "Criação com IA", text: "Gere e edite questões com inteligência artificial." },
        { title: "Integração com ERP", text: "Notas e dados conectados ao sistema da escola." },
      ],
    },
    split: {
      eyebrow: "Fluxo completo",
      title: "Menos burocracia, mais tempo para ensinar",
      text: "O professor cria a prova, escolhe o formato e a KodarEdu cuida da correção e dos relatórios. As notas fluem para o ERP escolar, sem retrabalho.",
      items: ["Editor com banco de questões", "Correção objetiva e discursiva", "Leitor de gabarito", "Notas integradas ao ERP"],
      mockup: { src: "/assets/prints/editor-prova.svg", alt: "Editor de prova e malote", label: "Editor de prova" },
    },
    cta: {
      title: "Quero criar e corrigir provas com IA",
      subtitle: "Devolva horas aos seus professores com criação e correção inteligentes.",
    },
  },
};
