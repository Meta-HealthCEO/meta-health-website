import { Monitor, Smartphone, Watch } from 'lucide-react';

const Ecosystem = () => {
  const pillars = [
    {
      icon: Monitor,
      title: 'Web Platform',
      description: 'Comprehensive practice and hospital management system accessible from any browser. Full EMR/EHR, billing, scheduling, and clinical workflows.',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
      features: [
        'Cloud-based access',
        'Multi-location support',
        'Role-based permissions',
        'Real-time collaboration',
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Native iOS and Android app for healthcare providers and patients. Access records, schedule appointments, and manage care on the go.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
      features: [
        'Patient portal',
        'Provider dashboard',
        'Secure messaging',
        'Offline mode',
      ],
    },
    {
      icon: Watch,
      title: 'Device Integration',
      description: 'Seamless integration with wearables and medical devices. Continuous monitoring and real-time health data synchronization.',
      image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&q=80',
      features: [
        'Apple Health & HealthKit',
        'Google Fit integration',
        'Medical device APIs',
        'Automated data capture',
      ],
    },
  ];

  return (
    <section id="ecosystem" className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete Healthcare Ecosystem
          </h2>
          <p className="text-xl text-gray-600">
            Seamlessly connected across web, mobile, and devices for comprehensive patient care
          </p>
        </div>

        {/* Three Pillars */}
        <div className="space-y-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={pillar.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Content */}
                <div className={isEven ? '' : 'lg:col-start-2'}>
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>
                  <ul className="space-y-3">
                    {pillar.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className={isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
