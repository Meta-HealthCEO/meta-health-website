import { Activity, Building2, Video, Heart, FileText, Brain } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Features() {
  const [ref, isInView] = useInView<HTMLDivElement>();

  const features = [
    {
      icon: Activity,
      title: 'Practice Management',
      description: 'Complete solution for managing your medical practice with scheduling, billing, and patient records.',
      color: 'blue',
      size: 'large'
    },
    {
      icon: Building2,
      title: 'Hospital Management',
      description: 'Enterprise-grade system for multi-facility hospital operations.',
      color: 'purple',
      size: 'medium'
    },
    {
      icon: Video,
      title: 'Telemedicine',
      description: 'Integrated video consultations with full EMR integration.',
      color: 'teal',
      size: 'medium'
    },
    {
      icon: Heart,
      title: 'Remote Patient Monitoring',
      description: 'Real-time monitoring with wearable device integration and AI alerts.',
      color: 'blue',
      size: 'large'
    },
    {
      icon: FileText,
      title: 'Medical Aid Billing',
      description: 'Automated billing and claims submission to all major medical aids.',
      color: 'purple',
      size: 'medium'
    },
    {
      icon: Brain,
      title: 'AI Automation',
      description: 'Smart automation for scheduling, diagnostics, and clinical decision support.',
      color: 'teal',
      size: 'medium'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'from-blue-600/20 to-blue-600/5 hover:from-blue-600/30 hover:to-blue-600/10 glow-hover-blue';
      case 'purple':
        return 'from-purple-600/20 to-purple-600/5 hover:from-purple-600/30 hover:to-purple-600/10 glow-hover-purple';
      case 'teal':
        return 'from-teal-600/20 to-teal-600/5 hover:from-teal-600/30 hover:to-teal-600/10 glow-hover-teal';
      default:
        return '';
    }
  };

  return (
    <section id="features" className="section bg-slate-950 dot-pattern">
      <div className="container-custom" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Comprehensive Features</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Everything you need to run a modern healthcare facility, all in one platform
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLarge = feature.size === 'large';
            
            return (
              <div
                key={feature.title}
                className={`
                  ${isLarge ? 'md:col-span-2' : 'md:col-span-1'}
                  glass-card rounded-2xl p-8
                  bg-gradient-to-br ${getColorClasses(feature.color)}
                  transition-all duration-500 hover:scale-105
                  ${isInView ? 'animate-in' : 'scroll-animate'}
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                  feature.color === 'blue' ? 'from-blue-600 to-blue-700' :
                  feature.color === 'purple' ? 'from-purple-600 to-purple-700' :
                  'from-teal-600 to-teal-700'
                } flex items-center justify-center mb-6`}>
                  <Icon className="text-white" size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-slate-300 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
