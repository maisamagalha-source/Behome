import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { X, Check } from 'lucide-react';

export function ComparisonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const comparisons = [
    {
      before: 'Dependência do Instagram',
      after: 'Ambiente próprio para o segmento',
    },
    {
      before: 'Risco de página derrubada',
      after: 'Perfil profissional da casa',
    },
    {
      before: 'Alcance limitado',
      after: 'Eventos organizados',
    },
    {
      before: 'Cliente espalhado',
      after: 'Base de clientes própria',
    },
    {
      before: 'Divulgação manual',
      after: 'Lista de presença digital',
    },
    {
      before: 'Promoções sem rastreio',
      after: 'Cupons com QR Code',
    },
    {
      before: 'Check-in público e sensível',
      after: 'Check-in discreto',
    },
    {
      before: 'Sem recorrência estruturada',
      after: 'Assinaturas VIP e Super VIP',
    },
    {
      before: 'Atendimento manual no WhatsApp',
      after: 'IA no WhatsApp',
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
            Antes, sua casa dependia de plataformas externas. Agora, ela constrói um ativo digital próprio.
          </h2>
        </motion.div>

        {/* Comparison table */}
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-4 text-center"
            >
              <h3 className="text-xl text-neutral-400">Antes</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gradient-to-r from-red-900/30 to-red-800/30 border border-red-600/50 rounded-xl p-4 text-center"
            >
              <h3 className="text-xl text-red-400">Com Balada Erótica</h3>
            </motion.div>
          </div>

          {/* Comparison rows */}
          <div className="space-y-4">
            {comparisons.map((comparison, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                className="grid md:grid-cols-2 gap-4"
              >
                {/* Before */}
                <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-4 hover:border-neutral-600 transition-colors group">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-neutral-500" />
                    </div>
                    <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors">
                      {comparison.before}
                    </p>
                  </div>
                </div>

                {/* After */}
                <div className="bg-gradient-to-br from-neutral-900 to-black border border-red-900/30 rounded-xl p-4 hover:border-red-600/50 transition-all duration-300 group">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-600/30 transition-colors">
                      <Check className="w-4 h-4 text-red-400" />
                    </div>
                    <p className="text-neutral-200 group-hover:text-white transition-colors">
                      {comparison.after}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Impact statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative max-w-3xl mx-auto mt-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-red-500/30 to-red-600/20 rounded-2xl blur-2xl" />
          <div className="relative bg-gradient-to-br from-neutral-900 to-black border border-red-600/50 rounded-2xl p-8 sm:p-12 text-center">
            <p className="text-2xl sm:text-3xl mb-3">
              O Balada Erótica não substitui sua casa.
            </p>
            <p className="text-2xl sm:text-3xl bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Ele fortalece a sua operação digital.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
