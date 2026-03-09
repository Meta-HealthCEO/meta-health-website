import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Product: [
      { label: 'Features', href: '#features' },
      { label: 'Ecosystem', href: '#ecosystem' },
      { label: 'Modules', href: '#modules' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Integrations', href: '#' }
    ],
    Company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Press Kit', href: '#' },
      { label: 'Contact', href: '#' }
    ],
    Resources: [
      { label: 'Documentation', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Webinars', href: '#' }
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'POPIA Compliance', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'Cookie Policy', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container-custom py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center glow-blue">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-white font-bold text-xl">Meta Health</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              The complete healthcare management platform for modern medical practices. 
              Trusted by 500+ facilities across South Africa.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@metahealth.co.za" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <Mail size={18} />
                <span>info@metahealth.co.za</span>
              </a>
              <a href="tel:+27123456789" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <Phone size={18} />
                <span>+27 12 345 6789</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={18} />
                <span>Cape Town, South Africa</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-slate-400 text-sm">
              © 2024 Meta Health. All rights reserved.
            </div>

            {/* Compliance Badges */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg">
                <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                  P
                </div>
                <span className="text-slate-300 text-sm">POPIA</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg">
                <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                  H
                </div>
                <span className="text-slate-300 text-sm">HPCSA</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg">
                <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                  ISO
                </div>
                <span className="text-slate-300 text-sm">27001</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
