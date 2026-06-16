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

const days = [
  { day: "SEG", events: 0, color: "#374151" },
  { day: "TER", events: 1, color: "#374151" },
  { day: "QUA", events: 2, color: "#7c3aed" },
  { day: "QUI", events: 1, color: "#374151" },
  { day: "SEX", events: 4, color: "#dc2626" },
  { day: "SAB", events: 5, color: "#dc2626" },
  { day: "DOM", events: 2, color: "#374151" },
];

const timeline = [
  {
    time: "15:00",
    title: "Evento publicado",
    desc: "Evento criado com cupons e link de divulgação. Promoters notificados automaticamente.",
    icon: "📢",
    done: true,
  },
  {
    time: "16:30",
    title: "Promoções ativas",
    desc: "Cupons com QR Code disparados para a base. Conversões rastreadas em tempo real.",
    icon: "🎁",
    done: true,
  },
  {
    time: "21:00",
    title: "Noite começa",
    desc: "Evento em andamento. Promoters acompanham resultados pelo painel mobile.",
    icon: "🔥",
    done: true,
  },
  {
    time: "23:00",
    title: "Pico de movimento",
    desc: "Casa cheia. Cupons resgatados e comissões calculadas automaticamente.",
    icon: "💎",
    done: false,
  },
];

export function NewEventsSection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="relative py-24 px-6 overflow-hidden" style={{ background: "#050505" }}>
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-14"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)", transition: "all 0.7s ease" }}
        >
          <span className="inline-block text-red-500 text-sm font-semibold tracking-widest uppercase mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Gestão de eventos
          </span>
          <h2 className="text-white max-w-2xl mx-auto" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Da criação ao resultado — tudo automatizado
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calendar mock */}
          <div style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateX(-24px)", transition: "all 0.7s ease 0.2s" }}>
            <div className="rounded-2xl border border-white/10 bg-white/3 p-6 mb-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-semibold" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem" }}>Semana atual</h3>
                <span className="text-white/40 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>Junho 2026</span>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {days.map((d) => (
                  <div key={d.day} className="flex flex-col items-center gap-2">
                    <span className="text-white/30 text-xs font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>{d.day}</span>
                    <div
                      className="relative w-full aspect-square rounded-xl flex items-center justify-center"
                      style={{ background: d.events > 0 ? d.color + "22" : "rgba(255,255,255,0.03)" }}
                    >
                      {d.events > 0 && (
                        <>
                          <span className="text-white font-bold text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>{d.events}</span>
                          <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-black" style={{ background: d.color }} />
                        </>
                      )}
                    </div>
                    <span className="text-white/20 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>{d.events > 0 ? `${d.events}ev` : "—"}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Eventos esse mês", value: "15", icon: "🗓️" },
                { label: "Cupons resgatados", value: "812", icon: "🎁" },
                { label: "Receita gerada", value: "R$ 89K", icon: "💰" },
              ].map((s, i) => (
                <div key={i} className="p-4 rounded-xl border border-white/8 bg-white/3 text-center">
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <div className="text-white font-bold text-lg mb-0.5" style={{ fontFamily: "'Outfit', sans-serif" }}>{s.value}</div>
                  <div className="text-white/35 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="relative" style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateX(24px)", transition: "all 0.7s ease 0.35s" }}>
            <h3 className="text-white/50 text-xs uppercase tracking-widest mb-6 font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Noite de Sexta · Evento VIP
            </h3>
            <div className="relative">
              <div className="absolute left-[18px] top-3 bottom-3 w-px bg-gradient-to-b from-red-600/60 via-red-600/20 to-transparent" />
              <div className="space-y-6">
                {timeline.map((t, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-base z-10 border-2 transition-all duration-300 ${t.done ? "border-red-600 bg-red-600/20" : "border-white/15 bg-white/5"}`}>
                      {t.icon}
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-red-400/70 text-xs font-mono">{t.time}</span>
                        {t.done && <span className="text-green-400 text-xs">✓ Concluído</span>}
                      </div>
                      <h4 className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>{t.title}</h4>
                      <p className="text-white/40 text-xs leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
