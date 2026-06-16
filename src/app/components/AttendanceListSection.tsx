import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Users, Percent, Crown, Star, Check, TrendingUp } from 'lucide-react';

export function AttendanceListSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  const benefits = [
    { icon: TrendingUp, label: 'Melhor previsão de público' },
    { icon: Users, label: 'Mais organização' },
    { icon: Star, label: 'Mais engajamento' },
    { icon: Check, label: 'Mais intenção de presença' },
    { icon: TrendingUp, label: 'Mais dados sobre interesse real' },
    { icon: Crown, label: 'Mais conversão no evento' },
  ];

  // Animate counter
  if (isInView && count < 187) {
    setTimeout(() => setCount(prev => Math.min(prev + 7, 187)), 30);
  }

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
            Lista de presença digital para aumentar previsibilidade e movimento.
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Permita que clientes coloquem seus nomes na lista de presença dos eventos. A casa pode oferecer descontos, entrada diferenciada, vantagens VIP, benefícios especiais e promoções exclusivas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Event mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-neutral-900 to-black border border-red-600/30 rounded-2xl overflow-hidden shadow-2xl">
              {/* Event header */}
              <div className="relative h-48 bg-gradient-to-br from-red-900/40 to-red-600/30 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl mb-2">Noite Premium</h3>
                  <p className="text-neutral-300">Sábado, 20:00</p>
                </div>
              </div>

              {/* Event details */}
              <div className="p-6">
                {/* Counter */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="bg-neutral-800/50 rounded-xl p-6 mb-6 text-center"
                >
                  <p className="text-sm text-neutral-500 mb-2">Pessoas confirmadas</p>
                  <motion.p
                    className="text-5xl bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
                    key={count}
                  >
                    {count}
                  </motion.p>
                </motion.div>

                {/* Benefits tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { icon: Crown, label: 'VIP' },
                    { icon: Percent, label: 'Desconto' },
                    { icon: Star, label: 'Entrada diferenciada' },
                  ].map((tag, index) => {
                    const Icon = tag.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                        className="flex items-center gap-2 bg-red-600/20 border border-red-600/50 rounded-lg px-3 py-2"
                      >
                        <Icon className="w-4 h-4 text-red-400" />
                        <span className="text-sm">{tag.label}</span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-red-600 hover:bg-red-700 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
                >
                  Entrar na lista
                </motion.button>

                {/* Recent entries */}
                <div className="mt-6 space-y-2">
                  <p className="text-xs text-neutral-500 mb-3">Últimas confirmações</p>
                  {[1, 2, 3].map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
                      className="flex items-center gap-2 text-sm text-neutral-400"
                    >
                      <div className="w-6 h-6 bg-red-600/30 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-red-400" />
                      </div>
                      <div className="h-2 bg-neutral-700 rounded flex-1 max-w-[120px]" />
                      <span className="text-xs">agora</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-2xl blur-2xl -z-10" />
          </motion.div>

          {/* Right - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-neutral-900/50 backdrop-blur-sm border border-red-900/30 rounded-xl p-4 hover:border-red-600/50 transition-all duration-300 group"
                  >
                    <Icon className="w-6 h-6 text-red-400 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm">{benefit.label}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-red-600/10 blur-xl" />
              <p className="relative text-lg text-center border-l-4 border-red-600 pl-4 py-4 bg-neutral-900/50 rounded-r-xl">
                Antes do cliente chegar, sua casa já começa a medir o interesse.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
