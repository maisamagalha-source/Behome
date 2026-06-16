import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Globe, Users, Star, Crown, Lock } from 'lucide-react';

export function SegmentedContentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const accessLevels = [
    {
      icon: Globe,
      label: 'Público',
      description: 'Visível para todos',
      color: 'from-neutral-600 to-neutral-700',
      borderColor: 'border-neutral-600/50'
    },
    {
      icon: Users,
      label: 'Apenas seguidores',
      description: 'Exclusivo para quem segue',
      color: 'from-orange-600 to-red-600',
      borderColor: 'border-orange-600/50'
    },
    {
      icon: Star,
      label: 'VIP',
      description: 'Assinantes VIP',
      color: 'from-red-600 to-red-700',
      borderColor: 'border-red-600/50'
    },
    {
      icon: Crown,
      label: 'Super VIP',
      description: 'Nível máximo de acesso',
      color: 'from-red-700 to-red-900',
      borderColor: 'border-red-700/70'
    },
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
            Controle quem vê cada conteúdo.
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Dentro da plataforma, a casa pode publicar conteúdos com diferentes níveis de visibilidade. Isso permite trabalhar exclusividade, aumentar valor percebido e criar uma jornada de relacionamento mais inteligente.
          </p>
        </motion.div>

        {/* Visual representation - staircase/tunnel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-neutral-700 via-red-600 to-red-900" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
              {accessLevels.map((level, index) => {
                const Icon = level.icon;
                const delay = 0.2 + index * 0.15;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ delay, duration: 0.6 }}
                    className="relative"
                    style={{ zIndex: 4 - index }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, y: -10 }}
                      className="relative group cursor-pointer"
                    >
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${level.color} opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-opacity duration-300`} />

                      {/* Card */}
                      <div className={`relative bg-gradient-to-br from-neutral-900 to-black border-2 ${level.borderColor} rounded-2xl p-6 group-hover:border-opacity-100 transition-all duration-300`}>
                        {/* Lock/unlock animation */}
                        <div className="flex justify-between items-start mb-4">
                          <div className={`w-14 h-14 bg-gradient-to-br ${level.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                            <Icon className="w-7 h-7 text-white" />
                          </div>

                          <motion.div
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            className="w-8 h-8 flex items-center justify-center"
                          >
                            {index < 3 ? (
                              <Lock className="w-5 h-5 text-neutral-500 group-hover:text-red-500 transition-colors" />
                            ) : (
                              <motion.div
                                animate={{
                                  rotate: [0, -10, 10, -10, 0],
                                }}
                                transition={{
                                  duration: 0.5,
                                  repeat: Infinity,
                                  repeatDelay: 2,
                                }}
                              >
                                <Lock className="w-5 h-5 text-green-500" />
                              </motion.div>
                            )}
                          </motion.div>
                        </div>

                        <h3 className="text-xl mb-2">{level.label}</h3>
                        <p className="text-sm text-neutral-500">{level.description}</p>

                        {/* Progress indicator */}
                        <div className="mt-4 h-1 bg-neutral-800 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${level.color}`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${(index + 1) * 25}%` } : {}}
                            transition={{ delay: delay + 0.3, duration: 0.8 }}
                          />
                        </div>

                        {/* Level number */}
                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-neutral-800 to-black border border-red-600/30 rounded-full flex items-center justify-center text-sm shadow-lg">
                          {index + 1}
                        </div>
                      </div>

                      {/* Arrow indicator for mobile */}
                      {index < accessLevels.length - 1 && (
                        <div className="md:hidden flex justify-center my-2">
                          <motion.div
                            animate={{
                              y: [0, 5, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: index * 0.2,
                            }}
                            className="text-red-500"
                          >
                            ↓
                          </motion.div>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Impact statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-red-500/20 to-red-600/10 rounded-2xl blur-xl" />
          <div className="relative bg-gradient-to-br from-neutral-900 to-black border border-red-600/50 rounded-2xl p-8 text-center">
            <p className="text-2xl sm:text-3xl mb-3">
              Nem todo conteúdo precisa ser para todos.
            </p>
            <p className="text-2xl sm:text-3xl bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Exclusividade também é estratégia de monetização.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
