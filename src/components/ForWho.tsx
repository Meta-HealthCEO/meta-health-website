export default function ForWho() {
  const audiences = [
    {
      title: "Medical Practices",
      description: "Perfect for solo practitioners and group practices. Manage appointments, patient records, billing, and clinical notes — all in one place.",
      features: [
        "Patient management",
        "Appointment scheduling",
        "Medical aid billing",
        "Clinical notes & templates",
        "Prescription management"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Clinics & Day Hospitals",
      description: "Scale your operations with multi-provider scheduling, resource management, and comprehensive reporting for clinic administrators.",
      features: [
        "Multi-provider scheduling",
        "Resource allocation",
        "Staff management",
        "Lab order integration",
        "Inventory management"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: "from-teal-500 to-teal-600"
    },
    {
      title: "Hospitals",
      description: "Enterprise-grade hospital management with ward tracking, OR scheduling, bed allocation, and department-level reporting.",
      features: [
        "Ward & bed management",
        "Operating room scheduling",
        "Department tracking",
        "Advanced reporting",
        "Multi-facility support"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: "from-purple-500 to-purple-600"
    }
  ]

  return (
    <section id="for-who" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Built For Every Healthcare Provider
          </h2>
          <p className="text-xl text-gray-600">
            Whether you're a solo practitioner, a multi-provider clinic, or a large hospital, 
            Meta Health scales to meet your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-br ${audience.gradient} text-white p-8`}>
                <div className="mb-4">{audience.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{audience.title}</h3>
                <p className="text-white/90">{audience.description}</p>
              </div>

              {/* Features list */}
              <div className="p-8">
                <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                <ul className="space-y-3">
                  {audience.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-100 rounded-full px-8 py-4">
            <p className="text-gray-700">
              <span className="font-semibold">All plans include:</span> Unlimited users • Cloud storage • Mobile apps • 24/7 support
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
