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

const WA = "https://wa.me/5511945599070?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20apresenta%C3%A7%C3%A3o%20do%20Balada%20Er%C3%B3tica.";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "R$ 297",
    period: "/mês",
    badge: null,
    color: "#374151",
    features: [
      "1 estabelecimento",
      "Até 3 eventos/mês",
      "Lista VIP básica",
      "Check-in digital",
      "Relatórios mensais",
      "Suporte via chat",
    ],
    missing: ["IA WhatsApp", "Cupons & QR Code", "Conteúdo segmentado", "Analytics avançado"],
  },
  {
    id: "pro",
    name: "Pro",
    price: "R$ 697",
    period: "/mês",
    badge: "Mais popular",
    color: "#dc2626",
    features: [
      "1 estabelecimento",
      "Eventos ilimitados",
      "Lista VIP + promoters",
      "Check-in digital",
      "IA WhatsApp",
      "Cupons & QR Code",
      "Conteúdo segmentado",
      "Relatórios em tempo real",
      "Suporte prioritário",
    ],
    missing: ["Analytics avançado", "Multi-estabelecimento"],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    badge: "Premium",
    color: "#7c3aed",
    features: [
      "Multi-estabelecimento",
      "Eventos ilimitados",
      "Tudo do plano Pro",
      "Analytics avançado",
      "API dedicada",
      "Gestor de conta exclusivo",
      "Onboarding presencial",
      "SLA garantido",
      "Customizações",
    ],
    missing: [],
  },
];

export function NewVIPSection() {
  const { ref, inView } = useInView();
  const [selected, setSelected] = useState(1);

  return (
    <section id="planos" ref={ref} className="relative py-28 px-6 bg-black overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, #dc2626, transparent 70%)" }}
      />
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
            Planos VIP
          </span>
          <h2
            className="text-white max-w-xl mx-auto"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Escolha o plano certo para o seu negócio
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan, i) => {
            const isSelected = selected === i;
            return (
              <div
                key={plan.id}
                onClick={() => setSelected(i)}
                className={`relative rounded-2xl p-7 border cursor-pointer transition-all duration-300 ${
                  isSelected ? "border-opacity-100 scale-[1.02]" : "border-white/10 bg-white/3 hover:bg-white/5"
                }`}
                style={{
                  borderColor: isSelected ? plan.color : undefined,
                  background: isSelected ? `${plan.color}15` : undefined,
                  boxShadow: isSelected ? `0 0 40px ${plan.color}25` : undefined,
                  opacity: inView ? 1 : 0,
                  transform: inView ? (isSelected ? "scale(1.02)" : "none") : "translateY(32px)",
                  transition: `all 0.6s ease ${i * 120 + 200}ms`,
                }}
              >
                {plan.badge && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-white text-xs font-semibold"
                    style={{ background: plan.color, fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.2rem", fontWeight: 700 }}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-white"
                      style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2rem", fontWeight: 800, lineHeight: 1 }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-white/40 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2.5 text-white/70 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: plan.color + "33" }}>
                        <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5">
                          <path d="M2 6l3 3 5-5" stroke={plan.color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      {f}
                    </li>
                  ))}
                  {plan.missing.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2.5 text-white/20 text-sm line-through" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5">
                        <svg viewBox="0 0 12 12" fill="none" className="w-2 h-2">
                          <path d="M3 3l6 6M9 3l-6 6" stroke="rgba(255,255,255,0.2)" strokeWidth={1.5} strokeLinecap="round" />
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
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90"
                  style={{
                    background: isSelected ? plan.color : "rgba(255,255,255,0.08)",
                    color: "white",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {plan.id === "enterprise" ? "Falar com consultor" : "Contratar agora"}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
