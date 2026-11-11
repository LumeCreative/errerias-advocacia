export type Service = {
  slug: string;
  shortTitle: string;
  title: string;
  eyebrow: string;
  summary: string;
  intro: string;
  image: string;
  imageAlt: string;
  topics: { title: string; items: string[] }[];
  approach: string[];
  faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "transportes-e-logistica",
    shortTitle: "Transportes e logística",
    title: "Assessoria jurídica para transportadoras e transportadores",
    eyebrow: "Núcleo setorial",
    summary:
      "Acompanhamento jurídico conectado à operação de transporte: relações de trabalho, contratos, acidentes, cargas, defesas e gestão preventiva.",
    intro:
      "O transporte exige respostas jurídicas que compreendam estrada, jornada, embarcadores, agregados, seguros e fiscalização. Reunimos essas frentes em uma atuação coordenada, voltada a transportadoras, operadores logísticos e transportadores autônomos de cargas.",
    image: "/images/transport-logistics.png",
    imageAlt: "Operação de transporte rodoviário de cargas ao amanhecer",
    topics: [
      {
        title: "Trabalho e gestão de pessoas",
        items: [
          "Jornada, banco de horas, escalas e controles",
          "Motoristas profissionais, tempo de espera e diárias",
          "Contratos, políticas internas e treinamentos",
          "Defesas administrativas e judiciais trabalhistas",
        ],
      },
      {
        title: "Contratos e responsabilidade operacional",
        items: [
          "Contratos de transporte e relação com embarcadores",
          "Contratos com agregados, terceiros e prestadores",
          "Responsabilidade por cargas, avarias e atrasos",
          "Defesas e recursos administrativos de trânsito",
        ],
      },
      {
        title: "Risco e contencioso",
        items: [
          "Acidentes, cargas, avarias e direito regressivo",
          "Seguros, gerenciamento de risco e documentação",
          "Responsabilidade civil e defesa da operação",
          "Diagnóstico de passivos e plano de adequação",
        ],
      },
    ],
    approach: [
      "Leitura do fluxo operacional antes da recomendação jurídica",
      "Integração entre RH, frota, segurança, fiscal e direção",
      "Documentos e rotinas aplicáveis no dia a dia",
      "Acompanhamento preventivo e resposta a contingências",
    ],
    faq: [
      {
        question: "O escritório atende transportadores autônomos?",
        answer:
          "Sim. A atuação alcança transportadoras, operadores logísticos e transportadores autônomos, conforme a natureza da demanda e a verificação prévia de conflitos.",
      },
      {
        question: "A assessoria inclui questões trabalhistas de motoristas?",
        answer:
          "Sim. Jornada, controles, tempo de espera, remuneração, políticas internas e contencioso trabalhista fazem parte do núcleo de transportes.",
      },
      {
        question: "Vocês atuam fora do Paraná?",
        answer:
          "Sim. O escritório está sediado em Maringá e atende empresas em diferentes regiões do Brasil, de forma presencial ou remota, conforme o caso.",
      },
    ],
  },
  {
    slug: "empresarial-e-contratos",
    shortTitle: "Empresarial e contratos",
    title: "Direito empresarial e contratos",
    eyebrow: "Estrutura e negociação",
    summary:
      "Suporte jurídico para decisões societárias, relações comerciais, contratos e organização das responsabilidades empresariais.",
    intro:
      "A assessoria empresarial deve participar da decisão antes do conflito. Atuamos na estruturação de negócios, na negociação de contratos e na organização jurídica das relações entre sócios, clientes, fornecedores e parceiros.",
    image: "/images/business-strategy.png",
    imageAlt: "Mesa de trabalho executiva com documentos e detalhes em metal dourado",
    topics: [
      {
        title: "Societário",
        items: [
          "Constituição, reorganização e alteração de sociedades",
          "Acordos de sócios e regras de governança",
          "Entrada, saída e responsabilização de sócios",
          "Fusões, incorporações, cisões e associações",
        ],
      },
      {
        title: "Contratos",
        items: [
          "Elaboração, revisão e negociação contratual",
          "Contratos de fornecimento, prestação e distribuição",
          "Parcerias, confidencialidade e proteção de ativos",
          "Gestão de inadimplemento e encerramento de relações",
        ],
      },
      {
        title: "Consultoria continuada",
        items: [
          "Pareceres e apoio à tomada de decisão",
          "Mapeamento de riscos jurídicos",
          "Padronização de documentos e fluxos de aprovação",
          "Apoio jurídico à direção e às áreas internas",
        ],
      },
    ],
    approach: [
      "Compreensão do modelo de negócio e dos objetivos da negociação",
      "Distribuição clara de riscos, obrigações e garantias",
      "Documentação compatível com a prática operacional",
      "Prevenção de conflitos sem paralisar o negócio",
    ],
    faq: [
      {
        question: "O escritório pode atuar como jurídico externo da empresa?",
        answer:
          "Sim. A consultoria continuada pode apoiar a direção e os setores internos em demandas recorrentes, com escopo definido conforme a operação.",
      },
      {
        question: "Vocês revisam contratos já utilizados pela empresa?",
        answer:
          "Sim. A revisão pode abranger cláusulas, riscos, fluxo de aprovação e aderência do documento ao modo como a relação realmente funciona.",
      },
    ],
  },
  {
    slug: "trabalhista-empresarial",
    shortTitle: "Trabalhista empresarial",
    title: "Direito do trabalho para empresas",
    eyebrow: "Prevenção e defesa",
    summary:
      "Consultoria trabalhista preventiva, estruturação de rotinas de RH, negociação e defesa em processos administrativos e judiciais.",
    intro:
      "A atuação trabalhista combina prevenção, organização documental e defesa técnica. O objetivo é tornar as práticas de gestão coerentes com a legislação, a jurisprudência e a realidade de cada atividade econômica.",
    image: "/images/business-strategy.png",
    imageAlt: "Ambiente executivo dedicado à análise e estratégia jurídica",
    topics: [
      {
        title: "Consultoria preventiva",
        items: [
          "Contratos, regulamentos e políticas internas",
          "Jornada, escalas, intervalos e banco de horas",
          "Remuneração, benefícios e modelos de contratação",
          "Auditorias de passivo e planos de correção",
        ],
      },
      {
        title: "Relações coletivas",
        items: [
          "Convenções e acordos coletivos",
          "Negociação sindical e mediação",
          "Programas de participação e instrumentos coletivos",
          "Análise de enquadramento sindical",
        ],
      },
      {
        title: "Contencioso",
        items: [
          "Defesas em reclamações trabalhistas",
          "Atuação perante MPT e fiscalização do trabalho",
          "Recursos e acompanhamento nos tribunais",
          "Gestão estratégica de carteira e precedentes",
        ],
      },
    ],
    approach: [
      "Diagnóstico dos fatos e da documentação disponível",
      "Recomendações com impacto operacional mensurável",
      "Integração com RH, SST, contabilidade e liderança",
      "Acompanhamento das mudanças legislativas e jurisprudenciais",
    ],
    faq: [
      {
        question: "A consultoria pode revisar todas as práticas de RH?",
        answer:
          "Sim. O escopo pode incluir admissão, jornada, remuneração, medidas disciplinares, desligamento, instrumentos coletivos e documentos internos.",
      },
      {
        question: "O escritório atua perante o Ministério Público do Trabalho?",
        answer:
          "Sim. Prestamos orientação e defesa em notificações, inquéritos, audiências e termos de ajustamento, conforme as particularidades do caso.",
      },
    ],
  },
  {
    slug: "tributario",
    shortTitle: "Tributário",
    title: "Direito tributário empresarial",
    eyebrow: "Eficiência com segurança",
    summary:
      "Planejamento, revisão de operações, recuperação de créditos e defesa em autuações e execuções fiscais.",
    intro:
      "Decisões tributárias exigem fundamento, documentação e visão econômica. Analisamos a operação para identificar riscos, oportunidades legítimas e os efeitos das mudanças no sistema tributário.",
    image: "/images/business-strategy.png",
    imageAlt: "Documentos e mesa executiva em composição sóbria",
    topics: [
      {
        title: "Consultoria e planejamento",
        items: [
          "Revisão da carga tributária e das operações",
          "Estruturação societária com análise fiscal",
          "Impactos de IBS, CBS e transição da reforma tributária",
          "Pareceres e suporte a decisões empresariais",
        ],
      },
      {
        title: "Créditos tributários",
        items: [
          "Diagnóstico de recolhimentos e oportunidades",
          "Recuperação administrativa ou judicial",
          "Compensação, restituição e acompanhamento documental",
          "Validação jurídica das teses aplicáveis",
        ],
      },
      {
        title: "Defesa fiscal",
        items: [
          "Impugnações e recursos administrativos",
          "Execuções fiscais e medidas judiciais",
          "Responsabilidade de sócios e grupos econômicos",
          "Regularização, parcelamento e transação tributária",
        ],
      },
    ],
    approach: [
      "Análise jurídica e econômica da operação",
      "Validação documental antes da implementação",
      "Integração com contabilidade e administração financeira",
      "Registro dos fundamentos e das decisões adotadas",
    ],
    faq: [
      {
        question: "Toda empresa possui créditos tributários a recuperar?",
        answer:
          "Não. A existência de crédito depende do regime, das operações, dos recolhimentos e da base jurídica aplicável. O diagnóstico deve preceder qualquer medida.",
      },
      {
        question: "O planejamento tributário elimina riscos?",
        answer:
          "Não. O trabalho busca identificar e tratar riscos, documentar fundamentos e escolher alternativas juridicamente sustentáveis; não existe solução universal ou garantia de resultado.",
      },
    ],
  },
  {
    slug: "contencioso-e-recuperacao",
    shortTitle: "Contencioso e recuperação",
    title: "Contencioso estratégico e recuperação empresarial",
    eyebrow: "Conflitos e continuidade",
    summary:
      "Condução de disputas empresariais, cobrança, defesa patrimonial, insolvência, recuperação judicial e negociação com credores.",
    intro:
      "Litígios relevantes pedem coordenação entre processo, prova, patrimônio e continuidade do negócio. A estratégia é construída a partir do risco real, das alternativas de negociação e dos efeitos econômicos de cada medida.",
    image: "/images/hero-office.png",
    imageAlt: "Arquitetura contemporânea de escritório em tons escuros e dourados",
    topics: [
      {
        title: "Disputas empresariais",
        items: [
          "Inadimplemento, cobrança e execução",
          "Conflitos societários e contratuais",
          "Responsabilidade civil empresarial",
          "Tutelas de urgência e produção de prova",
        ],
      },
      {
        title: "Crise e insolvência",
        items: [
          "Diagnóstico de viabilidade e passivo",
          "Negociação estruturada com credores",
          "Recuperação judicial e extrajudicial",
          "Falência, habilitações e defesa de credores",
        ],
      },
      {
        title: "Estratégia patrimonial",
        items: [
          "Mapeamento de garantias e exposições",
          "Defesa em desconsideração e responsabilização",
          "Recuperação de ativos e medidas conservatórias",
          "Acordos e execução de soluções negociadas",
        ],
      },
    ],
    approach: [
      "Definição de cenário, objetivo e limites de exposição",
      "Estratégia processual coordenada com a realidade financeira",
      "Avaliação permanente de acordo e continuidade",
      "Informação objetiva para a tomada de decisão",
    ],
    faq: [
      {
        question: "Quando avaliar uma recuperação judicial?",
        answer:
          "A avaliação deve ocorrer antes de a crise retirar todas as alternativas da empresa. É necessário examinar atividade, caixa, passivo, credores, garantias e viabilidade, sem presumir que a recuperação seja sempre a melhor solução.",
      },
      {
        question: "O escritório representa credores em recuperações?",
        answer:
          "Sim. A atuação pode incluir análise do crédito, habilitação ou divergência, negociação, garantias, assembleia e medidas judiciais, observados os conflitos de interesse.",
      },
    ],
  },
  {
    slug: "sucessorio-e-patrimonial",
    shortTitle: "Sucessório e patrimonial",
    title: "Planejamento sucessório e organização patrimonial",
    eyebrow: "Continuidade",
    summary:
      "Estruturação jurídica da sucessão familiar e empresarial, governança, holdings e transmissão patrimonial com análise tributária.",
    intro:
      "Planejar a sucessão é organizar decisões, responsabilidades e patrimônio para reduzir conflitos e preservar a continuidade. Cada estrutura deve ser construída a partir da família, dos ativos, dos negócios e dos custos presentes e futuros.",
    image: "/images/business-strategy.png",
    imageAlt: "Composição executiva que representa estratégia e continuidade",
    topics: [
      {
        title: "Diagnóstico",
        items: [
          "Mapeamento de patrimônio, empresas e relações familiares",
          "Análise de riscos sucessórios e tributários",
          "Definição de objetivos e participação dos sucessores",
          "Comparação de estruturas e custos",
        ],
      },
      {
        title: "Estruturação",
        items: [
          "Holdings e reorganizações societárias",
          "Doações, usufruto, testamentos e acordos",
          "Governança familiar e empresarial",
          "Proteção de incapazes e regras de administração",
        ],
      },
      {
        title: "Implementação e revisão",
        items: [
          "Documentos societários e instrumentos civis",
          "Coordenação com contabilidade e registros",
          "Execução por etapas e validação tributária",
          "Revisão diante de mudanças familiares ou legais",
        ],
      },
    ],
    approach: [
      "Projeto personalizado, sem estruturas padronizadas",
      "Análise conjunta dos aspectos civis, societários e tributários",
      "Clareza sobre custos, limites e efeitos da implementação",
      "Governança para sustentar o plano ao longo do tempo",
    ],
    faq: [
      {
        question: "Planejamento sucessório é apenas criar uma holding?",
        answer:
          "Não. A holding é apenas uma ferramenta possível. Testamento, doação, usufruto, seguro, acordos e governança podem ser mais adequados isoladamente ou em conjunto.",
      },
      {
        question: "O plano precisa ser revisado?",
        answer:
          "Sim. Alterações familiares, patrimoniais, societárias e legislativas podem exigir ajustes. A revisão periódica evita que a estrutura deixe de refletir seus objetivos.",
      },
    ],
  },
  {
    slug: "agronegocio",
    shortTitle: "Agronegócio",
    title: "Direito aplicado ao agronegócio",
    eyebrow: "Produção e patrimônio",
    summary:
      "Contratos rurais, crédito, propriedade, sucessão, relações de trabalho e contencioso para produtores e empresas do agronegócio.",
    intro:
      "A atividade rural combina produção, crédito, patrimônio e riscos próprios. A atuação jurídica considera o ciclo do negócio, a documentação da propriedade e as relações com compradores, arrendatários, instituições financeiras e trabalhadores.",
    image: "/images/transport-logistics.png",
    imageAlt: "Infraestrutura logística conectada à produção brasileira",
    topics: [
      {
        title: "Contratos e crédito",
        items: [
          "Arrendamento, parceria e integração",
          "Compra e venda, fornecimento e barter",
          "Cédulas, garantias e revisão de operações bancárias",
          "Armazenagem, transporte e comercialização",
        ],
      },
      {
        title: "Patrimônio e sucessão",
        items: [
          "Regularidade e proteção da propriedade rural",
          "Organização societária da atividade",
          "Sucessão familiar e governança",
          "Inventário e continuidade produtiva",
        ],
      },
      {
        title: "Contencioso e trabalho",
        items: [
          "Conflitos contratuais e cobrança",
          "Recuperação judicial do produtor rural",
          "Relações de trabalho no campo",
          "Responsabilidade civil e ambiental correlata",
        ],
      },
    ],
    approach: [
      "Leitura jurídica conectada ao ciclo produtivo",
      "Coordenação de contratos, crédito e garantias",
      "Organização patrimonial com visão de continuidade",
      "Atuação preventiva e contenciosa conforme o risco",
    ],
    faq: [
      {
        question: "O produtor rural pode buscar recuperação judicial?",
        answer:
          "A legislação admite a recuperação do produtor que preencha os requisitos aplicáveis. A viabilidade depende da documentação, do tempo de atividade, do passivo e da capacidade de apresentar um plano sustentável.",
      },
      {
        question: "Vocês revisam contratos bancários rurais?",
        answer:
          "Sim. A análise pode abranger instrumentos, garantias, encargos, vencimento, renegociação e medidas judiciais, conforme os documentos e fatos do caso.",
      },
    ],
  },
  {
    slug: "lgpd-e-governanca",
    shortTitle: "LGPD e governança",
    title: "Proteção de dados, governança e integridade",
    eyebrow: "Processos confiáveis",
    summary:
      "Adequação à LGPD, documentos, resposta a incidentes, contratos, treinamento e apoio à governança empresarial.",
    intro:
      "Proteção de dados não se resume a uma política publicada. O trabalho envolve mapear processos, definir responsabilidades, corrigir contratos e criar rotinas que possam ser realmente executadas pelas pessoas da organização.",
    image: "/images/hero-office.png",
    imageAlt: "Ambiente corporativo sóbrio que representa confiança e governança",
    topics: [
      {
        title: "Programa de privacidade",
        items: [
          "Mapeamento de dados e bases legais",
          "Políticas, avisos e procedimentos internos",
          "Encarregado, canais e governança",
          "Atendimento a direitos dos titulares",
        ],
      },
      {
        title: "Segurança e incidentes",
        items: [
          "Plano de resposta a incidentes",
          "Fluxos de comunicação e registro",
          "Avaliação jurídica de riscos e notificações",
          "Integração com segurança da informação",
        ],
      },
      {
        title: "Contratos e treinamento",
        items: [
          "Cláusulas com operadores e fornecedores",
          "Termos de confidencialidade e uso de sistemas",
          "Treinamento de equipes e lideranças",
          "Revisão periódica do programa",
        ],
      },
    ],
    approach: [
      "Implementação proporcional ao porte e ao risco",
      "Documentos ligados aos processos reais da organização",
      "Definição clara de responsáveis e evidências",
      "Aprimoramento contínuo, não apenas adequação pontual",
    ],
    faq: [
      {
        question: "Publicar uma política de privacidade é suficiente?",
        answer:
          "Não. A política é apenas uma parte do programa. Processos, contratos, segurança, atendimento a titulares, incidentes, treinamento e governança também precisam ser considerados.",
      },
      {
        question: "Toda empresa precisa indicar um encarregado?",
        answer:
          "A avaliação depende das regras aplicáveis e do porte da organização. Mesmo quando houver tratamento diferenciado, é importante definir um canal e responsabilidades para os temas de proteção de dados.",
      },
    ],
  },
];

export const insights = [
  {
    slug: "juridico-para-transportadoras",
    title: "O que uma assessoria jurídica para transportadoras precisa compreender",
    category: "Transportes",
    description:
      "Da jornada ao contrato com o embarcador: por que as decisões jurídicas do setor precisam acompanhar a operação.",
    readTime: "6 min",
  },
  {
    slug: "planejamento-tributario-com-governanca",
    title: "Planejamento tributário começa pelo diagnóstico, não pela tese",
    category: "Tributário",
    description:
      "Documentação, processo decisório e integração contábil são parte da segurança de qualquer estratégia fiscal.",
    readTime: "5 min",
  },
  {
    slug: "prevencao-passivo-trabalhista",
    title: "Prevenção trabalhista: transformar orientação em rotina",
    category: "Trabalhista",
    description:
      "Como contratos, controles, liderança e evidências se conectam na gestão cotidiana do risco trabalhista.",
    readTime: "5 min",
  },
];

export const site = {
  name: "Errerias & Associados",
  legalName: "Consultoria Jurídica Errerias & Associados",
  description:
    "Advocacia empresarial em Maringá com atuação consultiva e contenciosa para empresas, transportadoras, produtores e famílias empresárias.",
  url: "https://errerias.adv.br",
  email: "consultoria@errerias.adv.br",
  phoneDisplay: "(44) 98851-6797",
  phone: "+5544988516797",
  whatsapp: "https://wa.me/5544988516797",
  address: "Avenida Tiradentes, 1008 — salas 905 e 906",
  city: "Maringá",
  state: "PR",
  postalCode: "87013-260",
  founded: "1998",
};

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
