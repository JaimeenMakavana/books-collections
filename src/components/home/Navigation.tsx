'use client';

import { Menu, Search, ShoppingCart } from 'lucide-react';
import { useEffect } from 'react';

export default function Navigation() {
  useEffect(() => {
    // Initialize Lucide icons if needed
  }, []);

  return (
    <nav className="sticky top-4 z-50 px-4 md:px-8">
      <div className="bg-[var(--color-paper)]/80 backdrop-blur-md border-2 border-[var(--color-ink)] rounded-xl shadow-[var(--shadow-hard)] flex justify-between items-center p-4">
        {/* Mobile Menu */}
        <button className="md:hidden p-2 hover:bg-[var(--color-accent)] rounded-lg border border-transparent hover:border-[var(--color-ink)] transition-all">
          <Menu className="w-6 h-6 stroke-[1.5]" />
        </button>

        {/* Logo */}
        <a href="#" className="text-2xl md:text-3xl font-display tracking-tighter flex items-center gap-1">
          BOOK<span className="text-[var(--color-accent)]" style={{ WebkitTextStroke: '1px var(--color-ink)' }}>SHELF</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm tracking-tight">
          <a href="#" className="hover:text-[var(--color-accent)] hover:bg-[var(--color-ink)] px-3 py-1 rounded transition-colors">NEW RELEASES</a>
          <a href="#" className="hover:text-[var(--color-accent)] hover:bg-[var(--color-ink)] px-3 py-1 rounded transition-colors">BESTSELLERS</a>
          <a href="#" className="hover:text-[var(--color-accent)] hover:bg-[var(--color-ink)] px-3 py-1 rounded transition-colors">GENRES</a>
          <a href="#" className="hover:text-[var(--color-accent)] hover:bg-[var(--color-ink)] px-3 py-1 rounded transition-colors">COLLECTIONS</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden md:block hover:bg-[var(--color-accent)] rounded-lg p-2 border border-transparent hover:border-[var(--color-ink)] transition-all">
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>
          <button className="bg-[var(--color-ink)] text-[var(--color-accent)] px-4 py-2 rounded-lg font-display text-sm border-2 border-[var(--color-ink)] hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)] transition-colors flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            CART (0)
          </button>
        </div>
      </div>
    </nav>
  );
}

