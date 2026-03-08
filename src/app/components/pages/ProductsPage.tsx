import { useState } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const products = [
  {
    name: "FLORENT",
    fullName: "FLORENT Eau De Toilette",
    price: "$100.00",
    size: "60ml Glass Bottle",
    image: "/asset/florent.png",
  },
  {
    name: "MINÉRALEWAVE",
    fullName: "MINÉRALEWAVE Eau De Toilette",
    price: "$100.00",
    size: "60ml Glass Bottle",
    image: "/asset/minerale.png",
  },
  {
    name: "VECTOR",
    fullName: "VECTOR Eau De Toilette",
    price: "$100.00",
    size: "60ml Glass Bottle",
    image: "/asset/vector.png",
  },
  {
    name: "AETHER",
    fullName: "AETHER Eau De Toilette",
    price: "$100.00",
    size: "60ml Glass Bottle",
    image: "/asset/aether.png",
  },
  {
    name: "BLANC",
    fullName: "BLANC Eau De Toilette",
    price: "$100.00",
    size: "60ml Glass Bottle",
    image: "/asset/blanc.png",
  },
  {
    name: "NEROLI",
    fullName: "NEROLI Eau De Toilette",
    price: "$100.00",
    size: "60ml Glass Bottle",
    image: "/asset/neroli.png",
  },
];

export function ProductsPage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [carouselApi, setCarouselApi] = useState<any>(null);

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

  const handleCarouselScroll = (direction: "left" | "right") => {
    if (carouselApi) {
      if (direction === "left") {
        carouselApi.scrollPrev();
      } else {
        carouselApi.scrollNext();
      }
    }
  };

  return (
    <div className="bg-white text-black min-h-screen pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Section 1: All Scents Carousel */}
        <div className="mb-20 md:mb-32">
          <h2
            className="text-3xl md:text-5xl lg:text-6xl mb-8 md:mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
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
                      style={{ fontFamily: "'Playfair Display', serif" }}
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
                style={{ fontFamily: "'Playfair Display', serif" }}
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
      </div>

      {/* Section 3: Travel Dual Spray - Full Width */}
      <div>
        {/* 3D Video - Full Screen Width */}
        <div className="relative w-screen h-auto -ml-[calc(50vw-50%)]">
          <video
            src="/asset/3d video.mp4"
            autoPlay
            loop
            muted
            playsInline /* THIS IS THE FIX FOR MOBILE */
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product Info & Carousel Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-12 space-y-12 py-20">
          {/* Image Carousel */}
          <div className="relative">
            <Carousel className="w-full" setApi={setCarouselApi}>
              <CarouselContent>
                <CarouselItem>
                  <div className="bg-neutral-50 overflow-hidden">
                    <img
                      src="/asset/dual spray.png"
                      alt="Dual"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-neutral-50 overflow-hidden">
                    <img
                      src="/asset/dual dual.PNG"
                      alt="Dual Spray"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-neutral-50 overflow-hidden">
                    <img
                      src="/asset/dual color.png"
                      alt="Dual Color"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>

            {/* Carousel Navigation - Left and Right Overlay */}
            <button
              onClick={() => handleCarouselScroll("left")}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 border border-black bg-white flex items-center justify-center hover:bg-black hover:text-white transition-colors z-10"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => handleCarouselScroll("right")}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 border border-black bg-white flex items-center justify-center hover:bg-black hover:text-white transition-colors z-10"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            <h3
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
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
  );
}