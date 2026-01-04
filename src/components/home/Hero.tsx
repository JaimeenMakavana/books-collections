import { Sparkles, PackageCheck } from 'lucide-react';

export default function Hero() {
  return (
    <header className="px-4 md:px-8 pt-12 pb-20 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-8 z-10">
          <div className="inline-flex items-center gap-2 border-2 border-[var(--color-ink)] px-4 py-2 rounded-full bg-[var(--color-accent)] shadow-[var(--shadow-hard-sm)] rotate-[-2deg]">
            <Sparkles className="w-4 h-4 stroke-[1.5]" />
            <span className="font-bold text-xs uppercase tracking-wider">The Curated Library</span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl leading-[0.9] tracking-tighter text-[var(--color-ink)]">
            READ LIKE <br />
            <span className="relative">
              A MILLION
              <svg className="absolute -bottom-4 left-0 w-full" viewBox="0 0 200 20" fill="none">
                <path d="M2 15Q100 2 198 12" stroke="var(--color-accent)" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </span>
            <br />
            MINDS.
          </h1>

          <p className="font-medium text-lg md:text-xl max-w-lg leading-relaxed opacity-90">
            Curated collections of authentic books. Discover new worlds, expand your mind, and build your perfect library.
          </p>

          <div className="flex flex-wrap gap-4 w-full">
            <a
              href="#"
              className="flex-1 md:flex-none text-center bg-[var(--color-ink)] text-[var(--color-accent)] border-2 border-[var(--color-ink)] px-8 py-4 rounded-xl font-display text-lg tracking-wide shadow-[var(--shadow-hard)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
            >
              BROWSE BOOKS
            </a>
            <a
              href="#"
              className="flex-1 md:flex-none text-center bg-[var(--color-paper)] text-[var(--color-ink)] border-2 border-[var(--color-ink)] px-8 py-4 rounded-xl font-display text-lg tracking-wide shadow-[var(--shadow-hard)] hover:bg-[var(--color-accent)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
            >
              FIND YOUR BOOK
            </a>
          </div>

          <div className="flex items-center gap-4 text-sm font-semibold mt-4">
            <div className="flex -space-x-4">
              <div className="w-10 h-10 rounded-full border-2 border-[var(--color-paper)] bg-gray-300"></div>
              <div className="w-10 h-10 rounded-full border-2 border-[var(--color-paper)] bg-gray-400"></div>
              <div className="w-10 h-10 rounded-full border-2 border-[var(--color-paper)] bg-gray-500"></div>
            </div>
            <p>
              Trusted by <span className="bg-[var(--color-accent)] px-1 text-[var(--color-ink)]">4.9/5</span> from 2k+ readers
            </p>
          </div>
        </div>

        {/* Right Visual: Collection Grid */}
        <div className="lg:col-span-5 relative mt-10 lg:mt-0">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-full h-full bg-[var(--color-accent)] rounded-[2rem] border-2 border-[var(--color-ink)] rotate-6 z-0"></div>

          {/* Floating Element */}
          <div className="absolute -bottom-8 -left-8 z-20 animate-float bg-[var(--color-paper)] border-2 border-[var(--color-ink)] p-4 rounded-xl shadow-[var(--shadow-hard)]">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg border border-[var(--color-ink)]">
                <PackageCheck className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <div className="font-display text-sm">Monthly Box</div>
                <div className="text-xs font-mono">Ready to ship</div>
              </div>
            </div>
          </div>

          {/* Main Card: The Grid Collection */}
          <div className="relative bg-[var(--color-ink)] rounded-[2rem] border-2 border-[var(--color-ink)] overflow-hidden z-10 aspect-[4/5] shadow-[var(--shadow-hard-xl)] group">
            {/* 2x2 Grid of Book Covers */}
            <div className="grid grid-cols-2 h-full w-full">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 border-r-2 border-b-2 border-[var(--color-ink)] opacity-90 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-2xl">
                FIC
              </div>
              <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 border-b-2 border-[var(--color-ink)] opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-2xl">
                SCI
              </div>
              <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 border-r-2 border-[var(--color-ink)] opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-2xl">
                HIS
              </div>
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 opacity-90 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-2xl">
                BIO
              </div>
            </div>

            {/* Overlay Text */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-[var(--color-ink)]/90 border-t-2 border-[var(--color-ink)] backdrop-blur-sm">
              <span className="bg-[var(--color-accent)] text-[var(--color-ink)] text-xs font-bold px-2 py-1 rounded-md mb-2 inline-block">
                1000+ BOOKS
              </span>
              <h3 className="text-[var(--color-paper)] font-display text-2xl">THE ARCHIVE</h3>
              <p className="text-[var(--color-paper)]/80 font-mono text-sm">Curated Collection of Classics & Modern</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

