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

const testimonials = [
  {
    name: "Carlos M.",
    role: "Dono · Club Noir, SP",
    text: "Em 3 meses, nossa receita mensal cresceu 340%. As automações fazem mais reservas do que nossa equipe inteira fazia antes.",
    metric: "+340%",
    metricLabel: "receita mensal",
  },
  {
    name: "Adriana R.",
    role: "Gerente · Eros Lounge, RJ",
    text: "Finalmente uma plataforma que entende o nosso segmento. Sem censura, sem limitações. Nossos eventos lotam toda semana.",
    metric: "100%",
    metricLabel: "de ocupação",
  },
  {
    name: "Fernando L.",
    role: "Promoter profissional, BH",
    text: "Minha lista VIP vale 3x mais agora. O sistema de comissões automático me paga certinho e acompanho tudo pelo celular.",
    metric: "3x",
    metricLabel: "valor por cliente",
  },
];

const benefits = [
  { icon: "⚡", title: "Setup em 24h", desc: "Sua plataforma no ar em menos de um dia. Onboarding guiado, sem burocracia." },
  { icon: "🔒", title: "100% seguro", desc: "Dados criptografados, compliance com LGPD, ambiente adulto protegido." },
  { icon: "📱", title: "Mobile-first", desc: "Clientes e promoters acessam tudo pelo celular. Zero fricção." },
  { icon: "🤝", title: "Suporte dedicado", desc: "Time especializado no setor adulto. Entende o seu negócio de verdade." },
];

export function NewBenefitsSection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="relative py-24 px-6 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-14"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(24px)",
            transition: "all 0.7s ease",
          }}
        >
          <span className="inline-block text-red-500 text-sm font-semibold tracking-widest uppercase mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Resultados reais
          </span>
          <h2
            className="text-white max-w-2xl mx-auto"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Quem usa, não volta para o jeito antigo
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-red-500/20 hover:bg-white/5 transition-all duration-300"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(32px)",
                transition: `all 0.6s ease ${i * 130 + 200}ms`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-600/30 flex items-center justify-center text-lg">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>{t.name}</p>
                  <p className="text-white/35 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.role}</p>
                </div>
              </div>
              <p className="text-white/55 text-sm leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                "{t.text}"
              </p>
              <div className="flex items-baseline gap-1.5 pt-4 border-t border-white/5">
                <span className="text-red-400 font-bold" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.5rem" }}>
                  {t.metric}
                </span>
                <span className="text-white/35 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.metricLabel}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="p-5 rounded-xl border border-white/8 bg-white/3 text-center"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(20px)",
                transition: `all 0.6s ease ${i * 80 + 600}ms`,
              }}
            >
              <div className="text-3xl mb-3">{b.icon}</div>
              <h4 className="text-white font-semibold text-sm mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {b.title}
              </h4>
              <p className="text-white/40 text-xs leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
