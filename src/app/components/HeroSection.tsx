import { motion } from 'motion/react';
import { Smartphone, Calendar, Crown, Ticket, Sparkles, ShieldCheck } from 'lucide-react';
import logo from '../../imports/Balada_Inteiro_.png';

export function HeroSection() {
  const floatingCards = [
    { icon: Calendar, label: 'Eventos' },
    { icon: Crown, label: 'Assinaturas VIP' },
    { icon: Ticket, label: 'Lista de presença' },
    { icon: Sparkles, label: 'Cupons com QR Code' },
    { icon: Smartphone, label: 'IA no WhatsApp' },
    { icon: ShieldCheck, label: 'Check-in discreto' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-red-950/10 to-black">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mb-8 relative"
            >
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-red-600/20 blur-3xl" />
              <img
                src={logo}
                alt="Balada Erótica Logo"
                className="relative w-56 sm:w-80 lg:w-96 h-auto drop-shadow-[0_0_25px_rgba(220,38,38,0.5)]"
              />
            </motion.div>

            <motion.p
              className="text-xl sm:text-2xl mb-4 text-neutral-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              A plataforma que transforma estabelecimentos do mercado liberal em comunidades digitais próprias.
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl mb-6 text-red-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Mais controle. Mais clientes. Mais recorrência. Menos dependência das redes sociais.
            </motion.p>

            <motion.p
              className="text-base text-neutral-400 mb-8 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Hoje, casas e estabelecimentos do mercado liberal dependem do Instagram, WhatsApp e Facebook para divulgar eventos, manter contato com clientes e gerar movimento. Mas essas plataformas censuram conteúdos, derrubam páginas, bloqueiam anúncios e fazem marcas perderem anos de audiência em poucos minutos.
            </motion.p>

            <motion.div
              className="flex justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a
                href="https://wa.me/5511945599070?text=Ol%C3%A1%21%20Gostaria%20de%20apresentar%20minha%20casa%20no%20Balada%20Er%C3%B3tica%20e%20conhecer%20melhor%20a%20plataforma."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:scale-105 inline-block"
              >
                Quero apresentar minha casa no Balada Erótica
              </a>
            </motion.div>
          </motion.div>

          {/* Right content - Phone mockup with floating cards */}
          <motion.div
            className="relative h-[600px] hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Phone mockup */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[560px] bg-gradient-to-b from-neutral-900 to-black rounded-[3rem] border-4 border-neutral-800 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl" />
              <div className="p-6 pt-10">
                <div className="w-full h-32 bg-gradient-to-br from-red-900/30 to-red-600/20 rounded-2xl border border-red-800/30 mb-4 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-red-400" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-neutral-800 rounded w-3/4" />
                  <div className="h-4 bg-neutral-800 rounded w-1/2" />
                  <div className="h-20 bg-neutral-800/50 rounded-xl mt-4" />
                  <div className="h-20 bg-neutral-800/50 rounded-xl" />
                </div>
              </div>
            </div>

            {/* Floating cards */}
            {floatingCards.map((card, index) => {
              const Icon = card.icon;
              const positions = [
                { x: -120, y: -80 },
                { x: 120, y: -120 },
                { x: -140, y: 60 },
                { x: 140, y: 20 },
                { x: -100, y: 200 },
                { x: 120, y: 180 },
              ];

              return (
                <motion.div
                  key={index}
                  className="absolute left-1/2 top-1/2 bg-neutral-900/80 backdrop-blur-sm border border-red-600/30 rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg"
                  style={{
                    x: positions[index].x,
                    y: positions[index].y,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [positions[index].y, positions[index].y - 10, positions[index].y],
                  }}
                  transition={{
                    opacity: { delay: 1 + index * 0.1, duration: 0.5 },
                    scale: { delay: 1 + index * 0.1, duration: 0.5 },
                    y: {
                      delay: 1.5 + index * 0.1,
                      duration: 2 + index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{ scale: 1.05, borderColor: 'rgb(220, 38, 38)' }}
                >
                  <Icon className="w-5 h-5 text-red-400" />
                  <span className="text-sm whitespace-nowrap">{card.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
