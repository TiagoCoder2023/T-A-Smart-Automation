import React, { useState } from 'react'
import { FaDatabase, FaServer, FaCode, FaCloud, FaWhatsapp } from 'react-icons/fa'
import { SiPostgresql, SiRedis, SiMeta, SiPython, SiJavascript } from 'react-icons/si'
import { HiArrowLeft } from 'react-icons/hi'
import n8nIcon from '../assets/n8n-color.svg'
import openaiIcon from '../assets/openai.svg'

function TechnologiesPage({ onBack }) {
  const [expandedTech, setExpandedTech] = useState(null)

  const technologies = [
    {
      id: 'n8n',
      name: 'n8n',
      description: 'Plataforma de automação de workflows open-source que permite criar automações complexas conectando diferentes serviços e APIs. Utilizamos o n8n para orquestrar todo o fluxo de comunicação entre WhatsApp, IA e sistemas internos.',
      icon: null,
      color: 'text-[#FF6D5A]',
      bgColor: 'bg-[#FF6D5A]/10',
      borderColor: 'border-[#FF6D5A]/30',
      details: [
        'Workflows visuais e intuitivos',
        'Integração com múltiplas APIs',
        'Processamento de eventos em tempo real',
        'Escalabilidade e confiabilidade'
      ]
    },
    {
      id: 'evolution-api',
      name: 'Evolution API',
      description: 'API profissional para integração com WhatsApp Business que oferece funcionalidades avançadas de comunicação. Utilizada para receber e enviar mensagens, gerenciar contatos e processar mídias.',
      icon: FaWhatsapp,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      details: [
        'Envio e recebimento de mensagens',
        'Suporte a mídias (imagens, áudios, vídeos)',
        'Gestão de múltiplas instâncias',
        'Webhooks para eventos em tempo real'
      ]
    },
    {
      id: 'meta-business',
      name: 'Meta Business API',
      description: 'API oficial do Meta (Facebook) para integração com WhatsApp Business. Fornece acesso seguro e escalável às funcionalidades do WhatsApp Business, garantindo conformidade com as políticas da plataforma.',
      icon: SiMeta,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      details: [
        'Integração oficial com WhatsApp Business',
        'Conformidade com políticas do Meta',
        'Alta escalabilidade',
        'Suporte a templates de mensagens'
      ]
    },
    {
      id: 'postgresql',
      name: 'PostgreSQL',
      description: 'Sistema de gerenciamento de banco de dados relacional open-source de alto desempenho. Utilizado para armazenar histórico de conversas, contexto dos agentes de IA e dados dos clientes de forma segura e estruturada.',
      icon: SiPostgresql,
      color: 'text-[#336791]',
      bgColor: 'bg-[#336791]/10',
      borderColor: 'border-[#336791]/30',
      details: [
        'Armazenamento de histórico de conversas',
        'Memória conversacional para IA',
        'Dados estruturados e relacionais',
        'Alta performance e confiabilidade'
      ]
    },
    {
      id: 'redis',
      name: 'Redis',
      description: 'Banco de dados em memória de alta performance usado para cache e gerenciamento de filas. Utilizado para criar filas de mensagens, controlar bloqueios de automação e otimizar a performance do sistema.',
      icon: SiRedis,
      color: 'text-[#DC382D]',
      bgColor: 'bg-[#DC382D]/10',
      borderColor: 'border-[#DC382D]/30',
      details: [
        'Fila de mensagens inteligente',
        'Cache de alta performance',
        'Controle de bloqueios temporários',
        'Processamento em tempo real'
      ]
    },
    {
      id: 'python',
      name: 'Python',
      description: 'Linguagem de programação de alto nível amplamente utilizada para desenvolvimento backend, processamento de dados e integração com APIs. Utilizada para criar scripts de automação, processar dados e integrar sistemas.',
      icon: SiPython,
      color: 'text-[#3776AB]',
      bgColor: 'bg-[#3776AB]/10',
      borderColor: 'border-[#3776AB]/30',
      details: [
        'Processamento de dados e APIs',
        'Scripts de automação',
        'Integração com serviços externos',
        'Bibliotecas robustas e comunidade ativa'
      ]
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      description: 'Linguagem de programação essencial para desenvolvimento web moderno. Utilizada tanto no frontend quanto no backend (Node.js) para criar interfaces interativas, processar requisições e integrar com APIs.',
      icon: SiJavascript,
      color: 'text-[#F7DF1E]',
      bgColor: 'bg-[#F7DF1E]/10',
      borderColor: 'border-[#F7DF1E]/30',
      details: [
        'Desenvolvimento frontend e backend',
        'Processamento assíncrono',
        'Integração com APIs REST',
        'Ecossistema Node.js e npm'
      ]
    },
    {
      id: 'openai',
      name: 'OpenAI',
      description: 'Plataforma de inteligência artificial que fornece modelos avançados de linguagem natural. Utilizamos o GPT-4o para processar conversas, entender contexto, gerar respostas humanizadas e analisar imagens e áudios enviados pelos clientes.',
      icon: null,
      color: 'text-[#10A37F]',
      bgColor: 'bg-[#10A37F]/10',
      borderColor: 'border-[#10A37F]/30',
      details: [
        'Processamento de linguagem natural (NLP)',
        'Análise de imagens e áudios',
        'Geração de respostas contextualizadas',
        'Memória conversacional inteligente'
      ]
    }
  ]

  const toggleExpand = (techId) => {
    setExpandedTech(expandedTech === techId ? null : techId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-medical-blue/20 py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <HiArrowLeft className="text-xl" />
            <span className="font-medium">Voltar ao portfólio</span>
          </button>
          
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-4">
            Tecnologias Utilizadas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Conheça as tecnologias de ponta que utilizamos para criar nossos agentes de IA inteligentes e eficientes
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {technologies.map((tech) => {
            const IconComponent = tech.icon
            const isExpanded = expandedTech === tech.id
            
            return (
              <div
                key={tech.id}
                className={`${tech.bgColor} rounded-2xl p-6 border-2 ${tech.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-auto`}
                onClick={() => toggleExpand(tech.id)}
              >
                <div className="flex items-start gap-4">
                  <div className={`${tech.color} p-4 rounded-xl bg-white shadow-md flex-shrink-0 flex items-center justify-center`}>
                    {tech.id === 'n8n' ? (
                      <img src={n8nIcon} alt="n8n" className="w-10 h-10" />
                    ) : tech.id === 'openai' ? (
                      <img src={openaiIcon} alt="OpenAI" className="w-10 h-10" />
                    ) : IconComponent ? (
                      <IconComponent className="text-4xl" />
                    ) : null}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                      {tech.name}
                    </h3>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${
                      isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {tech.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <h4 className="font-semibold text-gray-900 text-sm">Principais funcionalidades:</h4>
                        <ul className="space-y-1">
                          {tech.details.map((detail, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="text-green-500 mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm text-gray-500">
                        {isExpanded ? 'Clique para recolher' : 'Clique para expandir'}
                      </span>
                      <div className={`transform transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl shadow-lg">
          <p className="text-gray-600 mb-2">
            <strong className="text-gray-900">Todas essas tecnologias</strong> trabalham em conjunto para criar uma experiência de atendimento automatizado completa e eficiente.
          </p>
          <p className="text-sm text-gray-500">
            Integração perfeita entre automação, IA e comunicação
          </p>
        </div>
      </div>
    </div>
  )
}

export default TechnologiesPage

