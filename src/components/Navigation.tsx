import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Platform', href: '#ecosystem' },
    { label: 'Modules', href: '#modules' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-3">
            <img src="/images/logo-icon.png" alt="Meta Health" className="h-9 w-9" />
            <span className={`font-bold text-lg ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              Meta Health
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#cta" className="btn-primary text-sm !px-6 !py-2.5">
              Book a Demo
            </a>
          </div>

          <button className="md:hidden text-gray-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 space-y-3">
            {links.map(l => (
              <a key={l.href} href={l.href} className="block px-2 py-2 text-gray-600 hover:text-sky-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#cta" className="btn-primary block text-center text-sm !py-3 mx-2">Book a Demo</a>
          </div>
        )}
      </div>
    </nav>
  );
}
