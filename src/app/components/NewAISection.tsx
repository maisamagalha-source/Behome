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

const chat = [
  { from: "user", text: "Oi! Ainda tem lugar pra sexta?" },
  { from: "bot", text: "Olá! 🎉 Sim! Ainda temos 12 vagas na lista VIP para a noite de sexta no Clube Noir. Quer garantir a sua?" },
  { from: "user", text: "Quero sim! É pra mim e mais 1 pessoa" },
  { from: "bot", text: "Perfeito! Vou reservar 2 vagas no seu nome. 💎\n\nPode confirmar:\n• Nome: ?\n• WhatsApp de contato: ?" },
  { from: "user", text: "João Silva, 11999887766" },
  { from: "bot", text: "✅ Reserva confirmada, João!\n\nDetalhes:\n🗓️ Sexta, 20/06 a partir das 21h\n📍 Clube Noir — R. Augusta, 1234\n🎫 2 vagas VIP garantidas\n\nVocê receberá o QR Code 2h antes. Até sexta! 🔥" },
];

const capabilities = [
  { icon: "💬", title: "Respostas instantâneas", desc: "Responde perguntas sobre eventos, horários, preços e localização 24/7." },
  { icon: "📋", title: "Reservas automáticas", desc: "Coleta nome, WhatsApp e confirma reservas na lista VIP sem intervenção humana." },
  { icon: "🔔", title: "Lembretes inteligentes", desc: "Envia lembrete 24h e 2h antes do evento com QR Code de check-in." },
  { icon: "🎯", title: "Segmentação de perfil", desc: "Identifica o perfil do cliente (casal, single, etc.) e personaliza a comunicação." },
];

export function NewAISection() {
  const { ref, inView } = useInView();
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    if (!inView) return;
    chat.forEach((_, i) => {
      setTimeout(() => setVisible((v) => [...v, i]), i * 600 + 400);
    });
  }, [inView]);

  return (
    <section id="ia-whatsapp" ref={ref} className="relative py-28 px-6 bg-black overflow-hidden">
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-8"
        style={{ background: "radial-gradient(circle, #25d366, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(24px)",
            transition: "all 0.7s ease",
          }}
        >
          <span className="inline-block text-red-500 text-sm font-semibold tracking-widest uppercase mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            IA no WhatsApp
          </span>
          <h2
            className="text-white max-w-2xl mx-auto"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Seu assistente de atendimento nunca dorme
          </h2>
          <p className="text-white/45 mt-4 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
            IA treinada para o mercado adulto. Faz reservas, tira dúvidas, envia QR Codes e mantém seus clientes engajados — sem você precisar estar online.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* WhatsApp mockup */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateX(-24px)",
              transition: "all 0.7s ease 0.2s",
            }}
          >
            <div className="max-w-sm mx-auto">
              {/* Phone frame */}
              <div className="rounded-3xl border border-white/15 bg-[#0b1014] overflow-hidden shadow-2xl" style={{ boxShadow: "0 0 60px rgba(37,211,102,0.1)" }}>
                {/* WhatsApp header */}
                <div className="bg-[#1f2c34] px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-red-600/20 border border-red-600/40 flex items-center justify-center text-base">🎭</div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>Balada Erótica IA</p>
                    <p className="text-green-400 text-xs">Online agora</p>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  </div>
                </div>

                {/* Chat */}
                <div className="bg-[#0b1014] p-4 space-y-3 min-h-[400px]">
                  {chat.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex transition-all duration-500 ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                      style={{
                        opacity: visible.includes(i) ? 1 : 0,
                        transform: visible.includes(i) ? "none" : "translateY(8px)",
                        transition: "all 0.4s ease",
                      }}
                    >
                      <div
                        className={`max-w-[80%] px-3 py-2 rounded-2xl text-xs leading-relaxed whitespace-pre-line ${
                          msg.from === "user"
                            ? "bg-[#005c4b] text-white rounded-tr-sm"
                            : "bg-[#1f2c34] text-white/85 rounded-tl-sm"
                        }`}
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {visible.length > 0 && visible.length < chat.length && (
                    <div className="flex justify-start">
                      <div className="bg-[#1f2c34] px-3 py-2 rounded-2xl rounded-tl-sm flex gap-1 items-center">
                        {[0, 1, 2].map((d) => (
                          <div
                            key={d}
                            className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce"
                            style={{ animationDelay: `${d * 150}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div
            className="space-y-5"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateX(24px)",
              transition: "all 0.7s ease 0.35s",
            }}
          >
            {capabilities.map((c, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl border border-white/8 bg-white/3 hover:bg-white/5 transition-colors duration-200">
                <div className="text-2xl flex-shrink-0">{c.icon}</div>
                <div>
                  <h4 className="text-white font-semibold mb-1" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem" }}>
                    {c.title}
                  </h4>
                  <p className="text-white/45 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}

            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25d366] hover:bg-[#20c55c] text-black font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 w-fit mt-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Ver demo da IA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
