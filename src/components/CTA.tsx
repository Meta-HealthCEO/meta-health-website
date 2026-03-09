export default function CTA() {
  return (
    <section className="section bg-gradient-to-r from-primary-600 via-teal-600 to-primary-600 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Transform Your Practice Today
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
            Stop wasting time on paperwork and outdated software. 
            Join the AI-powered healthcare revolution with Meta Health.
          </p>

          {/* Stats bar */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-10">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">80%</div>
                <div className="text-blue-100">Less admin time</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100">AI automated</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Cloud access</div>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="mailto:info@meta-health.co.za?subject=Meta Health Demo Request&body=Hi, I'd like to schedule a demo of Meta Health for my practice." 
              className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4 inline-block text-center shadow-2xl"
            >
              📧 Schedule a Demo
            </a>
            <a 
              href="#features" 
              className="btn bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white/20 text-lg px-8 py-4 inline-block text-center"
            >
              Learn More
            </a>
          </div>

          <p className="text-sm text-blue-100">
            ✓ No credit card required • ✓ Free demo • ✓ Custom quote within 24 hours
          </p>
        </div>
      </div>
    </section>
  )
}
