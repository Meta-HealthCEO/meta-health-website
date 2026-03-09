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
    { label: 'Solutions', href: '#features' },
    { label: 'Platform', href: '#ecosystem' },
    { label: 'Modules', href: '#modules' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-3">
            <img src="/images/logo-icon.png" alt="Meta Health" className="h-9 w-9" />
            <span className={`font-bold text-lg transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Meta Health
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-sky-600' : 'text-slate-300 hover:text-white'
              }`}>
                {l.label}
              </a>
            ))}
            <a href="#cta" className="inline-flex items-center px-5 py-2.5 bg-sky-500 text-white text-sm font-semibold rounded-xl hover:bg-sky-600 transition-colors shadow-sm">
              Book a Demo
            </a>
          </div>

          <button className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 rounded-b-xl shadow-lg py-4 space-y-1">
            {links.map(l => (
              <a key={l.href} href={l.href} className="block px-4 py-2.5 text-gray-600 hover:text-sky-600 hover:bg-sky-50 rounded-lg font-medium text-sm"
                onClick={() => setIsMobileMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <a href="#cta" className="block text-center py-3 bg-sky-500 text-white rounded-xl font-semibold text-sm">Book a Demo</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
