import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/productApi";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Shop = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const products = data?.products || data;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search")?.toLowerCase() || "";

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortType, setSortType] = useState("default");
  const navigate = useNavigate();

  const handleReset = () => {
    setSelectedCategory("all");
    setSortType("default");
    navigate("/shop");
  };
  const searchedProducts = useMemo(() => {
    if (!searchQuery) return products;

    return products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery),
    );
  }, [products, searchQuery]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return searchedProducts;

    return searchedProducts.filter((p) => p.category === selectedCategory);
  }, [searchedProducts, selectedCategory]);

  const sortedProducts = useMemo(() => {
    let sorted = [...filteredProducts];

    if (sortType === "low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortType === "high") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortType === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    return sorted;
  }, [filteredProducts, sortType]);

  if (isLoading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg h-fit">
          <h2 className="font-semibold mb-4">Show All Categories</h2>

          <ul className="space-y-3">
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer text-sm ${
                  selectedCategory === cat
                    ? "text-yellow-600 font-semibold"
                    : "text-gray-600 hover:text-yellow-500"
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h1 className="text-2xl font-semibold">
              {searchQuery
                ? `Search results for "${searchQuery}"`
                : "Shop Products"}
            </h1>

            <div className="flex gap-4 items-center flex-wrap">
              <span className="text-sm text-gray-500">
                Showing {sortedProducts.length} results
              </span>

              <select
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
                className="border rounded px-3 py-2 text-sm"
              >
                <option value="default">Default sorting</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>

              {searchQuery && (
                <button
                  onClick={handleReset}
                  className="bg-gray-200 hover:bg-gray-300 text-sm px-4 py-2 rounded transition"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedProducts.length > 0 ? (
              sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 py-20">
                No products found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
