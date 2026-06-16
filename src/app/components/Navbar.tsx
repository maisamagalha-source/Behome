import { useState, useEffect } from "react";
import logoImg from "../../imports/Balada_Logo__1_.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappLink =
    "https://wa.me/5511945599070?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20apresenta%C3%A7%C3%A3o%20do%20Balada%20Er%C3%B3tica.";

  const navLinks = [
    { label: "Solução", href: "#solucao" },
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Comparativo", href: "#comparativo" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <img src={logoImg} alt="Balada Erótica" className="w-9 h-9 rounded-xl object-cover" />
          <span
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-white font-bold text-lg tracking-tight group-hover:text-red-400 transition-colors"
          >
            Balada<span className="text-red-500">Erótica</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Solicitar Apresentação
          </a>
        </div>

        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/98 border-t border-white/5 px-6 py-4 space-y-4">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block text-white/70 hover:text-white text-sm font-medium py-2 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-red-600 text-white text-sm font-semibold px-4 py-3 rounded-full"
          >
            Solicitar Apresentação
          </a>
        </div>
      )}
    </nav>
  );
}
