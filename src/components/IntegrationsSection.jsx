import React from 'react'
import { FaWhatsapp, FaComments, FaDatabase, FaPlug } from 'react-icons/fa'
import { HiChip } from 'react-icons/hi'

function IntegrationsSection() {
  const integrations = [
    {
      name: "Chatwoot",
      description: "Integração completa com Chatwoot para gerenciamento de conversas e atendimento multicanal.",
      icon: FaComments,
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      name: "CRM",
      description: "Conecte-se com seus sistemas CRM para sincronização automática de dados e histórico de clientes.",
      icon: FaDatabase,
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      name: "Sistemas Internos",
      description: "Integração com sistemas internos da clínica para acesso a agendamentos, prontuários e mais.",
      icon: FaPlug,
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      name: "WhatsApp Business",
      description: "Integração nativa com WhatsApp Business API para comunicação direta e profissional.",
      icon: FaWhatsapp,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      name: "APIs Personalizadas",
      description: "Desenvolvimento de integrações customizadas conforme a necessidade específica da sua clínica.",
      icon: HiChip,
      color: "text-indigo-500",
      bgColor: "bg-indigo-50"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Integrações Disponíveis
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conecte nossos agentes de IA com as ferramentas que sua clínica já utiliza
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {integrations.map((integration, index) => {
            const IconComponent = integration.icon
            return (
              <div 
                key={index}
                className={`${integration.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${integration.color} p-3 rounded-xl bg-white shadow-md`}>
                    <IconComponent className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {integration.name}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {integration.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Precisa de uma integração específica?
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066CC] to-[#FF6600] text-white px-6 py-3 rounded-full shadow-lg">
            <span className="font-semibold">Desenvolvemos integrações customizadas</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntegrationsSection

