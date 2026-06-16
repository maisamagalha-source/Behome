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

const tabs = [
  {
    id: "estabelecimento",
    label: "Estabelecimento",
    icon: "🏢",
    headline: "Sua casa, sua marca, seu controle.",
    points: [
      "Perfil verificado com fotos, vídeos e descrição personalizada",
      "Gerenciamento de múltiplos eventos simultâneos",
      "Dashboard com métricas em tempo real: check-ins, receita, audiência",
      "Segmentação de conteúdo por perfil (casal, single, masculino, feminino)",
      "Integração com IA para resposta automática no WhatsApp",
    ],
    image: "🏛️",
    color: "#dc2626",
  },
  {
    id: "promoter",
    label: "Promoter",
    icon: "🎤",
    headline: "Transforme seu network em renda recorrente.",
    points: [
      "Lista própria com link de divulgação rastreável",
      "Comissão automática por cada check-in convertido",
      "Painel de performance: conversões, visualizações e ganhos",
      "Gestão de sub-promoters com hierarquia de comissões",
      "Histórico completo de pagamentos e saques",
    ],
    image: "🎙️",
    color: "#7c3aed",
  },
  {
    id: "cliente",
    label: "Cliente VIP",
    icon: "💎",
    headline: "Experiências exclusivas ao seu alcance.",
    points: [
      "Acesso antecipado a eventos com lista VIP garantida",
      "Check-in digital sem fila — QR Code no celular",
      "Perfil com preferências salvas para recomendações personalizadas",
      "Histórico de visitas e programa de fidelidade",
      "Acesso a conteúdos e promoções exclusivas por assinatura",
    ],
    image: "👑",
    color: "#eab308",
  },
];

export function NewProfileSection() {
  const { ref, inView } = useInView();
  const [active, setActive] = useState(0);

  return (
    <section ref={ref} className="relative py-28 px-6 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-12"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(24px)",
            transition: "all 0.7s ease",
          }}
        >
          <span className="inline-block text-red-500 text-sm font-semibold tracking-widest uppercase mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Perfis da plataforma
          </span>
          <h2
            className="text-white"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Feito para cada parte do ecossistema
          </h2>
        </div>

        {/* Tab switcher */}
        <div
          className="flex justify-center gap-2 mb-12 flex-wrap"
          style={{
            opacity: inView ? 1 : 0,
            transition: "all 0.7s ease 0.2s",
          }}
        >
          {tabs.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === i
                  ? "text-white shadow-lg"
                  : "text-white/40 bg-white/5 hover:text-white/70 hover:bg-white/8"
              }`}
              style={{
                background: active === i ? t.color : undefined,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <span>{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div
          className="grid md:grid-cols-2 gap-10 items-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(24px)",
            transition: "all 0.7s ease 0.35s",
          }}
        >
          {/* Left: content */}
          <div>
            <div
              className="text-7xl mb-6 select-none"
              style={{ transition: "all 0.3s ease" }}
            >
              {tabs[active].image}
            </div>
            <h3
              className="text-white mb-6"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                fontWeight: 700,
              }}
            >
              {tabs[active].headline}
            </h3>
            <ul className="space-y-3">
              {tabs[active].points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-white/60 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <div
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: tabs[active].color + "33" }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: tabs[active].color }} />
                  </div>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: mock dashboard card */}
          <div
            className="relative rounded-2xl border border-white/10 bg-white/3 p-6 overflow-hidden"
            style={{ minHeight: 320 }}
          >
            <div className="absolute inset-0 opacity-5 pointer-events-none"
              style={{ background: `radial-gradient(circle at 70% 30%, ${tabs[active].color}, transparent 70%)` }} />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-white/30 text-xs uppercase tracking-widest" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Dashboard · {tabs[active].label}
                </span>
                <div
                  className="px-2 py-1 rounded-full text-xs font-semibold"
                  style={{ background: tabs[active].color + "22", color: tabs[active].color, fontFamily: "'DM Sans', sans-serif" }}
                >
                  Ativo
                </div>
              </div>

              {/* Mock metric cards */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: "Esta semana", value: "R$ 14.800" },
                  { label: "Check-ins", value: "247" },
                  { label: "Lista VIP", value: "89 pessoas" },
                  { label: "Conversão", value: "78%" },
                ].map((m, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/8">
                    <p className="text-white/35 text-xs mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{m.label}</p>
                    <p className="text-white font-semibold text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>{m.value}</p>
                  </div>
                ))}
              </div>

              {/* Mock chart bars */}
              <div className="flex items-end gap-1.5 h-16">
                {[40, 65, 45, 80, 70, 90, 55].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm transition-all duration-500"
                    style={{ height: `${h}%`, background: `${tabs[active].color}${i === 5 ? 'ff' : '44'}` }} />
                ))}
              </div>
              <div className="flex justify-between mt-1">
                {["S","T","Q","Q","S","S","D"].map((d, i) => (
                  <span key={i} className="flex-1 text-center text-white/20 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>{d}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
