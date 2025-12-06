import React from 'react'
import { HiCheckCircle } from 'react-icons/hi'

function AgentCard({ agent }) {
  const IconComponent = agent.icon
  
  return (
    <div className={`${agent.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <IconComponent className="text-4xl text-gray-700" />
            <h3 className="text-3xl font-display font-bold text-gray-900">
              {agent.name}
            </h3>
          </div>
          <p className="text-lg font-semibold text-gray-700 mb-1">
            {agent.clinic}
          </p>
          <p className="text-sm text-gray-600">
            {agent.specialty}
          </p>
        </div>
      </div>
      
      <p className="text-gray-700 mb-6 leading-relaxed">
        {agent.description}
      </p>
      
      <div className="space-y-3">
        <h4 className="font-semibold text-gray-900 mb-3">Funcionalidades:</h4>
        <ul className="space-y-2">
          {agent.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <HiCheckCircle className="text-[#FF6600] mt-1 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AgentCard

