import { useState } from "react";
import { Sparkles, Calendar, MapPin, ChevronRight, Tag } from "lucide-react";

const events = [
  {
    id: 1,
    title: "TERÇANEJA – VIP PARA CASAIS E MULHERES ATÉ 23:30",
    date: "TER., 16 DE JUN. · 22:00",
    location: "Alameda dos Aicãs, 1287 – Indianópolis, São Paulo – SP",
    price: "Grátis · até R$ 450,00",
    tag: "Hoje",
    photo: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=80&h=80&fit=crop&q=80",
  },
  {
    id: 2,
    title: "ENIGMA NIGHT – NOITE DAS AUDACIOSAS",
    date: "SEX., 20 DE JUN. · 23:00",
    location: "Rua Haddock Lobo, 1307 – Cerqueira César, São Paulo – SP",
    price: "R$ 80,00 · até R$ 300,00",
    tag: "Em breve",
    photo: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=80&h=80&fit=crop&q=80",
  },
  {
    id: 3,
    title: "FESTA BLACK – UMA NOITE DE CASA CHEIA",
    date: "SÁB., 21 DE JUN. · 21:00",
    location: "Avenida Europa, 432 – Jardim Europa, São Paulo – SP",
    price: "R$ 120,00 · até R$ 500,00",
    tag: "Em breve",
    photo: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=80&h=80&fit=crop&q=80",
  },
];

export function ConsumerEvents() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="eventos" className="relative py-16 px-5 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-5xl xl:max-w-6xl mx-auto">
        <div className="rounded-2xl border border-white/8 bg-white/[0.025] backdrop-blur-sm overflow-hidden">
          {/* Header */}
          <div className="px-6 pt-6 pb-4 border-b border-white/5">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <p className="flex items-center gap-1.5 text-red-500 text-xs font-bold uppercase tracking-widest mb-1.5">
                  <Sparkles size={11} />
                  Eventos
                </p>
                <h2
                  className="text-white"
                  style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(1.3rem, 3vw, 1.7rem)" }}
                >
                  Acontecendo hoje
                </h2>
                <p className="text-white/40 text-sm mt-0.5">Os próximos eventos de hoje no Balada Erótica.</p>
              </div>
              <a
                href="#todos-eventos"
                className="flex items-center gap-1 text-red-500 hover:text-red-400 text-sm font-semibold transition-colors shrink-0"
              >
                Ver todos os eventos <ChevronRight size={14} />
              </a>
            </div>
          </div>

          {/* Event list */}
          <div className="divide-y divide-white/5">
            {events.map((event) => {
              const isToday = event.tag === "Hoje";
              return (
                <div
                  key={event.id}
                  className="flex items-center gap-4 px-6 py-4 hover:bg-white/[0.03] transition-all duration-200 cursor-pointer group"
                  onMouseEnter={() => setHovered(event.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Event photo thumbnail */}
                  <div className="w-12 h-12 rounded-xl shrink-0 overflow-hidden border border-white/10">
                    <img
                      src={event.photo}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <span className="flex items-center gap-1 text-red-500 text-xs font-semibold">
                        <Calendar size={10} /> {event.date}
                      </span>
                      {/* Tag: green if today, muted otherwise */}
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-semibold"
                        style={
                          isToday
                            ? { background: "rgba(34,197,94,0.18)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.3)" }
                            : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.35)", border: "1px solid rgba(255,255,255,0.1)" }
                        }
                      >
                        {event.tag}
                      </span>
                    </div>
                    <h3
                      className="text-white mb-0.5 truncate group-hover:text-red-100 transition-colors"
                      style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "0.875rem" }}
                    >
                      {event.title}
                    </h3>
                    <div className="flex items-start gap-1 text-white/40 text-xs mb-0.5">
                      <MapPin size={10} className="mt-0.5 shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <p className="text-red-500/80 text-xs font-medium">
                      <Tag size={10} className="inline mr-1" />
                      {event.price}
                    </p>
                  </div>

                  {/* Lista VIP button + arrow */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      className="hidden sm:flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-200 hover:scale-105 active:scale-95"
                      style={{
                        background: "rgba(220,38,38,0.15)",
                        borderColor: "rgba(220,38,38,0.4)",
                        color: "#f87171",
                        boxShadow: "0 0 12px rgba(220,38,38,0.15)",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = "rgba(220,38,38,0.28)")}
                      onMouseLeave={e => (e.currentTarget.style.background = "rgba(220,38,38,0.15)")}
                    >
                      💎 Lista VIP
                    </button>
                    <ChevronRight
                      size={16}
                      className="text-white/20 group-hover:text-white/50 shrink-0 transition-all duration-200 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
