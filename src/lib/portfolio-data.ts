import caseDocumentacao from "@/assets/case-documentacao.jpg";
import caseAirbnb from "@/assets/case-airbnb.jpg";
import caseNetflix from "@/assets/case-netflix.jpg";

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
    id: "airbnb-feedback",
    index: "02",
    title: "Airbnb — Análise de Feedback dos Usuários",
    subtitle: "Escuta ativa transformada em backlog priorizado",
    cover: caseAirbnb,
    description:
      "Análise estruturada de feedback de usuários da plataforma para identificar atritos recorrentes na jornada de busca e reserva, e transformá-los em oportunidades priorizadas de produto.",
    problem:
      "Volume alto de feedback disperso entre avaliações e canais de suporte, sem categorização — sem clareza sobre quais atritos realmente impactavam conversão e retenção.",
    solution:
      "Classifiquei os feedbacks por tema e severidade, complementei com pesquisa qualitativa com usuários, transformei os achados em product backlog com user stories e priorizei por impacto no funil versus esforço.",
    learnings:
      "O usuário descreve sintoma, não solução. Agrupar feedback por problema — e não por pedido — muda completamente a ordem do backlog e evita construir features que ninguém usa.",
    highlightsLabel: "Etapas do case",
    highlights: [
      "Objetivo",
      "Identificação de problemas",
      "Pesquisa com usuários",
      "Product Backlog",
      "Priorização",
      "Métricas",
      "Aprendizados",
    ],
    metrics: [
      { label: "Conversão", value: "Funil de reserva" },
      { label: "Retenção", value: "Recompra" },
      { label: "NPS", value: "Lealdade" },
      { label: "CSAT", value: "Satisfação" },
      { label: "Churn", value: "Abandono" },
    ],
    stack: ["User Research", "Product Discovery", "RICE", "Kanban", "Excel", "Power BI"],
    ctaLabel: "Ver Case",
    href: "https://app.notion.com/p/Case-2-Product-Backlog-baseado-em-Reviews-3a9e82d666fb80caac85f7ac9821e4c0",
  },
  {
    id: "netflix-produto",
    index: "03",
    title: "Netflix — Análise de Produto",
    subtitle: "Hipóteses, experimentação e leitura de engajamento",
    cover: caseNetflix,
    description:
      "Análise de produto sobre descoberta de conteúdo e engajamento, mapeando oportunidades de melhoria na experiência de recomendação e formulando hipóteses testáveis.",
    problem:
      "Fricção na descoberta de conteúdo: tempo excessivo de navegação antes do play, com risco direto de queda de engajamento e aumento de churn.",
    solution:
      "Mapeei oportunidades na jornada, priorizei as de maior impacto potencial, escrevi hipóteses no formato 'acreditamos que… mediremos por…' e defini o desenho de experimentos A/B com métricas de sucesso e guardrails.",
    learnings:
      "Métrica sem hipótese é dashboard. Amarrar cada oportunidade a uma hipótese e a uma métrica-alvo é o que permite aprender rápido e descartar ideias sem custo emocional.",
    highlightsLabel: "Etapas do case",
    highlights: [
      "Objetivo",
      "Problema",
      "Oportunidades",
      "Priorização",
      "Hipóteses",
      "Métricas",
      "Aprendizados",
    ],
    metrics: [
      { label: "Retenção", value: "Coorte mensal" },
      { label: "Tempo de sessão", value: "Média por usuário" },
      { label: "Engajamento", value: "Play rate" },
      { label: "NPS", value: "Percepção" },
      { label: "Churn", value: "Cancelamento" },
    ],
    stack: ["Product Analytics", "A/B Testing", "SQL", "Power BI", "Discovery", "OKRs"],
    ctaLabel: "Ver Case",
    href: "https://app.notion.com/p/Case-03-Product-Teardown-3a9e82d666fb8073a7eecef156a99df6",
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
