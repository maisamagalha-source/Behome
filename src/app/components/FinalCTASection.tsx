import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import logo from '../../imports/Balada_Inteiro_.png';

export function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-black via-red-950/10 to-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.6, 0.2],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="flex justify-center mb-12 relative"
          >
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 bg-red-600/30 blur-[80px]" />
            <img
              src={logo}
              alt="Balada Erótica Logo"
              className="relative w-64 sm:w-80 lg:w-96 h-auto drop-shadow-[0_0_30px_rgba(220,38,38,0.6)]"
            />
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block mb-8"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-red-600 blur-[100px] opacity-40" />

              <h2 className="relative text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent max-w-4xl">
                O mercado liberal precisa de uma plataforma feita para ele.
              </h2>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl text-neutral-300 max-w-3xl mx-auto mb-8"
          >
            O Balada Erótica nasceu para ser essa estrutura: um ambiente próprio para liberdade, relacionamento, monetização, divulgação, automação e crescimento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative inline-block mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-red-500/30 to-red-600/20 blur-xl" />
            <div className="relative bg-gradient-to-r from-neutral-900 to-black border border-red-600/50 rounded-2xl px-8 py-6">
              <p className="text-xl sm:text-2xl mb-2">
                Sua casa não precisa viver limitada por redes sociais que não entendem seu mercado.
              </p>
              <p className="text-xl sm:text-2xl bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Ela pode ter uma presença digital própria, recorrente e preparada para crescer.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center items-center mb-16"
        >
          <motion.a
            href="https://wa.me/5511945599070?text=Ol%C3%A1%21%20Gostaria%20de%20apresentar%20minha%20casa%20no%20Balada%20Er%C3%B3tica%20e%20conhecer%20melhor%20a%20plataforma."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(220, 38, 38, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 rounded-xl overflow-hidden shadow-2xl shadow-red-600/50 min-w-[280px] block"
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ opacity: 0.5 }}
            />

            <div className="relative flex items-center justify-center gap-3">
              <Sparkles className="w-6 h-6" />
              <span className="text-lg">Quero apresentar minha casa no Balada Erótica</span>
              <motion.div
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </div>

            {/* Border glow */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                 style={{ boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.2)' }} />
          </motion.a>
        </motion.div>

        {/* Platform mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 1 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-neutral-900 via-red-950/10 to-black border border-red-600/30 rounded-3xl p-8 shadow-2xl overflow-hidden">
            {/* Mockup content */}
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/50">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl">Balada Erótica</h3>
                  <p className="text-neutral-400">Sua casa no controle</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.2 + i * 0.05, duration: 0.5 }}
                    className="aspect-square bg-neutral-800/50 rounded-xl border border-red-900/20"
                  />
                ))}
              </div>
            </div>

            {/* Animated glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </div>

          {/* Platform glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-red-600/30 via-transparent to-transparent rounded-3xl blur-3xl -z-10" />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
