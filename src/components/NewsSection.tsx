const news = [
  {
    source: "TIME",
    headline: "Voga Ring 4 — Best Inventions of 2025",
    url: "#",
    featured: true,
  },
  {
    source: "CNN",
    headline: "CEOs and celebrities love Voga's sleep tracking ring. Its CEO has a plan to stay ahead of Apple and Google",
    url: "#",
    featured: false,
  },
  {
    source: "CNBC",
    headline: "Voga Ring reaches $11 billion valuation with new $900 million funding round",
    url: "#",
    featured: false,
  },
  {
    source: "Cosmopolitan",
    headline: "I tested Voga Ring 4 for a full year and here's my honest review",
    url: "#",
    featured: false,
  },
];

export default function NewsSection() {
  return (
    <section className="py-28 bg-sand/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label text-charcoal-light mb-4">In the Press</p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-charcoal">
            The world <span className="display-italic text-gold">takes notice</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Featured */}
          <div className="md:col-span-1 rounded-2xl overflow-hidden border border-border bg-charcoal p-8 flex flex-col justify-between">
            <div>
              <span className="section-label text-gold">Featured Article</span>
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
                Read more →
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
                  aria-label="Read article"
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
