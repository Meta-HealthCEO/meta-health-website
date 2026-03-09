import { UserPlus, Settings, Rocket, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Sign Up & Onboard',
      description: 'Create your account in minutes. Our team handles data migration and system setup completely free.',
      duration: '1-2 days',
    },
    {
      icon: Settings,
      title: 'Customize & Configure',
      description: 'Tailor workflows, templates, and settings to match your practice needs. Full training provided.',
      duration: '2-3 days',
    },
    {
      icon: Rocket,
      title: 'Launch & Go Live',
      description: 'Start seeing patients with Meta Health. Our support team is available 24/7 during transition.',
      duration: '1 day',
    },
    {
      icon: TrendingUp,
      title: 'Optimize & Scale',
      description: 'Continuously improve with AI insights, analytics, and our dedicated success team.',
      duration: 'Ongoing',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get Started in Under a Week
          </h2>
          <p className="text-xl text-gray-600">
            Simple onboarding process with full support every step of the way
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative">
                {/* Connector Line (hidden on mobile, shown on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-300 -ml-4 -mr-4"></div>
                )}

                <div className="relative bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>

                  <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-blue-600" size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {step.duration}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to get started? No credit card required for trial.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg shadow-blue-200">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
