export default function DeviceIntegration() {
  const devices = [
    {
      name: "Blood Pressure Monitor",
      icon: "🩺",
      measurements: ["Systolic", "Diastolic", "Pulse"],
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Thermometer",
      icon: "🌡️",
      measurements: ["Body Temperature", "Fever Detection"],
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Pulse Oximeter",
      icon: "❤️",
      measurements: ["SpO2", "Heart Rate", "Pulse Rate"],
      color: "from-blue-500 to-teal-500"
    }
  ]

  return (
    <section className="section bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              🔗 Hardware Integration
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Medical Device Integration
          </h2>
          <p className="text-xl text-gray-600">
            Seamlessly connect Linktop medical devices via Bluetooth for real-time patient monitoring. 
            Readings sync directly into the Meta Health platform.
          </p>
        </div>

        {/* Devices grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {devices.map((device, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className={`bg-gradient-to-br ${device.color} p-8 text-white text-center`}>
                <div className="text-6xl mb-4">{device.icon}</div>
                <h3 className="text-2xl font-bold">{device.name}</h3>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Measurements:</h4>
                <ul className="space-y-2">
                  {device.measurements.map((measurement, mIndex) => (
                    <li key={mIndex} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* How it works */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary-600 to-teal-600 p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-2">How Device Integration Works</h3>
            <p className="text-lg text-blue-100">Seamless data flow from device to doctor</p>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                  1
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Connect Device</h4>
                <p className="text-sm text-gray-600">
                  Patient pairs Linktop device via Bluetooth to Meta Health One app
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <svg className="w-12 h-12 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                  2
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Take Reading</h4>
                <p className="text-sm text-gray-600">
                  Device captures vitals and automatically syncs to the app
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <svg className="w-12 h-12 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                  3
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Real-Time Sync</h4>
                <p className="text-sm text-gray-600">
                  Data instantly appears in doctor's practice management system
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <svg className="w-12 h-12 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Step 4 */}
              <div className="text-center md:col-span-3">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                  4
                </div>
                <h4 className="font-bold text-gray-900 mb-2">AI Analysis & Alerts</h4>
                <p className="text-sm text-gray-600">
                  AI analyzes trends and alerts doctors to abnormal readings automatically
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">For Patients</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="font-semibold text-gray-900">No Manual Entry</div>
                  <div className="text-sm text-gray-600">Vitals automatically recorded and synced</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="font-semibold text-gray-900">Track Health Trends</div>
                  <div className="text-sm text-gray-600">Visual graphs and historical data</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="font-semibold text-gray-900">Peace of Mind</div>
                  <div className="text-sm text-gray-600">Doctors alerted to concerning readings</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">For Doctors</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="font-semibold text-gray-900">Real-Time Patient Data</div>
                  <div className="text-sm text-gray-600">See vitals as patients take them at home</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="font-semibold text-gray-900">Remote Patient Monitoring</div>
                  <div className="text-sm text-gray-600">Monitor chronic patients without office visits</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="font-semibold text-gray-900">Better Clinical Decisions</div>
                  <div className="text-sm text-gray-600">Access to comprehensive patient data history</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
