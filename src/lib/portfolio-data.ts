import caseDocumentacao from "@/assets/case-documentacao.jpg";
import caseFintech from "@/assets/Fintech_X.png";
import caseOnboarding from "@/assets/case-onboarding.png";

export const profile = {
  name: "Sophia Ribeiro Mendonça",
  shortName: "Sophia Ribeiro Mendonça",
  role: "Product Management",
  headline: "Transformo problemas de negócio em produtos com direção, dados e discovery.",
  subheadline:
    "Profissional em transição para Product Management, com base sólida em tecnologia, levantamento de requisitos e documentação. Atuo do discovery ao delivery: entendo o problema, priorizo o que gera valor e acompanho métricas até o resultado.",
  email: "sophia.mribeiro16@gmail.com",
  linkedin: "https://www.linkedin.com/in/sophia-r-mendon%C3%A7a-95105a252",
  github: "https://github.com/SophiaaRibeiro",
  resume:
    "https://drive.google.com/file/d/1ZOHc8XxLVkRtaZ0_5sreFNq8T61unUr6/view?usp=sharing",
} as const;

export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#sobre", label: "Sobre" },
  { href: "#cases", label: "Product Cases" },
  { href: "#competencias", label: "Competências" },
  { href: "#soft-skills", label: "Soft Skills" },
  { href: "#jornada", label: "Jornada" },
] as const;

export const heroRotation = [
  "Product Management",
  "Product Discovery",
  "Product Strategy",
  "Roadmaps & Priorização",
  "Métricas de Produto",
] as const;

export const heroCapabilities = [
  "Product Management",
  "Product Strategy",
  "Product Discovery",
  "Backlog Management",
  "Priorização",
  "Roadmaps",
  "User Research",
  "Métricas",
  "Scrum",
  "Kanban",
  "Discovery",
  "Experimentação",
] as const;

export interface HeroStat {
  value: number;
  suffix?: string;
  label: string;
}

export const heroStats: HeroStat[] = [
  { value: 3, label: "Product cases documentados" },
  { value: 11, label: "Artefatos de produto aplicados" },
  { value: 24, suffix: "+", label: "Competências e ferramentas" },
];

export interface AboutCard {
  icon: "compass" | "fileText" | "lineChart";
  title: string;
  text: string;
}

export const aboutCards: AboutCard[] = [
  {
    icon: "compass",
    title: "Onde eu atuo",
    text: "Na ponte entre negócio, usuário e tecnologia: entendo a dor, traduzo em problema de produto e estruturo o caminho — discovery, escopo, backlog e priorização — para que o time entregue valor com clareza.",
  },
  {
    icon: "fileText",
    title: "O que eu trago da tecnologia",
    text: "Vivência com levantamento de requisitos, documentação técnica, user stories e critérios de aceitação. Falo a língua do time de engenharia e escrevo especificações que não deixam ambiguidade.",
  },
  {
    icon: "lineChart",
    title: "Como eu evoluo produto",
    text: "Melhoria contínua guiada por dados: análise de feedback, métricas de conversão, retenção, NPS e churn, hipóteses testáveis e experimentação para decidir com evidência, não com opinião.",
  },
];

export interface ProductCase {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  cover: string;
  description: string;
  problem: string;
  solution: string;
  learnings: string;
  metrics?: { label: string; value: string }[];
  highlights: string[];
  highlightsLabel: string;
  stack: string[];
  ctaLabel: string;
  href: string;
}


export const productCases: ProductCase[] = [
  {
    id: "documentacao-tecnica",
    index: "01",
    title: "Documentação Técnica de Produto",
    subtitle: "Do requisito ao roadmap: a espinha dorsal de uma entrega previsível",
    cover: caseDocumentacao,
    description:
      "Construção completa da documentação de um produto digital, cobrindo todo o ciclo de definição: visão, escopo, requisitos, backlog priorizado, MVP e planejamento de sprints.",
    problem:
      "Demandas chegavam sem contexto, escopo mal definido e critérios de pronto implícitos — o que gerava retrabalho, estimativas frágeis e riscos descobertos tarde demais.",
    solution:
      "Estruturei um pacote único de documentação de produto: visão geral e escopo acordados, requisitos levantados com stakeholders, user stories com critérios de aceitação, backlog priorizado, corte de MVP, roadmap e matriz de riscos.",
    learnings:
      "Documentação boa não é volume, é decisão registrada. Quando visão, escopo e critérios de aceitação estão explícitos, a priorização deixa de ser negociação de opinião e passa a ser consequência da estratégia.",
    highlightsLabel: "Artefatos entregues",
    highlights: [
      "Visão Geral",
      "Escopo",
      "Levantamento de Requisitos",
      "User Stories",
      "Critérios de Aceitação",
      "Backlog",
      "Priorização",
      "MVP",
      "Roadmap",
      "Sprint Planning",
      "Gestão de Riscos",
    ],
    stack: ["Scrum", "Azure DevOps", "MoSCoW", "INVEST", "Confluence"],
    ctaLabel: "Ver Documentação",
    href: "https://app.notion.com/p/Case-1-Criar-um-produto-do-zero-Sistema-de-Estacionamento-317e82d666fb80b9a0e1e547be311197",
  },
  {
    id: "fintech-retencao-churn",
    index: "02",
    title: "Fintech X — Análise de Retenção e Churn",
    subtitle: "Dados e comportamento para identificar oportunidades de retenção",
    cover: caseOnboarding,
    description:
      "Case de Product Analytics com dados simulados para investigar a queda de retenção em uma funcionalidade financeira, analisar o comportamento dos usuários e propor ações para aumentar o engajamento.",
    problem:
      "A retenção dos usuários diminui ao longo dos meses após o primeiro contato com a funcionalidade. O desafio é entender quais comportamentos estão associados à permanência dos usuários e identificar oportunidades de melhoria na experiência inicial.",
    solution:
      "Estruturei uma análise de retenção por coortes e comparei grupos de usuários conforme o momento da primeira utilização da funcionalidade, utilizando SQL para investigar a relação entre ativação inicial e retenção. A partir dos insights, propus melhorias no onboarding e um teste A/B para avaliar seu impacto.",
    learnings:
      "A análise de dados ajuda a transformar um problema amplo de retenção em hipóteses mais específicas e testáveis. A associação entre ativação inicial e retenção indica uma oportunidade de investigação, mas precisa ser validada por experimentos antes de estabelecer uma relação causal.",
    highlightsLabel: "Etapas da análise",
    highlights: [
      "Definição do Problema",
      "Hipóteses",
      "SQL",
      "Cohort Analysis",
      "Retenção e Churn",
      "Análise de Ativação",
      "Insights de Produto",
      "Onboarding",
      "Teste A/B",
    ],
    metrics: [
      { label: "Retenção", value: "M1, M2 e M3" },
      { label: "Ativação", value: "Primeiros 3 dias" },
      { label: "Churn", value: "Abandono ao longo dos meses" },
      { label: "Engajamento", value: "Uso da funcionalidade" },
      { label: "Experimento", value: "Retenção M2" },
    ],
    stack: [
      "SQL Server",
      "SQL",
      "Product Analytics",
      "Cohort Analysis",
      "Retention",
      "A/B Testing",
    ],
    ctaLabel: "Ver Case",
    href: "https://app.notion.com/p/Cases-392e82d666fb802887abcbf19baa35b6",
  },
  {
    id: "onboarding-banco-digital-60",
    index: "03",
    title: "Banco Digital — Redesenho do Onboarding para o Público 60+",
    subtitle: "Uma experiência digital mais simples, acessível e intuitiva",
    cover: caseFintech,
    description:
      "Análise e proposta de melhoria da jornada de onboarding de um banco digital, com foco nas necessidades de pessoas com 60 anos ou mais e na redução de possíveis barreiras de usabilidade.",
    problem:
      "Processos de onboarding podem apresentar dificuldades para usuários com diferentes níveis de familiaridade digital. O desafio é identificar possíveis barreiras na jornada e propor uma experiência mais clara, acessível e fácil de concluir para o público 60+.",
    solution:
      "Analisei a jornada de onboarding sob a perspectiva do público 60+, identificando oportunidades de simplificação e melhoria da experiência. A proposta de redesenho prioriza clareza das instruções, facilidade de navegação e redução de fricções durante as etapas iniciais de uso do banco digital.",
    learnings:
      "Uma boa experiência digital precisa considerar as necessidades e limitações de diferentes perfis de usuários. Simplificar a jornada, tornar as instruções mais claras e reduzir barreiras de navegação pode contribuir para uma experiência mais inclusiva e acessível.",
    highlightsLabel: "Etapas do case",
    highlights: [
      "Contexto e Objetivo",
      "Análise da Jornada",
      "Identificação de Barreiras",
      "Experiência do Usuário",
      "Oportunidades de Melhoria",
      "Proposta de Redesenho",
      "Acessibilidade Digital",
      "Aprendizados",
    ],
    metrics: [
      { label: "Conclusão", value: "Taxa de conclusão do onboarding" },
      { label: "Abandono", value: "Desistência por etapa" },
      { label: "Usabilidade", value: "Dificuldades na jornada" },
      { label: "Tempo", value: "Tempo para concluir o processo" },
      { label: "Satisfação", value: "Experiência percebida" },
    ],
    stack: [
      "Product Discovery",
      "UX Research",
      "User Journey",
      "Usabilidade",
      "Acessibilidade Digital",
      "Product Thinking",
    ],
    ctaLabel: "Ver Case",
    href: "https://app.notion.com/p/Case-06-Redesenho-do-Onboarding-para-o-P-blico-60-em-um-Banco-Digital-3c2e82d666fb80d88d59c72660573f4e",
  },
];


export interface CompetencyGroup {
  title: string;
  icon: "target" | "layers" | "barChart" | "wrench";
  items: string[];
}

export const competencyGroups: CompetencyGroup[] = [
  {
    title: "Estratégia & Discovery",
    icon: "target",
    items: [
      "Product Discovery",
      "Discovery",
      "Product Strategy",
      "Roadmaps",
      "Pesquisa com Usuários",
      "UX",
    ],
  },
  {
    title: "Delivery & Processos",
    icon: "layers",
    items: ["Backlog", "User Stories", "Priorização", "Scrum", "Kanban"],
  },
  {
    title: "Dados & Métricas",
    icon: "barChart",
    items: [
      "Métricas de Produto",
      "Análise de Dados",
      "A/B Testing",
      "SQL",
      "Power BI",
      "Excel",
    ],
  },
  {
    title: "Ferramentas & Base Técnica",
    icon: "wrench",
    items: ["Azure DevOps", "Jira", "Figma", "HTML", "CSS", "TypeScript", "Git", "GitHub"],
  },
];

export interface SoftSkill {
  icon: "listChecks" | "trendingUp" | "zap" | "users";
  title: string;
  text: string;
}

export const softSkills: SoftSkill[] = [
  {
    icon: "listChecks",
    title: "Organização & Clareza",
    text: "Estruturo escopo, tarefas e documentação de forma que qualquer pessoa do time entenda o que precisa ser feito e por quê.",
  },
  {
    icon: "trendingUp",
    title: "Pensamento Analítico",
    text: "Quebro problemas complexos em hipóteses testáveis e busco evidência em dados antes de decidir o próximo passo.",
  },
  {
    icon: "zap",
    title: "Proatividade",
    text: "Antecipo riscos e dependências, abro a conversa difícil cedo e proponho caminhos em vez de apenas reportar bloqueios.",
  },
  {
    icon: "users",
    title: "Colaboração",
    text: "Traduzo entre negócio, design e engenharia, alinhando expectativas e mantendo o time focado no mesmo resultado.",
  },
];

export interface TimelineEntry {
  year: string;
  title: string;
  text: string;
  tags: string[];
}

export const timeline: TimelineEntry[] = [
  {
    year: "2024",
    title: "Primeiros passos em tecnologia",
    text: "Iniciei a graduação na área de tecnologia e tive o primeiro contato com ciclo de vida de software, lógica de processos e organização de demandas em equipe.",
    tags: ["Fundamentos", "Trabalho em equipe"],
  },
  {
    year: "2025",
    title: "Requisitos, documentação e processos",
    text: "Migrei para Sistemas para Internet e passei a atuar na estruturação de demandas: levantamento de requisitos, documentação, automações e melhoria de processos junto a times técnicos.",
    tags: ["Requisitos", "Documentação", "Melhoria contínua"],
  },
  {
    year: "2026",
    title: "Transição para Product Management",
    text: "Foco em gestão de produtos: discovery, backlog, priorização, roadmap e métricas. Construção de product cases aplicando Scrum, Kanban, pesquisa com usuários e análise de dados.",
    tags: ["Discovery", "Priorização", "Métricas", "Roadmap"],
  },
];
