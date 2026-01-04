import type { Metadata } from "next";
import Footer from "@/components/home/Footer";
import ReleasesGrid from "@/components/releases/ReleasesGrid";
import { releases } from "@/data/releases";

export const metadata: Metadata = {
  title: "Collections | Bookshelf",
  description:
    "Browse our complete collection of books. Discover curated titles across all genres with comprehensive details, ratings, and reviews.",
};

export default function CollectionsPage() {
  return (
    <div className="font-sans antialiased selection:bg-accent selection:text-ink min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Header */}
        <section className="py-8 sm:py-12 md:py-16 border-b-2 border-[var(--color-ink)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tighter mb-4">
              COLLECTIONS
            </h1>
            <p className="text-base sm:text-lg opacity-70 max-w-2xl">
              Explore our complete collection of books across all genres. From
              bestsellers to hidden gems, discover your next great read with
              detailed information, ratings, and reviews.
            </p>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="py-8 sm:py-12 md:py-16">
          <ReleasesGrid books={releases} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
