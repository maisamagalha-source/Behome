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

const featuresBySexshop = [
  {
    icon: "📣",
    color: "#db2777",
    title: "Divulgação para Toda a Base",
    desc: "Sua loja aparece automaticamente para todos os clientes ativos da plataforma, sem precisar construir audiência do zero.",
    highlight: "Alcance imediato",
  },
  {
    icon: "💬",
    color: "#7c3aed",
    title: "Seus Links em Um Lugar",
    desc: "WhatsApp, Instagram, Telegram, loja virtual e outros links reunidos no seu perfil. O cliente escolhe o canal.",
    highlight: "WhatsApp · Instagram · Telegram",
  },
  {
    icon: "🎁",
    color: "#dc2626",
    title: "Cupons & Promoções",
    desc: "Crie cupons rastreáveis e promoções segmentadas para atrair e converter clientes da plataforma.",
    highlight: "Maior conversão",
  },
];

const featuresByNoturna = [
  {
    icon: "💎",
    color: "#dc2626",
    title: "Lista VIP com Preços Diferenciados",
    desc: "Crie listas com o preço embutido no nome (ex: 'Lista Open Bar R$80'). Cada lista tem seu próprio valor e condição.",
    highlight: "Preço no nome da lista",
  },
  {
    icon: "💳",
    color: "#7c3aed",
    title: "Pré-reserva com Cobrança Antecipada",
    desc: "Cobra antecipado para garantir a vaga. Elimina o no-show e garante receita antes do evento começar.",
    highlight: "Zero no-show",
  },
  {
    icon: "🎁",
    color: "#f97316",
    title: "Cupons & Promoções",
    desc: "Crie cupons rastreáveis para happy hour, drink gratuito, entrada antecipada e outras promoções.",
    highlight: "Maior conversão",
  },
  {
    icon: "📅",
    color: "#0ea5e9",
    title: "Gestão de Eventos",
    desc: "Crie e publique eventos em minutos com link de divulgação, controle de vagas e notificações automáticas.",
    highlight: "Tudo em um lugar",
  },
  {
    icon: "💎",
    color: "#eab308",
    title: "Planos VIP para Clientes",
    desc: "Assinaturas com benefícios exclusivos: acesso antecipado, preços especiais e experiências únicas.",
    highlight: "Fidelização real",
  },
  {
    icon: "🔒",
    color: "#10b981",
    title: "Ambiente Sem Censura",
    desc: "Plataforma exclusiva para o setor adulto. Sem risco de banimento ou suspensão de conta.",
    highlight: "Suas regras, seu negócio",
  },
];

export function NewFeaturesStrip() {
  const { type } = useBusiness();
  const { ref, inView } = useInView();
  const features = type === "sexshop" ? featuresBySexshop : featuresByNoturna;
  const accentColor = type === "sexshop" ? "#db2777" : "#dc2626";

  return (
    <section id="funcionalidades" ref={ref} className="relative py-24 px-6 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)", transition: "all 0.7s ease" }}
        >
          <div>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ fontFamily: "'DM Sans', sans-serif", color: accentColor }}>
              Funcionalidades
            </span>
            <h2 className="text-white max-w-lg" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              {type === "sexshop"
                ? "Seu sex shop com visibilidade imediata"
                : "Tudo que sua casa noturna precisa para crescer"}
            </h2>
          </div>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 border border-white/15 hover:border-red-500/40 text-white/70 hover:text-white text-sm font-medium px-5 py-3 rounded-full transition-all duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Solicitar apresentação
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={`${type}-${i}`}
              className="group relative p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-white/5 hover:border-white/15 transition-all duration-300 overflow-hidden"
              style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(32px)", transition: `all 0.5s ease ${i * 70 + 150}ms` }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none -translate-y-1/2 translate-x-1/2" style={{ background: f.color }} />
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4" style={{ background: f.color + "20" }}>
                {f.icon}
              </div>
              <h3 className="text-white mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.05rem", fontWeight: 600 }}>
                {f.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {f.desc}
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full" style={{ background: f.color + "20", color: f.color, fontFamily: "'DM Sans', sans-serif" }}>
                <span className="w-1 h-1 rounded-full" style={{ background: f.color }} />
                {f.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
