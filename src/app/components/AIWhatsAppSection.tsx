import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { MessageCircle, Bot, Calendar, Tag, Ticket, Crown, Send, Sparkles } from 'lucide-react';

export function AIWhatsAppSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string; icon?: any }>>([]);
  const hasAnimated = useRef(false);

  const aiFeatures = [
    { icon: MessageCircle, label: 'Responder clientes' },
    { icon: Calendar, label: 'Divulgar eventos' },
    { icon: Send, label: 'Enviar informações' },
    { icon: Tag, label: 'Apresentar promoções' },
    { icon: Bot, label: 'Automatizar atendimento' },
    { icon: Sparkles, label: 'Aumentar conversão' },
    { icon: MessageCircle, label: 'Reduzir trabalho operacional' },
    { icon: Crown, label: 'Comunicar clientes autorizados sobre novidades' },
  ];

  const conversation = [
    { sender: 'user' as const, text: 'Oi! Quais eventos vocês têm neste fim de semana?' },
    { sender: 'ai' as const, text: 'Olá! Temos 2 eventos incríveis:', icon: Calendar },
    { sender: 'ai' as const, text: '🔥 Sexta (15/05): Noite Temática às 22h\n⭐ Sábado (16/05): Festa Premium às 23h' },
    { sender: 'user' as const, text: 'Tem desconto?' },
    { sender: 'ai' as const, text: 'Sim! Temos um cupom especial de 30% OFF para você. Quer que eu envie?', icon: Tag },
    { sender: 'user' as const, text: 'Sim!' },
    { sender: 'ai' as const, text: 'Pronto! Cupom PREMIUM30 enviado ✅\nVálido até 16/05', icon: Ticket },
  ];

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      setMessages([]); // Reset messages
      let index = 0;
      const interval = setInterval(() => {
        if (index < conversation.length) {
          setMessages(prev => [...prev, conversation[index]]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 1200);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-b from-black via-red-950/5 to-black overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-20 bg-gradient-to-b from-transparent via-red-500 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                rotate: `${Math.random() * 360}deg`,
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/50 rounded-full px-4 py-2 mb-6">
            <Bot className="w-5 h-5 text-red-400" />
            <span className="text-sm">Powered by AI</span>
          </div>

          <h2 className="text-4xl sm:text-5xl mb-6">
            Inteligência Artificial no WhatsApp para atendimento e conversão.
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Nos planos mais avançados, o estabelecimento pode contar com atendimento automatizado por IA para responder clientes, divulgar eventos, apresentar promoções, enviar informações e reduzir trabalho manual.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - WhatsApp simulation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Phone mockup */}
              <div className="bg-gradient-to-br from-neutral-900 to-black border border-red-600/30 rounded-3xl overflow-hidden shadow-2xl">
                {/* WhatsApp header */}
                <div className="bg-gradient-to-r from-green-700 to-green-800 p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm">Casa Premium - Atendimento IA</h4>
                    <p className="text-xs text-green-200">online</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>

                {/* Chat area */}
                <div className="h-[500px] bg-neutral-950 p-4 overflow-y-auto space-y-3">
                  {messages.filter(msg => msg && msg.sender && msg.text).map((msg, index) => {
                    return (
                      <motion.div
                        key={`${msg.sender}-${index}-${msg.text.substring(0, 10)}`}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                            msg.sender === 'user'
                              ? 'bg-green-700 text-white rounded-tr-sm'
                              : 'bg-neutral-800 text-neutral-100 rounded-tl-sm'
                          }`}
                        >
                          {msg.sender === 'ai' && msg.icon && (
                            <div className="flex items-center gap-2 mb-1">
                              {(() => {
                                const Icon = msg.icon;
                                return <Icon className="w-4 h-4 text-red-400" />;
                              })()}
                              <span className="text-xs text-neutral-500">IA</span>
                            </div>
                          )}
                          <p className="text-sm whitespace-pre-line">{msg.text}</p>
                        </div>
                      </motion.div>
                    );
                  })}

                  {/* Typing indicator */}
                  {messages.length > 0 && messages.length < conversation.length && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-neutral-800 rounded-2xl rounded-tl-sm px-4 py-3">
                        <div className="flex gap-1">
                          <motion.div
                            className="w-2 h-2 bg-neutral-600 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-neutral-600 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-neutral-600 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Input area */}
                <div className="bg-neutral-900 p-3 flex items-center gap-2">
                  <div className="flex-1 bg-neutral-800 rounded-full px-4 py-2">
                    <p className="text-sm text-neutral-500">Digite uma mensagem...</p>
                  </div>
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-red-600/20 to-transparent rounded-3xl blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Right - Features and flow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h3 className="text-2xl mb-6">A IA pode:</h3>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {aiFeatures.map((feature, index) => {
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
                    <Icon className="w-5 h-5 text-red-400 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm">{feature.label}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Flow diagram */}
            <div className="bg-gradient-to-br from-neutral-900 to-black border border-red-600/30 rounded-xl p-6">
              <p className="text-sm text-neutral-500 mb-4">Fluxo de conversão:</p>
              <div className="space-y-3">
                {[
                  { label: 'Cliente pergunta', icon: MessageCircle },
                  { label: 'IA responde', icon: Bot },
                  { label: 'Cliente entra na lista', icon: Calendar },
                  { label: 'Evento ganha conversão', icon: Sparkles },
                ].map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-red-400" />
                      </div>
                      <div className="flex-1 h-2 bg-neutral-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-red-600 to-red-500"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${(index + 1) * 25}%` } : {}}
                          transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                        />
                      </div>
                      <span className="text-xs text-neutral-500">{step.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Impact statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-red-600/20 to-red-600/10 rounded-2xl blur-xl" />
          <div className="relative bg-gradient-to-br from-neutral-900 to-black border border-red-600/50 rounded-2xl p-8 text-center">
            <p className="text-2xl sm:text-3xl bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Sua casa continua atendendo mesmo quando sua equipe não está disponível.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
