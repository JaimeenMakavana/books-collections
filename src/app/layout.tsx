import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bookshelf | Curated Book Collections",
  description:
    "Discover curated collections of authentic books. Read like a million minds with our handpicked selection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
