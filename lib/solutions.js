// Conteúdo das páginas de solução (template SolutionPage).

export const SOLUTIONS = {
  "simulado-saeb": {
    meta: {
      title: "Simulados SAEB alinhados à BNCC",
      description:
        "Diagnóstico alinhado ao SAEB e à BNCC, com comparação a benchmark nacional. Ideal para redes públicas e secretarias de educação.",
    },
    hero: {
      eyebrow: "Avaliações",
      title: "Simulados SAEB alinhados à",
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
      text: "Com os Simulados SAEB da KodarEdu, a secretaria enxerga onde a rede avança e onde precisa de intervenção, antecipando os resultados oficiais e direcionando formação e recursos.",
      items: ["Comparação entre unidades", "Acompanhamento de evolução", "Indicadores por habilidade", "Apoio à formação de professores"],
      mockup: { src: "/assets/prints/relatorio-gestor.svg", alt: "Painel de rede SAEB", label: "Painel da rede" },
    },
    cta: {
      title: "Quero os Simulados SAEB na minha rede",
      subtitle: "Fale com nosso time e leve diagnóstico alinhado à BNCC para todas as suas instituições.",
    },
  },

  adaptativa: {
    meta: {
      title: "Trilha adaptativa (CAT)",
      description:
        "Teste Adaptativo Computadorizado (CAT) que reduz o tempo de prova sem perder precisão e transforma resultados em trilhas de estudo personalizadas.",
    },
    hero: {
      eyebrow: "Avaliações",
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
      title: "Quero a trilha adaptativa na minha instituição",
      subtitle: "Transforme cada resultado em uma trilha de estudo personalizada para o aluno.",
    },
  },

  "banco-de-questoes": {
    meta: {
      title: "Banco de Itens",
      description:
        "Milhares de itens autorais e inéditos por disciplina, nível e habilidade, com filtros e criação/edição por IA. Monte provas em poucos cliques.",
    },
    hero: {
      eyebrow: "Recursos Pedagógicos",
      title: "Banco de Itens com milhares de questões",
      highlight: "na ponta dos dedos.",
      subtitle:
        "Encontre, filtre e monte provas com um banco de itens inéditos por disciplina, nível e habilidade, e crie ou edite questões com apoio de IA.",
      pills: ["Autoral", "Com IA", "Filtros avançados", "White Label"],
      mockup: { src: "/assets/prints/banco-questoes.svg", alt: "Banco de itens com filtros", label: "Banco de Itens" },
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
      text: "A IA da KodarEdu ajuda a gerar variações de questões, ajustar nível de dificuldade e alinhar itens a habilidades específicas, sempre com revisão pedagógica.",
      items: ["Geração de variações", "Ajuste de dificuldade", "Alinhamento a habilidades", "Revisão pedagógica"],
      mockup: { src: "/assets/prints/editor-prova.svg", alt: "Editor de prova com IA", label: "Editor de prova" },
    },
    cta: {
      title: "Quero o Banco de Itens na minha instituição",
      subtitle: "Dê aos seus professores um banco autoral com IA, e horas de volta no dia a dia.",
    },
  },

  integracao: {
    meta: {
      title: "Integração físico-digital",
      description:
        "Provas e materiais que funcionam no impresso e no digital sem retrabalho: aplique no papel com leitor de gabarito ou online, com cadernos, app e dados sincronizados.",
    },
    hero: {
      eyebrow: "Recursos Pedagógicos",
      title: "O melhor do papel e do",
      highlight: "digital, integrados.",
      subtitle:
        "Aplique no impresso, no online ou nos dois, com leitor de gabarito, cadernos de revisão, app inteligente e todos os resultados no mesmo relatório.",
      pills: ["Impresso + Online", "Leitor de gabarito", "App", "Híbrido"],
      mockup: { src: "/assets/prints/correcao-automatica.svg", alt: "Leitor de gabarito ligando papel e digital", label: "Físico + digital" },
    },
    features: {
      title: "Físico e digital, sem fricção",
      items: [
        { title: "Aplicação híbrida", text: "Aplique no papel ou online, como a instituição precisar." },
        { title: "Leitor de gabarito", text: "Folhas de resposta corrigidas automaticamente." },
        { title: "Cadernos + app", text: "Material impresso com um app inteligente por trás." },
        { title: "Dados sincronizados", text: "Resultados do papel e do online no mesmo relatório." },
        { title: "Questões autorais e ENEM", text: "Conteúdo autoral e itens do histórico do ENEM." },
        { title: "Com a sua marca", text: "Material e app personalizados para a escola." },
      ],
    },
    split: {
      eyebrow: "Sem retrabalho",
      title: "Um só relatório, venha do papel ou da tela",
      text: "A escola escolhe o formato de cada turma; a KodarEdu reúne tudo. O que foi feito no impresso e o que foi feito online aparecem juntos, prontos para análise.",
      items: ["Folhas com leitor de gabarito", "App inteligente de revisão", "Sincronia automática", "Relatórios unificados"],
      mockup: { src: "/assets/prints/app-mobile.svg", alt: "App inteligente de revisão", label: "App de revisão" },
    },
    cta: {
      title: "Quero integração físico-digital na minha instituição",
      subtitle: "Una o impresso e o digital com todos os dados em um lugar só.",
    },
  },

  "edu-ia": {
    meta: {
      title: "Assistente IA do Professor",
      description:
        "Um assistente de IA com várias ferramentas para o dia a dia do professor: planos de aula, atividades, elaboração de questões, materiais de apoio e feedback, alinhado à BNCC.",
    },
    hero: {
      eyebrow: "Inteligência Artificial",
      title: "Um assistente de IA para o",
      highlight: "dia a dia do professor.",
      subtitle:
        "O Edu.IA reúne, em um só lugar, ferramentas com inteligência artificial que ajudam o professor a planejar, criar e dar feedback, em minutos, com controle pedagógico.",
      pills: ["IA", "Planos de aula", "Atividades", "Feedback"],
      mockup: { src: "/assets/prints/edu-ia-home.jpg", alt: "Dashboard do Edu.IA com a marca kodarEdu, mostrando categorias e ferramentas pedagógicas", label: "Edu.IA · Assistente" },
    },
    features: {
      title: "Várias ferramentas, um assistente só",
      items: [
        { title: "Planos de aula", text: "Gere planos alinhados à BNCC em minutos." },
        { title: "Atividades e exercícios", text: "Crie listas e atividades por tema e nível." },
        { title: "Elaboração de questões", text: "Gere questões inéditas com gabarito." },
        { title: "Materiais de apoio", text: "Resumos, mapas e materiais na hora." },
        { title: "Adaptação por nível", text: "Ajuste o conteúdo à turma e à dificuldade." },
        { title: "Feedback e rubricas", text: "Rubricas e devolutivas para acelerar a correção." },
      ],
    },
    split: {
      eyebrow: "Como funciona",
      title: "Você pede, o Edu.IA cria, você revisa",
      text: "Peça em linguagem natural e receba o material pronto para editar. O professor mantém o controle pedagógico; a IA cuida do trabalho repetitivo e devolve horas.",
      items: ["Pedidos em linguagem natural", "Material pronto para editar", "Alinhado à BNCC", "Controle do professor"],
      mockup: { src: "/assets/prints/edu-ia-catalog.jpg", alt: "Modal \"Criar mais com IA\" no Edu.IA, com categorias e cards de ferramentas pedagógicas", label: "Catálogo · Edu.IA" },
    },
    cta: {
      title: "Quero o Edu.IA para meus professores",
      subtitle: "Dê à sua equipe um assistente de IA que devolve horas e eleva a qualidade do material.",
    },
  },
};
