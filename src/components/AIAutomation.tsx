export default function AIAutomation() {
  const aiFeatures = [
    {
      title: "AI Clinical Notes",
      description: "Auto-generate comprehensive clinical notes from consultations. Our AI listens, understands, and documents — saving you hours every day.",
      icon: "📝"
    },
    {
      title: "AI-Powered Billing",
      description: "Intelligent billing code suggestions, automated claim generation, and error detection before submission. Maximize revenue with zero effort.",
      icon: "💰"
    },
    {
      title: "Smart Scheduling",
      description: "AI optimizes your appointment schedule, predicts no-shows, suggests optimal booking times, and automatically handles rescheduling.",
      icon: "📅"
    },
    {
      title: "Intelligent Insights",
      description: "Get actionable insights from your practice data. Predict patient outcomes, identify trends, and optimize operations with AI analytics.",
      icon: "📊"
    }
  ]

  return (
    <section className="section bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                🤖 AI-First Platform
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Fully Automated with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                Artificial Intelligence
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Meta Health isn't just practice management software — it's your AI-powered healthcare assistant. 
              Every module is enhanced with artificial intelligence to automate repetitive tasks, 
              reduce errors, and free up your time for what matters: patient care.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">80%</div>
                <div className="text-sm text-gray-300">Time Saved</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">99%</div>
                <div className="text-sm text-gray-300">Accuracy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-gray-300">AI Support</div>
              </div>
            </div>
          </div>

          {/* Right features grid */}
          <div className="space-y-6">
            {aiFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4">
              Stop Doing Paperwork. Start Treating Patients.
            </h3>
            <p className="text-xl mb-6 text-white/90">
              Let AI handle the administrative burden while you focus on healthcare.
            </p>
            <a href="#pricing" className="btn bg-white text-primary-600 hover:bg-gray-100 inline-block">
              Experience AI Automation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
