import { Watch, Activity, Heart, Droplet, Wind, Thermometer } from 'lucide-react';

const DeviceIntegration = () => {
  const wearables = [
    {
      name: 'Apple Watch',
      description: 'Complete HealthKit integration',
      metrics: ['Heart Rate', 'Steps', 'Sleep', 'Activity'],
    },
    {
      name: 'Garmin',
      description: 'Professional fitness tracking',
      metrics: ['GPS', 'VO2 Max', 'Training Load'],
    },
    {
      name: 'Fitbit',
      description: 'Comprehensive health metrics',
      metrics: ['Sleep Stages', 'SpO2', 'Stress'],
    },
    {
      name: 'Samsung Galaxy Watch',
      description: 'Samsung Health integration',
      metrics: ['ECG', 'Blood Pressure', 'Body Composition'],
    },
  ];

  const medicalDevices = [
    {
      icon: Heart,
      name: 'Blood Pressure Monitors',
      description: 'Automated BP tracking with threshold alerts',
    },
    {
      icon: Droplet,
      name: 'Glucose Monitors',
      description: 'Continuous glucose monitoring for diabetic patients',
    },
    {
      icon: Wind,
      name: 'Pulse Oximeters',
      description: 'Real-time SpO2 and heart rate monitoring',
    },
    {
      icon: Thermometer,
      name: 'Smart Thermometers',
      description: 'Temperature tracking and fever alerts',
    },
    {
      icon: Activity,
      name: 'ECG Devices',
      description: 'Medical-grade ECG recording and analysis',
    },
    {
      icon: Watch,
      name: 'Weight Scales',
      description: 'Smart scales with body composition analysis',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Device Integration Ecosystem
          </h2>
          <p className="text-xl text-gray-600">
            Connect wearables and medical devices for continuous patient monitoring and real-time health data
          </p>
        </div>

        {/* Wearables Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Wearable Devices</h3>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&q=80"
                alt="Wearable devices"
                className="w-32 h-32 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wearables.map((device) => (
              <div
                key={device.name}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Watch className="text-blue-600" size={24} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{device.name}</h4>
                <p className="text-sm text-gray-600 mb-4">{device.description}</p>
                <div className="space-y-2">
                  {device.metrics.map((metric) => (
                    <div key={metric} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Medical Devices Section */}
        <div className="relative">
          {/* Background Image */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-5">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
              alt="Medical technology"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Remote Patient Monitoring Devices</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medicalDevices.map((device) => {
                const Icon = device.icon;
                return (
                  <div
                    key={device.name}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="text-blue-600" size={26} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{device.name}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{device.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Integration Stats */}
            <div className="grid md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-300">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">50+</p>
                <p className="text-gray-700">Device Integrations</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">Real-time</p>
                <p className="text-gray-700">Data Synchronization</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">24/7</p>
                <p className="text-gray-700">Automated Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceIntegration;
