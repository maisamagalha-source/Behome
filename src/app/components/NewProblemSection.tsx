import { useEffect, useRef, useState } from "react";

const problems = [
  {
    icon: "💸",
    title: "Dinheiro escapando",
    desc: "Promoções que não convertem, couvert mal cobrado, sem visibilidade de receita. Caixa sempre no vermelho.",
  },
  {
    icon: "⚙️",
    title: "Ferramentas que não conversam",
    desc: "Instagram aqui, planilha ali, contato manual acolá. Equipe perdida e sem dados para tomar decisão.",
  },
  {
    icon: "🚫",
    title: "Banido das plataformas comuns",
    desc: "Eventbrite, Sympla e redes sociais te bloqueiam. Você cria a conta, eles derrubam. Frustrante e limitante.",
  },
  {
    icon: "🎤",
    title: "Promoters sem controle",
    desc: "Sem rastreamento de quem trouxe quem, sem comissão automática, sem visibilidade de performance.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function NewProblemSection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="relative py-24 px-6 bg-black overflow-hidden">
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-red-600 to-transparent opacity-60" />

      <div className="max-w-6xl mx-auto">
        <div
          className="mb-14"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)", transition: "all 0.7s ease" }}
        >
          <span className="inline-block text-red-500 text-sm font-semibold tracking-widest uppercase mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            O problema real
          </span>
          <h2 className="text-white max-w-2xl" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Você está deixando{" "}
            <span className="text-red-500">dinheiro na mesa</span> toda semana.
          </h2>
          <p className="text-white/50 mt-4 max-w-xl" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", lineHeight: 1.7 }}>
            O setor noturno e de entretenimento adulto tem demanda gigante — mas as ferramentas disponíveis foram feitas para outros segmentos. Resultado? Operação travada e receita represada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((p, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/6 hover:border-red-500/20 transition-all duration-300"
              style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(32px)", transition: `all 0.6s ease ${i * 100 + 200}ms` }}
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-white mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem", fontWeight: 600 }}>
                {p.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {p.desc}
              </p>
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
