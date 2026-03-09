import { Building, Users, Hospital } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function ForWho() {
  const [ref, isInView] = useInView<HTMLDivElement>();

  const segments = [
    {
      icon: Users,
      title: 'Private Practices',
      description: 'Complete solution for solo practitioners and small group practices',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
      features: ['Quick Setup', 'Affordable Pricing', 'Easy to Use', 'Full EMR']
    },
    {
      icon: Building,
      title: 'Multi-Specialty Clinics',
      description: 'Streamline operations across multiple specialties and departments',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
      features: ['Multi-Provider', 'Integrated Scheduling', 'Unified Billing', 'Analytics']
    },
    {
      icon: Hospital,
      title: 'Hospitals',
      description: 'Enterprise-grade system for large healthcare facilities',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
      features: ['Scalable', 'Multi-Facility', 'Advanced Security', 'Custom Workflows']
    }
  ];

  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"></div>
      
      <div className="relative z-10 container-custom" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Built For <span className="gradient-text">Every Practice</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From solo practitioners to large hospital networks, we have the perfect solution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <div
                key={segment.title}
                className={`
                  group relative overflow-hidden rounded-2xl
                  hover:scale-105 transition-all duration-500
                  ${isInView ? 'animate-in' : 'scroll-animate'}
                `}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  height: '500px'
                }}
              >
                {/* Image */}
                <img
                  src={segment.image}
                  alt={segment.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/60 group-hover:from-blue-950 group-hover:via-blue-900/80 transition-all duration-500"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4 glow-blue">
                    <Icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {segment.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-6">
                    {segment.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {segment.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-slate-200">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                        {feature}
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
