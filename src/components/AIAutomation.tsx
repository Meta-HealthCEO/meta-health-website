import { Brain, FileText, Calendar, Users, TrendingUp, Shield } from 'lucide-react';

const AIAutomation = () => {
  const aiFeatures = [
    {
      icon: Brain,
      title: 'Clinical Decision Support',
      description: 'AI-powered diagnostic assistance, drug interaction alerts, and evidence-based treatment recommendations.',
      impact: '40% faster diagnosis',
    },
    {
      icon: FileText,
      title: 'Automated Documentation',
      description: 'Voice-to-text clinical notes, smart templating, and automated coding for ICD-10 and CPT compliance.',
      impact: '3 hours saved daily',
    },
    {
      icon: Calendar,
      title: 'Intelligent Scheduling',
      description: 'AI optimization of appointment slots, no-show prediction, and automated patient routing.',
      impact: '25% more patients',
    },
    {
      icon: Users,
      title: 'Smart Triage',
      description: 'Automated patient prioritization, severity assessment, and intelligent resource allocation.',
      impact: '60% faster triage',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Early risk detection, readmission prevention, and population health management insights.',
      impact: '35% risk reduction',
    },
    {
      icon: Shield,
      title: 'Fraud Detection',
      description: 'Automated billing audit, claim validation, and anomaly detection for medical aid submissions.',
      impact: '99% accuracy',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
          alt="AI Technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-blue-900"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
              Powered by AI
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Artificial Intelligence That Works
            <span className="block text-blue-400 mt-2">for Healthcare</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Advanced machine learning and AI automation to enhance clinical outcomes, reduce administrative burden, and improve patient care
          </p>
        </div>

        {/* AI Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-300"
              >
                <div className="bg-blue-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-blue-400" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <div className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <span className="text-green-400 font-semibold text-sm">{feature.impact}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-400 mb-2">10M+</p>
              <p className="text-gray-300">AI Predictions Made</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-400 mb-2">95%</p>
              <p className="text-gray-300">Clinical Accuracy</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-400 mb-2">15hrs</p>
              <p className="text-gray-300">Saved per Provider Weekly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAutomation;
