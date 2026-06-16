import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Users, TrendingUp, Heart, Star, UserPlus, Activity } from 'lucide-react';

export function ClientBaseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Users, label: 'Sua comunidade' },
    { icon: Heart, label: 'Seus seguidores' },
    { icon: Star, label: 'Seus frequentadores' },
    { icon: Activity, label: 'Sua audiência recorrente' },
    { icon: TrendingUp, label: 'Seu histórico de relacionamento' },
    { icon: UserPlus, label: 'Sua base ativa' },
  ];

  return (
    <section ref={ref} className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6">
              Construa sua própria base de clientes.
            </h2>
            <p className="text-xl text-neutral-400 mb-8">
              No Balada Erótica, os seguidores da sua casa ficam organizados em uma lista própria de clientes. Isso permite criar comunidade, recorrência, fidelização e relacionamento direto com quem realmente acompanha o estabelecimento.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 + index * 0.05, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-neutral-900/50 backdrop-blur-sm border border-red-900/30 rounded-xl p-4 hover:border-red-600/50 transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-red-400 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm">{item.label}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent blur-xl" />
              <div className="relative bg-gradient-to-r from-neutral-900 to-black border border-red-600/50 rounded-xl p-6">
                <p className="text-lg mb-2">Quem segue sua casa não fica perdido em uma rede social.</p>
                <p className="text-lg bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Fica conectado diretamente ao seu estabelecimento.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Visual representation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-neutral-900 to-black border border-red-600/30 rounded-2xl p-8 shadow-2xl">
              {/* Growth chart */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg">Base de Clientes</h4>
                  <div className="flex items-center gap-2 text-green-400">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">+47%</span>
                  </div>
                </div>

                {/* Simple bar chart */}
                <div className="space-y-3">
                  {[65, 78, 82, 91, 100].map((percentage, index) => (
                    <motion.div
                      key={index}
                      className="relative h-8 bg-neutral-800 rounded-lg overflow-hidden"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    >
                      <motion.div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-600 to-red-500 rounded-lg flex items-center justify-end px-3"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${percentage}%` } : {}}
                        transition={{ delay: 0.7 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                      >
                        <span className="text-xs font-semibold">{percentage}%</span>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Client cards entering */}
              <div className="space-y-3">
                <p className="text-sm text-neutral-500 mb-3">Novos seguidores</p>
                {[1, 2, 3].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.2 + index * 0.15, duration: 0.5 }}
                    className="flex items-center gap-3 bg-neutral-800/50 rounded-lg p-3 border border-red-900/20"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center">
                      <UserPlus className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-neutral-700 rounded w-24 mb-1" />
                      <div className="h-2 bg-neutral-700/50 rounded w-16" />
                    </div>
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      className="w-2 h-2 bg-green-500 rounded-full"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-2xl blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
