import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import { releases } from '@/data/releases';

export const metadata: Metadata = {
  title: 'Browse by Genre | Bookshelf',
  description: 'Explore books by genre. Browse our collection organized by categories including Fiction, Non-Fiction, Science, Technology, and more.',
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
  return genre.toLowerCase().replace(/\s+/g, '-');
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
              Explore our collection organized by genre. Find your next favorite book by browsing categories that match
              your interests.
            </p>
          </div>
        </section>

        {/* Genres Grid */}
        <section className="py-8 sm:py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {genres.map(({ genre, count }) => (
                <Link
                  key={genre}
                  href={`/genre/${genreToSlug(genre)}`}
                  className="border-2 border-[var(--color-ink)] rounded-xl p-4 sm:p-6 hover:shadow-[var(--shadow-hard)] hover:bg-[var(--color-accent)] transition-all group"
                >
                  <h3 className="font-display text-lg sm:text-xl mb-2 group-hover:text-[var(--color-ink)] transition-colors">
                    {genre}
                  </h3>
                  <p className="text-sm opacity-60">
                    {count} {count === 1 ? 'book' : 'books'}
                  </p>
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

