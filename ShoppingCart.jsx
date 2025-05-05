import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../redux/cartSlice";

export default function ShoppingCart() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart ({totalItems} items)</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
        </div>
      ))}
      <p>Total: ${totalCost.toFixed(2)}</p>
      <button disabled>Checkout (Coming Soon)</button>
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}