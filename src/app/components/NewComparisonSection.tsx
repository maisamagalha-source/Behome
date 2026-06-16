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

const rowsSexshop = [
  { feature: "Feito para o setor adulto", be: true, outros: false, manual: false },
  { feature: "Sem risco de banimento", be: true, outros: false, manual: true },
  { feature: "Divulgação para toda a base de clientes", be: true, outros: false, manual: false },
  { feature: "Links: WhatsApp, Instagram, Telegram", be: true, outros: false, manual: true },
  { feature: "Link da loja virtual integrado", be: true, outros: false, manual: true },
  { feature: "Cupons & promoções rastreáveis", be: true, outros: true, manual: false },
  { feature: "Planos VIP para clientes", be: true, outros: false, manual: false },
  { feature: "Ambiente sem censura", be: true, outros: false, manual: false },
];

const rowsNoturna = [
  { feature: "Feito para o setor adulto", be: true, outros: false, manual: false },
  { feature: "Sem risco de banimento", be: true, outros: false, manual: true },
  { feature: "Lista VIP com preços diferenciados", be: true, outros: false, manual: false },
  { feature: "Pré-reserva com cobrança antecipada", be: true, outros: false, manual: false },
  { feature: "Cupons & promoções rastreáveis", be: true, outros: true, manual: false },
  { feature: "Gestão de eventos ilimitados", be: true, outros: true, manual: false },
  { feature: "Planos VIP para clientes", be: true, outros: false, manual: false },
  { feature: "Ambiente sem censura", be: true, outros: false, manual: false },
];

export function NewComparisonSection() {
  const { type } = useBusiness();
  const { ref, inView } = useInView();
  const rows = type === "sexshop" ? rowsSexshop : rowsNoturna;
  const accentColor = type === "sexshop" ? "#db2777" : "#dc2626";
  const otherLabel = type === "sexshop" ? "Redes Sociais" : "Eventbrite/Sympla";

  const cols = [
    { label: "Balada Erótica", key: "be", highlight: true },
    { label: otherLabel, key: "outros", highlight: false },
    { label: "Manual", key: "manual", highlight: false },
  ];

  return (
    <section id="comparativo" ref={ref} className="relative py-24 px-6 overflow-hidden" style={{ background: "#050505" }}>
      <div className="max-w-4xl mx-auto">
        <div
          className="text-center mb-14"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)", transition: "all 0.7s ease" }}
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ fontFamily: "'DM Sans', sans-serif", color: accentColor }}>
            Comparativo
          </span>
          <h2 className="text-white max-w-2xl mx-auto" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Nenhuma outra plataforma foi feita pra você
          </h2>
        </div>

        <div
          className="overflow-x-auto"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(32px)", transition: "all 0.7s ease 0.25s" }}
        >
          <table className="w-full min-w-[500px]">
            <thead>
              <tr>
                <th className="text-left py-4 pr-6 text-white/30 text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif", width: "50%" }}>
                  Funcionalidade
                </th>
                {cols.map((c) => (
                  <th key={c.key} className="text-center py-4 px-2">
                    <div
                      className={`px-3 py-1.5 rounded-xl text-sm font-semibold inline-block ${c.highlight ? "border" : "text-white/30"}`}
                      style={c.highlight ? { background: accentColor + "20", color: accentColor, borderColor: accentColor + "50", fontFamily: "'Outfit', sans-serif" } : { fontFamily: "'Outfit', sans-serif" }}
                    >
                      {c.label}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={`${type}-${ri}`} className={`border-t ${ri % 2 === 0 ? "bg-white/[0.015]" : ""} border-white/5`}>
                  <td className="py-3.5 pr-6 text-white/60 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {row.feature}
                  </td>
                  {cols.map((c) => {
                    const val = row[c.key as keyof typeof row] as boolean;
                    return (
                      <td key={c.key} className="text-center py-3.5 px-2">
                        {val ? (
                          <div className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${c.highlight ? "" : "bg-white/5"}`} style={c.highlight ? { background: accentColor + "25" } : {}}>
                            <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                              <path d="M2 6l3 3 5-5" stroke={c.highlight ? accentColor : "rgba(255,255,255,0.4)"} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-6 h-6">
                            <div className="w-1 h-1 rounded-full bg-white/15" />
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
