export default function DeviceIntegrations() {
  const wearables = [
    { name: 'Apple Watch', icon: '⌚' },
    { name: 'Garmin', icon: '⌚' },
    { name: 'Fitbit', icon: '⌚' },
    { name: 'Samsung Galaxy Watch', icon: '⌚' },
    { name: 'Google Pixel Watch', icon: '⌚' },
    { name: 'Apple HealthKit', icon: '🍎' },
    { name: 'Google Health Connect', icon: '🔗' },
    { name: 'Any BLE Device', icon: '📡' },
  ]

  const rpmDevices = [
    { name: 'Blood Pressure Monitor', icon: '🩸', metric: 'Systolic / Diastolic mmHg' },
    { name: 'Pulse Oximeter', icon: '💓', metric: 'SpO2 % & Heart Rate' },
    { name: 'Glucometer', icon: '🔬', metric: 'Blood Glucose mmol/L' },
    { name: 'Digital Thermometer', icon: '🌡️', metric: 'Body Temperature °C' },
    { name: 'Smart Scale', icon: '⚖️', metric: 'Weight, BMI, Body Fat %' },
    { name: 'ECG Monitor', icon: '💗', metric: '12-Lead ECG Waveforms' },
    { name: 'Spirometer', icon: '🫁', metric: 'FEV1, FVC, Peak Flow' },
    { name: 'Stethoscope', icon: '🩺', metric: 'Digital Auscultation' },
  ]

  return (
    <section id="devices" className="section bg-white overflow-hidden">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🔗 Connected Healthcare Ecosystem
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Integrates With the Devices
            <span className="block text-primary-600">Your Patients Already Use</span>
          </h2>
          <p className="text-xl text-gray-600">
            Meta Health connects with consumer wearables and professional medical-grade remote patient 
            monitoring devices. Patient data flows seamlessly into the platform — giving doctors a 
            complete, real-time picture of patient health.
          </p>
        </div>

        {/* Consumer Wearables */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">Consumer Wearables</h3>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
            Patients sync health data from the devices they already own. Steps, heart rate, sleep, 
            workouts, and more — all flowing into Meta Health automatically.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {wearables.map((device, index) => (
              <div key={index} className="group bg-gray-50 hover:bg-primary-50 border-2 border-gray-100 hover:border-primary-200 rounded-2xl p-6 text-center transition-all duration-300 cursor-default">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{device.icon}</div>
                <div className="font-semibold text-gray-900 text-sm">{device.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RPM Devices */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">Remote Patient Monitoring Devices</h3>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
            Professional medical-grade devices for clinical remote monitoring. Readings sync directly 
            into the practice management system and patient records in real time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {rpmDevices.map((device, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-primary-300 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3">{device.icon}</div>
                <h4 className="font-bold text-gray-900 mb-1">{device.name}</h4>
                <p className="text-sm text-primary-600 font-medium">{device.metric}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Flow Diagram */}
        <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-teal-600 rounded-3xl p-10 lg:p-14 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">The Complete Connected Ecosystem</h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              This is what makes Meta Health different. It's not just software — it's a fully connected 
              healthcare ecosystem where everything talks to everything.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Practice Management */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🖥️</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Practice Management</h4>
              <p className="text-blue-100 text-sm">
                Full web platform for doctors, staff, and admins. Scheduling, billing, clinical notes, 
                medical aid claims — all AI-automated.
              </p>
              <div className="mt-4 text-xs text-teal-300 font-semibold">25+ MODULES</div>
            </div>

            {/* Arrows / Connection */}
            <div className="flex flex-col items-center gap-4">
              <div className="hidden md:flex flex-col items-center">
                <div className="text-4xl mb-2">🔄</div>
                <div className="font-bold text-lg">Real-Time Sync</div>
                <p className="text-blue-200 text-xs text-center mt-2">
                  Data flows automatically between all three pillars. 
                  Doctors see device readings in clinical notes. 
                  Patients see appointments on their phone.
                </p>
              </div>
              {/* Mobile visible connector */}
              <div className="md:hidden text-center">
                <div className="text-3xl">↕️</div>
                <div className="text-sm font-semibold text-teal-300">Real-Time Sync</div>
              </div>
            </div>

            {/* Mobile App */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📱</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Mobile App</h4>
              <p className="text-blue-100 text-sm">
                Meta Health One for patients. Consultations, health tracking, AI assistant, 
                medications, appointments — healthcare in their pocket.
              </p>
              <div className="mt-4 text-xs text-teal-300 font-semibold">iOS & ANDROID</div>
            </div>
          </div>

          {/* Devices row below */}
          <div className="mt-8 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center max-w-md w-full">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⌚</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Devices & Wearables</h4>
              <p className="text-blue-100 text-sm">
                Apple Watch, Garmin, Fitbit, medical-grade RPM devices — 
                patient vitals stream directly into the platform.
              </p>
              <div className="mt-4 text-xs text-teal-300 font-semibold">WEARABLES + RPM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
