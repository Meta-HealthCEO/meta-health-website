import { Brain, FileText, CalendarCheck, TrendingUp, MessageSquare, Shield } from 'lucide-react';

const capabilities = [
  { icon: FileText, title: 'AI Clinical Notes', desc: 'Automatically generate SOAP notes from consultations. Review and sign off in seconds.' },
  { icon: CalendarCheck, title: 'Smart Scheduling', desc: 'AI optimises your calendar based on appointment types, provider availability, and patient preferences.' },
  { icon: TrendingUp, title: 'Predictive Analytics', desc: 'Identify at-risk patients, forecast no-shows, and surface insights from your practice data.' },
  { icon: MessageSquare, title: 'Patient AI Assistant', desc: 'An AI chatbot that answers patient questions, handles bookings, and triages enquiries 24/7.' },
  { icon: Brain, title: 'ICD-10 Auto-Coding', desc: 'AI reads clinical notes and suggests the correct diagnosis and procedure codes for billing.' },
  { icon: Shield, title: 'Compliance Monitoring', desc: 'Automated POPIA and HPCSA compliance checks across patient data and communications.' },
];

export default function AIAutomation() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=700&q=80"
              alt="AI Technology"
              className="rounded-2xl shadow-lg w-full object-cover h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent rounded-2xl" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
                  <Brain size={20} className="text-sky-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">AI reducing admin time by 60%</div>
                  <div className="text-xs text-gray-500">Average across all Meta Health practices</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-3">Powered by AI</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Let AI handle the admin
              </h2>
              <p className="text-lg text-gray-500">
                Spend less time on paperwork and more time with patients. Our AI automates the busywork across your entire practice.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {capabilities.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.title} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon size={16} className="text-sky-500" />
                      <h3 className="font-semibold text-gray-900 text-sm">{c.title}</h3>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
