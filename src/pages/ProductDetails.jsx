import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../services/productApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import SkeletonLoader from "../components/Loading";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const { data, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id,
  });

  if (isLoading || !data) return <div><SkeletonLoader/></div>;

  const isInCart = cartItems.some((item) => item.id === data.id);
  if (isLoading) return <div><SkeletonLoader/></div>;

  return (
    <div className="grid grid-cols-2 gap-10">
      <img src={data.images} className="h-96 object-contain mx-auto" />

      <div>
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <p className="text-gray-600 mb-6">{data.description}</p>

        <div className="text-2xl font-bold text-yellow-600 mb-6">
          ${data.price}
        </div>

        <button
          onClick={() => !isInCart && dispatch(addToCart(data))}
          disabled={isInCart}
          className={`px-6 py-3 rounded-lg text-white transition ${
            isInCart
              ? "bg-green-600 cursor-not-allowed"
              : "bg-yellow-500 hover:bg-yellow-600"
          }`}
        >
          {isInCart ? "Added" : "Add "}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
