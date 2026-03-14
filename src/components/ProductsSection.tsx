import ringCeramic from "@/assets/ring-ceramic.jpg";

const products = [
  {
    name: "Oura Ring 4",
    description: "O anel inteligente mais preciso do mercado.",
    price: "A partir de R$ 1.899",
    badge: "Mais Popular",
    colors: ["#2a2522", "#c0b8a8", "#d4af37", "#4a4a4a"],
    colorNames: ["Midnight", "Silver", "Gold", "Stealth"],
  },
  {
    name: "Oura Ring 4 Ceramic",
    description: "Cerâmica premium para quem quer o máximo em design.",
    price: "R$ 2.699",
    badge: "Edição Premium",
    colors: ["#f5f0e8", "#1a1a1a"],
    colorNames: ["Petal", "Midnight"],
    img: ringCeramic,
  },
];

export default function ProductsSection() {
  return (
    <section id="shop" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label text-charcoal-light mb-4">Nossa Coleção</p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-charcoal leading-tight">
            Forma encontra{" "}
            <span className="display-italic text-gold">função</span>
          </h2>
          <p className="mt-5 font-sans text-base text-charcoal-light max-w-xl mx-auto">
            Construído para precisão, projetado para o seu dia a dia. Use o Oura Ring o dia todo para coletar métricas de saúde profundamente personalizadas.
          </p>
        </div>

        {/* Products */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((p) => (
            <div
              key={p.name}
              className="group relative rounded-2xl overflow-hidden bg-sand/30 border border-border hover:shadow-strong transition-all duration-500"
            >
              {p.badge && (
                <div className="absolute top-5 left-5 z-10 bg-charcoal text-cream text-xs font-sans px-3 py-1.5 rounded-full">
                  {p.badge}
                </div>
              )}
              <div className="h-72 overflow-hidden">
                <img
                  src={p.img || ringCeramic}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-3xl font-light text-charcoal mb-2">{p.name}</h3>
                <p className="font-sans text-sm text-charcoal-light mb-6">{p.description}</p>

                {/* Color swatches */}
                <div className="flex items-center gap-2 mb-6">
                  {p.colors.map((c, i) => (
                    <button
                      key={i}
                      title={p.colorNames[i]}
                      className="w-5 h-5 rounded-full border-2 border-transparent hover:border-charcoal transition-all"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                  <span className="ml-2 text-xs font-sans text-charcoal-light">
                    {p.colors.length} cores
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl text-charcoal">{p.price}</span>
                  <div className="flex gap-3">
                    <button className="border border-charcoal text-charcoal text-sm font-sans px-5 py-2.5 rounded-full hover:bg-sand transition-colors">
                      Explorar
                    </button>
                    <button className="bg-charcoal text-cream text-sm font-sans px-5 py-2.5 rounded-full hover:bg-charcoal-light transition-colors">
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
