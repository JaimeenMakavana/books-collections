import { Sparkles, PackageCheck } from 'lucide-react';

export default function Hero() {
  return (
    <header className="px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 pb-12 sm:pb-20 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 sm:gap-8 z-10">
          <div className="inline-flex items-center gap-2 border-2 border-[var(--color-ink)] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[var(--color-accent)] shadow-[var(--shadow-hard-sm)] rotate-[-2deg]">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.5]" />
            <span className="font-bold text-[10px] sm:text-xs uppercase tracking-wider">The Curated Library</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-[0.9] tracking-tighter text-[var(--color-ink)]">
            READ LIKE <br />
            <span className="relative">
              A MILLION
              <svg className="absolute -bottom-2 sm:-bottom-4 left-0 w-full" viewBox="0 0 200 20" fill="none">
                <path d="M2 15Q100 2 198 12" stroke="var(--color-accent)" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </span>
            <br />
            MINDS.
          </h1>

          <p className="font-medium text-base sm:text-lg md:text-xl max-w-lg leading-relaxed opacity-90">
            Curated collections of authentic books. Discover new worlds, expand your mind, and build your perfect library.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
            <a
              href="#"
              className="w-full sm:flex-1 md:flex-none text-center bg-[var(--color-ink)] text-[var(--color-accent)] border-2 border-[var(--color-ink)] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-display text-base sm:text-lg tracking-wide shadow-[var(--shadow-hard)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
            >
              BROWSE BOOKS
            </a>
            <a
              href="#"
              className="w-full sm:flex-1 md:flex-none text-center bg-[var(--color-paper)] text-[var(--color-ink)] border-2 border-[var(--color-ink)] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-display text-base sm:text-lg tracking-wide shadow-[var(--shadow-hard)] hover:bg-[var(--color-accent)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
            >
              FIND YOUR BOOK
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold mt-2 sm:mt-4">
            <div className="flex -space-x-3 sm:-space-x-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[var(--color-paper)] bg-gray-300"></div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[var(--color-paper)] bg-gray-400"></div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[var(--color-paper)] bg-gray-500"></div>
            </div>
            <p>
              Trusted by <span className="bg-[var(--color-accent)] px-1 text-[var(--color-ink)]">4.9/5</span> from 2k+ readers
            </p>
          </div>
        </div>

        {/* Right Visual: Collection Grid */}
        <div className="lg:col-span-5 relative mt-8 sm:mt-10 lg:mt-0">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-full h-full bg-[var(--color-accent)] rounded-xl sm:rounded-2xl md:rounded-[2rem] border-2 border-[var(--color-ink)] rotate-3 sm:rotate-6 z-0"></div>

          {/* Floating Element */}
          <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 z-20 animate-float bg-[var(--color-paper)] border-2 border-[var(--color-ink)] p-3 sm:p-4 rounded-xl shadow-[var(--shadow-hard)]">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="bg-green-100 p-1.5 sm:p-2 rounded-lg border border-[var(--color-ink)]">
                <PackageCheck className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
              </div>
              <div>
                <div className="font-display text-xs sm:text-sm">Monthly Box</div>
                <div className="text-[10px] sm:text-xs font-mono">Ready to ship</div>
              </div>
            </div>
          </div>

          {/* Main Card: The Grid Collection */}
          <div className="relative bg-[var(--color-ink)] rounded-xl sm:rounded-2xl md:rounded-[2rem] border-2 border-[var(--color-ink)] overflow-hidden z-10 aspect-[4/5] shadow-[var(--shadow-hard-xl)] group">
            {/* 2x2 Grid of Book Covers */}
            <div className="grid grid-cols-2 h-full w-full">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 border-r-2 border-b-2 border-[var(--color-ink)] opacity-90 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-lg sm:text-xl md:text-2xl">
                FIC
              </div>
              <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 border-b-2 border-[var(--color-ink)] opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-lg sm:text-xl md:text-2xl">
                SCI
              </div>
              <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 border-r-2 border-[var(--color-ink)] opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-lg sm:text-xl md:text-2xl">
                HIS
              </div>
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 opacity-90 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-lg sm:text-xl md:text-2xl">
                BIO
              </div>
            </div>

            {/* Overlay Text */}
            <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 bg-[var(--color-ink)]/90 border-t-2 border-[var(--color-ink)] backdrop-blur-sm">
              <span className="bg-[var(--color-accent)] text-[var(--color-ink)] text-[10px] sm:text-xs font-bold px-2 py-1 rounded-md mb-2 inline-block">
                1000+ BOOKS
              </span>
              <h3 className="text-[var(--color-paper)] font-display text-xl sm:text-2xl">THE ARCHIVE</h3>
              <p className="text-[var(--color-paper)]/80 font-mono text-xs sm:text-sm">Curated Collection of Classics & Modern</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

