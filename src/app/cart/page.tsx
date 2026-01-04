"use client";

import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const { items, itemCount, total, updateQuantity, removeItem, clearCart } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[var(--color-paper)] py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tighter text-[var(--color-ink)] uppercase mb-8">
            Your Cart
          </h1>
          <div className="bg-[var(--color-paper)] border-2 border-[var(--color-ink)] rounded-xl sm:rounded-2xl shadow-[var(--shadow-hard)] p-8 sm:p-12 md:p-16 text-center">
            <ShoppingBag className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 text-[var(--color-ink)] opacity-40" />
            <h2 className="font-display text-2xl sm:text-3xl mb-4 text-[var(--color-ink)]">
              Your cart is empty
            </h2>
            <p className="text-sm sm:text-base opacity-60 mb-8 max-w-md mx-auto">
              Looks like you haven't added any books to your cart yet. Start
              exploring our collection!
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[var(--color-ink)] text-[var(--color-accent)] px-6 py-3 rounded-lg font-display text-sm sm:text-base border-2 border-[var(--color-ink)] hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)] transition-colors"
            >
              Browse Books
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-paper)] py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 sm:mb-12">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tighter text-[var(--color-ink)] uppercase">
            Your Cart
          </h1>
          <button
            onClick={clearCart}
            className="text-sm sm:text-base font-semibold text-[var(--color-ink)] opacity-60 hover:opacity-100 hover:bg-[var(--color-accent)] px-4 py-2 rounded-lg transition-colors"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-[var(--color-paper)] border-2 border-[var(--color-ink)] rounded-xl sm:rounded-2xl shadow-[var(--shadow-hard)] p-4 sm:p-6"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  {/* Book Cover */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-full sm:w-24 h-32 sm:h-32 bg-gradient-to-br ${item.coverColor} rounded-lg border-2 border-[var(--color-ink)] flex items-center justify-center text-white font-bold text-xs sm:text-sm p-2`}
                    >
                      {item.title
                        .split(" ")
                        .slice(0, 2)
                        .join(" ")
                        .toUpperCase()}
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-lg sm:text-xl leading-tight mb-1 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-sm sm:text-base font-medium opacity-60 mb-1">
                          {item.author}
                        </p>
                        <p className="text-xs sm:text-sm opacity-50 mb-3">
                          {item.format} • {item.pageCount} pages
                        </p>
                      </div>

                      {/* Price */}
                      <div className="flex flex-col items-start sm:items-end gap-1">
                        <span className="font-bold text-lg sm:text-xl bg-[var(--color-accent)]/30 px-2 sm:px-3 py-1 rounded">
                          ${item.price.toFixed(2)}
                        </span>
                        {item.originalPrice && (
                          <span className="text-xs font-bold line-through opacity-40">
                            ${item.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--color-ink)]/20">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-xs sm:text-sm font-semibold opacity-60">
                          Quantity:
                        </span>
                        <div className="flex items-center gap-1 sm:gap-2 border-2 border-[var(--color-ink)] rounded-lg">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-1.5 sm:p-2 hover:bg-[var(--color-accent)] rounded-l-md transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-3 sm:px-4 py-1.5 sm:py-2 font-bold text-sm sm:text-base min-w-[3ch] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-1.5 sm:p-2 hover:bg-[var(--color-accent)] rounded-r-md transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 sm:gap-4">
                        <span className="text-sm sm:text-base font-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 hover:bg-red-100 rounded-lg transition-colors text-red-600"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[var(--color-paper)] border-2 border-[var(--color-ink)] rounded-xl sm:rounded-2xl shadow-[var(--shadow-hard)] p-6 sm:p-8 sticky top-4">
              <h2 className="font-display text-xl sm:text-2xl mb-6 text-[var(--color-ink)] uppercase">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="opacity-60">Items ({itemCount})</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="opacity-60">Shipping</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="border-t-2 border-[var(--color-ink)] pt-4 mt-4">
                  <div className="flex justify-between text-lg sm:text-xl font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-[var(--color-ink)] text-[var(--color-accent)] py-3 sm:py-4 rounded-lg font-display text-sm sm:text-base font-bold border-2 border-[var(--color-ink)] hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)] transition-colors mb-4">
                Proceed to Checkout
              </button>

              <Link
                href="/"
                className="block text-center text-sm sm:text-base font-semibold text-[var(--color-ink)] opacity-60 hover:opacity-100 transition-opacity"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
