import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css'; // Assuming you have a CSS file for styling

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <LazyLoadImage src={product.image} alt={product.name} effect="blur" className="product-image" />
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price}</p>
      </Link>
      <button onClick={() => addToCart(product)} className="btn">Add to Cart</button>
    </div>
  );
};

export default ProductCard;








