export default function TrustedBy() {
  const partners = [
    'Discovery Health', 'Momentum Health', 'Bonitas', 'Medshield', 
    'GEMS', 'Bestmed', 'Fedhealth', 'Medihelp'
  ];

  return (
    <section className="py-12 border-y border-gray-100 bg-gray-50/50">
      <div className="container-custom">
        <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider mb-8">
          Integrated with leading South African medical aids
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
          {partners.map((name) => (
            <span key={name} className="text-gray-400 font-semibold text-sm hover:text-gray-600 transition-colors cursor-default">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
