import { Check } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Pricing() {
  const [ref, isInView] = useInView<HTMLDivElement>();

  const plans = [
    {
      name: 'Starter',
      price: 'R2,999',
      period: 'per month',
      description: 'Perfect for solo practitioners',
      features: [
        'Single practitioner',
        'Up to 100 patients',
        'Basic EMR',
        'Appointment scheduling',
        'Billing & invoicing',
        'Email support'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      price: 'R7,999',
      period: 'per month',
      description: 'Ideal for growing practices',
      features: [
        'Up to 5 practitioners',
        'Unlimited patients',
        'Full EMR system',
        'Telemedicine',
        'Lab integration',
        'Medical aid billing',
        'Analytics dashboard',
        'Priority support',
        'Mobile apps'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For hospitals and large facilities',
      features: [
        'Unlimited practitioners',
        'Multi-facility support',
        'Custom workflows',
        'Advanced analytics',
        'API access',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom integrations',
        'SLA guarantee'
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="section bg-slate-950 gradient-mesh-hero relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-20"></div>
      
      <div className="relative z-10 container-custom" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Simple, Transparent Pricing</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Choose the plan that fits your practice. All plans include free updates and POPIA compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`
                relative rounded-2xl p-8
                ${plan.highlighted 
                  ? 'glass-card glow-cyan scale-105 border-2 border-cyan-500/50' 
                  : 'glass-card hover:scale-105'
                }
                transition-all duration-500
                ${isInView ? 'animate-in' : 'scroll-animate'}
              `}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-pink-600 rounded-full text-white text-sm font-semibold glow-cyan">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold gradient-text-cyan">{plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span className="text-slate-400">/{plan.period.split(' ')[1]}</span>
                  )}
                </div>
                {plan.price === 'Custom' && (
                  <p className="text-slate-400 text-sm mt-1">{plan.period}</p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`
                      w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                      ${plan.highlighted 
                        ? 'bg-gradient-to-br from-cyan-500 to-pink-600' 
                        : 'bg-slate-700'
                      }
                    `}>
                      <Check className="text-white" size={14} />
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`
                  w-full py-4 rounded-lg font-semibold transition-all duration-300
                  ${plan.highlighted
                    ? 'btn-glow'
                    : 'glass-card text-white hover:bg-white/10'
                  }
                `}
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400">
            All plans include a 30-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
