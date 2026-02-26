import { Link } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 hover:shadow-lg transition duration-300 flex flex-col">
      <Link to={`/product/${product.id}`} className="flex-1">
        <div className="flex justify-center items-center h-32 sm:h-40">
          <img
            src={product.images?.[0] || product.image}
            alt={product.title}
            className="max-h-full object-contain"
          />
        </div>
      </Link>

      <div className="hidden lg:block">
        <h3 className="mt-3 text-base font-medium line-clamp-2 min-h-[40px]">
          {product.title}
        </h3>

        <div className="mt-3 flex justify-between items-center">
          <span className="text-yellow-600 font-bold text-base">
            ${product.price}
          </span>

          <button
            onClick={() => !isInCart && dispatch(addToCart(product))}
            disabled={isInCart}
            className={`px-4 py-2 rounded-lg text-white transition ${
              isInCart
                ? "bg-green-600 cursor-not-allowed"
                : "bg-yellow-500 hover:bg-yellow-600"
            }`}
          >
            {isInCart ? "Added" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
