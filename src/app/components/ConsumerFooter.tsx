import { Users, Wifi, Send, MessageCircle, Mail, Instagram, Facebook, UserPlus } from "lucide-react";
import logoImg from "../../imports/Balada_Logo__1_.png";

const footerLinks = {
  "Cadastre-se": [
    { label: "Senha membro", icon: Users },
    { label: "Estabelecimento Comercial", icon: null },
    { label: "Por que o Balada Erótica? (estabelecimentos)", icon: null },
    { label: "Profissional Liberal", icon: null },
    { label: "Sugerir um Local", icon: null },
    { label: "Busca rápida", icon: null },
    { label: "Busca guiada", icon: null },
    { label: "Buscar por perto", icon: null },
  ],
  "Fale conosco": [
    { label: "Telegram", icon: Send },
    { label: "WhatsApp", icon: MessageCircle },
    { label: "contato@baladaerotica.com.br", icon: Mail },
  ],
  "Redes Sociais": [
    { label: "Instagram", icon: Instagram },
    { label: "Facebook", icon: Facebook },
  ],
};

export function ConsumerFooter() {
  return (
    <footer className="relative bg-[#0d0d0d] border-t border-white/5">
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #dc2626 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logoImg} alt="Balada Erótica" className="w-9 h-9 rounded-xl object-cover" />
              <div>
                <p
                  className="text-white font-bold"
                  style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem" }}
                >
                  Balada<span className="text-red-500">Erótica</span>
                </p>
              </div>
            </div>

            <p className="text-white/40 text-sm leading-relaxed mb-6">
              A 1ª plataforma de busca por experiências de entretenimento adulto.
              Não é anúncio, é descoberta! Não tem tudo, só o que vale a pena.
            </p>

            {/* Stats mini */}
            <div
              className="rounded-xl border border-white/8 bg-white/[0.03] p-4 space-y-2"
            >
              <div className="flex items-center gap-2 text-sm text-white/50">
                <Users size={13} className="text-red-400" />
                Membros ativos{" "}
                <strong className="text-white ml-auto">1.802.485</strong>
              </div>
              <div className="w-full h-px bg-white/5" />
              <div className="flex items-center gap-2 text-sm text-white/50">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                Online agora{" "}
                <strong className="text-emerald-400 ml-auto">530</strong>
              </div>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="text-white mb-4"
                style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "0.9rem" }}
              >
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.label}>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-white/45 hover:text-white/80 text-sm transition-colors duration-200"
                      >
                        {Icon && <Icon size={13} className="shrink-0 text-white/30" />}
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs text-center sm:text-left">
            © 2026 Balada Erótica. Todos os direitos reservados. v0.33.10 · api v0.30.1
          </p>
          <a
            href="#cadastro"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shrink-0"
            style={{ boxShadow: "0 0 24px rgba(220,38,38,0.3)" }}
          >
            <UserPlus size={15} />
            Cadastre-se Grátis
          </a>
        </div>
      </div>
    </footer>
  );
}
