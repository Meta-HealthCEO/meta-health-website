import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Practice',
      description: 'For solo practitioners and small practices',
      price: 'From R4,500',
      period: 'per month',
      features: [
        'Up to 3 practitioners',
        'Complete EMR/EHR system',
        'Appointment scheduling',
        'Medical aid billing',
        'Patient portal',
        'Prescription management',
        'Basic reporting',
        'Email support',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
    {
      name: 'Clinic',
      description: 'For multi-doctor clinics and specialty practices',
      price: 'From R12,500',
      period: 'per month',
      features: [
        'Up to 15 practitioners',
        'All Practice features',
        'Telemedicine included',
        'Device integration',
        'Advanced analytics',
        'Multi-location support',
        'Priority support',
        'Custom workflows',
        'API access',
      ],
      cta: 'Contact Sales',
      highlighted: true,
    },
    {
      name: 'Hospital',
      description: 'For hospitals and large healthcare groups',
      price: 'Custom',
      period: 'enterprise pricing',
      features: [
        'Unlimited practitioners',
        'All Clinic features',
        'Hospital information system',
        'Bed & theatre management',
        'Emergency room module',
        'ICU monitoring',
        'Dedicated account manager',
        'White-label options',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transparent, Scalable Pricing
          </h2>
          <p className="text-xl text-gray-600">
            No hidden fees. No per-patient charges. One predictable monthly price.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl border-2 ${
                plan.highlighted
                  ? 'border-blue-600 shadow-2xl lg:scale-105'
                  : 'border-gray-200 shadow-lg'
              } p-8 transition-all hover:shadow-2xl`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                </div>
                <p className="text-gray-600 mt-1">{plan.period}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <Check className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors ${
                  plan.highlighted
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight size={20} />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-blue-600 mb-2">30 Days</p>
              <p className="text-gray-700">Free trial period</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600 mb-2">No Setup Fee</p>
              <p className="text-gray-700">Free onboarding & training</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600 mb-2">24/7</p>
              <p className="text-gray-700">Support available</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-4">
              All plans include data migration, staff training, and ongoing support
            </p>
            <p className="text-sm text-gray-500">
              Prices exclude VAT. Medical aid integration fees may apply. Custom enterprise agreements available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
