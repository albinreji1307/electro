import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productApi";
import FeaturedSection from "../components/FeatureSection";
import ProductCard from "../components/ProductCard";
import PromoBanner from "../components/Banner";
import ProductColumnsSection from "../components/productColoum";
import SkeletonLoader from "../components/Loading";

const heroProducts = [
  {
    image: "https://pngimg.com/uploads/tablet/tablet_PNG8600.png",
    price: "29.99",
  },
  {
    image: "https://pngimg.com/uploads/headphones/headphones_PNG101980.png",
    price: "49.99",
  },
  {
    image: "https://pngimg.com/uploads/laptop/laptop_PNG101820.png",
    price: "399.99",
  },
  {
    image: "https://pngimg.com/uploads/iphone17/iphone17_PNG38.png",
    price: "599.99",
  },
  {
    image: "https://pngimg.com/uploads/watches/watches_PNG101443.png",
    price: "89.99",
  },
  {
    image:
      "https://pngimg.com/uploads/audio_speakers/audio_speakers_PNG11118.png",
    price: "69.99",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  const { data = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const products = data;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroProducts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) return <div className="text-center py-20"><SkeletonLoader/></div>;

  return (
    <div>
      <div className="bg-gray-100 relative mb-10">
        <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-light text-gray-700 leading-snug">
              SHOP AND <span className="font-bold text-gray-900">SAVE BIG</span>{" "}
              ON HOTTEST PRODUCTS
            </h2>

            <button
              onClick={() =>
                document
                  .getElementById("bottom-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg transition shadow-md"
            >
              Explore More
            </button>
          </div>

          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[420px] lg:h-[320px] flex items-center justify-center">
            {heroProducts.map((item, index) => (
              <img
                key={index}
                src={item.image}
                alt="product"
                className={`absolute max-h-full max-w-full object-contain transition-opacity duration-1000 ${
                  current === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
            <div className="bg-yellow-400 px-6 py-4 rounded-2xl shadow-lg">
              <p className="text-xs uppercase font-semibold text-gray-700">
                Starting at
              </p>
              <p className="text-2xl font-bold text-gray-900">
                ${heroProducts[current].price}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="bottom-section"
        className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10"
      >
        {products.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <FeaturedSection products={products} />

      <PromoBanner />
      <ProductColumnsSection products={products} />
    </div>
  );
};

export default Home;
