'use client';

import { Plus, Star } from 'lucide-react';
import type { BookRelease } from '@/data/releases';
import { useCart } from '@/contexts/CartContext';

interface BookCardProps {
  book: BookRelease;
}

export default function BookCard({ book }: BookCardProps) {
  const { addItem } = useCart();
  const isOutOfStock = book.stockStatus === 'out-of-stock';
  const isLowStock = book.stockStatus === 'low-stock';
  const isPreOrder = book.stockStatus === 'pre-order';

  const handleAddToCart = () => {
    if (!isOutOfStock) {
      addItem(book);
    }
  };

  return (
    <div className="min-w-[260px] sm:min-w-[280px] md:min-w-[320px] snap-center group flex-shrink-0">
      <div className={`relative bg-white border-2 border-[var(--color-ink)] rounded-xl sm:rounded-2xl aspect-square mb-3 sm:mb-4 overflow-hidden ${isOutOfStock ? 'opacity-50 grayscale' : ''}`}>
        {/* Badges */}
        {book.badges.length > 0 && (
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 flex flex-col gap-1">
            {book.badges.map((badge, idx) => (
              <div
                key={idx}
                className={`px-2 py-0.5 text-[10px] sm:text-xs font-bold rounded border ${
                  badge === 'BESTSELLER' || badge === 'HOT'
                    ? 'bg-[var(--color-accent)] border-[var(--color-ink)]'
                    : badge === 'SOLD OUT'
                    ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-paper)]'
                    : 'bg-white border-[var(--color-ink)]'
                }`}
              >
                {badge}
              </div>
            ))}
          </div>
        )}

        {/* Stock Status Badge */}
        {isLowStock && (
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 bg-yellow-400 border border-[var(--color-ink)] px-2 py-0.5 text-[10px] sm:text-xs font-bold rounded">
            LOW STOCK
          </div>
        )}
        {isPreOrder && (
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 bg-blue-400 border border-[var(--color-ink)] px-2 py-0.5 text-[10px] sm:text-xs font-bold rounded">
            PRE-ORDER
          </div>
        )}

        {/* Book Cover */}
        <div className={`w-full h-full bg-gradient-to-br ${book.coverColor} flex items-center justify-center text-white font-bold text-xl sm:text-2xl p-4 sm:p-6 ${!isOutOfStock ? 'group-hover:scale-110 transition-transform duration-500' : ''}`}>
          {book.title.split(' ').slice(0, 2).join(' ').toUpperCase()}
        </div>

        {/* Add to Cart Button */}
        {!isOutOfStock && (
          <button
            onClick={handleAddToCart}
            className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-[var(--color-ink)] text-[var(--color-accent)] p-2 sm:p-3 rounded-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)]"
            aria-label={`Add ${book.title} to cart`}
          >
            <Plus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
          </button>
        )}
      </div>

      {/* Book Info */}
      <div>
        <h3 className="font-display text-lg sm:text-xl leading-none mb-1 line-clamp-2">{book.title}</h3>
        <p className="text-xs sm:text-sm font-medium opacity-60 mb-1">{book.author}</p>
        <p className="text-xs sm:text-sm font-medium opacity-60 mb-2 sm:mb-3">{book.genres.join(', ')}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2 sm:mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 sm:w-4 sm:h-4 ${
                  i < Math.floor(book.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-none text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm font-medium opacity-70">
            {book.rating} ({book.reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-base sm:text-lg bg-[var(--color-accent)]/30 px-2 rounded">
            ${book.price.toFixed(2)}
          </span>
          {book.originalPrice && (
            <span className="text-[10px] sm:text-xs font-bold line-through opacity-40">
              ${book.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-2 text-[10px] sm:text-xs opacity-50">
          {book.format} • {book.pageCount} pages • {book.publisher}
        </div>
      </div>
    </div>
  );
}

