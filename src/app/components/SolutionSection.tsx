import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Zap, Shield, Users, TrendingUp, Crown, Sparkles } from 'lucide-react';

export function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const modules = [
    { icon: Users, label: 'Perfil', color: 'from-red-500 to-pink-500' },
    { icon: Sparkles, label: 'Eventos', color: 'from-pink-500 to-red-500' },
    { icon: Crown, label: 'Clientes', color: 'from-red-600 to-rose-600' },
    { icon: Shield, label: 'VIP', color: 'from-rose-500 to-red-500' },
    { icon: TrendingUp, label: 'Cupons', color: 'from-red-500 to-orange-600' },
    { icon: Zap, label: 'Ingressos', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-b from-black via-red-950/5 to-black overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-red-600 blur-3xl opacity-30" />
              <h2 className="relative text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
                O Balada Erótica nasce para devolver o controle ao estabelecimento.
              </h2>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8"
          >
            O Balada Erótica é uma plataforma criada especialmente para o mercado liberal, oferecendo um ambiente seguro, profissional e preparado para divulgação, relacionamento, recorrência, monetização e crescimento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-red-500/30 to-red-600/20 blur-xl" />
            <div className="relative bg-gradient-to-r from-neutral-900 to-black border border-red-600/50 rounded-2xl px-8 py-6 inline-block">
              <p className="text-2xl sm:text-3xl mb-2">Não é apenas uma rede social.</p>
              <p className="text-2xl sm:text-3xl bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                É uma estrutura digital completa para sua casa crescer com independência.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Central dashboard visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main panel */}
          <div className="relative bg-gradient-to-br from-neutral-900 via-black to-neutral-900 rounded-3xl border border-red-600/30 p-8 sm:p-12 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent rounded-3xl" />

            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-red-600/50"
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="relative">
              <div className="flex items-center justify-center mb-8">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg shadow-red-600/50"
                >
                  <Zap className="w-10 h-10 text-white" />
                </motion.div>
              </div>

              <div className="text-center mb-12">
                <p className="text-lg text-neutral-400">Sistema sendo ativado...</p>
              </div>

              {/* Module grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {modules.map((module, index) => {
                  const Icon = module.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative group cursor-pointer"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-opacity duration-300`} />
                      <div className="relative bg-neutral-800/50 backdrop-blur-sm border border-red-900/30 rounded-xl p-4 group-hover:border-red-600/50 transition-all duration-300">
                        <div className="flex flex-col items-center gap-2">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center shadow-lg`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-sm">{module.label}</span>
                        </div>
                      </div>

                      {/* Connection lines */}
                      {index < modules.length - 1 && (
                        <motion.div
                          className="hidden sm:block absolute top-1/2 left-full w-4 h-0.5 bg-gradient-to-r from-red-600/50 to-transparent"
                          initial={{ scaleX: 0 }}
                          animate={isInView ? { scaleX: 1 } : {}}
                          transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                          style={{ originX: 0 }}
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Floating connection nodes */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-red-500 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: i % 2 === 0 ? '-10px' : 'auto',
                bottom: i % 2 === 1 ? '-10px' : 'auto',
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
