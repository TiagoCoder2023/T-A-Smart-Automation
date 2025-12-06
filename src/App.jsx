import React, { useState } from 'react'
import Hero from './components/Hero'
import AgentsSection from './components/AgentsSection'
import FeaturesSection from './components/FeaturesSection'
import IntegrationsSection from './components/IntegrationsSection'
import PricingSection from './components/PricingSection'
import Footer from './components/Footer'
import TechnologiesPage from './components/TechnologiesPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  if (currentPage === 'technologies') {
    return <TechnologiesPage onBack={() => setCurrentPage('home')} />
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <AgentsSection />
      <FeaturesSection />
      <IntegrationsSection />
      <PricingSection />
      <TechnologiesSection onNavigate={() => setCurrentPage('technologies')} />
      <Footer />
    </div>
  )
}

function TechnologiesSection({ onNavigate }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Tecnologias Utilizadas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Conheça as tecnologias de ponta que utilizamos para criar nossos agentes de IA
          </p>
          <button
            onClick={onNavigate}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066CC] to-[#FF6600] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span>Explorar Tecnologias</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default App
