import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Transform Your Healthcare Practice?
            </h2>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              Join 500+ South African healthcare providers who trust Meta Health to deliver exceptional patient care and operational excellence.
            </p>

            <div className="space-y-4">
              {[
                'Free 30-day trial with full access',
                'No credit card required to start',
                'Free data migration & training',
                'Setup completed in under 7 days',
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-green-400 flex-shrink-0" size={24} />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors shadow-2xl">
                <span>Schedule a Demo</span>
                <ArrowRight size={20} />
              </button>
              <button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold border-2 border-white/20 transition-colors">
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get Started Today
            </h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="Dr. John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="john@practice.co.za"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="+27 82 123 4567"
                />
              </div>

              <div>
                <label htmlFor="practice" className="block text-sm font-medium text-gray-700 mb-2">
                  Practice Type
                </label>
                <select
                  id="practice"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                >
                  <option>Select practice type</option>
                  <option>Solo GP Practice</option>
                  <option>Multi-Doctor Practice</option>
                  <option>Specialty Clinic</option>
                  <option>Hospital</option>
                  <option>Day Clinic</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg shadow-blue-200"
              >
                Request Demo
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-6 text-center">
              We'll contact you within 24 hours to schedule your personalized demo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
