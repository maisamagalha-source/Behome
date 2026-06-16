import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, Music, Sparkles, Crown, Users, Ticket } from 'lucide-react';

export function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const events = [
    { icon: Sparkles, title: 'Noite temática', day: 'SEG', color: 'from-pink-600 to-red-600' },
    { icon: Music, title: 'Festa especial', day: 'TER', color: 'from-red-600 to-orange-600' },
    { icon: Users, title: 'Show ao vivo', day: 'QUA', color: 'from-orange-600 to-red-600' },
    { icon: Ticket, title: 'Pré-venda de ingressos', day: 'QUI', color: 'from-red-500 to-pink-600' },
    { icon: Crown, title: 'Evento VIP', day: 'SEX', color: 'from-red-700 to-rose-700' },
    { icon: Calendar, title: 'Programação recorrente', day: 'SAB', color: 'from-rose-600 to-red-600' },
  ];

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-b from-black via-neutral-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-6">
            Divulgue seus eventos de forma profissional.
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Crie e divulgue eventos semanais, noites temáticas, festas especiais, apresentações, shows, eventos exclusivos e programações recorrentes. Seus eventos ficam disponíveis dentro da plataforma e podem ser encontrados por pessoas interessadas nesse tipo de experiência.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden lg:block mb-12">
          <div className="relative">
            {/* Timeline line */}
            <motion.div
              className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 1.5 }}
              style={{ originX: 0.5 }}
            />

            <div className="grid grid-cols-6 gap-4">
              {events.map((event, index) => {
                const Icon = event.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="relative group cursor-pointer"
                  >
                    {/* Day marker */}
                    <div className="flex flex-col items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mb-2 shadow-lg shadow-red-600/50 group-hover:shadow-red-600/80 transition-shadow border-2 border-red-400/50">
                        <span className="text-xs">{event.day}</span>
                      </div>
                    </div>

                    {/* Event card */}
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-opacity duration-300`} />
                      <div className="relative bg-neutral-900/80 backdrop-blur-sm border border-red-900/30 rounded-xl p-4 group-hover:border-red-600/50 transition-all duration-300 h-40 flex flex-col">
                        <div className={`w-10 h-10 bg-gradient-to-br ${event.color} rounded-lg flex items-center justify-center mb-3 shadow-lg`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="text-sm mb-auto">{event.title}</h4>
                        <button className="text-xs text-red-400 hover:text-red-300 transition-colors">
                          Ver evento →
                        </button>
                      </div>
                    </div>

                    {/* Connection line to timeline */}
                    <motion.div
                      className="absolute top-12 left-1/2 w-0.5 h-12 bg-red-600/50"
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                      style={{ originY: 0 }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden space-y-6 mb-12">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative flex gap-4 group"
              >
                {/* Day indicator */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg shadow-red-600/50 border-2 border-red-400/50">
                    <span className="text-sm">{event.day}</span>
                  </div>
                  {index < events.length - 1 && (
                    <div className="w-0.5 h-full bg-red-600/30 mt-2" />
                  )}
                </div>

                {/* Event card */}
                <div className="flex-1 pb-6">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-opacity duration-300`} />
                    <div className="relative bg-neutral-900/80 backdrop-blur-sm border border-red-900/30 rounded-xl p-4 group-hover:border-red-600/50 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className={`w-12 h-12 bg-gradient-to-br ${event.color} rounded-lg flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="mb-2">{event.title}</h4>
                          <button className="text-sm text-red-400 hover:text-red-300 transition-colors">
                            Ver evento →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-red-600/20 blur-xl" />
            <p className="relative text-xl sm:text-2xl text-neutral-300 border border-red-600/30 rounded-xl px-8 py-4 bg-neutral-900/50 backdrop-blur-sm">
              Sua casa deixa de depender apenas do alcance instável das redes sociais.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
