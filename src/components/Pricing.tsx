import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Practice',
    desc: 'For solo practitioners and small practices',
    price: 'R2,499',
    period: '/month',
    features: [
      'Up to 3 practitioners',
      'Patient records & scheduling',
      'Clinical notes & prescriptions',
      'Medical aid billing',
      'Basic reporting',
      'Email support',
    ],
    highlighted: false,
  },
  {
    name: 'Clinic',
    desc: 'For multi-practitioner clinics and groups',
    price: 'R5,999',
    period: '/month',
    features: [
      'Up to 15 practitioners',
      'Everything in Practice',
      'Telemedicine & video calls',
      'AI clinical notes',
      'Remote patient monitoring',
      'Advanced analytics',
      'Patient mobile app',
      'Priority support',
    ],
    highlighted: true,
  },
  {
    name: 'Hospital',
    desc: 'For hospitals and large healthcare facilities',
    price: 'Custom',
    period: '',
    features: [
      'Unlimited practitioners',
      'Everything in Clinic',
      'Multi-department management',
      'Bed & theatre management',
      'Custom integrations',
      'Dedicated account manager',
      'On-site training',
      'SLA guarantee',
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-3">Pricing</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-500">
            Start with what you need. Scale as you grow. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl p-8 ${
              plan.highlighted
                ? 'bg-sky-500 text-white shadow-xl shadow-sky-500/20 scale-105'
                : 'bg-gray-50 border border-gray-100'
            }`}>
              <div className="mb-6">
                <h3 className={`text-lg font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <p className={`text-sm mt-1 ${plan.highlighted ? 'text-sky-100' : 'text-gray-500'}`}>{plan.desc}</p>
              </div>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? 'text-sky-100' : 'text-gray-500'}`}>{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={16} className={`mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-sky-200' : 'text-sky-500'}`} />
                    <span className={`text-sm ${plan.highlighted ? 'text-sky-50' : 'text-gray-600'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#cta" className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                plan.highlighted
                  ? 'bg-white text-sky-600 hover:bg-sky-50'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}>
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
