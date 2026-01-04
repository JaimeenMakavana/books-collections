export default function MarqueeBanner() {
  return (
    <div className="bg-[var(--color-ink)] text-[var(--color-paper)] overflow-hidden py-3 border-b-2 border-[var(--color-ink)]">
      <div className="flex animate-marquee whitespace-nowrap">
        <div className="flex items-center gap-12 mx-4 font-display uppercase text-sm tracking-widest">
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

