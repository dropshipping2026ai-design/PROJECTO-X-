import ringHero from "@/assets/ring-hero.jpg";

export default function Hero() {
  return (
    <section
      className="relative min-h-[calc(100vh-112px)] flex items-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={ringHero}
          alt="Voga Ring"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(100deg, hsl(36 35% 93% / 0.92) 0%, hsl(36 25% 87% / 0.55) 55%, transparent 100%)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-lg">
          <p className="section-label text-charcoal-light mb-5 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Voga Ring 4
          </p>
          <h1 className="font-serif text-6xl md:text-7xl font-light leading-tight text-charcoal animate-fade-up" style={{ animationDelay: "0.2s" }}>
            More Elegant.{" "}
            <br />
            More Intelligent.
            <br />
            <span className="display-italic text-gold">Made for you.</span>
          </h1>
          <p className="mt-6 text-base font-sans text-charcoal-light leading-relaxed animate-fade-up" style={{ animationDelay: "0.35s" }}>
            Discover over 20 biometrics right on your finger. The most accurate smart ring on the market.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.45s" }}>
            <a
              href="#shop"
              className="bg-charcoal text-cream font-sans text-sm px-8 py-4 rounded-full hover:bg-charcoal-light transition-all duration-300 hover:shadow-medium"
            >
              Discover Voga Ring 4
            </a>
            <a
              href="#features"
              className="border border-charcoal text-charcoal font-sans text-sm px-8 py-4 rounded-full hover:bg-sand transition-all duration-300"
            >
              See Features
            </a>
          </div>
          <p className="mt-5 text-xs font-sans text-charcoal-light animate-fade-up" style={{ animationDelay: "0.55s" }}>
            ✓ FSA/HSA Eligible &nbsp;•&nbsp; Starting at $299
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <div className="w-px h-8 bg-charcoal" />
      </div>
    </section>
  );
}
