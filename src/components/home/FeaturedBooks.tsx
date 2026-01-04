'use client';

import { ArrowLeft, ArrowRight, Plus } from 'lucide-react';

export default function FeaturedBooks() {
  return (
    <section className="py-24 border-b-2 border-[var(--color-ink)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 flex items-center justify-between">
        <h2 className="font-display text-4xl md:text-5xl tracking-tighter">NEW RELEASES</h2>
        <div className="flex gap-2">
          <button className="w-10 h-10 border-2 border-[var(--color-ink)] rounded-lg flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 border-2 border-[var(--color-ink)] rounded-lg flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scroll Container */}
      <div className="flex overflow-x-auto gap-8 px-4 md:px-8 pb-12 no-scrollbar snap-x snap-mandatory max-w-[100vw]">
        {/* Product Card 1 */}
        <div className="min-w-[280px] md:min-w-[320px] snap-center group">
          <div className="relative bg-white border-2 border-[var(--color-ink)] rounded-2xl aspect-square mb-4 overflow-hidden">
            <div className="absolute top-3 left-3 z-10 bg-[var(--color-accent)] border border-[var(--color-ink)] px-2 py-0.5 text-xs font-bold rounded">
              BESTSELLER
            </div>
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-2xl p-6 group-hover:scale-110 transition-transform duration-500">
              BOOK 1
            </div>
            <button className="absolute bottom-3 right-3 bg-[var(--color-ink)] text-[var(--color-accent)] p-3 rounded-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <Plus className="w-6 h-6 stroke-[2]" />
            </button>
          </div>
          <h3 className="font-display text-xl leading-none mb-1">The Great Novel</h3>
          <p className="text-sm font-medium opacity-60 mb-3">Fiction, Drama, Classic</p>
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg bg-[var(--color-accent)]/30 px-2 rounded">$18.00</span>
            <span className="text-xs font-bold line-through opacity-40">$24.00</span>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="min-w-[280px] md:min-w-[320px] snap-center group">
          <div className="relative bg-white border-2 border-[var(--color-ink)] rounded-2xl aspect-square mb-4 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold text-2xl p-6 group-hover:scale-110 transition-transform duration-500">
              BOOK 2
            </div>
            <button className="absolute bottom-3 right-3 bg-[var(--color-ink)] text-[var(--color-accent)] p-3 rounded-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <Plus className="w-6 h-6 stroke-[2]" />
            </button>
          </div>
          <h3 className="font-display text-xl leading-none mb-1">Science & Discovery</h3>
          <p className="text-sm font-medium opacity-60 mb-3">Non-Fiction, Science, Learning</p>
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg bg-[var(--color-accent)]/30 px-2 rounded">$14.50</span>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="min-w-[280px] md:min-w-[320px] snap-center group">
          <div className="relative bg-white border-2 border-[var(--color-ink)] rounded-2xl aspect-square mb-4 overflow-hidden">
            <div className="absolute top-3 left-3 z-10 bg-[var(--color-ink)] text-[var(--color-paper)] border border-[var(--color-paper)] px-2 py-0.5 text-xs font-bold rounded">
              SOLD OUT
            </div>
            <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white font-bold text-2xl p-6 opacity-50 grayscale">
              BOOK 3
            </div>
          </div>
          <h3 className="font-display text-xl leading-none mb-1">Historical Epic</h3>
          <p className="text-sm font-medium opacity-60 mb-3">History, Biography, War</p>
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg bg-[var(--color-accent)]/30 px-2 rounded">$22.00</span>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="min-w-[280px] md:min-w-[320px] snap-center group">
          <div className="relative bg-white border-2 border-[var(--color-ink)] rounded-2xl aspect-square mb-4 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-2xl p-6 group-hover:scale-110 transition-transform duration-500">
              BOOK 4
            </div>
            <button className="absolute bottom-3 right-3 bg-[var(--color-ink)] text-[var(--color-accent)] p-3 rounded-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <Plus className="w-6 h-6 stroke-[2]" />
            </button>
          </div>
          <h3 className="font-display text-xl leading-none mb-1">Modern Classic</h3>
          <p className="text-sm font-medium opacity-60 mb-3">Contemporary, Literary, Award-Winning</p>
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg bg-[var(--color-accent)]/30 px-2 rounded">$16.00</span>
          </div>
        </div>

        {/* See All Card */}
        <div className="min-w-[280px] md:min-w-[320px] snap-center flex flex-col justify-center items-center border-2 border-[var(--color-ink)] border-dashed rounded-2xl aspect-square hover:bg-white transition-colors cursor-pointer group">
          <div className="w-16 h-16 bg-[var(--color-accent)] rounded-full flex items-center justify-center border-2 border-[var(--color-ink)] mb-4 group-hover:scale-110 transition-transform">
            <ArrowRight className="w-8 h-8 stroke-[2]" />
          </div>
          <h3 className="font-display text-xl">VIEW ALL</h3>
        </div>
      </div>
    </section>
  );
}

