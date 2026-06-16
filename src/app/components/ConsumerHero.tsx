import { useEffect, useRef, useState } from "react";
import { Zap, MessageCircleQuestion, Navigation, Users } from "lucide-react";
import logoCompleta from "../../imports/Logo_completa_Balada_Er_tica-1.png";

const searchCards = [
  {
    icon: Zap,
    title: "Busca Rápida",
    desc: "Monte seus próprios filtros e salve como uma nova vibe.",
    action: "Selecionar filtros",
    color: "#dc2626",
  },
  {
    icon: MessageCircleQuestion,
    title: "Busca Guiada",
    desc: "Responda perguntas e descubra o lugar perfeito.",
    action: "Começar perguntas",
    color: "#9333ea",
  },
  {
    icon: Navigation,
    title: "Buscar por perto",
    desc: "Use o GPS para encontrar locais próximos a você.",
    action: "Ver no mapa",
    color: "#dc2626",
  },
];

export function ConsumerHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: -Math.random() * 0.35 - 0.05,
      r: Math.random() * 1.4 + 0.3,
      opacity: Math.random() * 0.45 + 0.08,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -5) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width; }
        if (p.x < -5) p.x = canvas.width + 5;
        if (p.x > canvas.width + 5) p.x = -5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220,38,38,${p.opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] pt-20">
      {/* Animated color orbs behind logo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[700px] h-[500px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(ellipse, #dc2626 0%, #9333ea 40%, transparent 70%)",
            animation: "heroOrb1 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[500px] h-[350px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(ellipse, #7c3aed 0%, #dc2626 50%, transparent 70%)",
            animation: "heroOrb2 10s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%] w-[300px] h-[200px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(ellipse, #f43f5e 0%, transparent 70%)",
            animation: "heroOrb3 6s ease-in-out infinite",
          }}
        />
        {/* Bottom ambient */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] opacity-10"
          style={{ background: "radial-gradient(ellipse, #7c3aed 0%, transparent 70%)" }}
        />
      </div>

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />


      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-5 w-full max-w-5xl xl:max-w-6xl mx-auto">
        {/* Logo */}
        <div
          className="flex flex-col items-center mb-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.96)",
            transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s",
          }}
        >
          <img
            src={logoCompleta}
            alt="Balada Erótica"
            className="object-contain select-none"
            style={{
              width: "clamp(260px, 45vw, 600px)",
              filter: "drop-shadow(0 0 40px rgba(220,38,38,0.55))",
            }}
          />
        </div>

        {/* Tagline */}
        <p
          className="text-white text-center mb-8"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1.05rem, 2.5vw, 1.35rem)",
            fontWeight: 600,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.7s ease 0.35s",
          }}
        >
          Encontre o que você quer pela experiência
        </p>

        {/* Stats bar */}
        <div
          className="flex items-center gap-5 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-10 text-sm"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.7s ease 0.5s",
          }}
        >
          <span className="flex items-center gap-2 text-white/60">
            <Users size={14} />
            Membros ativos <strong className="text-white ml-1">1.802.485</strong>
          </span>
          <span className="w-px h-4 bg-white/15" />
          <span className="flex items-center gap-1.5 text-white/60">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Online agora <strong className="text-emerald-400 ml-1">530</strong>
          </span>
        </div>

        {/* Search cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 w-full"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 0.65s",
          }}
        >
          {searchCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="group relative flex flex-col gap-3 p-5 lg:p-6 rounded-2xl border border-white/8 bg-white/[0.04] backdrop-blur-sm hover:bg-white/[0.07] hover:border-white/15 transition-all duration-300 cursor-pointer"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: card.color + "25", border: `1px solid ${card.color}35` }}
                >
                  <Icon size={18} style={{ color: card.color }} />
                </div>
                <div>
                  <h3
                    className="text-white mb-1"
                    style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1rem" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-white/45 text-xs leading-relaxed">{card.desc}</p>
                </div>
                <button
                  className="flex items-center gap-1 text-xs font-semibold mt-auto transition-all duration-200 group-hover:gap-2"
                  style={{ color: card.color }}
                >
                  {card.action}
                  <span className="opacity-70">›</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Hint */}
        <p
          className="text-white/35 text-xs mt-5 text-center"
          style={{
            opacity: visible ? 1 : 0,
            transition: "all 0.7s ease 0.9s",
          }}
        >
          💡 Não sabe o que quer?{" "}
          <span className="text-white/55 hover:text-white/80 cursor-pointer transition-colors underline underline-offset-2">
            Experimente a Busca Guiada!
          </span>
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30">
        <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent mx-auto" />
      </div>

      <style>{`
        @keyframes heroOrb1 {
          0%, 100% { transform: translate(-50%, -60%) scale(1) rotate(0deg); opacity: 0.25; }
          33% { transform: translate(-50%, -62%) scale(1.15) rotate(15deg); opacity: 0.32; }
          66% { transform: translate(-50%, -58%) scale(0.9) rotate(-10deg); opacity: 0.18; }
        }
        @keyframes heroOrb2 {
          0%, 100% { transform: translate(-50%, -55%) scale(1) rotate(0deg); opacity: 0.20; }
          50% { transform: translate(-50%, -60%) scale(1.2) rotate(25deg); opacity: 0.28; }
        }
        @keyframes heroOrb3 {
          0%, 100% { transform: translate(-50%, -65%) scale(1); opacity: 0.30; }
          50% { transform: translate(-50%, -68%) scale(1.3); opacity: 0.15; }
        }
      `}</style>
    </section>
  );
}
