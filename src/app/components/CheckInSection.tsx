import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Shield, Image, History, Users, CheckCircle } from 'lucide-react';

export function CheckInSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const clientFeatures = [
    { icon: CheckCircle, label: 'Registrar presença' },
    { icon: Users, label: 'Compartilhar experiências' },
    { icon: Image, label: 'Publicar fotos' },
    { icon: History, label: 'Guardar histórico de visitas' },
    { icon: Users, label: 'Interagir dentro da comunidade' },
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
            Check-in privado, discreto e feito para o comportamento real do público.
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Muitos clientes evitam fazer check-in em redes sociais tradicionais por medo de exposição. No Balada Erótica, o check-in acontece dentro de uma comunidade segmentada e discreta, alinhada ao perfil do público.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left - Check-in mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              <div className="bg-gradient-to-br from-neutral-900 to-black border border-red-600/30 rounded-2xl overflow-hidden shadow-2xl">
                {/* Location header */}
                <div className="relative bg-gradient-to-br from-red-900/30 to-red-600/20 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-600/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <MapPin className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl">Casa Premium</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Shield className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-neutral-400">Check-in discreto</span>
                      </div>
                    </div>
                  </div>

                  {/* Abstract map (privacy-focused) */}
                  <div className="h-32 bg-neutral-900/50 rounded-xl backdrop-blur-sm border border-red-900/30 relative overflow-hidden">
                    {/* Abstract location representation (no real map) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="w-20 h-20 bg-red-600/20 rounded-full"
                      />
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.3,
                        }}
                        className="absolute w-32 h-32 bg-red-600/10 rounded-full"
                      />
                      <div className="absolute w-4 h-4 bg-red-500 rounded-full shadow-lg shadow-red-500/50" />
                    </div>

                    {/* Privacy indicator */}
                    <div className="absolute top-2 right-2 bg-neutral-900/80 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center gap-2 border border-red-900/30">
                      <Shield className="w-3 h-3 text-green-400" />
                      <span className="text-xs text-neutral-400">Localização privada</span>
                    </div>
                  </div>
                </div>

                {/* Check-in content */}
                <div className="p-6">
                  <p className="text-sm text-neutral-500 mb-4">O cliente pode:</p>

                  <div className="space-y-3 mb-6">
                    {clientFeatures.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4 h-4 text-red-400" />
                          </div>
                          <span className="text-neutral-300 text-sm">{feature.label}</span>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Check-in button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 bg-red-600 hover:bg-red-700 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50 flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Fazer check-in discreto</span>
                  </motion.button>

                  {/* Confirmation message */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="mt-4 bg-green-600/10 border border-green-600/30 rounded-lg p-3 flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <p className="text-sm text-green-400">Presença registrada com privacidade</p>
                  </motion.div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-2xl blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Right - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="bg-neutral-900/50 backdrop-blur-sm border border-red-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-2">Privacidade garantida</h4>
                    <p className="text-neutral-400 text-sm">
                      Check-in visível apenas dentro da comunidade segmentada, sem exposição em redes sociais tradicionais.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-900/50 backdrop-blur-sm border border-red-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-2">Engajamento autêntico</h4>
                    <p className="text-neutral-400 text-sm">
                      Clientes se sentem seguros para interagir, compartilhar e registrar suas experiências dentro do ambiente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-900/50 backdrop-blur-sm border border-red-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <History className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-2">Histórico de frequência</h4>
                    <p className="text-neutral-400 text-sm">
                      Casa e cliente constroem histórico de relacionamento, permitindo benefícios personalizados e fidelização.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Impact statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-red-500/20 to-red-600/10 rounded-2xl blur-xl" />
          <div className="relative bg-gradient-to-br from-neutral-900 to-black border border-red-600/50 rounded-2xl p-8 text-center">
            <p className="text-2xl sm:text-3xl mb-2">
              Mais engajamento para a casa.
            </p>
            <p className="text-2xl sm:text-3xl bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Mais privacidade para o cliente.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
