export default function Footer() {
  const links = {
    "Produtos": ["Oura Ring 4", "Oura Ring 4 Ceramic", "Acessórios", "Aplicativo"],
    "Recursos": ["Sono", "Atividade", "Saúde do Coração", "Estresse", "Saúde Feminina"],
    "Empresa": ["Sobre Nós", "Pesquisa", "Carreiras", "Imprensa", "Parceiros"],
    "Suporte": ["Central de Ajuda", "Tamanho do Anel", "Garantia", "Política de Privacidade"],
  };

  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-3xl font-light tracking-[0.15em] mb-4">OURA</p>
            <p className="font-sans text-sm text-cream/50 leading-relaxed max-w-44">
              A plataforma de saúde pessoal mais precisa do mundo.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="section-label text-cream/30 mb-5">{group}</p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-sans text-sm text-cream/60 hover:text-cream transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-cream/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-cream/30">
            © 2025 Oura Health Oy. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {["Instagram", "Twitter", "YouTube", "LinkedIn"].map((s) => (
              <a
                key={s}
                href="#"
                className="font-sans text-xs text-cream/40 hover:text-cream transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
