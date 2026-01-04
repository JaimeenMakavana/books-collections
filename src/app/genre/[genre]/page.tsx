import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import ReleasesGrid from '@/components/releases/ReleasesGrid';
import { releases } from '@/data/releases';
import type { BookRelease } from '@/data/releases';

// Generate static params for all genres
export async function generateStaticParams() {
  const allGenres = new Set<string>();
  releases.forEach((book) => {
    book.genres.forEach((genre) => {
      allGenres.add(genre.toLowerCase().replace(/\s+/g, '-'));
    });
  });
  return Array.from(allGenres).map((genre) => ({ genre }));
}

// Normalize genre name for comparison
function normalizeGenre(genreParam: string): string {
  return genreParam.replace(/-/g, ' ').toLowerCase();
}

// Find matching genre from book genres (case-insensitive, handles spaces/dashes)
function findMatchingGenre(genreParam: string, bookGenres: string[]): string | null {
  const normalized = normalizeGenre(genreParam);
  return bookGenres.find((g) => g.toLowerCase() === normalized) || null;
}

// Get books for a specific genre
function getBooksByGenre(genreParam: string): BookRelease[] {
  const books = releases.filter((book) => {
    return book.genres.some((genre) => {
      const normalized = normalizeGenre(genreParam);
      return genre.toLowerCase() === normalized;
    });
  });
  return books;
}

// Get genre display name from URL param
function getGenreDisplayName(genreParam: string): string {
  const books = releases;
  for (const book of books) {
    for (const genre of book.genres) {
      if (normalizeGenre(genre) === normalizeGenre(genreParam)) {
        return genre;
      }
    }
  }
  return genreParam.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
}

interface GenrePageProps {
  params: Promise<{ genre: string }>;
}

export async function generateMetadata({ params }: GenrePageProps): Promise<Metadata> {
  const { genre } = await params;
  const displayName = getGenreDisplayName(genre);
  const books = getBooksByGenre(genre);

  if (books.length === 0) {
    return {
      title: 'Genre Not Found | Bookshelf',
    };
  }

  return {
    title: `${displayName} Books | Bookshelf`,
    description: `Discover our collection of ${displayName.toLowerCase()} books. Browse ${books.length} titles with detailed information, ratings, and reviews.`,
  };
}

export default async function GenrePage({ params }: GenrePageProps) {
  const { genre } = await params;
  const books = getBooksByGenre(genre);
  const displayName = getGenreDisplayName(genre);

  if (books.length === 0) {
    notFound();
  }

  return (
    <div className="font-sans antialiased selection:bg-accent selection:text-ink min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Header */}
        <section className="py-8 sm:py-12 md:py-16 border-b-2 border-[var(--color-ink)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tighter mb-4">
              {displayName.toUpperCase()}
            </h1>
            <p className="text-base sm:text-lg opacity-70 max-w-2xl">
              Explore our collection of {displayName.toLowerCase()} books. Discover {books.length} carefully curated
              titles with detailed information, ratings, and reviews to help you find your next great read.
            </p>
          </div>
        </section>

        {/* Genre Books Grid */}
        <section className="py-8 sm:py-12 md:py-16">
          <ReleasesGrid books={books} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

