import { Zap } from 'lucide-react';

export default function ScrollingTicker() {
  return (
    <div className="border-y-2 border-[var(--color-ink)] bg-[var(--color-accent)] py-6 overflow-hidden rotate-1 scale-105 transform origin-left">
      <div className="animate-marquee whitespace-nowrap flex gap-12 text-4xl font-display text-[var(--color-ink)] items-center">
        <span>NO MORE BORING READS</span>
        <Zap className="w-8 h-8 fill-[var(--color-ink)]" />
        <span className="text-outline">NO MORE BORING READS</span>
        <Zap className="w-8 h-8 fill-transparent stroke-[var(--color-ink)]" />
        <span>NO MORE BORING READS</span>
        <Zap className="w-8 h-8 fill-[var(--color-ink)]" />
        <span className="text-outline">NO MORE BORING READS</span>
        <Zap className="w-8 h-8 fill-transparent stroke-[var(--color-ink)]" />
        <span>NO MORE BORING READS</span>
        <Zap className="w-8 h-8 fill-[var(--color-ink)]" />
        <span className="text-outline">NO MORE BORING READS</span>
      </div>
    </div>
  );
}

