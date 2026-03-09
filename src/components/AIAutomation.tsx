import { Brain, Zap, TrendingUp, Shield, Clock, MessageSquare } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function AIAutomation() {
  const [ref, isInView] = useInView<HTMLDivElement>();

  const capabilities = [
    {
      icon: Zap,
      title: 'Smart Scheduling',
      description: 'AI-powered appointment optimization and patient flow management'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast patient trends and optimize resource allocation'
    },
    {
      icon: Shield,
      title: 'Clinical Decision Support',
      description: 'Real-time alerts and evidence-based recommendations'
    },
    {
      icon: Clock,
      title: 'Workflow Automation',
      description: 'Automate routine tasks and reduce administrative burden'
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Voice-to-text documentation and intelligent charting'
    }
  ];

  return (
    <section className="section bg-slate-950 gradient-mesh-hero relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-20"></div>
      
      <div className="relative z-10 container-custom" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Central Brain Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center glow-blue pulse-glow">
                  <Brain className="text-white" size={80} />
                </div>
              </div>
              
              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 glow-blue"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * 72}deg) translateY(-150px)`,
                    }}
                  />
                ))}
              </div>
              
              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="50%"
                    y1="50%"
                    x2="50%"
                    y2="20%"
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    className="animate-spin origin-center"
                    style={{
                      transformOrigin: '50% 50%',
                      transform: `rotate(${i * 72}deg)`,
                      animationDuration: '20s'
                    }}
                  />
                ))}
              </svg>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                <span className="gradient-text">Powered by AI</span>
              </h2>
              <p className="text-xl text-slate-300">
                Harness the power of artificial intelligence to deliver better patient outcomes 
                and streamline operations.
              </p>
            </div>

            <div className="space-y-4">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <div
                    key={capability.title}
                    className={`
                      glass-card rounded-xl p-6 
                      hover:bg-white/10 transition-all duration-300
                      ${isInView ? 'animate-in-left' : 'scroll-animate'}
                    `}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-blue-400" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {capability.title}
                        </h3>
                        <p className="text-slate-300 text-sm">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
