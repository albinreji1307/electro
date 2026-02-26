import { FaStar } from "react-icons/fa";

const ProductColumnsSection = ({ products }) => {
  const featured = products.slice(0, 3);
  const onSale = products.filter((p) => p.discountPercentage > 10).slice(0, 3);
  const topRated = products.filter((p) => p.rating >= 4).slice(0, 3);

  const ProductItem = ({ product }) => (
    <div className="flex items-center gap-4 py-4 border-b last:border-none">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-16 h-16 object-contain"
      />

      <div>
        <h4 className="text-blue-700 font-medium text-sm hover:underline cursor-pointer">
          {product.title}
        </h4>

        {product.rating && (
          <div className="flex text-yellow-400 text-xs mt-1">
            {Array.from({ length: Math.round(product.rating) }).map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        )}

        <div className="mt-1">
          <span className="font-semibold text-gray-800">${product.price}</span>

          {product.discountPercentage > 10 && (
            <span className="line-through text-gray-400 text-sm ml-2">
              ${(product.price + 100).toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white-100 py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b-2 border-yellow-400 inline-block">
              Featured Products
            </h3>
            {featured.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 border-b-2 border-yellow-400 inline-block">
              Onsale Products
            </h3>
            {onSale.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 border-b-2 border-yellow-400 inline-block">
              Top Rated Products
            </h3>
            {topRated.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <img
            src="https://pngimg.com/uploads/xbox/xbox_PNG101374.png"
            alt="promo"
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductColumnsSection;
