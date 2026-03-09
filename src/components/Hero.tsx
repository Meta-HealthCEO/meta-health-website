export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-teal-600 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative section container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                🚀 Next-Generation Healthcare Technology
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              The Complete Healthcare Platform
              <span className="block text-teal-200 mt-2">Powered by AI</span>
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              Meta Health delivers an all-in-one healthcare technology platform for medical practices, 
              clinics, and hospitals. From patient management to medical aid billing, telemedicine to 
              AI-powered clinical notes — we automate your entire workflow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#pricing" className="btn btn-primary bg-white text-primary-600 hover:bg-gray-100 text-center">
                Get Started Today
              </a>
              <a href="#features" className="btn bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white/20 text-center">
                Explore Features
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold">25+</div>
                <div className="text-blue-200 text-sm">Core Modules</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-blue-200 text-sm">AI Automated</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-blue-200 text-sm">Cloud Access</div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative hidden lg:block">
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-white/95 rounded-lg p-4 shadow-lg">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600">Patient Check-in</div>
                    <div className="font-semibold text-gray-900">AI Verified ✓</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/95 rounded-lg p-4 shadow-lg">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600">Clinical Notes</div>
                    <div className="font-semibold text-gray-900">Auto-Generated</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/95 rounded-lg p-4 shadow-lg">
                  <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600">Medical Aid Claim</div>
                    <div className="font-semibold text-gray-900">Processing...</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-teal-500 text-white px-6 py-3 rounded-full font-bold shadow-xl">
              AI Powered
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
