import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import Navigation from "@/components/home/Navigation";

export const metadata: Metadata = {
  title: "Bookshelf | Curated Book Collections",
  description:
    "Discover curated collections of authentic books. Read like a million minds with our handpicked selection.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased h-dvh">
        <CartProvider>
          <Navigation />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
