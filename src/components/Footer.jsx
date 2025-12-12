import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import n8nIcon from '../assets/n8n-color.svg'
import openaiIcon from '../assets/openai.svg'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-display font-bold mb-4">
            T&A Smart Automation
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Soluções inteligentes de automação que transformam o atendimento 
            em clínicas de estética e medicina, proporcionando uma experiência 
            excepcional para seus pacientes.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <img src={openaiIcon} alt="OpenAI" className="w-6 h-6 brightness-0 invert" />
              <span>IA Avançada GPT-4o</span>
            </div>
            <div className="flex items-center gap-2">
              <FaWhatsapp className="text-2xl text-[#FF6600]" />
              <span>WhatsApp Integration</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={n8nIcon} alt="n8n" className="w-6 h-6" />
              <span>n8n Automation</span>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              © 2024 T&A Smart Automation. Tecnologia que transforma atendimentos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

