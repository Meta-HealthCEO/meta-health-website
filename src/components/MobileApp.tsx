import { Smartphone, Video, Bell, Calendar, FileText, Heart } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function MobileApp() {
  const [ref, isInView] = useInView<HTMLDivElement>();

  const features = [
    {
      icon: Video,
      title: 'Telemedicine Anywhere',
      description: 'Conduct video consultations from any location'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Manage appointments on the go with AI assistance'
    },
    {
      icon: FileText,
      title: 'Mobile Prescribing',
      description: 'Write and send prescriptions instantly'
    },
    {
      icon: Bell,
      title: 'Real-time Alerts',
      description: 'Get notified of urgent patient updates'
    },
    {
      icon: Heart,
      title: 'Patient Vitals',
      description: 'Monitor patient health data in real-time'
    }
  ];

  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50"></div>
      
      <div className="relative z-10 container-custom" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h2 className="text-5xl font-bold text-slate-900 mb-6">
                Meta Health <span className="gradient-text">One</span>
              </h2>
              <p className="text-xl text-slate-600">
                Healthcare management in your pocket. Native iOS and Android apps 
                designed for healthcare professionals on the move.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={`
                      flex gap-4 p-6 rounded-xl
                      bg-white border border-slate-200
                      hover:border-cyan-300 hover:shadow-lg
                      transition-all duration-300
                      ${isInView ? 'animate-in-right' : 'scroll-animate'}
                    `}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-4">
              <button className="btn-primary flex items-center gap-2">
                <Smartphone size={20} />
                Download on iOS
              </button>
              <button className="btn-primary flex items-center gap-2">
                <Smartphone size={20} />
                Get on Android
              </button>
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className={`relative ${isInView ? 'float-animation' : ''}`}>
              {/* Phone Frame */}
              <div className="relative w-80 h-[640px] bg-slate-900 rounded-[3rem] p-4 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-slate-900 rounded-b-3xl z-20"></div>
                
                {/* Screen */}
                <div className="relative w-full h-full bg-gradient-to-br from-slate-950 to-slate-900 rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-8 text-white text-xs z-10">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative pt-12 pb-8 px-6 h-full">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-white text-2xl font-bold mb-2">Dashboard</h3>
                      <p className="text-slate-400 text-sm">Today's Overview</p>
                    </div>
                    
                    {/* Stats Cards */}
                    <div className="space-y-4">
                      <div className="glass-card rounded-2xl p-4 glow-cyan">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-slate-300 text-sm">Appointments</span>
                          <Calendar className="text-cyan-400" size={20} />
                        </div>
                        <div className="text-white text-3xl font-bold gradient-text-cyan">24</div>
                      </div>
                      
                      <div className="glass-card rounded-2xl p-4 glow-pink">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-slate-300 text-sm">Video Calls</span>
                          <Video className="text-pink-400" size={20} />
                        </div>
                        <div className="text-white text-3xl font-bold gradient-text-pink">8</div>
                      </div>
                      
                      <div className="glass-card rounded-2xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-slate-300 text-sm">Alerts</span>
                          <Bell className="text-cyan-400" size={20} />
                        </div>
                        <div className="text-white text-3xl font-bold">3</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -right-8 top-20 glass-card rounded-xl p-4 glow-blue float-delay-1 hidden lg:block">
                <div className="flex items-center gap-2">
                  <Heart className="text-red-400" size={20} />
                  <div>
                    <div className="text-white text-sm font-semibold">Heart Rate</div>
                    <div className="text-slate-300 text-xs">72 BPM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
