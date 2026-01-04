import { ArrowUpRight, BookOpen, Library } from "lucide-react";

export default function CategoriesGrid() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0 mb-8 sm:mb-12">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tighter text-[var(--color-ink)] uppercase">
          Pick Your
          <br />
          Genre
        </h2>
        <a
          href="#"
          className="flex items-center gap-2 font-bold hover:text-[var(--color-accent)] hover:bg-[var(--color-ink)] px-4 py-2 rounded-lg border-2 border-transparent hover:border-transparent transition-all text-sm sm:text-base"
        >
          View All Collections{" "}
          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 sm:gap-6 h-auto md:h-[600px]">
        {/* Large Card */}
        <div className="md:col-span-2 md:row-span-2 relative group rounded-xl sm:rounded-2xl border-2 border-[var(--color-ink)] overflow-hidden shadow-[var(--shadow-hard)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all bg-[var(--color-ink)] min-h-[300px] sm:min-h-[400px] md:min-h-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-60 group-hover:opacity-40 transition-opacity"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display text-[var(--color-accent)] mb-2 tracking-tighter">
              FICTION
              <br />
              CLASSICS
            </h3>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <p className="text-[var(--color-paper)] max-w-xs font-medium text-sm sm:text-base">
                The timeless stories. The ones that change you. The
                &quot;must-read&quot; vibes.
              </p>
              <button className="bg-[var(--color-paper)] text-[var(--color-ink)] rounded-full p-2.5 sm:p-3 hover:bg-[var(--color-accent)] border-2 border-transparent hover:border-[var(--color-ink)] transition-colors flex-shrink-0">
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Small Card 1 */}
        <div className="relative group rounded-xl sm:rounded-2xl border-2 border-[var(--color-ink)] overflow-hidden shadow-[var(--shadow-hard)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all bg-[var(--color-paper)] min-h-[250px] sm:min-h-[280px] md:min-h-0">
          <div
            className="absolute inset-0 bg-[radial-gradient(var(--color-accent)_2px,transparent_2px)] opacity-30"
            style={{ backgroundSize: "16px 16px" }}
          ></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[var(--color-accent)] rounded-full flex items-center justify-center border-2 border-[var(--color-ink)] mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 stroke-[1.5]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-display tracking-tight text-[var(--color-ink)]">
              NON-FICTION
            </h3>
            <p className="text-xs sm:text-sm opacity-60 font-semibold mt-1">
              Knowledge, Growth & Insight
            </p>
          </div>
        </div>

        {/* Small Card 2 */}
        <div className="relative group rounded-xl sm:rounded-2xl border-2 border-[var(--color-ink)] overflow-hidden shadow-[var(--shadow-hard)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all bg-[var(--color-accent)] min-h-[250px] sm:min-h-[280px] md:min-h-0">
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
            <span className="bg-[var(--color-ink)] text-[var(--color-accent)] text-[10px] font-bold px-2 py-1 rounded">
              NEW
            </span>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[var(--color-paper)] rounded-full flex items-center justify-center border-2 border-[var(--color-ink)] mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <Library className="w-6 h-6 sm:w-8 sm:h-8 stroke-[1.5]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-display tracking-tight text-[var(--color-ink)]">
              COLLECTIONS
            </h3>
            <p className="text-xs sm:text-sm opacity-60 font-semibold mt-1">
              5 Books for $40
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
