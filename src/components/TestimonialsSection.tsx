const testimonials = [
  {
    quote: "O Oura se tornou minha bússola diária, me mantendo no caminho certo.",
    author: "Jussi L.",
    role: "Membro Oura",
  },
  {
    quote: "Meus dados do Oura são minha forma de tomada de decisão guiada.",
    author: "Linda D.",
    role: "Membro Oura",
  },
  {
    quote: "O Oura foi o primeiro passo para melhorar meu sono. Foi o início da minha jornada de cura.",
    author: "Rhonda C.",
    role: "Membro Oura",
  },
];

const stats = [
  { value: "2M+", label: "Membros ativos" },
  { value: "100+", label: "Estudos de pesquisa" },
  { value: "20+", label: "Biométricas" },
  { value: "99%", label: "Satisfação dos clientes" },
];

export default function TestimonialsSection() {
  return (
    <section className="py-28 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((s) => (
            <div key={s.value} className="text-center">
              <p className="font-serif text-5xl font-light text-cream">{s.value}</p>
              <p className="font-sans text-sm text-cream/50 mt-2">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-gold mx-auto mb-20 opacity-60" />

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label text-cream/40 mb-4">O que dizem nossos membros</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-cream leading-tight">
            Vidas <span className="display-italic text-gold">transformadas</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-cream/10 rounded-2xl p-8 hover:border-gold/30 transition-all duration-300 hover:shadow-medium group"
            >
              <div className="text-gold font-serif text-4xl leading-none mb-6 opacity-50">"</div>
              <p className="font-serif text-xl font-light text-cream/90 leading-relaxed mb-8 italic">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-sand/20 flex items-center justify-center text-cream font-serif text-sm">
                  {t.author[0]}
                </div>
                <div>
                  <p className="font-sans text-sm text-cream font-medium">{t.author}</p>
                  <p className="font-sans text-xs text-cream/40">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
