import heroImage from "@/assets/hero-congress.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Congresso Nacional do Brasil"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-wider uppercase bg-accent/20 text-accent-foreground rounded-full animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Notícias em Tempo Real
          </span>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Política Brasileira{" "}
            <span className="text-accent">Sem Filtros</span>
          </h1>
          
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Acompanhe as principais decisões, votações e bastidores do cenário político nacional com análises profundas e imparciais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#noticias"
              className="btn-accent inline-flex items-center justify-center gap-2"
            >
              Ver Últimas Notícias
            </a>
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-primary-foreground border-2 border-primary-foreground/30 rounded-lg hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Baixar Aplicativo
            </a>
          </div>
        </div>

        {/* Breaking News Ticker */}
        <div className="absolute bottom-0 left-0 right-0 bg-accent py-3 overflow-hidden">
          <div className="flex animate-[slideIn_20s_linear_infinite]">
            <span className="whitespace-nowrap px-4 font-body font-semibold text-accent-foreground">
              🔴 URGENTE: Votação no Senado define rumos da reforma tributária • Ministério da Fazenda anuncia novos índices econômicos • TSE inicia preparativos para eleições municipais •
            </span>
            <span className="whitespace-nowrap px-4 font-body font-semibold text-accent-foreground">
              🔴 URGENTE: Votação no Senado define rumos da reforma tributária • Ministério da Fazenda anuncia novos índices econômicos • TSE inicia preparativos para eleições municipais •
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
