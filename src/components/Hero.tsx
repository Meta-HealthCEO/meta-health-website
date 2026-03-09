import { ArrowRight, Activity, Building2, Shield } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';

export default function Hero() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const facilities = useCountUp(500, 2000, isInView);
  const modules = useCountUp(25, 2000, isInView);
  const uptime = useCountUp(99.9, 2000, isInView);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-mesh-hero"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      {/* Hero Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&q=80"
          alt="Healthcare Technology"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/80 to-slate-950/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pt-20" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">The Future of</span>
                <br />
                <span className="gradient-text">Healthcare Management</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Transform your healthcare practice with our all-in-one platform. Powered by AI, 
                trusted by 500+ facilities across South Africa.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text-blue">
                  {facilities}+
                </div>
                <div className="text-sm text-slate-400">Facilities</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text-blue">
                  {modules}+
                </div>
                <div className="text-sm text-slate-400">Modules</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text-blue">
                  {uptime.toFixed(1)}%
                </div>
                <div className="text-sm text-slate-400">Uptime</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button className="btn-glow flex items-center gap-2">
                Start Free Trial
                <ArrowRight size={20} />
              </button>
              <button className="glass-card px-8 py-4 rounded-lg text-white font-semibold hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right - Floating Cards */}
          <div className="relative hidden lg:block h-[600px]">
            {/* Card 1 */}
            <div className="absolute top-0 right-0 w-72 glass-card rounded-2xl p-6 glow-blue float-animation">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center">
                  <Activity className="text-blue-400" size={24} />
                </div>
                <div>
                  <div className="text-white font-semibold">Active Patients</div>
                  <div className="text-2xl font-bold gradient-text-blue">12,458</div>
                </div>
              </div>
              <div className="mt-4 h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full"></div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="absolute top-40 right-20 w-64 glass-card rounded-2xl p-6 glow-purple float-delay-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center">
                  <Building2 className="text-purple-400" size={24} />
                </div>
                <div>
                  <div className="text-white font-semibold">Appointments</div>
                  <div className="text-2xl font-bold gradient-text">847</div>
                  <div className="text-sm text-green-400">+23% this week</div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="absolute bottom-20 right-10 w-60 glass-card rounded-2xl p-6 glow-teal float-delay-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-teal-600/20 flex items-center justify-center">
                  <Shield className="text-teal-400" size={24} />
                </div>
                <div>
                  <div className="text-white font-semibold">Security</div>
                  <div className="text-sm text-slate-300">POPIA Compliant</div>
                  <div className="text-sm text-teal-400">ISO 27001 Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </div>
  );
}
