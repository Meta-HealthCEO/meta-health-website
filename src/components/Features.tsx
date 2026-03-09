import { Calendar, Building2, Video, Activity, CreditCard, Brain } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Practice Management',
    desc: 'End-to-end workflow for appointments, clinical notes, prescriptions, and patient records. Everything your practice needs in one place.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80',
    color: 'sky',
  },
  {
    icon: Building2,
    title: 'Hospital Management',
    desc: 'Multi-department operations, bed management, theatre scheduling, and ward rounds for hospitals and large facilities.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
    color: 'violet',
  },
  {
    icon: Video,
    title: 'Telemedicine',
    desc: 'HD video consultations with integrated clinical tools. Screen sharing, digital prescriptions, and automated follow-ups.',
    image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80',
    color: 'emerald',
  },
  {
    icon: Activity,
    title: 'Remote Monitoring',
    desc: 'Real-time patient vitals from wearables and medical devices. Automated alerts when readings fall outside safe ranges.',
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&q=80',
    color: 'rose',
  },
  {
    icon: CreditCard,
    title: 'Medical Aid Billing',
    desc: 'Automated ICD-10 coding, real-time eligibility checks, and electronic claims submission to all major South African medical aids.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
    color: 'amber',
  },
  {
    icon: Brain,
    title: 'AI Automation',
    desc: 'AI-generated clinical notes, smart scheduling, predictive analytics, and an AI assistant that handles admin so you can focus on patients.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
    color: 'pink',
  },
];

const colorMap: Record<string, string> = {
  sky: 'bg-sky-50 text-sky-600',
  violet: 'bg-violet-50 text-violet-600',
  emerald: 'bg-emerald-50 text-emerald-600',
  rose: 'bg-rose-50 text-rose-600',
  amber: 'bg-amber-50 text-amber-600',
  pink: 'bg-pink-50 text-pink-600',
};

export default function Features() {
  return (
    <section id="features" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-3">Everything you need</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            One platform, every capability
          </h2>
          <p className="text-lg text-gray-500">
            Replace fragmented tools with a unified platform purpose-built for healthcare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={f.image} alt={f.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className={`w-10 h-10 rounded-lg ${colorMap[f.color]} flex items-center justify-center mb-4`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
