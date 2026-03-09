import { Monitor, Smartphone, Wifi, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: Monitor,
    title: 'Meta Health Zero',
    subtitle: 'Web Platform',
    desc: 'The full EHR and practice/hospital management system. Clinical workflows, billing, scheduling, reporting, and administration — all accessible from any browser.',
    points: ['Complete EHR with clinical notes', 'Medical aid billing & claims', 'Hospital ADT & ward management', 'Real-time dashboards & reporting'],
  },
  {
    icon: Smartphone,
    title: 'Meta Health One',
    subtitle: 'Patient Mobile App',
    desc: 'Your patients\' healthcare companion. Appointments, prescriptions, health tracking, telemedicine, and secure messaging — healthcare in their pocket.',
    points: ['Appointment booking & reminders', 'Video consultations', 'Health vitals & device sync', 'Prescription management'],
  },
  {
    icon: Wifi,
    title: 'Device Ecosystem',
    subtitle: 'Wearables & RPM',
    desc: 'Seamless integration with consumer wearables and clinical-grade remote monitoring devices. Patient data flows directly into the EHR in real time.',
    points: ['Apple Watch, Garmin, Fitbit', 'BP monitors & glucometers', 'Pulse oximeters & scales', 'Automated clinical alerts'],
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="section bg-slate-900">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-sky-400 uppercase tracking-wider mb-3">The ecosystem</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Three products. One connected platform.
          </h2>
          <p className="text-lg text-slate-400">
            Everything talks to everything. Doctor updates a record on the web — patient sees it on mobile. 
            Patient takes a blood pressure reading — doctor gets it in the EHR.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-sky-500/30 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{p.title}</h3>
                    <p className="text-xs text-slate-500">{p.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">{p.desc}</p>
                <ul className="space-y-2.5">
                  {p.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-slate-700/50">
                  <a href="#cta" className="inline-flex items-center gap-1 text-sm text-sky-400 font-medium hover:text-sky-300 transition-colors">
                    Learn more <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
