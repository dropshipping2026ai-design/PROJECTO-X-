export default function CtaSection() {
  return (
    <section className="py-28 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="section-label text-charcoal-light mb-5">Start your journey</p>
        <h2 className="font-serif text-5xl md:text-7xl font-light text-charcoal leading-tight mb-8">
          Know your body{" "}
          <span className="display-italic text-gold">like never before</span>
        </h2>
        <p className="font-sans text-base text-charcoal-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Voga Ring monitors over 20 biometrics while you sleep, exercise, and live.
          Discover what your body is trying to tell you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#shop"
            className="bg-charcoal text-cream font-sans text-sm px-10 py-4 rounded-full hover:bg-charcoal-light transition-all duration-300 hover:shadow-medium"
          >
            Shop Voga Ring 4
          </a>
          <a
            href="#features"
            className="border border-border text-charcoal font-sans text-sm px-10 py-4 rounded-full hover:bg-sand transition-all duration-300"
          >
            How It Works
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-10 opacity-50">
          {["TIME Best Inventions", "CNN Featured", "CNBC", "Cosmopolitan"].map((b) => (
            <span key={b} className="font-sans text-xs text-charcoal-light tracking-widest uppercase">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
