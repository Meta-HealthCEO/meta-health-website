import { Monitor, Smartphone, Wifi } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Ecosystem() {
  const [ref, isInView] = useInView<HTMLDivElement>();

  const pillars = [
    {
      icon: Monitor,
      title: 'Web Platform',
      description: 'Complete practice management accessible from any browser',
      features: ['EMR System', 'Billing & Claims', 'Analytics Dashboard', 'Patient Portal']
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Native iOS & Android apps for healthcare on the go',
      features: ['Telemedicine', 'Mobile Prescribing', 'Patient Engagement', 'Real-time Alerts']
    },
    {
      icon: Wifi,
      title: 'IoT Devices',
      description: 'Seamless integration with medical devices and wearables',
      features: ['Vitals Monitoring', 'Wearable Integration', 'Device Management', 'AI Analytics']
    }
  ];

  return (
    <section id="ecosystem" className="section bg-slate-900 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-50"></div>
      
      <div className="relative z-10 container-custom" ref={ref}>
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">The Complete Ecosystem</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Three interconnected pillars working seamlessly together
          </p>
        </div>

        {/* Connection Lines SVG */}
        <div className="relative">
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ zIndex: 0 }}>
            {/* Line from Web to Mobile */}
            <line
              x1="33%"
              y1="50%"
              x2="50%"
              y2="50%"
              stroke="url(#gradient1)"
              strokeWidth="2"
              className={isInView ? 'draw-line' : ''}
            />
            {/* Line from Mobile to Devices */}
            <line
              x1="50%"
              y1="50%"
              x2="67%"
              y2="50%"
              stroke="url(#gradient2)"
              strokeWidth="2"
              className={isInView ? 'draw-line' : ''}
              style={{ animationDelay: '0.3s' }}
            />
            
            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#E91E8C" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E91E8C" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#00BFFF" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            
            {/* Animated Dots */}
            {isInView && (
              <>
                <circle cx="33%" cy="50%" r="4" fill="#0EA5E9" className="dot-pulse" />
                <circle cx="50%" cy="50%" r="4" fill="#E91E8C" className="dot-pulse" style={{ animationDelay: '0.3s' }} />
                <circle cx="67%" cy="50%" r="4" fill="#00BFFF" className="dot-pulse" style={{ animationDelay: '0.6s' }} />
              </>
            )}
          </svg>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative" style={{ zIndex: 1 }}>
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const colors = [
                { bg: 'from-cyan-600/20', glow: 'glow-cyan', icon: 'from-cyan-500 to-blue-600' },
                { bg: 'from-pink-600/20', glow: 'glow-pink', icon: 'from-pink-500 to-pink-700' },
                { bg: 'from-cyan-600/20', glow: 'glow-cyan', icon: 'from-cyan-500 to-blue-600' }
              ];
              
              return (
                <div
                  key={pillar.title}
                  className={`
                    glass-card rounded-2xl p-8
                    bg-gradient-to-br ${colors[index].bg}
                    ${colors[index].glow}
                    hover:scale-105 transition-all duration-500
                    ${isInView ? 'animate-in' : 'scroll-animate'}
                  `}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors[index].icon} flex items-center justify-center mb-6`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-6">
                    {pillar.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {pillar.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
