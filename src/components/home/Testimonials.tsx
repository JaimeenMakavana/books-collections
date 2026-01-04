import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[var(--color-paper)] relative overflow-hidden">
      {/* Abstract Decoration */}
      <div className="absolute -right-10 top-20 w-32 h-32 sm:w-40 sm:h-40 bg-[var(--color-accent)] rounded-full border-2 border-[var(--color-ink)] opacity-20"></div>
      <div className="absolute -left-10 bottom-20 w-16 h-16 sm:w-20 sm:h-20 bg-[var(--color-ink)] rounded-full opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <div className="inline-block bg-[var(--color-ink)] text-[var(--color-accent)] font-bold text-[10px] sm:text-xs uppercase px-3 py-1 rounded-full mb-3 sm:mb-4 border border-[var(--color-ink)]">
            Real Reviews
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tighter text-[var(--color-ink)]">READER TESTIMONIALS</h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg opacity-70">Don&apos;t just take our word for it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Review 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl border-2 border-[var(--color-ink)] shadow-[var(--shadow-hard)] hover:translate-y-[-4px] transition-transform duration-300">
            <div className="flex gap-1 mb-3 sm:mb-4 text-[var(--color-accent)]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[var(--color-accent)] stroke-[var(--color-ink)]" />
              ))}
            </div>
            <p className="font-medium text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              &quot;Finally found a place that curates books like I would. The collections are amazing and shipping was
              faster than expected.&quot;
            </p>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[var(--color-ink)] rounded-full flex items-center justify-center text-[var(--color-paper)] font-display text-xs sm:text-sm">
                JD
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm">Jason D.</div>
                <div className="text-[10px] sm:text-xs opacity-50 font-bold uppercase tracking-wide">Verified Buyer</div>
              </div>
            </div>
          </div>

          {/* Review 2 (Highlighted) */}
          <div className="bg-[var(--color-ink)] text-[var(--color-paper)] p-6 sm:p-8 rounded-xl sm:rounded-2xl border-2 border-[var(--color-ink)] shadow-[var(--shadow-hard)] md:-rotate-2 hover:rotate-0 transition-transform duration-300 z-10">
            <div className="flex gap-1 mb-3 sm:mb-4 text-[var(--color-accent)]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[var(--color-accent)] stroke-[var(--color-accent)]" />
              ))}
            </div>
            <p className="font-medium text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              &quot;I was skeptical about online bookstores but Bookshelf is the real deal. The quality is excellent and
              the curation is spot-on. 10/10.&quot;
            </p>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-[var(--color-ink)] font-display text-xs sm:text-sm border border-[var(--color-paper)]">
                SC
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm">Sarah C.</div>
                <div className="text-[10px] sm:text-xs opacity-50 font-bold uppercase tracking-wide">Verified Buyer</div>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl border-2 border-[var(--color-ink)] shadow-[var(--shadow-hard)] hover:translate-y-[-4px] transition-transform duration-300">
            <div className="flex gap-1 mb-3 sm:mb-4 text-[var(--color-accent)]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[var(--color-accent)] stroke-[var(--color-ink)]" />
              ))}
            </div>
            <p className="font-medium text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              &quot;Got the collection box for my birthday. Loved 3 out of 5 books so I bought the full sets. Super fun
              way to discover new authors.&quot;
            </p>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center text-[var(--color-ink)] font-display text-xs sm:text-sm border-2 border-[var(--color-ink)]">
                MK
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm">Mike K.</div>
                <div className="text-[10px] sm:text-xs opacity-50 font-bold uppercase tracking-wide">Verified Buyer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

