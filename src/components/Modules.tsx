import {
  Calendar, Users, FileText, CreditCard, Stethoscope, Video,
  Activity, ClipboardList, Building2, Pill, ShieldCheck, BarChart3,
  Mail, Bell, UserCheck, Microscope, Truck, Clock, Globe,
  HeartPulse, Receipt, FolderOpen, Settings, Lock, Layers
} from 'lucide-react';

const modules = [
  { icon: Calendar, name: 'Appointments' },
  { icon: Users, name: 'Patient Records' },
  { icon: FileText, name: 'Clinical Notes' },
  { icon: CreditCard, name: 'Billing & Invoicing' },
  { icon: Stethoscope, name: 'Consultations' },
  { icon: Video, name: 'Telemedicine' },
  { icon: Activity, name: 'Vitals & Monitoring' },
  { icon: ClipboardList, name: 'Treatment Plans' },
  { icon: Building2, name: 'Multi-Location' },
  { icon: Pill, name: 'Prescriptions' },
  { icon: ShieldCheck, name: 'Medical Aid Claims' },
  { icon: BarChart3, name: 'Reports & Analytics' },
  { icon: Mail, name: 'Patient Messaging' },
  { icon: Bell, name: 'Notifications' },
  { icon: UserCheck, name: 'Staff Management' },
  { icon: Microscope, name: 'Lab Orders' },
  { icon: Truck, name: 'Referrals' },
  { icon: Clock, name: 'Waiting Room' },
  { icon: Globe, name: 'Online Booking' },
  { icon: HeartPulse, name: 'Chronic Care' },
  { icon: Receipt, name: 'Receipt Generator' },
  { icon: FolderOpen, name: 'Document Storage' },
  { icon: Settings, name: 'Practice Settings' },
  { icon: Lock, name: 'Access Control' },
  { icon: Layers, name: 'Integrations' },
];

export default function Modules() {
  return (
    <section id="modules" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-3">25+ modules</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything a practice needs
          </h2>
          <p className="text-lg text-gray-500">
            Modular by design. Use what you need, add more as you grow.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {modules.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.name} className="bg-white rounded-xl p-4 border border-gray-100 hover:border-sky-200 hover:shadow-sm transition-all duration-200 text-center group">
                <Icon size={20} className="text-gray-400 group-hover:text-sky-500 transition-colors mx-auto mb-2" />
                <p className="text-xs font-medium text-gray-700">{m.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
