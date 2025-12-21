import { Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    editorial: [
      { label: "Política", href: "#" },
      { label: "Economia", href: "#" },
      { label: "Eleições", href: "#" },
      { label: "Opinião", href: "#" },
    ],
    institutional: [
      { label: "Sobre Nós", href: "#" },
      { label: "Equipe", href: "#" },
      { label: "Contato", href: "#" },
      { label: "Trabalhe Conosco", href: "#" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Receba as Notícias em Primeira Mão
            </h3>
            <p className="font-body text-primary-foreground/70 mb-6">
              Cadastre-se para receber nossa newsletter diária com os principais acontecimentos políticos.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-card text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <button
                type="submit"
                className="btn-accent whitespace-nowrap"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-4">
              <span className="font-display text-2xl font-bold">
                Vercel<span className="text-accent">Política</span>
              </span>
            </a>
            <p className="font-body text-primary-foreground/70 mb-6 max-w-sm">
              Jornalismo político independente e de qualidade. 
              Comprometidos com a verdade e a transparência na cobertura do cenário político brasileiro.
            </p>
          </div>

          {/* Editorial Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Editorial</h4>
            <ul className="space-y-3">
              {footerLinks.editorial.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Institucional</h4>
            <ul className="space-y-3">
              {footerLinks.institutional.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <p className="font-body text-sm text-primary-foreground/50 text-center">
            © {new Date().getFullYear()} Vercel Política. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
