import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductList() {
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div>
      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="products">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <div key={product.id} className="product">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    disabled={cart.some((item) => item.id === product.id)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}