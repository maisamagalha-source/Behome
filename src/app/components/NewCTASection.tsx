import { useEffect, useRef, useState } from "react";
import logoImg from "../../imports/Balada_Logo__1_.png";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const WA = "https://wa.me/5511945599070?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20apresenta%C3%A7%C3%A3o%20do%20Balada%20Er%C3%B3tica.";

export function NewCTASection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="relative py-28 px-6 overflow-hidden" style={{ background: "#050505" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-25"
          style={{ background: "radial-gradient(ellipse, #dc2626 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(220,38,38,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(32px)",
            transition: "all 0.8s ease",
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Vagas limitadas para novos parceiros
          </div>

          <h2
            className="text-white mb-6"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Pronto para transformar
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #dc2626 0%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              seu negócio?
            </span>
          </h2>

          <p
            className="text-white/50 max-w-xl mx-auto mb-10"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", lineHeight: 1.7 }}
          >
            Solicite uma apresentação personalizada. Nossa equipe entra em contato em até 2 horas para montar a solução ideal para sua empresa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.05rem",
                boxShadow: "0 0 60px rgba(220,38,38,0.4), 0 0 120px rgba(220,38,38,0.15)",
              }}
            >
              Solicitar Apresentação
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          <p className="text-white/25 text-xs mt-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Sem compromisso. Apresentação 100% gratuita. Resposta em até 2 horas.
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto mt-20 pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={logoImg} alt="Balada Erótica" className="w-8 h-8 rounded-xl object-cover" />
          <span className="text-white/60 text-sm font-semibold" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Balada<span className="text-red-500">Erótica</span>
          </span>
        </div>
        <p className="text-white/20 text-xs text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          © 2026 Balada Erótica. Plataforma exclusiva para o setor adulto (+18).
        </p>
        <div className="flex gap-4">
          {["Termos", "Privacidade", "LGPD"].map((l) => (
            <a key={l} href="#" className="text-white/25 hover:text-white/50 text-xs transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
