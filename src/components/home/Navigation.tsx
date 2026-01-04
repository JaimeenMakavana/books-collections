'use client';

import { Menu, Search, ShoppingCart } from 'lucide-react';
import { useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function Navigation() {
  const { itemCount } = useCart();

  useEffect(() => {
    // Initialize Lucide icons if needed
  }, []);

  return (
    <nav className="sticky top-2 sm:top-4 z-50 px-3 sm:px-4 md:px-8">
      <div className="bg-[var(--color-paper)]/80 backdrop-blur-md border-2 border-[var(--color-ink)] rounded-lg md:rounded-xl shadow-[var(--shadow-hard)] flex justify-between items-center p-2 sm:p-3 md:p-4 gap-2 sm:gap-4">
        {/* Mobile Menu */}
        <button className="md:hidden p-1.5 sm:p-2 hover:bg-[var(--color-accent)] rounded-lg border border-transparent hover:border-[var(--color-ink)] transition-all flex-shrink-0">
          <Menu className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
        </button>

        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl md:text-3xl font-display tracking-tighter flex items-center gap-1 flex-shrink-0">
          BOOK<span className="text-[var(--color-accent)]" style={{ WebkitTextStroke: '1px var(--color-ink)' }}>SHELF</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold text-sm tracking-tight">
          <Link href="/releases" className="hover:text-[var(--color-accent)] hover:bg-[var(--color-ink)] px-3 py-1 rounded transition-colors">NEW RELEASES</Link>
          <Link href="/best-sellers" className="hover:text-[var(--color-accent)] hover:bg-[var(--color-ink)] px-3 py-1 rounded transition-colors">BESTSELLERS</Link>
          <Link href="/genre" className="hover:text-[var(--color-accent)] hover:bg-[var(--color-ink)] px-3 py-1 rounded transition-colors">GENRES</Link>
          <Link href="/collections" className="hover:text-[var(--color-accent)] hover:bg-[var(--color-ink)] px-3 py-1 rounded transition-colors">COLLECTIONS</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="hidden md:block hover:bg-[var(--color-accent)] rounded-lg p-2 border border-transparent hover:border-[var(--color-ink)] transition-all">
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>
          <Link
            href="/cart"
            className="bg-[var(--color-ink)] text-[var(--color-accent)] px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg font-display text-xs sm:text-sm border-2 border-[var(--color-ink)] hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)] transition-colors flex items-center gap-1 sm:gap-2 whitespace-nowrap"
          >
            <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">CART</span>
            <span className="xs:hidden">({itemCount})</span>
            <span className="hidden xs:inline">({itemCount})</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

