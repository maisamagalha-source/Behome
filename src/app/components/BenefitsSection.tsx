import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, Home, Calendar, Users, ListChecks, Crown, Lock, Tag, MapPin, Ticket, Bot, TrendingUp } from 'lucide-react';

export function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Shield,
      title: 'Ambiente sem censura tradicional',
      description: 'Um espaço criado para o segmento.',
    },
    {
      icon: Home,
      title: 'Perfil profissional próprio',
      description: 'Sua casa com presença digital estruturada.',
    },
    {
      icon: Calendar,
      title: 'Divulgação de eventos',
      description: 'Programações, festas, shows e experiências em destaque.',
    },
    {
      icon: Users,
      title: 'Lista própria de clientes',
      description: 'Seguidores organizados dentro da plataforma.',
    },
    {
      icon: ListChecks,
      title: 'Lista de presença digital',
      description: 'Mais previsão, organização e engajamento.',
    },
    {
      icon: Crown,
      title: 'Assinaturas VIP',
      description: 'Receita recorrente mensal para sua casa.',
    },
    {
      icon: Lock,
      title: 'Conteúdos exclusivos',
      description: 'Controle de acesso por público, seguidores, VIP e Super VIP.',
    },
    {
      icon: Tag,
      title: 'Cupons promocionais',
      description: 'Campanhas com QR Code, validade e limite de uso.',
    },
    {
      icon: MapPin,
      title: 'Check-in privado',
      description: 'Engajamento com mais discrição.',
    },
    {
      icon: Ticket,
      title: 'Venda de ingressos',
      description: 'Pré-venda, lotes e validação integrada.',
    },
    {
      icon: Bot,
      title: 'Automação por IA',
      description: 'Atendimento, divulgação e conversão via WhatsApp.',
    },
    {
      icon: TrendingUp,
      title: 'Mais controle e recorrência',
      description: 'Sua audiência em um ambiente feito para o seu mercado.',
    },
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
            O que sua casa ganha com o Balada Erótica
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Card */}
                <div className="relative bg-gradient-to-br from-neutral-900 to-black border border-red-900/30 rounded-2xl p-6 group-hover:border-red-600/50 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors group-hover:scale-110 transform duration-300">
                    <Icon className="w-7 h-7 text-red-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl mb-3 group-hover:text-red-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100"
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                  >
                    <div className="text-red-400 text-sm">→</div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
