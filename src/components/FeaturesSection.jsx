import React from 'react'
import { 
  FaMicrophone, 
  FaClipboardList, 
  FaUser, 
  FaCalendarAlt, 
  FaSearch, 
  FaBrain, 
  FaComments,
  FaBan,
  FaUnlock,
  FaUsers,
  FaHashtag,
  FaImage,
  FaEnvelope,
  FaHospital
} from 'react-icons/fa'

function FeaturesSection() {
  const lunaFeatures = [
    {
      title: "Processamento Multimodal",
      description: "Processa mensagens de texto, áudio e imagens. Transcreve áudios automaticamente e analisa imagens usando IA para entender o contexto da conversa.",
      icon: FaMicrophone
    },
    {
      title: "Sistema de Fila Inteligente",
      description: "Cria uma fila de mensagens para agrupar múltiplas mensagens recebidas em sequência, garantindo respostas mais contextuais e organizadas.",
      icon: FaClipboardList
    },
    {
      title: "Cadastro Automatizado",
      description: "Coleta informações do cliente (nome, email, data de nascimento, endereço) e realiza cadastro automático na plataforma de agendamento.",
      icon: FaUser
    },
    {
      title: "Geração de Links de Agendamento",
      description: "Gera links personalizados para agendamento online, permitindo que clientes escolham horários disponíveis de forma autônoma.",
      icon: FaCalendarAlt
    },
    {
      title: "Consulta de Agendamentos",
      description: "Permite consultar todos os agendamentos do cliente, mostrando data/hora e descrição dos procedimentos agendados.",
      icon: FaSearch
    },
    {
      title: "Memória Conversacional",
      description: "Mantém contexto das conversas anteriores usando PostgreSQL, garantindo continuidade e personalização no atendimento.",
      icon: FaBrain
    },
    {
      title: "Envio Inteligente de Mensagens",
      description: "Separa respostas longas em múltiplas mensagens menores, enviando uma por vez com intervalos, simulando conversação natural.",
      icon: FaComments
    }
  ]

  const auroraFeatures = [
    {
      title: "Bloqueio por Interferência Humana",
      description: "Sistema inteligente que detecta quando um humano assume o atendimento e bloqueia temporariamente o bot para evitar conflitos.",
      icon: FaBan
    },
    {
      title: "Comando de Desbloqueio",
      description: "Permite desbloquear o bot manualmente através de comando específico quando necessário retomar o atendimento automatizado.",
      icon: FaUnlock
    },
    {
      title: "Escalação Automática",
      description: "Após 15 mensagens trocadas, o sistema automaticamente escala a conversa para atendimento humano, garantindo qualidade.",
      icon: FaUsers
    },
    {
      title: "Contador de Mensagens",
      description: "Rastreia o número de mensagens trocadas com cada cliente para controle de qualidade e escalação adequada.",
      icon: FaHashtag
    },
    {
      title: "Processamento de Mídia",
      description: "Converte arquivos base64 em formatos utilizáveis (áudio OGG, imagens JPEG) para processamento pela IA.",
      icon: FaImage
    },
    {
      title: "Notificações de Erro",
      description: "Sistema de alertas por email quando ocorrem erros na automação, permitindo monitoramento e correção rápida.",
      icon: FaEnvelope
    },
    {
      title: "Atendimento Especializado",
      description: "Conhecimento especializado em cirurgia plástica, fornecendo informações detalhadas sobre procedimentos, técnicas e cuidados.",
      icon: FaHospital
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Funcionalidades das Automações
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tecnologias avançadas que tornam nossos agentes inteligentes e eficientes
          </p>
        </div>

        {/* Agente Luna */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-2">
              Agente Luna - Clínica de Estética
            </h3>
            <p className="text-gray-600">Funcionalidades específicas do agente de depilação a laser</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {lunaFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <IconComponent className="text-4xl mb-4 text-[#FF6600]" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Agente Aurora */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-2">
              Agente Aurora - Clínica Médica
            </h3>
            <p className="text-gray-600">Funcionalidades específicas do agente de cirurgia plástica</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {auroraFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <IconComponent className="text-4xl mb-4 text-[#0066CC]" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

