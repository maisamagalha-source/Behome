import { useEffect, useRef, useState } from "react";
import { useBusiness } from "./BusinessContext";

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

const pricing = {
  sexshop: {
    label: "Sex Shop",
    icon: "🛍️",
    accentColor: "#db2777",
    glowColor: "rgba(219,39,119,0.3)",
    plans: [
      {
        name: "PIX Anual",
        badge: "Melhor preço",
        badgeColor: "#16a34a",
        price: "R$ 190",
        sub: "pagamento único à vista no PIX",
        highlight: true,
        note: "Equivale a R$ 15,83/mês — maior economia",
        features: ["Acesso completo 12 meses", "Divulgação para toda a base", "WhatsApp, Instagram, Telegram", "Links da loja virtual", "Suporte prioritário"],
      },
      {
        name: "Mensal",
        badge: "Contrato 1 ano",
        badgeColor: "#dc2626",
        price: "R$ 49,90",
        sub: "por mês · contrato mínimo 12 meses",
        highlight: false,
        note: "Fidelidade de 1 ano obrigatória",
        features: ["Acesso completo", "Divulgação para toda a base", "WhatsApp, Instagram, Telegram", "Links da loja virtual", "Suporte padrão"],
      },
      {
        name: "Cartão Parcelado",
        badge: "Sem entrada",
        badgeColor: "#7c3aed",
        price: "R$ 290",
        sub: "em até 12x no cartão",
        highlight: false,
        note: "R$ 24,17/mês · parcelado sem juros*",
        features: ["Acesso completo 12 meses", "Divulgação para toda a base", "WhatsApp, Instagram, Telegram", "Links da loja virtual", "Suporte padrão"],
      },
    ],
  },
  noturna: {
    label: "Casa Noturna / Motel",
    icon: "🌙",
    accentColor: "#dc2626",
    glowColor: "rgba(220,38,38,0.3)",
    plans: [
      {
        name: "PIX Anual",
        badge: "Melhor preço",
        badgeColor: "#16a34a",
        price: "R$ 490",
        sub: "pagamento único à vista no PIX",
        highlight: true,
        note: "Equivale a R$ 40,83/mês — maior economia",
        features: ["Acesso completo 12 meses", "Lista VIP com preços diferenciados", "Pré-reserva com cobrança antecipada", "Cupons & promoções", "Suporte prioritário"],
      },
      {
        name: "Mensal",
        badge: "Contrato 1 ano",
        badgeColor: "#dc2626",
        price: "R$ 190",
        sub: "por mês · contrato mínimo 12 meses",
        highlight: false,
        note: "Fidelidade de 1 ano obrigatória",
        features: ["Acesso completo", "Lista VIP com preços diferenciados", "Pré-reserva com cobrança antecipada", "Cupons & promoções", "Suporte padrão"],
      },
      {
        name: "Cartão Parcelado",
        badge: "Sem entrada",
        badgeColor: "#7c3aed",
        price: "R$ 690",
        sub: "em até 12x no cartão",
        highlight: false,
        note: "R$ 57,50/mês · parcelado sem juros*",
        features: ["Acesso completo 12 meses", "Lista VIP com preços diferenciados", "Pré-reserva com cobrança antecipada", "Cupons & promoções", "Suporte padrão"],
      },
    ],
  },
};

export function NewPricingSection() {
  const { type } = useBusiness();
  const { ref, inView } = useInView();
  const plan = pricing[type];

  return (
    <section id="precos" ref={ref} className="relative py-24 px-6 overflow-hidden" style={{ background: "#050505" }}>
      {/* Copa Brasil ambient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #009c3b, transparent 70%)" }} />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #FFDF00, transparent 70%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-8" style={{ background: `radial-gradient(ellipse, ${plan.glowColor}, transparent 70%)` }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div
          className="text-center mb-4"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)", transition: "all 0.7s ease" }}
        >
          {/* Copa badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "linear-gradient(135deg, #009c3b22, #FFDF0022)", border: "1px solid #FFDF0040" }}>
            <span>🇧🇷</span>
            <span className="text-yellow-400 text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Oferta Copa Brasil — Junho 2026
            </span>
            <span>⚽</span>
          </div>

          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-2xl">{plan.icon}</span>
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif", color: plan.accentColor }}>
              {plan.label}
            </span>
          </div>

          <h2 className="text-white max-w-2xl mx-auto" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Escolha como quer contratar
          </h2>
          <p className="text-white/45 mt-3 max-w-lg mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
            Todas as opções incluem acesso completo à plataforma. Contrato mínimo de 12 meses.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {plan.plans.map((p, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-7 border transition-all duration-500 overflow-hidden"
              style={{
                borderColor: p.highlight ? plan.accentColor : "rgba(255,255,255,0.08)",
                background: p.highlight ? `${plan.accentColor}12` : "rgba(255,255,255,0.02)",
                boxShadow: p.highlight ? `0 0 50px ${plan.glowColor}` : "none",
                opacity: inView ? 1 : 0,
                transform: inView ? (p.highlight ? "scale(1.03)" : "none") : "translateY(32px)",
                transition: `all 0.6s ease ${i * 120 + 200}ms`,
              }}
            >
              {/* Copa corner decoration on highlight */}
              {p.highlight && (
                <div className="absolute top-0 right-0 w-24 h-24 opacity-15 pointer-events-none" style={{ background: "linear-gradient(225deg, #FFDF00, transparent 60%)" }} />
              )}

              {/* Badge */}
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-white text-xs font-bold mb-5"
                style={{ background: p.badgeColor, fontFamily: "'DM Sans', sans-serif" }}
              >
                {p.highlight && <span>⭐</span>}
                {p.badge}
              </div>

              <h3 className="text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem", fontWeight: 700 }}>
                {p.name}
              </h3>

              <div className="mb-1">
                <span className="text-white" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2.5rem", fontWeight: 800, lineHeight: 1 }}>
                  {p.price}
                </span>
              </div>
              <p className="text-white/40 text-xs mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{p.sub}</p>
              <p className="text-yellow-400/70 text-xs mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>{p.note}</p>

              <ul className="space-y-2.5 mb-7">
                {p.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2.5 text-white/65 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: plan.accentColor + "33" }}>
                      <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5">
                        <path d="M2 6l3 3 5-5" stroke={plan.accentColor} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-95"
                style={{
                  background: p.highlight ? plan.accentColor : "rgba(255,255,255,0.08)",
                  color: "white",
                  fontFamily: "'DM Sans', sans-serif",
                  boxShadow: p.highlight ? `0 4px 20px ${plan.glowColor}` : "none",
                }}
              >
                Contratar agora
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-white/20 text-xs mt-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          * Parcelamento sujeito à aprovação. Contrato mínimo de 12 meses em todas as modalidades. Preços promocionais válidos durante a Copa Brasil 2026.
        </p>
      </div>
    </section>
  );
}
