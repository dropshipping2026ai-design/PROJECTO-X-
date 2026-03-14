const news = [
  {
    source: "TIME",
    headline: "Oura Ring 4 — As Melhores Invenções de 2025",
    url: "https://time.com/collections/best-inventions-2025/",
    featured: true,
  },
  {
    source: "CNN",
    headline: "CEOs e celebridades adoram o anel de rastreamento de sono da Oura. Seu CEO tem um plano para ficar à frente da Apple e Google",
    url: "#",
    featured: false,
  },
  {
    source: "CNBC",
    headline: "Oura atinge avaliação de US$ 11 bilhões com novo aporte de US$ 900 milhões",
    url: "#",
    featured: false,
  },
  {
    source: "Cosmopolitan",
    headline: "Testei o Oura Ring 4 por um ano inteiro e aqui está minha análise honesta",
    url: "#",
    featured: false,
  },
];

export default function NewsSection() {
  return (
    <section className="py-28 bg-sand/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label text-charcoal-light mb-4">Na Mídia</p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-charcoal">
            O mundo <span className="display-italic text-gold">nos nota</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Featured */}
          <div className="md:col-span-1 rounded-2xl overflow-hidden border border-border bg-charcoal p-8 flex flex-col justify-between">
            <div>
              <span className="section-label text-gold">Artigo em Destaque</span>
              <p className="font-serif text-2xl font-light text-cream mt-4 leading-snug">
                {news[0].headline}
              </p>
            </div>
            <div className="mt-8">
              <p className="font-sans text-3xl font-light text-cream/30 mb-4">{news[0].source}</p>
              <a
                href={news[0].url}
                className="inline-flex items-center gap-2 text-sm font-sans text-cream border-b border-cream/30 pb-0.5 hover:border-gold hover:text-gold transition-colors"
              >
                Ler mais →
              </a>
            </div>
          </div>

          {/* Others */}
          <div className="md:col-span-2 grid gap-4">
            {news.slice(1).map((n, i) => (
              <div
                key={i}
                className="group border border-border rounded-xl p-6 bg-cream hover:shadow-medium hover:border-gold/30 transition-all duration-300 flex items-start justify-between gap-6"
              >
                <div className="flex-1">
                  <span className="font-sans text-xs font-semibold text-charcoal-light tracking-widest uppercase mb-3 block">
                    {n.source}
                  </span>
                  <p className="font-serif text-lg font-light text-charcoal leading-snug group-hover:text-charcoal-light transition-colors">
                    {n.headline}
                  </p>
                </div>
                <a
                  href={n.url}
                  className="shrink-0 text-charcoal-light hover:text-gold transition-colors mt-1"
                  aria-label="Ler artigo"
                >
                  →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
