import { useState, useEffect } from "react";
import { ShoppingBag, ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { label: "Shop", sub: ["Voga Ring 4", "Voga Ring 4 Ceramic", "Accessories"] },
  { label: "Health Features", sub: ["Sleep", "Activity", "Heart Health", "Stress", "Women's Health"] },
  { label: "Experience", sub: ["How It Works", "Voga Membership", "Research"] },
  { label: "For Organizations", sub: [] },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Top banner */}
      <div className="w-full bg-charcoal text-cream text-center py-2.5 text-xs font-sans tracking-wide">
        Use your FSA or HSA funds at Voga Ring
      </div>

      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-cream/95 backdrop-blur-sm shadow-soft" : "bg-cream"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="font-serif text-2xl font-light tracking-[0.15em] text-charcoal">
            VOGA RING
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.sub.length > 0 && setOpenSub(item.label)}
                onMouseLeave={() => setOpenSub(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-sans text-charcoal-light hover:text-charcoal transition-colors">
                  {item.label}
                  {item.sub.length > 0 && <ChevronDown size={14} />}
                </button>
                {item.sub.length > 0 && openSub === item.label && (
                  <div className="absolute top-full left-0 mt-1 bg-cream border border-border rounded-lg shadow-medium py-2 min-w-48 animate-fade-in">
                    {item.sub.map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="block px-5 py-2.5 text-sm font-sans text-charcoal-light hover:text-charcoal hover:bg-sand transition-colors"
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 bg-charcoal text-cream text-sm font-sans px-5 py-2.5 rounded-full hover:bg-charcoal-light transition-colors">
              <ShoppingBag size={15} />
              Shop Now
            </button>
            <button
              className="md:hidden text-charcoal"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-cream border-t border-border px-6 py-4 space-y-3 animate-fade-in">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  className="w-full text-left font-sans text-sm text-charcoal py-2 flex justify-between items-center"
                  onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                >
                  {item.label}
                  {item.sub.length > 0 && (
                    <ChevronDown size={14} className={`transition-transform ${openSub === item.label ? "rotate-180" : ""}`} />
                  )}
                </button>
                {item.sub.length > 0 && openSub === item.label && (
                  <div className="pl-4 space-y-1">
                    {item.sub.map((s) => (
                      <a key={s} href="#" className="block py-1.5 text-sm text-charcoal-light hover:text-charcoal transition-colors">
                        {s}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="w-full mt-2 bg-charcoal text-cream text-sm font-sans py-3 rounded-full">
              Shop Now
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
