import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Eye, UserPlus, CheckCircle, Repeat, Crown, Users } from 'lucide-react';

export function BusinessJourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stages = [
    {
      icon: Eye,
      label: 'Visitante',
      description: 'descobre a casa.',
      color: 'from-neutral-600 to-neutral-700',
    },
    {
      icon: UserPlus,
      label: 'Seguidor',
      description: 'acompanha novidades.',
      color: 'from-orange-600 to-red-600',
    },
    {
      icon: CheckCircle,
      label: 'Presença',
      description: 'entra na lista do evento.',
      color: 'from-red-600 to-red-700',
    },
    {
      icon: Repeat,
      label: 'Cliente recorrente',
      description: 'volta mais vezes.',
      color: 'from-red-700 to-red-800',
    },
    {
      icon: Crown,
      label: 'VIP',
      description: 'paga por exclusividade.',
      color: 'from-red-800 to-red-900',
    },
    {
      icon: Users,
      label: 'Comunidade',
      description: 'fortalece a marca da casa.',
      color: 'from-red-900 to-black',
    },
  ];

  return (
    <section ref={ref} className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-6">
            O verdadeiro valor está no relacionamento contínuo.
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Uma casa não cresce apenas por divulgar um evento. Ela cresce quando consegue transformar visitantes em seguidores, seguidores em clientes recorrentes, clientes recorrentes em assinantes e assinantes em comunidade.
          </p>
        </motion.div>

        {/* Desktop journey */}
        <div className="hidden md:block mb-12">
          <div className="relative max-w-5xl mx-auto">
            {/* Progress line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-neutral-800" />
            <motion.div
              className="absolute top-12 left-0 h-1 bg-gradient-to-r from-neutral-600 via-red-600 to-red-900"
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : {}}
              transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
            />

            <div className="relative grid grid-cols-6 gap-4">
              {stages.map((stage, index) => {
                const Icon = stage.icon;
                const delay = 0.3 + index * 0.15;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay, duration: 0.6 }}
                    className="flex flex-col items-center"
                  >
                    {/* Icon circle */}
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`relative w-24 h-24 bg-gradient-to-br ${stage.color} rounded-full flex items-center justify-center mb-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border-4 border-black z-10`}
                    >
                      <Icon className="w-10 h-10 text-white" />

                      {/* Pulse effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${stage.color}`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                    </motion.div>

                    {/* Label */}
                    <div className="text-center">
                      <p className="text-lg mb-1">{stage.label}</p>
                      <p className="text-sm text-neutral-500">{stage.description}</p>
                    </div>

                    {/* Arrow */}
                    {index < stages.length - 1 && (
                      <motion.div
                        className="absolute left-full top-12 -translate-y-1/2 text-red-500 text-2xl"
                        animate={{
                          x: [0, 10, 0],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      >
                        →
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile journey */}
        <div className="md:hidden space-y-6 mb-12">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative flex items-start gap-4"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${stage.color} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 pt-3">
                  <h4 className="text-lg mb-1">{stage.label}</h4>
                  <p className="text-sm text-neutral-500">{stage.description}</p>
                </div>

                {/* Connector */}
                {index < stages.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-6 bg-gradient-to-b from-red-600 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Impact statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-red-500/20 to-red-600/10 rounded-2xl blur-xl" />
          <div className="relative bg-gradient-to-br from-neutral-900 to-black border border-red-600/50 rounded-2xl p-8 text-center">
            <p className="text-2xl sm:text-3xl bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Essa é a diferença entre divulgar eventos e construir recorrência.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
