import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import { addToCart } from "../features/cart/cartSlice";
const FeaturedSection = ({ products }) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("featured");
  const filteredProducts =
    activeTab === "sale"
      ? products.filter((p) => p.discountPercentage > 10)
      : activeTab === "rated"
        ? products.filter((p) => p.rating >= 4)
        : products;

  const visibleProducts = filteredProducts.slice(0, 8);
  return (
    <div className="container mx-auto  py-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="border-2 border-yellow-400 rounded-xl p-6 relative">
          <h2 className="text-2xl font-semibold mb-4">Special Offer</h2>

          <div className="absolute top-6 right-6 bg-yellow-400 w-20 h-20 rounded-full flex flex-col justify-center items-center text-center font-bold">
            <span className="text-xs">Save</span>
            <span className="text-lg">$120</span>
          </div>

          <div className="flex justify-center my-6">
            <img
              src="https://pngimg.com/uploads/air_conditioner/air_conditioner_PNG22.png"
              alt="controller"
              className="h-48 object-contain"
            />
          </div>

          <p className="text-center font-medium text-blue-600">
            Game Console Controller + USB 3.0 Cable
          </p>

          <div className="text-center mt-3">
            <span className="line-through text-gray-500 mr-2">$99.00</span>
            <span className="text-red-600 text-2xl font-bold">$79.00</span>
          </div>

          <div className="mt-6 text-sm text-gray-600 flex justify-between">
            <span>
              Available: <strong>6</strong>
            </span>
            <span>
              Already Sold: <strong>28</strong>
            </span>
          </div>

          <div className="mt-2 h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-400 w-1/3"></div>
          </div>

          <div className="mt-6 text-center">
            <p className="mb-3 font-medium">Hurry Up! Offer ends in:</p>
            <div className="flex justify-center gap-3">
              {["00", "00", "00"].map((time, i) => (
                <div
                  key={i}
                  className="bg-gray-200 px-4 py-2 rounded text-lg font-bold"
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="flex gap-6 border-b mb-6">
            <button
              onClick={() => setActiveTab("featured")}
              className={`pb-2 font-medium ${
                activeTab === "featured"
                  ? "border-b-2 border-yellow-400 text-black"
                  : "text-gray-500"
              }`}
            >
              Featured
            </button>

            <button
              onClick={() => setActiveTab("sale")}
              className={`pb-2 font-medium ${
                activeTab === "sale"
                  ? "border-b-2 border-yellow-400 text-black"
                  : "text-gray-500"
              }`}
            >
              On Sale
            </button>

            <button
              onClick={() => setActiveTab("rated")}
              className={`pb-2 font-medium ${
                activeTab === "rated"
                  ? "border-b-2 border-yellow-400 text-black"
                  : "text-gray-500"
              }`}
            >
              Top Rated
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleProducts.length > 0 ? (
              visibleProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-lg hover:shadow-md transition"
                >
                  <Link to={`/product/${product.id}`}>
                    <p className="text-xs text-gray-500 mb-2">
                      {product.category}
                    </p>

                    <h3 className="text-sm font-medium line-clamp-2 min-h-[40px]">
                      {product.title}
                    </h3>

                    <div className="flex justify-center my-4">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="h-24 object-contain"
                      />
                    </div>
                  </Link>

                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-800">
                      ${product.price}
                    </span>

                    <button
                      onClick={() => dispatch(addToCart(product))}
                      className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition"
                    >
                      <FiShoppingCart />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No products found
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
