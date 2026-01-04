'use client';

import { ArrowLeft, ArrowRight, Plus } from 'lucide-react';

export default function FeaturedBooks() {
  return (
    <section className="py-12 sm:py-16 md:py-24 border-b-2 border-[var(--color-ink)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-8 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tighter">NEW RELEASES</h2>
        <div className="flex gap-2">
          <button className="w-9 h-9 sm:w-10 sm:h-10 border-2 border-[var(--color-ink)] rounded-lg flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors">
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button className="w-9 h-9 sm:w-10 sm:h-10 border-2 border-[var(--color-ink)] rounded-lg flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors">
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Scroll Container */}
      <div className="flex overflow-x-auto gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 pb-8 sm:pb-12 no-scrollbar snap-x snap-mandatory max-w-[100vw]">
        {/* Product Card 1 */}
        <div className="min-w-[260px] sm:min-w-[280px] md:min-w-[320px] snap-center group flex-shrink-0">
          <div className="relative bg-white border-2 border-[var(--color-ink)] rounded-xl sm:rounded-2xl aspect-square mb-3 sm:mb-4 overflow-hidden">
            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 bg-[var(--color-accent)] border border-[var(--color-ink)] px-2 py-0.5 text-[10px] sm:text-xs font-bold rounded">
              BESTSELLER
            </div>
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl sm:text-2xl p-4 sm:p-6 group-hover:scale-110 transition-transform duration-500">
              BOOK 1
            </div>
            <button className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-[var(--color-ink)] text-[var(--color-accent)] p-2 sm:p-3 rounded-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <Plus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
            </button>
          </div>
          <h3 className="font-display text-lg sm:text-xl leading-none mb-1">The Great Novel</h3>
          <p className="text-xs sm:text-sm font-medium opacity-60 mb-2 sm:mb-3">Fiction, Drama, Classic</p>
          <div className="flex items-center gap-2">
            <span className="font-bold text-base sm:text-lg bg-[var(--color-accent)]/30 px-2 rounded">$18.00</span>
            <span className="text-[10px] sm:text-xs font-bold line-through opacity-40">$24.00</span>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="min-w-[260px] sm:min-w-[280px] md:min-w-[320px] snap-center group flex-shrink-0">
          <div className="relative bg-white border-2 border-[var(--color-ink)] rounded-xl sm:rounded-2xl aspect-square mb-3 sm:mb-4 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold text-xl sm:text-2xl p-4 sm:p-6 group-hover:scale-110 transition-transform duration-500">
              BOOK 2
            </div>
            <button className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-[var(--color-ink)] text-[var(--color-accent)] p-2 sm:p-3 rounded-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <Plus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
            </button>
          </div>
          <h3 className="font-display text-lg sm:text-xl leading-none mb-1">Science & Discovery</h3>
          <p className="text-xs sm:text-sm font-medium opacity-60 mb-2 sm:mb-3">Non-Fiction, Science, Learning</p>
          <div className="flex items-center gap-2">
            <span className="font-bold text-base sm:text-lg bg-[var(--color-accent)]/30 px-2 rounded">$14.50</span>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="min-w-[260px] sm:min-w-[280px] md:min-w-[320px] snap-center group flex-shrink-0">
          <div className="relative bg-white border-2 border-[var(--color-ink)] rounded-xl sm:rounded-2xl aspect-square mb-3 sm:mb-4 overflow-hidden">
            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 bg-[var(--color-ink)] text-[var(--color-paper)] border border-[var(--color-paper)] px-2 py-0.5 text-[10px] sm:text-xs font-bold rounded">
              SOLD OUT
            </div>
            <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white font-bold text-xl sm:text-2xl p-4 sm:p-6 opacity-50 grayscale">
              BOOK 3
            </div>
          </div>
          <h3 className="font-display text-lg sm:text-xl leading-none mb-1">Historical Epic</h3>
          <p className="text-xs sm:text-sm font-medium opacity-60 mb-2 sm:mb-3">History, Biography, War</p>
          <div className="flex items-center gap-2">
            <span className="font-bold text-base sm:text-lg bg-[var(--color-accent)]/30 px-2 rounded">$22.00</span>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="min-w-[260px] sm:min-w-[280px] md:min-w-[320px] snap-center group flex-shrink-0">
          <div className="relative bg-white border-2 border-[var(--color-ink)] rounded-xl sm:rounded-2xl aspect-square mb-3 sm:mb-4 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-xl sm:text-2xl p-4 sm:p-6 group-hover:scale-110 transition-transform duration-500">
              BOOK 4
            </div>
            <button className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-[var(--color-ink)] text-[var(--color-accent)] p-2 sm:p-3 rounded-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <Plus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
            </button>
          </div>
          <h3 className="font-display text-lg sm:text-xl leading-none mb-1">Modern Classic</h3>
          <p className="text-xs sm:text-sm font-medium opacity-60 mb-2 sm:mb-3">Contemporary, Literary, Award-Winning</p>
          <div className="flex items-center gap-2">
            <span className="font-bold text-base sm:text-lg bg-[var(--color-accent)]/30 px-2 rounded">$16.00</span>
          </div>
        </div>

        {/* See All Card */}
        <div className="min-w-[260px] sm:min-w-[280px] md:min-w-[320px] snap-center flex flex-col justify-center items-center border-2 border-[var(--color-ink)] border-dashed rounded-xl sm:rounded-2xl aspect-square hover:bg-white transition-colors cursor-pointer group flex-shrink-0">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[var(--color-accent)] rounded-full flex items-center justify-center border-2 border-[var(--color-ink)] mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
            <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 stroke-[2]" />
          </div>
          <h3 className="font-display text-lg sm:text-xl">VIEW ALL</h3>
        </div>
      </div>
    </section>
  );
}

