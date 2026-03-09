import { ArrowRight } from 'lucide-react';

const solutions = [
  {
    label: 'Practice Management',
    title: 'The complete EHR for modern practices',
    desc: 'A full-featured electronic health record and practice management system designed for solo practitioners, group practices, and multi-disciplinary clinics. From patient intake to clinical documentation to billing — everything in one seamless workflow.',
    capabilities: [
      'Electronic Health Records (EHR)',
      'Appointment scheduling & online booking',
      'Clinical notes with customisable templates',
      'e-Prescribing & script management',
      'ICD-10 coding & medical aid billing',
      'Patient portal & self-service',
      'Lab orders & results management',
      'Referral management & tracking',
      'Document management & digital forms',
      'Financial reporting & analytics',
    ],
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=700&q=80',
    reversed: false,
  },
  {
    label: 'Hospital Management',
    title: 'Enterprise-grade hospital operations',
    desc: 'A comprehensive Hospital Information System (HIS) built for multi-department hospitals, day clinics, and large healthcare facilities. Manage every aspect of hospital operations — from admission to discharge — with real-time visibility across departments.',
    capabilities: [
      'Admission, Discharge & Transfer (ADT)',
      'Bed management & occupancy tracking',
      'Operating theatre scheduling',
      'Ward rounds & nursing workflows',
      'Pharmacy & formulary management',
      'Blood bank & transfusion tracking',
      'Radiology & imaging orders (RIS)',
      'ICU & critical care monitoring',
      'Mortuary & post-mortem management',
      'Hospital-wide analytics & dashboards',
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&q=80',
    reversed: true,
  },
];

export default function Features() {
  return (
    <section id="features" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-3">Our solutions</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Two platforms. Every healthcare setting.
          </h2>
          <p className="text-lg text-gray-500">
            Whether you run a two-doctor practice or a 500-bed hospital, Meta Health scales to fit.
          </p>
        </div>

        <div className="space-y-28">
          {solutions.map((s) => (
            <div key={s.label} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${s.reversed ? 'lg:[direction:rtl]' : ''}`}>
              {/* Image */}
              <div className={s.reversed ? 'lg:[direction:ltr]' : ''}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img src={s.image} alt={s.title} className="w-full h-[400px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full">{s.label}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${s.reversed ? 'lg:[direction:ltr]' : ''}`}>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{s.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{s.desc}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {s.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{cap}</span>
                    </div>
                  ))}
                </div>

                <a href="#cta" className="inline-flex items-center gap-2 text-sky-600 font-semibold text-sm hover:text-sky-700 transition-colors">
                  Learn more <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
