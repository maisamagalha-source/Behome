import { useBusiness } from "./BusinessContext";

export function BusinessSwitcher() {
  const { type, setType } = useBusiness();

  return (
    <div className="relative z-40 flex justify-center py-6 px-6">
      <div className="flex flex-col items-center gap-4">
        {/* Copa Brasil badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10">
          <span className="text-base">🇧🇷</span>
          <span className="text-yellow-400 text-xs font-semibold tracking-wider uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Oferta Copa Brasil — Junho 2026
          </span>
          <span className="text-base">⚽</span>
        </div>

        <p className="text-white/50 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Selecione o tipo do seu negócio para ver a apresentação correta:
        </p>

        <div className="flex gap-2 p-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <button
            onClick={() => setType("sexshop")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
              type === "sexshop"
                ? "bg-pink-600 text-white shadow-[0_0_20px_rgba(219,39,119,0.4)]"
                : "text-white/50 hover:text-white/80"
            }`}
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span className="text-lg">🛍️</span>
            Sex Shop
          </button>
          <button
            onClick={() => setType("noturna")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
              type === "noturna"
                ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                : "text-white/50 hover:text-white/80"
            }`}
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span className="text-lg">🌙</span>
            Empresas Noturnas
          </button>
        </div>
      </div>
    </div>
  );
}
