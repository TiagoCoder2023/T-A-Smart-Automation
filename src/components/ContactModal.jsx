import React, { useState, useEffect } from 'react'
import { FaTimes, FaWhatsapp, FaBuilding, FaUser, FaPhone, FaTag } from 'react-icons/fa'

function ContactModal({ isOpen, onClose, planName, billingPeriod = 'monthly' }) {
  const [formData, setFormData] = useState({
    companyName: '',
    personName: '',
    contactNumber: '',
    planType: planName || ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  useEffect(() => {
    if (planName) {
      setFormData(prev => ({ ...prev, planType: planName }))
    }
  }, [planName])
  
  const getPeriodLabel = (period) => {
    if (period === 'monthly') return 'Mensal'
    if (period === 'semiannual') return 'Semestral (10% OFF)'
    if (period === 'annual') return 'Anual (15% OFF)'
    return 'Mensal'
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Formata a mensagem para WhatsApp
    const message = `Olá! Gostaria de contratar o plano ${formData.planType}.\n\n` +
      `*Informações do Cliente:*\n` +
      `🏢 Empresa: ${formData.companyName}\n` +
      `👤 Nome: ${formData.personName}\n` +
      `📱 Contato: ${formData.contactNumber}\n` +
      `📦 Plano: ${formData.planType}\n` +
      `📅 Período: ${getPeriodLabel(billingPeriod)}`

    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(message)
    
    // Número do WhatsApp (formato internacional: código país + DDD + número)
    // 44 988172952 -> 55 44 988172952 (Brasil + DDD + número)
    const whatsappNumber = '5544988172952'
    
    // Cria o link do WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    // Abre o WhatsApp Web/App
    window.open(whatsappUrl, '_blank')
    
    // Simula um pequeno delay para melhor UX
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false)
        onClose()
        // Reset form
        setFormData({
          companyName: '',
          personName: '',
          contactNumber: '',
          planType: planName || ''
        })
      }, 2000)
    }, 500)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-display font-bold text-gray-900">
              Solicitar Contratação
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          {isSuccess ? (
            <div className="text-center py-8">
              <div className="mb-4">
                <FaWhatsapp className="text-6xl text-green-500 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Redirecionando para WhatsApp...
              </h3>
              <p className="text-gray-600">
                Você será redirecionado para o WhatsApp para finalizar o contato.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nome da Empresa */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <FaBuilding className="text-[#0066CC]" />
                  Nome da Empresa
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0066CC] focus:border-transparent outline-none transition-all"
                  placeholder="Digite o nome da empresa"
                />
              </div>

              {/* Nome da Pessoa */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <FaUser className="text-[#FF6600]" />
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="personName"
                  value={formData.personName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0066CC] focus:border-transparent outline-none transition-all"
                  placeholder="Digite seu nome completo"
                />
              </div>

              {/* Número para Contato */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <FaPhone className="text-[#0066CC]" />
                  Número para Contato
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0066CC] focus:border-transparent outline-none transition-all"
                  placeholder="(00) 00000-0000"
                  pattern="[0-9\s\(\)\-]+"
                />
              </div>

              {/* Tipo de Plano */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <FaTag className="text-[#FF6600]" />
                  Plano Selecionado
                </label>
                <select
                  name="planType"
                  value={formData.planType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0066CC] focus:border-transparent outline-none transition-all bg-white"
                  disabled={!!planName}
                >
                  <option value="">Selecione o plano</option>
                  <option value="Starter">Starter - R$ 390/mês</option>
                  <option value="PRO">PRO - R$ 700/mês</option>
                  <option value="Enterprise">Enterprise - Customizado</option>
                </select>
              </div>

              {/* Botões */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-[#0066CC] to-[#FF6600] text-white rounded-xl font-semibold hover:from-[#0052A3] hover:to-[#E55A00] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FaWhatsapp />
                      Enviar via WhatsApp
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactModal

