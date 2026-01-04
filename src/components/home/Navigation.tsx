"use client";

import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/contexts/CartContext";

export default function Navigation() {
  const { itemCount } = useCart();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize Lucide icons if needed
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Helper function to check if a link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    // For genre routes, check if pathname starts with /genre
    if (href === "/genre") {
      return pathname.startsWith("/genre");
    }
    return pathname.startsWith(href);
  };

  // Active link styles
  const activeLinkClass =
    "text-[var(--color-accent)] bg-[var(--color-ink)] px-3 py-1 rounded transition-colors";
  const inactiveLinkClass =
    "hover:text-[var(--color-accent)] hover:bg-[var(--color-ink)] px-3 py-1 rounded transition-colors";

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[var(--color-paper)] py-2">
        <nav className="bg-[var(--color-paper)]/80 backdrop-blur-md border-2 border-[var(--color-ink)] rounded-lg md:rounded-xl shadow-[var(--shadow-hard)] flex justify-between items-center p-2 sm:p-3 md:p-4 gap-2 sm:gap-4 mx-2 sm:mx-4 md:mx-8">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1.5 sm:p-2 hover:bg-[var(--color-accent)] rounded-lg border border-transparent hover:border-[var(--color-ink)] transition-all flex-shrink-0"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
            )}
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="text-xl sm:text-2xl md:text-3xl font-display tracking-tighter flex items-center gap-1 flex-shrink-0"
          >
            BOOK
            <span
              className="text-[var(--color-accent)]"
              style={{ WebkitTextStroke: "1px var(--color-ink)" }}
            >
              SHELF
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold text-sm tracking-tight">
            <Link
              href="/releases"
              className={
                isActive("/releases") ? activeLinkClass : inactiveLinkClass
              }
            >
              NEW RELEASES
            </Link>
            <Link
              href="/best-sellers"
              className={
                isActive("/best-sellers") ? activeLinkClass : inactiveLinkClass
              }
            >
              BESTSELLERS
            </Link>
            <Link
              href="/genre"
              className={
                isActive("/genre") ? activeLinkClass : inactiveLinkClass
              }
            >
              GENRES
            </Link>
            <Link
              href="/collections"
              className={
                isActive("/collections") ? activeLinkClass : inactiveLinkClass
              }
            >
              COLLECTIONS
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="hidden md:block hover:bg-[var(--color-accent)] rounded-lg p-2 border border-transparent hover:border-[var(--color-ink)] transition-all">
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>
            <Link
              href="/cart"
              className="bg-[var(--color-ink)] text-[var(--color-accent)] px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg font-display text-xs sm:text-sm border-2 border-[var(--color-ink)] hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)] transition-colors flex items-center gap-1 sm:gap-2 whitespace-nowrap"
            >
              <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">CART</span>
              <span className="xs:hidden">({itemCount})</span>
              <span className="hidden xs:inline">({itemCount})</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 bg-[var(--color-paper)] border-b-2 border-[var(--color-ink)] shadow-[var(--shadow-hard)] transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ height: "fit-content" }}
      >
        <div className="p-4 space-y-2">
          {/* Search Button */}
          <button className="w-full flex items-center gap-3 p-3 hover:bg-[var(--color-accent)] rounded-lg border-2 border-[var(--color-ink)] transition-colors">
            <Search className="w-5 h-5 stroke-[1.5]" />
            <span className="font-semibold text-sm">SEARCH</span>
          </button>

          {/* Navigation Links */}
          <Link
            href="/releases"
            onClick={() => setIsMenuOpen(false)}
            className={`block w-full p-3 rounded-lg border-2 border-[var(--color-ink)] transition-colors font-semibold text-sm ${
              isActive("/releases")
                ? "bg-[var(--color-ink)] text-[var(--color-accent)]"
                : "hover:bg-[var(--color-accent)]"
            }`}
          >
            NEW RELEASES
          </Link>
          <Link
            href="/best-sellers"
            onClick={() => setIsMenuOpen(false)}
            className={`block w-full p-3 rounded-lg border-2 border-[var(--color-ink)] transition-colors font-semibold text-sm ${
              isActive("/best-sellers")
                ? "bg-[var(--color-ink)] text-[var(--color-accent)]"
                : "hover:bg-[var(--color-accent)]"
            }`}
          >
            BESTSELLERS
          </Link>
          <Link
            href="/genre"
            onClick={() => setIsMenuOpen(false)}
            className={`block w-full p-3 rounded-lg border-2 border-[var(--color-ink)] transition-colors font-semibold text-sm ${
              isActive("/genre")
                ? "bg-[var(--color-ink)] text-[var(--color-accent)]"
                : "hover:bg-[var(--color-accent)]"
            }`}
          >
            GENRES
          </Link>
          <Link
            href="/collections"
            onClick={() => setIsMenuOpen(false)}
            className={`block w-full p-3 rounded-lg border-2 border-[var(--color-ink)] transition-colors font-semibold text-sm ${
              isActive("/collections")
                ? "bg-[var(--color-ink)] text-[var(--color-accent)]"
                : "hover:bg-[var(--color-accent)]"
            }`}
          >
            COLLECTIONS
          </Link>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
