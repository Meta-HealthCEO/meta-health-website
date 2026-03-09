import {
  Calendar,
  Users,
  FileText,
  Pill,
  TestTube,
  Stethoscope,
  Bed,
  Scissors,
  ClipboardList,
  CreditCard,
  DollarSign,
  BarChart3,
  Shield,
  MessageSquare,
  Video,
  Phone,
  Mail,
  Bell,
  Clock,
  Database,
  Lock,
  UserCheck,
  Briefcase,
  Package,
  TrendingUp,
  Activity,
} from 'lucide-react';

const Modules = () => {
  const modules = [
    { icon: Calendar, name: 'Appointment Scheduling' },
    { icon: Users, name: 'Patient Management' },
    { icon: FileText, name: 'Electronic Medical Records' },
    { icon: Pill, name: 'Prescription Management' },
    { icon: TestTube, name: 'Laboratory Integration' },
    { icon: Stethoscope, name: 'Clinical Workflows' },
    { icon: Bed, name: 'Bed Management' },
    { icon: Scissors, name: 'Theatre Scheduling' },
    { icon: ClipboardList, name: 'Nursing Station' },
    { icon: CreditCard, name: 'Medical Aid Billing' },
    { icon: DollarSign, name: 'Invoice & Payments' },
    { icon: BarChart3, name: 'Analytics & Reporting' },
    { icon: Shield, name: 'POPIA Compliance' },
    { icon: MessageSquare, name: 'Secure Messaging' },
    { icon: Video, name: 'Telemedicine' },
    { icon: Phone, name: 'Call Center Integration' },
    { icon: Mail, name: 'Email Automation' },
    { icon: Bell, name: 'Smart Notifications' },
    { icon: Clock, name: 'Waiting Room Management' },
    { icon: Database, name: 'Data Backup & Recovery' },
    { icon: Lock, name: 'Access Control' },
    { icon: UserCheck, name: 'Staff Management' },
    { icon: Briefcase, name: 'Inventory Control' },
    { icon: Package, name: 'Pharmacy Management' },
    { icon: TrendingUp, name: 'Business Intelligence' },
    { icon: Activity, name: 'Vitals Monitoring' },
  ];

  return (
    <section id="modules" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            25+ Integrated Modules
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to run a modern healthcare facility, all in one unified platform
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div
                key={module.name}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <div className="bg-gray-100 group-hover:bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors">
                  <Icon className="text-gray-700 group-hover:text-blue-600 transition-colors" size={22} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 leading-snug">
                  {module.name}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">All modules are fully integrated and work seamlessly together</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg shadow-blue-200">
            View Full Feature List
          </button>
        </div>
      </div>
    </section>
  );
};

export default Modules;
