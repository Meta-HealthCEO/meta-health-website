import { Monitor, Smartphone, Wifi } from 'lucide-react';

const pillars = [
  {
    icon: Monitor,
    title: 'Web Platform',
    subtitle: 'For practitioners & staff',
    desc: 'Full practice management suite accessible from any browser. Scheduling, billing, clinical notes, reporting, and admin — all in one dashboard.',
    features: ['25+ integrated modules', 'Role-based access control', 'Real-time dashboards', 'Multi-location support'],
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80',
  },
  {
    icon: Smartphone,
    title: 'Mobile App',
    subtitle: 'For patients',
    desc: 'Meta Health One — your patients\' healthcare companion. Appointments, prescriptions, health tracking, and direct messaging with their care team.',
    features: ['iOS and Android', 'Appointment booking', 'Health tracking & vitals', 'AI health assistant'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
  },
  {
    icon: Wifi,
    title: 'Connected Devices',
    subtitle: 'Wearables & RPM',
    desc: 'Seamless integration with consumer wearables and clinical-grade remote monitoring devices. Patient data flows directly into their records.',
    features: ['Apple Watch & Garmin', 'Fitbit & Samsung', 'BP monitors & glucometers', 'Pulse oximeters & scales'],
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&q=80',
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-3">Connected ecosystem</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Three pillars, one ecosystem
          </h2>
          <p className="text-lg text-gray-500">
            Web, mobile, and devices — all connected in real time. Doctors get the full picture, patients stay engaged.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="h-52 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{p.title}</h3>
                      <p className="text-xs text-gray-400">{p.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                  <ul className="space-y-2">
                    {p.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
