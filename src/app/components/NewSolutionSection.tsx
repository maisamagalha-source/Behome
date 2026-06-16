import { useEffect, useRef, useState } from "react";

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

const modules = [
  { icon: "🎁", label: "Cupons & QR", color: "#dc2626" },
  { icon: "🎤", label: "Promoters", color: "#7c3aed" },
  { icon: "💎", label: "Planos VIP", color: "#eab308" },
  { icon: "📅", label: "Eventos", color: "#0ea5e9" },
  { icon: "📣", label: "Divulgação", color: "#10b981" },
  { icon: "🔒", label: "Sem censura", color: "#f97316" },
];

const features = [
  {
    num: "01",
    title: "Tudo integrado — sem gambiarras",
    desc: "Uma plataforma feita para o setor adulto. Todos os módulos conversam entre si, sem precisar de ferramentas externas.",
  },
  {
    num: "02",
    title: "Sem censura, sem banimento",
    desc: "Ambiente exclusivo para o seu segmento. Sem risco de suspensão de conta. Seu negócio, sua marca, suas regras.",
  },
  {
    num: "03",
    title: "Automação que trabalha por você",
    desc: "Confirmações, promoções e comunicação rodando automaticamente — sem depender de ninguém para manter o negócio ativo.",
  },
];

export function NewSolutionSection() {
  const { ref, inView } = useInView();

  return (
    <section id="solucao" ref={ref} className="relative py-24 px-6 overflow-hidden" style={{ background: "#050505" }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(220,38,38,0.07) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-14"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)", transition: "all 0.7s ease" }}
        >
          <span className="inline-block text-red-500 text-sm font-semibold tracking-widest uppercase mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            A solução
          </span>
          <h2 className="text-white max-w-3xl mx-auto" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Uma plataforma. Todas as ferramentas.{" "}
            <span className="text-red-500">Zero limitações.</span>
          </h2>
        </div>

        <div
          className="flex flex-wrap justify-center gap-3 mb-16 max-w-2xl mx-auto"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "scale(0.9)", transition: "all 0.8s ease 0.2s" }}
        >
          {modules.map((m, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/4 hover:border-white/20 hover:bg-white/8 transition-all duration-200 cursor-default">
              <span className="text-xl">{m.icon}</span>
              <span className="text-white text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>{m.label}</span>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: m.color }} />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(32px)", transition: `all 0.6s ease ${i * 150 + 400}ms` }}>
              <div className="text-red-600/40 mb-3 font-bold" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "3rem", lineHeight: 1 }}>
                {f.num}
              </div>
              <h3 className="text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.15rem", fontWeight: 600 }}>
                {f.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
