export default function MarqueeBanner() {
  return (
    <div className="bg-[var(--color-ink)] text-[var(--color-paper)] overflow-hidden py-2 sm:py-3 border-b-2 border-[var(--color-ink)]">
      <div className="flex animate-marquee whitespace-nowrap">
        <div className="flex items-center gap-6 sm:gap-8 md:gap-12 mx-2 sm:mx-4 font-display uppercase text-xs sm:text-sm tracking-wider sm:tracking-widest">
          <span>✸ Curated Collections</span>
          <span>✸ Free Shipping $50+</span>
          <span>✸ 100% Authentic Books</span>
          <span>✸ Discover New Worlds</span>
          <span>✸ Read Without Limits</span>
          <span>✸ Curated Collections</span>
          <span>✸ Free Shipping $50+</span>
          <span>✸ 100% Authentic Books</span>
          <span>✸ Discover New Worlds</span>
          <span>✸ Read Without Limits</span>
        </div>
      </div>
    </div>
  );
}

