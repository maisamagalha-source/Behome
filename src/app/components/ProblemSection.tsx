import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Ban, TrendingDown, AlertTriangle, ShieldAlert, Users } from 'lucide-react';

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    {
      icon: Ban,
      title: 'Censura de conteúdo',
      description: 'Publicações podem ser limitadas, removidas ou bloqueadas sem aviso.',
    },
    {
      icon: ShieldAlert,
      title: 'Páginas derrubadas',
      description: 'Anos de seguidores, histórico e relacionamento podem desaparecer de uma hora para outra.',
    },
    {
      icon: TrendingDown,
      title: 'Alcance cada vez menor',
      description: 'Mesmo com audiência, as redes sociais reduzem entrega e dificultam divulgação orgânica.',
    },
    {
      icon: AlertTriangle,
      title: 'Anúncios bloqueados',
      description: 'Campanhas pagas são recusadas com frequência por causa do segmento.',
    },
    {
      icon: Users,
      title: 'Cliente perdido na rede social',
      description: 'O estabelecimento constrói audiência em um ambiente que não controla.',
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
            O mercado liberal cresceu, mas continua refém de plataformas que não entendem o segmento.
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Grande parte das casas depende exclusivamente das redes sociais para divulgar eventos, se comunicar com clientes e manter sua presença digital. O problema é que essas plataformas não foram feitas para esse mercado.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-red-900/30 rounded-2xl p-6 hover:border-red-600/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors">
                    <Icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl mb-3">{problem.title}</h3>
                  <p className="text-neutral-400">{problem.description}</p>

                  {/* Glitch effect on hover */}
                  <motion.div
                    className="absolute top-4 right-4 text-red-500 opacity-0 group-hover:opacity-100"
                    animate={{
                      x: [0, -2, 2, -2, 0],
                      opacity: [0, 0.5, 0, 0.5, 0],
                    }}
                    transition={{
                      duration: 0.3,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  >
                    <Ban className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-red-500/20 to-red-600/20 rounded-2xl blur-2xl" />
          <div className="relative bg-gradient-to-br from-neutral-900 to-black border border-red-600/50 rounded-2xl p-8 sm:p-12 text-center">
            <p className="text-2xl sm:text-3xl">
              O problema não é divulgar.
            </p>
            <p className="text-2xl sm:text-3xl mt-2 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              O problema é depender de lugares onde sua casa não tem controle.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
