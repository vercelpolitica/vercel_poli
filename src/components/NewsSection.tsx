import NewsCard from "./NewsCard";
import newsPolitics from "@/assets/news-politics-1.jpg";
import newsEconomy from "@/assets/news-economy.jpg";
import newsElection from "@/assets/news-election.jpg";

const newsData = [
  {
    id: 1,
    image: newsPolitics,
    category: "Congresso",
    title: "Líderes partidários se reúnem para definir pauta da semana legislativa",
    excerpt: "Reunião entre lideranças define votações prioritárias e estratégia para aprovação de projetos econômicos.",
    time: "2 horas atrás",
    featured: true,
  },
  {
    id: 2,
    image: newsEconomy,
    category: "Economia",
    title: "Banco Central sinaliza manutenção da taxa de juros",
    excerpt: "Expectativa do mercado é de estabilidade na próxima reunião do Copom diante do cenário inflacionário.",
    time: "4 horas atrás",
  },
  {
    id: 3,
    image: newsElection,
    category: "Eleições",
    title: "TSE divulga calendário oficial das eleições municipais",
    excerpt: "Tribunal Superior Eleitoral estabelece datas para convenções partidárias e início das campanhas.",
    time: "6 horas atrás",
  },
  {
    id: 4,
    image: newsPolitics,
    category: "Política",
    title: "Comissão especial aprova texto-base de reforma administrativa",
    excerpt: "Próximo passo é a votação em plenário da Câmara dos Deputados ainda nesta semana.",
    time: "8 horas atrás",
  },
];

const NewsSection = () => {
  const featuredNews = newsData.find((news) => news.featured);
  const regularNews = newsData.filter((news) => !news.featured);

  return (
    <section id="noticias" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 rounded mb-2">
              Atualizado agora
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Últimas Notícias
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-accent font-semibold hover:underline"
          >
            Ver todas
            <span>→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured News */}
          {featuredNews && (
            <div className="lg:row-span-2">
              <NewsCard {...featuredNews} />
            </div>
          )}

          {/* Regular News Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
            {regularNews.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center md:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
          >
            Ver todas as notícias
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
