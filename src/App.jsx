import React from 'react'
import Hero from './components/Hero'
import AgentsSection from './components/AgentsSection'
import FeaturesSection from './components/FeaturesSection'
import IntegrationsSection from './components/IntegrationsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AgentsSection />
      <FeaturesSection />
      <IntegrationsSection />
      <Footer />
    </div>
  )
}

export default App

