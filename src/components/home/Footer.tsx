import { Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-paper)] pt-12 sm:pt-14 md:pt-16 pb-6 sm:pb-8 border-t-2 border-[var(--color-ink)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-12 sm:mb-14 md:mb-16">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <a href="#" className="text-2xl sm:text-3xl font-display tracking-tighter flex items-center gap-1 mb-3 sm:mb-4">
              BOOK<span className="text-transparent text-outline-accent">SHELF</span>
            </a>
            <p className="text-sm opacity-60 max-w-[200px]">
              Making great books accessible to everyone. Except your ex.
            </p>
          </div>

          <div>
            <h4 className="font-display text-base sm:text-lg text-[var(--color-accent)] mb-3 sm:mb-4">SHOP</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm font-medium opacity-80">
              <li>
                <a href="#" className="hover:text-[var(--color-accent)]">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--color-accent)]">
                  Fiction
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--color-accent)]">
                  Non-Fiction
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--color-accent)]">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--color-accent)]">
                  Best Sellers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base sm:text-lg text-[var(--color-accent)] mb-3 sm:mb-4">SUPPORT</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm font-medium opacity-80">
              <li>
                <a href="#" className="hover:text-[var(--color-accent)]">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--color-accent)]">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--color-accent)]">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--color-accent)]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base sm:text-lg text-[var(--color-accent)] mb-3 sm:mb-4">SOCIALS</h4>
            <div className="flex gap-2 sm:gap-3">
              <a
                href="#"
                className="bg-[var(--color-paper)] text-[var(--color-ink)] p-1.5 sm:p-2 rounded-lg hover:bg-[var(--color-accent)] transition-colors"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="bg-[var(--color-paper)] text-[var(--color-ink)] p-1.5 sm:p-2 rounded-lg hover:bg-[var(--color-accent)] transition-colors"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="bg-[var(--color-paper)] text-[var(--color-ink)] p-1.5 sm:p-2 rounded-lg hover:bg-[var(--color-accent)] transition-colors"
              >
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-[var(--color-paper)]/20 text-xs font-bold opacity-40 gap-3 sm:gap-0">
          <p>© 2024 Bookshelf. Est. 2024.</p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

