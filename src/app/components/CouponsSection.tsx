import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { QrCode, Check, X, Clock, Users, Tag, Settings } from 'lucide-react';

export function CouponsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isScanning, setIsScanning] = useState(false);
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const features = [
    { icon: QrCode, label: 'QR Code automático' },
    { icon: Tag, label: 'Código de validação' },
    { icon: Users, label: 'Limite de uso' },
    { icon: Clock, label: 'Validade personalizada' },
    { icon: Settings, label: 'Regras configuráveis' },
    { icon: Check, label: 'Benefícios por evento ou campanha' },
  ];

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setIsValid(true);
      setTimeout(() => setIsValid(null), 3000);
    }, 1500);
  };

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
            Crie cupons promocionais com validação integrada.
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            A casa pode criar cupons personalizados para atrair novos clientes, aumentar movimento, incentivar check-in, divulgar eventos e fidelizar frequentadores.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Coupon mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Coupon card */}
              <motion.div
                initial={{ scale: 0.9, rotateY: -10 }}
                animate={isInView ? { scale: 1, rotateY: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative bg-gradient-to-br from-neutral-900 via-red-950/20 to-black border-2 border-red-600/50 rounded-2xl overflow-hidden shadow-2xl"
              >
                {/* Coupon header */}
                <div className="relative bg-gradient-to-br from-red-900/40 to-red-600/30 p-6 border-b-2 border-dashed border-red-600/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                      <Tag className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl">Desconto Especial</h3>
                      <p className="text-sm text-neutral-400">Válido até 31/05/2026</p>
                    </div>
                  </div>

                  <div className="text-center py-4">
                    <p className="text-5xl bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                      30% OFF
                    </p>
                    <p className="text-sm text-neutral-400 mt-2">Na entrada do evento</p>
                  </div>
                </div>

                {/* QR Code area */}
                <div className="p-6 flex flex-col items-center">
                  <motion.div
                    animate={isScanning ? {
                      scale: [1, 1.05, 1],
                    } : {}}
                    transition={{ duration: 0.5, repeat: isScanning ? Infinity : 0 }}
                    className="w-40 h-40 bg-white rounded-xl p-2 mb-4 relative overflow-hidden"
                  >
                    {/* QR Code pattern (simplified) */}
                    <div className="absolute inset-0 p-2">
                      <div className="grid grid-cols-8 gap-1 h-full">
                        {[...Array(64)].map((_, i) => (
                          <div
                            key={i}
                            className={`${Math.random() > 0.5 ? 'bg-black' : 'bg-white'} rounded-sm`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Scanner effect */}
                    {isScanning && (
                      <motion.div
                        className="absolute inset-x-0 h-1 bg-red-500 shadow-lg shadow-red-500/50"
                        animate={{
                          y: [0, 152, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    )}
                  </motion.div>

                  <p className="text-sm text-neutral-500 mb-4">Código: PREMIUM30</p>

                  <button
                    onClick={handleScan}
                    disabled={isScanning}
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isScanning ? 'Validando...' : 'Validar cupom'}
                  </button>

                  {/* Validation result */}
                  {isValid !== null && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className={`mt-4 px-4 py-2 rounded-lg flex items-center gap-2 ${
                        isValid ? 'bg-green-600/20 border border-green-600/50' : 'bg-red-600/20 border border-red-600/50'
                      }`}
                    >
                      {isValid ? (
                        <>
                          <Check className="w-5 h-5 text-green-400" />
                          <span className="text-green-400">Cupom válido</span>
                        </>
                      ) : (
                        <>
                          <X className="w-5 h-5 text-red-400" />
                          <span className="text-red-400">Cupom inválido</span>
                        </>
                      )}
                    </motion.div>
                  )}
                </div>

                {/* Decorative circles on sides */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-black rounded-full border-2 border-red-600/50" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-6 h-6 bg-black rounded-full border-2 border-red-600/50" />
              </motion.div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-transparent rounded-2xl blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
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
                    <p className="text-sm">{feature.label}</p>
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
                Promoção deixa de ser improviso e vira ferramenta de conversão.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
