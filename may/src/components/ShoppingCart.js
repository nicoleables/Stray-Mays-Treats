import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';
import '../styles/ShoppingCart.css';

const ShoppingCart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((acc, product) => acc + parseFloat(product.price.slice(1)), 0); // Calculate total price

  return (
    <div className="Shopcontainer mt-5">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {cart.map((product) => (
              <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <img src={product.image} alt={product.name} style={{ width: '50px', marginRight: '10px' }} />
                  <strong>{product.name}</strong>
                  <p>{product.price}</p>
                </div>
                <button className="btn btn-danger" onClick={() => removeFromCart(product.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          <Link to="/checkout" className="btn btn-success">Proceed to Checkout</Link>  {/* Add checkout button */}
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;


