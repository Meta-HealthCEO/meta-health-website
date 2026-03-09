import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&q=80"
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
      </div>
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-slate-300">Full EHR, Hospital Management & Medical Billing Platform</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            The operating system for
            <span className="block text-sky-400"> South African healthcare</span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
            A complete Electronic Health Record, practice management, hospital information system, and AI-powered billing platform. From a solo GP practice to a 500-bed hospital — Meta Health runs it all.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#cta" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/25">
              Book a Demo <ArrowRight size={18} />
            </a>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-xl hover:border-slate-400 hover:text-white transition-all">
              <Play size={18} /> Watch Overview
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
            {[
              { value: '500+', label: 'Healthcare facilities' },
              { value: '50+', label: 'Integrated modules' },
              { value: '99.9%', label: 'Platform uptime' },
              { value: '60%', label: 'Less admin time with AI' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl lg:text-3xl font-bold text-white">{s.value}</div>
                <div className="text-sm text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
