import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Image, Video, Newspaper, Calendar, Tag, Lock, Info, Gift } from 'lucide-react';

export function ProfileSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState('sobre');

  const features = [
    { icon: Image, label: 'Fotos' },
    { icon: Video, label: 'Vídeos' },
    { icon: Newspaper, label: 'Novidades' },
    { icon: Calendar, label: 'Eventos' },
    { icon: Tag, label: 'Promoções' },
    { icon: Lock, label: 'Conteúdos exclusivos' },
    { icon: Info, label: 'Informações da casa' },
    { icon: Gift, label: 'Benefícios para seguidores' },
  ];

  const tabs = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'eventos', label: 'Eventos' },
    { id: 'vip', label: 'VIP' },
    { id: 'cupons', label: 'Cupons' },
    { id: 'checkin', label: 'Check-in' },
  ];

  return (
    <section ref={ref} className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
            Sua casa com um espaço próprio dentro do Balada Erótica.
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto">
            Cada estabelecimento possui uma área exclusiva dentro da plataforma. Funciona como um perfil profissional da casa, onde a marca pode publicar, se apresentar, divulgar eventos, criar relacionamento e manter sua audiência dentro de um ambiente feito para o segmento.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Features list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {/* Desktop - Grid 2 columns */}
            <div className="hidden sm:grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-neutral-900/50 backdrop-blur-sm border border-red-900/30 rounded-xl p-4 hover:border-red-600/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                        <Icon className="w-5 h-5 text-red-400" />
                      </div>
                      <span className="text-sm">{feature.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile - Single column stacked */}
            <div className="sm:hidden space-y-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                    className="bg-neutral-900/50 backdrop-blur-sm border border-red-900/30 rounded-xl p-4 hover:border-red-600/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-red-400" />
                      </div>
                      <span className="text-sm">{feature.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-8 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent blur-xl" />
              <p className="relative text-base sm:text-lg text-neutral-300 italic border-l-2 border-red-600 pl-3 sm:pl-4 py-2">
                Sua presença digital deixa de ser improvisada e passa a ser estruturada.
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Profile mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative lg:mt-0 mt-8"
          >
            <div className="bg-gradient-to-br from-neutral-900 to-black border border-red-600/30 rounded-2xl overflow-hidden shadow-2xl max-w-lg mx-auto">
              {/* Profile header */}
              <div className="relative h-32 sm:h-40 bg-gradient-to-br from-red-900/30 to-red-600/20">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-30" />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent" />
              </div>

              {/* Profile content */}
              <div className="px-4 sm:px-6 pb-6">
                <div className="flex items-end gap-3 sm:gap-4 -mt-10 sm:-mt-12 mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl border-4 border-black shadow-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl sm:text-3xl">🔥</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl mb-1 truncate">Casa Premium</h3>
                    <p className="text-xs sm:text-sm text-neutral-500">@casapremium</p>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3 py-2 text-sm rounded-lg whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                        activeTab === tab.id
                          ? 'bg-red-600 text-white shadow-lg shadow-red-600/50'
                          : 'bg-neutral-800/50 text-neutral-400 hover:bg-neutral-800'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Content preview */}
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <div className="h-20 sm:h-24 bg-neutral-800/50 rounded-xl border border-red-900/20 flex items-center justify-center">
                    <span className="text-neutral-500 text-xs sm:text-sm text-center px-2">Conteúdo de {tabs.find(t => t.id === activeTab)?.label}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="h-24 sm:h-32 bg-neutral-800/30 rounded-xl" />
                    <div className="h-24 sm:h-32 bg-neutral-800/30 rounded-xl" />
                  </div>
                </motion.div>
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
