import { Shield, Calendar, MessageSquare, FileText, Bell, Users } from 'lucide-react';

const MobileApp = () => {
  const appFeatures = [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Book appointments, manage calendar, and get automated reminders',
    },
    {
      icon: MessageSquare,
      title: 'Secure Messaging',
      description: 'HIPAA-compliant chat between patients and healthcare providers',
    },
    {
      icon: FileText,
      title: 'Medical Records',
      description: 'Access complete health history, test results, and prescriptions',
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Medication reminders, appointment alerts, and health updates',
    },
    {
      icon: Users,
      title: 'Family Management',
      description: 'Manage care for entire family from a single account',
    },
    {
      icon: Shield,
      title: 'Biometric Security',
      description: 'Face ID and fingerprint authentication for data protection',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                alt="Meta Health One mobile app"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent"></div>
            </div>
            
            {/* App Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-full p-3">
                  <Smartphone className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">4.9★</p>
                  <p className="text-sm text-gray-600">App Store</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
                iOS & Android
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold">
              Meta Health One
              <span className="block text-blue-400 mt-2">Patient & Provider App</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Native mobile experience for both patients and healthcare providers. Manage appointments, access records, communicate securely, and monitor health data on the go.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {appFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Icon className="text-blue-400" size={20} />
                      <h3 className="font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors">
                <span>Download on App Store</span>
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors">
                <span>Get it on Google Play</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Smartphone = ({ className, size }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

export default MobileApp;
