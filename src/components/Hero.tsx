import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                South Africa's Leading Healthcare Platform
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Enterprise Healthcare Management
              <span className="block text-blue-600 mt-2">Built for Scale</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive practice management, hospital operations, and patient care ecosystem designed for South African healthcare providers. HPCSA compliant, POPIA certified.
            </p>

            {/* Trust Indicators */}
            <div className="space-y-3">
              {[
                'Trusted by 500+ healthcare facilities',
                'POPIA compliant & HPCSA certified',
                'Full medical aid integration & billing',
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-blue-200">
                <span>Schedule a Demo</span>
                <ArrowRight size={20} />
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-semibold border-2 border-gray-200 transition-colors">
                View Pricing
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80"
                alt="Healthcare professional using Meta Health platform"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 rounded-full p-3">
                  <CheckCircle2 className="text-green-600" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">99.9%</p>
                  <p className="text-sm text-gray-600">Uptime SLA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
