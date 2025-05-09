import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';
import '../styles/ShoppingCart.css';

const ShoppingCart = () => {
  const { cart, removeFromCart, updateCartItemQuantity } = useContext(CartContext);

  // Calculate total considering quantity
  const total = cart.reduce(
    (acc, product) => acc + parseFloat(product.price.slice(1)) * product.quantity,
    0
  );

  return (
    <div className="Shopcontainer mt-5">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {cart.map((product) => (
              <li
                key={product.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '50px', marginRight: '10px' }}
                  />
                  <strong style={{ marginRight: '10px' }}>{product.name}</strong>
                  <p style={{ margin: 0 }}>{product.price}</p> {/* Price next to product name */}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <button
                    className="btn btn-light"
                    onClick={() => updateCartItemQuantity(product.id, product.quantity - 1)}
                    disabled={product.quantity <= 1} // Disable if quantity is 1
                  >
                    -
                  </button>
                  <p style={{ margin: 0 }}>{product.quantity}</p> {/* Show quantity */}
                  <button
                    className="btn btn-light"
                    onClick={() => updateCartItemQuantity(product.id, product.quantity + 1)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(product.id)} // Remove the entire product
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          <Link to="/checkout" className="btn btn-success">
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;




