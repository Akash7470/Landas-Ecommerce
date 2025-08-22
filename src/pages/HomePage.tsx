import Navbar from "../shared/components/Navbar";
import Hero from "../shared/components/Hero";
import CategoryGrid from "../shared/components/CategoryGrid";
import ProductGrid from "../shared/components/ProductGrid";
import PromoBanner from "../shared/components/PromoBanner";
import Footer from "../shared/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-dvh flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <section className="container mx-auto px-4 py-10">
          <h2 className="sr-only">Categories</h2>
          <CategoryGrid />
        </section>
        <section className="container mx-auto px-4 pb-10">
          <h2 className="sr-only">Featured Products</h2>
          <ProductGrid />
        </section>
        <PromoBanner />
      </main>
      <Footer />
    </div>
  );
}