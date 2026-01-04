'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, Filter, Grid, List } from 'lucide-react';
import BookCard from './BookCard';
import type { BookRelease } from '@/data/releases';

interface ReleasesGridProps {
  books: BookRelease[];
}

type SortOption = 'newest' | 'oldest' | 'price-low' | 'price-high' | 'rating' | 'title';
type FilterOption = 'all' | 'bestseller' | 'in-stock' | 'pre-order';

export default function ReleasesGrid({ books }: ReleasesGridProps) {
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [filterBy, setFilterBy] = useState<FilterOption>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Filter books
  const filteredBooks = books.filter((book) => {
    if (filterBy === 'bestseller') return book.bestseller;
    if (filterBy === 'in-stock') return book.stockStatus === 'in-stock';
    if (filterBy === 'pre-order') return book.stockStatus === 'pre-order';
    return true;
  });

  // Sort books
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
      case 'oldest':
        return new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime();
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedBooks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBooks = sortedBooks.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      {/* Controls */}
      <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          {/* Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
            <select
              value={filterBy}
              onChange={(e) => {
                setFilterBy(e.target.value as FilterOption);
                setCurrentPage(1);
              }}
              className="border-2 border-[var(--color-ink)] rounded-lg px-3 py-1.5 text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            >
              <option value="all">All Books</option>
              <option value="bestseller">Bestsellers</option>
              <option value="in-stock">In Stock</option>
              <option value="pre-order">Pre-Order</option>
            </select>
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value as SortOption);
              setCurrentPage(1);
            }}
            className="border-2 border-[var(--color-ink)] rounded-lg px-3 py-1.5 text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="title">Title A-Z</option>
          </select>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2 border-2 border-[var(--color-ink)] rounded-lg p-1">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded ${viewMode === 'grid' ? 'bg-[var(--color-ink)] text-[var(--color-accent)]' : 'hover:bg-[var(--color-accent)]'}`}
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded ${viewMode === 'list' ? 'bg-[var(--color-ink)] text-[var(--color-accent)]' : 'hover:bg-[var(--color-accent)]'}`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4 text-sm opacity-70">
        Showing {paginatedBooks.length} of {sortedBooks.length} books
      </div>

      {/* Books Grid/List */}
      {viewMode === 'grid' ? (
        <div className="flex overflow-x-auto gap-4 sm:gap-6 md:gap-8 pb-8 sm:pb-12 no-scrollbar snap-x snap-mandatory max-w-[100vw]">
          {paginatedBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="space-y-4 mb-8">
          {paginatedBooks.map((book) => (
            <div
              key={book.id}
              className="border-2 border-[var(--color-ink)] rounded-xl p-4 sm:p-6 hover:shadow-[var(--shadow-hard)] transition-shadow"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-32 flex-shrink-0">
                  <div className={`aspect-square bg-gradient-to-br ${book.coverColor} rounded-lg`} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl mb-1">{book.title}</h3>
                      <p className="text-sm opacity-70 mb-2">{book.author}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg sm:text-xl bg-[var(--color-accent)]/30 px-2 rounded inline-block">
                        ${book.price.toFixed(2)}
                      </div>
                      {book.originalPrice && (
                        <div className="text-xs line-through opacity-40">${book.originalPrice.toFixed(2)}</div>
                      )}
                    </div>
                  </div>
                  <p className="text-sm opacity-80 mb-3 line-clamp-2">{book.description}</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                    <span className="opacity-60">{book.genres.join(' • ')}</span>
                    <span className="opacity-60">•</span>
                    <span className="opacity-60">{book.format}</span>
                    <span className="opacity-60">•</span>
                    <span className="opacity-60">{book.pageCount} pages</span>
                    <span className="opacity-60">•</span>
                    <span className="opacity-60">Rating: {book.rating} ({book.reviewCount.toLocaleString()})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-8 mb-12">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="w-10 h-10 border-2 border-[var(--color-ink)] rounded-lg flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="w-10 h-10 border-2 border-[var(--color-ink)] rounded-lg flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}

