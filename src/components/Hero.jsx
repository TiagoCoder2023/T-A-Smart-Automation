import React from 'react'
import { HiSparkles } from 'react-icons/hi'
import { FaRobot, FaWhatsapp } from 'react-icons/fa'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-medical-pink/30 to-medical-blue/40 pt-20 pb-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <p className="text-lg md:text-xl text-gray-600 font-medium mb-2">
              T&A Smart Automation
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6 leading-tight">
            Agentes de IA
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] via-[#FF6600] to-[#0066CC]">
              para Clínicas
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Soluções inteligentes de atendimento automatizado que transformam 
            a experiência dos seus pacientes
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2 border-2 border-[#0066CC]/20">
              <HiSparkles className="text-[#FF6600] text-xl" />
              <span className="text-gray-700 font-medium">Atendimento 24/7</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2 border-2 border-[#0066CC]/20">
              <FaRobot className="text-[#0066CC] text-xl" />
              <span className="text-gray-700 font-medium">IA Avançada</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2 border-2 border-[#0066CC]/20">
              <FaWhatsapp className="text-[#FF6600] text-xl" />
              <span className="text-gray-700 font-medium">WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

