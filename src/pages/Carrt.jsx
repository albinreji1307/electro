import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return <div className="text-center py-20">Cart is empty</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-white p-4 mb-4 rounded shadow"
        >
          <div className="flex items-center gap-4">
            <img src={item.images} className="h-16" />
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p>Qty: {item.quantity}</p>
            </div>
          </div>

          <div>
            <span className="font-bold">
              ${item.price * item.quantity}
            </span>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="ml-4 text-red-500"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="text-right mt-6">
        <h2 className="text-2xl font-bold">
          Total: ${total.toFixed(2)}
        </h2>
      </div>
    </div>
  );
};

export default Cart;