import { ArrowRight, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function CTA() {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <section className="section relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-mesh"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-950/50 to-slate-950"></div>

      <div className="relative z-10 container-custom" ref={ref}>
        <div className={`
          max-w-4xl mx-auto text-center space-y-8
          ${isInView ? 'animate-in' : 'scroll-animate'}
        `}>
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-pink-600 flex items-center justify-center glow-cyan pulse-glow">
              <Sparkles className="text-white" size={40} />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-5xl lg:text-6xl font-bold">
            <span className="text-white">Transform Your</span>
            <br />
            <span className="gradient-text">Healthcare Practice</span>
          </h2>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto">
            Join 500+ healthcare facilities already using Meta Health to deliver 
            better patient care and streamline operations.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
            <div className={`glass-card rounded-xl p-6 ${isInView ? 'animate-in' : 'scroll-animate'}`} style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold gradient-text-cyan mb-2">500+</div>
              <div className="text-slate-300">Healthcare Facilities</div>
            </div>
            <div className={`glass-card rounded-xl p-6 ${isInView ? 'animate-in' : 'scroll-animate'}`} style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold gradient-text-cyan mb-2">99.9%</div>
              <div className="text-slate-300">Uptime Guarantee</div>
            </div>
            <div className={`glass-card rounded-xl p-6 ${isInView ? 'animate-in' : 'scroll-animate'}`} style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold gradient-text-cyan mb-2">24/7</div>
              <div className="text-slate-300">Support Available</div>
            </div>
          </div>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isInView ? 'animate-in' : 'scroll-animate'}`} style={{ animationDelay: '0.5s' }}>
            <button className="btn-glow text-lg px-10 py-5 flex items-center gap-3">
              Start Free Trial
              <ArrowRight size={24} />
            </button>
            <button className="glass-card px-10 py-5 rounded-lg text-white font-semibold hover:bg-white/10 transition-all duration-300 text-lg">
              Schedule Demo
            </button>
          </div>

          {/* Trust Badges */}
          <div className={`pt-8 flex flex-wrap justify-center gap-8 ${isInView ? 'animate-in' : 'scroll-animate'}`} style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2 text-slate-400">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-pink-600 flex items-center justify-center text-white text-xs font-bold">
                P
              </div>
              <span>POPIA Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-pink-600 flex items-center justify-center text-white text-xs font-bold">
                H
              </div>
              <span>HPCSA Approved</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-pink-600 flex items-center justify-center text-white text-xs font-bold">
                ISO
              </div>
              <span>ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
