import featureSleep from "@/assets/feature-sleep.jpg";
import featureActivity from "@/assets/feature-activity.jpg";
import ringCeramic from "@/assets/ring-ceramic.jpg";
import { useState } from "react";

const features = [
  {
    id: "sleep",
    label: "Sleep & Recovery",
    headline: "Achieve the best sleep of your life",
    description:
      "Track every sleep stage with clinical precision. Discover how many hours of deep sleep you truly get and what's affecting your rest quality.",
    img: featureSleep,
    stat: "20+",
    statLabel: "Biometrics tracked",
  },
  {
    id: "activity",
    label: "Activity & Fitness",
    headline: "Bring your fitness goals into focus",
    description:
      "From walking to intense workouts, Voga Ring tracks every movement and suggests when to push harder or pull back for maximum performance.",
    img: featureActivity,
    stat: "7 days",
    statLabel: "Battery life",
  },
  {
    id: "design",
    label: "Ceramic Design",
    headline: "Elegance that matches your style",
    description:
      "Available in titanium and premium ceramic. Lightweight, comfortable, and waterproof — Voga Ring is both an accessory and a technology statement.",
    img: ringCeramic,
    stat: "100m",
    statLabel: "Water resistance",
  },
];

export default function FeaturesSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="features" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label text-charcoal-light mb-4">Why Voga Ring</p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-charcoal leading-tight">
            Your Voga membership{" "}
            <span className="display-italic text-gold">gives your body a voice</span>
          </h2>
        </div>

        {/* Tab nav */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {features.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setActive(i)}
              className={`px-6 py-2.5 rounded-full text-sm font-sans transition-all duration-300 ${
                active === i
                  ? "bg-charcoal text-cream shadow-soft"
                  : "border border-border text-charcoal-light hover:border-charcoal-light hover:text-charcoal"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Feature card */}
        {features.map((f, i) => (
          <div
            key={f.id}
            className={`transition-all duration-500 ${active === i ? "block animate-fade-in" : "hidden"}`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-strong">
                <img
                  src={f.img}
                  alt={f.label}
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8" style={{ background: "linear-gradient(to top, hsl(25 20% 10% / 0.7), transparent)" }}>
                  <div className="flex gap-8">
                    <div>
                      <p className="font-serif text-4xl font-light text-cream">{f.stat}</p>
                      <p className="text-xs font-sans text-cream/70 mt-1">{f.statLabel}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="section-label text-charcoal-light mb-5">{f.label}</p>
                <h3 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight mb-6">
                  {f.headline}
                </h3>
                <p className="font-sans text-base text-charcoal-light leading-relaxed mb-8">
                  {f.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-sans text-charcoal border-b border-charcoal pb-0.5 w-fit hover:text-gold hover:border-gold transition-colors"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
