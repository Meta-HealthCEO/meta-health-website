export default function Ecosystem() {
  return (
    <section className="section bg-gradient-to-br from-primary-900 via-gray-900 to-teal-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
              🌐 Complete Ecosystem
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            More Than Software.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
              A Complete Healthcare Ecosystem.
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Meta Health is the only platform that connects practice management, mobile apps, 
            and medical devices into one seamless healthcare ecosystem.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Pillar 1 - Practice Management */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6">
              💻
            </div>
            <h3 className="text-2xl font-bold mb-3">Practice Management</h3>
            <p className="text-gray-300 mb-6">
              Complete web-based platform for running your practice, clinic, or hospital.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                Patient management
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                Scheduling & appointments
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                Clinical notes & billing
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                25+ integrated modules
              </li>
            </ul>
          </div>

          {/* Pillar 2 - Mobile App */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center text-3xl mb-6">
              📱
            </div>
            <h3 className="text-2xl font-bold mb-3">Mobile App (iOS + Android)</h3>
            <p className="text-gray-300 mb-6">
              Patient-facing mobile app with AI chatbot, telehealth, and health tracking.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                AI voice health assistant
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                Video consultations
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                Health tracking & wellness
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                Medication management
              </li>
            </ul>
          </div>

          {/* Pillar 3 - Device Integration */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-3xl mb-6">
              🩺
            </div>
            <h3 className="text-2xl font-bold mb-3">Medical Devices</h3>
            <p className="text-gray-300 mb-6">
              Bluetooth-connected Linktop devices for real-time vitals monitoring.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                Blood pressure monitors
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                Pulse oximeters (SpO2)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                Digital thermometers
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                Auto-sync to platform
              </li>
            </ul>
          </div>
        </div>

        {/* Data flow diagram */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center mb-12">How It All Works Together</h3>
          
          <div className="grid md:grid-cols-5 gap-4 items-center">
            {/* Patient */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-xl">
                👤
              </div>
              <div className="font-bold mb-1">Patient</div>
              <div className="text-sm text-gray-400">Uses device at home</div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex justify-center">
              <svg className="w-12 h-12 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            {/* Device */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-xl">
                🩺
              </div>
              <div className="font-bold mb-1">Medical Device</div>
              <div className="text-sm text-gray-400">Captures vitals</div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex justify-center">
              <svg className="w-12 h-12 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            {/* Mobile App */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-xl">
                📱
              </div>
              <div className="font-bold mb-1">Mobile App</div>
              <div className="text-sm text-gray-400">Syncs via Bluetooth</div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex justify-center">
              <svg className="w-12 h-12 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            {/* Cloud Platform */}
            <div className="text-center md:col-span-2">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-xl">
                ☁️
              </div>
              <div className="font-bold mb-1">Meta Health Platform</div>
              <div className="text-sm text-gray-400">AI analyzes & stores data</div>
            </div>

            {/* Arrow down */}
            <div className="hidden md:flex justify-center md:col-span-1">
              <svg className="w-12 h-12 text-teal-400 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            {/* Doctor */}
            <div className="text-center md:col-span-2">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-xl">
                👨‍⚕️
              </div>
              <div className="font-bold mb-1">Doctor</div>
              <div className="text-sm text-gray-400">Views in practice management system</div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-500/30 rounded-xl p-6 text-center">
            <p className="text-lg">
              <span className="font-bold">Real-time data flow:</span> From patient's home → through device → to mobile app → 
              into cloud platform → instantly available to doctor. All automated. All connected.
            </p>
          </div>
        </div>

        {/* Bottom stat */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl px-8 py-6">
            <div className="text-5xl font-bold mb-2">3-in-1</div>
            <div className="text-xl">Practice Management + Mobile App + Device Integration</div>
          </div>
        </div>
      </div>
    </section>
  )
}
