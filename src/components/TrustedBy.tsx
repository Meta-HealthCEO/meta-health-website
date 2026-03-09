import { useInView } from '../hooks/useInView';

export default function TrustedBy() {
  const [ref, isInView] = useInView<HTMLDivElement>();

  const medicalAids = [
    { name: 'Discovery Health', logo: 'https://via.placeholder.com/150x60/1e293b/3B82F6?text=Discovery' },
    { name: 'Momentum', logo: 'https://via.placeholder.com/150x60/1e293b/06B6D4?text=Momentum' },
    { name: 'Bonitas', logo: 'https://via.placeholder.com/150x60/1e293b/8B5CF6?text=Bonitas' },
    { name: 'Medshield', logo: 'https://via.placeholder.com/150x60/1e293b/3B82F6?text=Medshield' },
    { name: 'GEMS', logo: 'https://via.placeholder.com/150x60/1e293b/06B6D4?text=GEMS' },
  ];

  return (
    <section className="py-20 px-6 bg-slate-950">
      <div className="container-custom" ref={ref}>
        <div className="text-center mb-12">
          <p className="text-slate-400 text-sm uppercase tracking-wider mb-4">
            Trusted By Leading Medical Aids
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {medicalAids.map((aid, index) => (
            <div
              key={aid.name}
              className={`grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 ${
                isInView ? 'animate-in' : 'scroll-animate'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-slate-400 hover:text-white transition-colors text-xl font-semibold">
                {aid.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
