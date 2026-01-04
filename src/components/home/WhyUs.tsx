import { ShieldCheck, Package, PiggyBank } from 'lucide-react';

export default function WhyUs() {
  return (
    <section className="bg-[var(--color-ink)] text-[var(--color-paper)] py-20 border-y-2 border-[var(--color-ink)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <ShieldCheck className="w-12 h-12 text-[var(--color-accent)] stroke-[1.5]" />
            <h3 className="font-display text-2xl text-[var(--color-accent)]">100% AUTHENTIC</h3>
            <p className="opacity-80 leading-relaxed">
              We source directly from publishers. No reprints, no fakes. We hate counterfeit books.
            </p>
          </div>
          <div className="space-y-4">
            <Package className="w-12 h-12 text-[var(--color-accent)] stroke-[1.5]" />
            <h3 className="font-display text-2xl text-[var(--color-accent)]">CURATED SELECTION</h3>
            <p className="opacity-80 leading-relaxed">
              Our collections are handpicked by bibliophiles. Quality over quantity, always.
            </p>
          </div>
          <div className="space-y-4">
            <PiggyBank className="w-12 h-12 text-[var(--color-accent)] stroke-[1.5]" />
            <h3 className="font-display text-2xl text-[var(--color-accent)]">SMART PRICING</h3>
            <p className="opacity-80 leading-relaxed">
              Why buy one expensive book when you can have 10 amazing reads for the same price?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

