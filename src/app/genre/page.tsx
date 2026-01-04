import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/home/Navigation";
import Footer from "@/components/home/Footer";
import { releases } from "@/data/releases";

export const metadata: Metadata = {
  title: "Browse by Genre | Bookshelf",
  description:
    "Explore books by genre. Browse our collection organized by categories including Fiction, Non-Fiction, Science, Technology, and more.",
};

// Get all unique genres with book counts
function getAllGenres() {
  const genreMap = new Map<string, number>();
  releases.forEach((book) => {
    book.genres.forEach((genre) => {
      const count = genreMap.get(genre) || 0;
      genreMap.set(genre, count + 1);
    });
  });
  return Array.from(genreMap.entries())
    .map(([genre, count]) => ({ genre, count }))
    .sort((a, b) => b.count - a.count);
}

// Convert genre name to URL slug
function genreToSlug(genre: string): string {
  return genre.toLowerCase().replace(/\s+/g, "-");
}

export default function GenresPage() {
  const genres = getAllGenres();

  return (
    <div className="font-sans antialiased selection:bg-accent selection:text-ink min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Header */}
        <section className="py-8 sm:py-12 md:py-16 border-b-2 border-[var(--color-ink)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tighter mb-4">
              BROWSE BY GENRE
            </h1>
            <p className="text-base sm:text-lg opacity-70 max-w-2xl">
              Explore our collection organized by genre. Find your next favorite
              book by browsing categories that match your interests.
            </p>
          </div>
        </section>

        {/* Genres Grid */}
        {/* Genres Grid */}
        <section className="py-8 sm:py-12 md:py-16 relative">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
            <div className="absolute top-10 left-10 w-72 h-72 bg-[var(--color-accent)] rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--color-ink)] rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative">
            {/* Section title */}
            <div className="mb-8 sm:mb-12">
              <h2 className="font-display text-2xl sm:text-3xl tracking-tight mb-2 inline-block">
                ALL GENRES
              </h2>
              <div className="h-1 w-20 bg-[var(--color-accent)]"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {genres.map(({ genre, count }, index) => (
                <Link
                  key={genre}
                  href={`/genre/${genreToSlug(genre)}`}
                  className="relative border-2 border-[var(--color-ink)] rounded-xl p-4 sm:p-6 hover:shadow-[var(--shadow-hard)] hover:bg-[var(--color-accent)] transition-all duration-300 group overflow-hidden"
                  style={{
                    animationDelay: `${index * 30}ms`,
                  }}
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-xl"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-xl"></div>

                  {/* Number badge */}
                  <div className="absolute top-2 left-2 w-6 h-6 sm:w-8 sm:h-8 bg-[var(--color-ink)] text-[var(--color-paper)] rounded-full flex items-center justify-center text-xs sm:text-sm font-bold opacity-20 group-hover:opacity-100 transition-opacity">
                    {index + 1}
                  </div>

                  <div className="relative">
                    <h3 className="font-display text-lg sm:text-xl mb-2 group-hover:text-[var(--color-ink)] transition-colors leading-tight">
                      {genre}
                    </h3>

                    {/* Book count with icon */}
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-px bg-[var(--color-ink)] opacity-20"></div>
                      <p className="text-sm opacity-60 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        <span className="font-bold">{count}</span>
                        <span>{count === 1 ? "book" : "books"}</span>
                      </p>
                    </div>

                    {/* Hover arrow indicator */}
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
