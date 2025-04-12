import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products'; // Ensure you have a data file or API for products
import '../styles/ProductDetail.css'; // Add CSS file for styling

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detailpage">
      <div className="product-infopage">
        <img src={product.image} alt={product.name} className="product-detail-imagepage" />
        <div className="product-textpage">
          <h2>{product.name}</h2>
          <p className="product-descriptionpage">{product.description}</p>
          <p className="product-pricepage">Price: {product.price}</p>
          <h3>Ingredients</h3>
          <ul className="product-ingredientspage">
            {product.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;


