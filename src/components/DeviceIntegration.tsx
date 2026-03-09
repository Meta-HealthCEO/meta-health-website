import { Watch, HeartPulse, Thermometer, Droplets, Scale, Stethoscope } from 'lucide-react';

const wearables = ['Apple Watch', 'Garmin', 'Fitbit', 'Samsung Galaxy Watch', 'Google Pixel Watch', 'Apple HealthKit', 'Google Health Connect'];

const rpmDevices = [
  { icon: HeartPulse, name: 'Blood Pressure Monitor', metric: 'Systolic / Diastolic mmHg' },
  { icon: Droplets, name: 'Pulse Oximeter', metric: 'SpO2 % & Heart Rate' },
  { icon: Droplets, name: 'Glucometer', metric: 'Blood Glucose mmol/L' },
  { icon: Thermometer, name: 'Digital Thermometer', metric: 'Body Temperature' },
  { icon: Scale, name: 'Smart Scale', metric: 'Weight, BMI, Body Fat %' },
  { icon: Stethoscope, name: 'Digital Stethoscope', metric: 'Auscultation Audio' },
];

export default function DeviceIntegration() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-3">Device integrations</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Works with the devices your patients already use
          </h2>
          <p className="text-lg text-gray-500">
            Consumer wearables and clinical-grade RPM devices. Data flows automatically into patient records.
          </p>
        </div>

        {/* Wearables */}
        <div className="mb-16">
          <h3 className="text-center font-semibold text-gray-900 mb-6">Consumer Wearables</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {wearables.map((name) => (
              <div key={name} className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-5 py-2.5 hover:border-sky-200 hover:bg-sky-50 transition-colors">
                <Watch size={16} className="text-gray-400" />
                <span className="text-sm font-medium text-gray-700">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RPM Devices */}
        <div>
          <h3 className="text-center font-semibold text-gray-900 mb-6">Clinical RPM Devices</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rpmDevices.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.name} className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-sky-200 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{d.name}</h4>
                    <p className="text-xs text-gray-500">{d.metric}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
