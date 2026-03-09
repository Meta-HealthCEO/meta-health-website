import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="section bg-gray-900">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            Ready to transform your practice?
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Join 500+ healthcare facilities already using Meta Health. Book a free demo and see how we can streamline your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@metahealth.co.za" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/25">
              Book a Demo <ArrowRight size={18} />
            </a>
            <a href="tel:+27674264553" className="inline-flex items-center justify-center px-8 py-4 border border-gray-700 text-gray-300 font-semibold rounded-xl hover:border-gray-500 hover:text-white transition-all">
              Call Us
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-gray-500">
            <span>No setup fees</span>
            <span>Free data migration</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
