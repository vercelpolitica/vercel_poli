import newsPolitics from "./news-politics-1.jpg";
import newsEconomy from "./news-economy.jpg";
import newsElection from "./news-election.jpg";

const newsDataAlternative = [
  {
    id: 1,
    image: newsPolitics,
    category: "🔴 URGENTE",
    title: "Congresso aprova Projeto de Lei sobre transparência fiscal",
    excerpt: "Votação em plenário aprova lei que obriga divulgação de gastos públicos em tempo real. A medida visa aumentar a fiscalização e o controle social sobre despesas governamentais em todos os níveis.",
    time: "Agora",
    featured: true,
  },
  {
    id: 2,
    image: newsEconomy,
    category: "Tecnologia",
    title: "Governo lança programa de digitalização de serviços públicos",
    excerpt: "Iniciativa pretende modernizar plataformas de atendimento ao cidadão com foco em segurança e acessibilidade. Investimento de R$ 2 bilhões será distribuído em três anos.",
    time: "3 horas atrás",
  },
  {
    id: 3,
    image: newsElection,
    category: "Desenvolvimento Regional",
    title: "Novo programa federal apoia pequenas cidades no interior",
    excerpt: "Ministério do Desenvolvimento Regional lança iniciativa para fortalecer infraestrutura em municípios com até 50 mil habitantes, priorizando saúde e educação.",
    time: "5 horas atrás",
  },
  {
    id: 4,
    image: newsPolitics,
    category: "Segurança Pública",
    title: "Senado debate novo Marco Legal de Segurança Pública",
    excerpt: "Discussão aborda modernização das instituições policiais e integração de tecnologia em operações. Expectativa é votação ainda no primeiro trimestre de 2026.",
    time: "7 horas atrás",
  },
];

export default newsDataAlternative;
