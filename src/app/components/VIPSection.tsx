import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Crown, Sparkles, Star, Zap, Gift, Lock } from 'lucide-react';

export function VIPSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const vipFeatures = [
    { icon: Sparkles, label: 'Descontos exclusivos' },
    { icon: Zap, label: 'Acesso antecipado' },
    { icon: Star, label: 'Benefícios em eventos' },
    { icon: Lock, label: 'Conteúdos reservados' },
    { icon: Gift, label: 'Comunicação prioritária' },
  ];

  const superVipFeatures = [
    { icon: Crown, label: 'Conteúdos exclusivos' },
    { icon: Sparkles, label: 'Benefícios especiais' },
    { icon: Star, label: 'Áreas reservadas' },
    { icon: Zap, label: 'Vantagens premium' },
    { icon: Gift, label: 'Experiências diferenciadas' },
  ];

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-b from-black via-red-950/10 to-black overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-6 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
            Transforme relacionamento em receita recorrente.
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Sua casa pode criar áreas exclusivas para assinantes e gerar renda mensal através de planos VIP e Super VIP. O estabelecimento define valores, benefícios, conteúdos, vantagens e níveis de acesso.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {/* VIP Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateY: -10 }}
            animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative group"
            style={{ perspective: 1000 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-transparent rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-neutral-900 to-black border border-red-600/50 rounded-2xl p-8 group-hover:border-red-500 transition-all duration-300">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/50">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl">Plano VIP</h3>
                  <p className="text-sm text-neutral-500">Acesso premium</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {vipFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.05, duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-red-400" />
                      </div>
                      <span className="text-neutral-300">{feature.label}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(220, 38, 38, 0.5), transparent)',
                  backgroundSize: '200% 100%',
                }}
                animate={{
                  backgroundPosition: ['200% 0', '-200% 0'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>

          {/* Super VIP Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateY: 10 }}
            animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative group"
            style={{ perspective: 1000 }}
          >
            {/* Premium badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-red-600 to-red-700 px-4 py-1 rounded-full text-sm shadow-lg shadow-red-600/50">
                Mais Popular
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-red-600/50 to-red-800/30 rounded-2xl blur-3xl group-hover:blur-[50px] transition-all duration-500 animate-pulse" />
            <div className="relative bg-gradient-to-br from-neutral-900 via-red-950/20 to-black border-2 border-red-500 rounded-2xl p-8 group-hover:border-red-400 transition-all duration-300 shadow-2xl shadow-red-600/30">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/70">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                    Plano Super VIP
                  </h3>
                  <p className="text-sm text-neutral-400">Experiência exclusiva</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {superVipFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md shadow-red-600/50">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white">{feature.label}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Animated border with glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.8), transparent)',
                  backgroundSize: '200% 100%',
                }}
                animate={{
                  backgroundPosition: ['200% 0', '-200% 0'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Impact statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-red-500/30 to-red-600/20 rounded-2xl blur-2xl" />
          <div className="relative bg-gradient-to-br from-neutral-900 to-black border border-red-600/50 rounded-2xl p-8 sm:p-12 text-center">
            <p className="text-2xl sm:text-3xl mb-3">
              Você deixa de vender apenas presença.
            </p>
            <p className="text-2xl sm:text-3xl bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              Passa a vender pertencimento, exclusividade e recorrência.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
