import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Ecosystem', href: '#ecosystem' },
      { label: 'Modules', href: '#modules' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Integrations', href: '#integrations' },
    ],
    solutions: [
      { label: 'Medical Practices', href: '#' },
      { label: 'Specialty Clinics', href: '#' },
      { label: 'Hospitals', href: '#' },
      { label: 'Day Clinics', href: '#' },
      { label: 'Telemedicine', href: '#' },
    ],
    resources: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Support Center', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Blog', href: '#' },
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#contact' },
      { label: 'Partners', href: '#' },
      { label: 'Press Kit', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'POPIA Compliance', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  };

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg"></div>
              <span className="text-2xl font-bold text-white">Meta Health</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              South Africa's leading healthcare management platform. Trusted by 500+ healthcare facilities.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:info@metahealth.co.za" className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                <Mail size={18} />
                <span>info@metahealth.co.za</span>
              </a>
              <a href="tel:+27210000000" className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                <Phone size={18} />
                <span>+27 21 000 0000</span>
              </a>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Cape Town, South Africa</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Links & Compliance Badges */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
              {footerLinks.legal.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-blue-400 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>

            {/* Compliance Badges */}
            <div className="flex items-center space-x-4">
              <div className="px-3 py-1 bg-gray-800 border border-gray-700 rounded text-xs font-medium">
                POPIA Compliant
              </div>
              <div className="px-3 py-1 bg-gray-800 border border-gray-700 rounded text-xs font-medium">
                HPCSA Certified
              </div>
              <div className="px-3 py-1 bg-gray-800 border border-gray-700 rounded text-xs font-medium">
                ISO 27001
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Meta Health. All rights reserved. Proudly South African.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
