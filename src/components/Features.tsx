import { 
  Building2, 
  Hospital, 
  Video, 
  Activity, 
  CreditCard, 
  Brain 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Building2,
      title: 'Practice Management',
      description: 'Complete EMR/EHR system with appointment scheduling, patient records, clinical workflows, and prescription management.',
    },
    {
      icon: Hospital,
      title: 'Hospital Management',
      description: 'Full HIS with bed management, theatre scheduling, ward rounds, nursing stations, and admission/discharge workflows.',
    },
    {
      icon: Video,
      title: 'Telemedicine',
      description: 'HIPAA-compliant video consultations, virtual waiting rooms, e-prescriptions, and remote patient monitoring.',
    },
    {
      icon: Activity,
      title: 'Remote Patient Monitoring',
      description: 'Real-time vitals tracking from wearables and medical devices. Automated alerts for critical thresholds.',
    },
    {
      icon: CreditCard,
      title: 'Medical Aid Billing',
      description: 'Integrated billing for Discovery, Momentum, Bonitas, Medshield. ICD-10 coding, claim submission, and reconciliation.',
    },
    {
      icon: Brain,
      title: 'AI Automation',
      description: 'Clinical decision support, automated documentation, smart scheduling, predictive analytics, and intelligent triage.',
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything Your Practice Needs
          </h2>
          <p className="text-xl text-gray-600">
            Enterprise-grade healthcare management tools designed for South African medical professionals
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
