import { Smartphone, Heart, Calendar, MessageCircle, Bell, Pill, Camera, FileText } from 'lucide-react';

const appFeatures = [
  { icon: Calendar, title: 'Book Appointments', desc: 'Find available slots and book in seconds' },
  { icon: MessageCircle, title: 'Chat with Doctor', desc: 'Secure messaging with your care team' },
  { icon: Heart, title: 'Health Tracking', desc: 'Log vitals, mood, symptoms daily' },
  { icon: Pill, title: 'Prescriptions', desc: 'View and request repeat scripts' },
  { icon: Bell, title: 'Smart Reminders', desc: 'Medication and appointment alerts' },
  { icon: Camera, title: 'Meal Scanner', desc: 'AI-powered nutrition tracking' },
  { icon: FileText, title: 'Documents', desc: 'Access results and records anytime' },
  { icon: Smartphone, title: 'Telehealth', desc: 'Video consultations from anywhere' },
];

function PhoneMockup({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-[260px] flex-shrink-0 ${className}`}>
      <div className="bg-gray-900 rounded-[2.5rem] p-2.5 shadow-2xl">
        {/* Notch */}
        <div className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl z-10" />
        </div>
        <div className="bg-white rounded-[2rem] overflow-hidden h-[520px]">
          {children}
        </div>
      </div>
    </div>
  );
}

function HomeScreen() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-br from-sky-500 to-sky-600 text-white px-5 pt-10 pb-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sky-100 text-[10px]">Good morning</p>
            <p className="font-bold text-base">Sarah Johnson</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <Bell size={14} className="text-white" />
          </div>
        </div>
        <div className="bg-white/15 rounded-xl p-3">
          <p className="text-[10px] text-sky-100">Daily Tip</p>
          <p className="text-xs">Stay hydrated — drink at least 8 glasses of water daily</p>
        </div>
      </div>
      {/* Quick Actions */}
      <div className="px-4 -mt-3">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3">
          <div className="grid grid-cols-4 gap-2">
            {[
              { icon: '📅', label: 'Book', color: 'bg-blue-50' },
              { icon: '📷', label: 'Scan', color: 'bg-green-50' },
              { icon: '📄', label: 'Docs', color: 'bg-orange-50' },
              { icon: '💊', label: 'Meds', color: 'bg-pink-50' },
            ].map((a) => (
              <div key={a.label} className="text-center">
                <div className={`${a.color} w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-1 text-sm`}>{a.icon}</div>
                <p className="text-[9px] text-gray-600 font-medium">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Upcoming */}
      <div className="px-4 mt-3">
        <p className="text-[10px] font-semibold text-gray-400 uppercase mb-2">Upcoming</p>
        <div className="bg-blue-50 rounded-xl p-3 mb-2">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-xs">DR</div>
            <div className="flex-1">
              <p className="font-semibold text-xs text-gray-900">Dr. Sarah Miller</p>
              <p className="text-[10px] text-blue-600">Today, 14:30 — General Checkup</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-xs">DR</div>
            <div className="flex-1">
              <p className="font-semibold text-xs text-gray-900">Dr. James Naidoo</p>
              <p className="text-[10px] text-gray-500">Thu 13 Mar, 09:00 — Follow-up</p>
            </div>
          </div>
        </div>
      </div>
      {/* Health Summary */}
      <div className="px-4 mt-3">
        <p className="text-[10px] font-semibold text-gray-400 uppercase mb-2">Today's Vitals</p>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-red-50 rounded-lg p-2 text-center">
            <p className="font-bold text-base text-gray-900">72</p>
            <p className="text-[8px] text-gray-500">BPM</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-2 text-center">
            <p className="font-bold text-base text-gray-900">120/80</p>
            <p className="text-[8px] text-gray-500">BP</p>
          </div>
          <div className="bg-green-50 rounded-lg p-2 text-center">
            <p className="font-bold text-base text-gray-900">98%</p>
            <p className="text-[8px] text-gray-500">SpO2</p>
          </div>
        </div>
      </div>
    </>
  );
}

function HealthMetricsScreen() {
  return (
    <>
      <div className="bg-white px-5 pt-10 pb-4 border-b border-gray-100">
        <p className="font-bold text-base text-gray-900">Health Metrics</p>
        <p className="text-[10px] text-gray-500">Track your daily health data</p>
      </div>
      <div className="p-4 space-y-3">
        {/* Heart Rate Card */}
        <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                <Heart size={14} className="text-red-500" />
              </div>
              <div>
                <p className="font-semibold text-xs text-gray-900">Heart Rate</p>
                <p className="text-[10px] text-gray-400">From Apple Watch</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg text-gray-900">72</p>
              <p className="text-[9px] text-gray-400">bpm</p>
            </div>
          </div>
          {/* Mini chart */}
          <div className="flex items-end gap-1 h-10">
            {[65, 68, 72, 70, 75, 73, 71, 69, 72, 74, 70, 68, 72, 71, 73, 72].map((v, i) => (
              <div key={i} className="flex-1 bg-red-200 rounded-t" style={{ height: `${(v - 60) * 3}%` }} />
            ))}
          </div>
        </div>

        {/* Blood Pressure */}
        <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-xs">🩸</div>
              <div>
                <p className="font-semibold text-xs text-gray-900">Blood Pressure</p>
                <p className="text-[10px] text-gray-400">Manual entry</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg text-gray-900">120/80</p>
              <p className="text-[9px] text-green-500 font-medium">Normal</p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center text-xs">🚶</div>
              <p className="font-semibold text-xs text-gray-900">Steps</p>
            </div>
            <p className="font-bold text-lg text-gray-900">8,432</p>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '84%' }} />
          </div>
          <p className="text-[9px] text-gray-400 mt-1">84% of 10,000 goal</p>
        </div>

        {/* Sleep */}
        <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center text-xs">🌙</div>
              <div>
                <p className="font-semibold text-xs text-gray-900">Sleep</p>
                <p className="text-[10px] text-gray-400">Last night</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg text-gray-900">7h 23m</p>
              <p className="text-[9px] text-green-500 font-medium">Good quality</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ConsultationScreen() {
  return (
    <>
      <div className="bg-gradient-to-br from-sky-500 to-sky-600 text-white px-5 pt-10 pb-6">
        <p className="font-bold text-base">Video Consultation</p>
        <p className="text-[10px] text-sky-100">In progress — 12:34</p>
      </div>
      {/* Video area */}
      <div className="relative">
        <div className="bg-gray-800 h-48 flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80" alt="Doctor" className="w-full h-full object-cover opacity-80" />
          {/* Self view */}
          <div className="absolute top-3 right-3 w-16 h-20 bg-gray-700 rounded-lg overflow-hidden border-2 border-white shadow-lg">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt="Patient" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      {/* Controls */}
      <div className="flex items-center justify-center gap-4 py-4 border-b border-gray-100">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-xs">🎤</div>
        <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white text-sm">📞</div>
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-xs">📹</div>
      </div>
      {/* Chat area */}
      <div className="p-4 space-y-2">
        <p className="text-[10px] font-semibold text-gray-400 uppercase">Consultation Notes</p>
        <div className="bg-sky-50 rounded-lg p-3">
          <p className="text-[10px] text-sky-700 font-medium">Dr. Sarah Miller</p>
          <p className="text-xs text-gray-700">Blood pressure is looking good. Let's discuss your medication adjustment.</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-[10px] text-gray-400 font-medium">AI Summary</p>
          <p className="text-xs text-gray-600">Patient vitals normal. Discussed reducing Metformin dosage. Follow-up in 2 weeks.</p>
        </div>
      </div>
    </>
  );
}

export default function MobileApp() {
  return (
    <section className="section bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-3">Meta Health One</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Healthcare in your patients' pocket
          </h2>
          <p className="text-lg text-gray-500">
            A beautiful, intuitive mobile app that keeps patients connected to their care team. Available on iOS and Android.
          </p>
        </div>

        {/* Phone mockups row */}
        <div className="flex justify-center gap-8 mb-16 overflow-x-auto pb-4">
          <PhoneMockup>
            <HomeScreen />
          </PhoneMockup>
          <PhoneMockup className="hidden md:block">
            <HealthMetricsScreen />
          </PhoneMockup>
          <PhoneMockup className="hidden lg:block">
            <ConsultationScreen />
          </PhoneMockup>
        </div>

        {/* Features grid below */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {appFeatures.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{f.title}</h3>
                  <p className="text-xs text-gray-500">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="bg-black text-white rounded-lg px-5 py-2.5 text-sm font-medium cursor-pointer hover:bg-gray-800 transition-colors">App Store</div>
          <div className="bg-black text-white rounded-lg px-5 py-2.5 text-sm font-medium cursor-pointer hover:bg-gray-800 transition-colors">Google Play</div>
        </div>
      </div>
    </section>
  );
}
