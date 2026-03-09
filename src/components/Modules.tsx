import { 
  Calendar, Users, FileText, DollarSign, Activity, Video, 
  Pill, Hospital, Stethoscope, ClipboardList, TrendingUp, 
  Shield, MessageSquare, Bell, Mail, Clock, BarChart, 
  Settings, Database, Lock, UserCheck, Smartphone, 
  Brain, Heart, Wifi, Target
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Modules() {
  const [ref, isInView] = useInView<HTMLDivElement>();

  const modules = [
    { icon: Calendar, name: 'Appointment Scheduling', color: 'blue' },
    { icon: Users, name: 'Patient Management', color: 'purple' },
    { icon: FileText, name: 'Electronic Medical Records', color: 'teal' },
    { icon: DollarSign, name: 'Billing & Invoicing', color: 'blue' },
    { icon: Activity, name: 'Clinical Workflow', color: 'purple' },
    { icon: Video, name: 'Telemedicine', color: 'teal' },
    { icon: Pill, name: 'Pharmacy Management', color: 'blue' },
    { icon: Hospital, name: 'Hospital Management', color: 'purple' },
    { icon: Stethoscope, name: 'Specialist Referrals', color: 'teal' },
    { icon: ClipboardList, name: 'Lab Integration', color: 'blue' },
    { icon: TrendingUp, name: 'Analytics & Reporting', color: 'purple' },
    { icon: Shield, name: 'POPIA Compliance', color: 'teal' },
    { icon: MessageSquare, name: 'Patient Communication', color: 'blue' },
    { icon: Bell, name: 'Alerts & Notifications', color: 'purple' },
    { icon: Mail, name: 'Email Integration', color: 'teal' },
    { icon: Clock, name: 'Waitlist Management', color: 'blue' },
    { icon: BarChart, name: 'Business Intelligence', color: 'purple' },
    { icon: Settings, name: 'Practice Settings', color: 'teal' },
    { icon: Database, name: 'Data Backup', color: 'blue' },
    { icon: Lock, name: 'Role-Based Access', color: 'purple' },
    { icon: UserCheck, name: 'Staff Management', color: 'teal' },
    { icon: Smartphone, name: 'Mobile Apps', color: 'blue' },
    { icon: Brain, name: 'AI Automation', color: 'purple' },
    { icon: Heart, name: 'Remote Patient Monitoring', color: 'teal' },
    { icon: Wifi, name: 'Device Integration', color: 'blue' },
    { icon: Target, name: 'Quality Metrics', color: 'purple' }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600';
      case 'purple':
        return 'from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600';
      case 'teal':
        return 'from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600';
      default:
        return '';
    }
  };

  return (
    <section id="modules" className="section bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      
      <div className="relative z-10 container-custom" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">25+ Integrated Modules</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Everything you need for comprehensive healthcare management, all in one platform
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div
                key={module.name}
                className={`
                  glass-card rounded-xl p-6
                  flex flex-col items-center text-center
                  hover:scale-110 glow-hover-blue
                  transition-all duration-300 cursor-pointer
                  ${isInView ? 'animate-scale' : 'scroll-animate'}
                `}
                style={{ animationDelay: `${(index % 12) * 0.05}s` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getColorClasses(module.color)} flex items-center justify-center mb-3`}>
                  <Icon className="text-white" size={24} />
                </div>
                <span className="text-white text-sm font-medium leading-tight">
                  {module.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
