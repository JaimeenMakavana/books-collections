import MarqueeBanner from "@/components/home/MarqueeBanner";
import Navigation from "@/components/home/Navigation";
import Hero from "@/components/home/Hero";
import ScrollingTicker from "@/components/home/ScrollingTicker";
import CategoriesGrid from "@/components/home/CategoriesGrid";
import WhyUs from "@/components/home/WhyUs";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="font-sans antialiased selection:bg-accent selection:text-ink">
      <MarqueeBanner />
      <Navigation />
      <Hero />
      <ScrollingTicker />
      <CategoriesGrid />
      <WhyUs />
      <FeaturedBooks />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
