import { useState } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

const products = [
  {
    name: "LUMEN",
    fullName: "LUMEN Eau De Toilette",
    price: "$100.00",
    size: "60ml Glass Bottle",
    image: "https://images.unsplash.com/photo-1759793500112-c588839cfc6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnbGFzcyUyMHBlcmZ1bWUlMjBib3R0bGUlMjBibGFja3xlbnwxfHx8fDE3NzIxMzI1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "MINÉRALEWAVE",
    fullName: "MINÉRALEWAVE Eau De Toilette",
    price: "$100.00",
    size: "60ml Glass Bottle",
    image: "https://images.unsplash.com/photo-1759793500112-c588839cfc6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnbGFzcyUyMHBlcmZ1bWUlMjBib3R0bGUlMjBibGFja3xlbnwxfHx8fDE3NzIxMzI1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "VECTOR",
    fullName: "VECTOR Eau De Toilette",
    price: "$100.00",
    size: "60ml Glass Bottle",
    image: "https://images.unsplash.com/photo-1759793500112-c588839cfc6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnbGFzcyUyMHBlcmZ1bWUlMjBib3R0bGUlMjBibGFja3xlbnwxfHx8fDE3NzIxMzI1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "AETHER",
    fullName: "AETHER Eau De Toilette",
    price: "$100.00",
    size: "60ml Glass Bottle",
    image: "https://images.unsplash.com/photo-1759793500112-c588839cfc6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnbGFzcyUyMHBlcmZ1bWUlMjBib3R0bGUlMjBibGFja3xlbnwxfHx8fDE3NzIxMzI1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "BLANC",
    fullName: "BLANC Eau De Toilette",
    price: "$100.00",
    size: "60ml Glass Bottle",
    image: "https://images.unsplash.com/photo-1759793500112-c588839cfc6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnbGFzcyUyMHBlcmZ1bWUlMjBib3R0bGUlMjBibGFja3xlbnwxfHx8fDE3NzIxMzI1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "VERDE",
    fullName: "VERDE Eau De Toilette",
    price: "$100.00",
    size: "60ml Glass Bottle",
    image: "https://images.unsplash.com/photo-1759793500112-c588839cfc6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnbGFzcyUyMHBlcmZ1bWUlMjBib3R0bGUlMjBibGFja3xlbnwxfHx8fDE3NzIxMzI1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function ProductsPage() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("product-carousel");
    if (container) {
      const scrollAmount = 400;
      const newPosition =
        direction === "left"
          ? Math.max(0, scrollPosition - scrollAmount)
          : scrollPosition + scrollAmount;

      container.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="bg-white text-black min-h-screen pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Section 1: All Scents Carousel */}
        <div className="mb-20 md:mb-32">
          <h2
            className="text-3xl md:text-5xl lg:text-6xl mb-8 md:mb-12"
            style={{ fontFamily: "'Bodoni Moda', serif" }}
          >OUR PRODUCTS COLLECTION</h2>

          <div className="relative">
            <div
              id="product-carousel"
              className="flex gap-4 md:gap-8 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {products.map((product) => (
                <div
                  key={product.name}
                  className="flex-none w-80 group"
                >
                  <div className="bg-neutral-50 mb-6 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.fullName}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3
                      className="text-2xl"
                      style={{ fontFamily: "'Bodoni Moda', serif" }}
                    >
                      {product.fullName}
                    </h3>
                    <p className="text-lg">
                      {product.price} <span className="text-black/60">For {product.size}</span>
                    </p>
                    <button className="flex items-center gap-2 text-sm border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Navigation */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Section 2: Discovery Kit */}
        <div className="mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center bg-black text-white p-12">
            <div>
              <img
                src="/asset/discovery kit.png"
                alt="Discovery Kit"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3
                className="text-4xl md:text-5xl"
                style={{ fontFamily: "'Bodoni Moda', serif" }}
              >
                YSL Les Pouvoirs de Sillage
              </h3>
              <p className="text-3xl text-[#C2813F]">$65.00</p>
              <p className="text-lg text-white/80">
                For Discovery Kit. 6 YSL Les Pouvoirs de Sillage (5 ml cartridge refillable)
              </p>
              <button className="flex items-center gap-2 border border-white px-8 py-4 hover:bg-white hover:text-black transition-colors">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Section 3: Travel Dual Spray */}
        <div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/asset/dual.png"
                alt="Travel Dual Spray"
                className="w-full h-96 object-contain"
              />
            </div>
            <div className="space-y-6">
              <h3
                className="text-4xl md:text-5xl"
                style={{ fontFamily: "'Bodoni Moda', serif" }}
              >
                YSL Travel Dual Spray
              </h3>
              <p className="text-2xl">
                $50.00 <span className="text-lg text-black/60">For YSL Travel Dual Spray from YSL Collection Series</span>
              </p>
              <p className="text-lg text-black/70">
                A luxury dual spray designed to hold two fragrance expressions in one compact format.
              </p>
              <button className="flex items-center gap-2 border border-black px-8 py-4 hover:bg-black hover:text-white transition-colors">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}