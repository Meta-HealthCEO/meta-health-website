import { Watch, Activity, Heart, Thermometer, Wind, Droplets } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function DeviceIntegration() {
  const [ref, isInView] = useInView<HTMLDivElement>();

  const wearables = [
    { name: 'Apple Watch', color: 'from-slate-400 to-slate-600' },
    { name: 'Garmin', color: 'from-blue-500 to-blue-700' },
    { name: 'Fitbit', color: 'from-teal-500 to-teal-700' },
    { name: 'Samsung Galaxy', color: 'from-purple-500 to-purple-700' }
  ];

  const devices = [
    {
      icon: Heart,
      name: 'Blood Pressure Monitor',
      description: 'Automatic BP tracking and alerts',
      color: 'red'
    },
    {
      icon: Droplets,
      name: 'Glucose Monitor',
      description: 'Continuous glucose monitoring',
      color: 'blue'
    },
    {
      icon: Wind,
      name: 'Pulse Oximeter',
      description: 'SpO2 and heart rate monitoring',
      color: 'teal'
    },
    {
      icon: Thermometer,
      name: 'Smart Thermometer',
      description: 'Temperature tracking and trends',
      color: 'orange'
    },
    {
      icon: Activity,
      name: 'ECG Monitor',
      description: 'Real-time cardiac monitoring',
      color: 'purple'
    },
    {
      icon: Watch,
      name: 'Activity Trackers',
      description: 'Steps, sleep, and activity data',
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'red':
        return 'from-red-600/20 to-red-600/5 hover:from-red-600/30';
      case 'blue':
        return 'from-blue-600/20 to-blue-600/5 hover:from-blue-600/30';
      case 'teal':
        return 'from-teal-600/20 to-teal-600/5 hover:from-teal-600/30';
      case 'orange':
        return 'from-orange-600/20 to-orange-600/5 hover:from-orange-600/30';
      case 'purple':
        return 'from-purple-600/20 to-purple-600/5 hover:from-purple-600/30';
      case 'green':
        return 'from-green-600/20 to-green-600/5 hover:from-green-600/30';
      default:
        return '';
    }
  };

  return (
    <section className="section bg-slate-950 dot-pattern">
      <div className="container-custom" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Device Integration</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Seamlessly connect with wearables and medical devices for comprehensive patient monitoring
          </p>
        </div>

        {/* Wearables */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Compatible Wearables
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {wearables.map((wearable, index) => (
              <div
                key={wearable.name}
                className={`
                  glass-card rounded-2xl p-8
                  hover:scale-105 transition-all duration-300
                  ${isInView ? 'animate-scale' : 'scroll-animate'}
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${wearable.color} flex items-center justify-center mb-4`}>
                  <Watch className="text-white" size={32} />
                </div>
                <div className="text-white font-semibold text-lg">{wearable.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RPM Devices */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Remote Patient Monitoring Devices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devices.map((device, index) => {
              const Icon = device.icon;
              return (
                <div
                  key={device.name}
                  className={`
                    glass-card rounded-2xl p-6
                    bg-gradient-to-br ${getColorClasses(device.color)}
                    hover:scale-105 glow-hover-blue transition-all duration-300
                    ${isInView ? 'animate-in' : 'scroll-animate'}
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {device.name}
                  </h4>
                  <p className="text-slate-300">
                    {device.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
