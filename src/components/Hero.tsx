import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-gradient-subtle overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-100 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-sky-700">Trusted by 500+ healthcare facilities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              The complete platform for
              <span className="text-sky-500"> modern healthcare</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-500 max-w-lg leading-relaxed">
              Practice management, telemedicine, AI automation, and patient engagement — all in one platform. Built for South African healthcare providers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#cta" className="btn-primary gap-2">
                Get Started <ArrowRight size={18} />
              </a>
              <button className="btn-outline gap-2">
                <Play size={18} /> Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <div className="flex -space-x-3">
                {[
                  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=80&h=80&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=80&h=80&fit=crop&crop=face',
                ].map((src, i) => (
                  <img key={i} src={src} alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-500">Loved by healthcare professionals</p>
              </div>
            </div>
          </div>

          {/* Right — Hero image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-sky-500/10">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                alt="Doctor using Meta Health platform on tablet"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 border border-gray-100">
              <div className="text-3xl font-bold text-gray-900">99.9%</div>
              <div className="text-sm text-gray-500">Platform uptime</div>
            </div>
            {/* Second floating card */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm font-semibold text-gray-700">POPIA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
