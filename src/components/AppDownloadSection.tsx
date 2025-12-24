import { Smartphone, Bell, Bookmark, Wifi } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

const features = [
  {
    icon: Bell,
    title: "Notificações Instantâneas",
    description: "Receba alertas das notícias mais importantes em tempo real.",
  },
  {
    icon: Bookmark,
    title: "Salve suas Leituras",
    description: "Marque artigos para ler depois, mesmo sem internet.",
  },
  {
    icon: Wifi,
    title: "Modo Offline",
    description: "Acesse conteúdo baixado em qualquer lugar.",
  },
];

const AppDownloadSection = () => {
  return (
    <section id="download" className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-2 text-sm font-semibold tracking-wider uppercase bg-accent/20 text-accent rounded-full mb-6">
              Novo Aplicativo
            </span>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Política na{" "}
              <span className="text-accent">Palma da Mão</span>
            </h2>
            
            <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-lg mx-auto lg:mx-0">
              Baixe o aplicativo VercelPolit e tenha acesso exclusivo a conteúdos aprofundados, 
              análises especiais e notificações personalizadas sobre os assuntos que mais importam para você.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 text-left"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-primary-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-primary-foreground/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              
              <a
                href="https://www.mediafire.com/file/6l58gs83429ao2z/vercel.apk/file"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-card text-card-foreground rounded-xl hover:bg-card/90 transition-all duration-300 shadow-hero hover:shadow-card-hover hover:-translate-y-1"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="text-left">
                  <span className="block text-xs opacity-70"></span>
                  <span className="block font-semibold">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* App Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/30 blur-3xl rounded-full scale-75" />
              <img
                src={appMockup}
                alt="VercelPolit App"
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl animate-fade-in-up"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
