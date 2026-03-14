const testimonials = [
  {
    quote: "Voga Ring has become my daily compass, keeping me on the right track.",
    author: "Jussi L.",
    role: "Voga Member",
  },
  {
    quote: "My Voga data is my way of making guided decisions every single day.",
    author: "Linda D.",
    role: "Voga Member",
  },
  {
    quote: "Voga Ring was the first step to improving my sleep. It was the beginning of my healing journey.",
    author: "Rhonda C.",
    role: "Voga Member",
  },
];

const stats = [
  { value: "2M+", label: "Active members" },
  { value: "100+", label: "Research studies" },
  { value: "20+", label: "Biometrics" },
  { value: "99%", label: "Customer satisfaction" },
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
          <p className="section-label text-cream/40 mb-4">What our members say</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-cream leading-tight">
            Lives <span className="display-italic text-gold">transformed</span>
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
