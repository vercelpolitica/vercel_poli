import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import AppDownloadSection from "@/components/AppDownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Vercel Politica - Notícias Políticas do Brasil em Tempo Real</title>
        <meta 
          name="description" 
          content="Acompanhe as principais notícias políticas do Brasil. Cobertura completa do Congresso, eleições, economia e análises aprofundadas." 
        />
        <meta name="keywords" content="política, brasil, notícias, congresso, eleições, economia, governo" />
        <link rel="canonical" href="https://vercelpolit.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <NewsSection />
          <AppDownloadSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
