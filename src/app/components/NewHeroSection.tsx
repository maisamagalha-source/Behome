import { useEffect, useRef, useState } from "react";
import { useBusiness } from "./BusinessContext";

const WA =
  "https://wa.me/5511945599070?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20apresenta%C3%A7%C3%A3o%20do%20Balada%20Er%C3%B3tica.";

const stats = [
  { value: "2.400+", label: "Empresas parceiras" },
  { value: "1,8M+", label: "Usuários ativos" },
  { value: "4,9/5", label: "Avaliação por usuário" },
  { value: "98%", label: "Taxa de satisfação" },
];

const cardsByType = {
  sexshop: [
    { icon: "🛍️", title: "Loja divulgada", sub: "Para 1,8M de usuários", color: "#db2777" },
    { icon: "💬", title: "Links conectados", sub: "WhatsApp · Insta · Telegram", color: "#7c3aed" },
    { icon: "🎁", title: "Cupom ativo", sub: "34 resgates hoje", color: "#f97316" },
    { icon: "💎", title: "Plano VIP", sub: "12 novos assinantes", color: "#0ea5e9" },
  ],
  noturna: [
    { icon: "💎", title: "Lista VIP ativa", sub: "R$80 · 18 pré-reservas", color: "#dc2626" },
    { icon: "💳", title: "Pré-reservas", sub: "R$ 1.440 antecipados", color: "#7c3aed" },
    { icon: "🎁", title: "Cupom resgatado", sub: "34 resgates hoje", color: "#f97316" },
    { icon: "🔥", title: "Evento ao vivo", sub: "247 confirmados", color: "#0ea5e9" },
  ],
};

export function NewHeroSection() {
  const { type } = useBusiness();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(false);
  const floatingCards = cardsByType[type];
  const accentColor = type === "sexshop" ? "#db2777" : "#dc2626";
  const accentHex = type === "sexshop" ? "219,39,119" : "220,38,38";

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const particles: { x: number; y: number; vx: number; vy: number; r: number; opacity: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.3, vy: -Math.random() * 0.4 - 0.1, r: Math.random() * 1.5 + 0.3, opacity: Math.random() * 0.5 + 0.1 });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.y < -5) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width; }
        if (p.x < -5) p.x = canvas.width + 5;
        if (p.x > canvas.width + 5) p.x = -5;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accentHex}, ${p.opacity})`; ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, [accentHex]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-20" style={{ background: `radial-gradient(ellipse, ${accentColor} 0%, transparent 70%)` }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full opacity-10" style={{ background: "radial-gradient(ellipse, #7c3aed 0%, transparent 70%)" }} />
      </div>

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      {floatingCards.map((card, i) => {
        const positions = ["top-[22%] left-[5%]", "top-[55%] left-[3%]", "top-[22%] right-[5%]", "top-[55%] right-[4%]"];
        return (
          <div key={i} className={`hidden xl:flex absolute ${positions[i]} items-center gap-3 px-4 py-3 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5`}
            style={{ transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)", opacity: visible ? 1 : 0, transition: `all 0.7s ease ${i * 150 + 500}ms` }}>
            <span className="text-2xl">{card.icon}</span>
            <div>
              <p className="text-white text-sm font-semibold" style={{ fontFamily: "'Outfit', sans-serif" }}>{card.title}</p>
              <p className="text-white/50 text-xs">{card.sub}</p>
            </div>
            <div className="w-2 h-2 rounded-full ml-1 animate-pulse" style={{ background: card.color }} />
          </div>
        );
      })}

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-opacity-30 bg-opacity-10 text-sm font-medium mb-8"
          style={{ borderColor: accentColor + "50", background: accentColor + "18", color: accentColor, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)", transition: "all 0.6s ease 0.1s" }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accentColor }} />
          {type === "sexshop" ? "Plataforma #1 para sex shops no Brasil" : "Plataforma #1 no Brasil"}
        </div>

        <h1 className="text-white mb-6"
          style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.8rem, 7vw, 6rem)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.03em", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s ease 0.25s" }}>
          O ecossistema completo
          <br />
          para{" "}
          <span style={{ background: type === "sexshop" ? "linear-gradient(135deg, #db2777 0%, #f97316 100%)" : "linear-gradient(135deg, #dc2626 0%, #f97316 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {type === "sexshop" ? "sex shops" : "empresas"}
          </span>{" "}
          que
          <br />
          faturam de verdade.
        </h1>

        <p className="text-white/55 max-w-2xl mx-auto mb-10"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.7, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s ease 0.4s" }}>
          {type === "sexshop"
            ? "Divulgação para 1,8M de usuários, seus links reunidos, cupons e planos VIP — tudo em uma plataforma feita para sex shops."
            : "Cupons, listas VIP com preços diferenciados, pré-reserva antecipada e gestão de eventos — para motéis e casas noturnas."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s ease 0.55s" }}>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="group flex items-center gap-3 text-white font-semibold px-7 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: accentColor, boxShadow: `0 0 40px ${accentColor}55`, fontFamily: "'DM Sans', sans-serif", fontSize: "1rem" }}>
            Solicitar Apresentação
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#solucao" className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors px-5 py-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Ver como funciona
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease 0.7s" }}>
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-white mb-1" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, lineHeight: 1 }}>
                {s.value}
              </div>
              <div className="text-white/40 text-xs font-medium tracking-wide uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
