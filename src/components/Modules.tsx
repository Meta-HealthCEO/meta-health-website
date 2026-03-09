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
    { icon: Calendar, name: 'Appointment Scheduling', color: 'cyan' },
    { icon: Users, name: 'Patient Management', color: 'pink' },
    { icon: FileText, name: 'Electronic Medical Records', color: 'cyan' },
    { icon: DollarSign, name: 'Billing & Invoicing', color: 'pink' },
    { icon: Activity, name: 'Clinical Workflow', color: 'cyan' },
    { icon: Video, name: 'Telemedicine', color: 'pink' },
    { icon: Pill, name: 'Pharmacy Management', color: 'cyan' },
    { icon: Hospital, name: 'Hospital Management', color: 'pink' },
    { icon: Stethoscope, name: 'Specialist Referrals', color: 'cyan' },
    { icon: ClipboardList, name: 'Lab Integration', color: 'pink' },
    { icon: TrendingUp, name: 'Analytics & Reporting', color: 'cyan' },
    { icon: Shield, name: 'POPIA Compliance', color: 'pink' },
    { icon: MessageSquare, name: 'Patient Communication', color: 'cyan' },
    { icon: Bell, name: 'Alerts & Notifications', color: 'pink' },
    { icon: Mail, name: 'Email Integration', color: 'cyan' },
    { icon: Clock, name: 'Waitlist Management', color: 'pink' },
    { icon: BarChart, name: 'Business Intelligence', color: 'cyan' },
    { icon: Settings, name: 'Practice Settings', color: 'pink' },
    { icon: Database, name: 'Data Backup', color: 'cyan' },
    { icon: Lock, name: 'Role-Based Access', color: 'pink' },
    { icon: UserCheck, name: 'Staff Management', color: 'cyan' },
    { icon: Smartphone, name: 'Mobile Apps', color: 'pink' },
    { icon: Brain, name: 'AI Automation', color: 'cyan' },
    { icon: Heart, name: 'Remote Patient Monitoring', color: 'pink' },
    { icon: Wifi, name: 'Device Integration', color: 'cyan' },
    { icon: Target, name: 'Quality Metrics', color: 'pink' }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan':
        return 'from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500';
      case 'pink':
        return 'from-pink-500 to-pink-700 hover:from-pink-400 hover:to-pink-600';
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
                  hover:scale-110 glow-hover-cyan
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
