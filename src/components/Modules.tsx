export default function Modules() {
  const modules = [
    { name: "Patient Management", icon: "👥" },
    { name: "Appointment Scheduling", icon: "📅" },
    { name: "Clinical Notes", icon: "📝" },
    { name: "Video Consultations", icon: "🎥" },
    { name: "Prescription Management", icon: "💊" },
    { name: "Lab Orders", icon: "🔬" },
    { name: "Vitals Tracking", icon: "❤️" },
    { name: "Medical Aid Billing", icon: "💳" },
    { name: "Invoicing", icon: "🧾" },
    { name: "Payments", icon: "💰" },
    { name: "Accounting", icon: "📊" },
    { name: "Bank Reconciliation", icon: "🏦" },
    { name: "Inventory Management", icon: "📦" },
    { name: "Staff Management", icon: "👨‍⚕️" },
    { name: "Access Control", icon: "🔐" },
    { name: "Patient Portal", icon: "🌐" },
    { name: "Messaging", icon: "💬" },
    { name: "Notifications", icon: "🔔" },
    { name: "Referrals", icon: "🔄" },
    { name: "Reports & Analytics", icon: "📈" },
    { name: "System Administration", icon: "⚙️" },
    { name: "Facility Management", icon: "🏥" },
    { name: "Encounter Tracking", icon: "📋" },
    { name: "GoodX Integration", icon: "🔗" }
  ]

  return (
    <section className="section bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            25+ Integrated Modules
          </h2>
          <p className="text-xl text-gray-600">
            Every tool you need, seamlessly integrated into one powerful platform. 
            No juggling multiple systems or duplicate data entry.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-3xl mb-2">{module.icon}</div>
              <div className="text-sm font-semibold text-gray-800">{module.name}</div>
            </div>
          ))}
        </div>

        {/* Integration note */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Everything Works Together
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Unlike cobbled-together software suites, Meta Health is a unified platform 
                where every module shares the same data, speaks the same language, and works 
                seamlessly together. No integration nightmares. No duplicate data entry.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Real-time data sync across all modules</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Single patient record, infinite views</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Automated workflows between modules</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-teal-500 rounded-2xl p-8 text-white">
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <span>📅 Appointment</span>
                    <span className="text-2xl">→</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <span>📝 Clinical Note</span>
                    <span className="text-2xl">→</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <span>💊 Prescription</span>
                    <span className="text-2xl">→</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <span>💳 Billing</span>
                    <span className="text-2xl">✓</span>
                  </div>
                </div>
                <div className="mt-6 text-center text-sm opacity-90">
                  Seamless workflow automation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
