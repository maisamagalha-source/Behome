import { useState, useEffect } from "react";
import { Globe, MapPin, Sparkles, Menu, X, Users } from "lucide-react";
import logoImg from "../../imports/Balada_Logo__1_.png";

export function ConsumerNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 py-2.5"
          : "bg-[#0a0a0a]/80 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-8 flex items-center justify-between gap-4">
        {/* Left: logo + nav */}
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <img
              src={logoImg}
              alt="Balada Erótica"
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span
              className="text-white font-bold tracking-tight hidden sm:block"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem" }}
            >
              Balada<span className="text-red-500">Erótica</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            <a
              href="#onde-ir"
              className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              <MapPin size={14} className="text-red-400" />
              Onde Ir
            </a>
            <a
              href="#eventos"
              className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              <Sparkles size={14} className="text-red-400" />
              Eventos
            </a>
          </div>
        </div>

        {/* Right: actions */}
        <div className="hidden md:flex items-center gap-2">
          <button className="p-2 text-white/50 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200">
            <Globe size={18} />
          </button>
          <a
            href="#cadastro"
            className="text-white/70 hover:text-white text-sm font-medium px-4 py-2 rounded-full border border-white/10 hover:border-white/25 transition-all duration-200"
          >
            Cadastre-se
          </a>
          <a
            href="#entrar"
            className="text-white text-sm font-semibold px-4 py-2 rounded-full bg-red-600 hover:bg-red-500 transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ boxShadow: "0 0 20px rgba(220,38,38,0.35)" }}
          >
            Entrar
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/98 border-t border-white/5 px-5 py-4 space-y-2">
          <a
            href="#onde-ir"
            className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium py-2.5 px-3 rounded-lg hover:bg-white/5 transition-all"
            onClick={() => setMenuOpen(false)}
          >
            <MapPin size={15} className="text-red-400" /> Onde Ir
          </a>
          <a
            href="#eventos"
            className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium py-2.5 px-3 rounded-lg hover:bg-white/5 transition-all"
            onClick={() => setMenuOpen(false)}
          >
            <Sparkles size={15} className="text-red-400" /> Eventos
          </a>
          <div className="flex gap-2 pt-2">
            <a
              href="#cadastro"
              className="flex-1 text-center text-white/70 text-sm font-medium py-2.5 rounded-full border border-white/10"
            >
              Cadastre-se
            </a>
            <a
              href="#entrar"
              className="flex-1 text-center text-white text-sm font-semibold py-2.5 rounded-full bg-red-600"
            >
              Entrar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
