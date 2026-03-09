export default function DeviceIntegration() {
  const consumerWearables = [
    { name: "Apple Watch", icon: "⌚", color: "from-gray-800 to-gray-900" },
    { name: "Garmin", icon: "🏃", color: "from-blue-600 to-blue-700" },
    { name: "Fitbit", icon: "💪", color: "from-teal-500 to-teal-600" },
    { name: "Samsung Galaxy Watch", icon: "⌚", color: "from-blue-500 to-purple-600" },
    { name: "Google Pixel Watch", icon: "⌚", color: "from-green-500 to-blue-500" },
    { name: "HealthKit Compatible", icon: "🍎", color: "from-red-500 to-pink-500" },
    { name: "Google Health Connect", icon: "📱", color: "from-green-600 to-blue-600" }
  ]

  const rpmDevices = [
    {
      name: "Blood Pressure Monitors",
      icon: "🩺",
      measurements: ["Systolic/Diastolic", "Pulse Rate", "Irregular Heartbeat Detection"],
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Pulse Oximeters",
      icon: "❤️",
      measurements: ["SpO2 (Blood Oxygen)", "Heart Rate", "Perfusion Index"],
      color: "from-blue-500 to-teal-500"
    },
    {
      name: "Glucometers",
      icon: "💉",
      measurements: ["Blood Glucose", "Trends & Patterns", "Pre/Post Meal Tracking"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Thermometers",
      icon: "🌡️",
      measurements: ["Body Temperature", "Fever Detection", "Historical Trends"],
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Smart Scales",
      icon: "⚖️",
      measurements: ["Weight", "BMI", "Body Composition"],
      color: "from-green-500 to-teal-500"
    },
    {
      name: "ECG Monitors",
      icon: "💓",
      measurements: ["Heart Rhythm", "Atrial Fibrillation", "ECG Recording"],
      color: "from-pink-500 to-red-500"
    },
    {
      name: "Spirometers",
      icon: "🫁",
      measurements: ["Lung Function", "FEV1/FVC", "Respiratory Health"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Continuous Glucose Monitors",
      icon: "📊",
      measurements: ["Real-time Glucose", "Trends & Alerts", "Time in Range"],
      color: "from-indigo-500 to-purple-500"
    }
  ]

  return (
    <section className="section bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              🔗 Comprehensive Device Integration
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Connect Any Device. Track Everything.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Meta Health integrates with consumer wearables patients already own AND professional 
            medical-grade RPM devices. Data flows seamlessly into the platform, giving you a 
            complete real-time picture of patient health.
          </p>
        </div>

        {/* Consumer Wearables Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Consumer Wearables</h3>
            <p className="text-lg text-gray-600">
              Works with the devices your patients already own
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {consumerWearables.map((device, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${device.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  {device.icon}
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-gray-900 text-sm leading-tight">{device.name}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Integration badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-white rounded-full px-6 py-3 shadow-md border border-gray-200">
              <span className="text-sm font-semibold text-gray-700">🍎 HealthKit Integration</span>
            </div>
            <div className="bg-white rounded-full px-6 py-3 shadow-md border border-gray-200">
              <span className="text-sm font-semibold text-gray-700">📱 Google Health Connect</span>
            </div>
            <div className="bg-white rounded-full px-6 py-3 shadow-md border border-gray-200">
              <span className="text-sm font-semibold text-gray-700">⌚ Native Wear OS</span>
            </div>
          </div>
        </div>

        {/* RPM Devices Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Medical-Grade RPM Devices</h3>
            <p className="text-lg text-gray-600">
              Professional remote patient monitoring with clinical-grade accuracy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rpmDevices.map((device, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className={`bg-gradient-to-br ${device.color} p-6 text-white text-center`}>
                  <div className="text-5xl mb-3">{device.icon}</div>
                  <h4 className="text-lg font-bold">{device.name}</h4>
                </div>
                <div className="p-5">
                  <ul className="space-y-2">
                    {device.measurements.map((measurement, mIndex) => (
                      <li key={mIndex} className="flex items-start gap-2 text-sm">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">{measurement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How it works - Enhanced */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-16">
          <div className="bg-gradient-to-r from-primary-600 via-teal-600 to-blue-600 p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-3">Seamless Data Flow</h3>
            <p className="text-xl text-blue-100">From any device to complete clinical insight</p>
          </div>
          
          <div className="p-8 md:p-12">
            {/* Visual flow */}
            <div className="grid md:grid-cols-5 gap-6 items-center mb-12">
              {/* Patient */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-xl">
                  👤
                </div>
                <div className="font-bold text-gray-900 mb-1">Patient</div>
                <div className="text-sm text-gray-600">Uses any device</div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center">
                <svg className="w-12 h-12 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Device */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-xl">
                  ⌚
                </div>
                <div className="font-bold text-gray-900 mb-1">Any Device</div>
                <div className="text-sm text-gray-600">Wearable or RPM</div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center">
                <svg className="w-12 h-12 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Mobile App */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-xl">
                  📱
                </div>
                <div className="font-bold text-gray-900 mb-1">Meta Health App</div>
                <div className="text-sm text-gray-600">Auto-sync</div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center">
                <svg className="w-12 h-12 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Cloud */}
              <div className="text-center md:col-span-3">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-xl">
                  ☁️
                </div>
                <div className="font-bold text-gray-900 mb-1">Meta Health Cloud</div>
                <div className="text-sm text-gray-600">AI analysis & storage</div>
              </div>

              {/* Arrow down */}
              <div className="hidden md:flex justify-center md:col-span-2">
                <svg className="w-12 h-12 text-teal-500 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Doctor Dashboard */}
              <div className="text-center md:col-start-2 md:col-span-3">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-xl">
                  👨‍⚕️
                </div>
                <div className="font-bold text-gray-900 mb-1">Doctor Dashboard</div>
                <div className="text-sm text-gray-600">Real-time clinical view</div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-1">Real-Time</div>
                <div className="text-sm text-gray-700">Data sync (under 1 minute)</div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 text-center border border-teal-200">
                <div className="text-3xl font-bold text-teal-600 mb-1">24/7</div>
                <div className="text-sm text-gray-700">Continuous monitoring</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center border border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-1">Automatic</div>
                <div className="text-sm text-gray-700">No manual data entry</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-1">AI-Powered</div>
                <div className="text-sm text-gray-700">Intelligent alerts & insights</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 border-2 border-teal-500/30 rounded-xl p-6 text-center">
              <p className="text-lg text-gray-800">
                <span className="font-bold">Universal Integration:</span> Whether your patient uses an Apple Watch, 
                Fitbit, or a medical-grade blood pressure monitor, all data flows into one unified platform. 
                No device left behind.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits section - Enhanced */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100 hover:border-blue-300 transition-colors">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
              👥
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">For Patients</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="font-semibold text-gray-900">Use Devices You Own</div>
                  <div className="text-sm text-gray-600">No need to buy new hardware</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="font-semibold text-gray-900">Automatic Tracking</div>
                  <div className="text-sm text-gray-600">No manual entry required</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="font-semibold text-gray-900">Complete Health Picture</div>
                  <div className="text-sm text-gray-600">All metrics in one place</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="font-semibold text-gray-900">Share with Doctor Instantly</div>
                  <div className="text-sm text-gray-600">Real-time data visibility</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-teal-100 hover:border-teal-300 transition-colors">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
              👨‍⚕️
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">For Doctors</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="font-semibold text-gray-900">Comprehensive Patient Data</div>
                  <div className="text-sm text-gray-600">All vitals from all devices</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="font-semibold text-gray-900">Remote Patient Monitoring</div>
                  <div className="text-sm text-gray-600">Track chronic conditions 24/7</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="font-semibold text-gray-900">AI-Powered Alerts</div>
                  <div className="text-sm text-gray-600">Notified of concerning readings</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="font-semibold text-gray-900">Better Clinical Decisions</div>
                  <div className="text-sm text-gray-600">Data-driven treatment plans</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-100 hover:border-purple-300 transition-colors">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
              🏥
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">For Practices</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="font-semibold text-gray-900">Competitive Advantage</div>
                  <div className="text-sm text-gray-600">Modern remote care offering</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="font-semibold text-gray-900">Reduce Office Visits</div>
                  <div className="text-sm text-gray-600">Monitor patients remotely</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="font-semibold text-gray-900">Improve Patient Outcomes</div>
                  <div className="text-sm text-gray-600">Early intervention capability</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="font-semibold text-gray-900">RPM Billing Opportunities</div>
                  <div className="text-sm text-gray-600">Generate additional revenue</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-primary-600 via-teal-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Universal Device Integration. Infinite Possibilities.
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            From consumer wearables to medical-grade RPM devices, Meta Health connects them all. 
            Give your patients the freedom to use any device while you get the complete clinical picture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4 inline-block shadow-xl">
              See Device Integration in Action
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
