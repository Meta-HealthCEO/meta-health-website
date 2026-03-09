import { Building2, Hospital, Stethoscope } from 'lucide-react';

const ForWho = () => {
  const audiences = [
    {
      icon: Stethoscope,
      title: 'Medical Practices',
      description: 'Perfect for GP practices, specialist clinics, and multi-doctor groups',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
      features: [
        'Complete EMR/EHR system',
        'Medical aid billing integration',
        'Appointment scheduling',
        'Prescription management',
        'Patient portal access',
        'HPCSA compliance tools',
      ],
      stats: { number: '500+', label: 'Practices' },
    },
    {
      icon: Building2,
      title: 'Specialty Clinics',
      description: 'Tailored workflows for dental, physio, dermatology, and more',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80',
      features: [
        'Specialty-specific templates',
        'Treatment planning tools',
        'Before/after imaging',
        'Multi-location support',
        'Revenue cycle management',
        'Inventory tracking',
      ],
      stats: { number: '200+', label: 'Clinics' },
    },
    {
      icon: Hospital,
      title: 'Hospitals & Day Clinics',
      description: 'Enterprise-grade hospital information system (HIS)',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
      features: [
        'Bed & ward management',
        'Theatre scheduling',
        'ICU monitoring',
        'Admission/discharge workflows',
        'Multi-department coordination',
        'Emergency room management',
      ],
      stats: { number: '50+', label: 'Hospitals' },
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Built for Every Healthcare Provider
          </h2>
          <p className="text-xl text-gray-600">
            From solo practitioners to multi-facility hospital groups, Meta Health scales with your needs
          </p>
        </div>

        {/* Audiences */}
        <div className="space-y-12">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={audience.title}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Image */}
                <div className={isEven ? '' : 'lg:col-start-2'}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={audience.image}
                      alt={audience.title}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                    
                    {/* Stats Overlay */}
                    <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-xl p-4">
                      <p className="text-3xl font-bold text-blue-600">{audience.stats.number}</p>
                      <p className="text-sm text-gray-600">{audience.stats.label}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}>
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="text-blue-600" size={32} />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {audience.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {audience.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {audience.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Not Sure Which Plan Fits Your Practice?
          </h3>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Schedule a personalized demo with our healthcare technology experts
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors shadow-xl">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
