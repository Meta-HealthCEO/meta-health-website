export default function MobileApp() {
  const features = [
    { icon: '🤖', title: 'AI Voice Assistant', desc: 'Talk to your AI health assistant — ask questions, get guidance, manage your health hands-free' },
    { icon: '📹', title: 'Video Consultations', desc: 'See your doctor from anywhere with built-in HD telehealth consultations' },
    { icon: '📊', title: 'Health Metrics', desc: 'Track vitals, blood pressure, glucose, SpO2, temperature and more in real time' },
    { icon: '💊', title: 'Medications', desc: 'Manage prescriptions, set reminders, and never miss a dose' },
    { icon: '🍎', title: 'AI Meal Tracker', desc: 'Log meals with AI-powered nutrition analysis and personalised dietary plans' },
    { icon: '🏋️', title: 'Fitness & Wellness', desc: 'Workout programs, wellness goals, and activity tracking built in' },
    { icon: '📋', title: 'Medical History', desc: 'Your complete medical history — accessible anytime, shareable with any provider' },
    { icon: '📅', title: 'Appointments', desc: 'Book, reschedule, and manage appointments with your healthcare providers' },
    { icon: '📄', title: 'Documents', desc: 'Store lab results, referral letters, scripts, and medical documents securely' },
    { icon: '💳', title: 'Payments', desc: 'Pay for consultations and services directly through the app' },
    { icon: '📰', title: 'Wellness Feed', desc: 'Curated health content, tips, and updates tailored to your health profile' },
    { icon: '🔔', title: 'Smart Notifications', desc: 'Appointment reminders, medication alerts, and health insights pushed to you' },
  ]

  return (
    <section id="mobile-app" className="section bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="inline-block bg-teal-500/20 text-teal-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              📱 Meta Health One
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Your Health.
              <span className="block text-teal-400">In Your Pocket.</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Meta Health One is the patient-facing mobile app that puts healthcare at your fingertips. 
              Available on iOS and Android, it connects patients directly to their healthcare providers 
              and gives them complete control over their health journey.
            </p>

            <div className="flex gap-4 mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div>
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 12l2.302-2.492zM5.864 2.658L16.8 8.991l-2.302 2.302-8.634-8.635z"/>
                </svg>
                <div>
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </div>
            </div>

            {/* Key stat */}
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400">12+</div>
                <div className="text-sm text-gray-400">Features</div>
              </div>
              <div className="w-px h-10 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400">24/7</div>
                <div className="text-sm text-gray-400">Access</div>
              </div>
              <div className="w-px h-10 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400">AI</div>
                <div className="text-sm text-gray-400">Powered</div>
              </div>
            </div>
          </div>

          {/* Right: Phone mockup with features */}
          <div className="relative">
            {/* Phone frame */}
            <div className="relative mx-auto w-72 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl border border-gray-700">
              <div className="bg-gradient-to-br from-primary-600 to-teal-500 rounded-[2.25rem] overflow-hidden">
                {/* Notch */}
                <div className="flex justify-center pt-3 pb-2">
                  <div className="w-24 h-6 bg-black rounded-full"></div>
                </div>
                {/* Screen content */}
                <div className="px-5 pb-8 space-y-3">
                  <div className="text-center mb-4">
                    <h3 className="text-white font-bold text-lg">Meta Health One</h3>
                    <p className="text-blue-100 text-xs">Your Health Dashboard</p>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                    <div className="text-xs text-blue-100 mb-1">Heart Rate</div>
                    <div className="text-2xl font-bold text-white">72 <span className="text-sm font-normal">BPM</span></div>
                    <div className="flex gap-1 mt-2">
                      {[40, 55, 35, 65, 45, 70, 50, 60, 45, 72].map((h, i) => (
                        <div key={i} className="flex-1 bg-white/40 rounded-full" style={{ height: `${h}%`, minHeight: '8px', maxHeight: '32px' }}></div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                      <div className="text-xs text-blue-100">Blood Pressure</div>
                      <div className="text-lg font-bold text-white">120/80</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                      <div className="text-xs text-blue-100">SpO2</div>
                      <div className="text-lg font-bold text-white">98%</div>
                    </div>
                  </div>

                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                    <div className="text-xs text-blue-100 mb-1">Next Appointment</div>
                    <div className="text-sm font-semibold text-white">Dr. van der Merwe — 10:30 AM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-8 -left-4 bg-teal-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-xl animate-pulse">
              🎤 AI Voice Active
            </div>
            <div className="absolute bottom-16 -right-4 bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-xl">
              📡 Devices Synced
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">Everything Your Patients Need</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
                <div className="text-2xl mb-2">{feature.icon}</div>
                <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
