import { Activity, Building2, Video, Heart, FileText, Brain } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Features() {
  const [ref, isInView] = useInView<HTMLDivElement>();

  const features = [
    {
      icon: Activity,
      title: 'Practice Management',
      description: 'Complete solution for managing your medical practice with scheduling, billing, and patient records.',
      color: 'cyan',
      size: 'large'
    },
    {
      icon: Building2,
      title: 'Hospital Management',
      description: 'Enterprise-grade system for multi-facility hospital operations.',
      color: 'pink',
      size: 'medium'
    },
    {
      icon: Video,
      title: 'Telemedicine',
      description: 'Integrated video consultations with full EMR integration.',
      color: 'cyan',
      size: 'medium'
    },
    {
      icon: Heart,
      title: 'Remote Patient Monitoring',
      description: 'Real-time monitoring with wearable device integration and AI alerts.',
      color: 'pink',
      size: 'large'
    },
    {
      icon: FileText,
      title: 'Medical Aid Billing',
      description: 'Automated billing and claims submission to all major medical aids.',
      color: 'cyan',
      size: 'medium'
    },
    {
      icon: Brain,
      title: 'AI Automation',
      description: 'Smart automation for scheduling, diagnostics, and clinical decision support.',
      color: 'pink',
      size: 'medium'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan':
        return 'from-cyan-600/20 to-cyan-600/5 hover:from-cyan-600/30 hover:to-cyan-600/10 glow-hover-cyan';
      case 'pink':
        return 'from-pink-600/20 to-pink-600/5 hover:from-pink-600/30 hover:to-pink-600/10 glow-hover-pink';
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
                  feature.color === 'cyan' ? 'from-cyan-500 to-blue-600' :
                  'from-pink-500 to-pink-700'
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
