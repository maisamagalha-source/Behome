import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, Layers, CreditCard, CheckCircle, List, History } from 'lucide-react';

export function TicketsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Layers, label: 'Criação de lotes' },
    { icon: Calendar, label: 'Pré-venda' },
    { icon: CreditCard, label: 'Pagamento parcial' },
    { icon: CheckCircle, label: 'Validação de entrada' },
    { icon: List, label: 'Organização de eventos pagos' },
    { icon: History, label: 'Histórico de compradores' },
  ];

  const steps = [
    { icon: Calendar, label: 'Criar evento', color: 'from-red-500 to-orange-600' },
    { icon: Layers, label: 'Abrir lote', color: 'from-orange-600 to-red-600' },
    { icon: CreditCard, label: 'Vender ingresso', color: 'from-red-600 to-red-700' },
    { icon: CheckCircle, label: 'Validar entrada', color: 'from-red-700 to-red-800' },
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
            Venda e pré-venda de ingressos dentro da própria plataforma.
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            O estabelecimento pode vender ingressos diretamente pela plataforma, criar lotes, fazer pré-venda, cobrar valor parcial, validar entradas e organizar eventos pagos sem depender de múltiplos sistemas externos.
          </p>
        </motion.div>

        {/* Animated flow */}
        <div className="mb-16">
          <div className="relative max-w-5xl mx-auto">
            {/* Connection line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-800 opacity-30" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                    className="relative group"
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Step number */}
                      <div className="relative mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/50 group-hover:shadow-red-600/80 transition-shadow relative z-10`}
                        >
                          <Icon className="w-10 h-10 text-white" />
                        </motion.div>

                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-neutral-900 border-2 border-red-600 rounded-full flex items-center justify-center text-sm z-20">
                          {index + 1}
                        </div>

                        {/* Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity`} />
                      </div>

                      {/* Step label */}
                      <h4 className="text-lg">{step.label}</h4>

                      {/* Arrow for mobile */}
                      {index < steps.length - 1 && (
                        <div className="md:hidden my-4">
                          <motion.div
                            animate={{
                              y: [0, 5, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: index * 0.2,
                            }}
                            className="text-red-500 text-2xl"
                          >
                            ↓
                          </motion.div>
                        </div>
                      )}
                    </div>

                    {/* Arrow for desktop */}
                    {index < steps.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                        transition={{ delay: 0.6 + index * 0.15, duration: 0.5 }}
                        className="hidden md:block absolute top-12 left-full w-full h-1 -translate-y-1/2"
                        style={{ originX: 0 }}
                      >
                        <div className="relative h-full">
                          <motion.div
                            className="absolute right-0 top-1/2 -translate-y-1/2"
                            animate={{
                              x: [0, 10, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: index * 0.3,
                            }}
                          >
                            <div className="w-3 h-3 bg-red-500 rounded-full" />
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-neutral-900/50 backdrop-blur-sm border border-red-900/30 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                    <Icon className="w-6 h-6 text-red-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <p>{feature.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Impact statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-red-500/20 to-red-600/10 rounded-2xl blur-xl" />
          <div className="relative bg-gradient-to-br from-neutral-900 to-black border border-red-600/50 rounded-2xl p-8 text-center">
            <p className="text-2xl sm:text-3xl mb-2">
              Menos ferramentas soltas.
            </p>
            <p className="text-2xl sm:text-3xl bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Mais controle em um único ambiente.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
