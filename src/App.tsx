import Hero from './components/Hero'
import Features from './components/Features'
import AIAutomation from './components/AIAutomation'
import ForWho from './components/ForWho'
import HowItWorks from './components/HowItWorks'
import Modules from './components/Modules'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <AIAutomation />
      <ForWho />
      <Modules />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
