import React, { useState } from 'react'
import { FaCheck, FaWhatsapp, FaHeadset, FaDatabase, FaCalendarAlt, FaGraduationCap, FaCog, FaInfinity, FaRocket } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import ContactModal from './ContactModal'

function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')
  const plans = [
    {
      name: "Starter",
      price: "400",
      period: "mês",
      description: "Ideal para clínicas que estão começando com automação",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      features: [
        { icon: FaWhatsapp, text: "WhatsApp incluso" },
        { icon: FaInfinity, text: "2.500 mensagens disponíveis" },
        { icon: FaHeadset, text: "Suporte para problemas" }
      ],
      popular: false
    },
    {
      name: "PRO",
      price: "700",
      period: "mês",
      description: "Para clínicas que precisam de recursos avançados",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-300",
      features: [
        { icon: FaWhatsapp, text: "WhatsApp incluso" },
        { icon: FaInfinity, text: "8.000 mensagens disponíveis" },
        { icon: FaHeadset, text: "Suporte prioritário" },
        { icon: FaDatabase, text: "Conexão com CRM" },
        { icon: FaCalendarAlt, text: "Sistema de agendamento" },
        { icon: FaGraduationCap, text: "Treinamento recorrente atualizado" }
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Customizado",
      period: "",
      description: "Solução completa para grandes operações",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
      borderColor: "border-indigo-300",
      features: [
        { icon: FaWhatsapp, text: "WhatsApp incluso" },
        { icon: FaInfinity, text: "Mensagens ilimitadas" },
        { icon: FaHeadset, text: "Suporte prioritário" },
        { icon: FaDatabase, text: "Conexão com CRM" },
        { icon: FaCalendarAlt, text: "Sistema de agendamento" },
        { icon: FaGraduationCap, text: "Treinamento recorrente atualizado" },
        { icon: FaCog, text: "Sistemas personalizados integrados" },
        { icon: FaRocket, text: "Manutenção prioritária" },
        { icon: HiSparkles, text: "Multi-workflows disponíveis" }
      ],
      popular: false,
      custom: true
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-medical-blue/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Planos e Preços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal para sua clínica. Todos os planos incluem agentes de IA treinados e prontos para uso.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${plan.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative border-2 ${plan.borderColor} ${
                plan.popular ? 'ring-4 ring-purple-300 ring-opacity-50 scale-105' : ''
              } flex flex-col h-full`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#0066CC] to-[#FF6600] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  {plan.custom ? (
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                  ) : (
                    <>
                      <span className="text-3xl font-bold text-gray-900">R$</span>
                      <span className="text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-gray-900 to-gray-700">
                        {plan.price}
                      </span>
                      <span className="text-gray-600">/{plan.period}</span>
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <IconComponent className="text-green-500 text-lg" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">
                        {feature.text}
                      </span>
                    </div>
                  )
                })}
              </div>

              <button
                onClick={() => {
                  setSelectedPlan(plan.name)
                  setIsModalOpen(true)
                }}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${
                  plan.custom
                    ? 'bg-gradient-to-r from-[#0066CC] to-[#000000] hover:from-[#0052A3] hover:to-[#1a1a1a]'
                    : plan.popular
                    ? 'bg-gradient-to-r from-[#FF6600] to-[#0066CC] hover:from-[#E55A00] hover:to-[#0052A3]'
                    : 'bg-gradient-to-r from-[#0066CC] to-[#FF6600] hover:from-[#0052A3] hover:to-[#E55A00]'
                } shadow-lg hover:shadow-xl transform hover:scale-105`}
              >
                {plan.custom ? 'Falar com Vendas' : 'Contratar Agora'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-[#0066CC]/5 to-[#FF6600]/5 rounded-2xl p-6 border-2 border-[#0066CC]/20 mb-6">
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Setup Inicial Personalizado
              </h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                O valor do setup varia conforme a necessidade da clínica, nível de automações desejadas e integrações solicitadas.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Preparamos uma proposta individual para cada cliente, garantindo que você pague apenas pelo que realmente precisa.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  <span>Cancelamento a qualquer momento</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Contato */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planName={selectedPlan}
      />
    </section>
  )
}

export default PricingSection

