export default function Newsletter() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
      <div className="bg-[var(--color-accent)] rounded-xl sm:rounded-2xl md:rounded-[2rem] border-2 border-[var(--color-ink)] p-6 sm:p-8 md:p-12 lg:p-16 text-center relative overflow-hidden shadow-[var(--shadow-hard-xl)]">
        {/* Background doodle */}
        <svg className="absolute top-0 left-0 opacity-20 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 L100 100 M100 0 L0 100" stroke="var(--color-ink)" strokeWidth="0.5" />
        </svg>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-ink)] mb-4 sm:mb-6 tracking-tighter">
            DON&apos;T MISS OUT.
          </h2>
          <p className="text-[var(--color-ink)] text-base sm:text-lg font-medium mb-6 sm:mb-8">
            Join the club. Get 15% off your first purchase and find out when we add new collections.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-[var(--color-paper)] border-2 border-[var(--color-ink)] rounded-xl px-4 sm:px-6 py-3 sm:py-4 font-bold text-sm sm:text-base text-[var(--color-ink)] placeholder:text-[var(--color-ink)]/40 outline-none focus:shadow-[var(--shadow-hard)] transition-all"
            />
            <button
              type="button"
              className="w-full sm:w-auto bg-[var(--color-ink)] text-[var(--color-accent)] font-display text-base sm:text-lg md:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-[var(--color-ink)] hover:translate-x-1 hover:translate-y-1 transition-transform"
            >
              JOIN
            </button>
          </form>
          <p className="mt-3 sm:mt-4 text-xs font-bold opacity-60">No spam, just books.</p>
        </div>
      </div>
    </section>
  );
}

