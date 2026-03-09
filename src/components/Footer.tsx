import { ShieldCheck, Award, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/images/logo-icon.png" alt="Meta Health" className="h-8 w-8" />
              <span className="text-white font-bold text-lg">Meta Health</span>
            </div>
            <p className="text-sm leading-relaxed">
              The complete healthcare management platform for South African medical practices, clinics, and hospitals.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#ecosystem" className="hover:text-white transition-colors">Platform</a></li>
              <li><a href="#modules" className="hover:text-white transition-colors">Modules</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="cursor-default">Solo Practitioners</span></li>
              <li><span className="cursor-default">Group Practices</span></li>
              <li><span className="cursor-default">Clinics</span></li>
              <li><span className="cursor-default">Hospitals</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>hello@metahealth.co.za</li>
              <li>Cape Town, South Africa</li>
            </ul>
          </div>
        </div>

        {/* Compliance badges */}
        <div className="flex flex-wrap items-center gap-6 py-8 border-t border-gray-800">
          <div className="flex items-center gap-2 text-sm">
            <ShieldCheck size={16} className="text-sky-500" />
            <span>POPIA Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Award size={16} className="text-sky-500" />
            <span>HPCSA Certified</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Lock size={16} className="text-sky-500" />
            <span>ISO 27001</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-800 text-sm">
          &copy; {new Date().getFullYear()} Meta Health. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
