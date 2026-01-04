import { ShieldCheck, Package, PiggyBank } from 'lucide-react';

export default function WhyUs() {
  return (
    <section className="bg-[var(--color-ink)] text-[var(--color-paper)] py-12 sm:py-16 md:py-20 border-y-2 border-[var(--color-ink)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 text-center md:text-left">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-center md:justify-start">
              <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-accent)] stroke-[1.5]" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl text-[var(--color-accent)]">100% AUTHENTIC</h3>
            <p className="opacity-80 leading-relaxed text-sm sm:text-base">
              We source directly from publishers. No reprints, no fakes. We hate counterfeit books.
            </p>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-center md:justify-start">
              <Package className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-accent)] stroke-[1.5]" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl text-[var(--color-accent)]">CURATED SELECTION</h3>
            <p className="opacity-80 leading-relaxed text-sm sm:text-base">
              Our collections are handpicked by bibliophiles. Quality over quantity, always.
            </p>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-center md:justify-start">
              <PiggyBank className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-accent)] stroke-[1.5]" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl text-[var(--color-accent)]">SMART PRICING</h3>
            <p className="opacity-80 leading-relaxed text-sm sm:text-base">
              Why buy one expensive book when you can have 10 amazing reads for the same price?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

