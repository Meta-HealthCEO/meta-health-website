import Hero from './components/Hero'
import Features from './components/Features'
import Ecosystem from './components/Ecosystem'
import MobileApp from './components/MobileApp'
import DeviceIntegration from './components/DeviceIntegration'
import AIAutomation from './components/AIAutomation'
import ForWho from './components/ForWho'
import Modules from './components/Modules'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Ecosystem />
      <MobileApp />
      <DeviceIntegration />
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
