import { Zap } from "lucide-react";

export default function ScrollingTicker() {
  return (
    <div className="">
      <div className="border-y-2 border-[var(--color-ink)] bg-[var(--color-accent)] py-4 md:py-6 overflow-hidden rotate-1 scale-[1.02] md:scale-105 transform origin-left">
        <div className="animate-marquee whitespace-nowrap flex gap-6 md:gap-12 text-xl sm:text-2xl md:text-4xl font-display text-[var(--color-ink)] items-center">
          <span>NO MORE BORING READS</span>
          <Zap className="w-5 h-5 md:w-8 md:h-8 fill-[var(--color-ink)]" />
          <span className="text-outline">NO MORE BORING READS</span>
          <Zap className="w-5 h-5 md:w-8 md:h-8 fill-transparent stroke-[var(--color-ink)]" />
          <span>NO MORE BORING READS</span>
          <Zap className="w-5 h-5 md:w-8 md:h-8 fill-[var(--color-ink)]" />
          <span className="text-outline">NO MORE BORING READS</span>
          <Zap className="w-5 h-5 md:w-8 md:h-8 fill-transparent stroke-[var(--color-ink)]" />
          <span>NO MORE BORING READS</span>
          <Zap className="w-5 h-5 md:w-8 md:h-8 fill-[var(--color-ink)]" />
          <span className="text-outline">NO MORE BORING READS</span>
        </div>
      </div>
    </div>
  );
}
