import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Home, Calendar, Users, ListChecks, Crown, Lock, Tag, MapPin, Ticket, Bot, Heart, TrendingUp } from 'lucide-react';

export function CompleteEcosystemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const modules = [
    { id: 1, icon: Home, label: 'Perfil da casa', position: { x: 0, y: 0 }, connections: [2, 3] },
    { id: 2, icon: Calendar, label: 'Eventos', position: { x: -120, y: 80 }, connections: [4, 5] },
    { id: 3, icon: Users, label: 'Seguidores', position: { x: 120, y: 80 }, connections: [6] },
    { id: 4, icon: ListChecks, label: 'Lista de presença', position: { x: -180, y: 160 }, connections: [7] },
    { id: 5, icon: Crown, label: 'Assinaturas VIP', position: { x: -60, y: 160 }, connections: [10] },
    { id: 6, icon: Lock, label: 'Conteúdos exclusivos', position: { x: 60, y: 160 }, connections: [10] },
    { id: 7, icon: Tag, label: 'Cupons', position: { x: 180, y: 160 }, connections: [] },
    { id: 8, icon: MapPin, label: 'Check-in', position: { x: -120, y: 240 }, connections: [11] },
    { id: 9, icon: Ticket, label: 'Ingressos', position: { x: 0, y: 240 }, connections: [11] },
    { id: 10, icon: Bot, label: 'IA no WhatsApp', position: { x: 120, y: 240 }, connections: [] },
    { id: 11, icon: Heart, label: 'Relacionamento', position: { x: -60, y: 320 }, connections: [12] },
    { id: 12, icon: TrendingUp, label: 'Recorrência', position: { x: 60, y: 320 }, connections: [] },
  ];

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(220, 38, 38, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(220, 38, 38, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-6">
            Mais do que divulgação. Uma estrutura digital completa.
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            O Balada Erótica conecta divulgação, relacionamento, recorrência, monetização, automação e gestão de público em um único ambiente criado para as necessidades reais do mercado liberal.
          </p>
        </motion.div>

        {/* Desktop ecosystem map */}
        <div className="hidden lg:block mb-16">
          <div className="relative h-[500px] max-w-4xl mx-auto">
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
              {modules.map(module => {
                return module.connections.map(targetId => {
                  const target = modules.find(m => m.id === targetId);
                  if (!target) return null;

                  const startX = module.position.x + 250;
                  const startY = module.position.y + 100;
                  const endX = target.position.x + 250;
                  const endY = target.position.y + 100;

                  return (
                    <motion.line
                      key={`${module.id}-${targetId}`}
                      x1={startX}
                      y1={startY}
                      x2={endX}
                      y2={endY}
                      stroke="url(#redGradient)"
                      strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { pathLength: 1, opacity: 0.5 } : {}}
                      transition={{ delay: 0.5 + module.id * 0.05, duration: 0.8 }}
                    />
                  );
                });
              })}
              <defs>
                <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#dc2626" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#991b1b" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>

            {/* Modules */}
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  className="absolute cursor-pointer group"
                  style={{
                    left: `calc(50% + ${module.position.x}px)`,
                    top: `${module.position.y}px`,
                    transform: 'translate(-50%, 0)',
                  }}
                >
                  <div className="relative">
                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/50 to-red-800/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Module card */}
                    <div className="relative bg-gradient-to-br from-neutral-900 to-black border-2 border-red-600/30 rounded-2xl p-4 min-w-[140px] group-hover:border-red-500 transition-all duration-300 shadow-lg">
                      <div className="flex flex-col items-center text-center gap-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm">{module.label}</span>
                      </div>

                      {/* Pulse dot */}
                      <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical flow */}
        <div className="lg:hidden space-y-4 mb-16">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ x: 10 }}
                className="relative"
              >
                <div className="bg-gradient-to-r from-neutral-900 to-black border border-red-600/30 rounded-xl p-4 hover:border-red-600/50 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span>{module.label}</span>
                  </div>
                </div>

                {/* Connector */}
                {index < modules.length - 1 && (
                  <div className="ml-6 h-4 w-0.5 bg-gradient-to-b from-red-600 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Impact statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-red-500/30 to-red-600/20 rounded-2xl blur-2xl" />
          <div className="relative bg-gradient-to-br from-neutral-900 to-black border border-red-600/50 rounded-2xl p-8 sm:p-12 text-center">
            <p className="text-2xl sm:text-3xl leading-relaxed">
              Tudo que hoje está espalhado em redes sociais, planilhas, WhatsApp e sistemas externos passa a viver em uma estrutura própria.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
