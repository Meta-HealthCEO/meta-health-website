import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-card shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center glow-blue">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-white font-bold text-xl">Meta Health</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#ecosystem" className="text-slate-300 hover:text-white transition-colors">
              Ecosystem
            </a>
            <a href="#modules" className="text-slate-300 hover:text-white transition-colors">
              Modules
            </a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">
              Pricing
            </a>
            <button className="btn-glow">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-card rounded-lg mt-2 p-4 space-y-4">
            <a
              href="#features"
              className="block text-slate-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#ecosystem"
              className="block text-slate-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ecosystem
            </a>
            <a
              href="#modules"
              className="block text-slate-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Modules
            </a>
            <a
              href="#pricing"
              className="block text-slate-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <button className="btn-glow w-full">Get Started</button>
          </div>
        )}
      </div>
    </nav>
  );
}
