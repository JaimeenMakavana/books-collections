import { ArrowUpRight, BookOpen, Library } from "lucide-react";

export default function CategoriesGrid() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <h2 className="font-display text-4xl md:text-5xl tracking-tighter text-[var(--color-ink)] uppercase">
          Pick Your
          <br />
          Genre
        </h2>
        <a
          href="#"
          className="hidden md:flex items-center gap-2 font-bold hover:text-[var(--color-accent)] hover:bg-[var(--color-ink)] px-4 py-2 rounded-lg border-2 border-transparent hover:border-transparent transition-all"
        >
          View All Collections <ArrowUpRight className="w-5 h-5 stroke-[1.5]" />
        </a>
      </div>

      <div className="grid md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
        {/* Large Card */}
        <div className="md:col-span-2 md:row-span-2 relative group rounded-2xl border-2 border-[var(--color-ink)] overflow-hidden shadow-[var(--shadow-hard)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all bg-[var(--color-ink)]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-60 group-hover:opacity-40 transition-opacity"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <h3 className="text-5xl font-display text-[var(--color-accent)] mb-2 tracking-tighter">
              FICTION
              <br />
              CLASSICS
            </h3>
            <div className="flex justify-between items-end">
              <p className="text-[var(--color-paper)] max-w-xs font-medium">
                The timeless stories. The ones that change you. The
                &quot;must-read&quot; vibes.
              </p>
              <button className="bg-[var(--color-paper)] text-[var(--color-ink)] rounded-full p-3 hover:bg-[var(--color-accent)] border-2 border-transparent hover:border-[var(--color-ink)] transition-colors">
                <ArrowUpRight className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Small Card 1 */}
        <div className="relative group rounded-2xl border-2 border-[var(--color-ink)] overflow-hidden shadow-[var(--shadow-hard)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all bg-[var(--color-paper)]">
          <div
            className="absolute inset-0 bg-[radial-gradient(var(--color-accent)_2px,transparent_2px)] opacity-30"
            style={{ backgroundSize: "16px 16px" }}
          ></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
            <div className="w-16 h-16 bg-[var(--color-accent)] rounded-full flex items-center justify-center border-2 border-[var(--color-ink)] mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-8 h-8 stroke-[1.5]" />
            </div>
            <h3 className="text-2xl font-display tracking-tight text-[var(--color-ink)]">
              NON-FICTION
            </h3>
            <p className="text-sm opacity-60 font-semibold mt-1">
              Knowledge, Growth & Insight
            </p>
          </div>
        </div>

        {/* Small Card 2 */}
        <div className="relative group rounded-2xl border-2 border-[var(--color-ink)] overflow-hidden shadow-[var(--shadow-hard)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all bg-[var(--color-accent)]">
          <div className="absolute top-4 right-4">
            <span className="bg-[var(--color-ink)] text-[var(--color-accent)] text-[10px] font-bold px-2 py-1 rounded">
              NEW
            </span>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
            <div className="w-16 h-16 bg-[var(--color-paper)] rounded-full flex items-center justify-center border-2 border-[var(--color-ink)] mb-4 group-hover:scale-110 transition-transform">
              <Library className="w-8 h-8 stroke-[1.5]" />
            </div>
            <h3 className="text-2xl font-display tracking-tight text-[var(--color-ink)]">
              COLLECTIONS
            </h3>
            <p className="text-sm opacity-60 font-semibold mt-1">
              5 Books for $40
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
