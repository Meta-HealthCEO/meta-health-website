import { Smartphone, Heart, Calendar, MessageCircle, Bell, Pill } from 'lucide-react';

const appFeatures = [
  { icon: Calendar, title: 'Book Appointments', desc: 'Find available slots and book in seconds' },
  { icon: MessageCircle, title: 'Chat with Doctor', desc: 'Secure messaging with your care team' },
  { icon: Heart, title: 'Health Tracking', desc: 'Log vitals, mood, symptoms, and medication' },
  { icon: Pill, title: 'Prescriptions', desc: 'View and request repeat prescriptions' },
  { icon: Bell, title: 'Smart Reminders', desc: 'Medication, appointment, and follow-up alerts' },
  { icon: Smartphone, title: 'Telehealth', desc: 'Video consultations from anywhere' },
];

export default function MobileApp() {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-3">Meta Health One</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Healthcare in your patients' pocket
              </h2>
              <p className="text-lg text-gray-500">
                A beautiful, intuitive app that keeps patients connected to their care. Available on iOS and Android.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
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

            <div className="flex items-center gap-4">
              <div className="bg-black text-white rounded-lg px-5 py-2.5 text-sm font-medium">App Store</div>
              <div className="bg-black text-white rounded-lg px-5 py-2.5 text-sm font-medium">Google Play</div>
            </div>
          </div>

          {/* Right - Phone mockup */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-[280px] h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.4rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-sky-500 text-white px-6 pt-10 pb-6">
                    <p className="text-xs opacity-80">Good morning</p>
                    <p className="font-bold text-lg">Dr. Sarah's Practice</p>
                  </div>
                  {/* App content */}
                  <div className="p-4 space-y-3">
                    <div className="bg-sky-50 rounded-xl p-3">
                      <p className="text-xs text-gray-500">Next Appointment</p>
                      <p className="font-semibold text-sm text-gray-900">Dr. Sarah Miller</p>
                      <p className="text-xs text-sky-600">Today, 14:30</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs text-gray-500">Heart Rate</p>
                      <p className="font-bold text-2xl text-gray-900">72 <span className="text-sm font-normal text-gray-400">bpm</span></p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs text-gray-500">Medications</p>
                      <p className="text-sm text-gray-700">Metformin 500mg — Take with meals</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-3">
                      <p className="text-xs text-green-600 font-medium">All vitals normal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
