import type { Metadata } from "next";
import Navigation from "@/components/home/Navigation";
import Footer from "@/components/home/Footer";
import ReleasesGrid from "@/components/releases/ReleasesGrid";
import { releases } from "@/data/releases";

export const metadata: Metadata = {
  title: "Best Sellers | Bookshelf",
  description:
    "Discover our bestselling books. Browse top-rated titles across all genres with comprehensive details, ratings, and reviews.",
};

export default function BestSellersPage() {
  // Filter books where bestseller is true
  const bestSellers = releases.filter((book) => book.bestseller);

  return (
    <div className="font-sans antialiased selection:bg-accent selection:text-ink min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Header */}
        <section className="py-8 sm:py-12 md:py-16 border-b-2 border-[var(--color-ink)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tighter mb-4">
              BEST SELLERS
            </h1>
            <p className="text-base sm:text-lg opacity-70 max-w-2xl">
              Explore our bestselling collection of books across all genres.
              These top-rated titles have captured readers' hearts with
              compelling stories, expert insights, and exceptional quality.
            </p>
          </div>
        </section>

        {/* Best Sellers Grid */}
        <section className="py-8 sm:py-12 md:py-16">
          <ReleasesGrid books={bestSellers} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
