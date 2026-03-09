import Navigation from './components/Navigation'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Features from './components/Features'
import Ecosystem from './components/Ecosystem'
import AIAutomation from './components/AIAutomation'
import MobileApp from './components/MobileApp'
import DeviceIntegration from './components/DeviceIntegration'
import Modules from './components/Modules'
import ForWho from './components/ForWho'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <Hero />
      <TrustedBy />
      <Features />
      <Ecosystem />
      <AIAutomation />
      <MobileApp />
      <DeviceIntegration />
      <Modules />
      <ForWho />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
