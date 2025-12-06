import React from 'react'
import AgentCard from './AgentCard'
import { FaSprayCan, FaStethoscope } from 'react-icons/fa'

function AgentsSection() {
  const agents = [
    {
      name: "Luna",
      clinic: "Clínica de Estética",
      specialty: "Depilação a Laser",
      description: "Atendente virtual especializada em depilação a laser, oferecendo informações sobre procedimentos, valores e agendamentos com tecnologia avançada.",
      color: "from-pink-400 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
      icon: FaSprayCan,
      features: [
        "Atendimento humanizado e empático",
        "Informações sobre procedimentos",
        "Agendamento automatizado",
        "Análise de imagens enviadas",
        "Transcrição de áudios"
      ]
    },
    {
      name: "Aurora",
      clinic: "Clínica Médica",
      specialty: "Cirurgia Plástica",
      description: "Assistente virtual da clínica de cirurgia plástica, fornecendo informações detalhadas sobre procedimentos, consultas e orientações pré e pós-operatórias.",
      color: "from-purple-400 to-indigo-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50",
      icon: FaStethoscope,
      features: [
        "Atendimento especializado em cirurgia plástica",
        "Informações sobre procedimentos",
        "Suporte emocional aos pacientes",
        "Agendamento de consultas",
        "Escalação inteligente para humanos"
      ]
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Nossos Agentes de IA
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça os assistentes virtuais que estão revolucionando o atendimento 
            em clínicas de estética e medicina
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {agents.map((agent, index) => (
            <AgentCard key={index} agent={agent} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AgentsSection

